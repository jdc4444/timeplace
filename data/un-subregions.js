// Country → UN subregion mapping (derived from NaturalEarth 110m + manual aliases)
// Used by search.js to resolve location queries like "Southeast Asia"

const RAW = {
  "Afghanistan":["Southern Asia","Asia"],
  "Albania":["Southern Europe","Europe"],
  "Algeria":["Northern Africa","Africa"],
  "Andorra":["Southern Europe","Europe"],
  "Angola":["Middle Africa","Africa"],
  "Antigua and Barbuda":["Caribbean","Americas"],
  "Argentina":["South America","Americas"],
  "Armenia":["Western Asia","Asia"],
  "Australia":["Australia and New Zealand","Oceania"],
  "Austria":["Western Europe","Europe"],
  "Azerbaijan":["Western Asia","Asia"],
  "Bahamas":["Caribbean","Americas"],
  "Bahrain":["Western Asia","Asia"],
  "Bangladesh":["Southern Asia","Asia"],
  "Barbados":["Caribbean","Americas"],
  "Belarus":["Eastern Europe","Europe"],
  "Belgium":["Western Europe","Europe"],
  "Belize":["Central America","Americas"],
  "Benin":["Western Africa","Africa"],
  "Bermuda":["Northern America","Americas"],
  "Bhutan":["Southern Asia","Asia"],
  "Bolivia":["South America","Americas"],
  "Bosnia and Herzegovina":["Southern Europe","Europe"],
  "Botswana":["Southern Africa","Africa"],
  "Brazil":["South America","Americas"],
  "Brunei":["South-Eastern Asia","Asia"],
  "Bulgaria":["Eastern Europe","Europe"],
  "Burkina Faso":["Western Africa","Africa"],
  "Burundi":["Eastern Africa","Africa"],
  "Cambodia":["South-Eastern Asia","Asia"],
  "Cameroon":["Middle Africa","Africa"],
  "Canada":["Northern America","Americas"],
  "Cape Verde":["Western Africa","Africa"],
  "Cayman Islands":["Caribbean","Americas"],
  "Central African Republic":["Middle Africa","Africa"],
  "Chad":["Middle Africa","Africa"],
  "Chile":["South America","Americas"],
  "China":["Eastern Asia","Asia"],
  "Colombia":["South America","Americas"],
  "Comoros":["Eastern Africa","Africa"],
  "Congo":["Middle Africa","Africa"],
  "Cook Islands":["Australia and New Zealand","Oceania"],
  "Costa Rica":["Central America","Americas"],
  "Croatia":["Southern Europe","Europe"],
  "Cuba":["Caribbean","Americas"],
  "Cyprus":["Western Asia","Asia"],
  "Czechia":["Eastern Europe","Europe"],
  "Denmark":["Northern Europe","Europe"],
  "Djibouti":["Eastern Africa","Africa"],
  "Dominica":["Caribbean","Americas"],
  "Dominican Republic":["Caribbean","Americas"],
  "Ecuador":["South America","Americas"],
  "Egypt":["Northern Africa","Africa"],
  "El Salvador":["Central America","Americas"],
  "Equatorial Guinea":["Middle Africa","Africa"],
  "Eritrea":["Eastern Africa","Africa"],
  "Estonia":["Northern Europe","Europe"],
  "Eswatini":["Southern Africa","Africa"],
  "Ethiopia":["Eastern Africa","Africa"],
  "Faroe Islands":["Northern Europe","Europe"],
  "Fiji":["Melanesia","Oceania"],
  "Finland":["Northern Europe","Europe"],
  "France":["Western Europe","Europe"],
  "French Guiana":["South America","Americas"],
  "French Polynesia":["Australia and New Zealand","Oceania"],
  "Gabon":["Middle Africa","Africa"],
  "Gambia":["Western Africa","Africa"],
  "Georgia":["Western Asia","Asia"],
  "Germany":["Western Europe","Europe"],
  "Ghana":["Western Africa","Africa"],
  "Greece":["Southern Europe","Europe"],
  "Greenland":["Northern America","Americas"],
  "Guam":["Australia and New Zealand","Oceania"],
  "Guatemala":["Central America","Americas"],
  "Guinea":["Western Africa","Africa"],
  "Guinea-Bissau":["Western Africa","Africa"],
  "Guyana":["South America","Americas"],
  "Haiti":["Caribbean","Americas"],
  "Honduras":["Central America","Americas"],
  "Hong Kong":["Eastern Asia","Asia"],
  "Hungary":["Eastern Europe","Europe"],
  "Iceland":["Northern Europe","Europe"],
  "India":["Southern Asia","Asia"],
  "Indonesia":["South-Eastern Asia","Asia"],
  "Iran":["Southern Asia","Asia"],
  "Iraq":["Western Asia","Asia"],
  "Ireland":["Northern Europe","Europe"],
  "Israel":["Western Asia","Asia"],
  "Italy":["Southern Europe","Europe"],
  "Jamaica":["Caribbean","Americas"],
  "Japan":["Eastern Asia","Asia"],
  "Jordan":["Western Asia","Asia"],
  "Kazakhstan":["Central Asia","Asia"],
  "Kenya":["Eastern Africa","Africa"],
  "Kosovo":["Southern Europe","Europe"],
  "Kuwait":["Western Asia","Asia"],
  "Kyrgyzstan":["Central Asia","Asia"],
  "Laos":["South-Eastern Asia","Asia"],
  "Latvia":["Northern Europe","Europe"],
  "Lebanon":["Western Asia","Asia"],
  "Lesotho":["Southern Africa","Africa"],
  "Liberia":["Western Africa","Africa"],
  "Libya":["Northern Africa","Africa"],
  "Lithuania":["Northern Europe","Europe"],
  "Luxembourg":["Western Europe","Europe"],
  "Macau":["Eastern Asia","Asia"],
  "Madagascar":["Eastern Africa","Africa"],
  "Malawi":["Eastern Africa","Africa"],
  "Malaysia":["South-Eastern Asia","Asia"],
  "Mali":["Western Africa","Africa"],
  "Malta":["Southern Europe","Europe"],
  "Martinique":["Caribbean","Americas"],
  "Mauritania":["Western Africa","Africa"],
  "Mauritius":["Eastern Africa","Africa"],
  "Mexico":["Central America","Americas"],
  "Moldova":["Eastern Europe","Europe"],
  "Mongolia":["Eastern Asia","Asia"],
  "Montenegro":["Southern Europe","Europe"],
  "Morocco":["Northern Africa","Africa"],
  "Mozambique":["Eastern Africa","Africa"],
  "Myanmar":["South-Eastern Asia","Asia"],
  "Namibia":["Southern Africa","Africa"],
  "Nepal":["Southern Asia","Asia"],
  "Netherlands":["Western Europe","Europe"],
  "New Caledonia":["Melanesia","Oceania"],
  "New Zealand":["Australia and New Zealand","Oceania"],
  "Nicaragua":["Central America","Americas"],
  "Niger":["Western Africa","Africa"],
  "Nigeria":["Western Africa","Africa"],
  "North Korea":["Eastern Asia","Asia"],
  "North Macedonia":["Southern Europe","Europe"],
  "Norway":["Northern Europe","Europe"],
  "Oman":["Western Asia","Asia"],
  "Pakistan":["Southern Asia","Asia"],
  "Palestine":["Western Asia","Asia"],
  "Panama":["Central America","Americas"],
  "Papua New Guinea":["Melanesia","Oceania"],
  "Paraguay":["South America","Americas"],
  "Peru":["South America","Americas"],
  "Philippines":["South-Eastern Asia","Asia"],
  "Poland":["Eastern Europe","Europe"],
  "Portugal":["Southern Europe","Europe"],
  "Puerto Rico":["Caribbean","Americas"],
  "Qatar":["Western Asia","Asia"],
  "Reunion":["Eastern Africa","Africa"],
  "Romania":["Eastern Europe","Europe"],
  "Russia":["Eastern Europe","Europe"],
  "Rwanda":["Eastern Africa","Africa"],
  "Saint Kitts and Nevis":["Caribbean","Americas"],
  "Saint Lucia":["Caribbean","Americas"],
  "Samoa":["Australia and New Zealand","Oceania"],
  "Saudi Arabia":["Western Asia","Asia"],
  "Senegal":["Western Africa","Africa"],
  "Serbia":["Southern Europe","Europe"],
  "Seychelles":["Eastern Africa","Africa"],
  "Sierra Leone":["Western Africa","Africa"],
  "Singapore":["South-Eastern Asia","Asia"],
  "Sint Maarten":["Caribbean","Americas"],
  "Slovakia":["Eastern Europe","Europe"],
  "Slovenia":["Southern Europe","Europe"],
  "Solomon Islands":["Melanesia","Oceania"],
  "Somalia":["Eastern Africa","Africa"],
  "Somaliland":["Eastern Africa","Africa"],
  "South Africa":["Southern Africa","Africa"],
  "South Korea":["Eastern Asia","Asia"],
  "South Sudan":["Eastern Africa","Africa"],
  "Spain":["Southern Europe","Europe"],
  "Sri Lanka":["Southern Asia","Asia"],
  "Sudan":["Northern Africa","Africa"],
  "Suriname":["South America","Americas"],
  "Sweden":["Northern Europe","Europe"],
  "Switzerland":["Western Europe","Europe"],
  "Syria":["Western Asia","Asia"],
  "Taiwan":["Eastern Asia","Asia"],
  "Tajikistan":["Central Asia","Asia"],
  "Tanzania":["Eastern Africa","Africa"],
  "Thailand":["South-Eastern Asia","Asia"],
  "Timor-Leste":["South-Eastern Asia","Asia"],
  "Togo":["Western Africa","Africa"],
  "Tonga":["Australia and New Zealand","Oceania"],
  "Trinidad and Tobago":["Caribbean","Americas"],
  "Tunisia":["Northern Africa","Africa"],
  "Turkey":["Western Asia","Asia"],
  "Turkmenistan":["Central Asia","Asia"],
  "Uganda":["Eastern Africa","Africa"],
  "Ukraine":["Eastern Europe","Europe"],
  "United Arab Emirates":["Western Asia","Asia"],
  "United Kingdom":["Northern Europe","Europe"],
  "United States of America":["Northern America","Americas"],
  "Uruguay":["South America","Americas"],
  "Uzbekistan":["Central Asia","Asia"],
  "Vanuatu":["Melanesia","Oceania"],
  "Venezuela":["South America","Americas"],
  "Vietnam":["South-Eastern Asia","Asia"],
  "Yemen":["Western Asia","Asia"],
  "Zambia":["Eastern Africa","Africa"],
  "Zimbabwe":["Eastern Africa","Africa"],
  "São Tomé and Príncipe":["Middle Africa","Africa"],
  "Curaçao":["Caribbean","Americas"],
  "US Virgin Islands":["Caribbean","Americas"],
  "Côte d'Ivoire":["Western Africa","Africa"],
};

