import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaChartBar } from 'react-icons/fa';

// ── Tech chip colors ──────────────────────────────────────────────────────────
const techColors = {
  'MongoDB':          { bg: 'rgba(22,163,74,0.12)',   border: 'rgba(22,163,74,0.3)',   color: '#86efac' },
  'Express':          { bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.2)', color: '#cbd5e1' },
  'React':            { bg: 'rgba(6,182,212,0.1)',    border: 'rgba(6,182,212,0.25)',  color: '#67e8f9' },
  'Node.js':          { bg: 'rgba(34,197,94,0.1)',    border: 'rgba(34,197,94,0.25)',  color: '#86efac' },
  'Stream':           { bg: 'rgba(99,102,241,0.1)',   border: 'rgba(99,102,241,0.25)', color: '#a5b4fc' },
  'Clerk':            { bg: 'rgba(168,85,247,0.1)',   border: 'rgba(168,85,247,0.25)', color: '#d8b4fe' },
  'Inngest':          { bg: 'rgba(251,191,36,0.1)',   border: 'rgba(251,191,36,0.25)', color: '#fde68a' },
  'Framer Motion':    { bg: 'rgba(236,72,153,0.1)',   border: 'rgba(236,72,153,0.25)', color: '#f9a8d4' },
  'AI Integration':   { bg: 'rgba(6,182,212,0.1)',    border: 'rgba(6,182,212,0.25)',  color: '#67e8f9' },
  'Location API':     { bg: 'rgba(251,146,60,0.1)',   border: 'rgba(251,146,60,0.25)', color: '#fed7aa' },
  'CSS':              { bg: 'rgba(59,130,246,0.1)',   border: 'rgba(59,130,246,0.25)', color: '#93c5fd' },
  'Responsive Design':{ bg: 'rgba(16,185,129,0.1)',  border: 'rgba(16,185,129,0.25)', color: '#6ee7b7' },
  'Python':           { bg: 'rgba(234,179,8,0.1)',    border: 'rgba(234,179,8,0.25)',  color: '#fde047' },
  'Pandas':           { bg: 'rgba(99,102,241,0.1)',   border: 'rgba(99,102,241,0.25)', color: '#a5b4fc' },
  'Matplotlib':       { bg: 'rgba(251,146,60,0.1)',   border: 'rgba(251,146,60,0.25)', color: '#fed7aa' },
  'Seaborn':          { bg: 'rgba(6,182,212,0.1)',    border: 'rgba(6,182,212,0.25)',  color: '#67e8f9' },
  'Pytrends':         { bg: 'rgba(234,179,8,0.1)',    border: 'rgba(234,179,8,0.25)',  color: '#fde047' },
  'NumPy':            { bg: 'rgba(59,130,246,0.1)',   border: 'rgba(59,130,246,0.25)', color: '#93c5fd' },
};

const defaultChip = {
  bg: 'rgba(255,255,255,0.05)',
  border: 'rgba(255,255,255,0.1)',
  color: 'rgba(203,213,225,0.8)',
};

// ── Per-type style config ─────────────────────────────────────────────────────
const typeConfig = {
  fullstack: {
    accentColor: '#22d3ee',
    accentRgb: '6,182,212',
    gradientBar: 'linear-gradient(90deg,transparent,#06b6d4,#3b82f6,transparent)',
    badgeBg: 'rgba(6,182,212,0.1)',
    badgeBorder: 'rgba(6,182,212,0.3)',
    badgeColor: '#67e8f9',
    badgeLabel: 'Full Stack',
    badgeIcon: <FaCode size={10} />,
  },
  datascience: {
    accentColor: '#fb923c',
    accentRgb: '251,146,60',
    gradientBar: 'linear-gradient(90deg,transparent,#f97316,#ef4444,transparent)',
    badgeBg: 'rgba(251,146,60,0.1)',
    badgeBorder: 'rgba(251,146,60,0.3)',
    badgeColor: '#fed7aa',
    badgeLabel: 'Data Science',
    badgeIcon: <FaChartBar size={10} />,
  },
};

