import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';
import { C, VISION, CRISIS_STATS, TIMELINE_PHASES } from '../data/constants';
import { Card, Badge } from '../components/UI';

const QUICK_LINKS = [
  { icon: "🏥", title: "About the Project", desc: "Mission, vision, and overview of HNIH", path: "/about", color: C.blue },
  { icon: "🚨", title: "Health Crisis in Haiti", desc: "Statistics, context, and root causes", path: "/health-crisis", color: "#E74C3C" },
  { icon: "💡", title: "Solutions & Innovations", desc: "How HNIH addresses the crisis", path: "/solutions", color: "#27AE60" },
  { icon: "💼", title: "Budget & Funding $850M", desc: "6 financing sources, detailed plan", path: "/budget", color: "#003087" },
  { icon: "📈", title: "Impact & Results", desc: "ROI, projections & population impact", path: "/impact", color: C.success },
  { icon: "🗓️", title: "Implementation Plan", desc: "4-phase, 5-year construction program", path: "/plan", color: C.steel },
  { icon: "🏗️", title: "12 Departments", desc: "All medical specialties in detail", path: "/depatman", color: "#8E44AD" },
  { icon: "📡", title: "Technology", desc: "MRI, AI, Telemedicine & more", path: "/teknoloji", color: "#00A3E0" },
  { icon: "🎓", title: "Medical Training", desc: "Residency programs & scholarships", path: "/formasyon", color: "#E67E22" },
  { icon: "🌍", title: "Community Health", desc: "9 satellite clinics, free care", path: "/kominote", color: "#27AE60" },
  { icon: "💰", title: "Diaspora Bond", desc: "Invest at 5.5% over 10 years", path: "/dyaspora", color: "#F39C12" },
  { icon: "📞", title: "Contact / Support", desc: "Address, phone, contact form", path: "/contact", color: "#9B59B6" },
];

const MILESTONES = [
  { year: "2025", label: "Project Foundation", desc: "Site selected, financing secured, founding team in place", done: true },
  { year: "2026", label: "Construction Begins", desc: "Foundation, infrastructure, first Emergency & ICU building", done: true },
  { year: "2027", label: "Phase 1 Opening", desc: "Emergency, ICU, 4 operating theaters, basic laboratory open", done: false },
  { year: "2028", label: "Clinical Specialties", desc: "Maternity, Cardiology, Neurology, Pediatrics activated", done: false },
  { year: "2029", label: "Advanced Technology", desc: "3T MRI, Cancer Center, Robotics, National Telemedicine", done: false },
  { year: "2031", label: "Grand Opening", desc: "National ceremony, 1,200 beds, JCI international accreditation", done: false },
];

