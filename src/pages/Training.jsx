import { C } from '../data/constants';
import { SectionTitle, Card, Badge } from '../components/UI';

const RESIDENCIES = [
  { specialty: "Medsèn Entèn", duration: "3 Ane", spots: 15, req: "Diplòm Medisin + Egzamen Nasyonal" },
  { specialty: "Chiriji Jeneral", duration: "5 Ane", spots: 8, req: "Medsèn Entèn + Rekòmandasyon" },
  { specialty: "Obstetrik & Gynèkoloji", duration: "4 Ane", spots: 10, req: "Diplòm Medisin + Motivasyon" },
  { specialty: "Pedyatri", duration: "3 Ane", spots: 12, req: "Diplòm Medisin + Pediatrik rotasyon" },
  { specialty: "Kardyoloji", duration: "3 Ane (+2 Fèlowchip)", spots: 4, req: "Medsèn Entèn + tès spesyal" },
  { specialty: "Nèwoloji", duration: "4 Ane", spots: 4, req: "Medsèn Entèn + EEG debaz" },
  { specialty: "Onkoloji", duration: "4 Ane", spots: 4, req: "Medsèn Entèn + rechèch klinike" },
  { specialty: "Radyoloji", duration: "4 Ane", spots: 6, req: "Diplòm Medisin + tès imajri" },
  { specialty: "Sante Mantal", duration: "4 Ane", spots: 6, req: "Diplòm Medisin + entevyou sikolojik" },
  { specialty: "Ijans Medikal", duration: "3 Ane", spots: 10, req: "Diplòm Medisin + ACLS sètifye" },
  { specialty: "Anestezi", duration: "3 Ane", spots: 8, req: "Diplòm Medisin + rotasyon klinik" },
  { specialty: "Jenetik Medikal", duration: "5 Ane", spots: 2, req: "Medsèn Entèn + rechèch jenetik" },
];

const SCHOLARSHIPS = [
  { name: "Bous Egzèlans HNIH", amount: "G 3 285 250/ane", num: "20/ane", desc: "Rezidans konplè pou pi bon etidyan ayisyen medisin. Kouvri frè akademik + lojman + sibvansyon." },
  { name: "Bous Dyaspora", amount: "G 1 971 150/ane", num: "10/ane", desc: "Pou manm dyaspora ayisyen ki vle fòme kòm spesyalis epi retounen travay ann Ayiti minimum 5 ane." },
  { name: "Bous Enfimyè Nasyonal", amount: "G 1 051 280/ane", num: "50/ane", desc: "Pou enfimyè ki ap fòme ann Ayiti. Egzije travay nan sistem sante piblik pandan 3 ane apre gradyasyon." },
  { name: "Bous Rechèch Doktora", amount: "G 2 628 200/ane", num: "5/ane", desc: "Pou rechèch doktoral sou maladi tropikal, jenetik ayisyen, sante piblik ann Ayiti." },
  { name: "Bous Teknisyen Medikal", amount: "G 788 460/ane", num: "30/ane", desc: "Radyoloji, laboratwa, famasi, imajri medikal — teknik ki manke nan sistèm sante ayisyen an." },
];

const ACCREDITATIONS = [
  { name: "JCI — Joint Commission International", icon: "🏅", status: "Objektif Faz 4" },
  { name: "ISO 9001 Jèsyon Kalite", icon: "🎖️", status: "Objektif Faz 1" },
  { name: "ISO 15189 Laboratwa", icon: "🔬", status: "Objektif Faz 2" },
  { name: "Akreditasyon MSPP Ayiti", icon: "🇭🇹", status: "Faz 1" },
  { name: "Rekònesans Harvard Medical", icon: "🎓", status: "Akò siye" },
  { name: "Akreditasyon ACGME International", icon: "⚕️", status: "Objektif Faz 3" },
];

