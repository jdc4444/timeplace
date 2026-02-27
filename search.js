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
// Also add common short forms and aliases
// IMPORTANT: values must match the country strings in festivals-2026.json (e.g. "USA", "UK")
// countryMatches() uses fc.includes(sc), so short values match compound entries like "USA/Canada"
ALL_COUNTRIES_LOWER.set("czech republic", "Czechia");
ALL_COUNTRIES_LOWER.set("drc", "DRC");
ALL_COUNTRIES_LOWER.set("ivory coast", "Côte d'Ivoire");
ALL_COUNTRIES_LOWER.set("the gambia", "Gambia");
ALL_COUNTRIES_LOWER.set("uae", "UAE");
ALL_COUNTRIES_LOWER.set("united arab emirates", "UAE");
ALL_COUNTRIES_LOWER.set("uk", "UK");
ALL_COUNTRIES_LOWER.set("united kingdom", "UK");
ALL_COUNTRIES_LOWER.set("usa", "USA");
ALL_COUNTRIES_LOWER.set("us", "USA");
ALL_COUNTRIES_LOWER.set("united states", "USA");
ALL_COUNTRIES_LOWER.set("united states of america", "USA");
ALL_COUNTRIES_LOWER.set("st. lucia", "Saint Lucia");
ALL_COUNTRIES_LOWER.set("korea", "South Korea");
ALL_COUNTRIES_LOWER.set("saudi", "Saudi Arabia");
ALL_COUNTRIES_LOWER.set("britain", "UK");
ALL_COUNTRIES_LOWER.set("great britain", "UK");
ALL_COUNTRIES_LOWER.set("england", "UK");
ALL_COUNTRIES_LOWER.set("scotland", "UK");
ALL_COUNTRIES_LOWER.set("wales", "UK");
ALL_COUNTRIES_LOWER.set("holland", "Netherlands");
ALL_COUNTRIES_LOWER.set("burma", "Myanmar");
ALL_COUNTRIES_LOWER.set("persia", "Iran");
ALL_COUNTRIES_LOWER.set("congo", "Democratic Republic of Congo");
ALL_COUNTRIES_LOWER.set("vietnam", "Vietnam");
ALL_COUNTRIES_LOWER.set("laos", "Laos");
ALL_COUNTRIES_LOWER.set("america", "USA");
ALL_COUNTRIES_LOWER.set("states", "USA");

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
  ["la", "Los Angeles"], ["ny", "New York"], ["nyc", "New York"],
  ["sf", "San Francisco"], ["dc", "Washington"], ["nola", "New Orleans"],
]);

// ── Well-known holidays with 2026 dates ──
// Provides date-awareness for holiday searches so the slider moves to the right time
const HOLIDAYS = [
  // Fixed-date holidays
  { patterns: ["new year", "new years", "new year's", "hogmanay"], start: "2026-01-01", end: "2026-01-01" },
  { patterns: ["epiphany", "three kings", "dia de reyes"], start: "2026-01-06", end: "2026-01-06" },
  { patterns: ["valentine", "valentines", "valentine's", "valentines day", "valentine's day", "san valentin"], start: "2026-02-14", end: "2026-02-14" },
  { patterns: ["st patrick", "saint patrick", "st. patrick", "st patricks", "saint patricks"], start: "2026-03-17", end: "2026-03-17" },
  { patterns: ["may day", "beltane"], start: "2026-05-01", end: "2026-05-01" },
  { patterns: ["independence day", "4th of july", "fourth of july", "july 4th"], start: "2026-07-04", end: "2026-07-04" },
  { patterns: ["bastille", "bastille day"], start: "2026-07-14", end: "2026-07-14" },
  { patterns: ["halloween"], start: "2026-10-31", end: "2026-10-31" },
  { patterns: ["guy fawkes", "bonfire night"], start: "2026-11-05", end: "2026-11-05" },
  { patterns: ["day of the dead", "dia de muertos", "dia de los muertos"], start: "2026-11-01", end: "2026-11-02" },
  { patterns: ["thanksgiving"], start: "2026-11-26", end: "2026-11-26" },
  { patterns: ["christmas", "xmas", "christmas eve", "noel"], start: "2026-12-24", end: "2026-12-25" },
  { patterns: ["boxing day"], start: "2026-12-26", end: "2026-12-26" },
  { patterns: ["new year's eve", "new years eve", "nye", "silvester", "hogmanay"], start: "2026-12-31", end: "2026-12-31" },
  // Moving holidays (2026 dates)
  { patterns: ["chinese new year", "lunar new year", "spring festival", "tet"], start: "2026-02-17", end: "2026-02-17" },
  { patterns: ["mardi gras", "fat tuesday", "shrove tuesday"], start: "2026-02-17", end: "2026-02-17" },
  { patterns: ["carnival", "carnaval"], start: "2026-02-14", end: "2026-02-17" },
  { patterns: ["holi"], start: "2026-03-10", end: "2026-03-11" },
  { patterns: ["easter"], start: "2026-04-05", end: "2026-04-06" },
  { patterns: ["passover", "pesach"], start: "2026-04-01", end: "2026-04-09" },
  { patterns: ["ramadan"], start: "2026-02-18", end: "2026-03-19" },
  { patterns: ["eid al-fitr", "eid al fitr", "eid"], start: "2026-03-20", end: "2026-03-21" },
  { patterns: ["eid al-adha", "eid al adha"], start: "2026-05-27", end: "2026-05-28" },
  { patterns: ["vesak", "buddha day"], start: "2026-05-24", end: "2026-05-24" },
  { patterns: ["songkran"], start: "2026-04-13", end: "2026-04-15" },
  { patterns: ["diwali", "deepavali"], start: "2026-10-20", end: "2026-10-20" },
  { patterns: ["hanukkah", "chanukah"], start: "2026-12-05", end: "2026-12-13" },
  { patterns: ["mid-autumn", "mid autumn", "moon festival", "mooncake"], start: "2026-09-23", end: "2026-09-23" },
  { patterns: ["oktoberfest"], start: "2026-09-19", end: "2026-10-04" },
  { patterns: ["mother's day", "mothers day"], start: "2026-05-10", end: "2026-05-10" },
  { patterns: ["father's day", "fathers day"], start: "2026-06-21", end: "2026-06-21" },
];

