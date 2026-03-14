import { useState } from 'react';
import { C, PHASES, fmtHTG } from '../data/constants';
import { SectionTitle, StatPill, Card, Badge } from '../components/UI';

export default function Phases() {
  const [activePhase, setActivePhase] = useState(0);
  const phase = PHASES[activePhase];
  const total = PHASES.reduce((s, p) => s + p.htg, 0);

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Plan Estratejik</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>🗓️ 4 Faz Konstriksyon</h1>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>
          Pwogram konstriksyon 5 ane reparti sou 4 faz estratejik. Chak faz bati sou faz anvan an epi ajoute nouvo kapasite espesyalize.
        </p>
      </div>

      {/* Overview stats */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
        {[
          { v: "5 Ane", l: "Dire Total" },
          { v: "4", l: "Faz" },
          { v: fmtHTG(total), l: "Bidjè Total" },
          { v: "32", l: "Travay Kle" },
          { v: "2031", l: "Ouvèti" },
        ].map((s) => <StatPill key={s.l} value={s.v} label={s.l} />)}
      </div>

      {/* Phase selector */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
        {PHASES.map((p, i) => (
          <button
            key={p.faz}
            className="phase-btn"
            onClick={() => setActivePhase(i)}
            style={{
              background: activePhase === i
                ? `linear-gradient(135deg, ${p.color}, ${C.accent})`
                : "rgba(0,30,80,0.4)",
              border: `1px solid ${activePhase === i ? "transparent" : C.border}`,
              color: "#fff",
              padding: "10px 20px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {p.faz} · {p.dur}
          </button>
        ))}
      </div>

      {/* Active phase detail */}
      <Card className="tab-enter" style={{
        background: `linear-gradient(135deg, rgba(0,30,80,0.5), rgba(0,60,150,0.3))`,
        border: `1px solid ${phase.color}50`,
        borderLeft: `4px solid ${phase.color}`,
        marginBottom: 32,
        padding: 28,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16, marginBottom: 20 }}>
          <div>
            <div style={{ color: phase.color, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>{phase.dur}</div>
            <h2 style={{ color: "#fff", fontWeight: 900, fontSize: 24, margin: "0 0 8px" }}>{phase.faz}: {phase.subtitle}</h2>
            <Badge color={C.accent}>{fmtHTG(phase.htg)}</Badge>
          </div>
          <div style={{
            background: `${phase.color}20`,
            border: `1px solid ${phase.color}40`,
            borderRadius: 12,
            padding: "12px 20px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#fff" }}>{fmtHTG(phase.htg)}</div>
            <div style={{ fontSize: 12, color: C.soft }}>Bidjè Faz</div>
            <div style={{ fontSize: 11, color: phase.color, marginTop: 4 }}>
              {((phase.htg / total) * 100).toFixed(0)}% bidjè total
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10 }}>
          {phase.tasks.map((task, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: 10,
              background: "rgba(0,20,60,0.4)",
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              padding: "10px 14px",
            }}>
              <span style={{
                flexShrink: 0,
                width: 22, height: 22,
                background: `${phase.color}30`,
                border: `1px solid ${phase.color}50`,
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, color: phase.color, fontWeight: 700,
              }}>{i + 1}</span>
              <span style={{ color: "#C8E4FF", fontSize: 13, lineHeight: 1.4 }}>{task}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* All phases overview */}
      <SectionTitle sub="Rezime chak faz ak bidjè yo">Rezime 4 Faz</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 36 }}>
        {PHASES.map((p, i) => (
          <Card key={p.faz} className="card-hover" onClick={() => setActivePhase(i)} style={{
            cursor: "pointer",
            borderTop: `4px solid ${p.color}`,
            background: activePhase === i ? `${p.color}15` : C.card,
          }}>
            <div style={{ color: p.color, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>{p.dur}</div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 18, marginBottom: 4 }}>{p.faz}</div>
            <div style={{ color: C.light, fontSize: 13, marginBottom: 12 }}>{p.subtitle}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>{fmtHTG(p.htg)}</span>
              <span style={{ color: C.soft, fontSize: 11 }}>{p.tasks.length} travay</span>
            </div>
            <div style={{ marginTop: 10, height: 6, background: "rgba(0,40,100,0.4)", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${(p.htg / total) * 100}%`, background: p.color, borderRadius: 3 }} />
            </div>
          </Card>
        ))}
      </div>

      {/* Timeline visualization */}
      <SectionTitle sub="Vizyon lineyè pwogrèsyon konstriksyon">Kalann Vizyal</SectionTitle>
      <Card style={{ padding: 28 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, position: "relative" }}>
          {/* Timeline bar */}
          <div style={{
            position: "absolute", top: 24, left: "10%", right: "10%",
            height: 3, background: `linear-gradient(90deg, ${PHASES[0].color}, ${PHASES[3].color})`,
            borderRadius: 2,
          }} />
          {["2026", "2027", "2028", "2029", "2031"].map((yr, i) => (
            <div key={yr} style={{ textAlign: "center", position: "relative", paddingTop: 8 }}>
              <div style={{
                width: 20, height: 20, borderRadius: "50%",
                background: i < 4 ? PHASES[i < 4 ? i : 3].color : C.success,
                margin: "0 auto 12px",
                border: "3px solid rgba(0,8,30,0.9)",
                position: "relative", zIndex: 1,
              }} />
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{yr}</div>
              <div style={{ color: C.soft, fontSize: 10, marginTop: 4 }}>
                {i === 0 ? "Fondas" : i === 1 ? "Faz 1" : i === 2 ? "Faz 2" : i === 3 ? "Faz 3" : "Konplè"}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
