import { C } from '../data/constants';

export function SectionTitle({ children, sub }) {
  return (
    <div style={{ margin: "4px 0 20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 4, height: 22, borderRadius: 2,
          background: `linear-gradient(to bottom, ${C.accent}, ${C.steel})`,
          flexShrink: 0,
        }} />
        <h3 style={{ margin: 0, color: "#fff", fontSize: 19, fontWeight: 800, letterSpacing: 0.3 }}>
          {children}
        </h3>
      </div>
      {sub && <p style={{ margin: "6px 0 0 14px", color: C.soft, fontSize: 13, lineHeight: 1.5 }}>{sub}</p>}
    </div>
  );
}

export function StatPill({ value, label }) {
  return (
    <div className="stat-pill" style={{
      background: "rgba(0,50,120,0.42)",
      border: `1px solid ${C.border}`,
      borderRadius: 12,
      padding: "10px 20px",
      textAlign: "center",
      minWidth: 110,
    }}>
      <div style={{ fontSize: 19, fontWeight: 800, color: C.light, letterSpacing: -0.5 }}>{value}</div>
      <div style={{ fontSize: 10, color: C.soft, marginTop: 3, textTransform: "uppercase", letterSpacing: 1 }}>{label}</div>
    </div>
  );
}

export function Card({ children, style = {}, className = "" }) {
  return (
    <div className={`card-base ${className}`} style={{
      background: C.card,
      border: `1px solid ${C.border}`,
      borderRadius: 14,
      padding: 20,
      backdropFilter: "blur(4px)",
      ...style,
    }}>
      {children}
    </div>
  );
}

export function Badge({ children, color }) {
  return (
    <span style={{
      display: "inline-block",
      background: `${color}20`,
      border: `1px solid ${color}50`,
      borderRadius: 20,
      padding: "2px 10px",
      fontSize: 11,
      color,
      fontWeight: 600,
    }}>
      {children}
    </span>
  );
}

export function DataTable({ cols, headers, rows, footer }) {
  return (
    <div style={{ overflowX: "auto", borderRadius: 10 }}>
      <div style={{ display: "grid", gridTemplateColumns: cols, gap: 1, marginBottom: 1 }}>
        {headers.map((h, i) => (
          <div key={i} style={{
            background: "rgba(0,50,120,0.65)",
            padding: "9px 14px",
            fontSize: 11, fontWeight: 700, color: C.light,
            letterSpacing: 0.5, textTransform: "uppercase",
          }}>{h}</div>
        ))}
      </div>
      {rows.map((row, i) => (
        <div key={i} style={{
          display: "grid", gridTemplateColumns: cols, gap: 1, marginBottom: 1,
          background: i % 2 === 0 ? "rgba(0,30,80,0.45)" : "rgba(0,20,60,0.3)",
        }}>
          {row.map((cell, j) => (
            <div key={j} style={{
              padding: "11px 14px", fontSize: 13, color: "#C8E4FF",
              display: "flex", alignItems: "center", minHeight: 48,
            }}>{cell}</div>
          ))}
        </div>
      ))}
      {footer && (
        <div style={{
          display: "grid", gridTemplateColumns: cols, gap: 1,
          background: "rgba(0,60,150,0.5)",
          borderTop: "1px solid rgba(0,120,255,0.35)",
        }}>
          {footer.map((cell, j) => (
            <div key={j} style={{
              padding: "11px 14px", fontSize: 13,
              display: "flex", alignItems: "center",
              fontWeight: 700, color: C.light,
            }}>{cell}</div>
          ))}
        </div>
      )}
    </div>
  );
}
