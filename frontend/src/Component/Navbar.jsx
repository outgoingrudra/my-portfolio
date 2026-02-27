import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/certificates', label: 'Certificates' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled
            ? 'rgba(4, 7, 15, 0.92)'
            : 'rgba(4, 7, 15, 0.6)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled
            ? '1px solid rgba(6,182,212,0.15)'
            : '1px solid rgba(6,182,212,0.07)',
          boxShadow: scrolled
            ? '0 4px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(6,182,212,0.08)'
            : 'none',
          transition: 'background 0.4s, border-color 0.4s, box-shadow 0.4s',
        }}
      >
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem' }}>

            {/* ── Logo ── */}
            <Link
              to="/"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              {/* Bracket accent */}
              <span style={{ color: 'rgba(6,182,212,0.5)', fontFamily: "'Bebas Neue', monospace", fontSize: '1.1rem', letterSpacing: '-0.05em' }}>&lt;</span>
              <span
                style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: '1.5rem',
                  letterSpacing: '0.12em',
                  background: 'linear-gradient(135deg, #f1f5f9 0%, #7dd3fc 60%, #22d3ee 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                RUDRA
              </span>
              <span style={{ color: 'rgba(6,182,212,0.5)', fontFamily: "'Bebas Neue', monospace", fontSize: '1.1rem', letterSpacing: '-0.05em' }}>/&gt;</span>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden md:flex" style={{ alignItems: 'center', gap: '0.25rem' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    style={{
                      display: 'inline-block',
                      padding: '0.45rem 1rem',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      borderRadius: '3px',
                      position: 'relative',
                      color: isActive(link.path) ? '#22d3ee' : 'rgba(148,163,184,0.75)',
                      background: isActive(link.path) ? 'rgba(6,182,212,0.08)' : 'transparent',
                      border: isActive(link.path) ? '1px solid rgba(6,182,212,0.2)' : '1px solid transparent',
                      transition: 'all 0.25s',
                    }}
                    onMouseEnter={e => {
                      if (!isActive(link.path)) {
                        e.currentTarget.style.color = '#e2e8f0';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive(link.path)) {
                        e.currentTarget.style.color = 'rgba(148,163,184,0.75)';
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    {link.label}
                    {/* Active underline dot */}
                    {isActive(link.path) && (
                      <motion.span
                        layoutId="nav-dot"
                        style={{
                          position: 'absolute',
                          bottom: 4,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: '#22d3ee',
                          boxShadow: '0 0 6px rgba(34,211,238,0.8)',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* Hire Me CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55, duration: 0.4 }}
                style={{ marginLeft: '0.75rem' }}
              >
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-block',
                    padding: '0.45rem 1.2rem',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: '#fff',
                    background: 'linear-gradient(135deg, #0891b2 0%, #2563eb 100%)',
                    borderRadius: '3px',
                    boxShadow: '0 0 18px rgba(6,182,212,0.25)',
                    transition: 'box-shadow 0.3s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(6,182,212,0.5)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0 0 18px rgba(6,182,212,0.25)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Hire Me
                </Link>
              </motion.div>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setIsOpen(o => !o)}
              aria-label="Toggle menu"
              className="md:hidden"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                color: isOpen ? '#22d3ee' : 'rgba(148,163,184,0.8)',
                background: isOpen ? 'rgba(6,182,212,0.1)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${isOpen ? 'rgba(6,182,212,0.3)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <HiX size={22} />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <HiMenu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

          </div>
        </div>

        {/* Thin cyan progress line at bottom of navbar */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.4) 50%, transparent 100%)', opacity: scrolled ? 0.6 : 0.2, transition: 'opacity 0.4s' }} />
      </motion.nav>

      {/* ── Mobile Dropdown ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: '4rem',
              left: 0,
              right: 0,
              zIndex: 49,
              background: 'rgba(4,7,15,0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(6,182,212,0.15)',
              transformOrigin: 'top',
            }}
          >
            <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '1rem 1.5rem 1.5rem' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.85rem 1rem',
                      marginBottom: '0.25rem',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      color: isActive(link.path) ? '#22d3ee' : 'rgba(148,163,184,0.8)',
                      background: isActive(link.path) ? 'rgba(6,182,212,0.08)' : 'transparent',
                      borderLeft: isActive(link.path) ? '2px solid #06b6d4' : '2px solid transparent',
                      transition: 'all 0.25s',
                    }}
                  >
                    <span style={{ fontSize: '0.65rem', color: isActive(link.path) ? '#06b6d4' : 'rgba(100,116,139,0.5)', fontFamily: 'monospace' }}>
                      0{i + 1}
                    </span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Hire Me */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <Link
                  to="/contact"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.85rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: '#fff',
                    background: 'linear-gradient(135deg, #0891b2 0%, #2563eb 100%)',
                    borderRadius: '4px',
                    boxShadow: '0 0 24px rgba(6,182,212,0.3)',
                  }}
                >
                  Hire Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </>
  );
};

export default Navbar;