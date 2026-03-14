import { C, ROI_METRICS, PROJECTIONS } from '../data/constants';
import { SectionTitle, StatPill, Card } from '../components/UI';
import { RevenueChart } from '../components/Charts';

export default function ROI() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Plan Estratejik</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>📈 ROI & Enpak Ekonomik</h1>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>
          Retou sou envestisman konplè — enpak finansye, ekonomik ak sosyal pwojè HNIH sou Ayiti. Break-even projekte pou ane 8.
        </p>
      </div>

      {/* Key Metrics */}
      <SectionTitle sub="8 metrik kle ki defini siksè pwojè a">Metrik Kle ROI</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16, marginBottom: 36 }}>
        {ROI_METRICS.map((m) => (
          <Card key={m.label} className="card-hover" style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, fontSize: 60, opacity: 0.04, lineHeight: 1 }}>{m.icon}</div>
            <div style={{ fontSize: 28, marginBottom: 12 }}>{m.icon}</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 4 }}>
              <span style={{ fontSize: 28, fontWeight: 900, color: C.light, letterSpacing: -1 }}>{m.value}</span>
              <span style={{ color: C.soft, fontSize: 14 }}>{m.unit}</span>
            </div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{m.label}</div>
            <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.4, marginBottom: m.trend ? 8 : 0 }}>{m.desc}</div>
            {m.sub && <div style={{ color: C.accent, fontSize: 11, fontWeight: 600 }}>{m.sub}</div>}
            {m.trend && (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 4,
                background: m.trendUp ? "rgba(0,200,150,0.15)" : "rgba(255,80,80,0.15)",
                border: `1px solid ${m.trendUp ? "rgba(0,200,150,0.3)" : "rgba(255,80,80,0.3)"}`,
                borderRadius: 20,
                padding: "2px 8px",
                fontSize: 11,
                color: m.trendUp ? C.success : "#FF6060",
                fontWeight: 700,
                marginTop: 8,
              }}>
                {m.trendUp ? "▲" : "▼"} {m.trend}
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Revenue chart */}
      <SectionTitle sub="Pwojeksyon revni vs depans sou 10 ane operasyon">Pwojeksyon 10 Ane</SectionTitle>
      <Card style={{ marginBottom: 32, padding: 24 }}>
        <div style={{ display: "flex", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 12, height: 12, background: C.accent, borderRadius: 2 }} />
            <span style={{ color: C.soft, fontSize: 12 }}>Revni Pwojekte ($M)</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 12, height: 12, background: "rgba(255,70,70,0.5)", borderRadius: 2 }} />
            <span style={{ color: C.soft, fontSize: 12 }}>Depans Operasyonèl ($M)</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 12, height: 2, background: C.success }} />
            <span style={{ color: C.soft, fontSize: 12 }}>Break-even (Ane 8)</span>
          </div>
        </div>
        <RevenueChart data={PROJECTIONS} />
      </Card>

      {/* Projection table */}
      <SectionTitle sub="Detay chif pwojeksyon finansye pa ane">Tablo Pwojeksyon Detaye</SectionTitle>
      <Card style={{ padding: 0, overflow: "hidden", marginBottom: 36 }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "rgba(0,50,120,0.65)" }}>
                {["Ane", "Revni ($M)", "Depans ($M)", "Balans ($M)", "Estati"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: C.light, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PROJECTIONS.map((p, i) => {
                const bal = p.rev - p.exp;
                const profit = bal >= 0;
                return (
                  <tr key={p.year} style={{ background: i % 2 === 0 ? "rgba(0,30,80,0.45)" : "rgba(0,20,60,0.3)" }}>
                    <td style={{ padding: "10px 14px", color: "#fff", fontWeight: 700 }}>{p.year}</td>
                    <td style={{ padding: "10px 14px", color: C.light, fontWeight: 700 }}>${p.rev}M</td>
                    <td style={{ padding: "10px 14px", color: "#FF9090" }}>${p.exp}M</td>
                    <td style={{ padding: "10px 14px", color: profit ? C.success : "#FF7070", fontWeight: 700 }}>
                      {profit ? "+" : ""}{bal}M
                    </td>
                    <td style={{ padding: "10px 14px" }}>
                      <span style={{
                        display: "inline-block",
                        background: profit ? "rgba(0,200,150,0.15)" : "rgba(255,80,80,0.15)",
                        border: `1px solid ${profit ? "rgba(0,200,150,0.3)" : "rgba(255,80,80,0.3)"}`,
                        borderRadius: 20,
                        padding: "2px 10px",
                        fontSize: 11,
                        color: profit ? C.success : "#FF7070",
                        fontWeight: 600,
                      }}>
                        {profit ? "✅ Pwofitab" : "🔄 Envestisman"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Strategic impact */}
      <SectionTitle sub="Enpak sosyal ak ekonomik depase enpak finansye a">Enpak Sosyal & Ekonomik</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        {[
          { icon: "🏥", title: "Accès Sante Nasyonal", desc: "500,000+ pasyan/ane ak 40% sèvis gratis pou pèp pòv — pwoteksyon sosyal reyèl" },
          { icon: "💼", title: "8,000+ Travay Dirèk", desc: "3,500 pòs medikal dirèk + 4,500 endirèk nan konstriksyon, sèvis ak logistik" },
          { icon: "✈️", title: "Touris Medikal", desc: "G 6 571M+/ane nan touris medikal Karayib — Ayiti vin destinasyon sante rekonèt" },
          { icon: "🎓", title: "Sèvo Ret Ann Ayiti", desc: "500 spesyalis fòme/ane diminye ekzòd sèvo medikal ki fè peyi a pèdi" },
          { icon: "💊", title: "Ekonomize G 39 423M", desc: "Anpeche G 39 423M+/ane kouri aletranje pou tretman medikal deyò peyi a" },
          { icon: "🔬", title: "Rechèch Nasyonal", desc: "50+ piblikasyon syantifik ayisyen/ane établi réputation rechèch Ayiti" },
        ].map((s) => (
          <Card key={s.title} className="card-hover" style={{ display: "flex", gap: 14 }}>
            <span style={{ fontSize: 28, flexShrink: 0 }}>{s.icon}</span>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{s.title}</div>
              <div style={{ color: C.soft, fontSize: 13, lineHeight: 1.5 }}>{s.desc}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
