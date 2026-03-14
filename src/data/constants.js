// ─── Formatters ───────────────────────────────────────────────────────────────
export const RATE = 131.41;
export const fmtUSD = (n) => `$${n.toLocaleString()}M`;
export const fmtHTG = (n) =>
  `G ${(n * RATE).toLocaleString(undefined, { maximumFractionDigits: 0 })}M`;

// ─── Haiti Healthcare Crisis Data ─────────────────────────────────────────────
export const CRISIS_STATS = [
  { value: "1.4", unit: "per 10,000", label: "Physicians Density", desc: "Only 1.4 doctors per 10,000 people vs 25+ in developed nations", icon: "🩺", severity: "critical" },
  { value: "529", unit: "per 100,000", label: "Maternal Mortality", desc: "Among the highest in the Western Hemisphere — 10× the Caribbean average", icon: "🤰", severity: "critical" },
  { value: "42", unit: "per 1,000", label: "Under-5 Mortality", desc: "42 children per 1,000 live births die before age 5", icon: "💔", severity: "critical" },
  { value: "36%", unit: "of population", label: "Unmet Healthcare", desc: "Over one-third of Haitians have no access to any healthcare services", icon: "🚫", severity: "high" },
  { value: "$13", unit: "USD/year", label: "Health Spending/Person", desc: "Government spends just $13 per capita annually on health (WHO recommends $86+)", icon: "💸", severity: "critical" },
  { value: "0.3", unit: "beds per 1,000", label: "Hospital Bed Density", desc: "Only 0.3 hospital beds per 1,000 population — far below the 2.5 global average", icon: "🛏️", severity: "critical" },
  { value: "62%", unit: "of deaths", label: "Preventable Deaths", desc: "62% of deaths in Haiti could be prevented with basic medical care", icon: "⚠️", severity: "high" },
  { value: "$300M+", unit: "per year", label: "Medical Tourism Outflow", desc: "Haitians spend over $300 million annually seeking care abroad", icon: "✈️", severity: "high" },
];

export const HEALTH_PROBLEMS = [
  {
    icon: "🏚️", title: "Crumbling Infrastructure", color: "#E74C3C",
    points: [
      "80% of health facilities fail to meet minimum WHO standards",
      "Post-2010 earthquake damage remains unrepaired at many sites",
      "Only 2 functioning CT scanners exist in the entire country",
      "Severe shortage of ICU beds — fewer than 100 nationwide",
      "Unreliable electricity disrupts life-saving equipment daily",
    ],
    stat: "80%", statLabel: "Facilities Below Standards",
  },
  {
    icon: "👨‍⚕️", title: "Healthcare Worker Crisis", color: "#E67E22",
    points: [
      "Over 60% of trained Haitian doctors emigrate within 5 years",
      "No full medical residency programs available in-country",
      "Nurse-to-patient ratio 1:50 (WHO recommends 1:6)",
      "Less than 20 specialized surgeons for 11 million people",
      "Low salaries drive talent to Dominican Republic and USA",
    ],
    stat: "60%+", statLabel: "Doctor Brain-Drain Rate",
  },
  {
    icon: "💊", title: "Medication & Supply Chain", color: "#8E44AD",
    points: [
      "70% of essential medications must be imported",
      "Frequent drug stockouts at public hospitals",
      "Cold chain failures affect vaccine efficacy",
      "No domestic pharmaceutical production capacity",
      "Black market medications pose serious safety risks",
    ],
    stat: "70%", statLabel: "Medications Imported",
  },
  {
    icon: "🦠", title: "Disease Burden", color: "#27AE60",
    points: [
      "Cholera epidemic resurgent since 2022 (6,000+ new cases)",
      "HIV prevalence 2.3% — highest in Caribbean",
      "Tuberculosis rate 212 per 100,000 (10× regional average)",
      "Malaria endemic in rural and coastal areas",
      "Non-communicable diseases rising rapidly with no specialist care",
    ],
    stat: "2.3%", statLabel: "HIV Prevalence",
  },
  {
    icon: "🏥", title: "Geographic Access Barriers", color: "#2980B9",
    points: [
      "Only Port-au-Prince has any semblance of specialist care",
      "Rural population (65%) travels 4+ hours for basic care",
      "No functional ambulance system outside capital",
      "9 of 10 departments have zero specialist physicians",
      "Island communities entirely dependent on NGO clinics",
    ],
    stat: "65%", statLabel: "Rural Population Underserved",
  },
  {
    icon: "💰", title: "Financial Barriers to Care", color: "#F39C12",
    points: [
      "60%+ of Haitian families cannot afford basic consultations",
      "Out-of-pocket spending is 45% of all health expenditure",
      "No functional national health insurance system",
      "Catastrophic health expenditure pushes families into poverty",
      "Emergency care often refused without upfront payment",
    ],
    stat: "45%", statLabel: "Out-of-Pocket Health Spending",
  },
];

