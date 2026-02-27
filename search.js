// Search engine for globesparse festival data
// Parses natural-language queries into structured filters and matches festivals

import {
  COUNTRY_REGIONS,
  SUBREGION_ALIASES,
  lookupRegion,
  countryMatches,
  resolveCountryName,
  resolveSubregion,
} from "./data/un-subregions.js";

// ── Month / date parsing helpers ──

const MONTH_NAMES = {
  january: 0, jan: 0, february: 1, feb: 1, march: 2, mar: 2,
  april: 3, apr: 3, may: 4, june: 5, jun: 5, july: 6, jul: 6,
  august: 7, aug: 7, september: 8, sep: 8, sept: 8,
  october: 9, oct: 9, november: 10, nov: 10, december: 11, dec: 11,
};

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Regex fragment for matching any month name
const MONTH_RE = "(?:january|jan|february|feb|march|mar|april|apr|may|june|jun|july|jul|august|aug|september|sep|sept|october|oct|november|nov|december|dec)";

// Category names used in the dataset
const CATEGORY_NAMES = new Set([
  "Music", "Art", "Architecture", "Design", "Craft", "Film", "Literary",
  "Dance", "Theater", "Fashion", "Culture", "Religious", "Historical",
  "Folk", "Carnival", "Heritage", "National", "Holiday", "Education",
  "Sports", "Adventure", "Science", "Technology", "Food", "Nature", "Wellness",
]);

// Map supercategory → all sub-categories it contains (for search scoring)
const SUPER_MAP = {
  Music: "Music",
  Art: "Art", Architecture: "Art", Design: "Art", Craft: "Art",
  Film: "Art", Literary: "Art", Dance: "Art", Theater: "Art", Fashion: "Art",
  Culture: "Culture", Religious: "Culture", Historical: "Culture",
  Folk: "Culture", Carnival: "Culture", Heritage: "Culture",
  National: "Culture", Holiday: "Culture", Education: "Culture",
  Sports: "Culture", Adventure: "Culture", Science: "Culture", Technology: "Culture",
  Food: "Food", Nature: "Food", Wellness: "Food",
};

// Words to strip from the NAME portion only (after dates/locations/categories extracted)
const STOP_WORDS = new Set([
  "in", "the", "of", "and", "or", "for", "a", "an", "this", "that",
  "on", "at", "to", "from", "with", "near", "around", "during",
  "festivals", "festival", "events", "event", "celebrations", "celebration",
  "year", "2026", "anywhere", "worldwide", "global", "all",
]);

// ── Season parsing ──

const SEASON_NAMES = new Set(["winter", "spring", "summer", "fall", "autumn"]);

// Northern Hemisphere defaults — months are 0-indexed
const NH_SEASONS = {
  winter:  { months: [11, 0, 1], early: [11], mid: [0], late: [1] }, // Dec, Jan, Feb
  spring:  { months: [2, 3, 4],  early: [2],  mid: [3], late: [4] }, // Mar, Apr, May
  summer:  { months: [5, 6, 7],  early: [5],  mid: [6], late: [7] }, // Jun, Jul, Aug
  fall:    { months: [8, 9, 10], early: [8],  mid: [9], late: [10] }, // Sep, Oct, Nov
  autumn:  { months: [8, 9, 10], early: [8],  mid: [9], late: [10] },
};

// Southern Hemisphere — seasons flipped
const SH_SEASONS = {
  winter:  { months: [5, 6, 7],  early: [5],  mid: [6], late: [7] }, // Jun, Jul, Aug
  spring:  { months: [8, 9, 10], early: [8],  mid: [9], late: [10] }, // Sep, Oct, Nov
  summer:  { months: [11, 0, 1], early: [11], mid: [0], late: [1] }, // Dec, Jan, Feb
  fall:    { months: [2, 3, 4],  early: [2],  mid: [3], late: [4] }, // Mar, Apr, May
  autumn:  { months: [2, 3, 4],  early: [2],  mid: [3], late: [4] },
};

