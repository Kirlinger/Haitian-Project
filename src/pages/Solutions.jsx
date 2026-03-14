import { Link } from 'react-router-dom';
import { C, SOLUTIONS_LIST } from '../data/constants';
import { Card, SectionTitle } from '../components/UI';

const TECH_INNOVATIONS = [
  {
    icon: '🤖', title: 'Artificial Intelligence in Diagnostics', color: '#8E44AD',
    features: [
      { name: 'AI Radiology Reader', desc: 'Machine learning algorithms analyze X-rays, CT scans, and MRIs with 94%+ accuracy — reducing diagnostic time from days to minutes' },
      { name: 'Predictive Health Analytics', desc: 'Population health data modeled to predict disease outbreaks, resource needs, and at-risk patient identification' },
      { name: 'Clinical Decision Support', desc: 'AI-assisted treatment recommendations based on 50M+ global patient records, adapted for Haitian disease profiles' },
    ],
  },
  {
    icon: '📱', title: 'Digital Health & Telemedicine', color: '#0077D4',
    features: [
      { name: 'National Telemedicine Network', desc: '9 provincial satellite clinics connected to HNIH specialists via real-time video consultation — reaching 65% of previously underserved population' },
      { name: 'Mobile Health App', desc: 'Patient-facing app for appointments, test results, medication reminders, and teleconsultation — works on low-bandwidth connections' },
      { name: 'National EHR System', desc: 'Every Haitian patient has a single, portable digital health record accessible across all public health facilities nationwide' },
    ],
  },
  {
    icon: '🔬', title: 'Advanced Medical Equipment', color: '#C0392B',
    features: [
      { name: '3 Tesla MRI & 128-slice CT', desc: 'Imaging equipment comparable to leading European hospitals — Haiti currently has fewer than 3 functional MRI machines nationwide' },
      { name: 'Da Vinci Robotic Surgery', desc: 'Minimally invasive robotic surgery system enabling complex procedures with shorter recovery times and lower complication rates' },
      { name: 'Linear Accelerator (LINAC)', desc: "Haiti's first radiation therapy machine for cancer treatment — eliminating the need to travel abroad for cancer care" },
    ],
  },
  {
    icon: '🧬', title: 'Genetics & Precision Medicine', color: '#27AE60',
    features: [
      { name: "Haiti's First Genetics Lab", desc: 'Diagnostic genetic testing for rare diseases, hereditary conditions, and personalized treatment planning' },
      { name: 'Pharmacogenomics', desc: 'DNA-based medication selection to maximize treatment effectiveness and minimize adverse drug reactions' },
      { name: 'Newborn Genetic Screening', desc: 'Nationwide program to identify treatable genetic conditions in newborns before symptoms appear' },
    ],
  },
];

const EDUCATION_PROGRAMS = [
  { icon: '🩺', title: 'Medical Residency (12 Specialties)', duration: '3–6 years', spots: '60/year', desc: 'Full residency training in all HNIH specialties — the first complete residency program ever offered in Haiti.' },
  { icon: '👩‍⚕️', title: 'Nursing Excellence Program', duration: '2 years', spots: '200/year', desc: 'Advanced nursing training with specialty tracks in ICU, oncology, pediatrics, and emergency care.' },
  { icon: '🔬', title: 'Allied Health Sciences', duration: '1–2 years', spots: '150/year', desc: 'Training for lab technicians, radiographers, physiotherapists, and medical social workers.' },
  { icon: '📡', title: 'Health IT & Informatics', duration: '1 year', spots: '50/year', desc: 'Specialized training in health data management, telemedicine systems, and AI health tools.' },
  { icon: '🎓', title: 'Continuing Medical Education', duration: 'Ongoing', spots: 'Unlimited', desc: 'Regular workshops, webinars, and certifications to keep all Haiti health workers current with global advances.' },
  { icon: '💊', title: 'Pharmaceutical Sciences', duration: '1–2 years', spots: '40/year', desc: 'Train pharmacists and pharmaceutical researchers to support local drug production and supply chain management.' },
];

