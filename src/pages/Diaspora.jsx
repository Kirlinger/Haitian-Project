import { C } from '../data/constants';
import { SectionTitle, Card, Badge } from '../components/UI';

const DIASPORA_STATS = [
  { value: "2M+", label: "Ayisyen Dyaspora", sub: "Mondyalman" },
  { value: "G 526B+", label: "Remitak/Ane", sub: "30% PIB Ayiti" },
  { value: "G 13 141M", label: "Objektif Bond", sub: "Pwogram HNIH" },
  { value: "5.5%", label: "Enterè Anyèl", sub: "Garanti Gouvènman" },
  { value: "10 Ane", label: "Matirite Bond", sub: "Retrè kapital" },
  { value: "G 657 050", label: "Minimòm", sub: "Envestisman" },
];

const LOCATIONS = [
  { country: "Etazini", pop: "800,000+", cities: "NYC, Miami, Boston, Chicago", flag: "🇺🇸" },
  { country: "Kanada", pop: "150,000+", cities: "Montréal, Toronto, Ottawa", flag: "🇨🇦" },
  { country: "Lafrans", pop: "120,000+", cities: "Paris, Lyon, Marseille", flag: "🇫🇷" },
  { country: "Dominikani", pop: "500,000+", cities: "Santo Domingo, Santiago", flag: "🇩🇴" },
  { country: "Bahamas", pop: "80,000+", cities: "Nassau, Freeport", flag: "🇧🇸" },
  { country: "Jamayik", pop: "30,000+", cities: "Kingston", flag: "🇯🇲" },
  { country: "Bèljik", pop: "25,000+", cities: "Bruxelles, Liège", flag: "🇧🇪" },
  { country: "Brezil", pop: "20,000+", cities: "São Paulo, Rio", flag: "🇧🇷" },
];

const STEPS = [
  { num: "01", title: "Kontakte Biwo Bond", desc: "Rele oswa ekri biwo Dyaspora Bond HNIH. Rezevwa tout dokiman ofisyèl yo.", icon: "📞" },
  { num: "02", title: "Verifikasyon KYC", desc: "Soumèt pasepò + prèv adrès pou verifikasyon idantite (Know Your Customer).", icon: "📋" },
  { num: "03", title: "Chwazi Montan", desc: "Minimòm G 657 050. Pa gen maksimòm. Piman anlòt tranch de G 131 410 chak.", icon: "💰" },
  { num: "04", title: "Transfè Fon", desc: "Transfè bank-a-bank sekirize. Peman pa chèk sètifye oswa virement bank.", icon: "🏦" },
  { num: "05", title: "Resevwa Sètifika", desc: "Bond sètifye ofisyèl rete nan men ou. Enregistre elektronikman ak Ministè Finans.", icon: "📜" },
  { num: "06", title: "Enterè Anyèl", desc: "5.5% enterè peye chak ane pandan 10 ane. Retrè kapital total an ane 10.", icon: "📈" },
];

const SUCCESS_STORIES = [
  { country: "Izrayèl", icon: "🇮🇱", total: "G 5 913B+", desc: "State of Israel Bonds depi 1951 — reyisi finanse eta Izrayèl, finanse lwaye ak bidjè leta depi diaspò jwif mondyal la. Modèl pou tout dyaspora bond." },
  { country: "End", icon: "🇮🇳", total: "G 4 599B+", desc: "NRI Bonds (Non-Resident Indian Bonds) plizyè seri depi 1991. Kriz deviz 1991 solisyon pa diaspò end — remonte ak siksè." },
  { country: "Etiyopi", icon: "🇪🇹", total: "G 657B+", desc: "Ethiopian Diaspora Bonds pou Grand Ethiopian Renaissance Dam — finanse ak entegre dyaspora entiyopi nan devlopman nasyonal." },
  { country: "Lewanda", icon: "🇷🇼", total: "G 52 564M", desc: "Genocide survivors bonds pou rekonstwiksyon Lewanda. Modèl siksè pou nasyon ki rekonstwiksyon apre kriz." },
];

