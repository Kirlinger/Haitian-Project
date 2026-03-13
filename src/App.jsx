import { useMemo, useState } from "react";
import heroImg from "./assets/hero.png";

// ─── Formatters ───────────────────────────────────────────────────────────────
const RATE = 131.41;
const fmtUSD = (n) => `$${n.toLocaleString()}M`;
const fmtHTG = (n) =>
  `G ${(n * RATE).toLocaleString(undefined, { maximumFractionDigits: 0 })}M`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const FINANCING = [
  { source: "Gouvènman Ayiti",        usd: 250, color: "#003087", detail: "Bidjè nasyonal & obligasyon souverèn" },
  { source: "BID & Bank Mondyal",      usd: 200, color: "#0055B3", detail: "Prè kondisyonèl 1.5% sou 30 ane" },
  { source: "Sektè Prive (PPP)",       usd: 150, color: "#0077D4", detail: "Konsesyon 25 ane · pataj revni" },
  { source: "Diaspora Bond",           usd: 100, color: "#00A3E0", detail: "Obligasyon 5.5% · matirite 10 ane" },
  { source: "Donatè Entènasyonal",     usd: 100, color: "#00C8F0", detail: "USAID · AFD · Koperasyon Kanada" },
  { source: "ONG & Philanthropes",     usd:  50, color: "#7EC8E3", detail: "Fondasyon prive & dòn espesifik" },
];

