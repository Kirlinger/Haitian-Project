import { C } from '../data/constants';
import { SectionTitle, Card, Badge } from '../components/UI';

const PARTNERS_INTL = [
  { name: "Organisation Mondiale de la Santé", short: "OMS/WHO", icon: "🌍", contrib: "Estanda medikal, ekipman, konsiltasyon teknik", color: "#3498DB" },
  { name: "Pan American Health Organization", short: "PAHO/OPS", icon: "🌎", contrib: "Koordinasyon rejyonal, pwogram vaksen, fòmasyon", color: "#2980B9" },
  { name: "Banque Mondiale (World Bank)", short: "World Bank", icon: "🏦", contrib: "Finansman G 26 282M prè kondisyonèl, asistans teknik", color: "#F39C12" },
  { name: "Banque Interaméricaine de Développement", short: "BID/IDB", icon: "🌐", contrib: "Co-finansman, jèsyon pwojè, renfosman kapasite", color: "#E67E22" },
  { name: "USAID — Agence des États-Unis", short: "USAID", icon: "🇺🇸", contrib: "Dòn G 6 571M, pwogram sante piblik, fòmasyon pèsonèl", color: "#C0392B" },
  { name: "AFD — Agence Française de Développement", short: "AFD France", icon: "🇫🇷", contrib: "Finansman teknik, ekspertiz medikal, kooperasyon", color: "#8E44AD" },
  { name: "Coopération Canadienne", short: "Canada", icon: "🇨🇦", contrib: "Bous etid, fòmasyon pèsonèl, asistans teknik", color: "#E74C3C" },
  { name: "Union Européenne (EU)", short: "EU", icon: "🇪🇺", contrib: "Subvansyon enpak sosyal, nòm teknik, gouvènans", color: "#3498DB" },
];

const PARTNERS_PRIVATE = [
  { name: "Groupe Clinique du Vent des Îles", role: "Patnè Operasyonèl PPP", desc: "Konpani jèsyon sante prive ki ap pran responsabilite operasyonèl klinik espesyalite sous kontrat 25 ane." },
  { name: "Siemens Healthineers", role: "Ekipman Medikal", desc: "Founisè ekipman imajri (IRM, CT, Ultrasound) ak sistèm enfòmatik medikal entegre." },
  { name: "GE Healthcare Caribbean", role: "Teknoloji Ospitalye", desc: "Ekipman Echografi, monitworaj pasyan, teknoloji sal operasyon ak sèvis antretyen." },
  { name: "Philips Healthcare", role: "Sistèm Radyoloji", desc: "PACS, radyoloji numerik, sèvis angografi ak teknoloji sala kateterizasyon." },
  { name: "IBM Watson Health", role: "Sistèm AI & EHR", desc: "Platfòm EHR nasyonal, AI Diagnostik, analitik klinik ak sistèm jèsyon ospitalye." },
  { name: "Varian Medical Systems", role: "Onkoloji & Radyoterapi", desc: "Sistèm Linac TrueBeam, radyoterapi presizyon ak sistèm planifikasyon traytman kansè." },
];

const PARTNERS_ACADEMIC = [
  { name: "Harvard Medical School", flag: "🇺🇸", desc: "Pwogram rezidans kontwate, bous etid pou 20 doktè/ane, rechèch kolaboratif epidemyoloji" },
  { name: "McGill University Faculty of Medicine", flag: "🇨🇦", desc: "Pwogram fòmasyon espesyalis, echanj pwofesè, rechèch maladi enfeksye tropikal" },
  { name: "Université d'État d'Haïti — Médecine", flag: "🇭🇹", desc: "Ko-akreditasyon pwogram, fòmasyon rezidans nasyonal, entegrasyon etidyan medikal" },
  { name: "Cornell University Weill Medical", flag: "🇺🇸", desc: "Klinik GHESKIO, rechèch HIV/SIDA, kolaborasyon Dr. Pape ak ekip li" },
  { name: "Université de Montréal Médecine", flag: "🇨🇦", desc: "Fòmasyon sante piblik, espesyalis sante fanm, rechèch sante kominote" },
  { name: "Pan American Health and Education Foundation", flag: "🌎", desc: "Bous etid medikal, fòmasyon enfimyè, pwogram sante piblik rejyonal" },
];

const ONG = [
  { name: "Partners in Health (PIH)", icon: "❤️", desc: "Swen primè nan zòn riral, fòmasyon agè sante kominote, chwazi klinik satelit" },
  { name: "Médecins Sans Frontières", icon: "🏥", desc: "Ijans medikal, kolaborasyon trawma, sante mantal, distribisyon medikaman" },
  { name: "Bill & Melinda Gates Foundation", icon: "💊", desc: "Finansman rechèch maladi tropikale, vaksen, malnitrisyon ak sante enfan" },
  { name: "Clinton Health Access Initiative", icon: "🌍", desc: "Négosyasyon pri medikaman, chaîne logistik, sante matènèl" },
  { name: "Fondation Sogebank Haïti", icon: "🏦", desc: "Kominikasyon nasyonal, mobilizasyon kominote lokal, sipò operasyonèl" },
  { name: "Digicel Foundation Haiti", icon: "📱", desc: "Konektivite telemedsèn, platfòm dijital sante, edikasyon sante piblik" },
];

