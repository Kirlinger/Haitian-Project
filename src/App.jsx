import { useMemo, useState } from "react";

const RATE = 131.41;

const fmtUSD = (usd) => `$${usd.toLocaleString()}M`;
const fmtHTG = (usd) =>
  `G ${(usd * RATE).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  })}M`;

const data = {
  financing: [
    { source: "Gouvènman Ayiti", usd: 250, color: "#003087" },
    { source: "BID & Bank Mondyal", usd: 200, color: "#0055B3" },
    { source: "Sektè Prive (PPP)", usd: 150, color: "#0077D4" },
    { source: "Diaspora Bond", usd: 100, color: "#00A3E0" },
    { source: "Donatè Entènasyonal", usd: 100, color: "#00C8F0" },
    { source: "ONG & Philanthropes", usd: 50, color: "#7EC8E3" },
  ],

  phases: [
    {
      faz: "Faz 1",
      dur: "Ane 1–2",
      usd: 180,
      color: "#003087",
      tasks: [
        "Travay tè & enfrastrikti",
        "Ijans & Trawma (80 kabann)",
        "ICU & Blòk Operasyon",
        "Lab & Radyoloji debaz",
        "Dlo pwòp & enèji solèy",
      ],
    },
    {
      faz: "Faz 2",
      dur: "Ane 2–3",
      usd: 280,
      color: "#0055B3",
      tasks: [
        "Matènite & Pedyatri",
        "Kardyo & Nèwoloji",
        "Otopedi & Reabilitasyon",
        "Odontoloji & Oftalmoloji",
        "Sant Fòmasyon Medikal",
      ],
    },
    {
      faz: "Faz 3",
      dur: "Ane 3–4",
      usd: 230,
      color: "#0077D4",
      tasks: [
        "Sant Kansè (Linac)",
        "Jenetik & Maladi Ra",
        "AI & Télémédecine",
        "Laboratwa rechèch avanse",
        "Famasi nasyonal modèn",
      ],
    },
    {
      faz: "Faz 4",
      dur: "Ane 4–5",
      usd: 160,
      color: "#00A3E0",
      tasks: [
        "Sante mantal konplè",
        "9 klinik satelit",
        "Fòmasyon total staff",
        "Akreditasyon entènasyonal",
        "Gran ouvèti ofisyèl",
      ],
    },
  ],

  departments: [
    { icon: "🫀", name: "Kardyo & Chiriji Kè", desc: "ICU kè, sal operasyon modèn, echografi 4D." },
    { icon: "🧠", name: "Nèwoloji & Nèwochiriji", desc: "IRM, CT-Scan, inite AVC rapid, swen nè avanse." },
    { icon: "👶", name: "Matènite & Pedyatri", desc: "NICU nivo 3, gwo kapasite swen pou manman ak tibebe." },
    { icon: "🦷", name: "Odontoloji", desc: "30 chèz, ortodonsi, swen gratis pou timoun vilnerab." },
    { icon: "🎗️", name: "Onkoloji & Radyo", desc: "Linac, chimioterapi, Sant Kansè nasyonal." },
    { icon: "🦴", name: "Otopedi & Trawma", desc: "Chiriji reparasyon, pwotèz, reabilitasyon entansif." },
    { icon: "👁️", name: "Oftalmoloji", desc: "Lazè, katarak, bank kòne nasyonal." },
    { icon: "🧬", name: "Jenetik & Maladi Ra", desc: "Premye sant maladi ra ak dyagnostik avanse nan peyi a." },
    { icon: "🏃", name: "Reabilitasyon", desc: "Fizyoterapi, robo-rehab, rekiperasyon post-operatwa." },
    { icon: "💭", name: "Sante Mantal", desc: "Sikyatri, terapi, tretman addiksyon ak kriz emosyonèl." },
    { icon: "🚑", name: "Ijans & Trawma", desc: "Heliport, 80 kabann, triage avanse, repons rapid." },
    { icon: "💊", name: "Famasi & Rechèch", desc: "Lab klinik, medikaman jenerik, inovasyon syantifik." },
  ],

  roi: [
    { icon: "💰", value: "$120M+/an", label: "Revni Anyèl" },
    { icon: "✈️", value: "$50M/an", label: "Touris Medikal" },
    { icon: "👷", value: "8,000+", sub: "Post pèmanan", label: "Travay Total" },
    { icon: "🏥", value: "500,000+", sub: "40% gratis", label: "Pasyan/Ane" },
    { icon: "📅", value: "Ane 8", sub: "Point ekilib", label: "Bidjè Balanse" },
    { icon: "🌍", value: "9 Klinik", sub: "Tout depatman", label: "Kouvèti Nasyonal" },
  ],
};

