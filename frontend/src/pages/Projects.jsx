import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaChartBar } from 'react-icons/fa';
import ProjectCard from '../Component/ProjectCard';
import { fullStackProjects, dataScienceProjects } from '../assets/assets';

// ── Helpers ───────────────────────────────────────────────────────────────────

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

// ── Section Header ────────────────────────────────────────────────────────────

const SectionHeader = ({ icon, title, subtitle, accentRgb }) => (
  <motion.div
    {...fade(0.1)}
    style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '2rem' }}
  >
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: 40, height: 40, borderRadius: 8, flexShrink: 0,
      background: `rgba(${accentRgb},0.1)`,
      border: `1px solid rgba(${accentRgb},0.25)`,
      color: `rgba(${accentRgb},1)`,
    }}>
      {icon}
    </div>
    <div style={{ flex: 1 }}>
      <p style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0', lineHeight: 1.2 }}>{title}</p>
      <p style={{ fontSize: '0.78rem', color: 'rgba(148,163,184,0.5)', marginTop: 2 }}>{subtitle}</p>
    </div>
    {/* Trailing line */}
    <div style={{
      flex: 1, height: 1, maxWidth: 160,
      background: `linear-gradient(90deg, rgba(${accentRgb},0.3), transparent)`,
    }} />
  </motion.div>
);

// ── Page ──────────────────────────────────────────────────────────────────────

const Projects = () => {
  const totalProjects = fullStackProjects.length + dataScienceProjects.length;
  const liveCount     = fullStackProjects.filter(p => p.live).length;
  const totalTech     = [...new Set([
    ...fullStackProjects.flatMap(p => p.tech),
    ...dataScienceProjects.flatMap(p => p.tech),
  ])].length;

  return (
    <div style={{ minHeight: '100vh', background: '#04070f', padding: '6rem 1.5rem 5rem' }}>

      {/* ── BACKGROUND GLOWS ── */}
      <div className="pointer-events-none fixed inset-0 z-0" style={{ overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', width: 700, height: 700, left: '-15%', top: '5%',
          background: 'radial-gradient(circle,rgba(6,182,212,0.07) 0%,transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', width: 600, height: 600, right: '-10%', bottom: '10%',
          background: 'radial-gradient(circle,rgba(251,146,60,0.05) 0%,transparent 70%)',
          filter: 'blur(55px)',
        }} />
        <div style={{
          position: 'absolute', width: 500, height: 500, left: '30%', bottom: '5%',
          background: 'radial-gradient(circle,rgba(59,130,246,0.05) 0%,transparent 70%)',
          filter: 'blur(50px)',
        }} />
      </div>

      <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── PAGE HEADER ── */}
        <motion.div {...fade(0)} style={{ marginBottom: '4rem' }}>

          <p style={{
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.35em',
            textTransform: 'uppercase', color: 'rgba(148,163,184,0.4)',
            marginBottom: '0.75rem',
          }}>
            What I've built
          </p>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>

            {/* Title */}
            <h1 style={{
              fontFamily: "'Bebas Neue','Impact',sans-serif",
              fontSize: 'clamp(3rem,8vw,6rem)',
              fontWeight: 900, lineHeight: 0.88, letterSpacing: '0.04em',
              background: 'linear-gradient(135deg,#f1f5f9 0%,#7dd3fc 50%,#22d3ee 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              MY<br />PROJECTS
            </h1>

            {/* Stats strip */}
            <div style={{ display: 'flex', gap: '2rem', paddingBottom: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { val: totalProjects,              label: 'Total',       color: '#22d3ee' },
                { val: fullStackProjects.length,   label: 'Full Stack',  color: '#67e8f9' },
                { val: dataScienceProjects.length, label: 'Analytics',   color: '#fb923c' },
                { val: liveCount,                  label: 'Live',        color: '#34d399' },
                { val: totalTech,                  label: 'Technologies',color: '#a5b4fc' },
              ].map(({ val, label, color }) => (
                <div key={label} style={{ textAlign: 'right' }}>
                  <p style={{
                    fontFamily: "'Bebas Neue','Impact',sans-serif",
                    fontSize: '2rem', letterSpacing: '0.06em', lineHeight: 1, color,
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

          {/* Divider */}
          <div style={{
            height: 1, marginTop: '2rem',
            background: 'linear-gradient(90deg,rgba(6,182,212,0.45),rgba(59,130,246,0.2),transparent)',
          }} />
        </motion.div>

        {/* ── FULL STACK SECTION ── */}
        <motion.section {...fade(0.15)} style={{ marginBottom: '5rem' }}>
          <SectionHeader
            icon={<FaCode size={17} />}
            title="Full Stack Development"
            subtitle="End-to-end web applications — from polished UIs to robust APIs"
            accentRgb="6,182,212"
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            {fullStackProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.section>

        {/* ── SEPARATOR ── */}
        <motion.div
          {...fade(0.2)}
          style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '4rem' }}
        >
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.06))' }} />
          <span style={{
            padding: '0.4rem 1.2rem', fontSize: '0.65rem', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(148,163,184,0.35)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 99,
          }}>
            Also
          </span>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,rgba(255,255,255,0.06),transparent)' }} />
        </motion.div>

        {/* ── DATA SCIENCE SECTION ── */}
        <motion.section {...fade(0.25)} style={{ marginBottom: '5rem' }}>
          <SectionHeader
            icon={<FaChartBar size={17} />}
            title="Data Science & Analytics"
            subtitle="Exploratory analysis, data visualisation & insight extraction"
            accentRgb="251,146,60"
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            {dataScienceProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.section>

        {/* ── FOOTER CTA ── */}
        <motion.div
          {...fade(0.35)}
          style={{
            padding: '2.5rem', borderRadius: 14,
            background: 'rgba(6,182,212,0.03)',
            border: '1px solid rgba(6,182,212,0.1)',
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          <div>
            <h3 style={{
              fontFamily: "'Bebas Neue','Impact',sans-serif",
              fontSize: '1.7rem', letterSpacing: '0.08em',
              color: '#e2e8f0', marginBottom: 6,
            }}>
              MORE ON GITHUB
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'rgba(148,163,184,0.55)', maxWidth: 420 }}>
              Explore all repositories — experiments, mini-tools, open-source contributions & works in progress.
            </p>
          </div>
          <a
            href="https://github.com/outgoingrudra"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '0.85rem 1.85rem', fontSize: '0.78rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none',
              color: '#fff', borderRadius: 4,
              background: 'linear-gradient(135deg,#0891b2,#2563eb)',
              boxShadow: '0 0 24px rgba(6,182,212,0.25)',
              transition: 'box-shadow 0.3s, transform 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 44px rgba(6,182,212,0.55)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 24px rgba(6,182,212,0.25)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FaGithub size={16} /> View GitHub
          </a>
        </motion.div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </div>
  );
};

export default Projects;