export default function Partnerships() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Enfòmasyon</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>🤝 Patenayi & Kolaborasyon</h1>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>
          HNIH pa travay pou kò li. Yon rezo patnè entènasyonal, prive ak akademik inite pou bati pi gwo lopital ann Ayiti.
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
        {[
          { v: "8+", l: "Patnè Entènasyonal" },
          { v: "6", l: "Patnè Prive" },
          { v: "6", l: "Univ. Akademik" },
          { v: "6", l: "ONG Patnè" },
          { v: "G 111 699M", l: "Finansman Mobilize" },
          { v: "25 Ane", l: "Konsesyon PPP" },
        ].map((s) => (
          <div key={s.l} className="stat-pill" style={{
            background: "rgba(0,50,120,0.42)",
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            padding: "10px 20px",
            textAlign: "center",
            minWidth: 110,
          }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: C.light }}>{s.v}</div>
            <div style={{ fontSize: 10, color: C.soft, marginTop: 3, textTransform: "uppercase", letterSpacing: 1 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* International Partners */}
      <SectionTitle sub="Òganizasyon entènasyonal ki sipòte HNIH">Patnè Entènasyonal</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16, marginBottom: 36 }}>
        {PARTNERS_INTL.map((p) => (
          <Card key={p.short} className="card-hover" style={{ borderLeft: `4px solid ${p.color}` }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 30, flexShrink: 0 }}>{p.icon}</span>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{p.short}</div>
                <div style={{ color: C.soft, fontSize: 11, marginBottom: 8 }}>{p.name}</div>
                <div style={{ color: "#C8E4FF", fontSize: 12, lineHeight: 1.5 }}>{p.contrib}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Private Partners & PPP */}
      <SectionTitle sub="Patnè sektè prive nan estrikti PPP 25 ane">Patnè Prive (PPP)</SectionTitle>
      <Card style={{ marginBottom: 16, padding: 20, background: "rgba(0,40,100,0.3)", borderColor: C.borderBright }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
          {[
            { icon: "📋", title: "Konsesyon 25 Ane", desc: "Kontra konsesyon sou 25 ane pou jèsyon sektè prive" },
            { icon: "💹", title: "Pataj Revni 60/40", desc: "60% revni pou gouvènman, 40% pou patnè prive" },
            { icon: "🏗️", title: "Konstriksyon Kontwate", desc: "Patnè prive responsab pou konstriksyon nan bidjè" },
            { icon: "⚙️", title: "Jèsyon Operasyonèl", desc: "Jèsyon klinik, logistik, RH ak sistèm teknik" },
          ].map((f) => (
            <div key={f.title} style={{ background: "rgba(0,20,60,0.4)", borderRadius: 8, padding: "12px 14px", border: `1px solid ${C.border}` }}>
              <div style={{ fontSize: 18, marginBottom: 6 }}>{f.icon}</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{f.title}</div>
              <div style={{ color: C.soft, fontSize: 11, lineHeight: 1.4 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </Card>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
        {PARTNERS_PRIVATE.map((p) => (
          <Card key={p.name} className="card-hover" style={{ padding: "14px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{
              flexShrink: 0, width: 40, height: 40, borderRadius: 8,
              background: "rgba(0,80,200,0.2)", border: `1px solid ${C.border}`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
            }}>🏢</div>
            <div>
              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginBottom: 4 }}>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{p.name}</span>
                <Badge color={C.accent}>{p.role}</Badge>
              </div>
              <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{p.desc}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Academic */}
      <SectionTitle sub="Inivèsite ak sant rechèch akademik kolaboratè">Patnè Akademik</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 36 }}>
        {PARTNERS_ACADEMIC.map((p) => (
          <Card key={p.name} className="card-hover" style={{ borderTop: `3px solid ${C.steel}` }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
              <span style={{ fontSize: 28 }}>{p.flag}</span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{p.name}</span>
            </div>
            <p style={{ color: C.soft, fontSize: 12, lineHeight: 1.5, margin: 0 }}>{p.desc}</p>
          </Card>
        ))}
      </div>

      {/* ONG */}
      <SectionTitle sub="ONG ak fondasyon philanthropik ki travay avèk HNIH">ONG & Philanthwopi</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {ONG.map((o) => (
          <Card key={o.name} className="card-hover">
            <div style={{ fontSize: 24, marginBottom: 10 }}>{o.icon}</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{o.name}</div>
            <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{o.desc}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