export default function Diaspora() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Kominote</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>🌎 Pwogram Dyaspora Bond</h1>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>
          Envesti nan sante pèp ayisyen. Dyaspora Bond HNIH — yon fason konshanyan pou dyaspora ayisyen toupatou kontribye direkman nan devlopman nasyonal.
        </p>
      </div>

      {/* Hero CTA */}
      <Card style={{
        background: `linear-gradient(135deg, rgba(0,50,150,0.7), rgba(0,100,220,0.4))`,
        borderColor: C.borderBright,
        padding: 32,
        marginBottom: 36,
        textAlign: "center",
      }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>💰</div>
        <h2 style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 900, margin: "0 0 12px" }}>Dyaspora Bond HNIH</h2>
        <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 600, margin: "0 auto 24px" }}>
          Obligasyon souverèn garanti pa Gouvènman Ayiti. 5.5% enterè anyèl, matirite 10 ane. Minimòm G 657 050. Aksesib pou tout Ayisyen dyaspora.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { v: "5.5%", l: "Enterè/Ane" },
            { v: "10 Ane", l: "Matirite" },
            { v: "G 657 050", l: "Minimòm" },
            { v: "G 13 141M", l: "Objektif Total" },
          ].map((s) => (
            <div key={s.l} style={{
              background: "rgba(0,30,80,0.6)",
              border: `1px solid ${C.borderBright}`,
              borderRadius: 10,
              padding: "12px 20px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: C.light }}>{s.v}</div>
              <div style={{ fontSize: 10, color: C.soft, textTransform: "uppercase", letterSpacing: 1 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: 16, marginBottom: 36 }}>
        {DIASPORA_STATS.map((s) => (
          <Card key={s.label} className="card-hover" style={{ textAlign: "center", padding: 18 }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: C.light, marginBottom: 4 }}>{s.value}</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 12, marginBottom: 4 }}>{s.label}</div>
            <div style={{ color: C.soft, fontSize: 11 }}>{s.sub}</div>
          </Card>
        ))}
      </div>

      {/* Diaspora Global Presence */}
      <SectionTitle sub="Kominoté ayisyen ki gaye toupatou nan mond lan">Dyaspora Ayisyèn Mondyal</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12, marginBottom: 36 }}>
        {LOCATIONS.map((l) => (
          <Card key={l.country} className="card-hover" style={{ padding: "14px 16px" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 28 }}>{l.flag}</span>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{l.country}</div>
                <div style={{ color: C.light, fontWeight: 600, fontSize: 12 }}>{l.pop}</div>
              </div>
            </div>
            <div style={{ color: C.soft, fontSize: 11 }}>{l.cities}</div>
          </Card>
        ))}
      </div>

      {/* How to invest steps */}
      <SectionTitle sub="6 etap senp pou envesti nan Dyaspora Bond HNIH">Kijan Patisipe?</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, marginBottom: 36 }}>
        {STEPS.map((s) => (
          <Card key={s.num} className="card-hover" style={{ borderTop: `3px solid ${C.blue}` }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontWeight: 900, fontSize: 13, flexShrink: 0,
              }}>{s.num}</div>
              <div>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{s.title}</div>
                <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Success stories */}
      <SectionTitle sub="Egzanp diasporas lòt peyi ki reyisi avèk bond programe">Istwa Siksè Lòt Peyi</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 36 }}>
        {SUCCESS_STORIES.map((s) => (
          <Card key={s.country} className="card-hover">
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontSize: 32 }}>{s.icon}</span>
              <div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>{s.country}</div>
                <div style={{ color: C.success, fontWeight: 700, fontSize: 18 }}>{s.total}</div>
              </div>
            </div>
            <p style={{ color: C.soft, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
          </Card>
        ))}
      </div>

      {/* Tax benefits */}
      <SectionTitle sub="Avantaj fiskal ak finansye pou envestisè Dyaspora Bond">Avantaj Envestisè</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
        {[
          { icon: "💰", title: "5.5% Enterè Anyèl", desc: "Pi wo pase savings kont nan pifò peyi (US/Canada/France ki bay 2-4%). Garanti gouvènman." },
          { icon: "🏥", title: "Enpak Dirèk", desc: "Ou wè kote lajan ou ale — nan bati lopital ki ap sèvi fanmi ou ann Ayiti." },
          { icon: "🏛️", title: "Garanti Souverèn", desc: "Gouvènman Ayiti garanti retrè kapital ak enterè yo. Obliyasyon lejislasyon nasyonal." },
          { icon: "📜", title: "Dokiman Ofisyèl", desc: "Bond sètifye lejitim emèt pa Ministè Finans Ayiti. Enregistre ak BRH (Bank Santral)." },
          { icon: "🔄", title: "Transferabl", desc: "Bond yo ka transfere bay manm fanmi. Posib vann sou mache segondè apre 3 ane." },
          { icon: "🎁", title: "Rekonesans Nasyonal", desc: "Envestisè yo va rekonèt nan seremoni ouvèti lopital la e nan rapò piblik." },
        ].map((b) => (
          <Card key={b.title} className="card-hover">
            <div style={{ fontSize: 24, marginBottom: 10 }}>{b.icon}</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{b.title}</div>
            <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{b.desc}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