const tabs = ["Bilan Finansye", "Plan 4 Faz", "Depatman", "ROI & Enpak"];

const C = {
  navy: "#002855",
  blue: "#0055B3",
  steel: "#0077D4",
  light: "#4DB8FF",
  pale: "#E8F4FF",
  bg: "#001428",
  textSoft: "#A9C8E8",
  border: "rgba(0,120,255,0.22)",
  card: "rgba(0,40,100,0.34)",
  card2: "rgba(0,30,80,0.24)",
};

const styles = {
  root: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    background: C.bg,
    minHeight: "100vh",
    color: "#fff",
  },
  header: {
    background: `linear-gradient(135deg, #001020 0%, #001f50 60%, #003087 100%)`,
    borderBottom: `1px solid ${C.border}`,
    padding: "28px 24px 20px",
    textAlign: "center",
  },
  headerBadge: {
    display: "inline-block",
    background: "rgba(0,80,180,0.4)",
    border: `1px solid ${C.border}`,
    borderRadius: 20,
    padding: "4px 16px",
    fontSize: 11,
    color: C.light,
    letterSpacing: 2,
    marginBottom: 12,
    textTransform: "uppercase",
  },
  headerTitle: {
    fontSize: "clamp(20px, 5vw, 32px)",
    fontWeight: 900,
    margin: "0 0 6px",
    letterSpacing: 1,
  },
  headerSub: {
    color: C.textSoft,
    fontSize: 14,
    margin: "0 0 4px",
  },
  headerQuote: {
    color: C.light,
    fontStyle: "italic",
    fontSize: 13,
    margin: "0 0 16px",
  },
  rateBadge: {
    display: "inline-block",
    background: "rgba(0,60,140,0.5)",
    border: `1px solid ${C.border}`,
    borderRadius: 8,
    padding: "4px 12px",
    fontSize: 12,
    color: C.textSoft,
    marginBottom: 20,
  },
  statsRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    marginTop: 8,
  },
  statBox: {
    background: "rgba(0,50,120,0.4)",
    border: `1px solid ${C.border}`,
    borderRadius: 10,
    padding: "10px 18px",
    textAlign: "center",
    minWidth: 100,
  },
  statVal: {
    fontSize: 18,
    fontWeight: 700,
    color: C.light,
  },
  statLabel: {
    fontSize: 10,
    color: C.textSoft,
    marginTop: 2,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  tabBar: {
    display: "flex",
    gap: 0,
    borderBottom: `1px solid ${C.border}`,
    background: "rgba(0,10,30,0.8)",
    overflowX: "auto",
  },
  tabBtn: {
    background: "transparent",
    border: "none",
    borderBottom: "3px solid transparent",
    color: C.textSoft,
    padding: "14px 22px",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 13,
    fontWeight: 600,
    whiteSpace: "nowrap",
    transition: "all 0.2s",
  },
  tabBtnActive: {
    borderBottom: `3px solid ${C.steel}`,
    color: "#fff",
    background: "rgba(0,40,100,0.3)",
  },
  content: {
    padding: "24px 20px",
    maxWidth: 960,
    margin: "0 auto",
  },
  sectionTitleWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    margin: "4px 0 14px",
  },
  sectionBar: {
    width: 4,
    height: 20,
    borderRadius: 2,
    background: C.steel,
  },
  sectionTitle: {
    margin: 0,
    color: "#fff",
    fontSize: 18,
  },
  card: {
    background: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: 12,
    padding: 18,
    backdropFilter: "blur(2px)",
  },
  cardTitle: {
    fontSize: 12,
    color: C.light,
    fontWeight: 700,
    marginBottom: 14,
  },
  tableWrap: {
    overflowX: "auto",
    borderRadius: 10,
  },
  tableRow: {
    display: "grid",
    gap: 1,
    marginBottom: 1,
  },
  tableHeadCell: {
    background: "rgba(0,50,120,0.6)",
    padding: "8px 12px",
    fontSize: 11,
    fontWeight: 700,
    color: C.light,
  },
  tableCell: {
    padding: "10px 12px",
    fontSize: 13,
    color: "#C8E4FF",
    display: "flex",
    alignItems: "center",
    minHeight: 46,
  },
  sourceCell: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  colorDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    display: "inline-block",
    flexShrink: 0,
  },
  valueStrong: {
    fontWeight: 700,
    color: C.light,
  },
  barMeta: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 4,
    fontSize: 11,
    color: C.textSoft,
    flexWrap: "wrap",
  },
  barTrack: {
    height: 10,
    borderRadius: 999,
    background: "rgba(255,255,255,0.1)",
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: 999,
  },
  phaseTabs: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginBottom: 16,
  },
  phaseBtn: {
    background: "rgba(0,40,100,0.3)",
    border: "1px solid rgba(0,100,200,0.25)",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: 10,
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: 700,
    fontSize: 13,
    minWidth: 104,
  },
  phaseBtnSub: {
    display: "block",
    marginTop: 2,
    fontSize: 10,
    color: "#B0D4F0",
    fontWeight: 400,
  },
  phaseHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: 14,
    flexWrap: "wrap",
    marginBottom: 18,
  },
  phaseMini: {
    color: "#7EC8E3",
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  phaseTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: 700,
    marginTop: 4,
  },
  phaseAmounts: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
  },
  amountBox: {
    background: "rgba(0,70,180,0.3)",
    border: "1px solid rgba(0,150,255,0.3)",
    borderRadius: 10,
    padding: "10px 16px",
    textAlign: "center",
    minWidth: 120,
  },
  amountBig: {
    fontSize: 22,
    fontWeight: 700,
    color: C.light,
  },
  amountLabel: {
    fontSize: 10,
    color: "#7EC8E3",
    marginTop: 2,
  },
  taskGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: 10,
  },
  taskCard: {
    background: "rgba(0,60,140,0.4)",
    borderRadius: 8,
    padding: "10px 12px",
    display: "flex",
    gap: 8,
    alignItems: "flex-start",
    color: "#C8E4FF",
    fontSize: 13,
  },
  deptGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 12,
  },
  deptRow: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
  },
  deptIcon: {
    fontSize: 28,
    flexShrink: 0,
  },
  deptName: {
    color: C.light,
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 4,
  },
  deptDesc: {
    color: C.textSoft,
    fontSize: 12,
    lineHeight: 1.55,
  },
  roiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 12,
  },
  roiValue: {
    fontSize: 18,
    fontWeight: 700,
    color: C.light,
  },
  roiSub: {
    fontSize: 12,
    color: "#7EC8E3",
    marginTop: 2,
  },
  roiLabel: {
    fontSize: 11,
    color: "#608090",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginTop: 4,
  },
  footer: {
    borderTop: "1px solid rgba(0,100,200,0.3)",
    background: "rgba(0,8,30,0.9)",
    textAlign: "center",
    padding: 14,
    color: "#4A7AA0",
    fontSize: 11,
  },
};