// ── Component ─────────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const cfg = typeConfig[project.type] || typeConfig.fullstack;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 14,
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? `rgba(${cfg.accentRgb},0.35)` : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(${cfg.accentRgb},0.1)`
          : '0 4px 20px rgba(0,0,0,0.3)',
        transform: hovered ? 'translateY(-7px)' : 'translateY(0)',
        transition: 'border-color 0.35s, box-shadow 0.35s, transform 0.35s',
        display: 'flex',
        flexDirection: 'column',
      }}
    >

      {/* ── IMAGE ── */}
      <div style={{ position: 'relative', height: 200, overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={`projects/${project.image}`}
          alt={project.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.55s ease',
          }}
          onError={e => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />

        {/* Fallback */}
        <div style={{
          display: 'none', position: 'absolute', inset: 0,
          background: `linear-gradient(135deg,rgba(${cfg.accentRgb},0.08),rgba(15,23,42,0.9))`,
          alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8,
        }}>
          {project.type === 'datascience'
            ? <FaChartBar size={36} style={{ color: `rgba(${cfg.accentRgb},0.4)` }} />
            : <FaCode size={36} style={{ color: `rgba(${cfg.accentRgb},0.4)` }} />}
          <span style={{ fontSize: '0.7rem', color: `rgba(${cfg.accentRgb},0.4)`, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            No Preview
          </span>
        </div>

        {/* Bottom gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg,transparent 35%,rgba(4,7,15,0.92) 100%)',
          opacity: hovered ? 1 : 0.65,
          transition: 'opacity 0.35s',
        }} />

        {/* Type badge — top left */}
        <div style={{
          position: 'absolute', top: 12, left: 12,
          display: 'flex', alignItems: 'center', gap: 5,
          padding: '0.3rem 0.7rem', borderRadius: 99,
          background: cfg.badgeBg,
          border: `1px solid ${cfg.badgeBorder}`,
          backdropFilter: 'blur(8px)',
        }}>
          <span style={{ color: cfg.badgeColor }}>{cfg.badgeIcon}</span>
          <span style={{ fontSize: '0.65rem', fontWeight: 700, color: cfg.badgeColor, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {cfg.badgeLabel}
          </span>
        </div>

        {/* Action buttons — top right, appear on hover */}
        <div style={{
          position: 'absolute', top: 12, right: 12,
          display: 'flex', gap: 7,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 0.3s, transform 0.3s',
        }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                display: 'flex', alignItems: 'center', gap: 5,
                padding: '0.35rem 0.75rem', fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
                color: '#fff', borderRadius: 6,
                background: `linear-gradient(135deg,#0891b2,#2563eb)`,
                boxShadow: '0 4px 14px rgba(6,182,212,0.45)',
              }}
            >
              <FaExternalLinkAlt size={9} /> Live
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '0.35rem 0.75rem', fontSize: '0.68rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
              color: '#e2e8f0', borderRadius: 6,
              background: 'rgba(4,7,15,0.85)',
              border: '1px solid rgba(255,255,255,0.14)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <FaGithub size={10} /> Code
          </a>
        </div>

        {/* Ghost project number */}
        <div style={{
          position: 'absolute', bottom: 10, left: 14,
          fontFamily: "'Bebas Neue','Impact',sans-serif",
          fontSize: '3.2rem', lineHeight: 1, letterSpacing: '0.03em',
          color: 'transparent',
          WebkitTextStroke: `1px rgba(${cfg.accentRgb},0.22)`,
          userSelect: 'none',
        }}>
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ padding: '1.2rem 1.4rem 1.4rem', display: 'flex', flexDirection: 'column', flex: 1 }}>

        <h3 style={{
          fontSize: '0.95rem', fontWeight: 700, color: '#e2e8f0',
          marginBottom: '0.45rem', lineHeight: 1.35, letterSpacing: '0.01em',
          transition: 'color 0.25s',
          ...(hovered ? { color: cfg.accentColor } : {}),
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: '0.78rem', color: 'rgba(148,163,184,0.62)',
          lineHeight: 1.75, marginBottom: '0.9rem', flex: 1,
          display: '-webkit-box', WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {project.description}
        </p>

        {/* Tech chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '1rem' }}>
          {project.tech.map(t => {
            const c = techColors[t] || defaultChip;
            return (
              <span key={t} style={{
                padding: '0.22rem 0.55rem', fontSize: '0.65rem', fontWeight: 600,
                borderRadius: 4, letterSpacing: '0.06em',
                background: c.bg, border: `1px solid ${c.border}`, color: c.color,
              }}>
                {t}
              </span>
            );
          })}
        </div>

        {/* Bottom links */}
        <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'center' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              fontSize: '0.72rem', fontWeight: 600,
              color: 'rgba(148,163,184,0.65)', textDecoration: 'none',
              transition: 'color 0.25s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = cfg.accentColor}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(148,163,184,0.65)'}
          >
            <FaGithub size={13} /> Source
          </a>

          {project.live && (
            <>
              <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.1)' }} />
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  fontSize: '0.72rem', fontWeight: 600,
                  color: cfg.accentColor, textDecoration: 'none',
                  transition: 'opacity 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <FaExternalLinkAlt size={10} /> Live Demo
              </a>
            </>
          )}

          {/* No live badge for DS projects */}
          {!project.live && (
            <span style={{
              marginLeft: 'auto', fontSize: '0.62rem', fontWeight: 600,
              padding: '0.18rem 0.55rem', borderRadius: 99,
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
              color: 'rgba(100,116,139,0.7)', letterSpacing: '0.08em',
            }}>
              Analysis Only
            </span>
          )}
        </div>
      </div>

      {/* Bottom glow bar on hover */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
        background: cfg.gradientBar,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s',
      }} />

    </motion.div>
  );
};

export default ProjectCard;