const SUSTAINABILITY_PILLARS = [
  { icon: '☀️', title: '2 MW Solar Power', desc: '100% renewable energy generation on-site — eliminating dependence on Haiti\'s unreliable power grid and reducing operating costs by 35%.', color: '#F39C12' },
  { icon: '💧', title: 'Water Independence', desc: 'On-site water purification and rainwater harvesting system providing 100% of hospital water needs without municipal dependence.', color: '#00A3E0' },
  { icon: '♻️', title: 'Medical Waste Management', desc: 'State-of-the-art medical waste treatment and disposal system, preventing environmental contamination and meeting international biosafety standards.', color: '#27AE60' },
  { icon: '💊', title: 'Local Pharmaceutical Production', desc: '100+ essential generic medications produced locally by Year 5, reducing import costs by 40% and ensuring continuous supply.', color: '#8E44AD' },
  { icon: '🌍', title: 'Medical Tourism Revenue', desc: 'Caribbean medical tourism program targeting $50M/year in revenue by Year 7, providing cross-subsidy for free care for the poorest.', color: '#E74C3C' },
  { icon: '📈', title: 'Financial Self-Sufficiency', desc: 'Revenue model designed to achieve break-even by Year 8 and generate profit by Year 10, ensuring perpetual operation without donor dependence.', color: C.success },
];

