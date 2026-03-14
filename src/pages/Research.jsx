import { C } from '../data/constants';
import { SectionTitle, Card, Badge } from '../components/UI';

const RESEARCH_AREAS = [
  { icon: "🦠", title: "Maladi Enfeksye Tropikale", desc: "Rechèch cholera, tibekiloz, malaria, dengue, Zika, Chikungunya. Epidemyoloji lokal & devlopman vaksèn.", color: "#E74C3C" },
  { icon: "🎗️", title: "Onkoloji & Kansè", desc: "Etid prevalans kansè ann Ayiti, efè anviwonman, tretman adapte pou kontèks limilte resous.", color: "#9B59B6" },
  { icon: "🧬", title: "Jenetik & Genomik", desc: "Premye etid genomik popilasyon ayisyen, maladi ra, predispozisyon jenetik maladi kwonnik.", color: "#8E44AD" },
  { icon: "🍽️", title: "Nitrisyon & Malnitrisyon", desc: "Rechèch malnitrisyon timoun, pikan gwosès, tretman enfeksyon sekondè ak pwotokòl OMS.", color: "#E67E22" },
  { icon: "💭", title: "Sante Mantal", desc: "Etid trawma post-katastwòf, PTSD popilasyon, tretman ki adapte kontèks ayisyen an.", color: "#F39C12" },
  { icon: "❤️", title: "Maladi Kadyovaskile", desc: "Prevalans tensyon, dyabèt, obezite ann Ayiti — faktè risk espesifik, estrateji prevansyon.", color: "#E74C3C" },
  { icon: "👶", title: "Sante Matènèl & Enfan", desc: "Mortalite matènèl, amelyorasyon swen prenatal, NICU nivo 3, nitrisyon neonatòl.", color: "#27AE60" },
  { icon: "💊", title: "Farmakologi Lokal", desc: "Devlopman medikaman jenerik nasyonal, bioekivalans, plant medikal ayisyen ak rechèch etnomedsen.", color: "#2980B9" },
];

const CLINICAL_TRIALS = [
  { phase: "Phase I", title: "Nouvo Terapy Cholera", sponsor: "WHO + NIH", status: "An Preparasyon" },
  { phase: "Phase II", title: "Vaksèn Dengue Lokal", sponsor: "Gates Foundation", status: "Planifye 2027" },
  { phase: "Phase III", title: "Tretman TB Rezistan", sponsor: "Harvard + HNIH", status: "Debite 2026" },
  { phase: "Phase II", title: "AI Dyagnostik Kansè Sèn", sponsor: "IBM + HNIH", status: "Planifye 2027" },
  { phase: "Phase I", title: "Terapy Jenetik Anemi Falsifòm", sponsor: "NIH + HNIH", status: "An Preparasyon" },
  { phase: "Observasyonèl", title: "Genomik Popilasyon Ayisyen", sponsor: "Harvard + McGill", status: "Debite 2026" },
];

const PUBLICATIONS_GOAL = [
  { year: "2027", goal: 15, areas: "Maladi Enfeksye, Sante Matènèl" },
  { year: "2028", goal: 25, areas: "Onkoloji, Jenetik, Kadyoloji" },
  { year: "2029", goal: 40, areas: "Tout domèn rechèch" },
  { year: "2030", goal: 50, areas: "Premye nan Karayib" },
  { year: "2031", goal: 60, areas: "Referans mondyal" },
];

const FUNDING = [
  { source: "NIH (National Institutes of Health)", amount: "G 657M", type: "Gra Rechèch", flag: "🇺🇸" },
  { source: "Gates Foundation", amount: "G 394M", type: "Gra Maladi Tropikale", flag: "💛" },
  { source: "Wellcome Trust", amount: "G 263M", type: "Gra Biomedikal", flag: "🇬🇧" },
  { source: "USAID Research Grant", amount: "G 329M", type: "Gra Sante Piblik", flag: "🇺🇸" },
  { source: "WHO Research Budget", amount: "G 197M", type: "Kolaborasyon OMS", flag: "🌍" },
  { source: "HNIH Internal Fund", amount: "G 394M", type: "Fon Rechèch Entèn", flag: "🇭🇹" },
];

