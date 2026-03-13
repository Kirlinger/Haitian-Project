import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';
import { C, VISION } from '../data/constants';
import { Card, Badge } from '../components/UI';

const QUICK_LINKS = [
  { icon: "🌟", title: "Vizyon & Misyon", desc: "Misyon, vizyon ak valè fondamantal", path: "/vizyon", color: C.blue },
  { icon: "💼", title: "Finansman $850M", desc: "6 sous finansman ak plan detaye", path: "/finansman", color: "#003087" },
  { icon: "🗓️", title: "4 Faz Konstriksyon", desc: "Pwogram 5 ane konplè", path: "/faz", color: C.steel },
  { icon: "🏥", title: "12 Depatman", desc: "Espesyalite medikal modèn", path: "/depatman", color: "#8E44AD" },
  { icon: "📈", title: "ROI & Enpak", desc: "Retou sou envestisman & chif kle", path: "/roi", color: C.success },
  { icon: "📡", title: "Teknoloji", desc: "IRM, IA, Telemedsèn & plis", path: "/teknoloji", color: "#00A3E0" },
  { icon: "🎓", title: "Fòmasyon", desc: "Pwogram rezidans & bous etid", path: "/formasyon", color: "#E67E22" },
  { icon: "🌍", title: "Kominote", desc: "9 klinik satelit, sèvis gratis", path: "/kominote", color: "#27AE60" },
  { icon: "💰", title: "Dyaspora Bond", desc: "Envesti 5.5% sou 10 ane", path: "/dyaspora", color: "#F39C12" },
  { icon: "🤝", title: "Patenayi", desc: "OMS, BM, Harvard & plis", path: "/patenayi", color: "#C0392B" },
  { icon: "📰", title: "Aktyalite", desc: "Nouvèl & anonsman resan", path: "/aktyalite", color: "#1ABC9C" },
  { icon: "📞", title: "Kontakte Nou", desc: "Adrès, telefòn, fòm kontak", path: "/kontakte", color: "#9B59B6" },
];

const MILESTONES = [
  { year: "2025", label: "Kòmansman Pwojè", desc: "Plas tè chwazi, finansman kòmanse, ekip fondatè an plas", done: true },
  { year: "2026", label: "Travay Konstriksyon", desc: "Fondas, enfrastrikti, premye bilding Ijans & ICU", done: true },
  { year: "2027", label: "Ouvèti Faz 1", desc: "Ijans, ICU, 4 sal operasyon, laboratwa debaz ouvri", done: false },
  { year: "2028", label: "Espesyalite Klinik", desc: "Matènite, Kardyoloji, Nèwoloji, Pedyatri aktif", done: false },
  { year: "2029", label: "Teknoloji Avanse", desc: "IRM 3T, Sant Kansè, Robotik, Telemedsèn nasyonal", done: false },
  { year: "2031", label: "Gran Ouvèti Konplè", desc: "Seremoni nasyonal, 1200 kabann, akreditasyon JCI", done: false },
];