// Build a quick-lookup: lowercase pattern → holiday entry
const HOLIDAY_MAP = new Map();
for (const h of HOLIDAYS) {
  for (const p of h.patterns) {
    HOLIDAY_MAP.set(p.toLowerCase(), h);
  }
}

/**
 * Check if text contains a known holiday. Returns { holiday, start, end } or null.
 */
function matchHoliday(text) {
  const lower = text.toLowerCase().trim();
  // Try longest patterns first (multi-word) to avoid partial matches
  const sorted = [...HOLIDAY_MAP.entries()].sort((a, b) => b[0].length - a[0].length);
  for (const [pattern, holiday] of sorted) {
    if (lower.includes(pattern)) {
      return holiday;
    }
  }
  return null;
}

// ── Lightweight spell correction ──

// Damerau-Levenshtein distance (handles transpositions like "japsn" → "japan")
function dlDist(a, b) {
  const la = a.length, lb = b.length;
  if (la === 0) return lb;
  if (lb === 0) return la;
  const d = Array.from({ length: la + 1 }, () => new Uint8Array(lb + 1));
  for (let i = 0; i <= la; i++) d[i][0] = i;
  for (let j = 0; j <= lb; j++) d[0][j] = j;
  for (let i = 1; i <= la; i++) {
    for (let j = 1; j <= lb; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
      }
    }
  }
  return d[la][lb];
}

// Build spell-check dictionary: lowercase → canonical form
const _SPELL_DICT = new Map();
function _addWord(lower, canonical) {
  if (lower.length >= 3 && !_SPELL_DICT.has(lower)) _SPELL_DICT.set(lower, canonical);
}
// Countries
for (const [lower, canonical] of ALL_COUNTRIES_LOWER) _addWord(lower, canonical.toLowerCase());
// Cities
for (const [lower, canonical] of KNOWN_CITIES) {
  // Multi-word cities: add both full and individual words
  _addWord(lower, canonical.toLowerCase());
  if (lower.includes(" ")) for (const w of lower.split(" ")) _addWord(w, w);
}
// Months
for (const m of Object.keys(MONTH_NAMES)) _addWord(m, m);
// Categories
for (const c of CATEGORY_NAMES) _addWord(c.toLowerCase(), c.toLowerCase());
// Seasons
for (const s of SEASON_NAMES) _addWord(s, s);
// Holiday patterns
for (const [p] of HOLIDAY_MAP) {
  _addWord(p, p);
  if (p.includes(" ")) for (const w of p.split(" ")) _addWord(w, w);
}
// Subregion aliases
for (const alias of SUBREGION_ALIASES.keys()) {
  _addWord(alias, alias);
  if (alias.includes(" ")) for (const w of alias.split(" ")) _addWord(w, w);
}
// Common search terms
for (const w of ["festival", "festivals", "music", "art", "culture", "food", "film",
  "dance", "carnival", "heritage", "theater", "theatre", "literary", "religious",
  "sports", "nature", "craft", "design", "fashion", "architecture", "adventure",
  "wellness", "science", "technology", "education", "historical", "folk", "national",
  // Time/date keywords — must be recognized so spell-check doesn't mangle them
  "today", "now", "tonight", "soon", "upcoming", "coming", "anytime", "whenever",
  "this", "next", "week", "month", "weekend", "year", "early", "mid", "late",
  "through", "thru", "until"]) {
  _addWord(w, w);
}

