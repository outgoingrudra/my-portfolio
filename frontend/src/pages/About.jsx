import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaHeart, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { personalInfo, skills, education, experience, interests } from '../assets/assets';

// ── Skill category config ──
const skillCategories = [
  { key: 'frontend',  label: 'Frontend',  accent: '#22d3ee', bar: 'linear-gradient(90deg,#0891b2,#22d3ee)' },
  { key: 'backend',   label: 'Backend',   accent: '#34d399', bar: 'linear-gradient(90deg,#059669,#34d399)' },
  { key: 'database',  label: 'Database',  accent: '#a78bfa', bar: 'linear-gradient(90deg,#7c3aed,#a78bfa)' },
  { key: 'learning',  label: 'Learning 🚀', accent: '#fb923c', bar: 'linear-gradient(90deg,#ea580c,#fb923c)' },
  { key: 'languages', label: 'Languages', accent: '#f472b6', bar: 'linear-gradient(90deg,#db2777,#f472b6)' },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const SkillBar = ({ skill, index, bar, accent }) => (
  <div key={skill.name}>
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
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: 40, height: 40, borderRadius: 8,
      background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', color: '#22d3ee',
    }}>
      {icon}
    </div>
    <div>
      <h2 style={{
        fontFamily: "'Bebas Neue','Impact',sans-serif",
        fontSize: '1.8rem', letterSpacing: '0.08em', lineHeight: 1,
        background: 'linear-gradient(135deg,#f1f5f9 0%,#7dd3fc 60%,#22d3ee 100%)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      }}>
        {label}
      </h2>
    </div>
    <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,rgba(6,182,212,0.3),transparent)', marginLeft: 8 }} />
  </div>
);

const Card = ({ children, style = {} }) => (
  <div style={{
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: 12,
    padding: '1.5rem',
    transition: 'border-color 0.3s',
    ...style,
  }}
    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(6,182,212,0.25)'}
    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
  >
    {children}
  </div>
);