const PHASES = [
  {
    faz: "Faz 1", dur: "Ane 1–2", usd: 180, color: "#003087",
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
    faz: "Faz 2", dur: "Ane 2–3", usd: 280, color: "#0055B3",
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
    faz: "Faz 3", dur: "Ane 3–4", usd: 230, color: "#0077D4",
    subtitle: "Teknoloji Avanse & Rechèch",
    tasks: [
      "Sant Kansè — Linac + PET/CT Scanner",
      "Jenetik & Maladi Ra — Premye Nasyonal",
      "AI Dyagnostik & Sisteèm Klinik",
      "Télémédecine pou 9 klinik satelit",
      "Laboratwa Rechèch Medikal Nivo 3",
      "Robotiksichiji Da Vinci System",
      "IRM 3 Tesla & CT Scanner 128",
      "Akreditasyon JCI Entènasyonal",
    ],
  },
  {
    faz: "Faz 4", dur: "Ane 4–5", usd: 160, color: "#00A3E0",
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

const DEPARTMENTS = [
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

const ROI_METRICS = [
  { icon: "💰", value: "$120M+", unit: "/an",   label: "Revni Anyèl",       desc: "Pa ane 8, sèvis klinik & fòmasyon",    trend: "+12%/an",  trendUp: true  },
  { icon: "✈️", value: "$50M",   unit: "/an",   label: "Touris Medikal",    desc: "Pasyan entènasyonal Karayib la",        trend: "+25%/an",  trendUp: true  },
  { icon: "👷", value: "8,000+", unit: "",       label: "Travay Total",      desc: "Dirèk, endirèk & kontratan",           sub: "3 500 pòs dirèk"               },
  { icon: "🏥", value: "500k+",  unit: "",       label: "Pasyan/Ane",        desc: "Ospitalize ak ambulatwa",               sub: "40% swen gratis"               },
  { icon: "📅", value: "Ane 8",  unit: "",       label: "Bidjè Balanse",     desc: "Point break-even finansye",            sub: "Modèl solid"                   },
  { icon: "🌍", value: "9",      unit: " Klinik",label: "Kouvèti Nasyonal",  desc: "1 klinik pa depatman Ayiti",           sub: "10M+ sitwayen"                 },
  { icon: "🎓", value: "500",    unit: "/an",    label: "Etidyan Medikal",   desc: "Doktè, enfimyè, teknisyen",             sub: "Fòme ann Ayiti"                },
  { icon: "🔬", value: "20+",    unit: "",       label: "Etid Klinik/Ane",   desc: "Piblikasyon syantifik ayisyen",         sub: "Premye nan Karayib"            },
];

const PROJECTIONS = [
  { year: "An 1",  rev:  10, exp:  45 },
  { year: "An 2",  rev:  28, exp:  55 },
  { year: "An 3",  rev:  52, exp:  65 },
  { year: "An 4",  rev:  75, exp:  75 },
  { year: "An 5",  rev:  90, exp:  82 },
  { year: "An 6",  rev:  98, exp:  85 },
  { year: "An 7",  rev: 108, exp:  88 },
  { year: "An 8",  rev: 120, exp:  90 },
  { year: "An 9",  rev: 133, exp:  92 },
  { year: "An 10", rev: 148, exp:  95 },
];

const VISION = {
  mission:
    "Ofri swen sante de kalite entènasyonal bay pèp ayisyen, san diskriminasyon, epi fòme pwochen jenerasyon lidè medikal pou devlopman dirab peyi a.",
  vision:
    "Vin pi gwo sant medikal referans nan Karayib la avan 2035, epi etabli yon modèl sante aksesib, inovatè ak dirab pou tout nasyon an devlopman.",
  values: [
    { icon: "⚕️", title: "Ekselans Klinik",  desc: "Estanda JCI & ISO pou tout sèvis medikal" },
    { icon: "🤝", title: "Aksesibilite",      desc: "40% kabann gratis pou patiyan endijan" },
    { icon: "🔬", title: "Inovasyon",         desc: "AI, jenetik & teknoloji medikal pou Ayiti" },
    { icon: "🌱", title: "Dirab",             desc: "Enèji solèy, dlo pròp, jèsyon vèt" },
    { icon: "🎓", title: "Fòmasyon",          desc: "500 pwofesyonèl sante fòme/ane ann Ayiti" },
    { icon: "🛡️", title: "Entegrite",         desc: "Transparans total, etik ak responsabilite" },
  ],
  highlights: [
    { num: "1,200",  label: "Kabann Total",    icon: "🛏️" },
    { num: "12",     label: "Espesyalite",     icon: "🏥" },
    { num: "3,500+", label: "Staff Medikal",   icon: "👨‍⚕️" },
    { num: "$850M",  label: "Envestisman",     icon: "💎" },
    { num: "5 Ane",  label: "Konstriksyon",    icon: "🏗️" },
    { num: "2031",   label: "Ouvèti Konplè",   icon: "🗓️" },
  ],
  strategic: [
    "Rann Ayiti yon destinasyon medikal rekonèt nan tout rejyon Karayib la, atire pasyan entènasyonal ki ap depanse nan ekonomi nasyonal la.",
    "Diminye fwit medikal: chak ane $300M+ kite peyi a pou tretman deyò. Nou ap anpeche sa epi kenbe resous sa yo ann Ayiti.",
    "Fòme pwochen jenerasyon doktè, enfimyè ak teknisyen sante sou tè nasyonal — elimine bezwen ale lòt bò pou fòmasyon spesyalize.",
    "Kreye yon ekosistèm sante dirab ki ap sèvi tout kouche sosyal: sèvis gratis pou 40% pasyan endijan, sèvis premyèl pou rès la.",
    "Etabli premye sant rechèch medikal ak jenetik ann Ayiti, pou piblikasyon syantifik entènasyonal ak dyagnostik maladi ra.",
    "Lanse yon modèl PPP inovatè (piblik-prive) ki ka replikab nan tout nasyon an devlopman nan rejyon Karayib ak Afrik.",
  ],
};

const TABS = [
  { label: "Vizyon",      icon: "🌟" },
  { label: "Finansman",   icon: "💼" },
  { label: "4 Faz",       icon: "🗓️" },
  { label: "Depatman",    icon: "🏥" },
  { label: "ROI & Enpak", icon: "📈" },
];

// ─── Colour palette ────────────────────────────────────────────────────────────
const C = {
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

// ─── SVG: Donut chart ─────────────────────────────────────────────────────────
function DonutChart({ items, total, size = 260 }) {
  const cx = size / 2, cy = size / 2;
  const R = size * 0.43, r = size * 0.29;
  const GAP = 0.022;
  const START = -Math.PI / 2;

  // Compute cumulative start angles without mutable state
  const startAngles = items.reduce((acc, item) => {
    const prev = acc[acc.length - 1];
    return [...acc, prev + (item.usd / total) * 2 * Math.PI];
  }, [START]);

  const segments = items.map((item, idx) => {
    const baseAngle = startAngles[idx];
    const fraction  = item.usd / total;
    const fullAng   = fraction * 2 * Math.PI;
    const drawAng   = Math.max(fullAng - GAP, 0.001);
    const a1 = baseAngle + GAP / 2;
    const a2 = a1 + drawAng;

    const ox1 = cx + R * Math.cos(a1), oy1 = cy + R * Math.sin(a1);
    const ox2 = cx + R * Math.cos(a2), oy2 = cy + R * Math.sin(a2);
    const ix2 = cx + r * Math.cos(a2), iy2 = cy + r * Math.sin(a2);
    const ix1 = cx + r * Math.cos(a1), iy1 = cy + r * Math.sin(a1);
    const large = fraction > 0.5 ? 1 : 0;
    const d = `M${ox1},${oy1} A${R},${R} 0,${large},1 ${ox2},${oy2} L${ix2},${iy2} A${r},${r} 0,${large},0 ${ix1},${iy1}Z`;
    return { ...item, d };
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: "block" }}>
      {segments.map((seg, i) => (
        <path key={i} d={seg.d} fill={seg.color} opacity={0.93} />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.88} fill="rgba(0,8,30,0.96)" />
      <text x={cx} y={cy - 10} textAnchor="middle" fill="#fff"
            fontSize="21" fontWeight="800" fontFamily="'Segoe UI',sans-serif">
        ${total}M
      </text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="#7EC8E3"
            fontSize="11" fontFamily="'Segoe UI',sans-serif">
        Bidjè Total
      </text>
      <text x={cx} y={cy + 28} textAnchor="middle" fill="#4A7890"
            fontSize="10" fontFamily="'Segoe UI',sans-serif">
        {items.length} Sous Finansman
      </text>
    </svg>
  );
}

// ─── SVG: Revenue vs Expenses 10-year chart ────────────────────────────────────
function RevenueChart({ data }) {
  const maxVal = 165;
  const W = 600, H = 190;
  const padL = 36, padB = 28, padT = 16, padR = 16;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const colW   = chartW / data.length;
  const barW   = colW * 0.34;

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
      {/* Grid lines */}
      {[0, 40, 80, 120, 160].map((v) => {
        const y = padT + chartH - (v / maxVal) * chartH;
        return (
          <g key={v}>
            <line x1={padL} y1={y} x2={W - padR} y2={y}
                  stroke="rgba(255,255,255,0.055)" strokeWidth={1} />
            <text x={padL - 5} y={y + 4} textAnchor="end"
                  fill="#4A7A90" fontSize="9" fontFamily="'Segoe UI',sans-serif">{v}</text>
          </g>
        );
      })}

      {/* Expense backdrop bars */}
      {data.map((d, i) => {
        const x = padL + i * colW + colW * 0.08;
        const bw = colW * 0.84;
        const h = (d.exp / maxVal) * chartH;
        return (
          <rect key={`exp-${i}`} x={x} y={padT + chartH - h}
                width={bw} height={h} fill="rgba(255,70,70,0.12)" rx={3} />
        );
      })}

      {/* Revenue bars */}
      {data.map((d, i) => {
        const x = padL + i * colW + (colW - barW) / 2;
        const h = (d.rev / maxVal) * chartH;
        const alpha = 0.45 + (i / data.length) * 0.55;
        return (
          <rect key={`rev-${i}`} x={x} y={padT + chartH - h}
                width={barW} height={h} fill={C.accent} rx={3} opacity={alpha} />
        );
      })}

      {/* X-axis labels */}
      {data.map((d, i) => (
        <text key={`lbl-${i}`} x={padL + i * colW + colW / 2}
              y={H - 6} textAnchor="middle"
              fill="#4A7A90" fontSize="9" fontFamily="'Segoe UI',sans-serif">
          {d.year}
        </text>
      ))}

      {/* Break-even marker (year 8 = index 7) */}
      {(() => {
        const bx = padL + 7 * colW + colW / 2;
        return (
          <>
            <line x1={bx} y1={padT} x2={bx} y2={padT + chartH}
                  stroke={C.success} strokeWidth={1.5} strokeDasharray="4,3" opacity={0.7} />
            <text x={bx + 4} y={padT + 10} fill={C.success}
                  fontSize="9" fontFamily="'Segoe UI',sans-serif">Break-even</text>
          </>
        );
      })()}
    </svg>
  );
}

// ─── Reusable UI components ────────────────────────────────────────────────────
function SectionTitle({ children, sub }) {
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

function StatPill({ value, label }) {
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

function Card({ children, style = {}, className = "" }) {
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

function Badge({ children, color }) {
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

function DataTable({ cols, headers, rows, footer }) {
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

// ─── Tab: Vision ───────────────────────────────────────────────────────────────
function VisionTab() {
  return (
    <div className="tab-enter">
      {/* Mission + Vision cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
        gap: 16, marginBottom: 28,
      }}>
        <Card style={{
          background: "linear-gradient(135deg,rgba(0,50,130,0.52),rgba(0,30,80,0.38))",
          borderColor: "rgba(0,160,255,0.32)",
        }}>
          <div style={{ fontSize: 30, marginBottom: 12 }}>🎯</div>
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Misyon Nou</div>
          <p style={{ color: "#D4E8FF", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{VISION.mission}</p>
        </Card>
        <Card style={{
          background: "linear-gradient(135deg,rgba(0,80,180,0.42),rgba(0,50,120,0.28))",
          borderColor: "rgba(0,190,255,0.28)",
        }}>
          <div style={{ fontSize: 30, marginBottom: 12 }}>🚀</div>
          <div style={{ color: C.light, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Vizyon 2035</div>
          <p style={{ color: "#D4E8FF", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{VISION.vision}</p>
        </Card>
      </div>

      {/* Key numbers */}
      <SectionTitle sub="Bilan prensipal pwojè a ann yon je">Chif Kle</SectionTitle>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(148px,1fr))",
        gap: 12, marginBottom: 28,
      }}>
        {VISION.highlights.map((h) => (
          <Card key={h.label} className="card-hover" style={{ textAlign: "center", padding: "22px 16px" }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>{h.icon}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: C.light, letterSpacing: -0.5 }}>{h.num}</div>
            <div style={{ fontSize: 10, color: C.soft, marginTop: 5, textTransform: "uppercase", letterSpacing: 1 }}>{h.label}</div>
          </Card>
        ))}
      </div>

      {/* Values */}
      <SectionTitle sub="Prensip fondam antal k ap gide pwojè a">Valè Fondamantal</SectionTitle>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
        gap: 12, marginBottom: 28,
      }}>
        {VISION.values.map((v) => (
          <Card key={v.title} className="card-hover" style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{
              width: 48, height: 48, borderRadius: 13,
              background: "rgba(0,100,220,0.22)",
              border: `1px solid ${C.border}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, flexShrink: 0,
            }}>{v.icon}</div>
            <div>
              <div style={{ fontWeight: 700, color: "#fff", fontSize: 14, marginBottom: 5 }}>{v.title}</div>
              <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.6 }}>{v.desc}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Strategic advantages */}
      <SectionTitle sub="Poukisa pwojè sa a enpòtan pou Ayiti">Avantaj Estratejik</SectionTitle>
      <Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {VISION.strategic.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{
                width: 30, height: 30, borderRadius: "50%",
                background: "rgba(0,100,220,0.28)",
                border: `1px solid ${C.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 700, color: C.accent, flexShrink: 0,
              }}>{i + 1}</div>
              <p style={{ color: "#C4E0FF", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── Tab: Financing ────────────────────────────────────────────────────────────
function FinancingTab({ items, total }) {
  const withPct = useMemo(
    () => items.map((f) => ({ ...f, pct: Math.round((f.usd / total) * 1000) / 10 })),
    [items, total],
  );

  return (
    <div className="tab-enter">
      <SectionTitle sub="Dekonpozisyon konplè 6 sous finansman">Bilan Finansye — Sous Finansman</SectionTitle>

      {/* Donut + table */}
      <div className="finance-grid">
        {/* Donut chart card */}
        <Card style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 20px" }}>
          <DonutChart items={items} total={total} size={240} />
          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 7, width: "100%" }}>
            {items.map((f) => (
              <div key={f.source} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: f.color, flexShrink: 0, display: "inline-block",
                }} />
                <span style={{ fontSize: 12, color: C.soft, flex: 1 }}>{f.source}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: C.light }}>
                  {Math.round((f.usd / total) * 100)}%
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Detail table */}
        <Card style={{ padding: 0 }}>
          <div style={{
            padding: "14px 18px 10px",
            fontSize: 11, fontWeight: 700, color: C.light,
            textTransform: "uppercase", letterSpacing: 1.5,
          }}>
            Detay Finansman Konplè
          </div>
          <DataTable
            cols="2fr 1fr 1.4fr 0.65fr"
            headers={["Sous Finansman", "Montant USD", "Ekivalans HTG", "%"]}
            rows={withPct.map((f) => [
              <span key="src" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: f.color, flexShrink: 0, display: "inline-block" }} />
                <span>
                  <div>{f.source}</div>
                  <div style={{ fontSize: 11, color: "#5A7888", marginTop: 1 }}>{f.detail}</div>
                </span>
              </span>,
              <span key="usd" style={{ fontWeight: 700, color: C.light }}>{fmtUSD(f.usd)}</span>,
              <span key="htg" style={{ fontSize: 12 }}>{fmtHTG(f.usd)}</span>,
              <span key="pct" style={{ fontWeight: 700, color: f.color }}>{f.pct}%</span>,
            ])}
            footer={[
              <strong key="lbl">TOTAL JENERAL</strong>,
              <strong key="usd">{fmtUSD(total)}</strong>,
              <strong key="htg">{fmtHTG(total)}</strong>,
              <strong key="pct">100%</strong>,
            ]}
          />
        </Card>
      </div>

      {/* Distribution bars */}
      <Card>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.light, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 18 }}>
          Distribisyon Vizib Finansman
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {withPct.map((f) => (
            <div key={f.source}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                fontSize: 12, color: C.soft, marginBottom: 7,
                flexWrap: "wrap", gap: 4,
              }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: f.color, display: "inline-block" }} />
                  {f.source}
                </span>
                <span>
                  <strong style={{ color: C.light }}>{fmtUSD(f.usd)}</strong>
                  <span style={{ color: "#4A6878", fontSize: 11 }}> · {fmtHTG(f.usd)}</span>
                </span>
              </div>
              <div style={{ height: 11, borderRadius: 999, background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
                <div style={{
                  height: "100%", width: `${f.pct}%`, borderRadius: 999,
                  background: `linear-gradient(to right, ${f.color}AA, ${f.color})`,
                }} />
              </div>
              <div style={{ fontSize: 11, color: "#3A5A6A", marginTop: 4 }}>{f.detail}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── Tab: Phases ───────────────────────────────────────────────────────────────
function PhasesTab({ phases, totalPhases }) {
  const [active, setActive] = useState(0);
  const phase = phases[active];

  return (
    <div className="tab-enter">
      <SectionTitle sub="Yon plan 5 ane pou transfòme sante Ayiti">Plan 4 Faz — 5 Ane Devlopman</SectionTitle>

      {/* Phase selector buttons */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
        {phases.map((p, i) => (
          <button
            key={p.faz}
            className="phase-btn"
            onClick={() => setActive(i)}
            style={{
              background: active === i ? `${p.color}CC` : "rgba(0,40,100,0.3)",
              border: `2px solid ${active === i ? p.color : "rgba(0,100,200,0.22)"}`,
              color: "#fff",
              padding: "10px 18px",
              borderRadius: 12,
              cursor: "pointer",
              fontFamily: "inherit",
              fontWeight: 700,
              fontSize: 13,
              textAlign: "left",
              minWidth: 126,
            }}
          >
            <div>{p.faz}</div>
            <div style={{ fontSize: 10, color: "#B0D4F0", fontWeight: 400, marginTop: 3 }}>{p.dur}</div>
            <div style={{ fontSize: 10, color: active === i ? "#DFF0FF" : "#4A6878", marginTop: 1 }}>{p.subtitle}</div>
          </button>
        ))}
      </div>

      {/* Phase detail */}
      <Card style={{
        marginBottom: 20,
        borderColor: `${phase.color}44`,
        background: "linear-gradient(135deg,rgba(0,30,80,0.52),rgba(0,18,55,0.42))",
      }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start", marginBottom: 22,
          flexWrap: "wrap", gap: 14,
        }}>
          <div>
            <div style={{ color: C.light, fontSize: 11, textTransform: "uppercase", letterSpacing: 2, fontWeight: 600 }}>
              {phase.dur} · {phase.subtitle}
            </div>
            <div style={{ fontSize: 27, fontWeight: 800, color: "#fff", marginTop: 6 }}>{phase.faz}</div>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[["USD", fmtUSD(phase.usd)], ["HTG", fmtHTG(phase.usd)]].map(([lbl, val]) => (
              <div key={lbl} style={{
                background: "rgba(0,70,180,0.3)",
                border: `1px solid ${phase.color}`,
                borderRadius: 12, padding: "12px 20px", textAlign: "center",
              }}>
                <div style={{ fontSize: 21, fontWeight: 800, color: C.light }}>{val}</div>
                <div style={{ fontSize: 10, color: "#7EC8E3", marginTop: 3 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 10,
        }}>
          {phase.tasks.map((task, i) => (
            <div key={i} style={{
              background: "rgba(0,60,140,0.38)",
              borderRadius: 10, padding: "10px 14px",
              display: "flex", gap: 10, alignItems: "flex-start",
              color: "#C8E4FF", fontSize: 13,
              borderLeft: `3px solid ${phase.color}66`,
            }}>
              <span style={{ color: phase.color, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>✓</span>
              {task}
            </div>
          ))}
        </div>
      </Card>

      {/* Summary table */}
      <Card>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.light, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 14 }}>
          Rezime 4 Faz — Bidjè & Fokis
        </div>
        <DataTable
          cols="0.7fr 0.9fr 0.9fr 1.2fr 2fr"
          headers={["Faz", "Dire", "USD", "HTG", "Fokis Prensipal"]}
          rows={phases.map((p) => [
            <span key="faz" style={{ fontWeight: 700, color: p.color }}>{p.faz}</span>,
            <span key="dur">{p.dur}</span>,
            <span key="usd" style={{ fontWeight: 700, color: C.light }}>{fmtUSD(p.usd)}</span>,
            <span key="htg" style={{ fontSize: 12 }}>{fmtHTG(p.usd)}</span>,
            <span key="sub" style={{ fontSize: 12 }}>{p.subtitle}</span>,
          ])}
          footer={[
            <strong key="t">TOTAL</strong>,
            <strong key="d">5 Ane</strong>,
            <strong key="u">{fmtUSD(totalPhases)}</strong>,
            <strong key="h">{fmtHTG(totalPhases)}</strong>,
            <strong key="f">4 Faz Transformasyon Konplè</strong>,
          ]}
        />
      </Card>
    </div>
  );
}

// ─── Tab: Departments ──────────────────────────────────────────────────────────
function DepartmentsTab({ depts }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="tab-enter">
      <SectionTitle sub="Klike yon kat pou wè tout detay depatman an">12 Depatman Espesyalize</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(278px,1fr))", gap: 14 }}>
        {depts.map((d) => {
          const isOpen = selected === d.name;
          return (
            <Card
              key={d.name}
              className="card-hover"
              style={{
                cursor: "pointer",
                borderColor: isOpen ? `${d.color}66` : C.border,
                background: isOpen ? "rgba(0,50,120,0.46)" : C.card,
              }}
              onClick={() => setSelected(isOpen ? null : d.name)}
            >
              {/* Header row */}
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `${d.color}1E`,
                  border: `1.5px solid ${d.color}55`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24, flexShrink: 0,
                }}>{d.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 5 }}>{d.name}</div>
                  <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.55 }}>{d.desc}</div>
                </div>
              </div>

              {/* Stats + badges row */}
              <div style={{
                display: "flex", gap: 10, marginTop: 14,
                paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.07)",
                flexWrap: "wrap", alignItems: "center",
              }}>
                {d.beds > 0 && (
                  <div style={{ textAlign: "center", minWidth: 44 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: C.light }}>{d.beds}</div>
                    <div style={{ fontSize: 9, color: "#4A7080", textTransform: "uppercase", letterSpacing: 0.5 }}>Kabann</div>
                  </div>
                )}
                <div style={{ textAlign: "center", minWidth: 44 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: C.light }}>{d.specialists}</div>
                  <div style={{ fontSize: 9, color: "#4A7080", textTransform: "uppercase", letterSpacing: 0.5 }}>Spesyalis</div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, flex: 1 }}>
                  {d.capabilities.slice(0, 2).map((cap) => (
                    <Badge key={cap} color={d.color}>{cap}</Badge>
                  ))}
                </div>
              </div>

              {/* Expanded capabilities */}
              {isOpen && (
                <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: 11, color: C.accent, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
                    Tout Kapasite
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {d.capabilities.map((cap) => (
                      <Badge key={cap} color={d.color}>{cap}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// ─── Tab: ROI ──────────────────────────────────────────────────────────────────
function ROITab({ metrics, projections }) {
  return (
    <div className="tab-enter">
      <SectionTitle sub="Retou sou envestisman ak enpak ekonomik entegral">ROI & Enpak Ekonomik</SectionTitle>

      {/* Metric grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(195px,1fr))",
        gap: 14, marginBottom: 28,
      }}>
        {metrics.map((m) => (
          <Card key={m.label} className="card-hover" style={{ padding: "20px 18px" }}>
            <div style={{ fontSize: 30, marginBottom: 10 }}>{m.icon}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: C.light, letterSpacing: -0.5 }}>
              {m.value}
              <span style={{ fontSize: 14, fontWeight: 600, color: C.soft }}>{m.unit}</span>
            </div>
            {m.sub && <div style={{ fontSize: 12, color: "#7EC8E3", marginTop: 3 }}>{m.sub}</div>}
            {m.trend && (
              <div style={{ fontSize: 11, color: C.success, marginTop: 4, fontWeight: 600 }}>↑ {m.trend}</div>
            )}
            <div style={{
              fontSize: 11, color: "#4A6878", textTransform: "uppercase",
              letterSpacing: 1, marginTop: 10,
              borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 8,
            }}>{m.label}</div>
            <div style={{ fontSize: 12, color: C.soft, marginTop: 3, lineHeight: 1.45 }}>{m.desc}</div>
          </Card>
        ))}
      </div>

      {/* Revenue projection chart */}
      <Card style={{ marginBottom: 26 }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start", marginBottom: 16,
          flexWrap: "wrap", gap: 10,
        }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.light, textTransform: "uppercase", letterSpacing: 1.5 }}>
              Pwojeksyon Revni 10 Ane (M USD)
            </div>
            <div style={{ fontSize: 12, color: C.soft, marginTop: 4 }}>
              Revni (blou) vs Depans (wouj) — break-even an 8
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              [C.accent,   "Revni"],
              ["rgba(255,70,70,0.45)", "Depans"],
              [C.success,  "Break-even"],
            ].map(([color, lbl]) => (
              <span key={lbl} style={{ fontSize: 12, color: "#C8E8FF", display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 13, height: 3, background: color, display: "inline-block", borderRadius: 2 }} />
                {lbl}
              </span>
            ))}
          </div>
        </div>
        <RevenueChart data={projections} />
      </Card>

      {/* Strategic advantages */}
      <SectionTitle sub="Enpak estratejik pou ekonomi ak sosyete Ayiti">Avantaj Estratejik</SectionTitle>
      <Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {VISION.strategic.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{
                width: 30, height: 30, borderRadius: "50%",
                background: "rgba(0,100,220,0.28)",
                border: `1px solid ${C.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 700, color: C.accent, flexShrink: 0,
              }}>{i + 1}</div>
              <p style={{ color: "#C4E0FF", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── App root ──────────────────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab] = useState(0);

  const totalFinancing = useMemo(() => FINANCING.reduce((s, f) => s + f.usd, 0), []);
  const totalPhases    = useMemo(() => PHASES.reduce((s, p) => s + p.usd, 0),    []);

  const headerStats = [
    { v: fmtUSD(totalFinancing), l: "Bidjè Total"   },
    { v: fmtHTG(totalFinancing), l: "HTG Ekivalans" },
    { v: "1,200",                l: "Kabann"         },
    { v: "3,500+",               l: "Anplwaye"       },
    { v: "5 Ane",                l: "Dire"            },
    { v: "12",                   l: "Depatman"        },
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI','Inter',Arial,sans-serif", background: C.bg, minHeight: "100vh", color: "#fff" }}>

      {/* ── Hero Header ──────────────────────────────────────────────────── */}
      <div style={{
        background: `linear-gradient(160deg,rgba(0,6,22,0.97) 0%,rgba(0,24,70,0.91) 55%,rgba(0,48,115,0.76) 100%), url(${heroImg}) center/cover no-repeat`,
        borderBottom: `1px solid ${C.border}`,
        padding: "38px 24px 30px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(0,80,200,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,80,200,0.04) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        <div style={{
          display: "inline-block",
          background: "rgba(0,80,180,0.36)",
          border: `1px solid ${C.borderBright}`,
          borderRadius: 20, padding: "5px 18px",
          fontSize: 11, color: C.light, letterSpacing: 2.5,
          marginBottom: 16, textTransform: "uppercase",
        }}>
          Repiblik d'Ayiti — Pwojè Nasyonal Sante
        </div>

        <h1 style={{
          fontSize: "clamp(22px,5vw,36px)", fontWeight: 900,
          margin: "0 0 8px", letterSpacing: 1.4,
          textShadow: "0 2px 24px rgba(0,100,255,0.32)",
        }}>
          HÔPITAL NATIONAL INTÉGRÉ D'HAÏTI
        </h1>

        <p style={{ color: C.soft, fontSize: 14, margin: "0 0 6px", fontWeight: 500 }}>
          Plan Estratejik Konplè &amp; Bilan Finansye 2026–2031
        </p>
        <p style={{ color: C.light, fontStyle: "italic", fontSize: 13, margin: "0 0 18px" }}>
          "Swen Eksepsyonèl. Teknoloji Modèn. Diyite Imèn."
        </p>

        <div style={{
          display: "inline-block",
          background: "rgba(0,60,140,0.5)",
          border: `1px solid ${C.border}`,
          borderRadius: 8, padding: "5px 14px",
          fontSize: 12, color: C.soft, marginBottom: 22,
        }}>
          💱 Taux: <strong style={{ color: C.light }}>1 USD = {RATE} HTG</strong> — Mas 2026
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
          {headerStats.map((s) => <StatPill key={s.l} value={s.v} label={s.l} />)}
        </div>
      </div>

      {/* ── Tab Bar ───────────────────────────────────────────────────────── */}
      <div style={{
        display: "flex",
        background: "rgba(0,8,28,0.88)",
        borderBottom: `1px solid ${C.border}`,
        overflowX: "auto",
        backdropFilter: "blur(8px)",
      }}>
        {TABS.map((t, i) => (
          <button
            key={i}
            className="nav-tab"
            onClick={() => setTab(i)}
            style={{
              background: tab === i ? "rgba(0,40,100,0.32)" : "transparent",
              border: "none",
              borderBottom: tab === i ? `3px solid ${C.accent}` : "3px solid transparent",
              color: tab === i ? "#fff" : C.soft,
              padding: "14px 24px",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: 13, fontWeight: 600,
              whiteSpace: "nowrap",
              display: "flex", alignItems: "center", gap: 7,
            }}
          >
            <span style={{ fontSize: 15 }}>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div style={{ padding: "28px 22px", maxWidth: 1060, margin: "0 auto" }}>
        {tab === 0 && <VisionTab />}
        {tab === 1 && <FinancingTab items={FINANCING} total={totalFinancing} />}
        {tab === 2 && <PhasesTab phases={PHASES} totalPhases={totalPhases} />}
        {tab === 3 && <DepartmentsTab depts={DEPARTMENTS} />}
        {tab === 4 && <ROITab metrics={ROI_METRICS} projections={PROJECTIONS} />}
      </div>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <div style={{
        borderTop: "1px solid rgba(0,100,200,0.28)",
        background: "rgba(0,4,18,0.96)",
        textAlign: "center",
        padding: "22px 24px",
      }}>
        <div style={{ color: "#4A7080", fontSize: 12, marginBottom: 6 }}>
          <span style={{ color: "#5A8090" }}>© 2026 Hôpital National Intégré d'Haïti</span>
          <span style={{ margin: "0 10px", color: "#2A4050" }}>·</span>
          <span>Plan Estratejik Konplè</span>
          <span style={{ margin: "0 10px", color: "#2A4050" }}>·</span>
          <span>Dokiman Konfidansyèl</span>
        </div>
        <div style={{ fontSize: 11, color: "#2A3A48" }}>
          Pwojè Nasyonal · Bidjè $850M · 2026–2031 · Repiblik d'Haïti
        </div>
      </div>
    </div>
  );
}
