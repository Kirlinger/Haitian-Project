// ─── Formatters ───────────────────────────────────────────────────────────────
export const RATE = 131.41;
export const fmtHTG = (n) =>
  `G ${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}M`;

// ─── Haiti Healthcare Crisis Data ─────────────────────────────────────────────
export const CRISIS_STATS = [
  { value: "1,4", unit: "pour 10 000", label: "Densité des Médecins", desc: "Seulement 1,4 médecin pour 10 000 personnes, contre 25+ dans les pays développés", icon: "🩺", severity: "critical" },
  { value: "529", unit: "pour 100 000", label: "Mortalité Maternelle", desc: "Parmi les plus élevés de l’hémisphère occidental — 10× la moyenne caribéenne", icon: "🤰", severity: "critical" },
  { value: "42", unit: "pour 1 000", label: "Mortalité des Moins de 5 Ans", desc: "42 enfants pour 1 000 naissances vivantes décèdent avant l’âge de 5 ans", icon: "💔", severity: "critical" },
  { value: "36%", unit: "de la population", label: "Accès aux Soins Non Satisfait", desc: "Plus d’un tiers des Haïtiens n’ont accès à aucun service de santé", icon: "🚫", severity: "high" },
  { value: "G 1 708", unit: "HTG/an", label: "Dépenses de Santé/Personne", desc: "Le gouvernement dépense seulement G 1 708 par habitant par an pour la santé (l’OMS recommande G 11 301+)", icon: "💸", severity: "critical" },
  { value: "0,3", unit: "lits pour 1 000", label: "Densité des Lits Hospitaliers", desc: "Seulement 0,3 lit d’hôpital pour 1 000 personnes — bien en dessous de la moyenne mondiale de 2,5", icon: "🛏️", severity: "critical" },
  { value: "62%", unit: "des décès", label: "Décès Évitables", desc: "62% des décès en Haïti pourraient être évités avec des soins médicaux de base", icon: "⚠️", severity: "high" },
  { value: "G 39 423M+", unit: "par an", label: "Fuite des Devises Médicales", desc: "Les Haïtiens dépensent plus de G 39 423M par an pour se soigner à l’étranger", icon: "✈️", severity: "high" },
];

export const HEALTH_PROBLEMS = [
  {
    icon: "🏚️", title: "Infrastructures Dégradées", color: "#E74C3C",
    points: [
      "80% des établissements de santé ne respectent pas les normes minimales de l’OMS",
      "Les dommages du séisme de 2010 restent non réparés dans de nombreux sites",
      "Seulement 2 scanners CT fonctionnels dans tout le pays",
      "Grave pénurie de lits en soins intensifs — moins de 100 dans tout le pays",
      "L’électricité peu fiable perturbe quotidiennement les équipements vitaux",
    ],
    stat: "80%", statLabel: "Établissements sous les Normes",
  },
  {
    icon: "👨‍⚕️", title: "Crise du Personnel de Santé", color: "#E67E22",
    points: [
      "Plus de 60% des médecins haïtiens formés émigrent dans les 5 ans",
      "Aucun programme complet de résidence médicale disponible dans le pays",
      "Ratio infirmière/patient de 1:50 (l’OMS recommande 1:6)",
      "Moins de 20 chirurgiens spécialisés pour 11 millions de personnes",
      "Les bas salaires poussent les talents vers la Rép. Dominicaine et les USA",
    ],
    stat: "60%+", statLabel: "Taux de Fuite des Médecins",
  },
  {
    icon: "💊", title: "Médicaments & Chaîne d’Approvisionnement", color: "#8E44AD",
    points: [
      "70% des médicaments essentiels doivent être importés",
      "Ruptures fréquentes de médicaments dans les hôpitaux publics",
      "Défaillances de la chaîne du froid affectant l’efficacité des vaccins",
      "Aucune capacité de production pharmaceutique nationale",
      "Les médicaments du marché noir représentent de sérieux risques sanitaires",
    ],
    stat: "70%", statLabel: "Médicaments Importés",
  },
  {
    icon: "🦠", title: "Fardeau des Maladies", color: "#27AE60",
    points: [
      "Épidémie de choléra en recrudescence depuis 2022 (6 000+ nouveaux cas)",
      "Prévalence du VIH à 2,3% — la plus élevée des Caraïbes",
      "Taux de tuberculose de 212 pour 100 000 (10× la moyenne régionale)",
      "Paludisme endémique dans les zones rurales et côtières",
      "Maladies non transmissibles en forte hausse sans soins spécialisés",
    ],
    stat: "2,3%", statLabel: "Prévalence du VIH",
  },
  {
    icon: "🏥", title: "Barrières Géographiques d’Accès", color: "#2980B9",
    points: [
      "Seul Port-au-Prince dispose d’une forme de soins spécialisés",
      "La population rurale (65%) parcourt 4h+ pour des soins de base",
      "Aucun système d’ambulance fonctionnel en dehors de la capitale",
      "9 des 10 départements n’ont aucun médecin spécialiste",
      "Les communautés insulaires dépendent totalement des cliniques ONG",
    ],
    stat: "65%", statLabel: "Population Rurale Non Desservie",
  },
  {
    icon: "💰", title: "Barrières Financières aux Soins", color: "#F39C12",
    points: [
      "Plus de 60% des familles haïtiennes ne peuvent pas se permettre une consultation de base",
      "Les dépenses directes représentent 45% de toutes les dépenses de santé",
      "Aucun système d’assurance maladie nationale fonctionnel",
      "Les dépenses catastrophiques poussent les familles dans la pauvreté",
      "Les soins d’urgence sont souvent refusés sans paiement préalable",
    ],
    stat: "45%", statLabel: "Dépenses de Santé Directes",
  },
];

