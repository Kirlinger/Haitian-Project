import { useState } from 'react';
import { C, DEPARTMENTS } from '../data/constants';
import { SectionTitle, StatPill, Card, Badge } from '../components/UI';

export default function Departments() {
  const [expanded, setExpanded] = useState(null);
  const totalBeds = DEPARTMENTS.reduce((s, d) => s + d.beds, 0);
  const totalSpec = DEPARTMENTS.reduce((s, d) => s + d.specialists, 0);

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Plan Estratejik</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>🏥 12 Depatman Medikal</h1>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>
          Douz depatman espesyalize ki kouvri tout bezwen sante ki kritik pou pèp ayisyen. Ekipman modèn, spesyalis eksperyanse ak swen de kalite entènasyonal.
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
        {[
          { v: "12", l: "Depatman" },
          { v: String(totalBeds), l: "Kabann Total" },
          { v: String(totalSpec), l: "Spesyalis" },
          { v: "40%", l: "Swen Gratis" },
          { v: "24/7", l: "Ijans" },
        ].map((s) => <StatPill key={s.l} value={s.v} label={s.l} />)}
      </div>

      {/* Department grid */}
      <SectionTitle sub="Klike sou yon depatman pou wè plis detay">Tout Depatman</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
        {DEPARTMENTS.map((dept, i) => (
          <div
            key={dept.name}
            className="card-hover"
            onClick={() => setExpanded(expanded === i ? null : i)}
            style={{
              background: expanded === i ? `${dept.color}15` : C.card,
              border: `1px solid ${expanded === i ? dept.color + "60" : C.border}`,
              borderRadius: 14,
              padding: 20,
              cursor: "pointer",
              transition: "all 0.2s ease",
              borderLeft: `4px solid ${dept.color}`,
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: `${dept.color}20`,
                  border: `1px solid ${dept.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22,
                }}>{dept.icon}</div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, lineHeight: 1.2 }}>{dept.name}</div>
                  <div style={{ color: dept.color, fontSize: 11, fontWeight: 600, marginTop: 3 }}>
                    {dept.specialists} spesyalis
                  </div>
                </div>
              </div>
              {dept.beds > 0 && (
                <div style={{
                  background: "rgba(0,50,120,0.4)",
                  border: `1px solid ${C.border}`,
                  borderRadius: 8,
                  padding: "4px 10px",
                  textAlign: "center",
                }}>
                  <div style={{ color: C.light, fontWeight: 800, fontSize: 16 }}>{dept.beds}</div>
                  <div style={{ color: C.soft, fontSize: 9, textTransform: "uppercase" }}>Kabann</div>
                </div>
              )}
            </div>

            <p style={{ color: C.soft, fontSize: 12, lineHeight: 1.5, margin: "0 0 12px" }}>{dept.desc}</p>

            {/* Capabilities */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {dept.capabilities.map((cap) => (
                <Badge key={cap} color={dept.color}>{cap}</Badge>
              ))}
            </div>

            {/* Expanded details */}
            {expanded === i && (
              <div className="tab-enter" style={{
                marginTop: 16,
                paddingTop: 16,
                borderTop: `1px solid ${dept.color}30`,
              }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    { label: "Kabann Espesyalize", value: dept.beds > 0 ? `${dept.beds} kabann` : "Ambulatwa" },
                    { label: "Ekip Medikal", value: `${dept.specialists} spesyalis` },
                    { label: "Sèvis Gratis", value: "40% pasyan" },
                    { label: "Disponibilite", value: dept.name.includes("Ijans") ? "24/7" : "Lendi–Vandredi" },
                  ].map((d) => (
                    <div key={d.label} style={{
                      background: "rgba(0,20,60,0.4)",
                      border: `1px solid ${C.border}`,
                      borderRadius: 8,
                      padding: "10px 12px",
                    }}>
                      <div style={{ color: C.soft, fontSize: 10, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>{d.label}</div>
                      <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{d.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ marginTop: 12, color: expanded === i ? C.accent : C.soft, fontSize: 11, textAlign: "right" }}>
              {expanded === i ? "▲ Fèmen" : "▼ Plis Detay"}
            </div>
          </div>
        ))}
      </div>

      {/* Summary table */}
      <SectionTitle sub="Tablo rezime tout depatman" style={{ marginTop: 40 }}>Rezime Tablo</SectionTitle>
      <Card style={{ padding: 0, overflow: "hidden", marginTop: 16 }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "rgba(0,50,120,0.65)" }}>
                {["Depatman", "Ikòn", "Kabann", "Spesyalis", "Kapasite Kle"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: C.light, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DEPARTMENTS.map((d, i) => (
                <tr key={d.name} style={{ background: i % 2 === 0 ? "rgba(0,30,80,0.45)" : "rgba(0,20,60,0.3)" }}>
                  <td style={{ padding: "10px 14px", color: "#fff", fontSize: 13, fontWeight: 600 }}>{d.name}</td>
                  <td style={{ padding: "10px 14px", fontSize: 18 }}>{d.icon}</td>
                  <td style={{ padding: "10px 14px", color: C.light, fontWeight: 700 }}>{d.beds || "—"}</td>
                  <td style={{ padding: "10px 14px", color: C.accent }}>{d.specialists}</td>
                  <td style={{ padding: "10px 14px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {d.capabilities.slice(0, 2).map((c) => (
                        <Badge key={c} color={d.color}>{c}</Badge>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
              <tr style={{ background: "rgba(0,60,150,0.5)", borderTop: `1px solid ${C.border}` }}>
                <td style={{ padding: "10px 14px", color: C.light, fontWeight: 800 }}>TOTAL</td>
                <td style={{ padding: "10px 14px" }}>—</td>
                <td style={{ padding: "10px 14px", color: C.light, fontWeight: 800 }}>{totalBeds}</td>
                <td style={{ padding: "10px 14px", color: C.light, fontWeight: 800 }}>{totalSpec}</td>
                <td style={{ padding: "10px 14px", color: C.soft }}>12 espesyalite</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