const About = () => {
  const [activeSkillTab, setActiveSkillTab] = useState('frontend');
  const activeCategory = skillCategories.find(c => c.key === activeSkillTab);

  return (
    <div style={{ minHeight: '100vh', background: '#04070f', padding: '6rem 1.5rem 4rem' }}>

      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0 z-0" style={{ overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 600, height: 600, left: '-10%', top: '10%', background: 'radial-gradient(circle,rgba(6,182,212,0.06) 0%,transparent 70%)', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', width: 700, height: 700, right: '-15%', bottom: '0%', background: 'radial-gradient(circle,rgba(59,130,246,0.05) 0%,transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div style={{ maxWidth: '72rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── PAGE HEADER ── */}
        <motion.div {...fade(0)} style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(148,163,184,0.5)', marginBottom: '0.75rem' }}>
            Get to know me
          </p>
          <h1 style={{
            fontFamily: "'Bebas Neue','Impact',sans-serif",
            fontSize: 'clamp(3rem,8vw,6rem)',
            fontWeight: 900, lineHeight: 0.9, letterSpacing: '0.04em',
            background: 'linear-gradient(135deg,#f1f5f9 0%,#7dd3fc 50%,#22d3ee 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            ABOUT<br />ME
          </h1>
        </motion.div>

        {/* ── BIO CARD ── */}
        <motion.div {...fade(0.1)} style={{ marginBottom: '4rem' }}>
          <Card style={{ padding: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start' }}>
              <div>
                {/* Name + title */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <h2 style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '2.2rem', letterSpacing: '0.06em', color: '#f1f5f9', marginBottom: 4 }}>
                    {personalInfo.name}
                  </h2>
                  <p style={{ fontSize: '1rem', fontWeight: 700, color: '#22d3ee', marginBottom: 2 }}>{personalInfo.title}</p>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(103,232,249,0.7)' }}>{personalInfo.subtitle}</p>
                </div>

                {/* Status badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.35rem 0.85rem', borderRadius: 99, fontSize: '0.75rem', fontWeight: 600, background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.22)', color: '#67e8f9' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                    {personalInfo.currentStatus}
                  </span>
                  <span style={{ padding: '0.35rem 0.85rem', borderRadius: 99, fontSize: '0.75rem', fontWeight: 600, background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.22)', color: '#6ee7b7' }}>
                    {personalInfo.availability}
                  </span>
                  <span style={{ padding: '0.35rem 0.85rem', borderRadius: 99, fontSize: '0.75rem', fontWeight: 600, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.22)', color: '#a5b4fc' }}>
                    {personalInfo.lookingFor}
                  </span>
                </div>

                {/* Bio */}
                <p style={{ color: 'rgba(148,163,184,0.75)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: 600 }}>
                  {personalInfo.bio}
                </p>

                {/* Contact info row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.75rem' }}>
                  {[
                    { icon: <FaMapMarkerAlt size={12} />, text: personalInfo.location },
                    { icon: <FaEnvelope size={12} />, text: personalInfo.email },
                    { icon: <FaPhone size={12} />, text: personalInfo.phone },
                  ].map(({ icon, text }) => (
                    <span key={text} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', color: 'rgba(148,163,184,0.6)' }}>
                      <span style={{ color: '#22d3ee' }}>{icon}</span>
                      {text}
                    </span>
                  ))}
                </div>

                {/* Download CV */}
                <a
                  href={personalInfo.resumeLink}
                  download
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '0.75rem 1.75rem', fontSize: '0.78rem', fontWeight: 700,
                    letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none',
                    color: '#fff', borderRadius: 4,
                    background: 'linear-gradient(135deg,#0891b2,#2563eb)',
                    boxShadow: '0 0 24px rgba(6,182,212,0.3)',
                    transition: 'box-shadow 0.3s, transform 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 40px rgba(6,182,212,0.55)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 24px rgba(6,182,212,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <HiDownload size={18} />
                  Download Resume
                </a>
              </div>

              {/* Quick Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', minWidth: 200 }}
                className="hidden md:grid"
              >
                {personalInfo.stats.map(({ label, value }) => (
                  <div key={label} style={{
                    padding: '1rem', borderRadius: 8, textAlign: 'center',
                    background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.12)',
                  }}>
                    <p style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '1.6rem', letterSpacing: '0.05em', color: '#22d3ee', lineHeight: 1 }}>{value}</p>
                    <p style={{ fontSize: '0.65rem', color: 'rgba(148,163,184,0.55)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* ── SKILLS ── */}
        <motion.div {...fade(0.2)} style={{ marginBottom: '4rem' }}>
          <SectionHeading icon={<FaCode size={18} />} label="Technical Skills" />

          {/* Tab switcher */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {skillCategories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveSkillTab(cat.key)}
                style={{
                  padding: '0.45rem 1rem', fontSize: '0.75rem', fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: 4,
                  cursor: 'pointer', transition: 'all 0.25s',
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Card>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
                {skills[activeCategory.key]?.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} bar={activeCategory.bar} accent={activeCategory.accent} />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Tools as chips */}
          <div style={{ marginTop: '1.25rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(100,116,139,0.6)', marginBottom: '0.75rem' }}>
              Tools & Environment
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {skills.tools.map((tool, i) => (
                <motion.span
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    padding: '0.4rem 0.9rem', fontSize: '0.75rem', fontWeight: 600,
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '3rem', marginBottom: '4rem' }}>

          {/* Education */}
          <motion.div {...fade(0.3)}>
            <SectionHeading icon={<FaGraduationCap size={18} />} label="Education" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {education.map((edu, i) => (
                <Card key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e2e8f0' }}>{edu.degree}</h3>
                    {edu.grade && (
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: 99, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#6ee7b7', whiteSpace: 'nowrap', marginLeft: 8 }}>
                        {edu.grade}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#22d3ee', fontWeight: 600, marginBottom: 4 }}>{edu.institution}</p>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(100,116,139,0.8)', marginBottom: 8 }}>{edu.duration} · {edu.location}</p>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(148,163,184,0.65)', lineHeight: 1.6 }}>{edu.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div {...fade(0.35)}>
            <SectionHeading icon={<FaBriefcase size={18} />} label="Experience" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {experience.map((exp, i) => (
                <Card key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e2e8f0' }}>{exp.role}</h3>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(100,116,139,0.7)', whiteSpace: 'nowrap', marginLeft: 8 }}>{exp.duration}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#22d3ee', fontWeight: 600, marginBottom: 8 }}>{exp.company}</p>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(148,163,184,0.65)', lineHeight: 1.6, marginBottom: exp.achievements ? 10 : 0 }}>{exp.description}</p>
                  {exp.achievements && (
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {exp.achievements.map((a, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.78rem', color: 'rgba(148,163,184,0.6)' }}>
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
          <SectionHeading icon={<FaHeart size={16} />} label="Interests & Hobbies" />
          <Card>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {interests.map((interest, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  style={{
                    padding: '0.5rem 1.1rem', fontSize: '0.8rem', fontWeight: 600,
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
      `}</style>
    </div>
  );
};

export default About;