export const HEALTH_COMPARISONS = [
  { country: "Haiti",            physicians: 1.4,  maternal: 529, life: 64,  beds: 0.3,  spending: 13  },
  { country: "Dominican Rep.",   physicians: 15.3, maternal: 107, life: 74,  beds: 1.6,  spending: 420 },
  { country: "Cuba",             physicians: 84.2, maternal: 36,  life: 79,  beds: 5.3,  spending: 813 },
  { country: "Jamaica",          physicians: 12.8, maternal: 80,  life: 76,  beds: 1.7,  spending: 362 },
  { country: "Average (Carib.)", physicians: 18.0, maternal: 95,  life: 75,  beds: 2.0,  spending: 380 },
  { country: "HNIH Target",      physicians: 8.0,  maternal: 150, life: 72,  beds: 1.2,  spending: 120 },
];

export const SOLUTIONS_LIST = [
  {
    icon: "🏥", title: "World-Class Hospital Campus", color: "#0055B3",
    desc: "A 1,200-bed national referral hospital with 12 specialties, built to JCI international accreditation standards — the first in Haiti.",
    details: [
      "12 specialized departments covering all major medical fields",
      "ICU with 80 critical care beds (compared to <100 nationwide today)",
      "4 operating theaters + cardiac surgery suite",
      "Helipad for emergency medical transport",
      "40% of beds reserved for free care for the poorest",
    ],
  },
  {
    icon: "📡", title: "Telemedicine Network", color: "#0077D4",
    desc: "A satellite clinic network connecting 9 provincial health centers via real-time telemedicine, bringing specialist care to rural Haiti.",
    details: [
      "1 clinic per department (10 departments covered)",
      "Video consultations with HNIH specialists",
      "Remote diagnostic support and follow-up",
      "Mobile health units for remote communities",
      "Digital health records shared across the network",
    ],
  },
  {
    icon: "🎓", title: "Medical Education Hub", color: "#00A3E0",
    desc: "Haiti's first full-spectrum medical residency program, training 500 healthcare professionals per year to eliminate the brain-drain cycle.",
    details: [
      "Residency programs in 12 specialties",
      "500 doctors, nurses, and technicians trained annually",
      "International partnerships with Harvard, Tulane, and McGill",
      "Scholarship programs for talented low-income students",
      "Continuing education for existing healthcare workers",
    ],
  },
  {
    icon: "🤖", title: "AI & Digital Health", color: "#8E44AD",
    desc: "Cutting-edge AI diagnostic tools, electronic health records, and smart hospital systems to maximize efficiency and care quality.",
    details: [
      "AI-assisted radiology reading (X-ray, CT, MRI)",
      "National Electronic Health Record system",
      "Predictive analytics for disease outbreak prevention",
      "Smart appointment and bed management systems",
      "Real-time patient monitoring with IoT devices",
    ],
  },
  {
    icon: "🧬", title: "Research & Innovation Center", color: "#C0392B",
    desc: "Haiti's first national medical research laboratory, generating scientific knowledge about tropical diseases and health challenges unique to Haiti.",
    details: [
      "BSL-2 research laboratory for infectious disease",
      "Genetic research center for rare disease diagnosis",
      "Clinical trials program with international partners",
      "Target: 50+ peer-reviewed publications per year",
      "National disease surveillance and data center",
    ],
  },
  {
    icon: "🌱", title: "Sustainable Health System", color: "#27AE60",
    desc: "A financially self-sustaining model combining public service with private efficiency — 40% free care powered by revenue from premium services.",
    details: [
      "2 MW solar power installation for energy independence",
      "Rainwater harvesting and water purification plant",
      "Medical tourism targeting Caribbean market ($50M/year revenue)",
      "Pharmacy with 100+ locally-produced generic medications",
      "Break-even by Year 8, profitable long-term",
    ],
  },
];

