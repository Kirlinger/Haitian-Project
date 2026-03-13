import { C } from '../data/constants';
import { SectionTitle, Card, Badge } from '../components/UI';

const FAQS = [
  {
    cat: "Dyaspora Bond",
    q: "Kijan mwen ka achte yon Dyaspora Bond HNIH?",
    a: "Kontakte biwo Bond HNIH nan imèl bonds@hnih.ht oswa rele +509 2940-0001. Nou ap voye tout dokiman KYC, pwosedi transfè fon ak sètifika bond ofisyèl bay ou.",
  },
  {
    cat: "Dyaspora Bond",
    q: "Ki minimòm envestisman pou Dyaspora Bond?",
    a: "Minimòm envestisman se $5,000 USD. Pa gen maksimòm. Ou ka achte plizyè bond nan enkrèman $1,000 anplis minimòm lan.",
  },
  {
    cat: "Dyaspora Bond",
    q: "Kijan enterè yo peye? Kilè mwen resevwa lajan mwen?",
    a: "5.5% enterè anyèl peye chak ane pa virement bank nan kont ou. Apre 10 ane, kapital total ou retounen. Ou resevwa sètifika ofisyèl garanti pa gouvènman Ayiti.",
  },
  {
    cat: "Konstriksyon",
    q: "Kilè konstriksyon HNIH ap fini?",
    a: "Pwogram konstriksyon 5 ane kòmanse 2026. Faz 1 (Ijans, ICU) ouvri 2027. Ouvèti konplè ak seremoni nasyonal prevwa pou 2031.",
  },
  {
    cat: "Konstriksyon",
    q: "Ki kote HNIH ap konstwui?",
    a: "Sit ofisyèl: Delmas 33, Port-au-Prince, Ayiti. Plas tè 12 ektè ofisyèlman chwazi ak evalyasyon jeyoteknik konplè. Estanda konstriksyon parasismik nivo 4.",
  },
  {
    cat: "Konstriksyon",
    q: "Eske konstriksyon an rezistans tranbleman tè?",
    a: "Wi. Tout bilding HNIH ap konstwui selon nòm parasismik entènasyonal nivo 4 — ki pi wo nivo nan rejyon Karayib la. Etid jeyoteknik spesyalis konplè.",
  },
  {
    cat: "Sèvis Medikal",
    q: "Kijan pasyan pòv ap ka jwenn swen nan HNIH?",
    a: "40% kabann ak sèvis rezève gratis pou pasyan endijan. Komite Swen Sosyal HNIH ap evalye ak konfime kalifikasyon. Swen matènèl, enfan ak ijans 100% gratis.",
  },
  {
    cat: "Sèvis Medikal",
    q: "Ki espesyalite medikal ki disponib nan HNIH?",
    a: "12 espesyalite: Kardyoloji, Nèwoloji, Matènite/Pedyatri, Odontoloji, Onkoloji, Otopedi, Oftalmoloji, Jenetik, Reabilitasyon, Sante Mantal, Ijans, Famasi.",
  },
  {
    cat: "Sèvis Medikal",
    q: "Eske HNIH gen yon sèvis ijans 24/7?",
    a: "Wi. Depatman Ijans ak Trawma ap opere 24/7/365. 80 kabann ijans, heliport medikal, SMUR mobil ak triage nivo 5. Premye depatman ouvri nan Faz 1.",
  },
  {
    cat: "Travay",
    q: "Kijan mwen ka aplike pou yon travay nan HNIH?",
    a: "Tout pozisyon pral poste sou sit ofisyèl hnih.ht ak sou rezo sosyo kominote HNIH. Kontakte RH nan carrieres@hnih.ht pou rensèyman.",
  },
  {
    cat: "Travay",
    q: "Ki kalite pwofesyonèl HNIH bezwen?",
    a: "Doktè espesyalis, enfimyè, teknisyen medikal (labo, radyoloji, famasi), administratè ospitalye, enjenyè biomed, IT spesyalis, ak pèsonèl sipò.",
  },
  {
    cat: "Volontè",
    q: "Kijan mwen ka volontè oswa patisipe kòm doktè?",
    a: "Kontakte nou nan volunteer@hnih.ht. Nou aksepte volontè medikal ki gen lisans, medikal brigad kout tèm ak ekspè teknik nan kout misyon.",
  },
  {
    cat: "Patenayi",
    q: "Kijan yon konpani ka vin patnè HNIH?",
    a: "Kontakte biwo Devlopman nan partnerships@hnih.ht. Nou rekonèt patnè ekipman, fòmasyon, logistik, teknoloji, ak patnè finans. Pwosedi PPP disponib sou demann.",
  },
  {
    cat: "Finansman",
    q: "Ki sous finansman prensipal HNIH?",
    a: "6 sous: Gouvènman Ayiti ($250M), BID/Banque Mondiale ($200M), PPP Prive ($150M), Dyaspora Bond ($100M), Donatè Entènasyonal ($100M), ONG ($50M). Total: $850M.",
  },
  {
    cat: "Transparans",
    q: "Kijan piblik ka swiv progrè ak depans pwojè a?",
    a: "Rapò trimèstyèl piblik sou sit hnih.ht. Odite endepandan anyèl. Konsèy Administratif reyini mansyèlman. Rapò konstriksyon ak finansman disponib gratis.",
  },
];

