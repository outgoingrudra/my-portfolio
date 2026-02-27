import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiSpringboot } from 'react-icons/si';
import { HiDownload } from 'react-icons/hi';

const techStack = [
  { icon: <FaReact size={14} />, label: 'React' },
  { icon: <FaNodeJs size={14} />, label: 'Node.js' },
  { icon: <SiExpress size={14} />, label: 'Express' },
  { icon: <SiMongodb size={14} />, label: 'MongoDB' },
  { icon: <FaDocker size={14} />, label: 'DevOps' },
  { icon: <SiSpringboot size={14} />, label: 'Spring Boot' },
];

const socials = [
  { href: 'https://github.com/outgoingrudra', icon: <FaGithub size={20} />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/rudra-verma-33258a2a3', icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
  { href: 'mailto:vrudra671@gmail.com', icon: <FaEnvelope size={20} />, label: 'Email' },
];

const Home = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  const imgRotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const imgRotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
      style={{ background: '#04070f' }}
      onMouseMove={handleMouseMove}
    >

      {/* ── BACKGROUND ── */}

      {/* Noise grain */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px',
          opacity: 0.038,
        }}
      />

      {/* Cyan orb left */}
      <div className="pointer-events-none absolute z-0" style={{
        width: 700, height: 700, left: '-15%', top: '15%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)',
        filter: 'blur(50px)',
      }} />

      {/* Blue orb top-right */}
      <div className="pointer-events-none absolute z-0" style={{
        width: 800, height: 800, right: '-20%', top: '-20%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      {/* Green tinge bottom-right (DevOps/Spring flavor) */}
      <div className="pointer-events-none absolute z-0" style={{
        width: 500, height: 500, right: '5%', bottom: '-10%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)',
        filter: 'blur(50px)',
      }} />

      {/* Ghost name behind content */}
      <div
        className="pointer-events-none select-none absolute z-0"
        style={{
          bottom: '-3rem',
          left: '-0.5rem',
          fontSize: 'clamp(7rem, 20vw, 20rem)',
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          fontWeight: 900,
          lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(6,182,212,0.05)',
          letterSpacing: '0.02em',
          userSelect: 'none',
        }}
      >
        RUDRA
      </div>

      {/* Horizontal accent line */}
      <div className="pointer-events-none absolute z-0 left-0 right-0 opacity-[0.07]" style={{
        top: '50%', height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, #06b6d4 35%, #3b82f6 65%, transparent 100%)',
      }} />

      {/* ── MAIN GRID ── */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid md:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center">

        {/* ── LEFT: Content ── */}
        <div className="space-y-7">

          {/* Status pill */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span
              className="inline-flex items-center gap-2.5 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase rounded-full"
              style={{
                background: 'rgba(6,182,212,0.07)',
                border: '1px solid rgba(6,182,212,0.22)',
                color: '#67e8f9',
              }}
            >
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#22d3ee', animation: 'pulse 2s infinite' }} />
              Open to opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <p className="text-xs font-semibold tracking-[0.35em] uppercase mb-3" style={{ color: 'rgba(148,163,184,0.5)' }}>
              Hi, I'm
            </p>
            <h1
              style={{
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: 'clamp(3.8rem, 9.5vw, 8.5rem)',
                fontWeight: 900,
                lineHeight: 0.88,
                letterSpacing: '0.03em',
                background: 'linear-gradient(135deg, #f1f5f9 0%, #7dd3fc 50%, #22d3ee 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              RUDRA<br />VERMA
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-4"
          >
            <div style={{ width: 44, height: 2, flexShrink: 0, background: 'linear-gradient(90deg, #06b6d4, #3b82f6)', borderRadius: 2 }} />
            <div>
              <p className="text-xl font-bold" style={{ color: '#e2e8f0', letterSpacing: '0.01em' }}>
                Full Stack Web Developer
              </p>
              <p className="text-sm mt-0.5 font-medium" style={{ color: 'rgba(103,232,249,0.8)' }}>
                MERN Stack · Learning DevOps & Spring Boot
              </p>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38 }}
            className="text-base md:text-lg leading-relaxed max-w-lg"
            style={{ color: 'rgba(148,163,184,0.72)', fontFamily: 'system-ui, sans-serif' }}
          >
            Aspiring Software Engineer passionate about building scalable, production-ready
            web applications. I craft clean, efficient code across the full stack — from polished
            UIs to robust REST APIs — while continuously expanding into cloud and backend ecosystems.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.48 }}
            className="flex flex-wrap gap-2"
          >
            {techStack.map((tech, i) => (
              <motion.span
                key={tech.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.07 }}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-sm"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(203,213,225,0.85)',
                  letterSpacing: '0.05em',
                }}
              >
                <span style={{ color: '#22d3ee' }}>{tech.icon}</span>
                {tech.label}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4 pt-1"
          >
            <Link
              to="/projects"
              style={{
                display: 'inline-block',
                padding: '0.875rem 2rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#fff',
                background: 'linear-gradient(135deg, #0891b2 0%, #2563eb 100%)',
                borderRadius: '3px',
                boxShadow: '0 0 28px rgba(6,182,212,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                textDecoration: 'none',
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 44px rgba(6,182,212,0.55), inset 0 1px 0 rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 28px rgba(6,182,212,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'}
            >
              View Projects
            </Link>
            <a
              href="/my_resume.pdf"
              download
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 2rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#67e8f9',
                background: 'rgba(6,182,212,0.05)',
                border: '1px solid rgba(6,182,212,0.35)',
                borderRadius: '3px',
                textDecoration: 'none',
                transition: 'background 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(6,182,212,0.12)'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.6)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(6,182,212,0.05)'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.35)'; }}
            >
              <HiDownload size={18} />
              Download CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
            className="flex items-center gap-3 pt-1"
          >
            <span className="text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(100,116,139,0.6)' }}>Find me</span>
            <div style={{ width: 24, height: 1, background: 'rgba(100,116,139,0.35)' }} />
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: 'inline-flex',
                  padding: '0.6rem',
                  color: 'rgba(148,163,184,0.6)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '4px',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#22d3ee';
                  e.currentTarget.style.background = 'rgba(6,182,212,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(148,163,184,0.6)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {icon}
              </a>
            ))}
          </motion.div>

        </div>

        {/* ── RIGHT: Image with 3D tilt ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex justify-center"
          style={{ perspective: '1000px' }}
        >
          <motion.div
            style={{ rotateX: imgRotateX, rotateY: imgRotateY }}
            className="relative"
          >
            {/* Outer ambient glow */}
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(6,182,212,0.22), rgba(59,130,246,0.14))',
                filter: 'blur(35px)',
                transform: 'scale(1.12)',
              }}
            />

            {/* Corner brackets */}
            <div className="absolute z-20" style={{ top: -10, left: -10, width: 30, height: 30, borderTop: '2px solid #06b6d4', borderLeft: '2px solid #06b6d4' }} />
            <div className="absolute z-20" style={{ top: -10, right: -10, width: 30, height: 30, borderTop: '2px solid #06b6d4', borderRight: '2px solid #06b6d4' }} />
            <div className="absolute z-20" style={{ bottom: -10, left: -10, width: 30, height: 30, borderBottom: '2px solid #06b6d4', borderLeft: '2px solid #06b6d4' }} />
            <div className="absolute z-20" style={{ bottom: -10, right: -10, width: 30, height: 30, borderBottom: '2px solid #06b6d4', borderRight: '2px solid #06b6d4' }} />

            {/* Image frame */}
            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: 'clamp(260px, 32vw, 360px)',
                aspectRatio: '1 / 1.08',
                borderRadius: '10px',
                border: '1px solid rgba(6,182,212,0.18)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04)',
              }}
            >
              <img
                src="myimg.jpeg"
                alt="Rudra Verma"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Bottom gradient overlay on photo */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, transparent 50%, rgba(4,7,15,0.6) 100%)',
                }}
              />
            </div>

            {/* Floating badge — MERN */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              style={{
                position: 'absolute',
                right: -36,
                top: '20%',
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 0.8rem',
                borderRadius: '8px',
                background: 'rgba(4,7,15,0.88)',
                border: '1px solid rgba(6,182,212,0.25)',
                backdropFilter: 'blur(14px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
                minWidth: 128,
              }}
            >
              <FaReact size={20} style={{ color: '#22d3ee', animation: 'spin 6s linear infinite' }} />
              <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#e2e8f0', margin: 0 }}>MERN Stack</p>
                <p style={{ fontSize: '0.7rem', color: 'rgba(148,163,184,0.6)', margin: 0 }}>Full Stack</p>
              </div>
            </motion.div>

            {/* Floating badge — DevOps */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              style={{
                position: 'absolute',
                left: -36,
                bottom: '18%',
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 0.8rem',
                borderRadius: '8px',
                background: 'rgba(4,7,15,0.88)',
                border: '1px solid rgba(16,185,129,0.25)',
                backdropFilter: 'blur(14px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
                minWidth: 128,
              }}
            >
              <FaDocker size={20} style={{ color: '#34d399' }} />
              <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#e2e8f0', margin: 0 }}>DevOps</p>
                <p style={{ fontSize: '0.7rem', color: 'rgba(148,163,184,0.6)', margin: 0 }}>Learning 🚀</p>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>

      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(100,116,139,0.45)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{ width: 1, height: 36, background: 'linear-gradient(180deg, rgba(6,182,212,0.6), transparent)' }}
        />
      </motion.div>

      {/* Spin keyframes for React icon */}
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

    </div>
  );
};

export default Home;