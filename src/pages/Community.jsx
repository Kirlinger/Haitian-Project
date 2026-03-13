import { C } from '../data/constants';
import { SectionTitle, Card, Badge } from '../components/UI';

const CLINICS = [
  { dept: "Artibonite", city: "Gonaïves", pop: "1.7M", icon: "🏥", status: "Planifye Faz 4", services: ["Konsiltasyon Jeneral", "Matènite Debaz", "Ijans 24/7", "Laboratwa"] },
  { dept: "Centre", city: "Hinche", pop: "750K", icon: "🏥", status: "Planifye Faz 4", services: ["Konsiltasyon Jeneral", "Sante Enfan", "Telemedsèn", "Famasi"] },
  { dept: "Grand'Anse", city: "Jérémie", pop: "500K", icon: "🏥", status: "Planifye Faz 4", services: ["Konsiltasyon Jeneral", "Sante Matènèl", "Dantè Debaz", "Ijans"] },
  { dept: "Nippes", city: "Miragoâne", pop: "340K", icon: "🏥", status: "Planifye Faz 4", services: ["Konsiltasyon Jeneral", "Vaksinasyon", "Telemedsèn", "Laboratwa"] },
  { dept: "Nord", city: "Cap-Haïtien", pop: "1.1M", icon: "🏥", status: "Pryorite Faz 4", services: ["Chiriji Debaz", "Matènite", "Sante Mantal", "Radyoloji Debaz"] },
  { dept: "Nord-Est", city: "Fort-Liberté", pop: "380K", icon: "🏥", status: "Planifye Faz 4", services: ["Konsiltasyon Jeneral", "Ijans", "Telemedsèn", "Famasi"] },
  { dept: "Nord-Ouest", city: "Port-de-Paix", pop: "600K", icon: "🏥", status: "Planifye Faz 4", services: ["Konsiltasyon Jeneral", "Vaksinasyon", "Sante Matènèl", "Dantè"] },
  { dept: "Sud", city: "Les Cayes", pop: "800K", icon: "🏥", status: "Pryorite Faz 4", services: ["Chiriji Debaz", "Matènite", "Ijans 24/7", "Laboratwa"] },
  { dept: "Sud-Est", city: "Jacmel", pop: "570K", icon: "🏥", status: "Planifye Faz 4", services: ["Konsiltasyon Jeneral", "Sante Enfan", "Telemedsèn", "Famasi"] },
];

const FREE_SERVICES = [
  { icon: "🦷", title: "Swen Dantè Timoun", desc: "2,000 timoun vilnerab resevwa swen dantè konplè gratis chak ane" },
  { icon: "💉", title: "Vaksinasyon", desc: "Pwogram vaksen nasyonal gratis pou tout timoun 0–12 an selon kalann OMS" },
  { icon: "🤱", title: "Swen Prenatal Gratis", desc: "Konsiltasyon prenatal, echografi, vitaminati gratis pou manman grenn" },
  { icon: "🧪", title: "Tès Depistaj", desc: "Tès HIV, tibekiloz, dyabèt, tensyon gratis nan klinik satelit yo" },
  { icon: "💊", title: "Medikaman Esansyèl", desc: "Liste OMS medikaman esansyèl disponib gratis pou pasyan endijan" },
  { icon: "🧠", title: "Konsiltasyon Sante Mantal", desc: "Sèvis sikolojik debaz gratis pou sivivan katastwòf ak trawma" },
];

const MOBILE_UNITS = [
  { name: "Inite Zòn Montay", zones: "Plas Anse, Kenscoff, Furcy", services: "Konsiltasyon, Vaksen, Depistaj" },
  { name: "Inite Regio Nord", zones: "Milot, Plaisance, Borgne", services: "Matènite mobil, Chiriji debaz" },
  { name: "Inite Zòn Riral Sid", zones: "Aquin, Saint-Louis, Arniquet", services: "Sante Enfan, Dantè, Vaksen" },
  { name: "Inite Pòtoprens Periferik", zones: "Cité Soleil, Carrefour, Delmas", services: "Tès, Famasi, Sante Mantal" },
];