const DEPT_CONTACTS = [
  { dept: "Administrasyon Jeneral", email: "info@hnih.ht", phone: "+509 2940-0000", icon: "🏛️" },
  { dept: "Sèvis Medikal", email: "medical@hnih.ht", phone: "+509 2940-0001", icon: "⚕️" },
  { dept: "Finansman & Envestisman", email: "finance@hnih.ht", phone: "+509 2940-0002", icon: "💰" },
  { dept: "Pres & Kominikasyon", email: "presse@hnih.ht", phone: "+509 2940-0003", icon: "📰" },
  { dept: "RH & Rekritman", email: "carrieres@hnih.ht", phone: "+509 2940-0004", icon: "👔" },
  { dept: "Dyaspora Bond", email: "bonds@hnih.ht", phone: "+509 2940-0005", icon: "🌎" },
];

const cats = [...new Set(FAQS.map(f => f.cat))];

export default function Contact() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Enfòmasyon</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>📞 Kontakte Nou & FAQ</h1>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>
          Nou isit pou reponn tout keksyon ou. Kontakte ekip nou oswa konsulte seksyon FAQ pou jwenn repons rapid.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, marginBottom: 40 }}>
        {/* Contact form */}
        <div>
          <SectionTitle sub="Voye yon mesaj dirèk nan ekip HNIH">Fòm Kontak</SectionTitle>
          <Card style={{ padding: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "Non Konplè", type: "text", placeholder: "Jan Pyè..." },
                { label: "Adres Imèl", type: "email", placeholder: "imèl@ekzanp.com" },
                { label: "Telefòn (opsyonèl)", type: "tel", placeholder: "+509 / +1 / +33..." },
                { label: "Sijè", type: "text", placeholder: "Keksyon, Patenayi, Dyaspora Bond..." },
              ].map((f) => (
                <div key={f.label}>
                  <label style={{ color: C.soft, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    style={{
                      width: "100%",
                      background: "rgba(0,20,60,0.5)",
                      border: `1px solid ${C.border}`,
                      borderRadius: 8,
                      padding: "10px 14px",
                      color: "#fff",
                      fontSize: 13,
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              ))}
              <div>
                <label style={{ color: C.soft, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>Mesaj</label>
                <textarea
                  rows={5}
                  placeholder="Ekri mesaj ou isit..."
                  style={{
                    width: "100%",
                    background: "rgba(0,20,60,0.5)",
                    border: `1px solid ${C.border}`,
                    borderRadius: 8,
                    padding: "10px 14px",
                    color: "#fff",
                    fontSize: 13,
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <button style={{
                background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
                border: "none",
                color: "#fff",
                padding: "12px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                width: "100%",
              }}>
                Voye Mesaj ✉️
              </button>
            </div>
          </Card>
        </div>

        {/* Contact info */}
        <div>
          <SectionTitle sub="Adrès, telefòn ak imèl ofisyèl">Enfòmasyon Kontak</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
            {[
              { icon: "📍", label: "Adrès", value: "Delmas 33, Port-au-Prince, Ayiti HT 6141" },
              { icon: "📞", label: "Telefòn Jeneral", value: "+509 2940-0000" },
              { icon: "📧", label: "Imèl Jeneral", value: "info@hnih.ht" },
              { icon: "🌐", label: "Sit Wèb", value: "www.hnih.ht" },
              { icon: "🕐", label: "Biwo Ouvert", value: "Lendi – Vandredi 8h–17h" },
            ].map((c) => (
              <Card key={c.label} style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 16px" }}>
                <span style={{ fontSize: 20 }}>{c.icon}</span>
                <div>
                  <div style={{ color: C.soft, fontSize: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>{c.label}</div>
                  <div style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>{c.value}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* Location */}
          <Card style={{ padding: 20, textAlign: "center", background: "rgba(0,30,80,0.4)" }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🗺️</div>
            <div style={{ color: "#fff", fontWeight: 700, marginBottom: 6 }}>Sit Konstriksyon HNIH</div>
            <div style={{ color: C.soft, fontSize: 13 }}>Delmas 33, Port-au-Prince</div>
            <div style={{ color: C.soft, fontSize: 12, marginTop: 4 }}>GPS: 18.5602° N, 72.3288° W</div>
            <div style={{ color: C.accent, fontSize: 12, marginTop: 8 }}>📐 12 ektè · Estanda parasismik nivo 4</div>
          </Card>
        </div>
      </div>

      {/* Department contacts */}
      <SectionTitle sub="Kontak dirèk chak depatman HNIH">Kontak pa Depatman</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12, marginBottom: 40 }}>
        {DEPT_CONTACTS.map((d) => (
          <Card key={d.dept} className="card-hover" style={{ padding: "14px 16px" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontSize: 24 }}>{d.icon}</span>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{d.dept}</div>
                <div style={{ color: C.accent, fontSize: 11, marginTop: 2 }}>✉️ {d.email}</div>
                <div style={{ color: C.soft, fontSize: 11 }}>📞 {d.phone}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* FAQ */}
      <SectionTitle sub="Repons pou keksyon ki pi kouman yo">Kesyon Reponn Souvan (FAQ)</SectionTitle>
      {cats.map((cat) => (
        <div key={cat} style={{ marginBottom: 28 }}>
          <div style={{
            color: C.light,
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 12,
            paddingLeft: 12,
            borderLeft: `3px solid ${C.blue}`,
          }}>{cat}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {FAQS.filter(f => f.cat === cat).map((faq) => (
              <Card key={faq.q} className="card-hover" style={{ padding: "14px 18px" }}>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>
                  ❓ {faq.q}
                </div>
                <div style={{ color: C.soft, fontSize: 13, lineHeight: 1.6 }}>
                  {faq.a}
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
