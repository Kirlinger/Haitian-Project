import { Link } from 'react-router-dom';
import { C, SOLUTIONS_LIST } from '../data/constants';
import { Card, SectionTitle } from '../components/UI';

const TECH_INNOVATIONS = [
  {
    icon: '🤖', title: 'Intelligence Artificielle en Diagnostic', color: '#8E44AD',
    features: [
      { name: 'Lecture Radiologique par IA', desc: 'Des algorithmes d’apprentissage automatique analysent les radiographies, scanners et IRM avec une précision de 94%+ — réduisant le temps de diagnostic de plusieurs jours à quelques minutes.' },
      { name: 'Analyses Prédictives de Santé', desc: 'Les données de santé populationnelle sont modélisées pour prédire les épidémies, les besoins en ressources et l’identification des patients à risque.' },
      { name: 'Aide à la Décision Clinique', desc: 'Recommandations de traitement assistées par IA basées sur 50M+ de dossiers de patients mondiaux, adaptées aux profils pathologiques haïtiens.' },
    ],
  },
  {
    icon: '📱', title: 'Santé Numérique & Télémédecine', color: '#0077D4',
    features: [
      { name: 'Réseau National de Télémédecine', desc: '9 cliniques satellites provinciales connectées aux spécialistes du HNIH via consultation vidéo en temps réel — atteignant 65% de la population précédemment non desservie.' },
      { name: 'Application Mobile Santé', desc: 'Application pour les patients pour les rendez-vous, résultats d’analyses, rappels de médicaments et téléconsultation — fonctionne avec des connexions à faible bande passante.' },
      { name: 'Système National de DME', desc: 'Chaque patient haïtien dispose d’un dossier médical électronique unique et portable, accessible dans tous les établissements de santé publics du pays.' },
    ],
  },
  {
    icon: '🔬', title: 'Équipements Médicaux Avancés', color: '#C0392B',
    features: [
      { name: 'IRM 3 Tesla & Scanner CT 128 coupes', desc: 'Équipements d’imagerie comparables aux meilleurs hôpitaux européens — Haïti ne dispose actuellement que de moins de 3 IRM fonctionnels dans tout le pays.' },
      { name: 'Chirurgie Robotique Da Vinci', desc: 'Système de chirurgie robotique mini-invasive permettant des interventions complexes avec des temps de récupération plus courts et des taux de complications plus faibles.' },
      { name: 'Accélérateur Linéaire (LINAC)', desc: 'Première machine de radiothérapie d’Haïti pour le traitement du cancer — éliminant le besoin de voyager à l’étranger pour les soins oncologiques.' },
    ],
  },
  {
    icon: '🧬', title: 'Génétique & Médecine de Précision', color: '#27AE60',
    features: [
      { name: 'Premier Laboratoire de Génétique d’Haïti', desc: 'Tests génétiques diagnostiques pour les maladies rares, les conditions héréditaires et la planification de traitements personnalisés.' },
      { name: 'Pharmacogénomique', desc: 'Sélection de médicaments basée sur l’ADN pour maximiser l’efficacité thérapeutique et minimiser les effets indésirables.' },
      { name: 'Dépistage Génétique Néonatal', desc: 'Programme national pour identifier les maladies génétiques traitables chez les nouveau-nés avant l’apparition des symptômes.' },
    ],
  },
];

const EDUCATION_PROGRAMS = [
  { icon: '🩺', title: 'Résidence Médicale (12 Spécialités)', duration: '3–6 ans', spots: '60/an', desc: 'Formation complète de résidence dans toutes les spécialités du HNIH — premier programme de résidence complet jamais proposé en Haïti.' },
  { icon: '👩‍⚕️', title: 'Programme d’Excellence Infirmière', duration: '2 ans', spots: '200/an', desc: 'Formation infirmière avancée avec parcours spécialisés en soins intensifs, oncologie, pédiatrie et urgences.' },
  { icon: '🔬', title: 'Sciences de la Santé Connexes', duration: '1–2 ans', spots: '150/an', desc: 'Formation pour techniciens de laboratoire, manipulateurs radio, kinésithérapeutes et assistants sociaux médicaux.' },
  { icon: '📡', title: 'Informatique de Santé & Télémédecine', duration: '1 an', spots: '50/an', desc: 'Formation spécialisée en gestion des données de santé, systèmes de télémédecine et outils de santé par IA.' },
  { icon: '🎓', title: 'Formation Médicale Continue', duration: 'En continu', spots: 'Illimité', desc: 'Ateliers réguliers, webinaires et certifications pour maintenir tous les agents de santé haïtiens à jour avec les avancées mondiales.' },
  { icon: '💊', title: 'Sciences Pharmaceutiques', duration: '1–2 ans', spots: '40/an', desc: 'Former des pharmaciens et des chercheurs pharmaceutiques pour soutenir la production locale de médicaments et la gestion de la chaîne d’approvisionnement.' },
];