export default function Community() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Kominote</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>🌍 Sante Kominote & Klinik Satelit</h1>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>
          HNIH pa sèlman yon lopital nan Port-au-Prince — se yon rezo nasyonal. 9 klinik satelit, inite mobil, sèvis gratis ak telemedsèn pou 11 milyon Ayisyen.
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
        {[
          { v: "9", l: "Klinik Satelit" },
          { v: "40%", l: "Sèvis Gratis" },
          { v: "500k+", l: "Pasyan/Ane" },
          { v: "4", l: "Inite Mobil" },
          { v: "10M+", l: "Benefisyè" },
          { v: "24/7", l: "Ijans" },
        ].map((s) => (
          <div key={s.l} className="stat-pill" style={{
            background: "rgba(0,50,120,0.42)",
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            padding: "10px 20px",
            textAlign: "center",
            minWidth: 100,
          }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: C.light }}>{s.v}</div>
            <div style={{ fontSize: 10, color: C.soft, marginTop: 3, textTransform: "uppercase", letterSpacing: 1 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Satellite Clinics */}
      <SectionTitle sub="1 klinik satelit pa depatman — kouvèti nasyonal konplè">9 Klinik Satelit</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 36 }}>
        {CLINICS.map((c) => (
          <Card key={c.dept} className="card-hover" style={{ borderTop: `3px solid ${C.steel}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>{c.dept}</div>
                <div style={{ color: C.accent, fontSize: 12, fontWeight: 600 }}>📍 {c.city}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: C.light, fontWeight: 700, fontSize: 13 }}>{c.pop}</div>
                <div style={{ color: C.soft, fontSize: 10 }}>popilasyon</div>
              </div>
            </div>
            <Badge color={C.accent}>{c.status}</Badge>
            <div style={{ marginTop: 12 }}>
              {c.services.map((s) => (
                <div key={s} style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4 }}>
                  <span style={{ color: C.success, fontSize: 10 }}>✓</span>
                  <span style={{ color: C.soft, fontSize: 12 }}>{s}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Free Services */}
      <SectionTitle sub="Sèvis ki ofri gratis pou pèp ayisyen ki pi vilnerab">Sèvis Kominote Gratis</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, marginBottom: 36 }}>
        {FREE_SERVICES.map((s) => (
          <Card key={s.title} className="card-hover" style={{ display: "flex", gap: 12, borderLeft: `3px solid ${C.success}` }}>
            <span style={{ fontSize: 26, flexShrink: 0 }}>{s.icon}</span>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{s.title}</div>
              <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{s.desc}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Mobile units */}
      <SectionTitle sub="Inite mobil ki rive nan zòn riral izole">Inite Mobil Sante</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
        {MOBILE_UNITS.map((u) => (
          <Card key={u.name} className="card-hover" style={{ display: "flex", gap: 16, alignItems: "center", padding: "14px 20px", flexWrap: "wrap" }}>
            <span style={{ fontSize: 28 }}>🚌</span>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{u.name}</div>
              <div style={{ color: C.soft, fontSize: 12 }}>📍 {u.zones}</div>
            </div>
            <div style={{ color: C.light, fontSize: 12, textAlign: "right" }}>{u.services}</div>
          </Card>
        ))}
      </div>

      {/* Maternal & Child */}
      <SectionTitle sub="Pwogram sante manman ak timoun — pryorite nasyonal">Sante Manman ak Timoun</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 36 }}>
        {[
          { icon: "🤱", title: "Swen Prenatal", desc: "8 vizit prenatal pwograme. Echografi 3D gratis. Preparasyon pou akouchman." },
          { icon: "👶", title: "NICU Nivo 3", desc: "120 kabann nourison premature. Teknoloji ventilasyon avanse. Swen 24/7." },
          { icon: "💉", title: "Vaksinasyon Konplè", desc: "Kalann OMS konplè. 100% kouvèti vizye. Tcheke EHR elektwonik." },
          { icon: "🍼", title: "Nitrisyon Tibebe", desc: "Sipò laktasyon, depistaj malnitrisyon, terapeutik pou tibebe kachèktik." },
          { icon: "🧒", title: "Pedyatri Konplè", desc: "80 kabann pedyatri. Spesyalite neonatologi, kardyopedyatri, nèwopedyatri." },
          { icon: "📚", title: "Edikasyon Paran", desc: "Klas sante pou paran — nitrisyon, ijyèn, siy danje ak premye swen tibebe." },
        ].map((p) => (
          <Card key={p.title} className="card-hover">
            <div style={{ fontSize: 26, marginBottom: 10 }}>{p.icon}</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{p.title}</div>
            <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{p.desc}</div>
          </Card>
        ))}
      </div>

      {/* Community Mental Health */}
      <SectionTitle sub="Sante mantal kominote — yon pryorite depase stigma">Sante Mantal Kominote</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
        {[
          { icon: "💭", title: "Sèvis Trawma Katastwòf", desc: "Ekip entèvansyon rapid apre siklonn, tranbleman tè, violans — sipò sikolojik imedya." },
          { icon: "🧠", title: "Klinik PTSD", desc: "Pwogram terapetik pou sivivan PTSD. TCC, EMDR, terapy gwoup kominotè." },
          { icon: "🏠", title: "Klinik Mobil Sante Mantal", desc: "Vizit lakay pou pasyan sikyatri ki pa kapab deplase. Medikal + sikolojik." },
          { icon: "🤝", title: "Gwoup Sipò Kominotè", desc: "Gwoup sipò nan 9 klinik satelit pou depresyon, dèy, abi sibstans." },
          { icon: "📞", title: "Liy Krize 24/7", desc: "Liy telephon kriz nasyonal gratis. Sikiloj disponib nuit ak jou." },
          { icon: "🎓", title: "Fòmasyon Agè Sante", desc: "200 agè sante kominotè fòme pou premye sipò sikolojik nan zòn riral." },
        ].map((m) => (
          <Card key={m.title} className="card-hover">
            <div style={{ fontSize: 26, marginBottom: 10 }}>{m.icon}</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{m.title}</div>
            <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{m.desc}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