export const PARTNERS = [
  { name: "World Health Organization", abbr: "WHO", type: "Technical", icon: "🌍", desc: "Technical standards, accreditation support, and disease surveillance partnership" },
  { name: "World Bank Group", abbr: "WB", type: "Finance", icon: "🏦", desc: "$150M concessional loan at 1.5% over 30 years for infrastructure" },
  { name: "Inter-American Dev. Bank", abbr: "IDB", type: "Finance", icon: "🌎", desc: "$50M financing for health system strengthening components" },
  { name: "USAID / US Gov.", abbr: "USAID", type: "Donor", icon: "🇺🇸", desc: "Targeted grants for maternal health, HIV/AIDS, and training programs" },
  { name: "Agence Française de Dév.", abbr: "AFD", type: "Donor", icon: "🇫🇷", desc: "€40M grant for infrastructure and sustainable development components" },
  { name: "Harvard Medical School", abbr: "HMS", type: "Academic", icon: "🎓", desc: "Faculty exchange, curriculum development, and joint research programs" },
  { name: "Tulane University", abbr: "Tulane", type: "Academic", icon: "📚", desc: "Tropical medicine expertise and residency program co-development" },
  { name: "Pan Am. Health Org.", abbr: "PAHO", type: "Technical", icon: "🏥", desc: "Regional health coordination, vaccine supply, and disease reporting" },
  { name: "Doctors Without Borders", abbr: "MSF", type: "NGO", icon: "❤️‍🩹", desc: "Community health worker training and emergency response protocols" },
  { name: "Clinton Health Access", abbr: "CHAI", type: "NGO", icon: "💊", desc: "Medication supply chain optimization and pricing negotiation" },
  { name: "Canadian Gov.", abbr: "CIDA", type: "Donor", icon: "🇨🇦", desc: "CAD $30M support for nursing education and community health" },
  { name: "Haitian Diaspora", abbr: "Bond", type: "Finance", icon: "💰", desc: "$100M through Diaspora Bonds at 5.5% annual return over 10 years" },
];

export const TIMELINE_PHASES = [
  {
    phase: "Phase 0", period: "2025 Q1–Q4", title: "Foundation & Planning",
    color: "#7EC8E3", status: "active",
    milestones: [
      "Site acquisition and environmental study",
      "Architectural design finalized",
      "Financing agreements signed ($200M secured)",
      "Core management team of 50 recruited",
      "Community consultation completed",
    ],
  },
  {
    phase: "Phase 1", period: "2026 Q1 – 2027 Q2", title: "Emergency & Critical Care",
    color: "#003087", status: "planned",
    milestones: [
      "Foundation, utilities, and main building shell",
      "80-bed Emergency & Trauma center opens",
      "Full ICU with 40 critical care beds",
      "4 operating theaters operational",
      "Basic laboratory and radiology",
      "200 founding staff trained and certified",
    ],
  },
  {
    phase: "Phase 2", period: "2027 Q3 – 2028 Q4", title: "Clinical Specialties",
    color: "#0055B3", status: "planned",
    milestones: [
      "120-bed Maternity & Level 3 NICU",
      "80-bed Pediatrics ward",
      "Cardiology & Cardiac Surgery unit",
      "Neurology & Stroke unit opens",
      "Orthopedics & Advanced Trauma",
      "Dental clinic (30 chairs)",
      "Medical school — first class of 100 residents",
    ],
  },
  {
    phase: "Phase 3", period: "2029 Q1 – 2030 Q2", title: "Advanced Technology",
    color: "#0077D4", status: "planned",
    milestones: [
      "National Cancer Center — Linac radiotherapy",
      "3 Tesla MRI + 128-slice CT Scanner",
      "Da Vinci robotic surgery system",
      "AI diagnostic platform launched",
      "Telemedicine network — 9 provincial clinics",
      "JCI international accreditation obtained",
      "Genetics & Rare Diseases center opens",
    ],
  },
  {
    phase: "Phase 4", period: "2030 Q3 – 2031 Q4", title: "National Expansion & Opening",
    color: "#00A3E0", status: "planned",
    milestones: [
      "Mental Health — 100-bed inpatient unit",
      "Full 1,200-bed capacity reached",
      "3,500+ staff fully trained and certified",
      "Medical tourism program launched",
      "National EHR system deployed",
      "Grand Opening — National Ceremony",
      "Break-even projected by Year 8",
    ],
  },
];

