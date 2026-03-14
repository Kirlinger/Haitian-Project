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
        <span style={{ color: '#fff', fontSize: 13, fontWeight: label === 'Haïti' ? 700 : 500 }}>{label}</span>
        <span style={{ color: C.light, fontSize: 13, fontWeight: 700 }}>{value}</span>
      </div>
      <div style={{ height: 10, background: 'rgba(0,40,100,0.4)', borderRadius: 5, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${pct}%`,
          background: label === 'Haïti' ? '#E74C3C' : label === 'Objectif HNIH' ? C.success : color,
          borderRadius: 5,
          transition: 'width 0.8s ease',
          opacity: label === 'Haïti' ? 1 : 0.75,
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
            🚨 URGENCE SANITAIRE · KRIZ SANTE
          </div>

          <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, margin: '0 0 20px', letterSpacing: -1 }}>
            <span style={{ color: '#fff' }}>La Crise Sanitaire</span>
            <br />
            <span style={{ background: 'linear-gradient(90deg, #FF6B6B, #FFA94D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              en Haïti
            </span>
          </h1>

          <p style={{ color: '#C8D8E8', fontSize: 17, lineHeight: 1.8, maxWidth: 720, margin: '0 0 40px' }}>
            Haïti est confrontée à l’une des crises sanitaires les plus graves de l’hémisphère occidental.
            Comprendre la profondeur de cette crise est essentiel pour comprendre pourquoi
            <strong style={{ color: C.light }}> l’Hôpital National Intégré d’Haïti (HNIH)</strong> n’est
            pas seulement un projet — c’est une réponse d’urgence nationale.
          </p>

          {/* Key crisis numbers */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { v: '529', l: 'Décès Maternels/100k', hot: true },
              { v: '1,4', l: 'Médecins/10 000 hab.', hot: true },
              { v: '13$', l: 'Dépenses Santé/Pers./an', hot: true },
              { v: '36%', l: 'Sans Accès aux Soins' },
              { v: '62%', l: 'Décès Évitables' },
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
            En Chiffres
          </div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
            La Crise Sanitaire Haïtienne en Un Coup d'Œil
          </h2>
          <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
            Ce ne sont pas des statistiques abstraites. Chaque chiffre représente des personnes réelles —
            des mères qui meurent en accouchant, des enfants qui ne survivent pas à des maladies évitables,
            des familles poussées dans la pauvreté pour payer des soins d’urgence à l’étranger.
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
              Comparaison Régionale
            </div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
              Haïti face à ses Voisins Caribéens
            </h2>
            <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
              Comparé aux pays voisins ayant des populations et des histoires similaires,
              les indicateurs de santé d’Haïti sont dramatiquement inférieurs — malgré le fait
              de partager la même île que la République Dominicaine.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 24 }}>
            {/* Physicians per 10,000 */}
            <Card style={{ padding: 24 }}>
              <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>Médecins</div>
              <div style={{ color: C.soft, fontSize: 12, marginBottom: 16 }}>pour 10 000 habitants</div>
              {HEALTH_COMPARISONS.map(c => (
                <ComparisonBar key={c.country} label={c.country} value={c.physicians} max={90} color={C.blue} />
              ))}
            </Card>

            {/* Maternal Mortality */}
            <Card style={{ padding: 24 }}>
              <div style={{ color: '#FF6B6B', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>Mortalité Maternelle</div>
              <div style={{ color: C.soft, fontSize: 12, marginBottom: 16 }}>décès pour 100 000 naissances vivantes</div>
              {HEALTH_COMPARISONS.map(c => (
                <ComparisonBar key={c.country} label={c.country} value={c.maternal} max={550} color="#E74C3C" />
              ))}
            </Card>

            {/* Health Spending */}
            <Card style={{ padding: 24 }}>
              <div style={{ color: C.success, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>Dépenses de Santé</div>
              <div style={{ color: C.soft, fontSize: 12, marginBottom: 16 }}>HTG par habitant par an</div>
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
                Haïti et la République Dominicaine partagent la même île — Hispaniola.
              </div>
              <p style={{ color: C.soft, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Pourtant la République Dominicaine a <strong style={{ color: '#fff' }}>11× plus de médecins</strong> par habitant,
                dépense <strong style={{ color: '#fff' }}>32× plus</strong> en santé par habitant, et a une
                <strong style={{ color: '#fff' }}> mortalité maternelle 5× plus basse</strong> qu’Haïti.
                Cette disparité n’est pas inévitable — elle est le résultat de décennies de sous-investissement,
                d’instabilité politique et de l’absence d’une infrastructure nationale de santé coordonnée.
                Le HNIH est conçu pour combler cet écart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Six Problems Section */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ color: '#FF6B6B', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            Causes Profondes
          </div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
            6 Problèmes Critiques dans le Système de Santé Haïtien
          </h2>
          <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
            La crise sanitaire d’Haïti n’est pas causée par un seul facteur. Elle est le résultat
            cumulatif de six défaillances systémiques interconnectées qui doivent toutes être
            traitées ensemble.
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
              Contexte Historique
            </div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: 0 }}>
              Comment la Crise Sanitaire d’Haïti s’est Développée
            </h2>
          </div>

          <div style={{ position: 'relative', paddingLeft: 48 }}>
            <div className="timeline-line" />
            {[
              { year: '1970–90', icon: '📉', title: 'Programmes d’Ajustement Structurel', desc: 'Les programmes d’austérité imposés par le FMI ont forcé des coupes drastiques dans les dépenses de santé publique. Les infrastructures hospitalières se sont dégradées rapidement.' },
              { year: '2004', icon: '🔄', title: 'Effondrement Politique & MINUSTAH', desc: 'L’instabilité politique et l’introduction du choléra par les casques bleus de l’ONU ont créé une urgence sanitaire. Le système de santé, déjà fragile, a été submergé.' },
              { year: '2010', icon: '🌍', title: 'Séisme Catastrophique', desc: 'Le tremblement de terre du 12 janvier a tué 220 000+ personnes, blessé 300 000+ et détruit 60% des infrastructures de santé dans la région la plus peuplée.' },
              { year: '2016', icon: '🌀', title: 'Ouragan Matthew', desc: 'Un ouragan de catégorie 4 a dévasté le sud d’Haïti, détruisant des cliniques nouvellement reconstruites et tuant 546 personnes. La reconstruction était toujours en cours.' },
              { year: '2021', icon: '💔', title: 'Assassinat & Nouveau Séisme', desc: 'L’assassinat du président, le contrôle de Port-au-Prince par les gangs et un séisme de magnitude 7,2 se sont produits la même année. La plupart des hôpitaux fonctionnaient à 20% de leur capacité.' },
              { year: '2022–2024', icon: '🚨', title: 'Gangs & Retour du Choléra', desc: 'Les gangs armés contrôlent 80% de Port-au-Prince, bloquant ambulances et chaînes d’approvisionnement. Le choléra est revenu en 2022. MSF a signalé des attaques directes sur des hôpitaux.' },
              { year: '2025+', icon: '🌟', title: 'Le Temps du HNIH', desc: 'Dans ce contexte, l’Hôpital National Intégré d’Haïti représente la réponse la plus complète et coordonnée d’Haïti face à la crise sanitaire dans toute l’histoire du pays.' },
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
            La Crise est Réelle. La Solution Aussi.
          </h2>
          <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 650, margin: '0 auto 28px' }}>
            Le HNIH n’est pas seulement un hôpital — c’est la réponse d’Haïti à des décennies
            d’effondrement du système de santé. Une infrastructure sanitaire complète, durable
            et de classe mondiale, construite pour et par le peuple haïtien.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/solutions" style={{ textDecoration: 'none' }}>
              <button className="phase-btn" style={{
                background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
                border: 'none', color: '#fff',
                padding: '14px 32px', borderRadius: 10,
                fontSize: 15, fontWeight: 700, cursor: 'pointer',
              }}>
                🌟 Voir Nos Solutions
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
                📋 À Propos du Projet
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
