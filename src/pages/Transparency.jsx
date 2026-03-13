import { C } from '../data/constants';
import { SectionTitle, Card, Badge } from '../components/UI';

const GOVERNANCE_BODIES = [
  { name: "Konsèy Administratif", members: 6, role: "Gouvènans estratejik, supervizyon CEO, apwobasyon bidjè", icon: "🏛️" },
  { name: "Komite Odite", members: 3, role: "Revizyon finansye endepandan, kontwòl entèn, etik", icon: "🔍" },
  { name: "Komite Risk", members: 4, role: "Jèsyon risk operasyonèl, finansye ak medikal", icon: "⚠️" },
  { name: "Konsèy Medikal", members: 12, role: "Akreditasyon klinik, kalite swen, pwotokòl medikal", icon: "⚕️" },
  { name: "Konsèy Konsiltatif Entènasyonal", members: 6, role: "Konsèy estratejik entènasyonal, estanda mondyal", icon: "🌍" },
  { name: "Komite Konpliyan & Etik", members: 3, role: "Kòd kondiut, denwonsyasyon, anti-korisyon", icon: "⚖️" },
];

const KPI_SECTIONS = [
  {
    title: "Konstriksyon", icon: "🏗️",
    kpis: [
      { name: "Pwogrè Konstriksyon", target: "100% avan Desanm 2030", current: "8% (Faz 1 kòmanse)" },
      { name: "Bidjè Depans", target: "±5% bidjè planifye", current: "Nan bidjè" },
      { name: "Nòm Sekirite Travayè", target: "0 aksidan grav", current: "Konfòm" },
      { name: "Sètifikasyon Materyèl", target: "100% ISO sètifye", current: "Verifye" },
    ],
  },
  {
    title: "Finansye", icon: "💰",
    kpis: [
      { name: "Finansman Mobilize", target: "$850M total", current: "$450M konfime" },
      { name: "Dyaspora Bond", target: "$100M total", current: "$25M subscri" },
      { name: "Rapò Odite", target: "4/ane", current: "An kou" },
      { name: "Transparans Fiskal", target: "100% piblik", current: "Konfòm" },
    ],
  },
  {
    title: "Kalite Medikal", icon: "⚕️",
    kpis: [
      { name: "Akreditasyon JCI", target: "Ane 5 operasyon", current: "An preparasyon" },
      { name: "Tò Enfeksyon Ospitalye", target: "<2%", current: "N/A (pre-ouvèti)" },
      { name: "Satisfaksyon Pasyan", target: ">90%", current: "N/A (pre-ouvèti)" },
      { name: "Mortalite Operatwa", target: "<1%", current: "N/A (pre-ouvèti)" },
    ],
  },
];

const REPORTS = [
  { title: "Rapò Anyèl 2024–2025", type: "Finansye", date: "Mas 2026 (planifye)", icon: "📊", status: "Kap vini" },
  { title: "Rapò Konstriksyon Q1 2025", type: "Konstriksyon", date: "Avril 2025", icon: "🏗️", status: "Disponib" },
  { title: "Rapò Finansman Dyaspora Bond", type: "Finansye", date: "Jiyè 2025", icon: "💰", status: "Disponib" },
  { title: "Odite Endepandan 2024", type: "Odite", date: "Fevriye 2025", icon: "🔍", status: "Disponib" },
  { title: "Plan Akizisyon 2025–2026", type: "Akizisyon", date: "Janvye 2025", icon: "📋", status: "Disponib" },
  { title: "Evalyasyon Enpak Anviwonman", type: "Anviwonman", date: "Desanm 2024", icon: "🌱", status: "Disponib" },
];

const COMPLIANCE = [
  { icon: "📜", title: "Kòd Etik Nasyonal", desc: "Tout pèsonèl HNIH siyen kòd etik nasyonal. Pwibisyon konplete pou konfli enterè ak kòribsyon." },
  { icon: "📢", title: "Politique Denwonsyasyon", desc: "Kanal konfidansyèl pou rapòte frò, abus oswa konpòtman ineetik. Pwoteksyon denwonsyatè garanti." },
  { icon: "🔒", title: "Anti-Kòrisyon", desc: "Konfòm ak konvansyon UNCAC ONU. Odite entèn trimestriyèl. Rapò piblik chak ane." },
  { icon: "⚖️", title: "Jistis & Ekite", desc: "Rekritman transparan, politik non-diskriminasyon, salè ekitab ak pwoteksyon dwa travayè." },
  { icon: "🌍", title: "Transparans Entènasyonal", desc: "Rapò pou OMS, BID, Bank Mondyal selon kondisyon prè. Vizit endepandan pèmèt." },
  { icon: "🛡️", title: "Pwoteksyon Done Pasyan", desc: "Règleman pou done pasyan konfòm GDPR ak nòm OMS. Chiffrement done, aksè rstrikti." },
];

