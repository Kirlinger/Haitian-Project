// ─── Formatters ───────────────────────────────────────────────────────────────
export const RATE = 131.41;
export const fmtUSD = (n) => `$${n.toLocaleString()}M`;
export const fmtHTG = (n) =>
  `G ${(n * RATE).toLocaleString(undefined, { maximumFractionDigits: 0 })}M`;

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
