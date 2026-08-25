// AI readiness dataset — country explorer, africaaimoment.com
// SOURCE OF TRUTH: Oxford Insights, Government AI Readiness Index 2024 (188 countries), via the cleaned CSV
//   https://github.com/albadi140/goverment_ai_amplification/blob/main/data/ai_readiness_2024.csv
//   Official report: https://oxfordinsights.com/ai-readiness/  (2024 edition, published Dec 2024)
//   Africa commentary: https://www.ictworks.org/african-government-ai-readiness/
// Conversion: all 0–100 Oxford scores divided by 100 to the 0–1.0 scale used on the site.
//   readiness  = Oxford Total score /100                      (official overall)
//   government = Government pillar /100                       (vision, governance & ethics, digital capacity, adaptability)
//   infra      = Data & Infrastructure pillar /100            (infrastructure, data availability, data representativeness)
//   innovation = Technology Sector pillar /100                (maturity, innovation capacity, human capital) — used for the Innovation & Integration column
//   oxford2024 = raw 0–100 values + global rank (1–188) computed from Total
//   imfAudit   = IMF AI Preparedness Index value (0–1, a different index) from the book's Bonus Report, 17 audited economies
//   gap        = ILLUSTRATIVE funding gap vs G7 average in US$ billions (placeholder formula, not a source figure). G7 = 0.
// Validation: Stanford HAI Global AI Vibrancy 2025 (16 African states) — https://hai.stanford.edu/ai-index
// Replace with the final audit by keeping the field names and setting source:"audit".
window.AI_DATA = {
 "Algeria": {
  "readiness": 0.3906,
  "government": 0.3168,
  "infra": 0.5224,
  "innovation": 0.3326,
  "oxford2024": {
   "total": 39.06,
   "government": 31.68,
   "technologySector": 33.26,
   "dataInfrastructure": 52.24,
   "globalRank": 115
  },
  "region": "Africa",
  "source": "oxford2024",
  "imfAudit": 0.37,
  "gap": 10.4
 },
 "Angola": {
  "readiness": 0.2691,
  "government": 0.1973,
  "infra": 0.4513,
  "innovation": 0.1587,
  "oxford2024": {
   "total": 26.91,
   "government": 19.73,
   "technologySector": 15.87,
   "dataInfrastructure": 45.13,
   "globalRank": 169
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 5.6
 },
 "Benin": {
  "readiness": 0.4297,
  "government": 0.5992,
  "infra": 0.4468,
  "innovation": 0.243,
  "oxford2024": {
   "total": 42.97,
   "government": 59.92,
   "technologySector": 24.3,
   "dataInfrastructure": 44.68,
   "globalRank": 96
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 1.7
 },
 "Botswana": {
  "readiness": 0.3816,
  "government": 0.3514,
  "infra": 0.4912,
  "innovation": 0.3023,
  "oxford2024": {
   "total": 38.16,
   "government": 35.14,
   "technologySector": 30.23,
   "dataInfrastructure": 49.12,
   "globalRank": 120
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 1.8
 },
 "Burkina Faso": {
  "readiness": 0.2928,
  "government": 0.2569,
  "infra": 0.4092,
  "innovation": 0.2122,
  "oxford2024": {
   "total": 29.28,
   "government": 25.69,
   "technologySector": 21.22,
   "dataInfrastructure": 40.92,
   "globalRank": 162
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.0
 },
 "Burundi": {
  "readiness": 0.2113,
  "government": 0.1662,
  "infra": 0.2784,
  "innovation": 0.1895,
  "oxford2024": {
   "total": 21.13,
   "government": 16.62,
   "technologySector": 18.95,
   "dataInfrastructure": 27.84,
   "globalRank": 182
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.1
 },
 "Cabo Verde": {
  "readiness": 0.4067,
  "government": 0.3958,
  "infra": 0.5519,
  "innovation": 0.2725,
  "oxford2024": {
   "total": 40.67,
   "government": 39.58,
   "technologySector": 27.25,
   "dataInfrastructure": 55.19,
   "globalRank": 108
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 1.8
 },
 "Cameroon": {
  "readiness": 0.3346,
  "government": 0.301,
  "infra": 0.4163,
  "innovation": 0.2864,
  "oxford2024": {
   "total": 33.46,
   "government": 30.1,
   "technologySector": 28.64,
   "dataInfrastructure": 41.63,
   "globalRank": 147
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 3.2
 },
 "Central African Republic": {
  "readiness": 0.2026,
  "government": 0.1207,
  "infra": 0.2877,
  "innovation": 0.1995,
  "oxford2024": {
   "total": 20.26,
   "government": 12.07,
   "technologySector": 19.95,
   "dataInfrastructure": 28.77,
   "globalRank": 183
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.2
 },
 "Chad": {
  "readiness": 0.2266,
  "government": 0.2094,
  "infra": 0.2882,
  "innovation": 0.1822,
  "oxford2024": {
   "total": 22.66,
   "government": 20.94,
   "technologySector": 18.22,
   "dataInfrastructure": 28.82,
   "globalRank": 179
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.1
 },
 "Comoros": {
  "readiness": 0.2665,
  "government": 0.1722,
  "infra": 0.3897,
  "innovation": 0.2375,
  "oxford2024": {
   "total": 26.65,
   "government": 17.22,
   "technologySector": 23.75,
   "dataInfrastructure": 38.97,
   "globalRank": 170
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.0
 },
 "Democratic Republic of the Congo": {
  "readiness": 0.221,
  "government": 0.1796,
  "infra": 0.3234,
  "innovation": 0.1599,
  "oxford2024": {
   "total": 22.1,
   "government": 17.96,
   "technologySector": 15.99,
   "dataInfrastructure": 32.34,
   "globalRank": 181
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 4.9
 },
 "Republic of the Congo": {
  "readiness": 0.2512,
  "government": 0.224,
  "infra": 0.3024,
  "innovation": 0.2271,
  "oxford2024": {
   "total": 25.12,
   "government": 22.4,
   "technologySector": 22.71,
   "dataInfrastructure": 30.24,
   "globalRank": 175
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.1
 },
 "Côte d'Ivoire": {
  "readiness": 0.3469,
  "government": 0.3115,
  "infra": 0.4681,
  "innovation": 0.261,
  "oxford2024": {
   "total": 34.69,
   "government": 31.15,
   "technologySector": 26.1,
   "dataInfrastructure": 46.81,
   "globalRank": 140
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 4.5
 },
 "Djibouti": {
  "readiness": 0.3519,
  "government": 0.2313,
  "infra": 0.4961,
  "innovation": 0.3284,
  "oxford2024": {
   "total": 35.19,
   "government": 23.13,
   "technologySector": 32.84,
   "dataInfrastructure": 49.61,
   "globalRank": 138
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 1.9
 },
 "Egypt": {
  "readiness": 0.5563,
  "government": 0.6898,
  "infra": 0.5577,
  "innovation": 0.4213,
  "oxford2024": {
   "total": 55.63,
   "government": 68.98,
   "technologySector": 42.13,
   "dataInfrastructure": 55.77,
   "globalRank": 65
  },
  "region": "Africa",
  "source": "oxford2024",
  "imfAudit": 0.39,
  "gap": 8.9
 },
 "Equatorial Guinea": {
  "readiness": 0.2709,
  "government": 0.1928,
  "infra": 0.3631,
  "innovation": 0.2568,
  "oxford2024": {
   "total": 27.09,
   "government": 19.28,
   "technologySector": 25.68,
   "dataInfrastructure": 36.31,
   "globalRank": 167
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.0
 },
 "Eritrea": {
  "readiness": 0.222,
  "government": 0.083,
  "infra": 0.3522,
  "innovation": 0.2307,
  "oxford2024": {
   "total": 22.2,
   "government": 8.3,
   "technologySector": 23.07,
   "dataInfrastructure": 35.22,
   "globalRank": 180
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.1
 },
 "Eswatini": {
  "readiness": 0.3623,
  "government": 0.2911,
  "infra": 0.5336,
  "innovation": 0.262,
  "oxford2024": {
   "total": 36.23,
   "government": 29.11,
   "technologySector": 26.2,
   "dataInfrastructure": 53.36,
   "globalRank": 136
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 1.8
 },
 "Ethiopia": {
  "readiness": 0.3834,
  "government": 0.5146,
  "infra": 0.4198,
  "innovation": 0.2157,
  "oxford2024": {
   "total": 38.34,
   "government": 51.46,
   "technologySector": 21.57,
   "dataInfrastructure": 41.98,
   "globalRank": 119
  },
  "region": "Africa",
  "source": "oxford2024",
  "imfAudit": 0.25,
  "gap": 7.4
 },
 "Gabon": {
  "readiness": 0.3415,
  "government": 0.2545,
  "infra": 0.4922,
  "innovation": 0.2777,
  "oxford2024": {
   "total": 34.15,
   "government": 25.45,
   "technologySector": 27.77,
   "dataInfrastructure": 49.22,
   "globalRank": 144
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 1.9
 },
 "Gambia": {
  "readiness": 0.2695,
  "government": 0.2325,
  "infra": 0.3792,
  "innovation": 0.1967,
  "oxford2024": {
   "total": 26.95,
   "government": 23.25,
   "technologySector": 19.67,
   "dataInfrastructure": 37.92,
   "globalRank": 168
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.0
 },
 "Ghana": {
  "readiness": 0.433,
  "government": 0.5953,
  "infra": 0.4503,
  "innovation": 0.2535,
  "oxford2024": {
   "total": 43.3,
   "government": 59.53,
   "technologySector": 25.35,
   "dataInfrastructure": 45.03,
   "globalRank": 95
  },
  "region": "Africa",
  "source": "oxford2024",
  "imfAudit": 0.43,
  "gap": 3.8
 },
 "Guinea": {
  "readiness": 0.3021,
  "government": 0.2563,
  "infra": 0.4277,
  "innovation": 0.2224,
  "oxford2024": {
   "total": 30.21,
   "government": 25.63,
   "technologySector": 22.24,
   "dataInfrastructure": 42.77,
   "globalRank": 158
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.0
 },
 "Guinea-Bissau": {
  "readiness": 0.2571,
  "government": 0.1465,
  "infra": 0.4201,
  "innovation": 0.2046,
  "oxford2024": {
   "total": 25.71,
   "government": 14.65,
   "technologySector": 20.46,
   "dataInfrastructure": 42.01,
   "globalRank": 172
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.0
 },
 "Kenya": {
  "readiness": 0.4356,
  "government": 0.562,
  "infra": 0.4349,
  "innovation": 0.3098,
  "oxford2024": {
   "total": 43.56,
   "government": 56.2,
   "technologySector": 30.98,
   "dataInfrastructure": 43.49,
   "globalRank": 93
  },
  "region": "Africa",
  "source": "oxford2024",
  "imfAudit": 0.45,
  "gap": 4.8
 },
 "Lesotho": {
  "readiness": 0.2821,
  "government": 0.2466,
  "infra": 0.389,
  "innovation": 0.2108,
  "oxford2024": {
   "total": 28.21,
   "government": 24.66,
   "technologySector": 21.08,
   "dataInfrastructure": 38.9,
   "globalRank": 166
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.0
 },
 "Liberia": {
  "readiness": 0.2312,
  "government": 0.1658,
  "infra": 0.319,
  "innovation": 0.2089,
  "oxford2024": {
   "total": 23.12,
   "government": 16.58,
   "technologySector": 20.89,
   "dataInfrastructure": 31.9,
   "globalRank": 178
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.1
 },
 "Libya": {
  "readiness": 0.3325,
  "government": 0.1641,
  "infra": 0.488,
  "innovation": 0.3453,
  "oxford2024": {
   "total": 33.25,
   "government": 16.41,
   "technologySector": 34.53,
   "dataInfrastructure": 48.8,
   "globalRank": 149
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.8
 },
 "Madagascar": {
  "readiness": 0.288,
  "government": 0.253,
  "infra": 0.3992,
  "innovation": 0.2119,
  "oxford2024": {
   "total": 28.8,
   "government": 25.3,
   "technologySector": 21.19,
   "dataInfrastructure": 39.92,
   "globalRank": 164
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.0
 },
 "Malawi": {
  "readiness": 0.2932,
  "government": 0.2785,
  "infra": 0.3632,
  "innovation": 0.2379,
  "oxford2024": {
   "total": 29.32,
   "government": 27.85,
   "technologySector": 23.79,
   "dataInfrastructure": 36.32,
   "globalRank": 161
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.0
 },
 "Mali": {
  "readiness": 0.3227,
  "government": 0.26,
  "infra": 0.4836,
  "innovation": 0.2244,
  "oxford2024": {
   "total": 32.27,
   "government": 26.0,
   "technologySector": 22.44,
   "dataInfrastructure": 48.36,
   "globalRank": 155
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 1.9
 },
 "Mauritania": {
  "readiness": 0.414,
  "government": 0.5012,
  "infra": 0.4498,
  "innovation": 0.291,
  "oxford2024": {
   "total": 41.4,
   "government": 50.12,
   "technologySector": 29.1,
   "dataInfrastructure": 44.98,
   "globalRank": 105
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 1.7
 },
 "Mauritius": {
  "readiness": 0.5394,
  "government": 0.6531,
  "infra": 0.6381,
  "innovation": 0.3271,
  "oxford2024": {
   "total": 53.94,
   "government": 65.31,
   "technologySector": 32.71,
   "dataInfrastructure": 63.81,
   "globalRank": 69
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 1.5
 },
 "Morocco": {
  "readiness": 0.4178,
  "government": 0.3482,
  "infra": 0.5382,
  "innovation": 0.367,
  "oxford2024": {
   "total": 41.78,
   "government": 34.82,
   "technologySector": 36.7,
   "dataInfrastructure": 53.82,
   "globalRank": 101
  },
  "region": "Africa",
  "source": "oxford2024",
  "imfAudit": 0.43,
  "gap": 6.1
 },
 "Mozambique": {
  "readiness": 0.2422,
  "government": 0.2086,
  "infra": 0.3357,
  "innovation": 0.1823,
  "oxford2024": {
   "total": 24.22,
   "government": 20.86,
   "technologySector": 18.23,
   "dataInfrastructure": 33.57,
   "globalRank": 177
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.1
 },
 "Namibia": {
  "readiness": 0.3328,
  "government": 0.2856,
  "infra": 0.4592,
  "innovation": 0.2536,
  "oxford2024": {
   "total": 33.28,
   "government": 28.56,
   "technologySector": 25.36,
   "dataInfrastructure": 45.92,
   "globalRank": 148
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 1.9
 },
 "Niger": {
  "readiness": 0.2574,
  "government": 0.2422,
  "infra": 0.3587,
  "innovation": 0.1715,
  "oxford2024": {
   "total": 25.74,
   "government": 24.22,
   "technologySector": 17.15,
   "dataInfrastructure": 35.87,
   "globalRank": 171
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.0
 },
 "Nigeria": {
  "readiness": 0.4333,
  "government": 0.5988,
  "infra": 0.4299,
  "innovation": 0.2711,
  "oxford2024": {
   "total": 43.33,
   "government": 59.88,
   "technologySector": 27.11,
   "dataInfrastructure": 42.99,
   "globalRank": 94
  },
  "region": "Africa",
  "source": "oxford2024",
  "imfAudit": 0.34,
  "gap": 13.5
 },
 "Rwanda": {
  "readiness": 0.5125,
  "government": 0.7144,
  "infra": 0.5202,
  "innovation": 0.303,
  "oxford2024": {
   "total": 51.25,
   "government": 71.44,
   "technologySector": 30.3,
   "dataInfrastructure": 52.02,
   "globalRank": 78
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 1.5
 },
 "São Tomé and Príncipe": {
  "readiness": 0.2963,
  "government": 0.2482,
  "infra": 0.4039,
  "innovation": 0.2369,
  "oxford2024": {
   "total": 29.63,
   "government": 24.82,
   "technologySector": 23.69,
   "dataInfrastructure": 40.39,
   "globalRank": 160
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.0
 },
 "Senegal": {
  "readiness": 0.4611,
  "government": 0.6237,
  "infra": 0.4718,
  "innovation": 0.2877,
  "oxford2024": {
   "total": 46.11,
   "government": 62.37,
   "technologySector": 28.77,
   "dataInfrastructure": 47.18,
   "globalRank": 83
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.0
 },
 "Seychelles": {
  "readiness": 0.4477,
  "government": 0.4141,
  "infra": 0.5609,
  "innovation": 0.3681,
  "oxford2024": {
   "total": 44.77,
   "government": 41.41,
   "technologySector": 36.81,
   "dataInfrastructure": 56.09,
   "globalRank": 87
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 1.7
 },
 "Sierra Leone": {
  "readiness": 0.2534,
  "government": 0.2196,
  "infra": 0.3633,
  "innovation": 0.1772,
  "oxford2024": {
   "total": 25.34,
   "government": 21.96,
   "technologySector": 17.72,
   "dataInfrastructure": 36.33,
   "globalRank": 173
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.1
 },
 "Somalia": {
  "readiness": 0.2532,
  "government": 0.1905,
  "infra": 0.3654,
  "innovation": 0.2036,
  "oxford2024": {
   "total": 25.32,
   "government": 19.05,
   "technologySector": 20.36,
   "dataInfrastructure": 36.54,
   "globalRank": 174
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.1
 },
 "South Africa": {
  "readiness": 0.5291,
  "government": 0.543,
  "infra": 0.6528,
  "innovation": 0.3915,
  "oxford2024": {
   "total": 52.91,
   "government": 54.3,
   "technologySector": 39.15,
   "dataInfrastructure": 65.28,
   "globalRank": 72
  },
  "region": "Africa",
  "source": "oxford2024",
  "imfAudit": 0.5,
  "gap": 10.6
 },
 "South Sudan": {
  "readiness": 0.1858,
  "government": 0.1104,
  "infra": 0.2496,
  "innovation": 0.1974,
  "oxford2024": {
   "total": 18.58,
   "government": 11.04,
   "technologySector": 19.74,
   "dataInfrastructure": 24.96,
   "globalRank": 185
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.2
 },
 "Sudan": {
  "readiness": 0.2463,
  "government": 0.1332,
  "infra": 0.3628,
  "innovation": 0.2429,
  "oxford2024": {
   "total": 24.63,
   "government": 13.32,
   "technologySector": 24.29,
   "dataInfrastructure": 36.28,
   "globalRank": 176
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 3.1
 },
 "Tanzania": {
  "readiness": 0.3508,
  "government": 0.3664,
  "infra": 0.4762,
  "innovation": 0.2098,
  "oxford2024": {
   "total": 35.08,
   "government": 36.64,
   "technologySector": 20.98,
   "dataInfrastructure": 47.62,
   "globalRank": 139
  },
  "region": "Africa",
  "source": "oxford2024",
  "imfAudit": 0.35,
  "gap": 4.4
 },
 "Togo": {
  "readiness": 0.3132,
  "government": 0.3121,
  "infra": 0.4192,
  "innovation": 0.2082,
  "oxford2024": {
   "total": 31.32,
   "government": 31.21,
   "technologySector": 20.82,
   "dataInfrastructure": 41.92,
   "globalRank": 157
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 1.9
 },
 "Tunisia": {
  "readiness": 0.4368,
  "government": 0.2862,
  "infra": 0.6135,
  "innovation": 0.4107,
  "oxford2024": {
   "total": 43.68,
   "government": 28.62,
   "technologySector": 41.07,
   "dataInfrastructure": 61.35,
   "globalRank": 92
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 2.7
 },
 "Uganda": {
  "readiness": 0.3463,
  "government": 0.3557,
  "infra": 0.461,
  "innovation": 0.2223,
  "oxford2024": {
   "total": 34.63,
   "government": 35.57,
   "technologySector": 22.23,
   "dataInfrastructure": 46.1,
   "globalRank": 141
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 3.2
 },
 "Zambia": {
  "readiness": 0.4187,
  "government": 0.6078,
  "infra": 0.4163,
  "innovation": 0.2322,
  "oxford2024": {
   "total": 41.87,
   "government": 60.78,
   "technologySector": 23.22,
   "dataInfrastructure": 41.63,
   "globalRank": 100
  },
  "region": "Africa",
  "source": "oxford2024",
  "imfAudit": 0.37,
  "gap": 2.1
 },
 "Zimbabwe": {
  "readiness": 0.3259,
  "government": 0.2369,
  "infra": 0.4627,
  "innovation": 0.2782,
  "oxford2024": {
   "total": 32.59,
   "government": 23.69,
   "technologySector": 27.82,
   "dataInfrastructure": 46.27,
   "globalRank": 154
  },
  "region": "Africa",
  "source": "oxford2024",
  "gap": 1.9
 },
 "United States": {
  "readiness": 0.8703,
  "government": 0.8926,
  "infra": 0.909,
  "innovation": 0.8094,
  "oxford2024": {
   "total": 87.03,
   "government": 89.26,
   "technologySector": 80.94,
   "dataInfrastructure": 90.9,
   "globalRank": 1
  },
  "region": "G7",
  "source": "oxford2024",
  "imfAudit": 0.77,
  "gap": 0
 },
 "Germany": {
  "readiness": 0.769,
  "government": 0.7924,
  "infra": 0.8655,
  "innovation": 0.6491,
  "oxford2024": {
   "total": 76.9,
   "government": 79.24,
   "technologySector": 64.91,
   "dataInfrastructure": 86.55,
   "globalRank": 8
  },
  "region": "G7",
  "source": "oxford2024",
  "imfAudit": 0.75,
  "gap": 0
 },
 "United Kingdom": {
  "readiness": 0.7888,
  "government": 0.8447,
  "infra": 0.8562,
  "innovation": 0.6657,
  "oxford2024": {
   "total": 78.88,
   "government": 84.47,
   "technologySector": 66.57,
   "dataInfrastructure": 85.62,
   "globalRank": 5
  },
  "region": "G7",
  "source": "oxford2024",
  "imfAudit": 0.73,
  "gap": 0
 },
 "Japan": {
  "readiness": 0.7575,
  "government": 0.8031,
  "infra": 0.8898,
  "innovation": 0.5796,
  "oxford2024": {
   "total": 75.75,
   "government": 80.31,
   "technologySector": 57.96,
   "dataInfrastructure": 88.98,
   "globalRank": 12
  },
  "region": "G7",
  "source": "oxford2024",
  "imfAudit": 0.73,
  "gap": 0
 },
 "Canada": {
  "readiness": 0.7818,
  "government": 0.8548,
  "infra": 0.8735,
  "innovation": 0.6169,
  "oxford2024": {
   "total": 78.18,
   "government": 85.48,
   "technologySector": 61.69,
   "dataInfrastructure": 87.35,
   "globalRank": 6
  },
  "region": "G7",
  "source": "oxford2024",
  "imfAudit": 0.71,
  "gap": 0
 },
 "France": {
  "readiness": 0.7936,
  "government": 0.8529,
  "infra": 0.8925,
  "innovation": 0.6353,
  "oxford2024": {
   "total": 79.36,
   "government": 85.29,
   "technologySector": 63.53,
   "dataInfrastructure": 89.25,
   "globalRank": 4
  },
  "region": "G7",
  "source": "oxford2024",
  "imfAudit": 0.7,
  "gap": 0
 },
 "Italy": {
  "readiness": 0.7122,
  "government": 0.7864,
  "infra": 0.8188,
  "innovation": 0.5312,
  "oxford2024": {
   "total": 71.22,
   "government": 78.64,
   "technologySector": 53.12,
   "dataInfrastructure": 81.88,
   "globalRank": 25
  },
  "region": "G7",
  "source": "oxford2024",
  "imfAudit": 0.62,
  "gap": 0
 }
};