export const LONG_TERM_BENEFITS = [
  { icon: "📉", title: "Save 25,000 Lives/Year", desc: "Preventable deaths dramatically reduced as emergency, maternal, and cancer care become accessible to all Haitians.", metric: "25,000", metricLabel: "Lives Saved Annually" },
  { icon: "💰", title: "End Medical Tourism Drain", desc: "Stop the $300M+ annual outflow of money to foreign hospitals. Keep healthcare spending inside Haiti's economy.", metric: "$300M+", metricLabel: "Annual Savings" },
  { icon: "👩‍⚕️", title: "Self-Sufficient Medical Workforce", desc: "500 new healthcare professionals trained in Haiti every year, eliminating the need for expensive foreign-trained specialists.", metric: "500/yr", metricLabel: "New Professionals" },
  { icon: "🌍", title: "Caribbean Medical Destination", desc: "Haiti becomes a regional healthcare hub, attracting patients from across the Caribbean and generating $50M+/year in medical tourism.", metric: "$50M/yr", metricLabel: "Medical Tourism Revenue" },
  { icon: "📊", title: "GDP Impact", desc: "8,000+ direct and indirect jobs created. Healthcare sector contributes an estimated 1.2% to GDP growth over the project's first decade.", metric: "8,000+", metricLabel: "Jobs Created" },
  { icon: "🔬", title: "Scientific Sovereignty", desc: "Haiti produces its own medical research, publishes internationally, and develops solutions to diseases affecting its population.", metric: "50+", metricLabel: "Publications/Year" },
  { icon: "👶", title: "Maternal Health Revolution", desc: "Target: Reduce Haiti's maternal mortality from 529 to under 150 per 100,000 live births within 10 years of operation.", metric: "−72%", metricLabel: "Maternal Mortality Reduction" },
  { icon: "🏝️", title: "A Replicable Model", desc: "HNIH's public-private partnership model becomes a blueprint for other developing nations in the Caribbean and Africa.", metric: "Model", metricLabel: "For Developing Nations" },
];

