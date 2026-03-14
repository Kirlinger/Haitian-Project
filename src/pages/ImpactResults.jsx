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
            📈 IMPACT & RÉSULTATS · ENPAK & REZILTA
          </div>

          <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, margin: '0 0 20px', letterSpacing: -1 }}>
            <span style={{ color: '#fff' }}>Mesurer l’Impact</span>
            <br />
            <span style={{ background: `linear-gradient(90deg, ${C.success}, ${C.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              sur Haïti
            </span>
          </h1>

          <p style={{ color: '#C8D8E8', fontSize: 17, lineHeight: 1.8, maxWidth: 720, margin: '0 0 40px' }}>
            Le HNIH n’est pas seulement une solution sanitaire — c’est un moteur économique, une institution
            scientifique et un catalyseur du développement national. Voici ce que les données montrent
            sur son impact projeté sur Haïti et son peuple.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { v: '25 000', l: 'Vies Sauvées/An' },
              { v: '500k+', l: 'Patients/An' },
              { v: '8 000+', l: 'Emplois Créés' },
              { v: '50M$/an', l: 'Tourisme Médical' },
              { v: 'Année 8', l: 'Équilibre Financier' },
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
          <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: 0 }}>Indicateurs Clés de Performance</h2>
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
          <SectionTitle sub="Projection financière sur 10 ans : Revenus (barres bleues) vs Charges opérationnelles (zone rouge)">
            Trajectoire Financière sur 10 Ans
          </SectionTitle>
          <Card style={{ padding: 24, marginBottom: 32 }}>
            <RevenueChart data={PROJECTIONS} />
            <div style={{ display: 'flex', gap: 20, marginTop: 12, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <div style={{ width: 12, height: 12, background: C.accent, borderRadius: 2 }} />
                <span style={{ color: C.soft, fontSize: 12 }}>Revenus Annuels ($M)</span>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <div style={{ width: 12, height: 12, background: 'rgba(255,70,70,0.6)', borderRadius: 2 }} />
                <span style={{ color: C.soft, fontSize: 12 }}>Charges Opérationnelles ($M)</span>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <div style={{ width: 12, height: 2, background: C.success }} />
                <span style={{ color: C.soft, fontSize: 12 }}>Point d’Équilibre (Année 8)</span>
              </div>
            </div>
          </Card>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: 12 }}>
            {PROJECTIONS.filter((_, i) => i % 2 === 0).map((p) => (
              <Card key={p.year} style={{ textAlign: 'center', padding: 16 }}>
                <div style={{ color: C.soft, fontSize: 11, marginBottom: 6 }}>{p.year}</div>
                <div style={{ color: C.light, fontWeight: 700, fontSize: 16 }}>${p.rev}M</div>
                <div style={{ color: C.soft, fontSize: 11, marginTop: 4 }}>Revenus</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Population Impact */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Impact Humain</div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
            Ce que le HNIH Représente pour les Familles Haïtiennes
          </h2>
          <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
            Derrière chaque statistique se trouve une personne réelle. Voici les changements concrets
            que le HNIH apportera dans la vie de millions d’Haïtiens.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))', gap: 24 }}>
          {[
            { icon: '👶', title: 'Pour les Mères & Nouveau-Nés', color: '#E74C3C', points: ['Accès à un accouchement sécurisé et suivi avec NICU de backup', 'Objectif mortalité maternelle : réduire de 529 à moins de 150/100k', 'Soins gratuits pour 40% des patientes obstétriques', 'Soins intensifs néonatals disponibles 24h/24', '12 salles d’accouchement dédiées'] },
            { icon: '❤️', title: 'Pour les Cardiaques & AVC', color: '#E67E22', points: ['Équipe d’urgence cardiaque 24/7 avec salle de cathétérisme', 'Unité AVC avec thrombolyse disponible en quelques minutes', 'Plus besoin de voyager en Rép. Dom. pour une angioplastie', 'Chirurgie cardiaque disponible pour la première fois en Haïti', 'Cardiologie préventive et programmes de mode de vie sain'] },
            { icon: '🎗️', title: 'Pour les Patients Atteints de Cancer', color: '#8E44AD', points: ['Premier Centre National du Cancer d’Haïti', 'La radiothérapie (LINAC) élimine les voyages coûteux à l’étranger', 'Protocoles de chimiothérapie alignés sur les standards internationaux', 'Équipe infirmière en oncologie formée aux standards internationaux', 'Soins palliatifs et programmes de soutien psychosocial'] },
            { icon: '🧠', title: 'Pour les Maladies Neurologiques', color: '#9B59B6', points: ['IRM 3 Tesla — scanner à plus haute puissance de champ en Haïti', 'Neurochirurgie pour tumeurs cérébrales, anévrismes et plus', 'Diagnostics EEG et EMG pour l’épilepsie et les neuropathies', 'Programmes de réhabilitation pour les survivants d’AVC', 'Clinique de mémoire et programmes de santé cognitive'] },
            { icon: '👦', title: 'Pour les Enfants', color: '#27AE60', points: ['Service de pédiatrie de 80 lits avec couverture spécialisée', 'Meilleure unité de soins intensifs pédiatriques d’Haïti', 'Soins dentaires gratuits pour 2 000 enfants vulnérables/an', 'Programmes de nutrition infantile et suivi de la croissance', 'Programmes de vaccination et de santé préventive'] },
            { icon: '🧠', title: 'Pour la Santé Mentale', color: '#F39C12', points: ['Première unité psychiatrique hospitalière dédiée en Haïti', 'Établissement de santé mentale de 100 lits avec soins basés sur les preuves', 'Traitement du PTSD pour les survivants de séismes et catastrophes', 'Programmes de désintoxication et de récupération', 'Équipes de santé mentale communautaire itinérantes'] },
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
            <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Vision à Long Terme</div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: 0 }}>
              L’Avenir d’Haïti avec le HNIH
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
            Faites Partie de la Révolution Sanitaire d’Haïti
          </h2>
          <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 600, margin: '0 auto 28px' }}>
            Obligations Diaspora disponibles maintenant — 5,5% d’intérêts annuels, maturité 10 ans.
            Investissez dans les vies haïtiennes et l’avenir d’Haïti.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/dyaspora" style={{ textDecoration: 'none' }}>
              <button className="phase-btn" style={{
                background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
                border: 'none', color: '#fff',
                padding: '14px 32px', borderRadius: 10,
                fontSize: 15, fontWeight: 700, cursor: 'pointer',
              }}>
                💰 Obligations Diaspora
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
                📞 Kontakte Nou
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
