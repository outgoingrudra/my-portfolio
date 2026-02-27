import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaCode, FaArrowLeft } from 'react-icons/fa';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const navLinks = [
  { path: '/',             label: 'Home'         },
  { path: '/about',        label: 'About'        },
  { path: '/projects',     label: 'Projects'     },
  { path: '/certificates', label: 'Certificates' },
  { path: '/contact',      label: 'Contact'      },
];

const ErrorPage = () => {
  const [glitch, setGlitch] = useState(false);

  // Randomly trigger glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ minHeight: '100vh', background: '#04070f', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', overflow: 'hidden', position: 'relative' }}
    >

      {/* ── BACKGROUND GLOWS ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div style={{ position: 'absolute', width: 700, height: 700, left: '-20%', top: '10%',
          background: 'radial-gradient(circle,rgba(6,182,212,0.07) 0%,transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', width: 600, height: 600, right: '-15%', bottom: '5%',
          background: 'radial-gradient(circle,rgba(239,68,68,0.06) 0%,transparent 70%)', filter: 'blur(55px)' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, left: '40%', bottom: '-10%',
          background: 'radial-gradient(circle,rgba(59,130,246,0.05) 0%,transparent 70%)', filter: 'blur(50px)' }} />
      </div>

      {/* Noise grain */}
      <div className="pointer-events-none absolute inset-0 z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '256px', opacity: 0.03,
      }} />

      {/* Horizontal accent line */}
      <div className="pointer-events-none absolute z-0 left-0 right-0 opacity-[0.06]" style={{
        top: '50%', height: 1,
        background: 'linear-gradient(90deg,transparent,#ef4444 30%,#06b6d4 70%,transparent)',
      }} />

      {/* ── CONTENT ── */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '600px', width: '100%' }}>

        {/* Ghost 404 */}
        <div
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -55%)',
            fontFamily: "'Bebas Neue','Impact',sans-serif",
            fontSize: 'clamp(10rem, 28vw, 22rem)',
            fontWeight: 900,
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '2px rgba(239,68,68,0.07)',
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            letterSpacing: '0.02em',
          }}
        >
          404
        </div>

        {/* Error code badge */}
        <motion.div {...fade(0)} style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '0.35rem 1rem', borderRadius: 99,
            background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.22)',
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em',
            textTransform: 'uppercase', color: '#fca5a5',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444',
              display: 'inline-block', animation: 'pulse 2s infinite' }} />
            Error 404
          </span>
        </motion.div>

        {/* Main 404 display */}
        <motion.div {...fade(0.1)} style={{ marginBottom: '1rem', position: 'relative' }}>
          <h1
            style={{
              fontFamily: "'Bebas Neue','Impact',sans-serif",
              fontSize: 'clamp(5rem,18vw,12rem)',
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: '0.04em',
              background: glitch
                ? 'linear-gradient(135deg,#ef4444 0%,#f97316 50%,#ef4444 100%)'
                : 'linear-gradient(135deg,#f1f5f9 0%,#7dd3fc 50%,#22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transition: 'background 0.1s',
              // Glitch transform
              transform: glitch ? 'translate(3px, -2px)' : 'translate(0,0)',
              filter: glitch ? 'blur(0.5px)' : 'none',
            }}
          >
            404
          </h1>

          {/* Glitch clone layers */}
          {glitch && (
            <>
              <h1 style={{
                position: 'absolute', inset: 0,
                fontFamily: "'Bebas Neue','Impact',sans-serif",
                fontSize: 'clamp(5rem,18vw,12rem)',
                fontWeight: 900, lineHeight: 0.88, letterSpacing: '0.04em',
                color: 'transparent', WebkitTextFillColor: 'transparent',
                background: 'linear-gradient(135deg,#ef4444,#f97316)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text',
                transform: 'translate(-4px, 3px)',
                opacity: 0.4, pointerEvents: 'none',
              }}>404</h1>
              <h1 style={{
                position: 'absolute', inset: 0,
                fontFamily: "'Bebas Neue','Impact',sans-serif",
                fontSize: 'clamp(5rem,18vw,12rem)',
                fontWeight: 900, lineHeight: 0.88, letterSpacing: '0.04em',
                color: 'transparent', WebkitTextFillColor: 'transparent',
                background: 'linear-gradient(135deg,#06b6d4,#3b82f6)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text',
                transform: 'translate(4px, -3px)',
                opacity: 0.35, pointerEvents: 'none',
              }}>404</h1>
            </>
          )}
        </motion.div>

        {/* Page not found text */}
        <motion.div {...fade(0.2)} style={{ marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg,transparent,rgba(239,68,68,0.5))' }} />
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e2e8f0', letterSpacing: '0.05em' }}>
              Page Not Found
            </p>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg,rgba(239,68,68,0.5),transparent)' }} />
          </div>
          <p style={{ fontSize: '0.9rem', color: 'rgba(148,163,184,0.6)', lineHeight: 1.7, maxWidth: 380, margin: '0 auto' }}>
            Looks like this page wandered off. It might have been moved, deleted, or it never existed in the first place.
          </p>
        </motion.div>

        {/* Code snippet easter egg */}
        <motion.div {...fade(0.3)} style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '0.5rem 1rem',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 6,
            fontFamily: 'monospace',
          }}>
            <FaCode size={12} style={{ color: '#22d3ee' }} />
            <span style={{ fontSize: '0.78rem', color: 'rgba(148,163,184,0.5)' }}>
              <span style={{ color: '#f472b6' }}>throw</span>
              <span style={{ color: '#e2e8f0' }}> new </span>
              <span style={{ color: '#22d3ee' }}>Error</span>
              <span style={{ color: '#e2e8f0' }}>('</span>
              <span style={{ color: '#86efac' }}>route not found</span>
              <span style={{ color: '#e2e8f0' }}>');</span>
            </span>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div {...fade(0.4)} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '0.85rem 1.75rem', fontSize: '0.78rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none',
              color: '#fff', borderRadius: 4,
              background: 'linear-gradient(135deg,#0891b2,#2563eb)',
              boxShadow: '0 0 24px rgba(6,182,212,0.28)',
              transition: 'box-shadow 0.3s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 40px rgba(6,182,212,0.55)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 24px rgba(6,182,212,0.28)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <FaHome size={14} /> Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '0.85rem 1.75rem', fontSize: '0.78rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#67e8f9', borderRadius: 4,
              background: 'rgba(6,182,212,0.05)',
              border: '1px solid rgba(6,182,212,0.3)',
              cursor: 'pointer', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(6,182,212,0.12)'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.55)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(6,182,212,0.05)'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <FaArrowLeft size={13} /> Go Back
          </button>
        </motion.div>

        {/* Quick nav links */}
        <motion.div {...fade(0.5)}>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.25em',
            textTransform: 'uppercase', color: 'rgba(100,116,139,0.5)', marginBottom: '0.75rem' }}>
            Or jump to
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                style={{
                  padding: '0.35rem 0.85rem', fontSize: '0.72rem', fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
                  borderRadius: 4,
                  color: 'rgba(148,163,184,0.65)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#22d3ee'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)'; e.currentTarget.style.background = 'rgba(6,182,212,0.07)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(148,163,184,0.65)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              >
                {label}
              </Link>
            ))}
          </div>
        </motion.div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </div>
  );
};

export default ErrorPage;