export const HEALTH_COMPARISONS = [
  { country: "Haïti",            physicians: 1.4,  maternal: 529, life: 64,  beds: 0.3,  spending: 1708    },
  { country: "Rép. Dominicaine", physicians: 15.3, maternal: 107, life: 74,  beds: 1.6,  spending: 55192  },
  { country: "Cuba",             physicians: 84.2, maternal: 36,  life: 79,  beds: 5.3,  spending: 106836 },
  { country: "Jamaïque",         physicians: 12.8, maternal: 80,  life: 76,  beds: 1.7,  spending: 47570  },
  { country: "Moy. (Caraïbes)",  physicians: 18.0, maternal: 95,  life: 75,  beds: 2.0,  spending: 49936  },
  { country: "Objectif HNIH",    physicians: 8.0,  maternal: 150, life: 72,  beds: 1.2,  spending: 15769  },
];

export const SOLUTIONS_LIST = [
  {
    icon: "🏥", title: "Campus Hospitalier de Classe Mondiale", color: "#0055B3",
    desc: "Un hôpital national de référence de 1 200 lits avec 12 spécialités, construit selon les normes d’accréditation internationale JCI — le premier en Haïti.",
    details: [
      "12 départements spécialisés couvrant tous les domaines médicaux majeurs",
      "USI avec 80 lits de soins intensifs (contre <100 dans tout le pays aujourd’hui)",
      "4 blocs opératoires + salle de chirurgie cardiaque",
      "Hélipad pour le transport médical d’urgence",
      "40% des lits réservés aux soins gratuits pour les plus démunis",
    ],
  },
  {
    icon: "📡", title: "Réseau de Télémédecine", color: "#0077D4",
    desc: "Un réseau de cliniques satellites reliant 9 centres de santé provinciaux via la télémédecine en temps réel, apportant des soins spécialisés dans la Haïti rurale.",
    details: [
      "1 clinique par département (10 départements couverts)",
      "Consultations vidéo avec les spécialistes du HNIH",
      "Soutien diagnostique à distance et suivi",
      "Unités de santé mobiles pour les communautés éloignées",
      "Dossiers médicaux numériques partagés dans tout le réseau",
    ],
  },
  {
    icon: "🎓", title: "Pôle d’Enseignement Médical", color: "#00A3E0",
    desc: "Le premier programme complet de résidence médicale d’Haïti, formant 500 professionnels de santé par an pour éliminer le cycle de fuite des cerveaux.",
    details: [
      "Programmes de résidence dans 12 spécialités",
      "500 médecins, infirmières et techniciens formés annuellement",
      "Partenariats internationaux avec Harvard, Tulane et McGill",
      "Programmes de bourses pour les étudiants talentueux à faibles revenus",
      "Formation continue pour les professionnels de santé en exercice",
    ],
  },
  {
    icon: "🤖", title: "IA & Santé Numérique", color: "#8E44AD",
    desc: "Outils de diagnostic IA de pointe, dossiers de santé électroniques et systèmes hospitaliers intelligents pour maximiser l’efficacité et la qualité des soins.",
    details: [
      "Lecture radiologique assistée par IA (radiographie, scanner, IRM)",
      "Système national de Dossier Médical Électronique",
      "Analyses prédictives pour la prévention des épidémies",
      "Systèmes intelligents de gestion des rendez-vous et des lits",
      "Surveillance des patients en temps réel avec dispositifs IoT",
    ],
  },
  {
    icon: "🧬", title: "Centre de Recherche & Innovation", color: "#C0392B",
    desc: "Le premier laboratoire national de recherche médicale d’Haïti, générant des connaissances scientifiques sur les maladies tropicales et les défis sanitaires propres à Haïti.",
    details: [
      "Laboratoire de recherche BSL-2 pour les maladies infectieuses",
      "Centre de recherche génétique pour le diagnostic des maladies rares",
      "Programme d’essais cliniques avec des partenaires internationaux",
      "Objectif : 50+ publications évaluées par les pairs par an",
      "Centre national de surveillance des maladies et des données",
    ],
  },
  {
    icon: "🌱", title: "Système de Santé Durable", color: "#27AE60",
    desc: "Un modèle financièrement autonome combinant service public et efficacité privée — 40% de soins gratuits financés par les recettes des services premium.",
    details: [
      "Installation solaire de 2 MW pour l’indépendance énergétique",
      "Collecte des eaux de pluie et usine de purification d’eau",
      "Tourisme médical ciblant le marché caribéen (G 6 571M/an de recettes)",
      "Pharmacie avec 100+ médicaments génériques produits localement",
      "Équilibre financier dès l’Année 8, rentable à long terme",
    ],
  },
];

