import { C } from '../data/constants';
import { SectionTitle, Card, Badge } from '../components/UI';

const BOARD = [
  { name: "Dr. Micheline Pierre-Louis", role: "Prezidant Konsèy", bg: "Ansyen Premye Minis, Doktè Dwa & Administrasyon Piblik, Université de Paris", icon: "👩‍⚕️" },
  { name: "Dr. Reginald Boulos", role: "Vis-Prezidant", bg: "PDG Santé Groupe Boulos, Médecin MBA, Harvard Business School", icon: "👨‍⚕️" },
  { name: "Me. Monique Clesca", role: "Sekretè Konsèy", bg: "Avoka entènasyonal, Spesyalis Dwa Sante, Doktora Georgetown University", icon: "👩‍💼" },
  { name: "Dr. Jean-William Pape", role: "Direktè Medikal", bg: "Fondatè GHESKIO, Pwofesè Cornell University, Referans mondyal HIV/SIDA Ayiti", icon: "👨‍⚕️" },
  { name: "Prof. Leslie Voltaire", role: "Direktè Enfrastrikti", bg: "Achtekte & Iben-Planifikatè, Ansyen Minis Planifikasyon, MIT gradye", icon: "👨‍🏫" },
  { name: "Mme. Nathalie Lamothe", role: "Direktè Finans", bg: "CFO eksperyanse, Bankyè entènasyonal, Spesyalis PPP & Finans Devlopman, HEC Paris", icon: "👩‍💼" },
];

const EXECUTIVE = [
  { name: "Dr. Edouard Hébert Jean-François", role: "CEO — Direktè Egzekitif", icon: "🏥", color: C.accent, bio: "25 ane eksperyans jèsyon lopital entènasyonal. Ansyen Direktè WHO-PAHO pou rejyon Karayib. Doktè Medisin + MBA JHU." },
  { name: "Dr. Marie-Carmel Voltaire", role: "CMO — Direktè Medikal", icon: "⚕️", color: "#E74C3C", bio: "Kardiologis entèvansyonèl, 20 ane pratik klinik. Fòme Hôpital Georges Pompidou Paris + NYU Medical Center. Akreditasyon JCI." },
  { name: "M. Patrick Delatour", role: "CFO — Direktè Finansye", icon: "💰", color: C.success, bio: "CPA entènasyonal, spesyalis finans devlopman. Ansyen Direktè Finans Groupe Digicel Haiti. MBA Finance, Université de Montréal." },
  { name: "Dr. Roseline Hyppolite", role: "COO — Direktè Operasyon", icon: "⚙️", color: "#F39C12", bio: "Enjinyè medikal, ekspè jèsyon lopital. Fòme OPS/OMS Washington D.C. Eksperyans rekonstriksyon post-katastwòf an Ayiti." },
  { name: "M. Yves-André Wainright", role: "CTO — Direktè Teknoloji", icon: "💻", color: "#8E44AD", bio: "Enjinyè logisyèl medikal, spesyalis EHR ak AI santè. Ansyen direktè teknik Microsoft Health, MIT gradye." },
];

const MEDICAL_COUNCIL = [
  { name: "Dr. Fritz Casseus", dept: "Kardyoloji", spec: "Sichiji Kardyak" },
  { name: "Dr. Luce Estimé", dept: "Nèwoloji", spec: "Nèwochiriji" },
  { name: "Dr. Anne-Marie Théodore", dept: "Matènite", spec: "Obstetrik & MFM" },
  { name: "Dr. Guy Laraque", dept: "Pedyatri", spec: "Neonatologi" },
  { name: "Dr. Richard Morse", dept: "Onkoloji", spec: "Radyoterapi" },
  { name: "Dr. Fabienne Duperval", dept: "Ijans", spec: "Medsèn Ijans" },
  { name: "Dr. Marc-Arthur Boisrond", dept: "Otopedi", spec: "Chiriji Atikile" },
  { name: "Dr. Carline Pierre", dept: "Sante Mantal", spec: "Sikyatri" },
  { name: "Dr. Ernst Louis-Jeune", dept: "Jenetik", spec: "Jenetik Medikal" },
  { name: "Dr. Patricia Bonhomme", dept: "Reabilitasyon", spec: "Medsèn Fizik" },
  { name: "Dr. Wilner Pierre", dept: "Odontoloji", spec: "Chiriji Oral" },
  { name: "Dr. Claudette Verdieu", dept: "Famasi", spec: "Famakologi Klinik" },
];

const ADVISORY = [
  { name: "Prof. Paul Farmer", org: "Harvard Medical School / Partners in Health", flag: "🇺🇸" },
  { name: "Dr. Joanne Liu", org: "Médecins Sans Frontières (Ansyen Prezidant)", flag: "🇨🇦" },
  { name: "Dr. Carissa Etienne", org: "PAHO/OPS — Direktè Jeneral", flag: "🌎" },
  { name: "Prof. Didier Pittet", org: "OMS — Spesyalis Ijyèn Lopital, Geneva", flag: "🇨🇭" },
  { name: "Dr. Agnes Binagwaho", org: "Université Globale Santé Équitable, Rwanda", flag: "🇷🇼" },
  { name: "Prof. Harvey Fineberg", org: "Gordon & Betty Moore Foundation", flag: "🇺🇸" },
];

