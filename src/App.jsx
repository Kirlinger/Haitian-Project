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
    {
      icon: "🫀",
      name: "Kardyo & Chiriji Kè",
      desc: "ICU kè, sal operasyon modèn, echografi 4D.",
    },
    {
      icon: "🧠",
      name: "Nèwoloji & Nèwochiriji",
      desc: "IRM, CT-Scan, inite AVC rapid, swen nè avanse.",
    },
    {
      icon: "👶",
      name: "Matènite & Pedyatri",
      desc: "NICU nivo 3, gwo kapasite swen pou manman ak tibebe.",
    },
    {
      icon: "🦷",
      name: "Odontoloji",
      desc: "30 chèz, ortodonsi, swen gratis pou timoun vilnerab.",
    },
    {
      icon: "🎗️",
      name: "Onkoloji & Radyo",
      desc: "Linac, chimioterapi, Sant Kansè nasyonal.",
    },
    {
      icon: "🦴",
      name: "Otopedi & Trawma",
      desc: "Chiriji reparasyon, pwotèz, reabilitasyon entansif.",
    },
    {
      icon: "👁️",
      name: "Oftalmoloji",
      desc: "Lazè, katarak, bank kòne nasyonal.",
    },
    {
      icon: "🧬",
      name: "Jenetik & Maladi Ra",
      desc: "Premye sant maladi ra ak dyagnostik avanse nan peyi a.",
    },
    {
      icon: "🏃",
      name: "Reabilitasyon",
      desc: "Fizyoterapi, robo-rehab, rekiperasyon post-operatwa.",
    },
    {
      icon: "💭",
      name: "Sante Mantal",
      desc: "Sikyatri, terapi, tretman addiksyon ak kriz emosyonèl.",
    },
    {
      icon: "🚑",
      name: "Ijans & Trawma",
      desc: "Heliport, 80 kabann, triage avanse, repons rapid.",
    },
    {
      icon: "💊",
      name: "Famasi & Rechèch",
      desc: "Lab klinik, medikaman jenerik, inovasyon syantifik.",
    },
  ],

  roi: [
    { icon: "💰", value: "$120M+/an", sub: fmtHTG(120), label: "Revni Anyèl" },
    { icon: "✈️", value: "$50M/an", sub: fmtHTG(50), label: "Touris Medikal" },
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
    <div style={styles.app}>
      <style>{globalCss}</style>

      {/* ── HEADER ── */}
      <header style={styles.header}>
        <div style={styles.headerGlow} />
        <div style={styles.headerInner}>
          <div style={styles.badgeTop}>PWOJÈ NASYONAL</div>
          <h1 style={styles.title}>🏥 Lopital Nasyonal Ayiti</h1>
          <p style={styles.subtitle}>Sant Medikal Entènasyonal • Port-au-Prince</p>
          <p style={styles.quote}>
            &ldquo;Swen Eksepte pou Tout Ayisyen — Nan Peyi Nou&rdquo;
          </p>
          <div style={styles.rateBadge}>1 USD = {RATE} HTG (Taux BRH)</div>
          <div style={styles.statsWrap}>
            {stats.map((s, i) => (
              <StatCard key={i} value={s.v} label={s.l} />
            ))}
          </div>
        </div>
      </header>

      {/* ── TABS ── */}
      <div style={styles.tabsWrap}>
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setTab(i)}
            style={{
              ...styles.tabBtn,
              ...(tab === i ? styles.tabBtnActive : {}),
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ── MAIN CONTENT ── */}
      <main style={styles.main}>
        {/* TAB 0 — Bilan Finansye */}
        {tab === 0 && (
          <>
            <SectionTitle>Sous Finansman</SectionTitle>
            <Card style={{ marginBottom: 20 }}>
              <div style={styles.cardTitle}>REPARTISYON BIDJÈ — ${totalFinancing}M USD</div>
              <ResponsiveTable
                headers={["Sous", "Montant (USD)", "Ekivalans HTG", "Pousantaj", "Distribisyon"]}
                rows={financingWithPct.map((item) => [
                  <div key="src" style={styles.sourceCell}>
                    <span style={{ ...styles.colorDot, background: item.color }} />
                    {item.source}
                  </div>,
                  <span key="usd" style={styles.valueStrong}>{fmtUSD(item.usd)}</span>,
                  <span key="htg" style={styles.valueSoft}>{fmtHTG(item.usd)}</span>,
                  <span key="pct" style={styles.valueStrong}>{item.pct}%</span>,
                  <div key="bar" style={{ width: "100%", minWidth: 80 }}>
                    <div style={styles.barMeta}>
                      <span>{item.source}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div style={styles.barTrack}>
                      <div
                        style={{
                          ...styles.barFill,
                          width: `${item.pct}%`,
                          background: item.color,
                        }}
                      />
                    </div>
                  </div>,
                ])}
                footer={[
                  "TOTAL",
                  <span key="total-usd" style={styles.valueStrong}>{fmtUSD(totalFinancing)}</span>,
                  <span key="total-htg" style={styles.valueSoft}>{fmtHTG(totalFinancing)}</span>,
                  "100%",
                  "",
                ]}
              />
            </Card>

            <SectionTitle>Distribisyon Vizèl</SectionTitle>
            <Card>
              <div style={styles.cardTitle}>GRAFIK BAR — SOUS FINANSMAN</div>
              {financingWithPct.map((item, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div style={styles.barMeta}>
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ ...styles.colorDot, background: item.color }} />
                      {item.source}
                    </span>
                    <span style={styles.valueStrong}>
                      {fmtUSD(item.usd)} · {item.pct}%
                    </span>
                  </div>
                  <div style={styles.barTrack}>
                    <div
                      style={{
                        ...styles.barFill,
                        width: `${item.pct}%`,
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}cc)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </Card>
          </>
        )}

        {/* TAB 1 — Plan 4 Faz */}
        {tab === 1 && (
          <>
            <SectionTitle>Plan Konstriksyon 4 Faz</SectionTitle>

            {/* Phase selector buttons */}
            <div style={styles.phaseTabs}>
              {data.phases.map((ph, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhase(i)}
                  style={{
                    ...styles.phaseBtn,
                    ...(activePhase === i
                      ? { background: ph.color, border: `2px solid ${ph.color}` }
                      : {}),
                  }}
                >
                  {ph.faz}
                  <span style={styles.phaseBtnSub}>{ph.dur}</span>
                </button>
              ))}
            </div>

            <Card>
              <div style={styles.phaseHeader}>
                <div>
                  <div style={styles.phaseMini}>{currentPhase.dur}</div>
                  <div style={styles.phaseTitle}>{currentPhase.faz}</div>
                </div>
                <div style={styles.phaseAmounts}>
                  <div style={styles.amountBox}>
                    <div style={styles.amountBig}>{fmtUSD(currentPhase.usd)}</div>
                    <div style={styles.amountLabel}>Bidjè Faz</div>
                  </div>
                  <div style={styles.amountBox}>
                    <div style={styles.amountBig}>{fmtHTG(currentPhase.usd)}</div>
                    <div style={styles.amountLabel}>Ekivalans HTG</div>
                  </div>
                  <div style={styles.amountBox}>
                    <div style={styles.amountBig}>
                      {Math.round((currentPhase.usd / totalPhases) * 100)}%
                    </div>
                    <div style={styles.amountLabel}>% Bidjè Total</div>
                  </div>
                </div>
              </div>

              {/* Progress bar for this phase */}
              <div style={{ marginBottom: 18 }}>
                <div style={styles.barTrack}>
                  <div
                    style={{
                      ...styles.barFill,
                      width: `${Math.round((currentPhase.usd / totalPhases) * 100)}%`,
                      background: currentPhase.color,
                    }}
                  />
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
            </Card>

            {/* Summary table */}
            <div style={{ marginTop: 20 }}>
              <SectionTitle>Rezime Tout Faz</SectionTitle>
              <Card>
                <ResponsiveTable
                  headers={["Faz", "Peryòd", "Bidjè USD", "Ekivalans HTG", "% Total"]}
                  rows={data.phases.map((ph) => [
                    <span key="faz" style={{ ...styles.valueStrong, color: ph.color }}>{ph.faz}</span>,
                    ph.dur,
                    <span key="usd" style={styles.valueStrong}>{fmtUSD(ph.usd)}</span>,
                    <span key="htg" style={styles.valueSoft}>{fmtHTG(ph.usd)}</span>,
                    `${Math.round((ph.usd / totalPhases) * 100)}%`,
                  ])}
                  footer={[
                    "TOTAL",
                    "5 Ane",
                    <span key="t-usd" style={styles.valueStrong}>{fmtUSD(totalPhases)}</span>,
                    <span key="t-htg" style={styles.valueSoft}>{fmtHTG(totalPhases)}</span>,
                    "100%",
                  ]}
                />
              </Card>
            </div>
          </>
        )}

        {/* TAB 2 — Depatman */}
        {tab === 2 && (
          <>
            <SectionTitle>12 Depatman Medikal</SectionTitle>
            <div style={styles.deptGrid}>
              {data.departments.map((dept, i) => (
                <Card key={i}>
                  <div style={styles.deptRow}>
                    <div style={styles.deptIcon}>{dept.icon}</div>
                    <div>
                      <div style={styles.deptName}>{dept.name}</div>
                      <div style={styles.deptDesc}>{dept.desc}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* TAB 3 — ROI & Enpak */}
        {tab === 3 && (
          <>
            <SectionTitle>ROI & Enpak Ekonomik</SectionTitle>
            <div style={styles.roiGrid}>
              {data.roi.map((item, i) => (
                <Card key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{item.icon}</div>
                  <div style={styles.roiValue}>{item.value}</div>
                  <div style={styles.roiSub}>{item.sub}</div>
                  <div style={styles.roiLabel}>{item.label}</div>
                </Card>
              ))}
            </div>

            <div style={{ marginTop: 24 }}>
              <SectionTitle>Benefis Sosyal</SectionTitle>
              <Card>
                {[
                  "Rediksyon touris medikal (ekonomize $200M+ pa ane nan depans aletranje)",
                  "Fòmasyon 500+ doktè & enfimyè chak ane nan Sant Fòmasyon",
                  "9 klinik satelit pou kouvri tout 10 depatman peyi a",
                  "40% pasyan resevwa swen gratis oswa sibvansyone",
                  "Premye sant kansè nasyonal ak teknoloji Linac",
                  "Rechèch medikal ak laboratwa avanse pou maladi tropikèl",
                ].map((line, i) => (
                  <div key={i} style={styles.bulletLine}>
                    <span style={{ color: C.steel, flexShrink: 0 }}>▸</span>
                    {line}
                  </div>
                ))}
              </Card>
            </div>
          </>
        )}
      </main>

      {/* ── FOOTER ── */}
      <footer style={styles.footer}>
        © 2025 Lopital Nasyonal Ayiti · Pwojè Nasyonal pou Devlopman Sante · Port-au-Prince, Ayiti
      </footer>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div style={styles.sectionTitleWrap}>
      <div style={styles.sectionBar} />
      <h2 style={styles.sectionTitle}>{children}</h2>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div style={styles.statCard}>
      <div style={styles.statValue}>{value}</div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}

function Card({ children, style = {} }) {
  return <div style={{ ...styles.card, ...style }}>{children}</div>;
}

function ResponsiveTable({ headers, rows, footer }) {
  const cols = `repeat(${headers.length}, 1fr)`;
  return (
    <div style={styles.tableWrap}>
      <div style={styles.table}>
        <div
          style={{
            ...styles.tableRow,
            ...styles.tableHeadRow,
            gridTemplateColumns: cols,
          }}
        >
          {headers.map((h, i) => (
            <div key={i} style={styles.tableHeadCell}>
              {h}
            </div>
          ))}
        </div>

        {rows.map((row, rIndex) => (
          <div
            key={rIndex}
            style={{
              ...styles.tableRow,
              gridTemplateColumns: cols,
              background: rIndex % 2 === 0 ? C.card : C.card2,
            }}
          >
            {row.map((cell, cIndex) => (
              <div key={cIndex} style={styles.tableCell}>
                {cell}
              </div>
            ))}
          </div>
        ))}

        <div
          style={{
            ...styles.tableRow,
            gridTemplateColumns: cols,
            background: C.navy,
          }}
        >
          {footer.map((cell, i) => (
            <div key={i} style={styles.tableCell}>
              {cell}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif",
    background: `linear-gradient(135deg, ${C.bg}, #002855, #003580)`,
    color: C.pale,
  },

  header: {
    position: "relative",
    overflow: "hidden",
    background: "rgba(0,8,30,0.97)",
    borderBottom: `2px solid ${C.blue}`,
    padding: "30px 20px 22px",
    textAlign: "center",
  },

  headerGlow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse at 50% -20%, rgba(0,100,255,0.15), transparent 70%)",
  },

  headerInner: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1200,
    margin: "0 auto",
  },

  badgeTop: {
    display: "inline-block",
    background: `linear-gradient(135deg, ${C.navy}, ${C.blue})`,
    border: `1px solid ${C.steel}`,
    borderRadius: 4,
    padding: "4px 14px",
    fontSize: 10,
    letterSpacing: 3,
    textTransform: "uppercase",
    color: C.light,
    marginBottom: 12,
  },

  title: {
    margin: "0 0 6px",
    color: "#fff",
    fontSize: "clamp(20px, 3.6vw, 40px)",
    letterSpacing: 1,
    fontWeight: 700,
  },

  subtitle: {
    margin: "0 0 4px",
    color: C.light,
    fontSize: 13,
    letterSpacing: 2,
  },

  quote: {
    margin: "0 0 18px",
    color: "#B0D4F0",
    fontStyle: "italic",
    fontSize: 13,
  },

  rateBadge: {
    display: "inline-block",
    background: "rgba(0,80,180,0.3)",
    border: `1px solid ${C.steel}`,
    borderRadius: 999,
    padding: "5px 16px",
    fontSize: 11,
    color: "#7EC8E3",
    marginBottom: 18,
  },

  statsWrap: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: 10,
    maxWidth: 980,
    margin: "0 auto",
  },

  statCard: {
    background: "rgba(0,70,180,0.25)",
    border: "1px solid rgba(0,120,255,0.3)",
    borderRadius: 10,
    padding: "12px 10px",
    textAlign: "center",
  },

  statValue: {
    fontSize: 18,
    fontWeight: 700,
    color: C.light,
  },

  statLabel: {
    fontSize: 10,
    color: "#7EC8E3",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginTop: 2,
  },

  tabsWrap: {
    display: "flex",
    justifyContent: "center",
    gap: 6,
    padding: "14px 16px 0",
    flexWrap: "wrap",
  },

  tabBtn: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#7EC8E3",
    padding: "9px 16px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 13,
    fontFamily: "inherit",
    transition: "0.2s ease",
  },

  tabBtnActive: {
    background: "rgba(0,90,200,0.75)",
    border: `1px solid ${C.steel}`,
    color: "#fff",
    fontWeight: 700,
  },

  main: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "20px 16px 50px",
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
    flexShrink: 0,
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

  table: {
    minWidth: 720,
  },

  tableRow: {
    display: "grid",
    gap: 1,
    marginBottom: 1,
  },

  tableHeadRow: {
    marginBottom: 2,
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

  valueSoft: {
    color: "#7EC8E3",
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

  bulletLine: {
    display: "flex",
    gap: 10,
    color: "#A0D8B8",
    fontSize: 13,
    marginBottom: 8,
    lineHeight: 1.55,
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

const globalCss = `
  * { box-sizing: border-box; }
  html, body, #root { margin: 0; padding: 0; min-height: 100%; }
  body { background: #001428; }
  button:hover { transform: translateY(-1px); }
  button:active { transform: translateY(0); }
`;