export const PARTNERS = [
  { name: "Organisation Mondiale de la Santé", abbr: "OMS", type: "Technique", icon: "🌍", desc: "Normes techniques, soutien à l’accréditation et partenariat pour la surveillance des maladies" },
  { name: "Groupe de la Banque Mondiale", abbr: "BM", type: "Finance", icon: "🏦", desc: "Prêt concessionnel de G 19 712M à 1,5% sur 30 ans pour l’infrastructure" },
  { name: "Banque Inter-Américaine de Dév.", abbr: "BID", type: "Finance", icon: "🌎", desc: "Financement de G 6 571M pour les composantes de renforcement du système de santé" },
  { name: "USAID / Gouvernement US", abbr: "USAID", type: "Donateur", icon: "🇺🇸", desc: "Subventions ciblées pour la santé maternelle, le VIH/SIDA et les programmes de formation" },
  { name: "Agence Française de Dév.", abbr: "AFD", type: "Donateur", icon: "🇫🇷", desc: "Subvention de G 5 677M pour l’infrastructure et les composantes de développement durable" },
  { name: "Faculté de Médecine d’Harvard", abbr: "HMS", type: "Académique", icon: "🎓", desc: "Échanges de professeurs, développement des programmes et recherches conjointes" },
  { name: "Université Tulane", abbr: "Tulane", type: "Académique", icon: "📚", desc: "Expertise en médecine tropicale et co-développement du programme de résidence" },
  { name: "Organisation Panaméricaine de la Santé", abbr: "PAHO", type: "Technique", icon: "🏥", desc: "Coordination sanitaire régionale, approvisionnement en vaccins et déclaration des maladies" },
  { name: "Médecins Sans Frontières", abbr: "MSF", type: "ONG", icon: "❤️‍🩹", desc: "Formation des agents de santé communautaire et protocoles d’intervention d’urgence" },
  { name: "Clinton Health Access Initiative", abbr: "CHAI", type: "ONG", icon: "💊", desc: "Optimisation de la chaîne d’approvisionnement en médicaments et négociation des prix" },
  { name: "Gouvernement Canadien", abbr: "ACDI", type: "Donateur", icon: "🇨🇦", desc: "Soutien de G 2 917M pour l’éducation infirmière et la santé communautaire" },
  { name: "Diaspora Haïtienne", abbr: "Bond", type: "Finance", icon: "💰", desc: "G 13 141M via les Obligations Diaspora à 5,5% de rendement annuel sur 10 ans" },
];

