import { C } from '../data/constants';
import { SectionTitle, Card, Badge } from '../components/UI';

const TIMELINE = [
  { yr: "1492–1804", icon: "🏴", title: "Epòk Kolonyal", desc: "Kolon fransè etabli Senn-Domèng. Esklav yo ak pèp endijèn yo manke tout swen medikal. Maladi, tòti ak kondisyon travay inimèn touye plizyè milyon moun." },
  { yr: "1804", icon: "🇭🇹", title: "Endepandans", desc: "Revolisyon Ayisyen kreye premye repiblik nwa lib nan mond lan. Nasyons nouvo a afwonte blokis entènasyonal ak defi ekonomik ki freine devlopman sistèm sante." },
  { yr: "1860–1915", icon: "🏥", title: "Premye Lopital", desc: "Konstwiksyon Lopital Jeneral (1860) ak kèk Sant Sante nan lavil yo. Sèvis very limit, manke ekipman ak pèsonèl fòme." },
  { yr: "1915–1934", icon: "🇺🇸", title: "Okipasyon Ameriken", desc: "Ameriken yo renouvle enfrastrikti sante debaz. Pwogram sante piblik yo entrodwi lèksijans ijyèn. Sistèm rès limite e fokalize sou enterè militè." },
  { yr: "1957–1986", icon: "⚫", title: "Epòk Duvalier", desc: "Sistèm sante neglije e kòrompi. Ekzòd masif doktè ak enfimyè aletranje. Mortalite enfan parmi pi wo nan emisfè a." },
  { yr: "1990–2009", icon: "🌱", title: "Efò Rekonstwiksyon", desc: "Pwogram entènasyonal ONG yo kòmanse rebati sante piblik. Sistèm santé fragil, san finansman stab, depend sou èd entènasyonal." },
  { yr: "2010", icon: "💔", title: "Tranbleman Tè", desc: "Tranbleman tè 7.0 degre detwi sistèm sante yo. 300,000+ mouri, plizyè milyon deplase. Lopital Jeneral e gran parti enfrastrikti sante detwi." },
  { yr: "2010–2011", icon: "🦠", title: "Epidemi Kolera", desc: "Premye epidemi kolera ann Ayiti an plis pase yon syèk. 800,000+ ka, 10,000+ mouri. Sistèm sante fragil pa kapab repons adekwatman." },
  { yr: "2021", icon: "😔", title: "Tranbleman Tè & Kriz", desc: "Yon lòt tranbleman tè 7.2 touche sid Ayiti. Asasinasyon Prezidan Moïse. Enfrastrikti sante pi frajil toujou." },
  { yr: "2025", icon: "🌟", title: "Pwojè HNIH", desc: "Lancement ofisyèl Hôpital National Intégré d'Haïti. Premye pwojè enfrastrikti sante nasyonal anbisye depi endepandans." },
];

const STATS = [
  { value: "1/10,000", label: "Doktè/Abitan", sub: "Nòm OMS: 1/1,000" },
  { value: "300+", label: "Mouri/100k Akouchman", sub: "Plis wo nan emisfè" },
  { value: "11M+", label: "Moun Ayiti", sub: "55% nan zòn riral" },
  { value: "40%", label: "San Aksè Sante", sub: "Manke sèvis debaz" },
  { value: "G 39 423M", label: "Fwit Medikal/Ane", sub: "Tretman deyò Ayiti" },
  { value: "62 Ane", label: "Esperans Lavi", sub: "Mwayèn rejyonal: 75" },
];

const CHALLENGES = [
  { icon: "🏚️", title: "Enfrastrikti Degrade", desc: "80% lopital yo manke ekipman esansyèl. Lopital Jeneral nan Port-au-Prince, fondaze an 1860, pa kapab sèvi 3 milyon rezidan Pòtoprens yo." },
  { icon: "✈️", title: "Ekzòd Sèvo Medikal", desc: "Chak ane 300+ doktè ayisyen kite peyi a pou Kanada, Etazini, Lafrans. Peyi a pèdi envestisman kolektif nan fòmasyon medikal." },
  { icon: "🌪️", title: "Katastwòf Natirèl", desc: "Siklonn, tranbleman tè ak inondasyon detwi enfrastrikti fragil regilyèman. 2010, 2016, 2021 — chak evenman rekòmanse tout efò." },
  { icon: "💰", title: "Financement Ensifezan", desc: "Sèlman 2.5% PIB konsawe a sante — plas rekòmande OMS se 5%. Depend sou 70%+ èd entènasyonal pou sèvis sante debaz." },
  { icon: "🌍", title: "Enstabilite Politik", desc: "Dezakò politik yo bloke finansman nasyonal pou pwojè long tèm. Chanjman gouvènman frekvan entèwonp pwogram sante." },
  { icon: "📚", title: "Kapasité Teknik Limite", desc: "Manke teknisyen medikal fòme, administratè lopital eksperyanse ak sistèm jèsyon sante modèn." },
];