function SectionTitle({ children }) {
  return (
    <div style={styles.sectionTitleWrap}>
      <div style={styles.sectionBar} />
      <h3 style={styles.sectionTitle}>{children}</h3>
    </div>
  );
}

function DataTable({ cols, headers, rows, footer }) {
  return (
    <div style={styles.tableWrap}>
      <div style={{ ...styles.tableRow, gridTemplateColumns: cols }}>
        {headers.map((h) => (
          <div key={h} style={styles.tableHeadCell}>{h}</div>
        ))}
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          style={{
            ...styles.tableRow,
            gridTemplateColumns: cols,
            background: i % 2 === 0 ? "rgba(0,30,80,0.4)" : "rgba(0,20,60,0.3)",
          }}
        >
          {row.map((cell, j) => (
            <div key={j} style={styles.tableCell}>{cell}</div>
          ))}
        </div>
      ))}
      {footer && (
        <div
          style={{
            ...styles.tableRow,
            gridTemplateColumns: cols,
            background: "rgba(0,60,150,0.5)",
            borderTop: "1px solid rgba(0,120,255,0.3)",
          }}
        >
          {footer.map((cell, j) => (
            <div key={j} style={{ ...styles.tableCell, fontWeight: 700, color: C.light }}>{cell}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  const totalFinancing = useMemo(
    () => data.financing.reduce((sum, item) => sum + item.usd, 0),
    []
  );

  const totalPhases = useMemo(
    () => data.phases.reduce((sum, item) => sum + item.usd, 0),
    []
  );

  const financingWithPct = useMemo(
    () =>
      data.financing.map((item) => ({
        ...item,
        pct: Math.round((item.usd / totalFinancing) * 1000) / 10,
      })),
    [totalFinancing]
  );

  const stats = [
    { v: fmtUSD(totalFinancing), l: "Bidjè Total" },
    { v: fmtHTG(totalFinancing), l: "Ekivalans HTG" },
    { v: "1,200", l: "Kabann" },
    { v: "3,500+", l: "Anplwaye" },
    { v: "5 Ane", l: "Dire" },
    { v: "12", l: "Depatman" },
  ];

  const currentPhase = data.phases[activePhase];

  return (
    <div style={styles.root}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerBadge}>Repiblik d'Ayiti — Pwojè Nasyonal Sante</div>
        <h1 style={styles.headerTitle}>HÔPITAL NATIONAL INTÉGRÉ D'HAÏTI</h1>
        <p style={styles.headerSub}>Plan Estratejik &amp; Bilan Finansye Konplè</p>
        <p style={styles.headerQuote}>"Swen Eksepsyonèl. Teknoloji Modèn. Diyite Imèn."</p>
        <div style={styles.rateBadge}>
          💱 Taux: <strong>1 USD = {RATE} HTG</strong> (Mas 2026)
        </div>
        <div style={styles.statsRow}>
          {stats.map((s) => (
            <div key={s.l} style={styles.statBox}>
              <div style={styles.statVal}>{s.v}</div>
              <div style={styles.statLabel}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Bar */}
      <div style={styles.tabBar}>
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setTab(i)}
            style={{ ...styles.tabBtn, ...(tab === i ? styles.tabBtnActive : {}) }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={styles.content}>
        {/* Tab 0: Bilan Finansye */}
        {tab === 0 && (
          <div>
            <SectionTitle>Bilan Finansye — Sous Finansman</SectionTitle>
            <div style={{ ...styles.card, marginBottom: 20 }}>
              <div style={styles.cardTitle}>DETAY FINANSMAN</div>
              <DataTable
                cols="2fr 1fr 1.5fr 0.7fr"
                headers={["Sous Finansman", "Montant USD", "Ekivalans HTG", "%"]}
                rows={financingWithPct.map((f) => [
                  <span key={`${f.source}-src`} style={styles.sourceCell}>
                    <span style={{ ...styles.colorDot, background: f.color }} />
                    {f.source}
                  </span>,
                  <span key={`${f.source}-usd`} style={styles.valueStrong}>{fmtUSD(f.usd)}</span>,
                  <span key={`${f.source}-htg`}>{fmtHTG(f.usd)} HTG</span>,
                  <span key={`${f.source}-pct`} style={{ ...styles.valueStrong, color: f.color }}>{f.pct}%</span>,
                ])}
                footer={[
                  <strong key="total-label">TOTAL JENERAL</strong>,
                  <strong key="total-usd">{fmtUSD(totalFinancing)}</strong>,
                  <strong key="total-htg">{fmtHTG(totalFinancing)} HTG</strong>,
                  <strong key="total-pct">100%</strong>,
                ]}
              />
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>DISTRIBISYON VIZIB FINANSMAN</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {financingWithPct.map((f) => (
                  <div key={f.source}>
                    <div style={styles.barMeta}>
                      <span>{f.source}</span>
                      <span>
                        <strong>{fmtUSD(f.usd)}</strong> / {fmtHTG(f.usd)} HTG
                      </span>
                    </div>
                    <div style={styles.barTrack}>
                      <div style={{ ...styles.barFill, width: `${f.pct}%`, background: f.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 1: Plan 4 Faz */}
        {tab === 1 && (
          <div>
            <SectionTitle>Plan Finansye — 4 Faz sou 5 Ane</SectionTitle>
            <div style={styles.phaseTabs}>
              {data.phases.map((p, i) => (
                <button
                  key={p.faz}
                  onClick={() => setActivePhase(i)}
                  style={{
                    ...styles.phaseBtn,
                    ...(activePhase === i
                      ? { background: `${p.color}CC`, border: `2px solid ${p.color}` }
                      : {}),
                  }}
                >
                  {p.faz}
                  <span style={styles.phaseBtnSub}>{p.dur}</span>
                </button>
              ))}
            </div>

            <div style={{ ...styles.card, marginBottom: 20 }}>
              <div style={styles.phaseHeader}>
                <div>
                  <div style={styles.phaseMini}>{currentPhase.dur}</div>
                  <div style={styles.phaseTitle}>{currentPhase.faz} — Detay</div>
                </div>
                <div style={styles.phaseAmounts}>
                  <div style={{ ...styles.amountBox, border: `1px solid ${currentPhase.color}` }}>
                    <div style={styles.amountBig}>{fmtUSD(currentPhase.usd)}</div>
                    <div style={styles.amountLabel}>USD</div>
                  </div>
                  <div style={{ ...styles.amountBox, border: `1px solid ${currentPhase.color}` }}>
                    <div style={styles.amountBig}>{fmtHTG(currentPhase.usd)}</div>
                    <div style={styles.amountLabel}>HTG</div>
                  </div>
                </div>
              </div>
              <div style={styles.taskGrid}>
                {currentPhase.tasks.map((task, i) => (
                  <div key={i} style={styles.taskCard}>
                    <span style={{ color: currentPhase.color, fontWeight: 700 }}>✓</span>
                    {task}
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>REZIME 4 FAZ</div>
              <DataTable
                cols="0.8fr 1fr 1fr 1.5fr 2fr"
                headers={["Faz", "Dire", "USD", "HTG", "Fokis"]}
                rows={data.phases.map((p) => [
                  <span key={`${p.faz}-faz`} style={{ ...styles.valueStrong, color: p.color }}>{p.faz}</span>,
                  <span key={`${p.faz}-dur`}>{p.dur}</span>,
                  <span key={`${p.faz}-usd`} style={styles.valueStrong}>{fmtUSD(p.usd)}</span>,
                  <span key={`${p.faz}-htg`}>{fmtHTG(p.usd)} HTG</span>,
                  <span key={`${p.faz}-tasks`}>{p.tasks[0]}, {p.tasks[1]}...</span>,
                ])}
                footer={[
                  <strong key="tot-faz">TOTAL</strong>,
                  <strong key="tot-dur">5 Ane</strong>,
                  <strong key="tot-usd">{fmtUSD(totalPhases)}</strong>,
                  <strong key="tot-htg">{fmtHTG(totalPhases)} HTG</strong>,
                  <strong key="tot-tasks">4 Faz Konplè</strong>,
                ]}
              />
            </div>
          </div>
        )}

        {/* Tab 2: Depatman */}
        {tab === 2 && (
          <div>
            <SectionTitle>12 Depatman Espesyalize</SectionTitle>
            <div style={styles.deptGrid}>
              {data.departments.map((d) => (
                <div key={d.name} style={styles.card}>
                  <div style={styles.deptRow}>
                    <div style={styles.deptIcon}>{d.icon}</div>
                    <div>
                      <div style={styles.deptName}>{d.name}</div>
                      <div style={styles.deptDesc}>{d.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: ROI & Enpak */}
        {tab === 3 && (
          <div>
            <SectionTitle>ROI &amp; Enpak Ekonomik</SectionTitle>
            <div style={{ ...styles.roiGrid, marginBottom: 24 }}>
              {data.roi.map((r) => (
                <div key={r.label} style={styles.card}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{r.icon}</div>
                  <div style={styles.roiValue}>{r.value}</div>
                  {r.sub && <div style={styles.roiSub}>{r.sub}</div>}
                  <div style={styles.roiLabel}>{r.label}</div>
                </div>
              ))}
            </div>

            <div style={styles.card}>
              <SectionTitle>Avantaj Estratejik</SectionTitle>
              {[
                "Rann Ayiti yon destinasyon medikal rekonèt nan Karayib la.",
                "Diminye touris medikal k ap depanse lajan Ayiti deyò peyi a.",
                "Fòme pwochen jenerasyon doktè, enfimyè ak teknisyen sou tè nasyonal.",
                "Kreye yon ekosistèm sante dirab ki ap sèvi tout kouche sosyal.",
                "Etabli premye sant rechèch medikal ak jenetik ann Ayiti.",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, color: "#A0D8B8", fontSize: 13, marginBottom: 8, lineHeight: 1.55 }}>
                  <span style={{ color: C.light, fontWeight: 700 }}>›</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        © 2026 Hôpital National Intégré d'Haïti · Plan Estratejik · Konfidansyèl
      </div>
    </div>
  );
}
