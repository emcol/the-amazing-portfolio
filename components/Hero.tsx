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
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

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
          'calc(var(--gutter) + 4.5rem) var(--gutter) clamp(2.5rem, 5vw, 4.5rem)',
        position: 'relative',
      }}
    >
      {/* Name */}
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.5rem, 13vw, 13rem)',
          lineHeight: 0.88,
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

      {/* Tagline + scroll cue */}
      <motion.div
        variants={fade}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: '1.5rem 3rem',
          marginTop: '2rem',
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
          className="link-muted"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.6875rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            flexShrink: 0,
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
        </a>
      </motion.div>
    </motion.section>
  );
}