export default function Research() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Pwogram</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>🔬 Sant Rechèch & Syans</h1>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>
          Premye sant rechèch medikal nasyonal ann Ayiti. Laboratwa nivo 3, 20+ etid klinik/ane, 50+ piblikasyon/ane. Pòs Ayiti sou kat syantifik mondyal la.
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
        {[
          { v: "Nivo 3", l: "Laboratwa" },
          { v: "20+", l: "Etid/Ane" },
          { v: "50+", l: "Piblikasyon/Ane" },
          { v: "8", l: "Domèn Rechèch" },
          { v: "G 2 234M", l: "Bidjè Rechèch" },
          { v: "BSL-3", l: "Biosafety" },
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

      {/* Lab description */}
      <SectionTitle sub="Laboratwa rechèch nivo 3 — premye ann Ayiti">Laboratwa Nivo BSL-3</SectionTitle>
      <Card style={{
        background: "linear-gradient(135deg, rgba(0,40,100,0.5), rgba(80,0,150,0.2))",
        borderColor: "rgba(150,100,255,0.3)",
        marginBottom: 36,
        padding: 28,
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {[
            { icon: "🧫", title: "Biosafety Level 3", desc: "Kapab travay ak ajan patojèn aerosol — tibekiloz, coronavirus, antrak" },
            { icon: "🔬", title: "Mikwoskopi Avanse", desc: "Mikwoskòp konfokèl, elektwonik transmisyon, Cryo-EM" },
            { icon: "🧬", title: "Sekwansaj ADN", desc: "Sèvis sekwansaj genomik nivo nasyonal, analiz bioinformatik" },
            { icon: "🧪", title: "Mass Spectrometry", desc: "Analiz metabolomikal, pwoteomikal ak idantifikasyon konpoze" },
            { icon: "💉", title: "Culture Cellulaire", desc: "Pwodui ak tès selil, vaksen rechèch, terapi selilè" },
            { icon: "🖥️", title: "Bioinformatik", desc: "Analize big data genomik, modèl prediktif AI, bazdone nasyonal" },
          ].map((f) => (
            <div key={f.title}>
              <div style={{ fontSize: 26, marginBottom: 8 }}>{f.icon}</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{f.title}</div>
              <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Research areas */}
      <SectionTitle sub="8 domèn rechèch prensipal ki fokalize sou bezwen Ayiti">Domèn Rechèch Prensipal</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 36 }}>
        {RESEARCH_AREAS.map((r) => (
          <Card key={r.title} className="card-hover" style={{ borderLeft: `4px solid ${r.color}` }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>{r.icon}</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{r.title}</div>
            <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{r.desc}</div>
          </Card>
        ))}
      </div>

      {/* Clinical trials */}
      <SectionTitle sub="Etid klinik planifye & an kou nan HNIH">Etid Klinik</SectionTitle>
      <Card style={{ padding: 0, overflow: "hidden", marginBottom: 36 }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "rgba(0,50,120,0.65)" }}>
                {["Phase", "Tit Etid", "Esponsor", "Estati"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: C.light, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CLINICAL_TRIALS.map((t, i) => (
                <tr key={t.title} style={{ background: i % 2 === 0 ? "rgba(0,30,80,0.45)" : "rgba(0,20,60,0.3)" }}>
                  <td style={{ padding: "10px 14px" }}><Badge color={C.accent}>{t.phase}</Badge></td>
                  <td style={{ padding: "10px 14px", color: "#fff", fontWeight: 600, fontSize: 13 }}>{t.title}</td>
                  <td style={{ padding: "10px 14px", color: C.soft, fontSize: 12 }}>{t.sponsor}</td>
                  <td style={{ padding: "10px 14px" }}><Badge color={C.success}>{t.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Publications roadmap */}
      <SectionTitle sub="Objektif piblikasyon syantifik pa ane">Pwogram Piblikasyon</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, marginBottom: 36 }}>
        {PUBLICATIONS_GOAL.map((p) => (
          <Card key={p.year} className="card-hover" style={{ textAlign: "center", borderTop: `3px solid ${C.blue}` }}>
            <div style={{ color: C.accent, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>{p.year}</div>
            <div style={{ color: "#fff", fontWeight: 900, fontSize: 28 }}>{p.goal}+</div>
            <div style={{ color: C.soft, fontSize: 11 }}>piblikasyon</div>
            <div style={{ color: C.soft, fontSize: 10, marginTop: 6 }}>{p.areas}</div>
          </Card>
        ))}
      </div>

      {/* Research funding */}
      <SectionTitle sub="Sous finansman rechèch ak gra ki disponib">Finansman Rechèch</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
        {FUNDING.map((f) => (
          <Card key={f.source} className="card-hover" style={{ display: "flex", gap: 12, alignItems: "center", padding: "14px 16px" }}>
            <span style={{ fontSize: 24 }}>{f.flag}</span>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{f.source}</div>
              <div style={{ color: C.success, fontWeight: 800, fontSize: 15 }}>{f.amount}</div>
              <div style={{ color: C.soft, fontSize: 11 }}>{f.type}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