export default function Leadership() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Enfòmasyon</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>👔 Ekip Direksyon</h1>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>
          Yon ekip lidèchip eksperyanse, dedye ak konpetan — medsen, administratè, finansyè ak ekspè entènasyonal ki ini pou bati pi gwo lopital ann Ayiti.
        </p>
      </div>

      {/* Board of Directors */}
      <SectionTitle sub="6 manm konsèy ki gouvène ak sipervieze pwojè a">Konsèy Administratif</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16, marginBottom: 36 }}>
        {BOARD.map((m) => (
          <Card key={m.name} className="card-hover" style={{ borderTop: `3px solid ${C.blue}` }}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                background: `linear-gradient(135deg, ${C.navy}, ${C.steel})`,
                border: `2px solid ${C.borderBright}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, flexShrink: 0,
              }}>{m.icon}</div>
              <div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: 15 }}>{m.name}</div>
                <Badge color={C.accent}>{m.role}</Badge>
                <p style={{ color: C.soft, fontSize: 12, lineHeight: 1.5, marginTop: 8, marginBottom: 0 }}>{m.bg}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Executive team */}
      <SectionTitle sub="Ekip C-Suite ki jere operasyon jounen pou jounen">Ekip Egzekitif</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
        {EXECUTIVE.map((e) => (
          <Card key={e.name} className="card-hover" style={{ borderLeft: `4px solid ${e.color}` }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{
                width: 56, height: 56, borderRadius: 12,
                background: `${e.color}20`,
                border: `2px solid ${e.color}50`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26, flexShrink: 0,
              }}>{e.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>{e.name}</div>
                <div style={{ color: e.color, fontWeight: 600, fontSize: 13, marginBottom: 8 }}>{e.role}</div>
                <p style={{ color: C.soft, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{e.bio}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Medical council */}
      <SectionTitle sub="Chèf depatman medikal yo">Konsèy Medikal</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12, marginBottom: 36 }}>
        {MEDICAL_COUNCIL.map((m) => (
          <Card key={m.name} className="card-hover" style={{ padding: "14px 16px", display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "rgba(0,80,200,0.2)",
              border: `1px solid ${C.borderBright}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, flexShrink: 0,
            }}>⚕️</div>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{m.name}</div>
              <div style={{ color: C.accent, fontSize: 11, marginTop: 2 }}>{m.dept}</div>
              <div style={{ color: C.soft, fontSize: 11 }}>{m.spec}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* International Advisory */}
      <SectionTitle sub="Ekspè entènasyonal ki konsèy pwojè a">Konsèy Konsiltatif Entènasyonal</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12, marginBottom: 36 }}>
        {ADVISORY.map((a) => (
          <Card key={a.name} className="card-hover" style={{ padding: "14px 16px", display: "flex", gap: 12, alignItems: "center" }}>
            <span style={{ fontSize: 28 }}>{a.flag}</span>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{a.name}</div>
              <div style={{ color: C.soft, fontSize: 11, marginTop: 3, lineHeight: 1.4 }}>{a.org}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Org chart */}
      <SectionTitle sub="Estrikti òganizasyonèl HNIH">Estrikti Òganizasyonèl</SectionTitle>
      <Card style={{ padding: 28, textAlign: "center" }}>
        {/* Level 1: Board */}
        <div style={{ marginBottom: 20 }}>
          <div style={{
            display: "inline-block",
            background: `linear-gradient(135deg, ${C.navy}, ${C.blue})`,
            border: `2px solid ${C.accent}`,
            borderRadius: 10,
            padding: "10px 24px",
            color: "#fff", fontWeight: 800, fontSize: 14,
          }}>🏛️ Konsèy Administratif (6 manm)</div>
        </div>
        {/* Connector */}
        <div style={{ height: 20, width: 2, background: C.borderBright, margin: "0 auto -2px" }} />
        {/* Level 2: CEO */}
        <div style={{ marginBottom: 20 }}>
          <div style={{
            display: "inline-block",
            background: `${C.accent}20`,
            border: `2px solid ${C.accent}`,
            borderRadius: 10,
            padding: "10px 24px",
            color: "#fff", fontWeight: 800, fontSize: 14,
          }}>🏥 CEO — Direktè Egzekitif</div>
        </div>
        {/* Level 3: C-Suite */}
        <div style={{ height: 20, width: 2, background: C.borderBright, margin: "0 auto 0" }} />
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", paddingTop: 4 }}>
          {[
            { label: "CMO ⚕️", color: "#E74C3C" },
            { label: "CFO 💰", color: C.success },
            { label: "COO ⚙️", color: "#F39C12" },
            { label: "CTO 💻", color: "#8E44AD" },
          ].map((c) => (
            <div key={c.label} style={{
              background: `${c.color}15`,
              border: `1px solid ${c.color}50`,
              borderRadius: 8,
              padding: "8px 16px",
              color: "#fff",
              fontWeight: 700,
              fontSize: 13,
            }}>{c.label}</div>
          ))}
        </div>
        <div style={{ marginTop: 20, color: C.soft, fontSize: 12 }}>
          ↓ 12 Chèf Depatman Medikal + Konsèy Konsiltatif Entènasyonal
        </div>
      </Card>
    </div>
  );
}
