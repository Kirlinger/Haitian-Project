import { C } from '../data/constants';
import { SectionTitle, Card, Badge } from '../components/UI';

const EQUIPMENT = [
  { icon: "🧲", name: "IRM 3 Tesla", brand: "Siemens MAGNETOM Vida", desc: "Imajri rezonans mayetik 3 Tesla — pi gwo rezolisyon pou nèwoloji, onkoloji ak kèdyoloji. Kapasite 20 scan/jou.", badge: "Faz 3" },
  { icon: "🔬", name: "CT Scanner 128 Coupes", brand: "GE Revolution CT", desc: "Tomodansitometri 128 coupes pou dyagnostik rapid ak presizyon maksimòm. Scan konplè kò an mwens pase 5 segonn.", badge: "Faz 1" },
  { icon: "☢️", name: "PET/CT Kombiné", brand: "Philips Vereos PET/CT", desc: "Imagri fonksyonèl-anatomik pou onkoloji avanse. Detekte timè nan pi bonè etap la.", badge: "Faz 3" },
  { icon: "⚡", name: "Linac Radyoterapi", brand: "Varian TrueBeam STx", desc: "Linearakseleratè pou radyoterapi presizyon. IMRT, SBRT, SRS — tretman kansè nivo entènasyonal.", badge: "Faz 3" },
  { icon: "🦾", name: "Da Vinci Robotik", brand: "Intuitive Da Vinci Xi", desc: "Sistèm chiriji robotik pou sichiji minimaly envazif avanse — uroloji, Gynèkoji, gastroenteloji.", badge: "Faz 3" },
  { icon: "💓", name: "Echografi 4D", brand: "GE Voluson E10", desc: "Echografi 4D pou Kardyoloji ak Matènite. Imajri an tan reyèl twa dimansyon pou dyagnostik konplèks.", badge: "Faz 2" },
  { icon: "🫀", name: "Angiogarafi & Kateterizasyon", brand: "Philips Azurion 7", desc: "Sal kateterizasyon kèdyak pou angioplasti, stentasyon ak intervansyon vaskile komplèks.", badge: "Faz 2" },
  { icon: "🦷", name: "CBCT Dantè", brand: "Planmeca ProMax 3D", desc: "Tomografi kònik dantè pou implant, endodontik ak chiriji oral avanse.", badge: "Faz 2" },
];

const INFO_SYSTEMS = [
  { icon: "💾", name: "EHR — Dosye Elektwonik", desc: "Sistèm dosye elektwonik nasyonal. Tout 1200 kabann + 9 klinik satelit konekte. Aksè pasyans imedya.", color: C.accent },
  { icon: "🖥️", name: "PACS — Imajri Medikal", desc: "Picture Archiving Communication System pou stòkaj, pataj ak analiz tout imaj medikal yo.", color: C.steel },
  { icon: "📊", name: "HIS — Hospital Info System", desc: "Sistèm enfòmasyon ospitalye konplè: admisyon, faktizasyon, ekipman, pèsonèl, rapò.", color: "#9B59B6" },
  { icon: "🏥", name: "LIS — Laboratwa", desc: "Laboratory Information System pou jèsyon rezilta tès labo, tracking echantiyon, QC.", color: "#27AE60" },
  { icon: "💊", name: "Sistèm Famasi", desc: "Jèsyon elektwonik medikaman, sistèm alèt entèraksyon, dispensasyon otomatize.", color: "#E67E22" },
  { icon: "🔒", name: "Cybersecurity Suite", desc: "Pwoteksyon done pasyan HIPAA/GDPR-compliant, chiffrement bout-an-bout, backup otomatik.", color: "#E74C3C" },
];

const AI_FEATURES = [
  { icon: "🤖", title: "AI Dyagnostik Imajri", desc: "Algoritm deep learning pou deteksyon otomatik kansè, AVC, fraktir nan imajri medikal" },
  { icon: "📈", title: "ML Analitik Prediktif", desc: "Modèl Machine Learning pou prediksyon reyospitalizasyon, detekyorasyon pasyan ak risk enfeksyon" },
  { icon: "💬", title: "NLP Medikal", desc: "Traitement langage natirèl pou ekstraksyon done klinik, kòd ICD-10 otomatik, rezime dosye" },
  { icon: "🔬", title: "AI Patholoji", desc: "Analiz otomatik lam patholoji pou dyagnostik kansè nivo pathologist ekspè" },
  { icon: "🫀", title: "AI Kardyoloji", desc: "Analiz ECG otomatik, deteksyon aritmia, risk stratifikasyon pou pasyan kèdyak" },
  { icon: "👶", title: "AI Matènite", desc: "Monitworaj fetal otomatik pou deteksyon distress fetalak risk pre-eklampsi" },
];

