import { C } from '../data/constants';
import { SectionTitle, Card, Badge } from '../components/UI';

const NEWS_ITEMS = [
  {
    date: "15 Jiyè 2025", category: "Finansman", icon: "💰",
    title: "HNIH Resevwa $200M Premye Tranch BID & Banque Mondiale",
    summary: "Banque Interaméricaine de Développement ak Banque Mondiale ofisyèlman transmèt premye tranch $200M pou kòmansman travay konstriksyon Hôpital National Intégré d'Haïti.",
    featured: true,
  },
  {
    date: "3 Jiyè 2025", category: "Konstriksyon", icon: "🏗️",
    title: "Seremoni Premye Wòch: Konstriksyon Ofisyèlman Kòmanse",
    summary: "Premye Minis, Minis Sante ak reprezantan patnè entènasyonal yo participe nan seremoni premye wòch. Travay tè ak enfrastrikti jeneral kòmanse nan sit Delmas 33.",
    featured: false,
  },
  {
    date: "22 Jen 2025", category: "Patenayi", icon: "🤝",
    title: "Akò Fòmasyon Medikal siye ak Harvard Medical School",
    summary: "HNIH ak Harvard Medical School siye yon akò kolaborasyon 10 ane ki kouvri pwogram rezidans, bous etid, rechèch kolaboratif ak echanj pwofesè.",
    featured: false,
  },
  {
    date: "10 Jen 2025", category: "Dyaspora", icon: "🌎",
    title: "Dyaspora Bond HNIH Disponib — Premye $25M Deja Subscri",
    summary: "Premye emisyon Dyaspora Bond HNIH rekòlte $25M nan debi premiè mwa. Kominote ayisyen Etazini ak Kanada montre entèrè fò pou envestisman patriyotik.",
    featured: false,
  },
  {
    date: "28 Me 2025", category: "Teknoloji", icon: "💡",
    title: "Kontra Siemens Healthineers siye pou Ekipman IRM & CT",
    summary: "Siemens Healthineers ap founi IRM 3 Tesla, CT Scanner 128 coupes ak tout sistèm radyoloji. Livrezon pwograme pou Faz 3 konstriksyon an.",
    featured: false,
  },
  {
    date: "15 Me 2025", category: "Administrasyon", icon: "👔",
    title: "Dr. Edouard Hébert Jean-François Nonmen CEO Ofisyèl HNIH",
    summary: "Konsèy Administratif HNIH nonmen Dr. Edouard Hébert Jean-François kòm CEO ofisyèl. Ansyen Direktè PAHO/Karayib ak 25 ane eksperyans jèsyon ospitalye.",
    featured: false,
  },
  {
    date: "1 Me 2025", category: "Kominote", icon: "🌍",
    title: "Plan 9 Klinik Satelit Prezante nan Sesyon Nasyonal",
    summary: "Ministrè Sante prezante plan detaye 9 klinik satelit yo nan chak depatman Ayiti. Objektif: sèvi 10 milyon sitwayen epi diminye fwit medikal nan kapital la.",
    featured: false,
  },
  {
    date: "18 Avril 2025", category: "Finansman", icon: "💰",
    title: "USAID Konfime $50M Gra pou Pwogram Sante Piblik HNIH",
    summary: "USAID ofisyèlman konfime $50M gra pou pwogram sante piblik HNIH, ki kouvri vaksinasyon, sante matènèl ak fòmasyon pèsonèl sante kominotè.",
    featured: false,
  },
  {
    date: "5 Avril 2025", category: "Patenayi", icon: "🤝",
    title: "Gouvènman Kanada Angaje $30M pou Fòmasyon Pèsonèl Medikal",
    summary: "Koperasyon Kanadyèn ap finanse fòmasyon 200 spesyalis medikal ayisyen sou 5 ane. Pwogram itilize enstistisyon kanadyèn ak ayisyen pou fòmasyon hybrid.",
    featured: false,
  },
  {
    date: "20 Mas 2025", category: "Rechèch", icon: "🔬",
    title: "Premye Gra NIH Akòde pou Rechèch Cholera ann Ayiti",
    summary: "National Institutes of Health (NIH) akòde yon gra $5M pou rechèch cholera ak maladi entestinal ann Ayiti. Premye gra NIH pou rechèch medikal ayisyen.",
    featured: false,
  },
  {
    date: "8 Mas 2025", category: "Konstriksyon", icon: "🏗️",
    title: "Plas Tè Delmas 33 Ofisyèlman Chwazi — 12 Ektè",
    summary: "Gouvènman Ayiti ofisyèlman konfime plas tè Delmas 33 (12 ektè) pou konstriksyon HNIH. Evalyasyon anviwonman ak etid jeyoteknik konplè.",
    featured: false,
  },
  {
    date: "14 Fevriye 2025", category: "Vizyon", icon: "🌟",
    title: "Prezantasyon Ofisyèl Plan $850M HNIH",
    summary: "Premye prezantasyon piblik konplè plan $850M Hôpital National Intégré d'Haïti. 1200 kabann, 12 espesyalite, 5 ane konstriksyon. Vizyon 2031 prezante.",
    featured: false,
  },
];

