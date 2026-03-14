import { Link } from 'react-router-dom';
import { C, VISION, PARTNERS, DEPARTMENTS } from '../data/constants';
import { Card, SectionTitle, StatPill } from '../components/UI';

const DEPT_HIGHLIGHTS = DEPARTMENTS.slice(0, 6);

export default function About() {
  return (
    <div style={{ color: '#fff', fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Page Hero */}
      <section style={{
        position: 'relative',
        padding: '80px 24px 60px',
        background: `linear-gradient(135deg, rgba(0,20,70,0.9) 0%, rgba(0,80,200,0.3) 100%)`,
        borderBottom: `1px solid ${C.border}`,
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 350, height: 350, borderRadius: '50%', background: 'rgba(0,100,255,0.06)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(0,100,255,0.15)',
            border: `1px solid ${C.borderBright}`,
            borderRadius: 20, padding: '5px 16px',
            marginBottom: 24, fontSize: 12,
            color: C.light, fontWeight: 700, letterSpacing: 1,
          }}>
            🏥 ABOUT THE PROJECT · AKÈ PWOJÈ A
          </div>

          <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, margin: '0 0 20px', letterSpacing: -1 }}>
            <span style={{ color: '#fff' }}>Hôpital National</span>
            <br />
            <span style={{ background: `linear-gradient(90deg, ${C.accent}, ${C.light})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Intégré d'Haïti (HNIH)
            </span>
          </h1>

          <p style={{ color: '#C8D8E8', fontSize: 17, lineHeight: 1.8, maxWidth: 720, margin: '0 0 40px' }}>
            A transformational national development project to build Haiti's first world-class,
            fully integrated medical center — a 1,200-bed hospital campus with 12 specialties,
            a medical school, research center, and telemedicine network covering the entire country.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {VISION.highlights.map((h) => (
              <div key={h.label} className="stat-pill" style={{
                background: 'rgba(0,50,120,0.42)',
                border: `1px solid ${C.border}`,
                borderRadius: 12, padding: '14px 22px', textAlign: 'center',
              }}>
                <div style={{ fontSize: 22, marginBottom: 4 }}>{h.icon}</div>
                <div style={{ fontSize: 20, fontWeight: 900, color: C.light }}>{h.num}</div>
                <div style={{ fontSize: 10, color: C.soft, marginTop: 3, textTransform: 'uppercase', letterSpacing: 1 }}>{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Our Purpose</div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: 0 }}>Mission, Vision & Values</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 20, marginBottom: 48 }}>
          <Card style={{ background: 'linear-gradient(135deg,rgba(0,50,130,0.52),rgba(0,30,80,0.38))', borderColor: 'rgba(0,160,255,0.32)', padding: 28 }}>
            <div style={{ fontSize: 36, marginBottom: 14 }}>🎯</div>
            <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 }}>Our Mission</div>
            <p style={{ color: '#D4E8FF', fontSize: 15, lineHeight: 1.8, margin: 0 }}>{VISION.mission}</p>
          </Card>
          <Card style={{ background: 'linear-gradient(135deg,rgba(0,80,180,0.42),rgba(0,50,120,0.28))', borderColor: 'rgba(0,190,255,0.28)', padding: 28 }}>
            <div style={{ fontSize: 36, marginBottom: 14 }}>🚀</div>
            <div style={{ color: C.light, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 }}>Our Vision for 2035</div>
            <p style={{ color: '#D4E8FF', fontSize: 15, lineHeight: 1.8, margin: 0 }}>{VISION.vision}</p>
          </Card>
        </div>

        <SectionTitle sub="The six core principles guiding every decision at HNIH">Our Core Values</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 16, marginBottom: 48 }}>
          {VISION.values.map((v) => (
            <Card key={v.title} className="card-hover" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 28, flexShrink: 0, background: 'rgba(0,80,200,0.2)', borderRadius: 10, padding: '8px', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{v.icon}</div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{v.title}</div>
                <div style={{ color: C.soft, fontSize: 13, lineHeight: 1.5 }}>{v.desc}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Why This Project */}
      <section style={{
        background: 'rgba(0,15,45,0.7)',
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: '60px 24px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Why Now</div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: 0 }}>
              Why Haiti Needs HNIH
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {VISION.strategic.map((s, i) => (
              <div key={i} className="card-hover" style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 12, padding: '18px 24px',
                display: 'flex', gap: 20, alignItems: 'flex-start',
              }}>
                <div style={{
                  flexShrink: 0, width: 36, height: 36,
                  background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 800, fontSize: 14,
                }}>{i + 1}</div>
                <p style={{ color: '#C8E4FF', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Medical Services</div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
            12 Specialized Departments
          </h2>
          <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 640, margin: '0 auto' }}>
            HNIH provides comprehensive medical coverage across all major specialties —
            all of which are either absent or critically underfunded in Haiti today.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))', gap: 20, marginBottom: 32 }}>
          {DEPT_HIGHLIGHTS.map((dept) => (
            <div key={dept.name} className="card-hover" style={{
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 16, padding: 24,
              borderTop: `3px solid ${dept.color}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <span style={{ fontSize: 32 }}>{dept.icon}</span>
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{dept.name}</div>
                  {dept.beds > 0 && <div style={{ color: C.soft, fontSize: 12 }}>{dept.beds} beds · {dept.specialists} specialists</div>}
                </div>
              </div>
              <p style={{ color: C.soft, fontSize: 13, lineHeight: 1.6, margin: '0 0 14px' }}>{dept.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {dept.capabilities.slice(0, 3).map((cap) => (
                  <span key={cap} style={{
                    background: `${dept.color}20`,
                    border: `1px solid ${dept.color}40`,
                    borderRadius: 20, padding: '3px 10px',
                    fontSize: 11, color: dept.color, fontWeight: 600,
                  }}>{cap}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/depatman" style={{ textDecoration: 'none' }}>
            <button className="phase-btn" style={{
              background: 'rgba(0,60,150,0.4)',
              border: `1px solid ${C.borderBright}`,
              color: '#fff', padding: '12px 28px',
              borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: 'pointer',
            }}>
              View All 12 Departments →
            </button>
          </Link>
        </div>
      </section>

      {/* Partners Preview */}
      <section style={{
        background: 'rgba(0,15,45,0.7)',
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: '60px 24px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Global Support</div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
              International Partners & Institutions
            </h2>
            <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 640, margin: '0 auto' }}>
              HNIH has secured commitments from leading global health organizations, development
              banks, universities, and NGOs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: 16 }}>
            {PARTNERS.slice(0, 8).map((p) => (
              <div key={p.name} className="card-hover" style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 14, padding: 20,
              }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 10 }}>
                  <span style={{ fontSize: 26 }}>{p.icon}</span>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>{p.name}</div>
                    <span style={{
                      display: 'inline-block',
                      background: `${C.blue}40`, border: `1px solid ${C.border}`,
                      borderRadius: 20, padding: '2px 8px',
                      fontSize: 10, color: C.accent, fontWeight: 700, marginTop: 4,
                    }}>{p.type}</span>
                  </div>
                </div>
                <p style={{ color: C.soft, fontSize: 12, lineHeight: 1.5, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 20 }}>
          <Link to="/health-crisis" style={{ textDecoration: 'none' }}>
            <div className="card-hover" style={{
              background: 'rgba(231,76,60,0.1)',
              border: '1px solid rgba(231,76,60,0.25)',
              borderRadius: 16, padding: 28, cursor: 'pointer', height: '100%',
            }}>
              <div style={{ fontSize: 36, marginBottom: 14 }}>🚨</div>
              <div style={{ color: '#FF6B6B', fontWeight: 800, fontSize: 18, marginBottom: 10 }}>
                Health Crisis in Haiti
              </div>
              <p style={{ color: C.soft, fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Understand the depth of Haiti's healthcare emergency with comprehensive
                statistics and analysis.
              </p>
            </div>
          </Link>
          <Link to="/solutions" style={{ textDecoration: 'none' }}>
            <div className="card-hover" style={{
              background: 'rgba(0,80,200,0.1)',
              border: `1px solid ${C.borderBright}`,
              borderRadius: 16, padding: 28, cursor: 'pointer', height: '100%',
            }}>
              <div style={{ fontSize: 36, marginBottom: 14 }}>💡</div>
              <div style={{ color: C.light, fontWeight: 800, fontSize: 18, marginBottom: 10 }}>
                Solutions & Innovations
              </div>
              <p style={{ color: C.soft, fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Explore how HNIH addresses each challenge with modern technology and
                innovative healthcare approaches.
              </p>
            </div>
          </Link>
          <Link to="/budget" style={{ textDecoration: 'none' }}>
            <div className="card-hover" style={{
              background: 'rgba(0,200,150,0.08)',
              border: '1px solid rgba(0,200,150,0.2)',
              borderRadius: 16, padding: 28, cursor: 'pointer', height: '100%',
            }}>
              <div style={{ fontSize: 36, marginBottom: 14 }}>💰</div>
              <div style={{ color: C.success, fontWeight: 800, fontSize: 18, marginBottom: 10 }}>
                Budget & Funding
              </div>
              <p style={{ color: C.soft, fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Review the $850M financing plan, investment structure, and long-term
                financial sustainability model.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
