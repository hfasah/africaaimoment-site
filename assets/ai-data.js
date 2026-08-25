// AI readiness dataset — country explorer, africaaimoment.com
// PRELIMINARY ESTIMATES. Full audit in the book.
//
// Source: Oxford Insights, Government AI Readiness Index 2025 (published Jan 2026), "Full Rankings and Pillar Scores".
//   https://oxfordinsights.com/ai-readiness/government-ai-readiness-index-2025/
//   readiness  = equal-weighted mean of the six pillar scores / 100 (Oxford's published overall uses undisclosed weights; ranks may differ by a few places)
//   infra      = AI Infrastructure pillar / 100 (compute + data)
//   talent     = Development & Diffusion pillar / 100 (AI sector + human capital)
//   governance = Governance pillar / 100
//   pillars    = all six raw pillar scores (0–100), globalRank = Oxford's published rank of 195
//   imfAudit   = IMF AI Preparedness Index value from the book's Bonus Report (separate index, 0–1), for the 17 audited economies
//   gap        = ILLUSTRATIVE funding gap vs G7 in US$ billions (placeholder formula, not a source figure). G7 members = 0.
// To replace with the final audit: keep the field names; set source:"audit".
window.AI_DATA = {
 "Algeria": {
  "readiness": 0.437,
  "infra": 0.431,
  "talent": 0.339,
  "governance": 0.59,
  "pillars": {
   "policy": 65.5,
   "infrastructure": 43.12,
   "governance": 59.0,
   "publicSector": 26.42,
   "development": 33.86,
   "resilience": 34.44
  },
  "globalRank": 89,
  "region": "Africa",
  "source": "oxford2025",
  "imfAudit": 0.37,
  "gap": 9.4
 },
 "Angola": {
  "readiness": 0.271,
  "infra": 0.308,
  "talent": 0.141,
  "governance": 0.53,
  "pillars": {
   "policy": 15.5,
   "infrastructure": 30.77,
   "governance": 53.03,
   "publicSector": 29.51,
   "development": 14.14,
   "resilience": 19.35
  },
  "globalRank": 141,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 5.6
 },
 "Benin": {
  "readiness": 0.457,
  "infra": 0.27,
  "talent": 0.269,
  "governance": 0.613,
  "pillars": {
   "policy": 61.0,
   "infrastructure": 26.99,
   "governance": 61.25,
   "publicSector": 63.05,
   "development": 26.89,
   "resilience": 34.9
  },
  "globalRank": 90,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 1.7
 },
 "Botswana": {
  "readiness": 0.365,
  "infra": 0.401,
  "talent": 0.278,
  "governance": 0.606,
  "pillars": {
   "policy": 19.5,
   "infrastructure": 40.13,
   "governance": 60.63,
   "publicSector": 39.11,
   "development": 27.83,
   "resilience": 32.04
  },
  "globalRank": 109,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 1.8
 },
 "Burkina Faso": {
  "readiness": 0.315,
  "infra": 0.234,
  "talent": 0.15,
  "governance": 0.481,
  "pillars": {
   "policy": 23.0,
   "infrastructure": 23.39,
   "governance": 48.13,
   "publicSector": 48.35,
   "development": 15.03,
   "resilience": 30.78
  },
  "globalRank": 127,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 1.9
 },
 "Burundi": {
  "readiness": 0.175,
  "infra": 0.166,
  "talent": 0.122,
  "governance": 0.116,
  "pillars": {
   "policy": 11.5,
   "infrastructure": 16.63,
   "governance": 11.63,
   "publicSector": 36.43,
   "development": 12.19,
   "resilience": 16.62
  },
  "globalRank": 185,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.2
 },
 "Cabo Verde": {
  "readiness": 0.335,
  "infra": 0.35,
  "talent": 0.116,
  "governance": 0.355,
  "pillars": {
   "policy": 15.5,
   "infrastructure": 35.0,
   "governance": 35.49,
   "publicSector": 66.55,
   "development": 11.59,
   "resilience": 36.58
  },
  "globalRank": 122,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 1.9
 },
 "Cameroon": {
  "readiness": 0.358,
  "infra": 0.349,
  "talent": 0.292,
  "governance": 0.537,
  "pillars": {
   "policy": 34.5,
   "infrastructure": 34.92,
   "governance": 53.75,
   "publicSector": 22.49,
   "development": 29.23,
   "resilience": 39.93
  },
  "globalRank": 116,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 3.1
 },
 "Central African Republic": {
  "readiness": 0.119,
  "infra": 0.226,
  "talent": 0.096,
  "governance": 0.022,
  "pillars": {
   "policy": 11.5,
   "infrastructure": 22.64,
   "governance": 2.25,
   "publicSector": 13.91,
   "development": 9.56,
   "resilience": 11.77
  },
  "globalRank": 192,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.3
 },
 "Chad": {
  "readiness": 0.184,
  "infra": 0.205,
  "talent": 0.101,
  "governance": 0.487,
  "pillars": {
   "policy": 0.0,
   "infrastructure": 20.51,
   "governance": 48.67,
   "publicSector": 4.53,
   "development": 10.1,
   "resilience": 26.76
  },
  "globalRank": 182,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.2
 },
 "Comoros": {
  "readiness": 0.203,
  "infra": 0.318,
  "talent": 0.1,
  "governance": 0.102,
  "pillars": {
   "policy": 7.5,
   "infrastructure": 31.82,
   "governance": 10.24,
   "publicSector": 34.47,
   "development": 10.01,
   "resilience": 27.53
  },
  "globalRank": 171,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.2
 },
 "Democratic Republic of the Congo": {
  "readiness": 0.265,
  "infra": 0.2,
  "talent": 0.234,
  "governance": 0.468,
  "pillars": {
   "policy": 23.0,
   "infrastructure": 19.98,
   "governance": 46.75,
   "publicSector": 17.58,
   "development": 23.45,
   "resilience": 28.09
  },
  "globalRank": 144,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 4.6
 },
 "Republic of the Congo": {
  "readiness": 0.18,
  "infra": 0.224,
  "talent": 0.178,
  "governance": 0.315,
  "pillars": {
   "policy": 12.0,
   "infrastructure": 22.41,
   "governance": 31.49,
   "publicSector": 3.89,
   "development": 17.8,
   "resilience": 20.39
  },
  "globalRank": 178,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.2
 },
 "Côte d'Ivoire": {
  "readiness": 0.44,
  "infra": 0.412,
  "talent": 0.279,
  "governance": 0.606,
  "pillars": {
   "policy": 57.5,
   "infrastructure": 41.21,
   "governance": 60.63,
   "publicSector": 19.02,
   "development": 27.94,
   "resilience": 57.53
  },
  "globalRank": 95,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 3.8
 },
 "Djibouti": {
  "readiness": 0.225,
  "infra": 0.377,
  "talent": 0.228,
  "governance": 0.123,
  "pillars": {
   "policy": 11.5,
   "infrastructure": 37.67,
   "governance": 12.26,
   "publicSector": 26.8,
   "development": 22.81,
   "resilience": 23.89
  },
  "globalRank": 148,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.1
 },
 "Egypt": {
  "readiness": 0.64,
  "infra": 0.477,
  "talent": 0.477,
  "governance": 0.675,
  "pillars": {
   "policy": 100.0,
   "infrastructure": 47.71,
   "governance": 67.5,
   "publicSector": 60.07,
   "development": 47.68,
   "resilience": 61.14
  },
  "globalRank": 52,
  "region": "Africa",
  "source": "oxford2025",
  "imfAudit": 0.39,
  "gap": 6.1
 },
 "Equatorial Guinea": {
  "readiness": 0.15,
  "infra": 0.281,
  "talent": 0.127,
  "governance": 0.189,
  "pillars": {
   "policy": 0.0,
   "infrastructure": 28.09,
   "governance": 18.86,
   "publicSector": 2.85,
   "development": 12.67,
   "resilience": 27.29
  },
  "globalRank": 187,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.3
 },
 "Eritrea": {
  "readiness": 0.103,
  "infra": 0.254,
  "talent": 0.16,
  "governance": 0.067,
  "pillars": {
   "policy": 0.0,
   "infrastructure": 25.35,
   "governance": 6.67,
   "publicSector": 0.0,
   "development": 15.96,
   "resilience": 13.69
  },
  "globalRank": 193,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.4
 },
 "Eswatini": {
  "readiness": 0.282,
  "infra": 0.355,
  "talent": 0.106,
  "governance": 0.43,
  "pillars": {
   "policy": 16.0,
   "infrastructure": 35.45,
   "governance": 42.99,
   "publicSector": 34.88,
   "development": 10.61,
   "resilience": 29.06
  },
  "globalRank": 137,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.0
 },
 "Ethiopia": {
  "readiness": 0.442,
  "infra": 0.284,
  "talent": 0.387,
  "governance": 0.549,
  "pillars": {
   "policy": 49.5,
   "infrastructure": 28.45,
   "governance": 54.88,
   "publicSector": 44.65,
   "development": 38.7,
   "resilience": 49.09
  },
  "globalRank": 91,
  "region": "Africa",
  "source": "oxford2025",
  "imfAudit": 0.25,
  "gap": 6.5
 },
 "Gabon": {
  "readiness": 0.278,
  "infra": 0.352,
  "talent": 0.204,
  "governance": 0.512,
  "pillars": {
   "policy": 16.0,
   "infrastructure": 35.19,
   "governance": 51.25,
   "publicSector": 16.48,
   "development": 20.37,
   "resilience": 27.58
  },
  "globalRank": 133,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.0
 },
 "Gambia": {
  "readiness": 0.241,
  "infra": 0.33,
  "talent": 0.103,
  "governance": 0.378,
  "pillars": {
   "policy": 15.5,
   "infrastructure": 32.99,
   "governance": 37.79,
   "publicSector": 15.32,
   "development": 10.31,
   "resilience": 33.01
  },
  "globalRank": 153,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.1
 },
 "Ghana": {
  "readiness": 0.491,
  "infra": 0.461,
  "talent": 0.337,
  "governance": 0.662,
  "pillars": {
   "policy": 53.5,
   "infrastructure": 46.12,
   "governance": 66.25,
   "publicSector": 53.35,
   "development": 33.68,
   "resilience": 41.81
  },
  "globalRank": 78,
  "region": "Africa",
  "source": "oxford2025",
  "imfAudit": 0.43,
  "gap": 3.4
 },
 "Guinea": {
  "readiness": 0.173,
  "infra": 0.289,
  "talent": 0.116,
  "governance": 0.206,
  "pillars": {
   "policy": 4.0,
   "infrastructure": 28.91,
   "governance": 20.63,
   "publicSector": 6.01,
   "development": 11.63,
   "resilience": 32.79
  },
  "globalRank": 183,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.2
 },
 "Guinea-Bissau": {
  "readiness": 0.108,
  "infra": 0.232,
  "talent": 0.105,
  "governance": 0.101,
  "pillars": {
   "policy": 4.0,
   "infrastructure": 23.24,
   "governance": 10.11,
   "publicSector": 2.02,
   "development": 10.5,
   "resilience": 14.66
  },
  "globalRank": 195,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.4
 },
 "Kenya": {
  "readiness": 0.579,
  "infra": 0.392,
  "talent": 0.355,
  "governance": 0.706,
  "pillars": {
   "policy": 69.0,
   "infrastructure": 39.17,
   "governance": 70.63,
   "publicSector": 62.14,
   "development": 35.48,
   "resilience": 70.74
  },
  "globalRank": 68,
  "region": "Africa",
  "source": "oxford2025",
  "imfAudit": 0.45,
  "gap": 3.3
 },
 "Lesotho": {
  "readiness": 0.304,
  "infra": 0.288,
  "talent": 0.176,
  "governance": 0.388,
  "pillars": {
   "policy": 34.5,
   "infrastructure": 28.79,
   "governance": 38.79,
   "publicSector": 36.83,
   "development": 17.59,
   "resilience": 25.63
  },
  "globalRank": 131,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.0
 },
 "Liberia": {
  "readiness": 0.145,
  "infra": 0.271,
  "talent": 0.098,
  "governance": 0.035,
  "pillars": {
   "policy": 8.0,
   "infrastructure": 27.05,
   "governance": 3.5,
   "publicSector": 24.92,
   "development": 9.77,
   "resilience": 13.85
  },
  "globalRank": 189,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.3
 },
 "Libya": {
  "readiness": 0.294,
  "infra": 0.438,
  "talent": 0.189,
  "governance": 0.249,
  "pillars": {
   "policy": 39.0,
   "infrastructure": 43.8,
   "governance": 24.88,
   "publicSector": 2.09,
   "development": 18.88,
   "resilience": 47.61
  },
  "globalRank": 134,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 3.0
 },
 "Madagascar": {
  "readiness": 0.2,
  "infra": 0.274,
  "talent": 0.119,
  "governance": 0.302,
  "pillars": {
   "policy": 0.0,
   "infrastructure": 27.37,
   "governance": 30.16,
   "publicSector": 30.87,
   "development": 11.93,
   "resilience": 19.54
  },
  "globalRank": 168,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.2
 },
 "Malawi": {
  "readiness": 0.249,
  "infra": 0.287,
  "talent": 0.186,
  "governance": 0.379,
  "pillars": {
   "policy": 23.0,
   "infrastructure": 28.7,
   "governance": 37.88,
   "publicSector": 5.78,
   "development": 18.57,
   "resilience": 35.6
  },
  "globalRank": 149,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.1
 },
 "Mali": {
  "readiness": 0.223,
  "infra": 0.295,
  "talent": 0.181,
  "governance": 0.38,
  "pillars": {
   "policy": 4.0,
   "infrastructure": 29.54,
   "governance": 38.0,
   "publicSector": 26.67,
   "development": 18.12,
   "resilience": 17.64
  },
  "globalRank": 152,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.1
 },
 "Mauritania": {
  "readiness": 0.289,
  "infra": 0.286,
  "talent": 0.16,
  "governance": 0.405,
  "pillars": {
   "policy": 34.5,
   "infrastructure": 28.63,
   "governance": 40.53,
   "publicSector": 30.05,
   "development": 16.0,
   "resilience": 23.85
  },
  "globalRank": 138,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.0
 },
 "Mauritius": {
  "readiness": 0.546,
  "infra": 0.487,
  "talent": 0.385,
  "governance": 0.725,
  "pillars": {
   "policy": 65.5,
   "infrastructure": 48.72,
   "governance": 72.5,
   "publicSector": 65.63,
   "development": 38.52,
   "resilience": 36.76
  },
  "globalRank": 67,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 1.5
 },
 "Morocco": {
  "readiness": 0.426,
  "infra": 0.481,
  "talent": 0.308,
  "governance": 0.787,
  "pillars": {
   "policy": 23.0,
   "infrastructure": 48.12,
   "governance": 78.75,
   "publicSector": 34.9,
   "development": 30.81,
   "resilience": 39.78
  },
  "globalRank": 86,
  "region": "Africa",
  "source": "oxford2025",
  "imfAudit": 0.43,
  "gap": 6.0
 },
 "Mozambique": {
  "readiness": 0.227,
  "infra": 0.292,
  "talent": 0.115,
  "governance": 0.308,
  "pillars": {
   "policy": 8.0,
   "infrastructure": 29.21,
   "governance": 30.79,
   "publicSector": 21.2,
   "development": 11.46,
   "resilience": 35.42
  },
  "globalRank": 161,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.1
 },
 "Namibia": {
  "readiness": 0.379,
  "infra": 0.349,
  "talent": 0.282,
  "governance": 0.529,
  "pillars": {
   "policy": 19.5,
   "infrastructure": 34.85,
   "governance": 52.88,
   "publicSector": 44.8,
   "development": 28.21,
   "resilience": 47.15
  },
  "globalRank": 110,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 1.8
 },
 "Niger": {
  "readiness": 0.176,
  "infra": 0.184,
  "talent": 0.092,
  "governance": 0.389,
  "pillars": {
   "policy": 0.0,
   "infrastructure": 18.43,
   "governance": 38.92,
   "publicSector": 16.35,
   "development": 9.19,
   "resilience": 22.46
  },
  "globalRank": 184,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.2
 },
 "Nigeria": {
  "readiness": 0.545,
  "infra": 0.391,
  "talent": 0.395,
  "governance": 0.781,
  "pillars": {
   "policy": 80.5,
   "infrastructure": 39.1,
   "governance": 78.13,
   "publicSector": 47.46,
   "development": 39.45,
   "resilience": 42.66
  },
  "globalRank": 70,
  "region": "Africa",
  "source": "oxford2025",
  "imfAudit": 0.34,
  "gap": 9.7
 },
 "Rwanda": {
  "readiness": 0.54,
  "infra": 0.339,
  "talent": 0.294,
  "governance": 0.787,
  "pillars": {
   "policy": 73.0,
   "infrastructure": 33.92,
   "governance": 78.75,
   "publicSector": 53.62,
   "development": 29.36,
   "resilience": 55.62
  },
  "globalRank": 74,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 1.5
 },
 "São Tomé and Príncipe": {
  "readiness": 0.171,
  "infra": 0.295,
  "talent": 0.1,
  "governance": 0.279,
  "pillars": {
   "policy": 0.0,
   "infrastructure": 29.52,
   "governance": 27.86,
   "publicSector": 15.63,
   "development": 10.03,
   "resilience": 19.58
  },
  "globalRank": 180,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.2
 },
 "Senegal": {
  "readiness": 0.43,
  "infra": 0.37,
  "talent": 0.314,
  "governance": 0.634,
  "pillars": {
   "policy": 61.0,
   "infrastructure": 37.03,
   "governance": 63.38,
   "publicSector": 28.47,
   "development": 31.39,
   "resilience": 36.54
  },
  "globalRank": 96,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.1
 },
 "Seychelles": {
  "readiness": 0.26,
  "infra": 0.438,
  "talent": 0.118,
  "governance": 0.397,
  "pillars": {
   "policy": 8.0,
   "infrastructure": 43.75,
   "governance": 39.66,
   "publicSector": 26.98,
   "development": 11.77,
   "resilience": 25.67
  },
  "globalRank": 140,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.1
 },
 "Sierra Leone": {
  "readiness": 0.211,
  "infra": 0.256,
  "talent": 0.109,
  "governance": 0.159,
  "pillars": {
   "policy": 27.5,
   "infrastructure": 25.64,
   "governance": 15.92,
   "publicSector": 15.28,
   "development": 10.91,
   "resilience": 31.16
  },
  "globalRank": 175,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.2
 },
 "Somalia": {
  "readiness": 0.215,
  "infra": 0.251,
  "talent": 0.223,
  "governance": 0.253,
  "pillars": {
   "policy": 15.0,
   "infrastructure": 25.1,
   "governance": 25.29,
   "publicSector": 11.21,
   "development": 22.33,
   "resilience": 29.85
  },
  "globalRank": 164,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.1
 },
 "South Africa": {
  "readiness": 0.538,
  "infra": 0.6,
  "talent": 0.373,
  "governance": 0.766,
  "pillars": {
   "policy": 43.0,
   "infrastructure": 60.05,
   "governance": 76.58,
   "publicSector": 64.93,
   "development": 37.28,
   "resilience": 40.81
  },
  "globalRank": 65,
  "region": "Africa",
  "source": "oxford2025",
  "imfAudit": 0.5,
  "gap": 10.4
 },
 "South Sudan": {
  "readiness": 0.108,
  "infra": 0.244,
  "talent": 0.114,
  "governance": 0.046,
  "pillars": {
   "policy": 0.0,
   "infrastructure": 24.39,
   "governance": 4.63,
   "publicSector": 1.88,
   "development": 11.43,
   "resilience": 22.73
  },
  "globalRank": 194,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.4
 },
 "Sudan": {
  "readiness": 0.152,
  "infra": 0.245,
  "talent": 0.12,
  "governance": 0.174,
  "pillars": {
   "policy": 0.0,
   "infrastructure": 24.5,
   "governance": 17.36,
   "publicSector": 14.55,
   "development": 11.97,
   "resilience": 23.02
  },
  "globalRank": 186,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 3.5
 },
 "Tanzania": {
  "readiness": 0.418,
  "infra": 0.347,
  "talent": 0.292,
  "governance": 0.662,
  "pillars": {
   "policy": 15.5,
   "infrastructure": 34.68,
   "governance": 66.25,
   "publicSector": 69.24,
   "development": 29.23,
   "resilience": 35.98
  },
  "globalRank": 93,
  "region": "Africa",
  "source": "oxford2025",
  "imfAudit": 0.35,
  "gap": 3.9
 },
 "Togo": {
  "readiness": 0.319,
  "infra": 0.321,
  "talent": 0.12,
  "governance": 0.55,
  "pillars": {
   "policy": 16.0,
   "infrastructure": 32.13,
   "governance": 55.0,
   "publicSector": 41.04,
   "development": 12.04,
   "resilience": 35.37
  },
  "globalRank": 124,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 1.9
 },
 "Tunisia": {
  "readiness": 0.411,
  "infra": 0.436,
  "talent": 0.367,
  "governance": 0.59,
  "pillars": {
   "policy": 19.5,
   "infrastructure": 43.61,
   "governance": 59.0,
   "publicSector": 51.19,
   "development": 36.68,
   "resilience": 36.76
  },
  "globalRank": 88,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.9
 },
 "Uganda": {
  "readiness": 0.362,
  "infra": 0.339,
  "talent": 0.209,
  "governance": 0.458,
  "pillars": {
   "policy": 12.0,
   "infrastructure": 33.92,
   "governance": 45.75,
   "publicSector": 70.84,
   "development": 20.91,
   "resilience": 33.65
  },
  "globalRank": 113,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 3.1
 },
 "Zambia": {
  "readiness": 0.473,
  "infra": 0.352,
  "talent": 0.301,
  "governance": 0.613,
  "pillars": {
   "policy": 53.5,
   "infrastructure": 35.25,
   "governance": 61.25,
   "publicSector": 53.49,
   "development": 30.08,
   "resilience": 50.11
  },
  "globalRank": 82,
  "region": "Africa",
  "source": "oxford2025",
  "imfAudit": 0.37,
  "gap": 1.9
 },
 "Zimbabwe": {
  "readiness": 0.294,
  "infra": 0.294,
  "talent": 0.23,
  "governance": 0.53,
  "pillars": {
   "policy": 12.0,
   "infrastructure": 29.37,
   "governance": 53.0,
   "publicSector": 27.63,
   "development": 23.0,
   "resilience": 31.45
  },
  "globalRank": 126,
  "region": "Africa",
  "source": "oxford2025",
  "gap": 2.0
 },
 "United States": {
  "readiness": 0.877,
  "infra": 0.918,
  "talent": 0.882,
  "governance": 0.825,
  "pillars": {
   "policy": 92.5,
   "infrastructure": 91.77,
   "governance": 82.5,
   "publicSector": 92.87,
   "development": 88.16,
   "resilience": 78.28
  },
  "globalRank": 1,
  "region": "G7",
  "source": "oxford2025",
  "imfAudit": 0.77,
  "gap": 0
 },
 "Germany": {
  "readiness": 0.786,
  "infra": 0.733,
  "talent": 0.662,
  "governance": 0.912,
  "pillars": {
   "policy": 84.5,
   "infrastructure": 73.28,
   "governance": 91.17,
   "publicSector": 82.89,
   "development": 66.24,
   "resilience": 73.37
  },
  "globalRank": 6,
  "region": "G7",
  "source": "oxford2025",
  "imfAudit": 0.75,
  "gap": 0
 },
 "United Kingdom": {
  "readiness": 0.809,
  "infra": 0.725,
  "talent": 0.685,
  "governance": 0.923,
  "pillars": {
   "policy": 100.0,
   "infrastructure": 72.49,
   "governance": 92.27,
   "publicSector": 68.93,
   "development": 68.46,
   "resilience": 83.3
  },
  "globalRank": 3,
  "region": "G7",
  "source": "oxford2025",
  "imfAudit": 0.73,
  "gap": 0
 },
 "Japan": {
  "readiness": 0.734,
  "infra": 0.706,
  "talent": 0.661,
  "governance": 0.805,
  "pillars": {
   "policy": 70.0,
   "infrastructure": 70.62,
   "governance": 80.46,
   "publicSector": 72.71,
   "development": 66.13,
   "resilience": 80.75
  },
  "globalRank": 14,
  "region": "G7",
  "source": "oxford2025",
  "imfAudit": 0.73,
  "gap": 0
 },
 "Canada": {
  "readiness": 0.761,
  "infra": 0.723,
  "talent": 0.69,
  "governance": 0.768,
  "pillars": {
   "policy": 92.5,
   "infrastructure": 72.32,
   "governance": 76.85,
   "publicSector": 78.6,
   "development": 69.03,
   "resilience": 67.57
  },
  "globalRank": 12,
  "region": "G7",
  "source": "oxford2025",
  "imfAudit": 0.71,
  "gap": 0
 },
 "France": {
  "readiness": 0.83,
  "infra": 0.763,
  "talent": 0.682,
  "governance": 0.9,
  "pillars": {
   "policy": 77.5,
   "infrastructure": 76.27,
   "governance": 90.0,
   "publicSector": 97.18,
   "development": 68.2,
   "resilience": 88.63
  },
  "globalRank": 2,
  "region": "G7",
  "source": "oxford2025",
  "imfAudit": 0.7,
  "gap": 0
 },
 "Italy": {
  "readiness": 0.705,
  "infra": 0.636,
  "talent": 0.614,
  "governance": 0.858,
  "pillars": {
   "policy": 69.5,
   "infrastructure": 63.56,
   "governance": 85.77,
   "publicSector": 70.24,
   "development": 61.38,
   "resilience": 72.28
  },
  "globalRank": 25,
  "region": "G7",
  "source": "oxford2025",
  "imfAudit": 0.62,
  "gap": 0
 }
};