const CATEGORIES = ["Tout", "Finansman", "Konstriksyon", "Patenayi", "Dyaspora", "Teknoloji", "Rechèch", "Kominote", "Administrasyon", "Vizyon"];

const MILESTONES_ACHIEVED = [
  { date: "Fevriye 2025", event: "Prezantasyon plan ofisyèl $850M", done: true },
  { date: "Mas 2025", event: "Plas tè Delmas 33 konfime", done: true },
  { date: "Avril 2025", event: "USAID gra $50M konfime", done: true },
  { date: "Me 2025", event: "CEO nonmen, Konsèy an plas", done: true },
  { date: "Jen 2025", event: "Akò Harvard Medical School", done: true },
  { date: "Jiyè 2025", event: "Finansman BID/Banque Mondiale", done: true },
  { date: "Desanm 2025", event: "Primye tranch konstriksyon", done: false },
  { date: "2026", event: "Premye bilding Ijans kòmanse", done: false },
];

export default function News() {
  const featured = NEWS_ITEMS[0];
  const rest = NEWS_ITEMS.slice(1);

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Kominote</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>📰 Aktyalite & Nouvèl</h1>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>
          Dènye nouvèl, anonsman ofisyèl ak mizajou konsènan pwojè Hôpital National Intégré d'Haïti.
        </p>
      </div>

      {/* Featured news */}
      <Card style={{
        background: "linear-gradient(135deg, rgba(0,50,150,0.6), rgba(0,100,220,0.3))",
        borderColor: C.borderBright,
        padding: 32,
        marginBottom: 36,
        borderLeft: `5px solid ${C.accent}`,
      }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontSize: 28 }}>{featured.icon}</span>
          <Badge color={C.accent}>{featured.category}</Badge>
          <span style={{ color: C.soft, fontSize: 12 }}>📅 {featured.date}</span>
          <Badge color={C.success}>Dènye Nouvèl</Badge>
        </div>
        <h2 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 900, margin: "0 0 14px", lineHeight: 1.3 }}>{featured.title}</h2>
        <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, margin: 0 }}>{featured.summary}</p>
      </Card>

      {/* Category filters */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
        {CATEGORIES.map((cat) => (
          <button key={cat} style={{
            background: cat === "Tout" ? `${C.blue}60` : "rgba(0,30,80,0.4)",
            border: `1px solid ${cat === "Tout" ? C.borderBright : C.border}`,
            color: cat === "Tout" ? "#fff" : C.soft,
            padding: "6px 14px",
            borderRadius: 20,
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
          }}>{cat}</button>
        ))}
      </div>

      {/* News grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16, marginBottom: 36 }}>
        {rest.map((news) => (
          <Card key={news.title} className="card-hover" style={{ borderTop: `3px solid ${C.steel}`, cursor: "pointer" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10, flexWrap: "wrap" }}>
              <span style={{ fontSize: 18 }}>{news.icon}</span>
              <Badge color={C.accent}>{news.category}</Badge>
              <span style={{ color: C.soft, fontSize: 11, marginLeft: "auto" }}>{news.date}</span>
            </div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, lineHeight: 1.4, marginBottom: 10 }}>{news.title}</div>
            <p style={{ color: C.soft, fontSize: 12, lineHeight: 1.6, margin: 0 }}>{news.summary}</p>
          </Card>
        ))}
      </div>

      {/* Milestones achieved */}
      <SectionTitle sub="Pwogrè ak jalons ki deja atenn nan pwojè a">Jalons Atenn</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12, marginBottom: 36 }}>
        {MILESTONES_ACHIEVED.map((m, i) => (
          <Card key={i} style={{
            background: m.done ? "rgba(0,200,150,0.08)" : C.card,
            border: `1px solid ${m.done ? "rgba(0,200,150,0.25)" : C.border}`,
            display: "flex", gap: 12, alignItems: "center", padding: "12px 16px",
          }}>
            <span style={{ fontSize: 20 }}>{m.done ? "✅" : "🔜"}</span>
            <div>
              <div style={{ color: m.done ? C.success : C.soft, fontSize: 11, fontWeight: 700 }}>{m.date}</div>
              <div style={{ color: "#fff", fontSize: 13 }}>{m.event}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Newsletter */}
      <Card style={{
        background: "linear-gradient(135deg, rgba(0,30,80,0.5), rgba(0,60,150,0.3))",
        borderColor: C.borderBright,
        padding: 32,
        textAlign: "center",
      }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>📧</div>
        <h3 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 10px" }}>Abòne ak Bilten HNIH</h3>
        <p style={{ color: C.soft, fontSize: 14, lineHeight: 1.6, maxWidth: 500, margin: "0 auto 20px" }}>
          Resevwa dènye nouvèl, rapò progrè konstriksyon ak opotinite envestisman dirèkteman nan bwat imèl ou.
        </p>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          <input
            type="email"
            placeholder="Adres imèl ou..."
            style={{
              background: "rgba(0,20,60,0.6)",
              border: `1px solid ${C.borderBright}`,
              borderRadius: 8,
              padding: "10px 16px",
              color: "#fff",
              fontSize: 14,
              width: 280,
              outline: "none",
            }}
          />
          <button style={{
            background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
            border: "none",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
          }}>
            Abòne Gratis
          </button>
        </div>
      </Card>
    </div>
  );
}