// Build the main lookup Map: countryName → { subregion, region }
export const COUNTRY_REGIONS = new Map();
for (const [name, [subregion, region]] of Object.entries(RAW)) {
  COUNTRY_REGIONS.set(name, { subregion, region });
}

// Aliases: festival country names that differ from canonical names above
const ALIASES = {
  "Czech Republic": "Czechia",
  "DRC": "Congo",
  "Democratic Republic of Congo": "Congo",
  "Republic of Congo": "Congo",
  "Ivory Coast": "Côte d'Ivoire",
  "The Gambia": "Gambia",
  "UAE": "United Arab Emirates",
  "UK": "United Kingdom",
  "USA": "United States of America",
  "St. Lucia": "Saint Lucia",
};

// Reverse lookup: lowercase country name → canonical name
const COUNTRY_LOWER = new Map();
for (const name of COUNTRY_REGIONS.keys()) {
  COUNTRY_LOWER.set(name.toLowerCase(), name);
}
for (const [alias, canonical] of Object.entries(ALIASES)) {
  COUNTRY_LOWER.set(alias.toLowerCase(), canonical);
}

/**
 * Look up region info for a festival country string.
 * Handles compound entries like "Austria / Germany", "China (Xinjiang)",
 * "France (and worldwide)", "Puerto Rico (US)", etc.
 */
