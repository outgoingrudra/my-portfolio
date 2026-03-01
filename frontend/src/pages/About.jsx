import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaHeart, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { personalInfo, skills, education, experience, interests } from '../assets/assets';

// ── Skill category config ──────────────────────────────────────────────────────
const skillCategories = [
  { key: 'frontend',  label: 'Frontend',     accent: '#22d3ee', bar: 'linear-gradient(90deg,#0891b2,#22d3ee)' },
  { key: 'backend',   label: 'Backend',      accent: '#34d399', bar: 'linear-gradient(90deg,#059669,#34d399)' },
  { key: 'database',  label: 'Database',     accent: '#a78bfa', bar: 'linear-gradient(90deg,#7c3aed,#a78bfa)' },
  { key: 'learning',  label: 'Learning 🚀',  accent: '#fb923c', bar: 'linear-gradient(90deg,#ea580c,#fb923c)' },
  { key: 'languages', label: 'Languages',    accent: '#f472b6', bar: 'linear-gradient(90deg,#db2777,#f472b6)' },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

// ── Sub-components ─────────────────────────────────────────────────────────────

const SkillBar = ({ skill, index, bar, accent }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
      <span style={{ fontSize: '0.82rem', color: 'rgba(203,213,225,0.85)', fontWeight: 500 }}>{skill.name}</span>
      <span style={{ fontSize: '0.75rem', color: accent, fontWeight: 700 }}>{skill.level}%</span>
    </div>
    <div style={{ width: '100%', height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 99 }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
        transition={{ duration: 1, delay: 0.1 + index * 0.06, ease: 'easeOut' }}
        style={{ height: '100%', borderRadius: 99, background: bar, boxShadow: `0 0 8px ${accent}55` }}
      />
    </div>
  </div>
);

const SectionHeading = ({ icon, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: 38, height: 38, borderRadius: 8, flexShrink: 0,
      background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', color: '#22d3ee',
    }}>
      {icon}
    </div>
    <h2 style={{
      fontFamily: "'Bebas Neue','Impact',sans-serif",
      fontSize: 'clamp(1.4rem,4vw,1.8rem)', letterSpacing: '0.08em', lineHeight: 1,
      background: 'linear-gradient(135deg,#f1f5f9 0%,#7dd3fc 60%,#22d3ee 100%)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      margin: 0,
    }}>
      {label}
    </h2>
    <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,rgba(6,182,212,0.3),transparent)', marginLeft: 4, minWidth: 0 }} />
  </div>
);

const Card = ({ children, style = {} }) => (
  <div
    style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 12,
      padding: '1.25rem',
      transition: 'border-color 0.3s',
      width: '100%',
      boxSizing: 'border-box',
      ...style,
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(6,182,212,0.25)'}
    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
  >
    {children}
  </div>
);

// ── Page ───────────────────────────────────────────────────────────────────────

