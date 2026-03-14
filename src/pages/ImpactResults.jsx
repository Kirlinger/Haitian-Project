import { Link } from 'react-router-dom';
import { C, ROI_METRICS, PROJECTIONS, LONG_TERM_BENEFITS } from '../data/constants';
import { Card, SectionTitle, StatPill } from '../components/UI';
import { RevenueChart } from '../components/Charts';

function MetricCard({ metric }) {
  return (
    <div className="card-hover" style={{
      background: C.card,
      border: `1px solid ${C.border}`,
      borderRadius: 14, padding: 24,
    }}>
      <div style={{ fontSize: 32, marginBottom: 12 }}>{metric.icon}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
        <span style={{ fontSize: 28, fontWeight: 900, color: C.light }}>{metric.value}</span>
        <span style={{ fontSize: 14, color: C.soft }}>{metric.unit}</span>
      </div>
      {metric.trend && (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          background: metric.trendUp ? 'rgba(0,200,100,0.15)' : 'rgba(255,80,80,0.15)',
          borderRadius: 20, padding: '2px 8px',
          fontSize: 11, color: metric.trendUp ? C.success : '#FF6B6B', fontWeight: 700,
          marginBottom: 8,
        }}>
          {metric.trendUp ? '↑' : '↓'} {metric.trend}
        </div>
      )}
      <div style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{metric.label}</div>
      <div style={{ color: C.soft, fontSize: 12, lineHeight: 1.5 }}>{metric.desc}</div>
      {metric.sub && <div style={{ color: C.accent, fontSize: 11, marginTop: 6, fontWeight: 600 }}>{metric.sub}</div>}
    </div>
  );
}