/**
 * Correct typos in query text. Only fixes single words that are close to a known term.
 * Returns the corrected string.
 */
function spellCorrect(text, skipLastWord = false) {
  const words = text.split(/(\s+)/); // preserve whitespace tokens
  // Optionally skip the last non-whitespace token (user may still be typing it)
  let lastWordIdx = -1;
  if (skipLastWord) {
    for (let i = words.length - 1; i >= 0; i--) {
      if (!/^\s*$/.test(words[i])) { lastWordIdx = i; break; }
    }
  }
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (/^\s*$/.test(w)) continue; // whitespace separator
    if (i === lastWordIdx) continue; // skip word being typed
    const lower = w.toLowerCase();
    if (lower.length < 3) continue; // too short to correct
    if (_SPELL_DICT.has(lower)) continue; // already known
    if (STOP_WORDS.has(lower)) continue;

    // Find closest match — distance 1 only to avoid false positives
    let bestWord = null;
    for (const [dictWord] of _SPELL_DICT) {
      if (Math.abs(dictWord.length - lower.length) > 1) continue;
      if (dlDist(lower, dictWord) <= 1) {
        bestWord = dictWord;
        break;
      }
    }
    if (bestWord) {
      // Preserve original casing style (all-lower, Title, UPPER)
      if (w === w.toUpperCase() && w.length > 1) {
        words[i] = bestWord.toUpperCase();
      } else if (w[0] === w[0].toUpperCase()) {
        words[i] = bestWord[0].toUpperCase() + bestWord.slice(1);
      } else {
        words[i] = bestWord;
      }
    }
  }
  return words.join("");
}

// ── Query parser ──

/**
 * Parse a natural-language search string into structured filter dimensions.
 * Returns: { name?, cities?, countries?, subregions?, categories?, dateRange?, months?, raw }
 */
export function parseSearchQuery(query) {
  const corrected = spellCorrect(query.trim());
  const raw = corrected;
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

  // If no name was found but categories were extracted, those words might be event names
  // e.g. "rio carnival" → city=Rio, category=Carnival, but no name
  // Copy category words into name so they also match against festival names
  if (!result.name && result.categories?.length) {
    result.name = result.categories.join(" ");
  }

  // Pass 5: Holiday awareness — if no date was set, check if query matches a known holiday
  // This lets "thanksgiving", "valentines day europe", "diwali" etc. move the slider
  if (!result.dateRange && !result.months?.length && !result.snapToToday) {
    const holiday = matchHoliday(raw);
    if (holiday) {
      result.dateRange = { start: holiday.start, end: holiday.end };
      result.holidayDate = true; // soft filter — don't exclude festivals with missing dates
    }
  }

  return result;
}