export const TIMELINE_PHASES = [
  {
    phase: "Phase 0", period: "2025 T1–T4", title: "Fondation & Planification",
    color: "#7EC8E3", status: "active",
    milestones: [
      "Acquisition du terrain et étude environnementale",
      "Finalisation du design architectural",
      "Accords de financement signés (G 26 282M sécurisés)",
      "Recrutement de l’équipe de direction de 50 personnes",
      "Consultation communautaire terminée",
    ],
  },
  {
    phase: "Phase 1", period: "2026 T1 – 2027 T2", title: "Urgences & Soins Critiques",
    color: "#003087", status: "planned",
    milestones: [
      "Fondations, réseaux et gros œuvre du bâtiment principal",
      "Centre d’Urgences & Traumatologie de 80 lits ouvert",
      "USI complète avec 40 lits de soins intensifs",
      "4 blocs opératoires opérationnels",
      "Laboratoire de base et radiologie",
      "200 membres du personnel fondateur formés et certifiés",
    ],
  },
  {
    phase: "Phase 2", period: "2027 T3 – 2028 T4", title: "Spécialités Cliniques",
    color: "#0055B3", status: "planned",
    milestones: [
      "Maternité de 120 lits & NICU Niveau 3",
      "Service de Pédiatrie de 80 lits",
      "Unité de Cardiologie & Chirurgie Cardiaque",
      "Unité de Neurologie & AVC ouverte",
      "Orthopédie & Traumatologie Avancée",
      "Clinique dentaire (30 fauteuils)",
      "École de médecine — première promotion de 100 résidents",
    ],
  },
  {
    phase: "Phase 3", period: "2029 T1 – 2030 T2", title: "Technologie Avancée",
    color: "#0077D4", status: "planned",
    milestones: [
      "Centre National du Cancer — radiothérapie Linac",
      "IRM 3 Tesla + Scanner CT 128 coupes",
      "Système de chirurgie robotique Da Vinci",
      "Plateforme de diagnostic IA lancée",
      "Réseau de télémédecine — 9 cliniques provinciales",
      "Accréditation internationale JCI obtenue",
      "Centre de Génétique & Maladies Rares ouvert",
    ],
  },
  {
    phase: "Phase 4", period: "2030 T3 – 2031 T4", title: "Expansion Nationale & Inauguration",
    color: "#00A3E0", status: "planned",
    milestones: [
      "Santé Mentale — unité d’hospitalisation de 100 lits",
      "Capacité totale de 1 200 lits atteinte",
      "3 500+ membres du personnel entièrement formés et certifiés",
      "Programme de tourisme médical lancé",
      "Système national de DMP déployé",
      "Grande Inauguration — Cérémonie Nationale",
      "Équilibre financier prévu dès l’Année 8",
    ],
  },
];

export const LONG_TERM_BENEFITS = [
  { icon: "📉", title: "Sauver 25 000 Vies par An", desc: "Les décès évitables sont considérablement réduits grâce à l’accès aux urgences, aux soins maternels et oncologiques pour tous les Haïtiens.", metric: "25 000", metricLabel: "Vies Sauvées par An" },
  { icon: "💰", title: "Fin de la Fuite des Devises", desc: "Stopper la fuite annuelle de G 39 423M+ vers les hôpitaux étrangers. Maintenir les dépenses de santé dans l’économie haïtienne.", metric: "G 39 423M+", metricLabel: "Économies Annuelles" },
  { icon: "👩‍⚕️", title: "Main-d'Œuvre Médicale Autonome", desc: "500 nouveaux professionnels de santé formés en Haïti chaque année, éliminant le besoin de spécialistes coûteux formés à l’étranger.", metric: "500/an", metricLabel: "Nouveaux Professionnels" },
  { icon: "🌍", title: "Destination Médicale Caribéenne", desc: "Haïti devient un pôle régional de santé, attirant des patients de toutes les Caraïbes et générant G 6 571M+/an de tourisme médical.", metric: "G 6 571M/an", metricLabel: "Recettes Tourisme Médical" },
  { icon: "📊", title: "Impact sur le PIB", desc: "8 000+ emplois directs et indirects créés. Le secteur de la santé contribue à une croissance estimée du PIB de 1,2% sur la première décennie.", metric: "8 000+", metricLabel: "Emplois Créés" },
  { icon: "🔬", title: "Souveraineté Scientifique", desc: "Haïti produit ses propres recherches médicales, publie à l’international et développe des solutions aux maladies affectant sa population.", metric: "50+", metricLabel: "Publications/An" },
  { icon: "👶", title: "Révolution de la Santé Maternelle", desc: "Objectif : Réduire la mortalité maternelle d’Haïti de 529 à moins de 150 pour 100 000 naissances vivantes dans les 10 ans d’exploitation.", metric: "−72%", metricLabel: "Réduction Mortalité Maternelle" },
  { icon: "🏝️", title: "Un Modèle Reproductible", desc: "Le modèle de partenariat public-privé du HNIH devient un modèle pour d’autres nations en développement dans les Caraïbes et en Afrique.", metric: "Modèle", metricLabel: "Pour les Nations en Développement" },
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
  { source: "Gouvènman Ayiti",        htg: 32853, color: "#003087", detail: "Bidjè nasyonal & obligasyon souverèn" },
  { source: "BID & Bank Mondyal",      htg: 26282, color: "#0055B3", detail: "Prè kondisyonèl 1.5% sou 30 ane" },
  { source: "Sektè Prive (PPP)",       htg: 19712, color: "#0077D4", detail: "Konsesyon 25 ane · pataj revni" },
  { source: "Diaspora Bond",           htg: 13141, color: "#00A3E0", detail: "Obligasyon 5.5% · matirite 10 ane" },
  { source: "Donatè Entènasyonal",     htg: 13141, color: "#00C8F0", detail: "USAID · AFD · Koperasyon Kanada" },
  { source: "ONG & Philanthropes",     htg:  6571, color: "#7EC8E3", detail: "Fondasyon prive & dòn espesifik" },
];

