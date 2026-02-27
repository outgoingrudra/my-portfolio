import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { HiPaperAirplane } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

// ── Helpers ───────────────────────────────────────────────────────────────────

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

// ── Shared input style ────────────────────────────────────────────────────────

const inputBase = {
  width: '100%',
  padding: '0.8rem 1rem',
  fontSize: '0.875rem',
  color: '#e2e8f0',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 6,
  outline: 'none',
  transition: 'border-color 0.25s, box-shadow 0.25s',
  boxSizing: 'border-box',
};

const labelStyle = {
  display: 'block',
  fontSize: '0.72rem',
  fontWeight: 700,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'rgba(148,163,184,0.65)',
  marginBottom: '0.5rem',
};

// ── Field component ───────────────────────────────────────────────────────────

const Field = ({ label, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <label style={labelStyle}>{label}</label>
    {children}
  </div>
);

// ── Contact ───────────────────────────────────────────────────────────────────

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name:  formData.name,
        from_email: formData.email,
        subject:    formData.subject,
        message:    formData.message,
        to_email:   'vrudra671@gmail.com',
      }, PUBLIC_KEY);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Email send error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const getFieldStyle = (name) => ({
    ...inputBase,
    borderColor: focusedField === name ? 'rgba(6,182,212,0.5)' : 'rgba(255,255,255,0.08)',
    boxShadow:   focusedField === name ? '0 0 0 3px rgba(6,182,212,0.08)' : 'none',
  });

  const contactInfo = [
    { icon: <FaEnvelope size={16} />, label: 'Email',    value: 'vrudra671@gmail.com',  link: 'mailto:vrudra671@gmail.com' },
    { icon: <FaPhone    size={16} />, label: 'Phone',    value: '+91 6291985921',        link: 'tel:+916291985921'          },
    { icon: <FaMapMarkerAlt size={15} />, label: 'Location', value: 'Kolkata, India',   link: null                         },
  ];

  const socialLinks = [
    { icon: <FaGithub   size={20} />, label: 'GitHub',   link: 'https://github.com/outgoingrudra',                accentRgb: '148,163,184' },
    { icon: <FaLinkedin size={20} />, label: 'LinkedIn',  link: 'https://linkedin.com/in/rudra-verma-33258a2a3',  accentRgb: '59,130,246'  },
    { icon: <FaEnvelope size={20} />, label: 'Email',     link: 'mailto:vrudra671@gmail.com',                     accentRgb: '6,182,212'   },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#04070f', padding: '6rem 1.5rem 5rem' }}>

      {/* ── BACKGROUND GLOWS ── */}
      <div className="pointer-events-none fixed inset-0 z-0" style={{ overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 700, height: 700, left: '-15%', top: '10%',
          background: 'radial-gradient(circle,rgba(6,182,212,0.07) 0%,transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', width: 600, height: 600, right: '-10%', bottom: '0%',
          background: 'radial-gradient(circle,rgba(59,130,246,0.06) 0%,transparent 70%)', filter: 'blur(55px)' }} />
      </div>

      <div style={{ maxWidth: '72rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── PAGE HEADER ── */}
        <motion.div {...fade(0)} style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase',
            color: 'rgba(148,163,184,0.4)', marginBottom: '0.75rem' }}>
            Let's connect
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <h1 style={{
              fontFamily: "'Bebas Neue','Impact',sans-serif",
              fontSize: 'clamp(3rem,8vw,6rem)',
              fontWeight: 900, lineHeight: 0.88, letterSpacing: '0.04em',
              background: 'linear-gradient(135deg,#f1f5f9 0%,#7dd3fc 50%,#22d3ee 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              GET IN<br />TOUCH
            </h1>
            {/* Availability pill */}
            <div style={{ paddingBottom: '0.5rem' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '0.5rem 1.1rem', borderRadius: 99,
                background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.22)',
                fontSize: '0.78rem', fontWeight: 600, color: '#6ee7b7',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399',
                  display: 'inline-block', animation: 'pulse 2s infinite' }} />
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, marginTop: '2rem',
            background: 'linear-gradient(90deg,rgba(6,182,212,0.45),rgba(59,130,246,0.2),transparent)' }} />
        </motion.div>

        {/* ── MAIN GRID ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem' }}>

          {/* ── LEFT: Info panel ── */}
          <motion.div {...fade(0.1)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Intro */}
            <div style={{
              padding: '1.5rem', borderRadius: 12,
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
            }}>
              <p style={{ fontSize: '0.95rem', color: 'rgba(148,163,184,0.75)', lineHeight: 1.8 }}>
                Have a project in mind, a role to fill, or just want to say hello?
                I'm always open to interesting conversations.
              </p>
            </div>

            {/* Contact info rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {contactInfo.map((info, i) => {
                const inner = (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                      background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.18)',
                      color: '#22d3ee',
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em',
                        textTransform: 'uppercase', color: 'rgba(100,116,139,0.6)', marginBottom: 2 }}>
                        {info.label}
                      </p>
                      <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0' }}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                );

                const cardStyle = {
                  padding: '0.9rem 1.1rem', borderRadius: 10,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  textDecoration: 'none', display: 'block',
                  transition: 'border-color 0.25s, background 0.25s',
                };

                return info.link ? (
                  <a key={i} href={info.link} style={cardStyle}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)'; e.currentTarget.style.background = 'rgba(6,182,212,0.04)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={i} style={cardStyle}>{inner}</div>
                );
              })}
            </div>

            {/* Social links */}
            <div style={{
              padding: '1.25rem', borderRadius: 12,
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
            }}>
              <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'rgba(100,116,139,0.55)', marginBottom: '0.85rem' }}>
                Find me on
              </p>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                {socialLinks.map(({ icon, label, link, accentRgb }) => (
                  <a
                    key={label}
                    href={link}
                    target={link.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: 44, height: 44, borderRadius: 8,
                      color: 'rgba(148,163,184,0.6)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = `rgb(${accentRgb})`;
                      e.currentTarget.style.background = `rgba(${accentRgb},0.1)`;
                      e.currentTarget.style.borderColor = `rgba(${accentRgb},0.35)`;
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
              </div>
            </div>

          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div {...fade(0.2)} style={{ gridColumn: 'span 2' }}
            className="md:col-span-2"
          >
            <div style={{
              padding: '2rem', borderRadius: 14,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}>

              {/* Form header */}
              <div style={{ marginBottom: '1.75rem' }}>
                <p style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0' }}>
                  Send a message
                </p>
                <p style={{ fontSize: '0.78rem', color: 'rgba(148,163,184,0.5)', marginTop: 4 }}>
                  I'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
                  className="grid-cols-1 sm:grid-cols-2"
                >
                  <Field label="Your Name">
                    <input
                      type="text" name="name" value={formData.name}
                      onChange={handleChange} required placeholder="Rudra Verma"
                      style={getFieldStyle('name')}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </Field>
                  <Field label="Your Email">
                    <input
                      type="email" name="email" value={formData.email}
                      onChange={handleChange} required placeholder="you@example.com"
                      style={getFieldStyle('email')}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </Field>
                </div>

                {/* Subject */}
                <Field label="Subject">
                  <input
                    type="text" name="subject" value={formData.subject}
                    onChange={handleChange} required placeholder="Project inquiry / Internship / Hello"
                    style={getFieldStyle('subject')}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                  />
                </Field>

                {/* Message */}
                <Field label="Message">
                  <textarea
                    name="message" value={formData.message}
                    onChange={handleChange} required rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    style={{
                      ...getFieldStyle('message'),
                      resize: 'none',
                      lineHeight: 1.7,
                    }}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                  />
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    width: '100%', padding: '0.9rem',
                    fontSize: '0.78rem', fontWeight: 700,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: '#fff', borderRadius: 6, border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    background: isSubmitting
                      ? 'rgba(6,182,212,0.3)'
                      : 'linear-gradient(135deg,#0891b2,#2563eb)',
                    boxShadow: isSubmitting ? 'none' : '0 0 24px rgba(6,182,212,0.3)',
                    opacity: isSubmitting ? 0.7 : 1,
                    transition: 'box-shadow 0.3s, transform 0.2s, opacity 0.3s',
                  }}
                  onMouseEnter={e => { if (!isSubmitting) { e.currentTarget.style.boxShadow = '0 0 40px rgba(6,182,212,0.55)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 24px rgba(6,182,212,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: 16, height: 16, borderRadius: '50%',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: '#fff',
                        animation: 'spin 0.7s linear infinite',
                      }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane size={16} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      style={{
                        padding: '0.9rem 1.1rem', borderRadius: 8, textAlign: 'center',
                        background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)',
                        color: '#6ee7b7', fontSize: '0.85rem', fontWeight: 600,
                      }}
                    >
                      ✓ Message sent! I'll get back to you soon.
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      style={{
                        padding: '0.9rem 1.1rem', borderRadius: 8, textAlign: 'center',
                        background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)',
                        color: '#fca5a5', fontSize: '0.85rem', fontWeight: 600,
                      }}
                    >
                      ✗ Failed to send. Please email me directly at vrudra671@gmail.com
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </motion.div>

        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes spin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        input::placeholder, textarea::placeholder { color: rgba(100,116,139,0.5); }
        input, textarea { color-scheme: dark; }
      `}</style>
    </div>
  );
};

export default Contact;