export default function ImpactResults() {
  return (
    <div style={{ color: '#fff', fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Hero */}
      <section style={{
        position: 'relative',
        padding: '80px 24px 60px',
        background: `linear-gradient(135deg, rgba(0,30,80,0.9) 0%, rgba(0,150,80,0.15) 100%)`,
        borderBottom: `1px solid ${C.border}`,
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(0,200,100,0.1)',
            border: '1px solid rgba(0,200,100,0.3)',
            borderRadius: 20, padding: '5px 16px',
            marginBottom: 24, fontSize: 12,
            color: C.success, fontWeight: 700, letterSpacing: 1,
          }}>
            📈 IMPACT & RESULTS · ENPAK & REZILTA
          </div>

          <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, margin: '0 0 20px', letterSpacing: -1 }}>
            <span style={{ color: '#fff' }}>Measuring the</span>
            <br />
            <span style={{ background: `linear-gradient(90deg, ${C.success}, ${C.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Impact on Haiti
            </span>
          </h1>

          <p style={{ color: '#C8D8E8', fontSize: 17, lineHeight: 1.8, maxWidth: 720, margin: '0 0 40px' }}>
            HNIH is not only a healthcare solution — it is an economic engine, a scientific
            institution, and a catalyst for national development. Here is what the data shows
            about its projected impact on Haiti and its people.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { v: '25,000', l: 'Lives Saved/Year' },
              { v: '500k+', l: 'Patients/Year' },
              { v: '8,000+', l: 'Jobs Created' },
              { v: '$50M/yr', l: 'Medical Tourism' },
              { v: 'Year 8', l: 'Break-Even' },
            ].map((s) => (
              <div key={s.l} className="stat-pill" style={{
                background: 'rgba(0,200,100,0.1)',
                border: '1px solid rgba(0,200,100,0.25)',
                borderRadius: 10, padding: '10px 18px', textAlign: 'center',
              }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: C.success }}>{s.v}</div>
                <div style={{ fontSize: 10, color: C.soft, textTransform: 'uppercase', letterSpacing: 1 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>ROI & Performance</div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: 0 }}>Key Performance Indicators</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr))', gap: 20 }}>
          {ROI_METRICS.map((m) => <MetricCard key={m.label} metric={m} />)}
        </div>
      </section>

      {/* Revenue Chart */}
      <section style={{
        background: 'rgba(0,15,45,0.7)',
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: '60px 24px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionTitle sub="10-year financial projection: Revenue (blue bars) vs Operating Costs (red area)">
            10-Year Financial Trajectory
          </SectionTitle>
          <Card style={{ padding: 24, marginBottom: 32 }}>
            <RevenueChart data={PROJECTIONS} />
            <div style={{ display: 'flex', gap: 20, marginTop: 12, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <div style={{ width: 12, height: 12, background: C.accent, borderRadius: 2 }} />
                <span style={{ color: C.soft, fontSize: 12 }}>Annual Revenue ($M)</span>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <div style={{ width: 12, height: 12, background: 'rgba(255,70,70,0.6)', borderRadius: 2 }} />
                <span style={{ color: C.soft, fontSize: 12 }}>Operating Expenses ($M)</span>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <div style={{ width: 12, height: 2, background: C.success }} />
                <span style={{ color: C.soft, fontSize: 12 }}>Break-even Point (Year 8)</span>
              </div>
            </div>
          </Card>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: 12 }}>
            {PROJECTIONS.filter((_, i) => i % 2 === 0).map((p) => (
              <Card key={p.year} style={{ textAlign: 'center', padding: 16 }}>
                <div style={{ color: C.soft, fontSize: 11, marginBottom: 6 }}>{p.year}</div>
                <div style={{ color: C.light, fontWeight: 700, fontSize: 16 }}>${p.rev}M</div>
                <div style={{ color: C.soft, fontSize: 11, marginTop: 4 }}>Revenue</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Population Impact */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Human Impact</div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
            What HNIH Means for Haitian Families
          </h2>
          <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
            Behind every statistic is a real person. These are the concrete changes that
            HNIH will make in the lives of millions of Haitians.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))', gap: 24 }}>
          {[
            { icon: '👶', title: 'For Mothers & Newborns', color: '#E74C3C', points: ['Access to safe, monitored childbirth with NICU backup', 'Maternal mortality target: reduce from 529 to under 150/100k', 'Free care for 40% of obstetric patients', 'Neonatal intensive care available 24/7', '12 dedicated birthing suites'] },
            { icon: '❤️', title: 'For Heart & Stroke Patients', color: '#E67E22', points: ['24/7 cardiac emergency team with cath lab', 'Stroke unit with clot-dissolving therapy available within minutes', 'No more traveling to Dominican Republic for angioplasty', 'Cardiac surgery available for the first time in Haiti', 'Preventive cardiology and lifestyle programs'] },
            { icon: '🎗️', title: 'For Cancer Patients', color: '#8E44AD', points: ["Haiti's first national cancer center", 'Radiation therapy (LINAC) eliminates costly foreign travel', 'Chemotherapy protocols aligned with international standards', 'Oncology nursing team trained to international standards', 'Palliative care and psychosocial support programs'] },
            { icon: '🧠', title: 'For Neurological Conditions', color: '#9B59B6', points: ['3 Tesla MRI — the highest field-strength scanner in Haiti', 'Neurosurgery for brain tumors, aneurysms, and more', 'EEG and EMG diagnostics for epilepsy and neuropathy', 'Rehabilitation programs for stroke survivors', 'Memory clinic and cognitive health programs'] },
            { icon: '👦', title: 'For Children', color: '#27AE60', points: ['80-bed pediatric ward with specialist coverage', "Haiti's best equipped pediatric ICU", 'Free dental care for 2,000 vulnerable children/year', 'Child nutrition and growth monitoring programs', 'Vaccination and preventive health programs'] },
            { icon: '🧠', title: 'For Mental Health', color: '#F39C12', points: ['First dedicated inpatient psychiatric unit in Haiti', '100-bed mental health facility with evidence-based care', 'PTSD treatment for earthquake and disaster survivors', 'Addiction recovery programs', 'Community mental health outreach teams'] },
          ].map((group) => (
            <div key={group.title} className="card-hover" style={{
              background: C.card, border: `1px solid ${C.border}`,
              borderRadius: 16, padding: 24,
              borderLeft: `4px solid ${group.color}`,
            }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                <span style={{ fontSize: 28 }}>{group.icon}</span>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{group.title}</div>
              </div>
              <ul style={{ margin: 0, padding: '0 0 0 16px', listStyle: 'disc' }}>
                {group.points.map((pt, i) => (
                  <li key={i} style={{ color: C.soft, fontSize: 13, lineHeight: 1.6, marginBottom: 5 }}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Long-Term Benefits */}
      <section style={{
        background: 'rgba(0,15,45,0.7)',
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: '60px 24px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Long-Term Vision</div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: 0 }}>
              Haiti's Future With HNIH
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px,1fr))', gap: 20 }}>
            {LONG_TERM_BENEFITS.map((b) => (
              <div key={b.title} className="card-hover" style={{
                background: C.card, border: `1px solid ${C.border}`,
                borderRadius: 14, padding: 24, textAlign: 'center',
              }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{b.icon}</div>
                <div style={{ fontSize: 26, fontWeight: 900, color: C.light, marginBottom: 4 }}>{b.metric}</div>
                <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>{b.metricLabel}</div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{b.title}</div>
                <div style={{ color: C.soft, fontSize: 13, lineHeight: 1.5 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{
          background: `linear-gradient(135deg, rgba(0,30,100,0.8), rgba(0,80,200,0.4))`,
          border: `1px solid ${C.borderBright}`,
          borderRadius: 20, padding: '48px 40px', textAlign: 'center',
        }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>💰</div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,36px)', fontWeight: 900, margin: '0 0 16px' }}>
            Be Part of Haiti's Healthcare Revolution
          </h2>
          <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 600, margin: '0 auto 28px' }}>
            Diaspora Bonds available now — 5.5% annual interest, 10-year maturity.
            Invest in Haitian lives and Haiti's future.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/dyaspora" style={{ textDecoration: 'none' }}>
              <button className="phase-btn" style={{
                background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
                border: 'none', color: '#fff',
                padding: '14px 32px', borderRadius: 10,
                fontSize: 15, fontWeight: 700, cursor: 'pointer',
              }}>
                💰 Learn About Diaspora Bond
              </button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button className="phase-btn" style={{
                background: 'transparent',
                border: `1px solid ${C.borderBright}`,
                color: '#fff',
                padding: '14px 32px', borderRadius: 10,
                fontSize: 15, fontWeight: 700, cursor: 'pointer',
              }}>
                📞 Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