export const PHASES = [
  {
    faz: "Faz 1", dur: "Ane 1–2", htg: 23654, color: "#003087",
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
    faz: "Faz 2", dur: "Ane 2–3", htg: 36795, color: "#0055B3",
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
    faz: "Faz 3", dur: "Ane 3–4", htg: 30224, color: "#0077D4",
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
    faz: "Faz 4", dur: "Ane 4–5", htg: 21026, color: "#00A3E0",
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
  { icon: "💰", value: "G 15 769M+", unit: "/an",    label: "Revni Anyèl",       desc: "Pa ane 8, sèvis klinik & fòmasyon",    trend: "+12%/an",  trendUp: true  },
  { icon: "✈️", value: "G 6 571M",   unit: "/an",    label: "Touris Medikal",    desc: "Pasyan entènasyonal Karayib la",        trend: "+25%/an",  trendUp: true  },
  { icon: "👷", value: "8,000+", unit: "",        label: "Travay Total",      desc: "Dirèk, endirèk & kontratan",           sub: "3 500 pòs dirèk"               },
  { icon: "🏥", value: "500k+",  unit: "",        label: "Pasyan/Ane",        desc: "Ospitalize ak ambulatwa",               sub: "40% swen gratis"               },
  { icon: "📅", value: "Ane 8",  unit: "",        label: "Bidjè Balanse",     desc: "Point break-even finansye",            sub: "Modèl solid"                   },
  { icon: "🌍", value: "9",      unit: " Klinik", label: "Kouvèti Nasyonal",  desc: "1 klinik pa depatman Ayiti",           sub: "10M+ sitwayen"                 },
  { icon: "🎓", value: "500",    unit: "/an",     label: "Etidyan Medikal",   desc: "Doktè, enfimyè, teknisyen",             sub: "Fòme ann Ayiti"                },
  { icon: "🔬", value: "20+",    unit: "",        label: "Etid Klinik/Ane",   desc: "Piblikasyon syantifik ayisyen",         sub: "Premye nan Karayib"            },
];

export const PROJECTIONS = [
  { year: "An 1",  rev:  1314, exp:  5913 },
  { year: "An 2",  rev:  3679, exp:  7228 },
  { year: "An 3",  rev:  6833, exp:  8542 },
  { year: "An 4",  rev:  9856, exp:  9856 },
  { year: "An 5",  rev: 11827, exp: 10776 },
  { year: "An 6",  rev: 12878, exp: 11170 },
  { year: "An 7",  rev: 14192, exp: 11564 },
  { year: "An 8",  rev: 15769, exp: 11827 },
  { year: "An 9",  rev: 17477, exp: 12090 },
  { year: "An 10", rev: 19449, exp: 12484 },
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
    { num: "G 111 699M",  label: "Envestisman",     icon: "💎" },
    { num: "5 Ane",  label: "Konstriksyon",    icon: "🏗️" },
    { num: "2031",   label: "Ouvèti Konplè",   icon: "🗓️" },
  ],
  strategic: [
    "Rann Ayiti yon destinasyon medikal rekonèt nan tout rejyon Karayib la, atire pasyan entènasyonal ki ap depanse nan ekonomi nasyonal la.",
    "Diminye fwit medikal: chak ane G 39 423M+ kite peyi a pou tretman deyò. Nou ap anpeche sa epi kenbe resous sa yo ann Ayiti.",
    "Fòme pwochen jenerasyon doktè, enfimyè ak teknisyen sante sou tè nasyonal — elimine bezwen ale lòt bò pou fòmasyon spesyalize.",
    "Kreye yon ekosistèm sante dirab ki ap sèvi tout kouche sosyal: sèvis gratis pou 40% pasyan endijan, sèvis premyèl pou rès la.",
    "Etabli premye sant rechèch medikal ak jenetik ann Ayiti, pou piblikasyon syantifik entènasyonal ak dyagnostik maladi ra.",
    "Lanse yon modèl PPP inovatè (piblik-prive) ki ka replikab nan tout nasyon an devlopman nan rejyon Karayib ak Afrik.",
  ],
};
