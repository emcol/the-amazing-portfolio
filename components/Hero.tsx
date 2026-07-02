'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const rise = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 80, damping: 20 },
  },
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
};

/**
 * Full-viewport opening section.
 *
 * The name is the design: two oversized display lines, the first solid,
 * the second hollow (outline stroke) — a single typographic gesture with
 * no competing elements. A hairline base row carries the tagline and the
 * scroll cue. Words rise on load with a staggered spring.
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
        justifyContent: 'flex-end',
        padding:
          'calc(var(--gutter) + 4.5rem) var(--gutter) clamp(2rem, 4vw, 3.5rem)',
        position: 'relative',
      }}
    >
      {/* Name */}
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.25rem, 14.5vw, 15rem)',
          lineHeight: 0.88,
          letterSpacing: '0.005em',
        }}
      >
        <span style={{ display: 'block', overflow: 'hidden' }}>
          <motion.span variants={rise} style={{ display: 'block' }}>
            EMANUELE
          </motion.span>
        </span>
        <span style={{ display: 'block', overflow: 'hidden' }}>
          <motion.span
            variants={rise}
            className="outline-text"
            style={{ display: 'block' }}
          >
            COLABELLO
          </motion.span>
        </span>
      </h1>

      {/* Base row: tagline + scroll cue */}
      <motion.div
        variants={fade}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: '1.25rem 3rem',
          marginTop: 'clamp(1.75rem, 4vw, 3rem)',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <p
          style={{
            fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)',
            lineHeight: 1.6,
            color: 'var(--color-muted)',
            maxWidth: '38ch',
          }}
        >
          Front-end developer —{' '}
          <span style={{ color: 'var(--color-accent)' }}>crafting</span>{' '}
          expressive interfaces with React.
        </p>

        <a
          href="#about"
          aria-label="Scroll to content"
          data-cursor-grow
          className="link-muted label-mono"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexShrink: 0,
          }}
        >
          Scroll
          <motion.span
            aria-hidden
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
        </a>
      </motion.div>
    </motion.section>
  );
}