export default function Solutions() {
  return (
    <div style={{ color: '#fff', fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Hero */}
      <section style={{
        position: 'relative',
        padding: '80px 24px 60px',
        background: `linear-gradient(135deg, rgba(0,20,80,0.9) 0%, rgba(0,100,50,0.2) 100%)`,
        borderBottom: `1px solid ${C.border}`,
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'rgba(0,200,100,0.04)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(0,200,100,0.1)',
            border: '1px solid rgba(0,200,100,0.3)',
            borderRadius: 20, padding: '5px 16px',
            marginBottom: 24, fontSize: 12,
            color: C.success, fontWeight: 700, letterSpacing: 1,
          }}>
            💡 SOLUTIONS & INNOVATIONS
          </div>

          <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, margin: '0 0 20px', letterSpacing: -1 }}>
            <span style={{ color: '#fff' }}>Solving Haiti's</span>
            <br />
            <span style={{ background: `linear-gradient(90deg, ${C.success}, ${C.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Health Crisis
            </span>
          </h1>

          <p style={{ color: '#C8D8E8', fontSize: 17, lineHeight: 1.8, maxWidth: 720, margin: '0 0 40px' }}>
            HNIH doesn't just treat the symptoms of Haiti's healthcare crisis — it addresses
            the root causes with a comprehensive, multi-layered approach combining world-class
            infrastructure, advanced technology, education, and sustainable financing.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { v: '6', l: 'Core Solutions' },
              { v: '12', l: 'Specialties' },
              { v: '500/yr', l: 'Trained Staff' },
              { v: '9', l: 'Satellite Clinics' },
              { v: '2 MW', l: 'Solar Power' },
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

      {/* 6 Core Solutions */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Comprehensive Response</div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
            Six Pillars of the HNIH Solution
          </h2>
          <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
            Each pillar directly addresses one of Haiti's six critical healthcare failures,
            creating a comprehensive solution that is greater than the sum of its parts.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px,1fr))', gap: 24 }}>
          {SOLUTIONS_LIST.map((sol, i) => (
            <div key={sol.title} className="card-hover" style={{
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 16, padding: 28,
              borderTop: `3px solid ${sol.color}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: `${sol.color}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, flexShrink: 0,
                }}>{sol.icon}</div>
                <div>
                  <div style={{ color: C.soft, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>Pillar {i + 1}</div>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: 16 }}>{sol.title}</div>
                </div>
              </div>
              <p style={{ color: C.soft, fontSize: 13, lineHeight: 1.6, margin: '0 0 16px' }}>{sol.desc}</p>
              <ul style={{ margin: 0, padding: '0 0 0 16px', listStyle: 'disc' }}>
                {sol.details.map((d, j) => (
                  <li key={j} style={{ color: '#A9C8E8', fontSize: 12, lineHeight: 1.6, marginBottom: 4 }}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Innovations */}
      <section style={{
        background: 'rgba(0,15,45,0.7)',
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: '60px 24px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Medical Technology</div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
              World-Class Technology Bringing Haiti Up to Speed
            </h2>
            <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
              HNIH will deploy cutting-edge medical technology that today exists nowhere else in Haiti,
              leapfrogging decades of missing infrastructure in a single project.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {TECH_INNOVATIONS.map((tech) => (
              <div key={tech.title}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: `${tech.color}20`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24, flexShrink: 0,
                  }}>{tech.icon}</div>
                  <h3 style={{ color: '#fff', fontWeight: 800, fontSize: 20, margin: 0 }}>{tech.title}</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 16 }}>
                  {tech.features.map((f) => (
                    <Card key={f.name} className="card-hover" style={{ borderLeft: `3px solid ${tech.color}` }}>
                      <div style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{f.name}</div>
                      <div style={{ color: C.soft, fontSize: 13, lineHeight: 1.6 }}>{f.desc}</div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Education & Training</div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
            Building Haiti's Medical Workforce
          </h2>
          <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
            Stopping the brain drain requires more than better salaries — it requires building
            excellent training programs so Haitian doctors and nurses can reach their full
            potential without leaving the country.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))', gap: 20 }}>
          {EDUCATION_PROGRAMS.map((prog) => (
            <Card key={prog.title} className="card-hover" style={{ borderTop: `3px solid ${C.blue}` }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{prog.icon}</div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{prog.title}</div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(0,80,200,0.2)', border: `1px solid ${C.border}`, borderRadius: 20, padding: '2px 10px', fontSize: 11, color: C.accent, fontWeight: 600 }}>{prog.duration}</span>
                <span style={{ background: 'rgba(0,200,100,0.1)', border: '1px solid rgba(0,200,100,0.25)', borderRadius: 20, padding: '2px 10px', fontSize: 11, color: C.success, fontWeight: 600 }}>{prog.spots} spots</span>
              </div>
              <p style={{ color: C.soft, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{prog.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Sustainability */}
      <section style={{
        background: 'rgba(0,15,45,0.7)',
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: '60px 24px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ color: C.success, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Sustainability</div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
              Built to Last. Built to Scale.
            </h2>
            <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
              HNIH is designed for permanent, self-sustaining operation — not as a perpetual
              charity project but as a world-class institution that generates revenue to fund
              its own expansion and free care for the poorest.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: 20 }}>
            {SUSTAINABILITY_PILLARS.map((p) => (
              <div key={p.title} className="card-hover" style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 14, padding: 24,
                borderLeft: `4px solid ${p.color}`,
              }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{p.icon}</div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{p.title}</div>
                <p style={{ color: C.soft, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to other pages */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{
          background: `linear-gradient(135deg, rgba(0,30,100,0.8), rgba(0,80,200,0.4))`,
          border: `1px solid ${C.borderBright}`,
          borderRadius: 20, padding: '48px 40px', textAlign: 'center',
        }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📊</div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,36px)', fontWeight: 900, margin: '0 0 16px' }}>
            See the Numbers Behind the Vision
          </h2>
          <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 600, margin: '0 auto 28px' }}>
            Explore the detailed budget breakdown, implementation timeline, and projected
            impact on Haiti's population.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/budget" style={{ textDecoration: 'none' }}>
              <button className="phase-btn" style={{
                background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
                border: 'none', color: '#fff',
                padding: '14px 32px', borderRadius: 10,
                fontSize: 15, fontWeight: 700, cursor: 'pointer',
              }}>
                💰 Budget & Funding
              </button>
            </Link>
            <Link to="/impact" style={{ textDecoration: 'none' }}>
              <button className="phase-btn" style={{
                background: 'transparent',
                border: `1px solid ${C.borderBright}`,
                color: '#fff',
                padding: '14px 32px', borderRadius: 10,
                fontSize: 15, fontWeight: 700, cursor: 'pointer',
              }}>
                📈 Impact & Results
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