// Countries predominantly in the Southern Hemisphere
const SOUTHERN_HEMISPHERE_COUNTRIES = new Set([
  "Argentina", "Australia", "Bolivia", "Botswana", "Brazil", "Chile",
  "Ecuador", "Indonesia", "Kenya", "Madagascar", "Malawi", "Mozambique",
  "Namibia", "New Zealand", "Paraguay", "Peru", "South Africa",
  "Tanzania", "Uruguay", "Zambia", "Zimbabwe",
]);

// Cities predominantly in the Southern Hemisphere (from KNOWN_CITIES)
const SOUTHERN_HEMISPHERE_CITIES = new Set([
  "Buenos Aires", "Sydney", "Melbourne", "Cape Town", "Lima",
  "Salvador", "Recife", "Cusco", "Nairobi",
]);

// Build a set of all country names (lowercase) for matching
const ALL_COUNTRIES_LOWER = new Map();
for (const name of COUNTRY_REGIONS.keys()) {
  ALL_COUNTRIES_LOWER.set(name.toLowerCase(), name);
}
// Also add common short forms
ALL_COUNTRIES_LOWER.set("czech republic", "Czechia");
ALL_COUNTRIES_LOWER.set("drc", "Congo");
ALL_COUNTRIES_LOWER.set("ivory coast", "Côte d'Ivoire");
ALL_COUNTRIES_LOWER.set("the gambia", "Gambia");
ALL_COUNTRIES_LOWER.set("uae", "United Arab Emirates");
ALL_COUNTRIES_LOWER.set("uk", "United Kingdom");
ALL_COUNTRIES_LOWER.set("usa", "United States of America");
ALL_COUNTRIES_LOWER.set("st. lucia", "Saint Lucia");

// ── Well-known city names (from the festival dataset's most common cities) ──
// Used to extract city queries like "new york", "rio", "tokyo" from search text
const KNOWN_CITIES = new Map([
  ["new york", "New York"], ["rio de janeiro", "Rio de Janeiro"], ["rio", "Rio de Janeiro"],
  ["tokyo", "Tokyo"], ["kyoto", "Kyoto"], ["bangkok", "Bangkok"],
  ["london", "London"], ["barcelona", "Barcelona"], ["madrid", "Madrid"],
  ["paris", "Paris"], ["berlin", "Berlin"], ["rome", "Rome"],
  ["lisbon", "Lisbon"], ["amsterdam", "Amsterdam"], ["vienna", "Vienna"],
  ["prague", "Prague"], ["istanbul", "Istanbul"], ["cairo", "Cairo"],
  ["dubai", "Dubai"], ["mumbai", "Mumbai"], ["delhi", "Delhi"],
  ["singapore", "Singapore"], ["hong kong", "Hong Kong"], ["seoul", "Seoul"],
  ["beijing", "Beijing"], ["shanghai", "Shanghai"], ["sydney", "Sydney"],
  ["melbourne", "Melbourne"], ["buenos aires", "Buenos Aires"],
  ["mexico city", "Mexico City"], ["havana", "Havana"], ["lima", "Lima"],
  ["bogota", "Bogotá"], ["cusco", "Cusco"], ["marrakech", "Marrakech"],
  ["cape town", "Cape Town"], ["nairobi", "Nairobi"], ["accra", "Accra"],
  ["dakar", "Dakar"], ["lagos", "Lagos"], ["edinburgh", "Edinburgh"],
  ["dublin", "Dublin"], ["montreal", "Montreal"], ["toronto", "Toronto"],
  ["san francisco", "San Francisco"], ["los angeles", "Los Angeles"],
  ["new orleans", "New Orleans"], ["austin", "Austin"], ["chicago", "Chicago"],
  ["salvador", "Salvador"], ["recife", "Recife"], ["oaxaca", "Oaxaca"],
  ["venice", "Venice"], ["florence", "Florence"], ["seville", "Seville"],
  ["granada", "Granada"], ["porto", "Porto"], ["munich", "Munich"],
  ["cologne", "Cologne"], ["zurich", "Zurich"], ["bruges", "Bruges"],
  ["nice", "Nice"], ["cannes", "Cannes"], ["avignon", "Avignon"],
  ["varanasi", "Varanasi"], ["jaipur", "Jaipur"], ["kathmandu", "Kathmandu"],
  ["hanoi", "Hanoi"], ["bali", "Bali"], ["chiang mai", "Chiang Mai"],
  ["luang prabang", "Luang Prabang"], ["phnom penh", "Phnom Penh"],
  ["lhasa", "Lhasa"], ["taipei", "Taipei"], ["osaka", "Osaka"],
]);