export default function Home() {
  return (
    <div style={{ color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Hero Section */}
      <section style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.28)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(135deg, rgba(0,8,30,0.85) 0%, rgba(0,40,120,0.5) 60%, rgba(0,80,200,0.2) 100%)`,
        }} />
        <div style={{
          position: "relative",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "80px 24px",
          width: "100%",
        }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(0,100,255,0.2)",
              border: `1px solid ${C.borderBright}`,
              borderRadius: 20,
              padding: "5px 16px",
              marginBottom: 24,
              fontSize: 12,
              color: C.light,
              fontWeight: 600,
              letterSpacing: 1,
            }}>
              🏗️ PWOJÈ NASYONAL • PORT-AU-PRINCE, AYITI
            </div>

            <h1 style={{
              fontSize: "clamp(32px, 5vw, 62px)",
              fontWeight: 900,
              lineHeight: 1.1,
              margin: "0 0 20px",
              letterSpacing: -1,
            }}>
              <span style={{ color: "#fff" }}>Hôpital National</span>
              <br />
              <span style={{ background: `linear-gradient(90deg, ${C.accent}, ${C.light})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Intégré d'Haïti
              </span>
            </h1>

            <p style={{ fontSize: 18, color: "#C8E0FF", lineHeight: 1.7, margin: "0 0 32px", maxWidth: 600 }}>
              Premye sant medikal nasyonal ak kalite entènasyonal ann Ayiti. Sant referans pou tout Karayib la pa 2031 — 1,200 kabann, 12 espesyalite, $850M envestisman.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <Link to="/vizyon" style={{ textDecoration: "none" }}>
                <button className="phase-btn" style={{
                  background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
                  border: "none", color: "#fff",
                  padding: "14px 28px", borderRadius: 10,
                  fontSize: 15, fontWeight: 700, cursor: "pointer",
                }}>
                  🌟 Dekouvri Pwojè A
                </button>
              </Link>
              <Link to="/dyaspora" style={{ textDecoration: "none" }}>
                <button className="phase-btn" style={{
                  background: "rgba(0,60,150,0.5)",
                  border: `1px solid ${C.borderBright}`,
                  color: "#fff",
                  padding: "14px 28px", borderRadius: 10,
                  fontSize: 15, fontWeight: 700, cursor: "pointer",
                }}>
                  💰 Envesti Kounye A
                </button>
              </Link>
            </div>

            {/* Key stats */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                { v: "$850M", l: "Bidjè Total" },
                { v: "1,200", l: "Kabann" },
                { v: "12", l: "Espesyalite" },
                { v: "3,500+", l: "Staff" },
                { v: "2031", l: "Ouvèti" },
              ].map((s) => (
                <div key={s.l} className="stat-pill" style={{
                  background: "rgba(0,30,80,0.6)",
                  border: `1px solid ${C.borderBright}`,
                  borderRadius: 10,
                  padding: "10px 18px",
                  textAlign: "center",
                  backdropFilter: "blur(10px)",
                }}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: C.light }}>{s.v}</div>
                  <div style={{ fontSize: 10, color: C.soft, textTransform: "uppercase", letterSpacing: 1 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Are */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
            Kisa Nou Ye
          </div>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -0.5 }}>
            Yon Vizyon pou Sante Tout Ayisyen
          </h2>
          <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: "0 auto" }}>
            {VISION.mission}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 48 }}>
          {VISION.values.map((v) => (
            <Card key={v.title} className="card-hover" style={{ textAlign: "center", padding: 28 }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{v.icon}</div>
              <div style={{ color: C.light, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{v.title}</div>
              <div style={{ color: C.soft, fontSize: 13, lineHeight: 1.6 }}>{v.desc}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Nav Cards */}
      <section style={{
        background: "rgba(0,15,45,0.6)",
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: "60px 24px",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Eksplore Pwojè A</div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, margin: 0 }}>Tout Seksyon Disponib</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
            {QUICK_LINKS.map((lnk) => (
              <Link key={lnk.path} to={lnk.path} style={{ textDecoration: "none" }}>
                <div className="card-hover" style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: "20px 16px",
                  cursor: "pointer",
                  borderTop: `3px solid ${lnk.color}`,
                }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{lnk.icon}</div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{lnk.title}</div>
                  <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{lnk.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Chemen Devlopman</div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, margin: 0 }}>Jalons Prensipal</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {MILESTONES.map((m, i) => (
            <div key={i} className="card-hover" style={{
              background: m.done ? "rgba(0,200,150,0.1)" : C.card,
              border: `1px solid ${m.done ? "rgba(0,200,150,0.3)" : C.border}`,
              borderRadius: 14,
              padding: 20,
              position: "relative",
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: m.done ? "rgba(0,200,150,0.2)" : "rgba(0,80,200,0.2)",
                borderRadius: 20,
                padding: "3px 12px",
                fontSize: 12,
                color: m.done ? C.success : C.accent,
                fontWeight: 700,
                marginBottom: 12,
              }}>
                {m.done ? "✅" : "🔜"} {m.year}
              </div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{m.label}</div>
              <div style={{ color: C.soft, fontSize: 13, lineHeight: 1.5 }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: `linear-gradient(135deg, rgba(0,30,100,0.8), rgba(0,80,200,0.4))`,
        border: `1px solid ${C.border}`,
        margin: "0 24px 60px",
        borderRadius: 20,
        padding: "48px 32px",
        textAlign: "center",
        maxWidth: 1232,
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>💰</div>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, margin: "0 0 16px" }}>
          Patisipe nan Istwa Ayiti
        </h2>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 600, margin: "0 auto 28px" }}>
          Dyaspora Bond disponib kounye a. 5.5% enterè anyèl, matirite 10 ane. Envesti nan sante pèp ayisyen ak nan fiti peyi a.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/dyaspora" style={{ textDecoration: "none" }}>
            <button className="phase-btn" style={{
              background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
              border: "none", color: "#fff",
              padding: "14px 32px", borderRadius: 10,
              fontSize: 16, fontWeight: 700, cursor: "pointer",
            }}>
              Aprann Plis sou Dyaspora Bond
            </button>
          </Link>
          <Link to="/kontakte" style={{ textDecoration: "none" }}>
            <button className="phase-btn" style={{
              background: "transparent",
              border: `1px solid ${C.borderBright}`,
              color: "#fff",
              padding: "14px 32px", borderRadius: 10,
              fontSize: 16, fontWeight: 700, cursor: "pointer",
            }}>
              Kontakte Nou
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