const About = () => {
  const [activeSkillTab, setActiveSkillTab] = useState('frontend');
  const activeCategory = skillCategories.find(c => c.key === activeSkillTab);

  return (
    <div style={{ minHeight: '100vh', background: '#04070f', padding: '5rem 1rem 4rem', overflowX: 'hidden' }}>

      {/* ── BACKGROUND GLOWS ── */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, left: '-15%', top: '10%', background: 'radial-gradient(circle,rgba(6,182,212,0.06) 0%,transparent 70%)', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', width: 500, height: 500, right: '-15%', bottom: '0%', background: 'radial-gradient(circle,rgba(59,130,246,0.05) 0%,transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div style={{ maxWidth: '72rem', margin: '0 auto', position: 'relative', zIndex: 1, width: '100%', boxSizing: 'border-box' }}>

        {/* ── PAGE HEADER ── */}
        <motion.div {...fade(0)} style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(148,163,184,0.45)', marginBottom: '0.6rem' }}>
            Get to know me
          </p>
          <h1 style={{
            fontFamily: "'Bebas Neue','Impact',sans-serif",
            fontSize: 'clamp(2.8rem,10vw,6rem)',
            fontWeight: 900, lineHeight: 0.9, letterSpacing: '0.04em',
            background: 'linear-gradient(135deg,#f1f5f9 0%,#7dd3fc 50%,#22d3ee 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            margin: 0,
          }}>
            ABOUT<br />ME
          </h1>
        </motion.div>

        {/* ── BIO CARD ── */}
        <motion.div {...fade(0.1)} style={{ marginBottom: '3rem' }}>
          <Card style={{ padding: '1.5rem' }}>

            {/* Name + title */}
            <div style={{ marginBottom: '1rem' }}>
              <h2 style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: 'clamp(1.6rem,6vw,2.2rem)', letterSpacing: '0.06em', color: '#f1f5f9', marginBottom: 4, lineHeight: 1.1 }}>
                {personalInfo.name}
              </h2>
              <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#22d3ee', marginBottom: 2 }}>{personalInfo.title}</p>
              <p style={{ fontSize: '0.82rem', color: 'rgba(103,232,249,0.7)' }}>{personalInfo.subtitle}</p>
            </div>

            {/* Status badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '0.28rem 0.7rem', borderRadius: 99, fontSize: '0.7rem', fontWeight: 600, background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.22)', color: '#67e8f9' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22d3ee', display: 'inline-block', flexShrink: 0, animation: 'pulse 2s infinite' }} />
                {personalInfo.currentStatus}
              </span>
              <span style={{ padding: '0.28rem 0.7rem', borderRadius: 99, fontSize: '0.7rem', fontWeight: 600, background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.22)', color: '#6ee7b7' }}>
                {personalInfo.availability}
              </span>
              <span style={{ padding: '0.28rem 0.7rem', borderRadius: 99, fontSize: '0.7rem', fontWeight: 600, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.22)', color: '#a5b4fc' }}>
                {personalInfo.lookingFor}
              </span>
            </div>

            {/* Bio */}
            <p style={{ color: 'rgba(148,163,184,0.75)', lineHeight: 1.8, fontSize: '0.88rem', marginBottom: '1.25rem' }}>
              {personalInfo.bio}
            </p>

            {/* Quick Stats — always 2 cols */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '0.6rem', marginBottom: '1.25rem' }}>
              {personalInfo.stats.map(({ label, value }) => (
                <div key={label} style={{
                  padding: '0.7rem 0.5rem', borderRadius: 8, textAlign: 'center',
                  background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.12)',
                }}>
                  <p style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: 'clamp(1.2rem,4vw,1.5rem)', letterSpacing: '0.05em', color: '#22d3ee', lineHeight: 1, margin: 0 }}>{value}</p>
                  <p style={{ fontSize: '0.58rem', color: 'rgba(148,163,184,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 3 }}>{label}</p>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {[
                { icon: <FaMapMarkerAlt size={11} />, text: personalInfo.location },
                { icon: <FaEnvelope size={11} />, text: personalInfo.email },
                { icon: <FaPhone size={11} />, text: personalInfo.phone },
              ].map(({ icon, text }) => (
                <span key={text} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '0.78rem', color: 'rgba(148,163,184,0.6)' }}>
                  <span style={{ color: '#22d3ee', flexShrink: 0 }}>{icon}</span>
                  <span style={{ wordBreak: 'break-all' }}>{text}</span>
                </span>
              ))}
            </div>

            {/* Download CV */}
            <a
              href={personalInfo.resumeLink}
              download
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '0.7rem 1.5rem', fontSize: '0.73rem', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none',
                color: '#fff', borderRadius: 4,
                background: 'linear-gradient(135deg,#0891b2,#2563eb)',
                boxShadow: '0 0 20px rgba(6,182,212,0.28)',
                transition: 'box-shadow 0.3s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 36px rgba(6,182,212,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(6,182,212,0.28)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <HiDownload size={15} />
              Download Resume
            </a>
          </Card>
        </motion.div>

        {/* ── SKILLS ── */}
        <motion.div {...fade(0.2)} style={{ marginBottom: '3rem' }}>
          <SectionHeading icon={<FaCode size={16} />} label="Technical Skills" />

          {/* Tabs — horizontally scrollable on mobile */}
          <div style={{
            display: 'flex', gap: '0.4rem', marginBottom: '1.25rem',
            overflowX: 'auto', paddingBottom: '4px',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin',
          }}>
            {skillCategories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveSkillTab(cat.key)}
                style={{
                  padding: '0.38rem 0.8rem', fontSize: '0.68rem', fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 4,
                  cursor: 'pointer', transition: 'all 0.25s',
                  whiteSpace: 'nowrap', flexShrink: 0,
                  background: activeSkillTab === cat.key ? 'rgba(6,182,212,0.12)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${activeSkillTab === cat.key ? cat.accent + '55' : 'rgba(255,255,255,0.07)'}`,
                  color: activeSkillTab === cat.key ? cat.accent : 'rgba(148,163,184,0.6)',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Active skill panel */}
          <motion.div
            key={activeSkillTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,220px),1fr))', gap: '1.1rem' }}>
                {skills[activeCategory.key]?.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} bar={activeCategory.bar} accent={activeCategory.accent} />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Tools chips */}
          <div style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(100,116,139,0.55)', marginBottom: '0.6rem' }}>
              Tools & Environment
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {skills.tools.map((tool, i) => (
                <motion.span
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04 }}
                  style={{
                    padding: '0.32rem 0.75rem', fontSize: '0.7rem', fontWeight: 600,
                    borderRadius: 4, color: 'rgba(203,213,225,0.8)',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 0.25s', cursor: 'default',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#22d3ee'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)'; e.currentTarget.style.background = 'rgba(6,182,212,0.07)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(203,213,225,0.8)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                >
                  {tool.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── EDUCATION & EXPERIENCE ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: '2rem', marginBottom: '3rem' }}>

          {/* Education */}
          <motion.div {...fade(0.3)} style={{ minWidth: 0 }}>
            <SectionHeading icon={<FaGraduationCap size={16} />} label="Education" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {education.map((edu, i) => (
                <Card key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                    <h3 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#e2e8f0', lineHeight: 1.3, margin: 0 }}>{edu.degree}</h3>
                    {edu.grade && (
                      <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.18rem 0.5rem', borderRadius: 99, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#6ee7b7', whiteSpace: 'nowrap', flexShrink: 0 }}>
                        {edu.grade}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#22d3ee', fontWeight: 600, marginBottom: 3 }}>{edu.institution}</p>
                  <p style={{ fontSize: '0.7rem', color: 'rgba(100,116,139,0.75)', marginBottom: 6 }}>{edu.duration} · {edu.location}</p>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(148,163,184,0.62)', lineHeight: 1.6, margin: 0 }}>{edu.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div {...fade(0.35)} style={{ minWidth: 0 }}>
            <SectionHeading icon={<FaBriefcase size={16} />} label="Experience" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {experience.map((exp, i) => (
                <Card key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                    <h3 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#e2e8f0', lineHeight: 1.3, margin: 0 }}>{exp.role}</h3>
                    <span style={{ fontSize: '0.65rem', color: 'rgba(100,116,139,0.65)', whiteSpace: 'nowrap', flexShrink: 0 }}>{exp.duration}</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#22d3ee', fontWeight: 600, marginBottom: 6 }}>{exp.company}</p>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(148,163,184,0.62)', lineHeight: 1.6, marginBottom: exp.achievements ? 8 : 0 }}>{exp.description}</p>
                  {exp.achievements && (
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {exp.achievements.map((a, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontSize: '0.75rem', color: 'rgba(148,163,184,0.6)' }}>
                          <span style={{ color: '#22d3ee', marginTop: 3, flexShrink: 0 }}>▸</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── INTERESTS ── */}
        <motion.div {...fade(0.45)}>
          <SectionHeading icon={<FaHeart size={15} />} label="Interests & Hobbies" />
          <Card>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {interests.map((interest, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.04 }}
                  style={{
                    padding: '0.42rem 0.9rem', fontSize: '0.76rem', fontWeight: 600,
                    borderRadius: 99, cursor: 'default',
                    background: 'linear-gradient(135deg,rgba(6,182,212,0.08),rgba(59,130,246,0.08))',
                    border: '1px solid rgba(6,182,212,0.18)',
                    color: 'rgba(147,213,234,0.9)',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg,rgba(6,182,212,0.18),rgba(59,130,246,0.18))'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg,rgba(6,182,212,0.08),rgba(59,130,246,0.08))'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.18)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </Card>
        </motion.div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { height: 3px; width: 3px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(6,182,212,0.3); border-radius: 99px; }
      `}</style>
    </div>
  );
};

export default About;