const ENERGY = [
  { icon: "☀️", title: "Solarè 2 MW", desc: "Instalasyon panèl solèy 2 megawat kouvri 70% konsòmasyon eletrik lopital la jounen" },
  { icon: "🔋", title: "Batri Stokaj 4 MWh", desc: "Sistèm stokaj batri 4 MWh pou alimanasyon kontinyèl nan nwit ak pandan koupkouran" },
  { icon: "💧", title: "Pwirifikasyon Dlo", desc: "Sistèm osmoz envès pou dlo medikal-grad. Kapasite 50,000 lit/jou pou tout operasyon" },
  { icon: "♻️", title: "Jèsyon Dechè", desc: "Sistèm incinerasyon medikal konfòme. Tretman dechè biomedikal selon nòm OMS yo" },
  { icon: "❄️", title: "HVAC Medikal", desc: "Sistèm klimatizasyon ak filtrasyon HEPA pou sal operasyon, ICU ak laboratwa" },
  { icon: "🌡️", title: "Bak Frèt Vaksen", desc: "Chèn frèt pou stokaj vaksen ak reagèn labo — temperature monito 24/7 ak alèt otomatik" },
];

export default function Technology() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Pwogram</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>💡 Teknoloji & Inovasyon</h1>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>
          Ekipman medikal nivo mondyal, sistèm enfòmatik entegre ak yon platfòm entelijans atifisyèl pou swen pasyan ki pi bon.
        </p>
      </div>

      {/* Medical Equipment */}
      <SectionTitle sub="Ekipman medikal avanse ki ap enstale pandan faz yo">Ekipman Medikal Avanse</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16, marginBottom: 36 }}>
        {EQUIPMENT.map((e) => (
          <Card key={e.name} className="card-hover" style={{ borderTop: `3px solid ${C.steel}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <span style={{ fontSize: 32 }}>{e.icon}</span>
              <Badge color={C.accent}>{e.badge}</Badge>
            </div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{e.name}</div>
            <div style={{ color: C.accent, fontSize: 11, fontWeight: 600, marginBottom: 8 }}>{e.brand}</div>
            <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{e.desc}</div>
          </Card>
        ))}
      </div>

      {/* Info Systems */}
      <SectionTitle sub="Sistèm enfòmatik medikal entegre pou tout operasyon">Sistèm Enfòmatik Medikal</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 36 }}>
        {INFO_SYSTEMS.map((s) => (
          <Card key={s.name} className="card-hover" style={{ borderLeft: `4px solid ${s.color}` }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 26, flexShrink: 0 }}>{s.icon}</span>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{s.name}</div>
                <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* AI Features */}
      <SectionTitle sub="Entelijans Atifisyèl ap transofme swen medikal ann Ayiti">Entelijans Atifisyèl (AI)</SectionTitle>
      <Card style={{
        background: "linear-gradient(135deg, rgba(0,40,120,0.5), rgba(100,0,200,0.2))",
        borderColor: "rgba(150,100,255,0.3)",
        marginBottom: 36,
        padding: 28,
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {AI_FEATURES.map((f) => (
            <div key={f.title} className="card-hover" style={{
              background: "rgba(0,20,60,0.5)",
              border: `1px solid ${C.border}`,
              borderRadius: 10,
              padding: 16,
            }}>
              <div style={{ fontSize: 26, marginBottom: 10 }}>{f.icon}</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{f.title}</div>
              <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Telemedicine */}
      <SectionTitle sub="Rezò telemedsèn nasyonal ki konekte 9 klinik satelit">Platfòm Telemedsèn</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 36 }}>
        {[
          { icon: "📡", title: "9 Klinik Satelit Konekte", desc: "Fibr optik + Wi-Fi 5G konekte tout depatman Ayiti ak sant prensipal la" },
          { icon: "📱", title: "Konsiltasyon Videyo", desc: "Pasyan nan zòn riral konsilte spesyalis Port-au-Prince an tan reyèl" },
          { icon: "🏠", title: "Sante Lakay", desc: "Platfòm mobile pou swivi pasyan kwonnik (dyabèt, tensyon) depi lakay yo" },
          { icon: "🚁", title: "Dron Medikal", desc: "Livrezon medikaman ak echantiyon laboratwa nan zòn izole yo pa dron" },
          { icon: "⌚", title: "Monitoring Pasyan", desc: "Aparèy wearable transmèt siy vital pasyan an tan reyèl bay ekip medikal" },
          { icon: "🧑‍💻", title: "Platfòm e-Santé", desc: "Portal pasyan pou pran randevou, wè rezilta, konsilte dosye medikal" },
        ].map((t) => (
          <Card key={t.title} className="card-hover">
            <div style={{ fontSize: 26, marginBottom: 10 }}>{t.icon}</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{t.title}</div>
            <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{t.desc}</div>
          </Card>
        ))}
      </div>

      {/* Sustainable Energy */}
      <SectionTitle sub="Sistèm enèji dirab ak jèsyon anviwonman">Enèji & Dirab</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {ENERGY.map((e) => (
          <Card key={e.title} className="card-hover" style={{ borderTop: `3px solid ${C.success}` }}>
            <div style={{ fontSize: 26, marginBottom: 10 }}>{e.icon}</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{e.title}</div>
            <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{e.desc}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