// Abbreviated crisis stats for the home page preview
const CRISIS_PREVIEW = CRISIS_STATS.slice(0, 4);

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
          <div style={{ maxWidth: 780 }}>
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
              🏗️ NATIONAL HEALTH PROJECT · PORT-AU-PRINCE, HAITI
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

            <p style={{ fontSize: 18, color: "#C8E0FF", lineHeight: 1.7, margin: "0 0 12px", maxWidth: 650 }}>
              Haiti's first world-class national medical center. The Caribbean's reference health hub
              by 2031 — 1,200 beds, 12 specialties, $850M investment.
            </p>
            <p style={{ fontSize: 15, color: C.soft, lineHeight: 1.7, margin: "0 0 32px", maxWidth: 640 }}>
              Built to serve all Haitians — ending the healthcare crisis, training the next generation
              of physicians, and putting Haiti on the global medical map.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <button className="phase-btn" style={{
                  background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
                  border: "none", color: "#fff",
                  padding: "14px 28px", borderRadius: 10,
                  fontSize: 15, fontWeight: 700, cursor: "pointer",
                }}>
                  🌟 Discover the Project
                </button>
              </Link>
              <Link to="/health-crisis" style={{ textDecoration: "none" }}>
                <button className="phase-btn" style={{
                  background: "rgba(231,76,60,0.2)",
                  border: "1px solid rgba(231,76,60,0.4)",
                  color: "#fff",
                  padding: "14px 28px", borderRadius: 10,
                  fontSize: 15, fontWeight: 700, cursor: "pointer",
                }}>
                  🚨 Haiti's Health Crisis
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
                  💰 Invest Now
                </button>
              </Link>
            </div>

            {/* Key stats */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                { v: "$850M", l: "Total Budget" },
                { v: "1,200", l: "Hospital Beds" },
                { v: "12", l: "Specialties" },
                { v: "3,500+", l: "Medical Staff" },
                { v: "2031", l: "Opening" },
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

      {/* Crisis Alert Section */}
      <section style={{
        background: "linear-gradient(135deg, rgba(100,10,10,0.4), rgba(0,8,30,0.9))",
        borderTop: "1px solid rgba(231,76,60,0.2)",
        borderBottom: "1px solid rgba(231,76,60,0.2)",
        padding: "48px 24px",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ color: "#FF6B6B", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
              🚨 Why This Project Exists
            </div>
            <h2 style={{ fontSize: "clamp(20px,3vw,36px)", fontWeight: 900, margin: "0 0 14px" }}>
              Haiti Faces a Healthcare Emergency
            </h2>
            <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 640, margin: "0 auto 32px" }}>
              With only 1.4 doctors per 10,000 people and a maternal mortality rate 10× the Caribbean
              average, Haiti's healthcare crisis demands an urgent, comprehensive response.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: 16, marginBottom: 28 }}>
            {CRISIS_PREVIEW.map((stat) => (
              <div key={stat.label} className="card-hover" style={{
                background: "rgba(231,76,60,0.08)",
                border: "1px solid rgba(231,76,60,0.2)",
                borderTop: "3px solid rgba(231,76,60,0.6)",
                borderRadius: 12, padding: 20,
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{stat.icon}</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#FF6B6B", marginBottom: 4 }}>{stat.value}</div>
                <div style={{ fontSize: 11, color: "#FF9999", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 8 }}>{stat.unit}</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{stat.label}</div>
                <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{stat.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to="/health-crisis" style={{ textDecoration: "none" }}>
              <button className="phase-btn" style={{
                background: "rgba(231,76,60,0.15)",
                border: "1px solid rgba(231,76,60,0.4)",
                color: "#fff", padding: "12px 28px",
                borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer",
              }}>
                📊 See Full Health Crisis Analysis →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Are */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
            Our Purpose
          </div>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -0.5 }}>
            A Vision for Haiti's Health Future
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
            <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Explore the Project</div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, margin: 0 }}>All Sections Available</h2>
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

      {/* Timeline Milestones */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Development Path</div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, margin: 0 }}>Key Milestones</h2>
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
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link to="/plan" style={{ textDecoration: "none" }}>
            <button className="phase-btn" style={{
              background: "rgba(0,60,150,0.4)",
              border: `1px solid ${C.borderBright}`,
              color: "#fff", padding: "12px 28px",
              borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer",
            }}>
              See Full Implementation Plan →
            </button>
          </Link>
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
          Be Part of Haiti's History
        </h2>
        <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 600, margin: "0 auto 28px" }}>
          Diaspora Bonds available now — 5.5% annual interest, 10-year maturity.
          Invest in Haitian health and in the future of the nation.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/dyaspora" style={{ textDecoration: "none" }}>
            <button className="phase-btn" style={{
              background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
              border: "none", color: "#fff",
              padding: "14px 32px", borderRadius: 10,
              fontSize: 16, fontWeight: 700, cursor: "pointer",
            }}>
              Learn About Diaspora Bond
            </button>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <button className="phase-btn" style={{
              background: "transparent",
              border: `1px solid ${C.borderBright}`,
              color: "#fff",
              padding: "14px 32px", borderRadius: 10,
              fontSize: 16, fontWeight: 700, cursor: "pointer",
            }}>
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
