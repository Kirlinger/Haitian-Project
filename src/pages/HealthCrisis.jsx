import { Link } from 'react-router-dom';
import { C, CRISIS_STATS, HEALTH_PROBLEMS, HEALTH_COMPARISONS } from '../data/constants';
import { Card, SectionTitle } from '../components/UI';

function CrisisStat({ stat }) {
  const borderColor = stat.severity === 'critical' ? '#E74C3C' : '#E67E22';
  return (
    <div className="card-hover" style={{
      background: `linear-gradient(135deg, rgba(${stat.severity === 'critical' ? '231,76,60' : '230,126,34'},0.1), rgba(0,15,40,0.8))`,
      border: `1px solid ${borderColor}40`,
      borderTop: `3px solid ${borderColor}`,
      borderRadius: 14,
      padding: 24,
    }}>
      <div style={{ fontSize: 32, marginBottom: 10 }}>{stat.icon}</div>
      <div style={{ fontSize: 28, fontWeight: 900, color: stat.severity === 'critical' ? '#FF6B6B' : '#FFA94D', marginBottom: 4 }}>
        {stat.value}
      </div>
      <div style={{ fontSize: 11, color: stat.severity === 'critical' ? '#FF9999' : '#FFD0A0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
        {stat.unit}
      </div>
      <div style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{stat.label}</div>
      <div style={{ color: C.soft, fontSize: 13, lineHeight: 1.6 }}>{stat.desc}</div>
    </div>
  );
}

function ComparisonBar({ label, value, max, color }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ color: '#fff', fontSize: 13, fontWeight: label === 'Haiti' ? 700 : 500 }}>{label}</span>
        <span style={{ color: C.light, fontSize: 13, fontWeight: 700 }}>{value}</span>
      </div>
      <div style={{ height: 10, background: 'rgba(0,40,100,0.4)', borderRadius: 5, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${pct}%`,
          background: label === 'Haiti' ? '#E74C3C' : label === 'HNIH Target' ? C.success : color,
          borderRadius: 5,
          transition: 'width 0.8s ease',
          opacity: label === 'Haiti' ? 1 : 0.75,
        }} />
      </div>
    </div>
  );
}

export default function HealthCrisis() {
  return (
    <div style={{ color: '#fff', fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '80px 24px 60px',
        background: 'linear-gradient(135deg, rgba(100,0,0,0.4) 0%, rgba(0,8,30,0.95) 60%)',
        borderBottom: '1px solid rgba(231,76,60,0.2)',
        overflow: 'hidden',
      }}>
        {/* Decorative background circles */}
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'rgba(231,76,60,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -50, left: -50, width: 250, height: 250, borderRadius: '50%', background: 'rgba(231,76,60,0.03)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(231,76,60,0.15)',
            border: '1px solid rgba(231,76,60,0.35)',
            borderRadius: 20, padding: '5px 16px',
            marginBottom: 24, fontSize: 12,
            color: '#FF8A80', fontWeight: 700, letterSpacing: 1,
          }}>
            🚨 HEALTH EMERGENCY · KRIZ SANTE
          </div>

          <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, margin: '0 0 20px', letterSpacing: -1 }}>
            <span style={{ color: '#fff' }}>The Health Crisis</span>
            <br />
            <span style={{ background: 'linear-gradient(90deg, #FF6B6B, #FFA94D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              in Haiti
            </span>
          </h1>

          <p style={{ color: '#C8D8E8', fontSize: 17, lineHeight: 1.8, maxWidth: 720, margin: '0 0 40px' }}>
            Haiti faces one of the most severe healthcare crises in the Western Hemisphere.
            Understanding the depth of this crisis is essential to understanding why the
            <strong style={{ color: C.light }}> Hôpital National Intégré d'Haïti (HNIH)</strong> is
            not just a project — it is a national emergency response.
          </p>

          {/* Key crisis numbers */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { v: '529', l: 'Maternal Deaths/100k', hot: true },
              { v: '1.4', l: 'Doctors/10,000 people', hot: true },
              { v: '$13', l: 'Health Spend/Person/yr', hot: true },
              { v: '36%', l: 'No Healthcare Access' },
              { v: '62%', l: 'Preventable Deaths' },
            ].map((s) => (
              <div key={s.l} className="stat-pill" style={{
                background: s.hot ? 'rgba(231,76,60,0.15)' : 'rgba(0,30,80,0.6)',
                border: `1px solid ${s.hot ? 'rgba(231,76,60,0.35)' : C.borderBright}`,
                borderRadius: 10, padding: '10px 18px', textAlign: 'center',
                backdropFilter: 'blur(10px)',
              }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: s.hot ? '#FF6B6B' : C.light }}>{s.v}</div>
                <div style={{ fontSize: 10, color: C.soft, textTransform: 'uppercase', letterSpacing: 1 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Statistics Grid */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ color: '#FF6B6B', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            By The Numbers
          </div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
            Haiti's Healthcare Crisis at a Glance
          </h2>
          <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
            These are not abstract statistics. Each number represents real people — mothers who die
            in childbirth, children who don't survive preventable illnesses, families forced into
            poverty paying for emergency care abroad.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px,1fr))', gap: 20 }}>
          {CRISIS_STATS.map((stat) => (
            <CrisisStat key={stat.label} stat={stat} />
          ))}
        </div>
      </section>

      {/* Comparative Analysis */}
      <section style={{
        background: 'rgba(0,15,45,0.7)',
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: '60px 24px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
              Regional Comparison
            </div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
              Haiti vs. Caribbean Neighbors
            </h2>
            <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
              Compared to neighboring countries with similar populations and histories,
              Haiti's health indicators are drastically worse — despite sharing the same
              island as the Dominican Republic.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 24 }}>
            {/* Physicians per 10,000 */}
            <Card style={{ padding: 24 }}>
              <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>Physicians</div>
              <div style={{ color: C.soft, fontSize: 12, marginBottom: 16 }}>per 10,000 population</div>
              {HEALTH_COMPARISONS.map(c => (
                <ComparisonBar key={c.country} label={c.country} value={c.physicians} max={90} color={C.blue} />
              ))}
            </Card>

            {/* Maternal Mortality */}
            <Card style={{ padding: 24 }}>
              <div style={{ color: '#FF6B6B', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>Maternal Mortality</div>
              <div style={{ color: C.soft, fontSize: 12, marginBottom: 16 }}>deaths per 100,000 live births</div>
              {HEALTH_COMPARISONS.map(c => (
                <ComparisonBar key={c.country} label={c.country} value={c.maternal} max={550} color="#E74C3C" />
              ))}
            </Card>

            {/* Health Spending */}
            <Card style={{ padding: 24 }}>
              <div style={{ color: C.success, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>Health Spending</div>
              <div style={{ color: C.soft, fontSize: 12, marginBottom: 16 }}>USD per capita per year</div>
              {HEALTH_COMPARISONS.map(c => (
                <ComparisonBar key={c.country} label={c.country} value={c.spending} max={900} color={C.steel} />
              ))}
            </Card>
          </div>

          {/* Callout */}
          <div style={{
            marginTop: 32,
            padding: 24,
            background: 'rgba(231,76,60,0.08)',
            border: '1px solid rgba(231,76,60,0.25)',
            borderRadius: 14,
            display: 'flex', gap: 16, alignItems: 'flex-start',
          }}>
            <div style={{ fontSize: 32, flexShrink: 0 }}>⚡</div>
            <div>
              <div style={{ color: '#FF8A80', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>
                Haiti and the Dominican Republic share the same island — Hispaniola.
              </div>
              <p style={{ color: C.soft, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Yet the Dominican Republic has <strong style={{ color: '#fff' }}>11× more physicians</strong> per person,
                spends <strong style={{ color: '#fff' }}>32× more</strong> on healthcare per capita, and has
                <strong style={{ color: '#fff' }}> 5× lower maternal mortality</strong> than Haiti.
                This disparity is not inevitable — it is the result of decades of underinvestment,
                political instability, and the lack of a coordinated national health infrastructure.
                HNIH is designed to close this gap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Six Problems Section */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ color: '#FF6B6B', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            Root Causes
          </div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
            6 Critical Problems in Haiti's Health System
          </h2>
          <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
            Haiti's health crisis is not caused by a single factor. It is the compounding
            result of six interconnected systemic failures that must all be addressed together.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px,1fr))', gap: 24 }}>
          {HEALTH_PROBLEMS.map((problem) => (
            <div key={problem.title} className="card-hover" style={{
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 16,
              padding: 28,
              borderLeft: `4px solid ${problem.color}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
                <div style={{
                  fontSize: 28, flexShrink: 0, width: 52, height: 52,
                  background: `${problem.color}20`,
                  borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{problem.icon}</div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: 16, marginBottom: 4 }}>{problem.title}</div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ color: problem.color, fontSize: 20, fontWeight: 900 }}>{problem.stat}</span>
                    <span style={{ color: C.soft, fontSize: 11 }}>{problem.statLabel}</span>
                  </div>
                </div>
              </div>
              <ul style={{ margin: 0, padding: '0 0 0 18px', listStyle: 'disc' }}>
                {problem.points.map((p, i) => (
                  <li key={i} style={{ color: C.soft, fontSize: 13, lineHeight: 1.6, marginBottom: 6 }}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline of Crisis */}
      <section style={{
        background: 'rgba(0,15,45,0.7)',
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: '60px 24px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
              Historical Context
            </div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: 0 }}>
              How Haiti's Health Crisis Developed
            </h2>
          </div>

          <div style={{ position: 'relative', paddingLeft: 48 }}>
            <div className="timeline-line" />
            {[
              { year: '1970s–90s', icon: '📉', title: 'Structural Adjustment Era', desc: 'IMF-mandated austerity programs forced drastic cuts to public health spending. Hospital infrastructure deteriorated rapidly as the state withdrew from health service delivery.' },
              { year: '2004', icon: '🔄', title: 'Political Collapse & MINUSTAH', desc: 'Political instability and the introduction of cholera by UN peacekeepers created a public health emergency. The health system, already fragile, was overwhelmed.' },
              { year: '2010', icon: '🌍', title: 'Catastrophic Earthquake', desc: 'The January 12 earthquake killed 220,000+ people, injured 300,000+, and destroyed 60% of healthcare infrastructure in the most populated region.' },
              { year: '2016', icon: '🌀', title: 'Hurricane Matthew', desc: 'Category 4 hurricane devastated southern Haiti, destroying newly rebuilt clinics and killing 546 people. Recovery was still ongoing when the next crisis hit.' },
              { year: '2021', icon: '💔', title: 'Assassination & New Earthquake', desc: 'Presidential assassination, gang control of Port-au-Prince, and a 7.2 magnitude earthquake struck in the same year. Most functioning hospitals were operating at 20% capacity.' },
              { year: '2022–2024', icon: '🚨', title: 'Gang Control & Cholera Resurgence', desc: 'Armed gangs control 80% of Port-au-Prince, blocking ambulances and supply chains. Cholera returned in 2022. MSF reported hospitals being directly attacked.' },
              { year: '2025+', icon: '🌟', title: 'The Time for HNIH', desc: 'Against this backdrop, the Hôpital National Intégré d\'Haïti represents Haiti\'s most comprehensive and coordinated response to the health crisis in the nation\'s history.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 28, alignItems: 'flex-start' }}>
                <div className="timeline-dot" style={{ background: i === 6 ? `linear-gradient(135deg, ${C.blue}, ${C.accent})` : undefined, border: i === 6 ? 'none' : undefined }}>{item.icon}</div>
                <div style={{
                  background: i === 6 ? 'rgba(0,80,200,0.15)' : C.card,
                  border: `1px solid ${i === 6 ? C.borderBright : C.border}`,
                  borderRadius: 12, padding: '16px 20px', flex: 1,
                }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ color: C.accent, fontWeight: 700, fontSize: 12 }}>{item.year}</span>
                    <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                  </div>
                  <p style={{ color: C.soft, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{
          background: `linear-gradient(135deg, rgba(0,30,100,0.8), rgba(0,80,200,0.4))`,
          border: `1px solid ${C.borderBright}`,
          borderRadius: 20, padding: '48px 40px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🏥</div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,36px)', fontWeight: 900, margin: '0 0 16px' }}>
            The Crisis Is Real. So Is the Solution.
          </h2>
          <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 650, margin: '0 auto 28px' }}>
            HNIH is not just a hospital — it is Haiti's answer to decades of health system collapse.
            A comprehensive, sustainable, and world-class health infrastructure built for and by the
            Haitian people.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/solutions" style={{ textDecoration: 'none' }}>
              <button className="phase-btn" style={{
                background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
                border: 'none', color: '#fff',
                padding: '14px 32px', borderRadius: 10,
                fontSize: 15, fontWeight: 700, cursor: 'pointer',
              }}>
                🌟 See Our Solutions
              </button>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <button className="phase-btn" style={{
                background: 'transparent',
                border: `1px solid ${C.borderBright}`,
                color: '#fff',
                padding: '14px 32px', borderRadius: 10,
                fontSize: 15, fontWeight: 700, cursor: 'pointer',
              }}>
                📋 About the Project
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
