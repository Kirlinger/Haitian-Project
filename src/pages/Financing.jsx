import { C, VISION, fmtHTG, FINANCING } from '../data/constants';
import { DonutChart } from '../components/Charts';
import { SectionTitle, StatPill, Card, DataTable } from '../components/UI';

export default function Financing() {
  const total = FINANCING.reduce((s, f) => s + f.htg, 0);

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Page header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Plan Estratejik</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>
          💼 Finansman & Bidjè
        </h1>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>
          Plan finansman solid G 111 699M ki reparti sou 6 sous estratejik. Chak sous finansman konplète lòt pou asire dirab ak entegrite finansye a long tèm.
        </p>
      </div>

      {/* Stats bar */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
        {[
          { v: "G 111 699M", l: "Bidjè Total" },
          { v: "6", l: "Sous Finansman" },
          { v: "30 Ane", l: "Prè BID/BM" },
          { v: "5.5%", l: "Enterè Dyaspora" },
          { v: "25 Ane", l: "Konsesyon PPP" },
          { v: "Ane 8", l: "Break-even" },
        ].map((s) => <StatPill key={s.l} value={s.v} label={s.l} />)}
      </div>

      {/* Main financing layout */}
      <div className="finance-grid" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, marginBottom: 32, alignItems: "start" }}>
        {/* Donut */}
        <div>
          <Card style={{ display: "inline-block", padding: 24 }}>
            <DonutChart items={FINANCING} total={total} size={270} />
          </Card>
        </div>

        {/* Legend + bars */}
        <div>
          <SectionTitle sub="Distribisyon 6 sous finansman prensipal yo">Sous Finansman</SectionTitle>
          {FINANCING.map((f) => (
            <div key={f.source} style={{ marginBottom: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 12, height: 12, borderRadius: 3, background: f.color, flexShrink: 0 }} />
                  <span style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>{f.source}</span>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ color: C.light, fontWeight: 700, fontSize: 14 }}>{fmtHTG(f.htg)}</span>
                  <span style={{ color: C.soft, fontSize: 12 }}>{((f.htg / total) * 100).toFixed(1)}%</span>
                </div>
              </div>
              <div style={{ height: 8, background: "rgba(0,40,100,0.4)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{
                  height: "100%",
                  width: `${(f.htg / total) * 100}%`,
                  background: f.color,
                  borderRadius: 4,
                  transition: "width 0.8s ease",
                }} />
              </div>
              <div style={{ color: C.soft, fontSize: 11, marginTop: 4 }}>{f.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed table */}
      <SectionTitle sub="Analiz konplè chak sous finansman">Tablo Detaye Finansman</SectionTitle>
      <Card style={{ padding: 0, overflow: "hidden", marginBottom: 32 }}>
        <DataTable
          cols="2fr 1fr 1fr 2fr"
          headers={["Sous Finansman", "Montant HTG", "% Bidjè", "Kondisyon & Detay"]}
          rows={FINANCING.map(f => [
            <span style={{ fontWeight: 600 }}>{f.source}</span>,
            <span style={{ color: C.light, fontWeight: 700 }}>{fmtHTG(f.htg)}</span>,
            <span style={{ color: C.accent }}>{((f.htg / total) * 100).toFixed(1)}%</span>,
            f.detail,
          ])}
          footer={[
            <span style={{ fontWeight: 800 }}>TOTAL</span>,
            <span style={{ color: C.light, fontWeight: 800 }}>{fmtHTG(total)}</span>,
            "100%",
            "Finansman konplè asire",
          ]}
        />
      </Card>

      {/* Risk mitigation */}
      <SectionTitle sub="Estrateji pou jere risk finansye">Jèsyon Risk Finansye</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 32 }}>
        {[
          { icon: "🔒", title: "Fon Rezèv 15%", desc: "Yon fon rezèv ekilib ak 15% bidjè total pou imprevi ak kriz" },
          { icon: "📊", title: "Odite Endepandan", desc: "Odite finansye trimèstyèl pa kabinè entènasyonal otonom" },
          { icon: "🌐", title: "Diversifikasyon", desc: "6 sous diversifye diminye depandans sou yon sèl donè" },
          { icon: "📈", title: "Garanti Gouvènman", desc: "Garanti souverèn Etate Ayisyen pou prè entènasyonal yo" },
          { icon: "💹", title: "Couverture Deviz", desc: "Estrateji pwoteksyon kont fliktiyasyon monè HTG ak lòt monè entènasyonal" },
          { icon: "🤝", title: "Patnè Entènasyonal", desc: "BID, Bank Mondyal ak patnè bilateral komite garanti prete" },
        ].map((r) => (
          <Card key={r.title} className="card-hover" style={{ display: "flex", gap: 14, padding: 18 }}>
            <span style={{ fontSize: 28, flexShrink: 0 }}>{r.icon}</span>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{r.title}</div>
              <div style={{ color: C.soft, fontSize: 13, lineHeight: 1.5 }}>{r.desc}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Financial timeline */}
      <SectionTitle sub="Kijan finansman ap deplwaye sou 5 ane konstriksyon">Kalann Finansye</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
        {[
          { yr: "2025–26", label: "Mobilizasyon", amt: "G 26 282M", pct: "24%", desc: "Gouvènman + BID pèmye tranch" },
          { yr: "2026–27", label: "Konstriksyon Faz 1", amt: "G 23 654M", pct: "21%", desc: "Ijans, ICU, Sal Op, Labo" },
          { yr: "2027–28", label: "Espesyalite", amt: "G 36 795M", pct: "33%", desc: "Matènite, Kardi, Nèwoloji" },
          { yr: "2028–29", label: "Teknoloji", amt: "G 30 224M", pct: "27%", desc: "IRM, AI, Sant Kansè, Robotik" },
          { yr: "2029–31", label: "Ekspansyon", amt: "G 21 026M", pct: "19%", desc: "Klinik satelit, Fòmasyon final" },
        ].map((t) => (
          <Card key={t.yr} className="card-hover" style={{ borderTop: `3px solid ${C.blue}` }}>
            <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, marginBottom: 8 }}>{t.yr}</div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 20, marginBottom: 4 }}>{t.amt}</div>
            <div style={{ color: C.light, fontWeight: 600, fontSize: 13, marginBottom: 8 }}>{t.label}</div>
            <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{t.desc}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
