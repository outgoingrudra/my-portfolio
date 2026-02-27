import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCalendar, FaUniversity, FaExternalLinkAlt } from 'react-icons/fa';
import { HiCheckBadge } from 'react-icons/hi2';

const CertificateCard = ({ certificate, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 14,
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(234,179,8,0.35)' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered
          ? '0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(234,179,8,0.08)'
          : '0 4px 20px rgba(0,0,0,0.3)',
        transform: hovered ? 'translateY(-7px)' : 'translateY(0)',
        transition: 'border-color 0.35s, box-shadow 0.35s, transform 0.35s',
        display: 'flex',
        flexDirection: 'column',
      }}
    >

      {/* ── IMAGE ── */}
      <a
        href={certificate.image}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', textDecoration: 'none', flexShrink: 0 }}
      >
        <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
          <img
            src={certificate.image}
            alt={certificate.title}
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
            background: 'linear-gradient(135deg,rgba(234,179,8,0.08),rgba(15,23,42,0.95))',
            alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10,
          }}>
            <FaAward size={40} style={{ color: 'rgba(234,179,8,0.35)' }} />
            <span style={{ fontSize: '0.7rem', color: 'rgba(234,179,8,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Certificate
            </span>
          </div>

          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg,transparent 30%,rgba(4,7,15,0.9) 100%)',
            opacity: hovered ? 1 : 0.65,
            transition: 'opacity 0.35s',
          }} />

          {/* View full badge — appears on hover */}
          <div style={{
            position: 'absolute', top: 12, right: 12,
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '0.3rem 0.75rem',
            borderRadius: 6,
            background: 'rgba(4,7,15,0.85)',
            border: '1px solid rgba(234,179,8,0.3)',
            backdropFilter: 'blur(8px)',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'opacity 0.3s, transform 0.3s',
          }}>
            <FaExternalLinkAlt size={9} style={{ color: '#fde047' }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#fde047', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              View
            </span>
          </div>

          {/* Gold award ribbon — top left */}
          <div style={{
            position: 'absolute', top: 14, left: 14,
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '0.28rem 0.7rem', borderRadius: 99,
            background: 'rgba(234,179,8,0.12)',
            border: '1px solid rgba(234,179,8,0.3)',
            backdropFilter: 'blur(8px)',
          }}>
            <FaAward size={10} style={{ color: '#fde047' }} />
            <span style={{ fontSize: '0.62rem', fontWeight: 700, color: '#fde047', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Certified
            </span>
          </div>

          {/* Ghost index number */}
          <div style={{
            position: 'absolute', bottom: 10, left: 14,
            fontFamily: "'Bebas Neue','Impact',sans-serif",
            fontSize: '3.2rem', lineHeight: 1, letterSpacing: '0.03em',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(234,179,8,0.18)',
            userSelect: 'none',
          }}>
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </a>

      {/* ── CONTENT ── */}
      <div style={{ padding: '1.2rem 1.4rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>

        {/* Title */}
        <h3 style={{
          fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.35,
          marginBottom: '0.7rem', letterSpacing: '0.01em',
          color: hovered ? '#fde047' : '#e2e8f0',
          transition: 'color 0.3s',
        }}>
          {certificate.title}
        </h3>

        {/* Issuer */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: '0.45rem' }}>
          <FaUniversity size={12} style={{ color: '#22d3ee', flexShrink: 0 }} />
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#22d3ee' }}>
            {certificate.issuer}
          </span>
        </div>

        {/* Date */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: '0.85rem' }}>
          <FaCalendar size={11} style={{ color: 'rgba(100,116,139,0.7)', flexShrink: 0 }} />
          <span style={{ fontSize: '0.75rem', color: 'rgba(100,116,139,0.7)' }}>
            {certificate.date}
          </span>
        </div>

        {/* Description */}
        <p style={{
          fontSize: '0.78rem', color: 'rgba(148,163,184,0.6)',
          lineHeight: 1.75, flex: 1, marginBottom: '1.1rem',
          display: '-webkit-box', WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {certificate.description}
        </p>

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Verified badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            padding: '0.28rem 0.75rem', borderRadius: 99,
            background: 'rgba(234,179,8,0.07)',
            border: '1px solid rgba(234,179,8,0.2)',
          }}>
            <span style={{ color: '#fde047', display: 'flex' }}>
              <FaAward size={11} />
            </span>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#fde047', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Verified
            </span>
          </div>

          {/* View link */}
          <a
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              fontSize: '0.72rem', fontWeight: 600, textDecoration: 'none',
              color: 'rgba(148,163,184,0.55)',
              transition: 'color 0.25s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#fde047'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(148,163,184,0.55)'}
          >
            <FaExternalLinkAlt size={10} /> View Full
          </a>
        </div>
      </div>

      {/* Bottom glow bar on hover — gold */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg,transparent,#eab308,#fde047,transparent)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s',
      }} />

    </motion.div>
  );
};

export default CertificateCard;