export function lookupRegion(countryStr) {
  if (!countryStr) return null;

  // Try direct match first
  const direct = COUNTRY_REGIONS.get(countryStr);
  if (direct) return direct;

  // Try alias
  const aliasCanon = ALIASES[countryStr];
  if (aliasCanon) return COUNTRY_REGIONS.get(aliasCanon);

  // Strip parenthetical qualifiers: "China (Xinjiang)" → "China"
  const stripped = countryStr.replace(/\s*\(.*?\)\s*/g, "").trim();
  if (stripped !== countryStr) {
    const r = COUNTRY_REGIONS.get(stripped) || COUNTRY_REGIONS.get(ALIASES[stripped]);
    if (r) return r;
  }

  // Split compound: "Austria / Germany", "Benin/Nigeria"
  const parts = countryStr.split(/\s*[\/]\s*/);
  for (const part of parts) {
    const clean = part.replace(/\s*\(.*?\)\s*/g, "").trim();
    const r = COUNTRY_REGIONS.get(clean) || COUNTRY_REGIONS.get(ALIASES[clean]);
    if (r) return r;
  }

  return null;
}

/**
 * Check if a festival country string matches a search country name.
 * Handles substrings, aliases, compound names, qualifiers.
 */
export function countryMatches(festivalCountry, searchCountry) {
  if (!festivalCountry || !searchCountry) return false;
  const fc = festivalCountry.toLowerCase();
  const sc = searchCountry.toLowerCase();

  // Direct substring
  if (fc.includes(sc)) return true;

  // Resolve alias and check
  const canonSearch = COUNTRY_LOWER.get(sc);
  if (canonSearch && fc.includes(canonSearch.toLowerCase())) return true;

  // Check each part of compound
  const parts = fc.split(/\s*[\/]\s*/);
  for (const part of parts) {
    const clean = part.replace(/\s*\(.*?\)\s*/g, "").trim();
    if (clean === sc || clean === canonSearch?.toLowerCase()) return true;
  }

  return false;
}