export default function Training() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Pwogram</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>🎓 Fòmasyon & Edikasyon</h1>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>
          Fòme pwochen jenerasyon pwofesyonèl sante ayisyen — doktè, enfimyè, teknisyen ak chèchè. 500 gradye/ane nan nan peyi a menm.
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
        {[
          { v: "500", l: "Gradye/Ane" },
          { v: "12", l: "Espesyalite Rezidans" },
          { v: "200", l: "Enfimyè/Ane" },
          { v: "115", l: "Bous Disponib" },
          { v: "6", l: "Patnè Akademik" },
          { v: "JCI", l: "Akreditasyon Vizyon" },
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

      {/* Residency Programs */}
      <SectionTitle sub="12 pwogram rezidans medikal ofisyèl HNIH">Pwogram Rezidans</SectionTitle>
      <Card style={{ padding: 0, overflow: "hidden", marginBottom: 36 }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "rgba(0,50,120,0.65)" }}>
                {["Espesyalite", "Dire", "Plas/Ane", "Kondisyon"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: C.light, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RESIDENCIES.map((r, i) => (
                <tr key={r.specialty} style={{ background: i % 2 === 0 ? "rgba(0,30,80,0.45)" : "rgba(0,20,60,0.3)" }}>
                  <td style={{ padding: "10px 14px", color: "#fff", fontWeight: 600, fontSize: 13 }}>{r.specialty}</td>
                  <td style={{ padding: "10px 14px" }}><Badge color={C.accent}>{r.duration}</Badge></td>
                  <td style={{ padding: "10px 14px", color: C.light, fontWeight: 700 }}>{r.spots}</td>
                  <td style={{ padding: "10px 14px", color: C.soft, fontSize: 12 }}>{r.req}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Nursing School */}
      <SectionTitle sub="Lekòl Enfimyè Nasyonal HNIH">Lekòl Enfimyè Nasyonal</SectionTitle>
      <Card style={{ marginBottom: 36, background: "linear-gradient(135deg, rgba(0,60,150,0.4), rgba(0,100,220,0.2))", borderColor: C.borderBright, padding: 28 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {[
            { icon: "👩‍⚕️", title: "200 Etidyan/Ane", desc: "Kapasite admisyon anyèl pou pwogram enfimyè 3 ane" },
            { icon: "📚", title: "Pwogram Akredite", desc: "Akreditasyon nasyonal MSPP + rekònesans McGill University" },
            { icon: "🏥", title: "Fòmasyon Pratik", desc: "2 ane teyorik + 1 ane estaj klinik nan HNIH menm" },
            { icon: "💼", title: "Anplwa Garanti", desc: "80% gradye anfòme pòs HNIH, 20% nasyonal sistèm sante" },
            { icon: "🌍", title: "Spesyalizasyon", desc: "Sante matènèl, pedyatri, onkoloji, sante mantal, ijans" },
            { icon: "🎓", title: "Diplòm Rekonèt", desc: "Diplòm rekonèt internasyonalman pou travay Kanada, Lafrans, USA" },
          ].map((f) => (
            <div key={f.title}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{f.icon}</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{f.title}</div>
              <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Technical training */}
      <SectionTitle sub="Pwogram fòmasyon teknik medikal">Fòmasyon Teknik</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16, marginBottom: 36 }}>
        {[
          { icon: "🔬", title: "Teknisyen Laboratwa", desc: "2 ane fòmasyon. 40 plas/ane. Biochimi, microbiologi, sero." },
          { icon: "📡", title: "Teknisyen Radyoloji", desc: "2 ane fòmasyon. 30 plas/ane. IRM, CT, Echografi, Radiografi." },
          { icon: "💊", title: "Asistan Famasi", desc: "2 ane fòmasyon. 40 plas/ane. Dispensasyon, jèsyon, rechèch." },
          { icon: "🏥", title: "Sèvis Biomed", desc: "2 ane fòmasyon. 20 plas/ane. Antretyen ekipman medikal, kalibraje." },
          { icon: "🩺", title: "Asistan Anestezi", desc: "2 ane fòmasyon. 15 plas/ane. CRNA track sou sipèvizyon." },
          { icon: "📋", title: "Kòd & Facturasyon", desc: "1 ane fòmasyon. 50 plas/ane. ICD-10, CPT, jèsyon dosye medikal." },
        ].map((t) => (
          <Card key={t.title} className="card-hover">
            <div style={{ fontSize: 26, marginBottom: 10 }}>{t.icon}</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{t.title}</div>
            <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{t.desc}</div>
          </Card>
        ))}
      </div>

      {/* Scholarships */}
      <SectionTitle sub="Bous disponib pou etidyan ayisyen ki merite">Bous Etid Disponib</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
        {SCHOLARSHIPS.map((s) => (
          <Card key={s.name} className="card-hover" style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 20px" }}>
            <div style={{ flexShrink: 0, textAlign: "center", minWidth: 80 }}>
              <div style={{ color: C.light, fontWeight: 900, fontSize: 18 }}>{s.amount}</div>
              <div style={{ color: C.success, fontSize: 11, fontWeight: 600 }}>{s.num}</div>
            </div>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{s.name}</div>
              <div style={{ color: C.soft, fontSize: 13, lineHeight: 1.5 }}>{s.desc}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Accreditations */}
      <SectionTitle sub="Sètifika ak akreditasyon nasyonal ak entènasyonal">Sètifika & Akreditasyon</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
        {ACCREDITATIONS.map((a) => (
          <Card key={a.name} className="card-hover" style={{ display: "flex", gap: 12, alignItems: "center", padding: "14px 16px" }}>
            <span style={{ fontSize: 24 }}>{a.icon}</span>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{a.name}</div>
              <Badge color={C.accent}>{a.status}</Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
