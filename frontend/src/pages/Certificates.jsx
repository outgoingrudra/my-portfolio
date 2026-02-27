import { motion } from 'framer-motion';
import { FaAward, FaTrophy } from 'react-icons/fa';
import CertificateCard from '../Component/CertificateCard';
import { certificates } from '../assets/assets';

// ── Helpers ───────────────────────────────────────────────────────────────────

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

// ── Page ──────────────────────────────────────────────────────────────────────

const Certificates = () => {
  const nptelCount  = certificates.filter(c => c.issuer?.includes('NPTEL')).length;
  const othersCount = certificates.length - nptelCount;
  const yearsLearning = new Date().getFullYear() - 2023;

  const stats = [
    { val: certificates.length, label: 'Certificates',    color: '#fde047', border: 'rgba(234,179,8,0.25)'   },
    { val: nptelCount,          label: 'NPTEL / IIT',      color: '#22d3ee', border: 'rgba(6,182,212,0.2)'   },
    { val: othersCount,         label: 'Others',           color: '#34d399', border: 'rgba(16,185,129,0.2)'  },
    { val: `${yearsLearning}+`, label: 'Years Learning',   color: '#a78bfa', border: 'rgba(139,92,246,0.2)'  },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#04070f', padding: '6rem 1.5rem 5rem' }}>

      {/* ── BACKGROUND GLOWS ── */}
      <div className="pointer-events-none fixed inset-0 z-0" style={{ overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', width: 700, height: 700, left: '-15%', top: '5%',
          background: 'radial-gradient(circle,rgba(234,179,8,0.06) 0%,transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', width: 600, height: 600, right: '-10%', top: '20%',
          background: 'radial-gradient(circle,rgba(6,182,212,0.05) 0%,transparent 70%)',
          filter: 'blur(55px)',
        }} />
        <div style={{
          position: 'absolute', width: 500, height: 500, left: '25%', bottom: '0%',
          background: 'radial-gradient(circle,rgba(139,92,246,0.04) 0%,transparent 70%)',
          filter: 'blur(50px)',
        }} />
      </div>

      <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── PAGE HEADER ── */}
        <motion.div {...fade(0)} style={{ marginBottom: '3.5rem' }}>

          <p style={{
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.35em',
            textTransform: 'uppercase', color: 'rgba(148,163,184,0.4)', marginBottom: '0.75rem',
          }}>
            Credentials & Achievements
          </p>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>

            {/* Title */}
            <div>
              {/* Trophy icon inline with title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                  background: 'rgba(234,179,8,0.1)',
                  border: '1px solid rgba(234,179,8,0.25)',
                }}>
                  <FaTrophy size={22} style={{ color: '#fde047' }} />
                </div>
                <h1 style={{
                  fontFamily: "'Bebas Neue','Impact',sans-serif",
                  fontSize: 'clamp(3rem,8vw,6rem)',
                  fontWeight: 900, lineHeight: 0.88, letterSpacing: '0.04em',
                  background: 'linear-gradient(135deg,#fef9c3 0%,#fde047 45%,#f59e0b 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  CERTIFI-<br />CATIONS
                </h1>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(148,163,184,0.55)', maxWidth: 480, lineHeight: 1.6, marginTop: '0.5rem' }}>
                A showcase of my continuous learning journey and professional development across technology.
              </p>
            </div>

            {/* Stats strip */}
            <div style={{ display: 'flex', gap: '2rem', paddingBottom: '0.5rem', flexWrap: 'wrap' }}>
              {stats.map(({ val, label, color }) => (
                <div key={label} style={{ textAlign: 'right' }}>
                  <p style={{
                    fontFamily: "'Bebas Neue','Impact',sans-serif",
                    fontSize: '2.2rem', letterSpacing: '0.06em', lineHeight: 1, color,
                  }}>
                    {val}
                  </p>
                  <p style={{
                    fontSize: '0.6rem', letterSpacing: '0.15em',
                    textTransform: 'uppercase', color: 'rgba(100,116,139,0.55)', marginTop: 3,
                  }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider — gold */}
          <div style={{
            height: 1, marginTop: '2rem',
            background: 'linear-gradient(90deg,rgba(234,179,8,0.5),rgba(251,146,60,0.2),transparent)',
          }} />
        </motion.div>

        {/* ── SECTION LABEL ── */}
        <motion.div
          {...fade(0.15)}
          style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '2rem' }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 40, height: 40, borderRadius: 8, flexShrink: 0,
            background: 'rgba(234,179,8,0.1)',
            border: '1px solid rgba(234,179,8,0.25)',
            color: '#fde047',
          }}>
            <FaAward size={17} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0', lineHeight: 1.2 }}>
              All Certifications
            </p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(148,163,184,0.5)', marginTop: 2 }}>
              Click any card to view the full certificate
            </p>
          </div>
          {/* Trailing accent line */}
          <div style={{
            flex: 1, height: 1, maxWidth: 180,
            background: 'linear-gradient(90deg,rgba(234,179,8,0.3),transparent)',
          }} />
        </motion.div>

        {/* ── CERTIFICATES GRID ── */}
        {certificates.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '5rem',
          }}>
            {certificates.map((certificate, index) => (
              <CertificateCard key={certificate.id} certificate={certificate} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            {...fade(0.2)}
            style={{
              padding: '4rem',
              borderRadius: 14,
              background: 'rgba(234,179,8,0.03)',
              border: '1px solid rgba(234,179,8,0.12)',
              textAlign: 'center',
              marginBottom: '5rem',
            }}
          >
            <FaAward size={48} style={{ color: 'rgba(234,179,8,0.25)', margin: '0 auto 1rem' }} />
            <p style={{ color: 'rgba(148,163,184,0.5)', fontSize: '1rem' }}>Certificates coming soon...</p>
          </motion.div>
        )}

        {/* ── FOOTER BANNER ── */}
        <motion.div
          {...fade(0.3)}
          style={{
            padding: '2.5rem',
            borderRadius: 14,
            background: 'rgba(234,179,8,0.03)',
            border: '1px solid rgba(234,179,8,0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          <div>
            <h3 style={{
              fontFamily: "'Bebas Neue','Impact',sans-serif",
              fontSize: '1.7rem', letterSpacing: '0.08em',
              color: '#e2e8f0', marginBottom: 6,
            }}>
              CONTINUOUS LEARNING JOURNEY 🚀
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'rgba(148,163,184,0.55)', maxWidth: 480, lineHeight: 1.7 }}>
              Every certificate is a milestone. Always expanding my skills — currently focused on
              Full Stack development, DevOps, and backend engineering.
            </p>
          </div>

          {/* Milestone dots */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: 180 }}>
            {['MERN Stack', 'DevOps & Docker', 'Spring Boot'].map((item, i) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                  background: i === 0 ? '#22d3ee' : i === 1 ? '#34d399' : '#a78bfa',
                  boxShadow: `0 0 8px ${i === 0 ? '#22d3ee' : i === 1 ? '#34d399' : '#a78bfa'}`,
                }} />
                <span style={{ fontSize: '0.78rem', color: 'rgba(203,213,225,0.65)', fontWeight: 500 }}>
                  {item}
                </span>
                <span style={{
                  marginLeft: 'auto', fontSize: '0.62rem', fontWeight: 700,
                  padding: '0.15rem 0.5rem', borderRadius: 99,
                  background: i === 2 ? 'rgba(139,92,246,0.1)' : 'rgba(6,182,212,0.08)',
                  border: `1px solid ${i === 2 ? 'rgba(139,92,246,0.25)' : 'rgba(6,182,212,0.2)'}`,
                  color: i === 2 ? '#a78bfa' : '#67e8f9',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>
                  {i === 2 ? 'Learning' : 'Active'}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </div>
  );
};

export default Certificates;