export default function History() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Enfòmasyon</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>📜 Istwa & Kontèks Sante Ayiti</h1>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>
          Pou konprann enpòtans HNIH, nou dwe konprann istwa ak kontèks ki bay bezwen an. Yon pèp ki merite pi bon — yon nasyon ki prè pou chanje.
        </p>
      </div>

      {/* Current stats */}
      <SectionTitle sub="Eta aktyèl sante ann Ayiti — chif ki pale">Eta Aktyèl Sante Ayiti</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16, marginBottom: 36 }}>
        {STATS.map((s) => (
          <Card key={s.label} className="card-hover" style={{ textAlign: "center", padding: 20 }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: C.light, marginBottom: 6 }}>{s.value}</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{s.label}</div>
            <div style={{ color: C.soft, fontSize: 11 }}>{s.sub}</div>
          </Card>
        ))}
      </div>

      {/* Main challenges */}
      <SectionTitle sub="Pwoblèm prensipal ki anpeche sante piblik pwogrese">Defi Prensipal</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 36 }}>
        {CHALLENGES.map((c) => (
          <Card key={c.title} className="card-hover" style={{ display: "flex", gap: 14, borderLeft: `3px solid ${C.steel}` }}>
            <span style={{ fontSize: 28, flexShrink: 0 }}>{c.icon}</span>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{c.title}</div>
              <div style={{ color: C.soft, fontSize: 13, lineHeight: 1.5 }}>{c.desc}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Timeline */}
      <SectionTitle sub="Evenman kle nan istwa sante Ayiti depi 1492 rive jounen jodi a">Kronik Sante Ayiti</SectionTitle>
      <div style={{ position: "relative", marginBottom: 36 }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute",
          left: 28,
          top: 0,
          bottom: 0,
          width: 2,
          background: `linear-gradient(to bottom, ${C.blue}, ${C.accent})`,
          opacity: 0.4,
        }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {TIMELINE.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 20, paddingBottom: 24, paddingLeft: 4 }}>
              <div style={{
                flexShrink: 0,
                width: 48, height: 48,
                borderRadius: "50%",
                background: "rgba(0,30,80,0.8)",
                border: `2px solid ${C.borderBright}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20,
                position: "relative",
                zIndex: 1,
              }}>{t.icon}</div>
              <Card className="card-hover" style={{ flex: 1, padding: "14px 18px", margin: "4px 0" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
                  <Badge color={C.accent}>{t.yr}</Badge>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>{t.title}</span>
                </div>
                <p style={{ color: C.soft, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Why Now */}
      <SectionTitle sub="Kisa ki rann moman sa a istorik pou Ayiti">Poukisa Espesyalman Kounye A?</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 36 }}>
        {[
          { icon: "🌐", title: "Sipò Entènasyonal", desc: "BID, Bank Mondyal, USAID ak patnè bilateral yo prè pou angaje nan pwojè transformasyon fondamantal." },
          { icon: "🇭🇹", title: "Volonte Politik", desc: "Yon konsansis nasyonal ap bati otou nesesite yon sentèm sante nasyonal ki fonksyonèl e dirab." },
          { icon: "💰", title: "Dyaspora Mobilize", desc: "2M+ diaspora ayisyen ki voye G 526B+/ane aletranje prè pou envesti sistematikman nan devlopman peyi a." },
          { icon: "📱", title: "Teknoloji Aksesib", desc: "Telemedsèn, EHR, AI ak solisyon teknolojik rann sèvis kalite entènasyonal posib ak mwens resous." },
          { icon: "🎓", title: "Jenerasyon Nouvo", desc: "Yon jenerasyon doktè, injenyè ak administratè ayisyen fòme aletranje prè pou retounen bati Ayiti." },
          { icon: "📊", title: "Modèl PPP Pwouve", desc: "Eksperyans PPP nan lòt peyi (Ruanda, Senegal, Etiyopi) montre modèl sa ka travay nan kontèks Afrik/Karayib." },
        ].map((r) => (
          <Card key={r.title} className="card-hover">
            <div style={{ fontSize: 28, marginBottom: 10 }}>{r.icon}</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{r.title}</div>
            <div style={{ color: C.soft, fontSize: 13, lineHeight: 1.5 }}>{r.desc}</div>
          </Card>
        ))}
      </div>

      {/* Vision for change */}
      <SectionTitle sub="Kijan HNIH ap chanje trajektwa sante Ayiti">Vizyon pou Chanjman</SectionTitle>
      <Card style={{
        background: `linear-gradient(135deg, rgba(0,40,120,0.5), rgba(0,80,200,0.3))`,
        borderColor: C.borderBright,
        padding: 32,
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {[
            { bf: "Lopital frajil ki kraze apre chak katastwòf", af: "Enfrastrikti resiyan konstriksyon parasismik nivo 4" },
            { bf: "Doktè kite Ayiti pou fòmasyon spesyalize", af: "Fòmasyon konplè pou tout espesyalite ann Ayiti menm" },
            { bf: "G 39 423M/ane kouri aletranje pou tretman", af: "Swen espesyalize aksesib nan peyi a pou tout sitwayen" },
            { bf: "1 doktè pou 10,000 moun (kriz grav)", af: "Vizyon: 1 doktè pou 2,500 moun avan 2040" },
          ].map((item, i) => (
            <div key={i} style={{ padding: 16, background: "rgba(0,20,60,0.4)", borderRadius: 10, border: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                <span style={{ color: "#FF7070", fontSize: 12 }}>❌</span>
                <span style={{ color: "#FF9090", fontSize: 12, lineHeight: 1.4 }}>{item.bf}</span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <span style={{ color: C.success, fontSize: 12 }}>✅</span>
                <span style={{ color: "#90FFD4", fontSize: 12, lineHeight: 1.4 }}>{item.af}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