/**
 * Resolve a search term to a canonical country name if it matches one.
 * Returns canonical name or null.
 */
export function resolveCountryName(term) {
  const lower = term.toLowerCase();
  return COUNTRY_LOWER.get(lower) || null;
}

// ── Subregion search aliases ──
// Maps user-friendly search phrases → UN subregion name(s)
export const SUBREGION_ALIASES = new Map([
  // Asia
  ["southeast asia", ["South-Eastern Asia"]],
  ["se asia", ["South-Eastern Asia"]],
  ["south east asia", ["South-Eastern Asia"]],
  ["east asia", ["Eastern Asia"]],
  ["south asia", ["Southern Asia"]],
  ["central asia", ["Central Asia"]],
  ["west asia", ["Western Asia"]],
  ["middle east", ["Western Asia"]],

  // Europe
  ["northern europe", ["Northern Europe"]],
  ["western europe", ["Western Europe"]],
  ["eastern europe", ["Eastern Europe"]],
  ["southern europe", ["Southern Europe"]],
  ["scandinavia", ["Northern Europe"]],
  ["nordic", ["Northern Europe"]],
  ["balkans", ["Southern Europe"]],
  ["mediterranean", ["Southern Europe", "Northern Africa", "Western Asia"]],

  // Africa
  ["north africa", ["Northern Africa"]],
  ["west africa", ["Western Africa"]],
  ["east africa", ["Eastern Africa"]],
  ["central africa", ["Middle Africa"]],
  ["southern africa", ["Southern Africa"]],
  ["sub-saharan africa", ["Eastern Africa", "Western Africa", "Middle Africa", "Southern Africa"]],
  ["sub saharan africa", ["Eastern Africa", "Western Africa", "Middle Africa", "Southern Africa"]],

  // Americas
  ["north america", ["Northern America"]],
  ["central america", ["Central America"]],
  ["south america", ["South America"]],
  ["latin america", ["South America", "Central America", "Caribbean"]],
  ["caribbean", ["Caribbean"]],

  // Oceania
  ["oceania", ["Australia and New Zealand", "Melanesia"]],
  ["pacific islands", ["Melanesia", "Australia and New Zealand"]],

  // Continents (broad)
  ["europe", ["Northern Europe", "Western Europe", "Eastern Europe", "Southern Europe"]],
  ["asia", ["Southern Asia", "South-Eastern Asia", "Eastern Asia", "Central Asia", "Western Asia"]],
  ["africa", ["Northern Africa", "Eastern Africa", "Western Africa", "Middle Africa", "Southern Africa"]],
  ["americas", ["Northern America", "Central America", "South America", "Caribbean"]],
]);

/**
 * Resolve a search term to subregion(s). Returns array of subregion names or null.
 */
export function resolveSubregion(term) {
  return SUBREGION_ALIASES.get(term.toLowerCase()) || null;
}