export default function Transparency() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Gouvènans</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>🏛️ Transparans & Govènans</h1>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>
          HNIH angaje pou transparans total. Yon modèl govènans solid ki asire responsabilite, entegrite ak konfyans piblik.
        </p>
      </div>

      {/* Governance Bodies */}
      <SectionTitle sub="Estrikti govènans ki sipèvizy ak gide HNIH">Kò Govènans</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 36 }}>
        {GOVERNANCE_BODIES.map((b) => (
          <Card key={b.name} className="card-hover" style={{ borderTop: `3px solid ${C.blue}` }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 28, flexShrink: 0 }}>{b.icon}</span>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{b.name}</div>
                <Badge color={C.accent}>{b.members} Manm</Badge>
                <p style={{ color: C.soft, fontSize: 12, lineHeight: 1.5, marginTop: 8, marginBottom: 0 }}>{b.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* KPIs */}
      <SectionTitle sub="Endikasyon pèfòmans kle ki mezire siksè HNIH">Endikasyon Pèfòmans (KPI)</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 36 }}>
        {KPI_SECTIONS.map((s) => (
          <Card key={s.title} style={{ padding: 20 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontSize: 22 }}>{s.icon}</span>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>{s.title}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {s.kpis.map((kpi) => (
                <div key={kpi.name} style={{
                  background: "rgba(0,20,60,0.4)",
                  border: `1px solid ${C.border}`,
                  borderRadius: 8,
                  padding: "10px 12px",
                }}>
                  <div style={{ color: "#fff", fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{kpi.name}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4 }}>
                    <span style={{ color: C.soft, fontSize: 11 }}>🎯 {kpi.target}</span>
                    <Badge color={C.success}>{kpi.current}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Reports */}
      <SectionTitle sub="Rapò piblik & dokiman ofisyèl HNIH">Rapò & Dokiman</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
        {REPORTS.map((r) => (
          <Card key={r.title} className="card-hover" style={{ display: "flex", gap: 16, alignItems: "center", padding: "14px 20px", flexWrap: "wrap" }}>
            <span style={{ fontSize: 24 }}>{r.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{r.title}</div>
              <div style={{ color: C.soft, fontSize: 11, marginTop: 2 }}>📅 {r.date}</div>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Badge color={C.accent}>{r.type}</Badge>
              <Badge color={r.status === "Disponib" ? C.success : C.soft}>{r.status}</Badge>
              {r.status === "Disponib" && (
                <button style={{
                  background: "rgba(0,80,200,0.3)",
                  border: `1px solid ${C.borderBright}`,
                  color: "#fff",
                  padding: "4px 12px",
                  borderRadius: 6,
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: "pointer",
                }}>⬇ Telechaje</button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Compliance & Ethics */}
      <SectionTitle sub="Règleman etik ak konpliyan ki gide tout aksyon HNIH">Konpliyan & Etik</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 36 }}>
        {COMPLIANCE.map((c) => (
          <Card key={c.title} className="card-hover" style={{ borderLeft: `3px solid ${C.blue}` }}>
            <div style={{ display: "flex", gap: 12 }}>
              <span style={{ fontSize: 26, flexShrink: 0 }}>{c.icon}</span>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{c.title}</div>
                <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{c.desc}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Procurement */}
      <SectionTitle sub="Pwosedi akizisyon transparan ak anti-korisyon">Plan Akizisyon</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
        {[
          { icon: "📋", title: "Apèl Ofr Piblik", desc: "Tout kontra >$100K fè objè apèl ofr piblik sou sit ofisyèl HNIH ak jounal nasyonal." },
          { icon: "🏆", title: "Komite Evalyasyon", desc: "Komite 5 manm endepandan evalye tout ofr selon kritè teknik, finansye ak etik." },
          { icon: "📊", title: "Piblikasyon Kontra", desc: "Tout kontra adjije piblyè sou sit HNIH ak montant, founisè ak dire kontra a." },
          { icon: "🚫", title: "Zonn Anti-Korisyon", desc: "Pwibisyon absoli pou konflè enterè. Denonsyasyon potansyèl sanksyon kriminèl." },
          { icon: "🌍", title: "Estanda BM/BID", desc: "Pwosedi akizisyon konfòm estanda Bank Mondyal ak BID pou tout prè kondisyonèl." },
          { icon: "🔍", title: "Odite Akizisyon", desc: "Revizyon anyèl endepandan tout kontra. Rapò disponib piblik sou sit web HNIH." },
        ].map((p) => (
          <Card key={p.title} className="card-hover">
            <div style={{ fontSize: 24, marginBottom: 10 }}>{p.icon}</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{p.title}</div>
            <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{p.desc}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
