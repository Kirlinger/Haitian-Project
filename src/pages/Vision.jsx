import { C, VISION } from '../data/constants';
import { SectionTitle, Card, StatPill } from '../components/UI';

export default function Vision() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Plan Estratejik</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>🌟 Vizyon & Misyon</h1>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>
          Fondman estratejik Hôpital National Intégré d'Haïti — misyon, vizyon ak valè ki gide tout desizyon ak aksyon nou yo.
        </p>
      </div>

      {/* Mission + Vision */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 16, marginBottom: 32 }}>
        <Card style={{ background: "linear-gradient(135deg,rgba(0,50,130,0.52),rgba(0,30,80,0.38))", borderColor: "rgba(0,160,255,0.32)" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🎯</div>
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Misyon Nou</div>
          <p style={{ color: "#D4E8FF", fontSize: 15, lineHeight: 1.8, margin: 0 }}>{VISION.mission}</p>
        </Card>
        <Card style={{ background: "linear-gradient(135deg,rgba(0,80,180,0.42),rgba(0,50,120,0.28))", borderColor: "rgba(0,190,255,0.28)" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🚀</div>
          <div style={{ color: C.light, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Vizyon 2035</div>
          <p style={{ color: "#D4E8FF", fontSize: 15, lineHeight: 1.8, margin: 0 }}>{VISION.vision}</p>
        </Card>
      </div>

      {/* Key stats */}
      <SectionTitle sub="Bilan prensipal pwojè a ann yon je">Chif Kle</SectionTitle>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
        {VISION.highlights.map((h) => (
          <div key={h.label} className="stat-pill" style={{
            background: "rgba(0,50,120,0.42)",
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            padding: "14px 22px",
            textAlign: "center",
            minWidth: 120,
          }}>
            <div style={{ fontSize: 22, marginBottom: 4 }}>{h.icon}</div>
            <div style={{ fontSize: 20, fontWeight: 900, color: C.light }}>{h.num}</div>
            <div style={{ fontSize: 10, color: C.soft, marginTop: 3, textTransform: "uppercase", letterSpacing: 1 }}>{h.label}</div>
          </div>
        ))}
      </div>

      {/* Values */}
      <SectionTitle sub="6 pilye fondamantal ki gide travay nou">Valè Kò Nou</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 16, marginBottom: 36 }}>
        {VISION.values.map((v) => (
          <Card key={v.title} className="card-hover" style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div style={{
              fontSize: 28, flexShrink: 0,
              background: "rgba(0,80,200,0.2)",
              borderRadius: 10, padding: "8px",
              width: 48, height: 48,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>{v.icon}</div>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{v.title}</div>
              <div style={{ color: C.soft, fontSize: 13, lineHeight: 1.5 }}>{v.desc}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Strategic advantages */}
      <SectionTitle sub="Avantaj estratejik pwojè a pote pou Ayiti">Avantaj Estratejik</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
        {VISION.strategic.map((s, i) => (
          <Card key={i} className="card-hover" style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 20px" }}>
            <div style={{
              flexShrink: 0,
              width: 32, height: 32,
              background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 800, fontSize: 14,
            }}>{i + 1}</div>
            <p style={{ color: "#C8E4FF", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s}</p>
          </Card>
        ))}
      </div>

      {/* Transformation goals */}
      <SectionTitle sub="Kijan HNIH ap chanje sante ann Ayiti">Objektif Chanjman</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        {[
          { icon: "📉", title: "Diminye Mortalite Matènèl", desc: "Objetif: diminye 60% mortalite matènèl nan 5 ane premye operasyon yo" },
          { icon: "🩺", title: "Kouvèti Sante Nasyonal", desc: "Pote sèvis medikal espesyalize nan 10 depatman Ayiti atravè klinik satelit" },
          { icon: "💊", title: "Medikaman Lokal", desc: "Pwodui 30% medikaman esansyèl lokal pou diminye depandans importasyon" },
          { icon: "🎓", title: "Fòme Espesyalis", desc: "500 spesyalis medikal pou chak ane pou satisfè bezwen nasyonal la" },
          { icon: "🔬", title: "Rechèch Nasyonal", desc: "Premye sant rechèch medikal nasyonal ak 50+ piblikasyon ayisyen/ane" },
          { icon: "💰", title: "Ekonomize Deviz", desc: "Anpeche $300M/ane kouri aletranje pou tretman medikal deyò peyi a" },
        ].map((g) => (
          <Card key={g.title} className="card-hover">
            <div style={{ fontSize: 28, marginBottom: 10 }}>{g.icon}</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{g.title}</div>
            <div style={{ color: C.soft, fontSize: 13, lineHeight: 1.5 }}>{g.desc}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