function extractDates(text, result) {
  let remaining = text;

  // Pattern A: Full-year keywords — "anytime", "whenever", "year round", "this year", etc.
  const anytimePattern = /\b(anytime|any\s*time|any\s*date|whenever|year[\s-]*round|all\s*year|this\s*year)\b/gi;
  if (anytimePattern.test(remaining)) {
    result.dateRange = { start: "2026-01-01", end: "2026-12-31" };
    remaining = remaining.replace(anytimePattern, " ");
    return remaining;
  }

  // Pattern R: Relative-to-today keywords
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const fmtDate = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

  // "today", "now", "tonight" → snap slider to today, filter with ±5 day window
  // No dateRange set — slider stays as single point, filterBySliderDate handles the window
  const todayPattern = /\b(today|now|tonight)\b/gi;
  if (todayPattern.test(remaining)) {
    result.snapToToday = true;
    remaining = remaining.replace(todayPattern, " ");
    return remaining;
  }

  // "soon", "upcoming", "coming up" → today + 3 weeks
  const soonPattern = /\b(soon|upcoming|coming\s+up)\b/gi;
  if (soonPattern.test(remaining)) {
    const end = new Date(now);
    end.setDate(now.getDate() + 21);
    result.dateRange = { start: fmtDate(now), end: fmtDate(end) };
    remaining = remaining.replace(soonPattern, " ");
    return remaining;
  }

  // "this week"
  const thisWeekPattern = /\bthis\s+week\b/gi;
  if (thisWeekPattern.test(remaining)) {
    const dayOfWeek = now.getDay();
    const monday = new Date(now);
    monday.setDate(now.getDate() - ((dayOfWeek + 6) % 7));
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    result.dateRange = { start: fmtDate(monday), end: fmtDate(sunday) };
    remaining = remaining.replace(thisWeekPattern, " ");
    return remaining;
  }

  // "next week"
  const nextWeekPattern = /\bnext\s+week\b/gi;
  if (nextWeekPattern.test(remaining)) {
    const dayOfWeek = now.getDay();
    const nextMon = new Date(now);
    nextMon.setDate(now.getDate() + (7 - (dayOfWeek + 6) % 7));
    const nextSun = new Date(nextMon);
    nextSun.setDate(nextMon.getDate() + 6);
    result.dateRange = { start: fmtDate(nextMon), end: fmtDate(nextSun) };
    remaining = remaining.replace(nextWeekPattern, " ");
    return remaining;
  }

  // "this weekend"
  const thisWeekendPattern = /\bthis\s+weekend\b/gi;
  if (thisWeekendPattern.test(remaining)) {
    const dayOfWeek = now.getDay();
    const saturday = new Date(now);
    saturday.setDate(now.getDate() + ((6 - dayOfWeek + 7) % 7));
    const sunday = new Date(saturday);
    sunday.setDate(saturday.getDate() + 1);
    result.dateRange = { start: fmtDate(saturday), end: fmtDate(sunday) };
    remaining = remaining.replace(thisWeekendPattern, " ");
    return remaining;
  }

  // "this month"
  const thisMonthPattern = /\bthis\s+month\b/gi;
  if (thisMonthPattern.test(remaining)) {
    const first = new Date(now.getFullYear(), now.getMonth(), 1);
    const last = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    result.dateRange = { start: fmtDate(first), end: fmtDate(last) };
    remaining = remaining.replace(thisMonthPattern, " ");
    return remaining;
  }

  // "next month"
  const nextMonthPattern = /\bnext\s+month\b/gi;
  if (nextMonthPattern.test(remaining)) {
    const first = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const last = new Date(now.getFullYear(), now.getMonth() + 2, 0);
    result.dateRange = { start: fmtDate(first), end: fmtDate(last) };
    remaining = remaining.replace(nextMonthPattern, " ");
    return remaining;
  }

  // "next N weeks", "next few weeks", "next couple weeks", "coming weeks"
  const nextWeeksPattern = /\b(?:next|coming)\s+(\d+|few|couple(?:\s+of)?)\s+weeks\b/gi;
  const nextWeeksMatch = remaining.match(nextWeeksPattern);
  if (nextWeeksMatch) {
    const inner = nextWeeksMatch[0].toLowerCase();
    let n = 3; // default for "few"/"couple"
    const numMatch = inner.match(/(\d+)/);
    if (numMatch) n = parseInt(numMatch[1], 10);
    const end = new Date(now);
    end.setDate(now.getDate() + n * 7);
    result.dateRange = { start: fmtDate(now), end: fmtDate(end) };
    remaining = remaining.replace(nextWeeksPattern, " ");
    return remaining;
  }

  // "next N months", "next few months", "next couple months", "coming months", "next months"
  const nextMonthsPattern = /\b(?:next|coming)\s+(\d+|few|couple(?:\s+of)?)?\s*months\b/gi;
  const nextMonthsMatch = remaining.match(nextMonthsPattern);
  if (nextMonthsMatch) {
    const inner = nextMonthsMatch[0].toLowerCase();
    let n = 3; // default for "few"/"couple"/"next months"
    const numMatch = inner.match(/(\d+)/);
    if (numMatch) n = parseInt(numMatch[1], 10);
    else if (/couple/.test(inner)) n = 2;
    const end = new Date(now);
    end.setMonth(now.getMonth() + n);
    result.dateRange = { start: fmtDate(now), end: fmtDate(end) };
    remaining = remaining.replace(nextMonthsPattern, " ");
    return remaining;
  }

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

  // Range separator: dash, en-dash, em-dash, "to", "through", "thru", "until"
  const SEP = "(?:\\s*[-–—]\\s*|\\s+(?:to|through|thru|until)\\s+)";

  // Pattern 1: "Month DD - DD" (same month range)
  const sameMonthRange = remaining.match(
    new RegExp("\\b(" + MONTH_RE + ")\\s+(\\d{1,2})" + SEP + "(\\d{1,2})\\b", "i")
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
    new RegExp("\\b(" + MONTH_RE + ")\\s+(\\d{1,2})" + SEP + "(" + MONTH_RE + ")\\s+(\\d{1,2})\\b", "i")
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
    new RegExp("\\b(\\d{1,2})/(\\d{1,2})" + SEP + "(\\d{1,2})/(\\d{1,2})\\b")
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
  // When date comes from holiday awareness, treat as soft filter (bonus) if name also matches
  // so festivals with missing dates (e.g. Macy's Thanksgiving Parade) still appear
  if (parsed.dateRange || parsed.months?.length) {
    hasAnyFilter = true;
    const dScore = dateScore(festival, parsed);
    if (dScore === 0 && !parsed.holidayDate) return 0;
    score += dScore;
  }

  // 5. Category match (0–15)
  // When name search is active (e.g. "rio carnival"), category is a bonus not a hard filter
  // because the same word may match festival names, not just category metadata
  if (parsed.categories?.length) {
    hasAnyFilter = true;
    const cScore = categoryScore(festival, parsed);
    if (cScore === 0 && !parsed.name) return 0; // hard filter only without name
    score += cScore; // soft bonus when name search is active
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
      // Normal range — tiered scoring
      const overlaps = fStart <= qEnd && fEnd >= qStart;
      if (!overlaps) return 0;
      // Festival entirely within query range → highest score
      if (fStart >= qStart && fEnd <= qEnd) return 20;
      // Festival overlaps but extends outside → medium score
      return 12;
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

// ── Auto-capitalize known words ──

// Build a lookup of all capitalizable words
const CAPITALIZE_MAP = new Map();

// Month names
for (const [key] of Object.entries(MONTH_NAMES)) {
  if (key.length >= 3) {
    const canonical = key.charAt(0).toUpperCase() + key.slice(1);
    CAPITALIZE_MAP.set(key, canonical);
  }
}

// Country names — capitalize the typed word only, don't replace with aliases
// e.g. "korea" → "Korea" (not "South Korea"), "us" → "US" (not "USA")
for (const [lower, canonical] of ALL_COUNTRIES_LOWER.entries()) {
  if (!canonical) continue;
  // If key equals the lowered canonical, use canonical capitalization
  if (lower === canonical.toLowerCase()) {
    CAPITALIZE_MAP.set(lower, canonical);
  } else {
    // It's an alias — title-case the alias itself, don't replace with canonical
    // Short abbreviations (≤3 chars) go UPPERCASE: us→US, uk→UK, uae→UAE, drc→DRC
    const capitalized = lower.length <= 3
      ? lower.toUpperCase()
      : lower.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    CAPITALIZE_MAP.set(lower, capitalized);
  }
}

// City names — capitalize the typed word only, don't expand aliases
// e.g. "rio" → "Rio" (not "Rio de Janeiro"), always title-case (never all-caps)
// Skip ambiguous short words like "la" (could be Spanish/French article, not Los Angeles)
const SKIP_CAPITALIZE_CITIES = new Set(["la"]);
for (const [lower, canonical] of KNOWN_CITIES.entries()) {
  if (SKIP_CAPITALIZE_CITIES.has(lower)) continue;
  if (lower === canonical.toLowerCase()) {
    CAPITALIZE_MAP.set(lower, canonical);
  } else {
    // Alias — true abbreviations go UPPERCASE (ny→NY, sf→SF), real words title-case (rio→Rio)
    // Heuristic: if alias appears as a word in canonical name, it's a real word, not an abbreviation
    const isAbbrev = lower.length <= 3 && !canonical.toLowerCase().split(/\s+/).some(w => w === lower);
    const capitalized = isAbbrev
      ? lower.toUpperCase()
      : lower.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    CAPITALIZE_MAP.set(lower, capitalized);
  }
}

// Category names
for (const cat of CATEGORY_NAMES) {
  CAPITALIZE_MAP.set(cat.toLowerCase(), cat);
}

// Sort by key length (longest first) for multi-word matching
const CAPITALIZE_ENTRIES = [...CAPITALIZE_MAP.entries()].sort((a, b) => b[0].length - a[0].length);

/**
 * Auto-capitalize known words in a search string.
 * Returns the corrected string, or null if no changes needed.
 */
export function autoCapitalize(text) {
  // First apply spell correction (skip last word — user may still be typing), then capitalize
  let result = spellCorrect(text, true);
  let changed = result !== text;
  for (const [lower, canonical] of CAPITALIZE_ENTRIES) {
    const pattern = new RegExp("\\b" + escapeRegex(lower) + "\\b", "gi");
    result = result.replace(pattern, (match) => {
      if (match !== canonical) {
        changed = true;
        return canonical;
      }
      return match;
    });
  }
  return changed ? result : null;
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