const SUSTAINABILITY_PILLARS = [
  { icon: '☀️', title: '2 MW d’Énergie Solaire', desc: 'Production d’énergie 100% renouvelable sur site — éliminant la dépendance au réseau électrique peu fiable d’Haïti et réduisant les coûts d’exploitation de 35%.', color: '#F39C12' },
  { icon: '💧', title: 'Autonomie en Eau', desc: 'Système de purification d’eau sur site et collecte des eaux de pluie fournissant 100% des besoins en eau de l’hôpital sans dépendance municipale.', color: '#00A3E0' },
  { icon: '♻️', title: 'Gestion des Déchets Médicaux', desc: 'Système de traitement et d’élimination des déchets médicaux de pointe, prévenant la contamination environnementale et respectant les normes internationales de biosécurité.', color: '#27AE60' },
  { icon: '💊', title: 'Production Pharmaceutique Locale', desc: '100+ médicaments génériques essentiels produits localement à la 5ème année, réduisant les coûts d’importation de 40% et assurant un approvisionnement continu.', color: '#8E44AD' },
  { icon: '🌍', title: 'Recettes du Tourisme Médical', desc: 'Programme de tourisme médical caribéen ciblant 50M$/an de recettes d’ici l’Année 7, fournissant une subvention croisée pour les soins gratuits aux plus démunis.', color: '#E74C3C' },
  { icon: '📈', title: 'Autosuffisance Financière', desc: 'Modèle de recettes conçu pour atteindre l’équilibre à l’Année 8 et générer des bénéfices à l’Année 10, assurant une exploitation perpétuelle sans dépendance aux donateurs.', color: C.success },
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
            💡 SOLUTIONS & INNOVATIONS · SOLISYON & INOVASYON
          </div>

          <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, margin: '0 0 20px', letterSpacing: -1 }}>
            <span style={{ color: '#fff' }}>Résoudre la Crise</span>
            <br />
            <span style={{ background: `linear-gradient(90deg, ${C.success}, ${C.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Sanitaire d’Haïti
            </span>
          </h1>

          <p style={{ color: '#C8D8E8', fontSize: 17, lineHeight: 1.8, maxWidth: 720, margin: '0 0 40px' }}>
            Le HNIH ne traite pas seulement les symptômes de la crise sanitaire haïtienne — il s’attaque
            aux causes profondes avec une approche globale et multi-niveaux combinant des infrastructures
            de classe mondiale, des technologies avancées, l’éducation et un financement durable.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { v: '6', l: 'Solutions Clés' },
              { v: '12', l: 'Spécialités' },
              { v: '500/an', l: 'Personnel Formé' },
              { v: '9', l: 'Cliniques Satellites' },
              { v: '2 MW', l: 'Énergie Solaire' },
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
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Réponse Globale</div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
            Les Six Piliers de la Solution HNIH
          </h2>
          <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
            Chaque pilier répond directement à l’une des six défaillances critiques du système
            de santé haïtien, créant une solution globale qui est plus grande que la somme de ses parties.
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
                  <div style={{ color: C.soft, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>Pilier {i + 1}</div>
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
            <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Technologie Médicale</div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
              Technologies de Classe Mondiale pour Moderniser Haïti
            </h2>
            <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
              Le HNIH déploiera des technologies médicales de pointe qui n’existent nulle part ailleurs
              en Haïti aujourd’hui, faisant un bond de plusieurs décennies d’infrastructure manquante
              en un seul projet.
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
          <div style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Éducation & Formation</div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
            Former la Main-d'Œuvre Médicale d’Haïti
          </h2>
          <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
            Stopper la fuite des cerveaux nécessite plus que de meilleurs salaires — il faut construire
            d’excellents programmes de formation pour que les médecins et infirmières haïtiens puissent
            atteindre leur plein potentiel sans quitter le pays.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))', gap: 20 }}>
          {EDUCATION_PROGRAMS.map((prog) => (
            <Card key={prog.title} className="card-hover" style={{ borderTop: `3px solid ${C.blue}` }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{prog.icon}</div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{prog.title}</div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(0,80,200,0.2)', border: `1px solid ${C.border}`, borderRadius: 20, padding: '2px 10px', fontSize: 11, color: C.accent, fontWeight: 600 }}>{prog.duration}</span>
                <span style={{ background: 'rgba(0,200,100,0.1)', border: '1px solid rgba(0,200,100,0.25)', borderRadius: 20, padding: '2px 10px', fontSize: 11, color: C.success, fontWeight: 600 }}>{prog.spots} places</span>
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
            <div style={{ color: C.success, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Durabilité</div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 16px' }}>
              Bâti pour Durer. Bâti pour Croître.
            </h2>
            <p style={{ color: C.soft, fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto' }}>
              Le HNIH est conçu pour un fonctionnement permanent et autosuffisant — non pas comme un
              projet caritatif perpétuel, mais comme une institution de classe mondiale qui génère des
              recettes pour financer sa propre expansion et les soins gratuits aux plus démunis.
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
            Découvrir les Chiffres derrière la Vision
          </h2>
          <p style={{ color: C.soft, fontSize: 16, lineHeight: 1.7, maxWidth: 600, margin: '0 auto 28px' }}>
            Explorez le budget détaillé, le calendrier de mise en œuvre et l’impact projeté
            sur la population haïtienne.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/budget" style={{ textDecoration: 'none' }}>
              <button className="phase-btn" style={{
                background: `linear-gradient(135deg, ${C.blue}, ${C.accent})`,
                border: 'none', color: '#fff',
                padding: '14px 32px', borderRadius: 10,
                fontSize: 15, fontWeight: 700, cursor: 'pointer',
              }}>
                💰 Budget & Financement
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
                📈 Impact & Résultats
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
