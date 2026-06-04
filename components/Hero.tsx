'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const rise = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 80, damping: 20 },
  },
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const meta: { label: string; value: string }[] = [
  { label: 'Role', value: 'Front-end Developer' },
  { label: 'Based in', value: 'Italy' },
  { label: 'Focus', value: 'React · TypeScript · Motion' },
];

/**
 * Full-viewport opening section.
 *
 * Establishes hierarchy top-to-bottom: an availability badge, the oversized
 * name, a one-line tagline, and an editorial meta row (role / location /
 * focus). Words rise on load with a staggered spring; everything is sized
 * with fluid `clamp()` so the name never overflows on small screens.
 */
export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '3rem',
        padding:
          'calc(var(--gutter) + 4.5rem) var(--gutter) clamp(2rem, 5vw, 4rem)',
        position: 'relative',
      }}
    >
      {/* Availability badge */}
      <motion.div
        variants={fade}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          alignSelf: 'flex-start',
          fontSize: '0.6875rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-muted)',
        }}
      >
        <motion.span
          aria-hidden
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--color-accent)',
            boxShadow: '0 0 12px var(--color-accent)',
          }}
        />
        Available for work — 2025
      </motion.div>

      {/* Name + tagline */}
      <div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 13vw, 12.5rem)',
            lineHeight: 0.86,
            letterSpacing: '-0.01em',
          }}
        >
          {['EMANUELE', 'COLABELLO'].map((word, i) => (
            <span key={word} style={{ display: 'block', overflow: 'hidden' }}>
              <motion.span
                variants={rise}
                style={{
                  display: 'block',
                  color: i === 1 ? 'var(--color-muted)' : 'var(--color-text)',
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <div style={{ overflow: 'hidden', marginTop: '1.75rem' }}>
          <motion.p
            variants={rise}
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.375rem)',
              lineHeight: 1.5,
              color: 'var(--color-text)',
              maxWidth: '34ch',
            }}
          >
            Front-end developer{' '}
            <span style={{ color: 'var(--color-accent)' }}>crafting</span>{' '}
            expressive, high-performance interfaces with React.
          </motion.p>
        </div>
      </div>

      {/* Meta row + scroll cue */}
      <motion.div
        variants={fade}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '2rem',
          borderTop: '1px solid var(--color-border)',
          paddingTop: '1.5rem',
        }}
      >
        <dl
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem clamp(2rem, 5vw, 4rem)',
            margin: 0,
          }}
        >
          {meta.map(({ label, value }) => (
            <div key={label}>
              <dt
                style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  marginBottom: '0.35rem',
                }}
              >
                {label}
              </dt>
              <dd
                style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  color: 'var(--color-text)',
                }}
              >
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <motion.a
          href="#about"
          aria-label="Scroll to content"
          data-cursor-grow
          className="link-muted"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.6875rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          Scroll
          <motion.span
            aria-hidden
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