// ── Query parser ──

/**
 * Parse a natural-language search string into structured filter dimensions.
 * Returns: { name?, cities?, countries?, subregions?, categories?, dateRange?, months?, raw }
 */
export function parseSearchQuery(query) {
  const raw = query.trim();
  if (!raw) return { raw };

  let remaining = raw;
  const result = { raw };

  // Pass 1: Extract date ranges and months
  remaining = extractDates(remaining, result);

  // Pass 2: Extract locations (cities, subregions, countries)
  remaining = extractLocations(remaining, result);

  // Pass 2.5: Resolve season → dateRange (needs location for hemisphere)
  if (result._season) {
    resolveSeason(result);
    delete result._season;
  }

  // Pass 3: Extract categories
  remaining = extractCategories(remaining, result);

  // Pass 4: Whatever remains is the name search
  const nameClean = remaining
    .replace(/[,;]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(w => !STOP_WORDS.has(w.toLowerCase()))
    .join(" ")
    .trim();

  if (nameClean.length > 1) {
    result.name = nameClean;
  }

  return result;
}

function extractDates(text, result) {
  let remaining = text;

  // Pattern S: Season keywords — "winter", "early summer", "late fall", etc.
  const seasonPattern = /(?<![-\w])(early|mid|late)?\s*(winter|spring|summer|fall|autumn)(?![-\w])/gi;
  const seasonMatch = remaining.match(seasonPattern);
  if (seasonMatch) {
    const m = seasonMatch[0].trim().toLowerCase().split(/\s+/);
    const modifier = m.length > 1 ? m[0] : null;
    const seasonName = m.length > 1 ? m[1] : m[0];
    result._season = { name: seasonName, modifier };
    remaining = remaining.replace(seasonPattern, " ");
    return remaining; // seasons override other date patterns
  }

  // Pattern 0: Relative date modifiers — "early/mid/late [month]"
  // e.g. "mid may", "late july", "early march", "mid may, late july"
  const relativePattern = new RegExp(
    "\\b(early|mid|late)\\s+(" + MONTH_RE + ")\\b", "gi"
  );
  const relativeMatches = [...remaining.matchAll(relativePattern)];
  if (relativeMatches.length > 0) {
    const dateRanges = [];
    for (const m of relativeMatches) {
      const modifier = m[1].toLowerCase();
      const month = MONTH_NAMES[m[2].toLowerCase()];
      const lastDay = DAYS_IN_MONTH[month];
      let startDay, endDay;
      if (modifier === "early") { startDay = 1; endDay = 10; }
      else if (modifier === "mid") { startDay = 10; endDay = 20; }
      else { startDay = 20; endDay = lastDay; }
      dateRanges.push({
        start: `2026-${String(month + 1).padStart(2, "0")}-${String(startDay).padStart(2, "0")}`,
        end: `2026-${String(month + 1).padStart(2, "0")}-${String(endDay).padStart(2, "0")}`,
        month,
      });
      remaining = remaining.replace(m[0], " ");
    }
    if (dateRanges.length === 1) {
      result.dateRange = { start: dateRanges[0].start, end: dateRanges[0].end };
    } else {
      // Multiple relative dates → combine into a broader date range
      // Sort by start date and span from earliest to latest
      dateRanges.sort((a, b) => a.start.localeCompare(b.start));
      result.dateRange = {
        start: dateRanges[0].start,
        end: dateRanges[dateRanges.length - 1].end,
      };
      // Also store individual months for broader matching
      result.months = [...new Set(dateRanges.map(d => d.month))];
    }
    return remaining;
  }

  // Pattern 1: "Month DD - DD" (same month range)
  const sameMonthRange = remaining.match(
    new RegExp("\\b(" + MONTH_RE + ")\\s+(\\d{1,2})\\s*[-–—]\\s*(\\d{1,2})\\b", "i")
  );
  if (sameMonthRange) {
    const month = MONTH_NAMES[sameMonthRange[1].toLowerCase()];
    const d1 = parseInt(sameMonthRange[2]);
    const d2 = parseInt(sameMonthRange[3]);
    result.dateRange = {
      start: `2026-${String(month + 1).padStart(2, "0")}-${String(d1).padStart(2, "0")}`,
      end: `2026-${String(month + 1).padStart(2, "0")}-${String(d2).padStart(2, "0")}`,
    };
    remaining = remaining.replace(sameMonthRange[0], " ");
    return remaining;
  }

  // Pattern 2: "Month DD - Month DD" (cross-month range)
  const crossMonthRange = remaining.match(
    new RegExp("\\b(" + MONTH_RE + ")\\s+(\\d{1,2})\\s*[-–—]\\s*(" + MONTH_RE + ")\\s+(\\d{1,2})\\b", "i")
  );
  if (crossMonthRange) {
    const m1 = MONTH_NAMES[crossMonthRange[1].toLowerCase()];
    const d1 = parseInt(crossMonthRange[2]);
    const m2 = MONTH_NAMES[crossMonthRange[3].toLowerCase()];
    const d2 = parseInt(crossMonthRange[4]);
    result.dateRange = {
      start: `2026-${String(m1 + 1).padStart(2, "0")}-${String(d1).padStart(2, "0")}`,
      end: `2026-${String(m2 + 1).padStart(2, "0")}-${String(d2).padStart(2, "0")}`,
    };
    remaining = remaining.replace(crossMonthRange[0], " ");
    return remaining;
  }

  // Pattern 2b: Numeric date range "M/D - M/D" (e.g. "8/5 - 11/6")
  const numericRange = remaining.match(
    /\b(\d{1,2})\/(\d{1,2})\s*[-–—]\s*(\d{1,2})\/(\d{1,2})\b/
  );
  if (numericRange) {
    const m1 = parseInt(numericRange[1]) - 1; // 0-indexed
    const d1 = parseInt(numericRange[2]);
    const m2 = parseInt(numericRange[3]) - 1;
    const d2 = parseInt(numericRange[4]);
    if (m1 >= 0 && m1 <= 11 && m2 >= 0 && m2 <= 11 && d1 >= 1 && d1 <= 31 && d2 >= 1 && d2 <= 31) {
      const startYear = 2026;
      const endYear = m2 < m1 ? 2027 : 2026; // wrap if end month < start month
      result.dateRange = {
        start: `${startYear}-${String(m1 + 1).padStart(2, "0")}-${String(d1).padStart(2, "0")}`,
        end: `${endYear}-${String(m2 + 1).padStart(2, "0")}-${String(d2).padStart(2, "0")}`,
      };
      remaining = remaining.replace(numericRange[0], " ");
      return remaining;
    }
  }

  // Pattern 2c: Single numeric date "M/D" (e.g. "8/5")
  const numericSingle = remaining.match(/\b(\d{1,2})\/(\d{1,2})\b/);
  if (numericSingle) {
    const month = parseInt(numericSingle[1]) - 1;
    const day = parseInt(numericSingle[2]);
    if (month >= 0 && month <= 11 && day >= 1 && day <= 31) {
      result.dateRange = {
        start: `2026-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
        end: `2026-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
      };
      remaining = remaining.replace(numericSingle[0], " ");
      return remaining;
    }
  }

  // Pattern 3: Single date "Month DD"
  const singleDate = remaining.match(
    new RegExp("\\b(" + MONTH_RE + ")\\s+(\\d{1,2})\\b", "i")
  );
  if (singleDate) {
    const month = MONTH_NAMES[singleDate[1].toLowerCase()];
    const day = parseInt(singleDate[2]);
    result.dateRange = {
      start: `2026-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
      end: `2026-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
    };
    remaining = remaining.replace(singleDate[0], " ");
    return remaining;
  }

  // Pattern 4: Month names (possibly comma-separated)
  const months = [];
  const monthTokens = [];
  const words = remaining.split(/[\s,;]+/);
  for (const word of words) {
    const lower = word.toLowerCase();
    if (MONTH_NAMES[lower] !== undefined) {
      months.push(MONTH_NAMES[lower]);
      monthTokens.push(word);
    }
  }
  if (months.length > 0) {
    result.months = months;
    for (const token of monthTokens) {
      remaining = remaining.replace(new RegExp("\\b" + escapeRegex(token) + "\\b", "i"), " ");
    }
  }

  return remaining;
}

function extractLocations(text, result) {
  let remaining = text;

  // Check for "anywhere" / "worldwide"
  if (/\banywhere\b|\bworldwide\b|\bglobal\b/i.test(remaining)) {
    remaining = remaining.replace(/\b(anywhere|worldwide|global)\b/gi, " ");
    return remaining;
  }

  // Check for city names FIRST (multi-word, longest first)
  const cities = [];
  const sortedCities = [...KNOWN_CITIES.keys()].sort((a, b) => b.length - a.length);
  for (const cityKey of sortedCities) {
    const pattern = new RegExp("\\b(?:in\\s+)?" + escapeRegex(cityKey) + "\\b", "i");
    if (pattern.test(remaining)) {
      cities.push(KNOWN_CITIES.get(cityKey));
      remaining = remaining.replace(pattern, " ");
      break; // Usually one city per query
    }
  }
  if (cities.length > 0) result.cities = cities;

  // Check for subregion aliases (multi-word, check longest first)
  const subregions = [];
  const sortedAliases = [...SUBREGION_ALIASES.keys()].sort((a, b) => b.length - a.length);
  for (const alias of sortedAliases) {
    const pattern = new RegExp("\\b(?:in\\s+)?" + escapeRegex(alias) + "\\b", "i");
    if (pattern.test(remaining)) {
      const resolved = SUBREGION_ALIASES.get(alias);
      if (resolved) subregions.push(...resolved);
      remaining = remaining.replace(pattern, " ");
    }
  }

  // Check for country names (multi-word countries first, sorted longest first)
  const countries = [];
  const countryNames = [...ALL_COUNTRIES_LOWER.entries()]
    .filter(([, v]) => v !== null)
    .sort((a, b) => b[0].length - a[0].length);

  for (const [lowerName, canonical] of countryNames) {
    const pattern = new RegExp("\\b(?:in\\s+)?" + escapeRegex(lowerName) + "\\b", "i");
    if (pattern.test(remaining)) {
      countries.push(canonical);
      remaining = remaining.replace(pattern, " ");
      break;
    }
  }

  if (subregions.length > 0) result.subregions = [...new Set(subregions)];
  if (countries.length > 0) result.countries = countries;

  return remaining;
}

function extractCategories(text, result) {
  let remaining = text;
  const categories = [];

  for (const cat of CATEGORY_NAMES) {
    const pattern = new RegExp("\\b" + escapeRegex(cat) + "\\b", "i");
    if (pattern.test(remaining)) {
      categories.push(cat);
      remaining = remaining.replace(pattern, " ");
    }
  }

  // Also check adjective forms
  const adjectives = {
    "musical": "Music", "artistic": "Art", "literary": "Literary",
    "cultural": "Culture", "religious": "Religious", "historical": "Historical",
    "educational": "Education", "scientific": "Science", "technological": "Technology",
    "culinary": "Food", "gastronomic": "Food", "sporting": "Sports",
  };
  for (const [adj, cat] of Object.entries(adjectives)) {
    const pattern = new RegExp("\\b" + adj + "\\b", "i");
    if (pattern.test(remaining)) {
      if (!categories.includes(cat)) categories.push(cat);
      remaining = remaining.replace(pattern, " ");
    }
  }

  if (categories.length > 0) result.categories = categories;
  return remaining;
}

// ── Season resolution ──

/**
 * Resolve a stored _season into dateRange/months based on hemisphere of the location.
 */
function resolveSeason(result) {
  const season = result._season;
  if (!season) return;

  // Determine hemisphere from extracted location
  let isSouthern = false;
  if (result.countries?.length) {
    isSouthern = result.countries.some(c => SOUTHERN_HEMISPHERE_COUNTRIES.has(c));
  }
  if (!isSouthern && result.cities?.length) {
    isSouthern = result.cities.some(c => SOUTHERN_HEMISPHERE_CITIES.has(c));
  }

  const seasonTable = isSouthern ? SH_SEASONS : NH_SEASONS;
  const entry = seasonTable[season.name];
  if (!entry) return;

  // Get the month(s) based on modifier
  const months = season.modifier ? entry[season.modifier] : entry.months;
  if (!months || months.length === 0) return;

  // Convert to dateRange spanning start of first month to end of last month
  const sortedMonths = [...months].sort((a, b) => a - b);
  // Handle winter wrapping (Dec=11, Jan=0, Feb=1)
  const hasWrap = sortedMonths.includes(11) && sortedMonths.includes(0);
  let startMonth, endMonth, startYear = 2026, endYear = 2026;
  if (hasWrap) {
    // Wrapping range: Dec 2026 → Jan/Feb 2027
    startMonth = 11;
    startYear = 2026;
    endMonth = Math.max(...sortedMonths.filter(m => m < 6));
    endYear = 2027;
  } else {
    startMonth = sortedMonths[0];
    endMonth = sortedMonths[sortedMonths.length - 1];
  }

  const lastDay = new Date(endYear, endMonth + 1, 0).getDate();
  result.dateRange = {
    start: `${startYear}-${String(startMonth + 1).padStart(2, "0")}-01`,
    end: `${endYear}-${String(endMonth + 1).padStart(2, "0")}-${String(lastDay).padStart(2, "0")}`,
  };
  result.months = months;
}

// ── Festival matching ──

/**
 * Search festivals against a parsed query. Returns scored + sorted results.
 */
export function searchFestivals(festivals, parsed) {
  if (!festivals || !parsed) return [];

  const hasCriteria = parsed.name || parsed.cities || parsed.countries ||
    parsed.subregions || parsed.categories || parsed.dateRange || parsed.months;
  if (!hasCriteria) return [];

  const scored = [];
  for (const f of festivals) {
    const s = scoreFestival(f, parsed);
    if (s > 0) scored.push({ festival: f, score: s });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.map(s => s.festival);
}

function scoreFestival(festival, parsed) {
  let score = 0;
  let hasAnyFilter = false;

  // 1. Name match — checks against festival.name AND festival.city (0–40)
  if (parsed.name) {
    hasAnyFilter = true;
    const nameScore = nameAndCityScore(festival, parsed.name);
    if (nameScore === 0) return 0;
    score += nameScore;
  }

  // 2. City match (0–25)
  if (parsed.cities?.length) {
    hasAnyFilter = true;
    const ctyScore = cityScore(festival, parsed);
    if (ctyScore === 0) return 0;
    score += ctyScore;
  }

  // 3. Location match — country/subregion (0–25)
  if (parsed.countries?.length || parsed.subregions?.length) {
    hasAnyFilter = true;
    const locScore = locationScore(festival, parsed);
    if (locScore === 0) return 0;
    score += locScore;
  }

  // 4. Date match (0–20)
  if (parsed.dateRange || parsed.months?.length) {
    hasAnyFilter = true;
    const dScore = dateScore(festival, parsed);
    if (dScore === 0) return 0;
    score += dScore;
  }

  // 5. Category match (0–15)
  if (parsed.categories?.length) {
    hasAnyFilter = true;
    const cScore = categoryScore(festival, parsed);
    if (cScore === 0) return 0;
    score += cScore;
  }

  if (!hasAnyFilter) return 0;

  // 6. Quality bonus (0–10)
  score += Math.min(10, (festival.qi || 0) / 10);

  return score;
}

/**
 * Score a festival name + city against a query name string.
 * Much stricter than before: no accidental substring matches on short words.
 */
function nameAndCityScore(festival, queryName) {
  // Try the festival name first
  const nameScore = strictFuzzyScore(festival.name, queryName);
  if (nameScore > 0) return nameScore;

  // Also try matching against "name + city" combined and city alone
  if (festival.city) {
    const cityScore = strictFuzzyScore(festival.city, queryName);
    if (cityScore > 0) return Math.min(cityScore, 25); // city-only match capped lower
    // Try combined "City Festival Name"
    const combined = festival.name + " " + festival.city;
    const combinedScore = strictFuzzyScore(combined, queryName);
    if (combinedScore > 0) return combinedScore;
  }

  return 0;
}

/**
 * Strict fuzzy name scoring — avoids false positives from short substring matches.
 */
function strictFuzzyScore(targetStr, queryStr) {
  const target = targetStr.toLowerCase();
  const query = queryStr.toLowerCase();

  // Exact match
  if (target === query) return 40;

  // Full query is a substring of target
  if (target.includes(query)) return 35;

  // Word overlap with strict rules
  const queryWords = query.split(/\s+/).filter(w => w.length > 1);
  if (queryWords.length === 0) return 0;

  // Split target on word boundaries (spaces, hyphens, parens, punctuation)
  const targetWords = target.split(/[\s\-–—(),'.:;!?]+/).filter(w => w.length > 1);

  let matched = 0;
  for (const qw of queryWords) {
    if (wordMatchesAny(qw, targetWords)) matched++;
  }

  const ratio = matched / queryWords.length;

  // Stricter thresholds depending on query length
  if (queryWords.length <= 2) {
    // For short queries (1-2 words), require ALL words to match
    if (ratio >= 1.0) return 30;
    return 0;
  }
  // For 3+ word queries, allow some slack
  if (ratio >= 0.85) return 30;
  if (ratio >= 0.65) return 20;

  return 0;
}

/**
 * Check if a query word matches any target word, with strict rules:
 * - Exact word match always works
 * - One word starts with the other (for prefix matching like "carn" in "carnival")
 * - Substring match only if the shorter string is >= 4 chars (prevents "al" matching "carnevale")
 * - Edit distance fallback for cross-language spellings (e.g. "carnevale" ↔ "carnival")
 */
function wordMatchesAny(queryWord, targetWords) {
  for (const tw of targetWords) {
    // Exact
    if (tw === queryWord) return true;
    // Prefix: one starts with the other
    if (tw.startsWith(queryWord) || queryWord.startsWith(tw)) {
      // Only allow prefix match if the shorter word is >= 3 chars
      if (Math.min(tw.length, queryWord.length) >= 3) return true;
    }
    // Substring containment: only if shorter word is >= 4 chars
    if (queryWord.length >= 4 && tw.includes(queryWord)) return true;
    if (tw.length >= 4 && queryWord.includes(tw)) return true;
    // Edit distance: for words >= 5 chars, allow up to 30% character difference
    // Handles cross-language spellings: "carnevale" ↔ "carnival", "carnaval" ↔ "carnival"
    if (tw.length >= 5 && queryWord.length >= 5) {
      const maxLen = Math.max(tw.length, queryWord.length);
      const dist = levenshtein(tw, queryWord);
      if (dist / maxLen <= 0.3) return true;
    }
  }
  return false;
}

/**
 * Levenshtein edit distance between two strings.
 */
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

function cityScore(festival, parsed) {
  if (!parsed.cities?.length || !festival.city) return 0;
  const fc = festival.city.toLowerCase();
  for (const searchCity of parsed.cities) {
    const sc = searchCity.toLowerCase();
    if (fc === sc) return 25;
    // Festival city contains search city (e.g. "Rio de Janeiro" contains "Rio")
    if (fc.includes(sc)) return 22;
    // Reverse: only if festival city is a substantial word match
    // (prevents "York" matching "New York" while allowing "New York" to match "New York City")
    if (sc.includes(fc) && fc.length >= sc.length * 0.7) return 20;
  }
  return 0;
}

function locationScore(festival, parsed) {
  if (parsed.countries?.length) {
    for (const searchCountry of parsed.countries) {
      if (countryMatches(festival.country, searchCountry)) return 25;
    }
  }

  if (parsed.subregions?.length) {
    const festRegion = lookupRegion(festival.country);
    if (festRegion) {
      for (const sub of parsed.subregions) {
        if (festRegion.subregion === sub) return 25;
      }
      for (const sub of parsed.subregions) {
        if (festRegion.region === sub) return 20;
      }
    }
  }

  return 0;
}

function dateScore(festival, parsed) {
  if (!festival.start) return 0;

  const fStart = new Date(festival.start);
  if (isNaN(fStart.getTime())) return 0;
  const fEnd = festival.end ? new Date(festival.end) : fStart;

  if (parsed.dateRange) {
    const qStart = new Date(parsed.dateRange.start);
    const qEnd = new Date(parsed.dateRange.end);
    if (qStart <= qEnd) {
      // Normal range
      if (fStart <= qEnd && fEnd >= qStart) return 20;
    } else {
      // Year-wrapping range (e.g., Dec 1 → Feb 28)
      if (fEnd >= qStart || fStart <= qEnd) return 20;
    }
    return 0;
  }

  if (parsed.months?.length) {
    for (const m of parsed.months) {
      const fStartMonth = fStart.getMonth();
      const fEndMonth = fEnd.getMonth();
      if (fStartMonth <= fEndMonth) {
        if (m >= fStartMonth && m <= fEndMonth) return 20;
      } else {
        if (m >= fStartMonth || m <= fEndMonth) return 20;
      }
    }
    return 0;
  }

  return 0;
}

function categoryScore(festival, parsed) {
  if (!festival.cat) return 0;
  const festCats = festival.cat.split(/[,;]/).map(c => c.trim()).filter(Boolean);
  const festSupers = festCats.map(c => SUPER_MAP[c] || "Culture");

  for (const searchCat of parsed.categories) {
    if (festCats.some(fc => fc.toLowerCase() === searchCat.toLowerCase())) return 15;
    if (festSupers.some(fs => fs.toLowerCase() === searchCat.toLowerCase())) return 12;
    const searchSuper = SUPER_MAP[searchCat];
    if (searchSuper && festSupers.includes(searchSuper)) return 12;
  }

  return 0;
}

// ── Utilities ──

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ── Placeholder examples ──

export const SEARCH_PLACEHOLDERS = [
  "Mid-Autumn Festival",
  "August, September in Spain",
  "Carnevale de Rio",
  "April 10 - 20, Southeast Asia",
  "Literary Festivals this year",
  "February, anywhere",
];