// ─── Colour palette ────────────────────────────────────────────────────────────
export const C = {
  bg:           "#000d1f",
  navy:         "#002855",
  blue:         "#0055B3",
  steel:        "#0077D4",
  accent:       "#0099FF",
  light:        "#4DB8FF",
  soft:         "#A9C8E8",
  success:      "#00C896",
  border:       "rgba(0,120,255,0.2)",
  borderBright: "rgba(0,160,255,0.38)",
  card:         "rgba(0,40,100,0.32)",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
export const FINANCING = [
  { source: "Gouvènman Ayiti",        usd: 250, color: "#003087", detail: "Bidjè nasyonal & obligasyon souverèn" },
  { source: "BID & Bank Mondyal",      usd: 200, color: "#0055B3", detail: "Prè kondisyonèl 1.5% sou 30 ane" },
  { source: "Sektè Prive (PPP)",       usd: 150, color: "#0077D4", detail: "Konsesyon 25 ane · pataj revni" },
  { source: "Diaspora Bond",           usd: 100, color: "#00A3E0", detail: "Obligasyon 5.5% · matirite 10 ane" },
  { source: "Donatè Entènasyonal",     usd: 100, color: "#00C8F0", detail: "USAID · AFD · Koperasyon Kanada" },
  { source: "ONG & Philanthropes",     usd:  50, color: "#7EC8E3", detail: "Fondasyon prive & dòn espesifik" },
];

export const PHASES = [
  {
    faz: "Faz 1", dur: "Ane 1–2", usd: 180, color: "#003087",
    subtitle: "Fondations & Swen Ijan",
    tasks: [
      "Travay tè & enfrastrikti jeneral",
      "Ijans & Trawma — 80 kabann 24/7",
      "ICU konplè & 4 Sal Operasyon",
      "Laboratwa & Radyoloji debaz",
      "Enèji solèy 2 MW & Dlo pwòp",
      "Rezo entèn & Sistèm Enfòmatik",
      "Fòmasyon 200 pwofesyonèl fondatè",
      "Sertifikasyon ISO 9001 — etap 1",
    ],
  },
  {
    faz: "Faz 2", dur: "Ane 2–3", usd: 280, color: "#0055B3",
    subtitle: "Espesyalite Klinik Konplè",
    tasks: [
      "Matènite NICU Nivo 3 — 120 kabann",
      "Pedyatri & Swen Tibebe — 80 kabann",
      "Kardyoloji & Sichiji Kè — 40 kabann",
      "Nèwoloji & Inite AVC Rapid",
      "Otopedi Avanse & Reabilitasyon",
      "Odontoloji 30 chèz & Chiriji Oral",
      "Oftalmoloji & Chiriji Lazè",
      "Sant Fòmasyon — 100 etidyan/ane",
    ],
  },
  {
    faz: "Faz 3", dur: "Ane 3–4", usd: 230, color: "#0077D4",
    subtitle: "Teknoloji Avanse & Rechèch",
    tasks: [
      "Sant Kansè — Linac + PET/CT Scanner",
      "Jenetik & Maladi Ra — Premye Nasyonal",
      "AI Dyagnostik & Sistèm Klinik",
      "Telemedsèn pou 9 klinik satelit",
      "Laboratwa Rechèch Medikal Nivo 3",
      "Robotik sichiji Da Vinci System",
      "IRM 3 Tesla & CT Scanner 128",
      "Akreditasyon JCI Entènasyonal",
    ],
  },
  {
    faz: "Faz 4", dur: "Ane 4–5", usd: 160, color: "#00A3E0",
    subtitle: "Ekspansyon Nasyonal & Ouvèti",
    tasks: [
      "Sante Mantal Konplè — 100 kabann",
      "9 Klinik Satelit — tout depatman",
      "Fòmasyon Final — 3,500 staff medikal",
      "Akreditasyon Entènasyonal ofisyèl",
      "Lans Pwogram Touris Medikal",
      "Dosye Elektwonik Nasyonal (EHR)",
      "Premye promo 50 spesyalis ayisyen",
      "Gran Ouvèti Ofisyèl — Seremoni Nasyonal",
    ],
  },
];

export const DEPARTMENTS = [
  {
    icon: "🫀", color: "#E74C3C", name: "Kardyo & Chiriji Kè",
    desc: "Sant kè konplè ak 4 sal operasyon modèn, ICU kè, echografi 4D, angiografi ak kateterizasyon.",
    capabilities: ["Baipass Kowonayen", "Angioplasti Avanse", "Pacemaker", "Echografi 4D"],
    beds: 40, specialists: 12,
  },
  {
    icon: "🧠", color: "#9B59B6", name: "Nèwoloji & Nèwochiriji",
    desc: "IRM 3 Tesla, CT 128 coupes, inite AVC rapid 24/7, chiriji sèvo avanse ak konsiltasyon spesyalize.",
    capabilities: ["Chiriji Sèvo", "Inite AVC 24h", "Elektwoansefalografi", "Doulè Kwonnik"],
    beds: 35, specialists: 10,
  },
  {
    icon: "👶", color: "#E67E22", name: "Matènite & Pedyatri",
    desc: "NICU Nivo 3, blòk akouchman 12 chanm, pedyatri 80 kabann, swen neonatologi konplè.",
    capabilities: ["NICU Nivo 3", "Akouchman Natirèl", "Sesaryen Avanse", "Neonatologi"],
    beds: 120, specialists: 18,
  },
  {
    icon: "🦷", color: "#27AE60", name: "Odontoloji Konplè",
    desc: "30 chèz dantè, ortodonsi, implant, chiriji oral, swen gratis pou 2 000 timoun vilnerab/ane.",
    capabilities: ["Implant Dantè", "Ortodonsi", "Chiriji Oral", "Swen Gratis Timoun"],
    beds: 0, specialists: 8,
  },
  {
    icon: "🎗️", color: "#C0392B", name: "Onkoloji & Radyoloji",
    desc: "Premye Sant Kansè Nasyonal: Linac, PET/CT, chimioterapi, radyoterapi, klinik kansè aksesib.",
    capabilities: ["Radyoterapi Linac", "Chimioterapi", "PET/CT Scan", "Onkoloji Medikal"],
    beds: 60, specialists: 15,
  },
  {
    icon: "🦴", color: "#2980B9", name: "Otopedi & Trawma",
    desc: "Chiriji zo avanse, pwotèz modèn nivo 4, reabilitasyon intensif, swen trawma grav.",
    capabilities: ["Chiriji Atikile", "Pwotèz Nivo 4", "Reabilitasyon", "Trawma Konplèks"],
    beds: 50, specialists: 10,
  },
  {
    icon: "👁️", color: "#1ABC9C", name: "Oftalmoloji",
    desc: "Chiriji lazè LASIK, katarak, bank kòne nasyonal, swen vi avanse, tretman glokòm.",
    capabilities: ["Lazè LASIK", "Katarak & Glokòm", "Bank Kòne", "Retina Avanse"],
    beds: 20, specialists: 6,
  },
  {
    icon: "🧬", color: "#8E44AD", name: "Jenetik & Maladi Ra",
    desc: "Premye sant maladi ra ann Ayiti: dyagnostik jenetik, konsèy familyal, terapi jenetik, rechèch.",
    capabilities: ["Tès ADN Avanse", "Konsèy Jenetik", "Maladi Ra", "Terapi Jenetik"],
    beds: 20, specialists: 8,
  },
  {
    icon: "🏃", color: "#2ECC71", name: "Reabilitasyon Avanse",
    desc: "Fizyoterapi, robo-reabilitasyon, ergoterapi, swen paliatif, rekiperasyon post-operatwa.",
    capabilities: ["Fizyoterapi", "Robo-Rehab", "Ergoterapi", "Swen Paliatif"],
    beds: 40, specialists: 20,
  },
  {
    icon: "💭", color: "#F39C12", name: "Sante Mantal",
    desc: "Sikyatri, sikoloji, tretman addiksyon, PTSD, kriz emosyonèl ak pwogram kominotè nasyonal.",
    capabilities: ["Sikyatri Adulte", "Sikoloji Klinik", "Addiksyon", "PTSD & Trawma"],
    beds: 80, specialists: 15,
  },
  {
    icon: "🚑", color: "#E74C3C", name: "Ijans & Trawma",
    desc: "Heliport medikal, 80 kabann ijans, triage nivo 5, SMUR mobil, repons rapid 24/7.",
    capabilities: ["Heliport Medikal", "Triage Nivo 5", "SMUR Mobil", "Reyanimisyon Grav"],
    beds: 80, specialists: 25,
  },
  {
    icon: "💊", color: "#34495E", name: "Famasi & Rechèch",
    desc: "Laboratwa rechèch nivo 3, 100+ medikaman jenerik nasyonal, biotèknoloji, inovasyon syantifik.",
    capabilities: ["Famasi Ospitalyè", "Rechèch Klinik", "Medikaman Jenerik", "Biotèknoloji"],
    beds: 0, specialists: 30,
  },
];

export const ROI_METRICS = [
  { icon: "💰", value: "$120M+", unit: "/an",    label: "Revni Anyèl",       desc: "Pa ane 8, sèvis klinik & fòmasyon",    trend: "+12%/an",  trendUp: true  },
  { icon: "✈️", value: "$50M",   unit: "/an",    label: "Touris Medikal",    desc: "Pasyan entènasyonal Karayib la",        trend: "+25%/an",  trendUp: true  },
  { icon: "👷", value: "8,000+", unit: "",        label: "Travay Total",      desc: "Dirèk, endirèk & kontratan",           sub: "3 500 pòs dirèk"               },
  { icon: "🏥", value: "500k+",  unit: "",        label: "Pasyan/Ane",        desc: "Ospitalize ak ambulatwa",               sub: "40% swen gratis"               },
  { icon: "📅", value: "Ane 8",  unit: "",        label: "Bidjè Balanse",     desc: "Point break-even finansye",            sub: "Modèl solid"                   },
  { icon: "🌍", value: "9",      unit: " Klinik", label: "Kouvèti Nasyonal",  desc: "1 klinik pa depatman Ayiti",           sub: "10M+ sitwayen"                 },
  { icon: "🎓", value: "500",    unit: "/an",     label: "Etidyan Medikal",   desc: "Doktè, enfimyè, teknisyen",             sub: "Fòme ann Ayiti"                },
  { icon: "🔬", value: "20+",    unit: "",        label: "Etid Klinik/Ane",   desc: "Piblikasyon syantifik ayisyen",         sub: "Premye nan Karayib"            },
];

export const PROJECTIONS = [
  { year: "An 1",  rev:  10, exp:  45 },
  { year: "An 2",  rev:  28, exp:  55 },
  { year: "An 3",  rev:  52, exp:  65 },
  { year: "An 4",  rev:  75, exp:  75 },
  { year: "An 5",  rev:  90, exp:  82 },
  { year: "An 6",  rev:  98, exp:  85 },
  { year: "An 7",  rev: 108, exp:  88 },
  { year: "An 8",  rev: 120, exp:  90 },
  { year: "An 9",  rev: 133, exp:  92 },
  { year: "An 10", rev: 148, exp:  95 },
];

export const VISION = {
  mission:
    "Ofri swen sante de kalite entènasyonal bay pèp ayisyen, san diskriminasyon, epi fòme pwochen jenerasyon lidè medikal pou devlopman dirab peyi a.",
  vision:
    "Vin pi gwo sant medikal referans nan Karayib la avan 2035, epi etabli yon modèl sante aksesib, inovatè ak dirab pou tout nasyon an devlopman.",
  values: [
    { icon: "⚕️", title: "Ekselans Klinik",  desc: "Estanda JCI & ISO pou tout sèvis medikal" },
    { icon: "🤝", title: "Aksesibilite",      desc: "40% kabann gratis pou patiyan endijan" },
    { icon: "🔬", title: "Inovasyon",         desc: "AI, jenetik & teknoloji medikal pou Ayiti" },
    { icon: "🌱", title: "Dirab",             desc: "Enèji solèy, dlo pwòp, jèsyon vèt" },
    { icon: "🎓", title: "Fòmasyon",          desc: "500 pwofesyonèl sante fòme/ane ann Ayiti" },
    { icon: "🛡️", title: "Entegrite",         desc: "Transparans total, etik ak responsabilite" },
  ],
  highlights: [
    { num: "1,200",  label: "Kabann Total",    icon: "🛏️" },
    { num: "12",     label: "Espesyalite",     icon: "🏥" },
    { num: "3,500+", label: "Staff Medikal",   icon: "👨‍⚕️" },
    { num: "$850M",  label: "Envestisman",     icon: "💎" },
    { num: "5 Ane",  label: "Konstriksyon",    icon: "🏗️" },
    { num: "2031",   label: "Ouvèti Konplè",   icon: "🗓️" },
  ],
  strategic: [
    "Rann Ayiti yon destinasyon medikal rekonèt nan tout rejyon Karayib la, atire pasyan entènasyonal ki ap depanse nan ekonomi nasyonal la.",
    "Diminye fwit medikal: chak ane $300M+ kite peyi a pou tretman deyò. Nou ap anpeche sa epi kenbe resous sa yo ann Ayiti.",
    "Fòme pwochen jenerasyon doktè, enfimyè ak teknisyen sante sou tè nasyonal — elimine bezwen ale lòt bò pou fòmasyon spesyalize.",
    "Kreye yon ekosistèm sante dirab ki ap sèvi tout kouche sosyal: sèvis gratis pou 40% pasyan endijan, sèvis premyèl pou rès la.",
    "Etabli premye sant rechèch medikal ak jenetik ann Ayiti, pou piblikasyon syantifik entènasyonal ak dyagnostik maladi ra.",
    "Lanse yon modèl PPP inovatè (piblik-prive) ki ka replikab nan tout nasyon an devlopman nan rejyon Karayib ak Afrik.",
  ],
};
