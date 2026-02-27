#!/usr/bin/env node
// ── Pre-render Thermal Atlas ──
// Generates the 8192×8192 sprite sheet (365 daily temperature frames)
// as a static JPEG so the browser can fetch it instantly instead of
// computing it in a Web Worker on first visit.
//
// Usage: npm run build:atlas
// Output: data/thermal-atlas-thermal-10.jpg (~8–12 MB)

import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { renderPixelData } from "../thermal-render.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// ── Config (must match globe.js defaults + thermal-worker.js constants) ──
const COLORWAY = "thermal";
const BLUR_RADIUS = 10;
const FRAME_W = 512;
const FRAME_H = 256;
const ATLAS_COLS = 16;
const JPEG_QUALITY = 92;

// ── Load binary grid data ──
const binPath = resolve(ROOT, "data/globe-grid.bin");
console.log(`Reading ${binPath}...`);
const rawBuf = readFileSync(binPath);

// Parse header (same format as loadThermalData in thermal-layer.js)
const view = new DataView(rawBuf.buffer, rawBuf.byteOffset, rawBuf.byteLength);
const numDays = view.getUint16(0, true);
const numPoints = view.getUint16(2, true);
const allTemps = new Float32Array(rawBuf.buffer, rawBuf.byteOffset + 8);

console.log(`Grid: ${numDays} days × ${numPoints} points (${(rawBuf.byteLength / 1024 / 1024).toFixed(1)} MB)`);

// ── Compute atlas dimensions ──
const atlasRows = Math.ceil(numDays / ATLAS_COLS);
const atlasW = ATLAS_COLS * FRAME_W; // 8192
const rawH = atlasRows * FRAME_H; // 5888
const atlasH = Math.pow(2, Math.ceil(Math.log2(rawH))); // 8192 (power-of-2)

console.log(`Atlas: ${atlasW}×${atlasH} (${ATLAS_COLS} cols × ${atlasRows} rows, ${FRAME_W}×${FRAME_H} frames)`);

// ── Allocate output RGBA buffer (white fill for empty slots) ──
const rgba = Buffer.alloc(atlasW * atlasH * 4, 255);

// ── Render each day ──
const opts = { colorway: COLORWAY, blurRadius: BLUR_RADIUS };
const t0 = performance.now();

for (let day = 0; day < numDays; day++) {
  const dayTemps = allTemps.subarray(day * numPoints, (day + 1) * numPoints);
  const pixels = renderPixelData(dayTemps, opts, FRAME_W, FRAME_H);

  // Stamp into atlas grid
  const col = day % ATLAS_COLS;
  const row = Math.floor(day / ATLAS_COLS);
  const ox = col * FRAME_W;
  const oy = row * FRAME_H;

  for (let y = 0; y < FRAME_H; y++) {
    const srcOff = y * FRAME_W * 4;
    const dstOff = ((oy + y) * atlasW + ox) * 4;
    rgba.set(pixels.subarray(srcOff, srcOff + FRAME_W * 4), dstOff);
  }

  if ((day + 1) % 50 === 0 || day === numDays - 1) {
    const elapsed = ((performance.now() - t0) / 1000).toFixed(1);
    console.log(`  Day ${day + 1}/${numDays}  (${elapsed}s)`);
  }
}

const renderTime = ((performance.now() - t0) / 1000).toFixed(1);
console.log(`\nRendering complete in ${renderTime}s. Encoding JPEG...`);

// ── JPEG encode ──
const outPath = resolve(ROOT, "data/thermal-atlas-thermal-10.jpg");
await sharp(rgba, { raw: { width: atlasW, height: atlasH, channels: 4 } })
  .jpeg({ quality: JPEG_QUALITY })
  .toFile(outPath);

const stat = readFileSync(outPath);
console.log(`Wrote ${outPath}`);
console.log(`Size: ${(stat.byteLength / 1024 / 1024).toFixed(1)} MB`);
console.log("Done!");
