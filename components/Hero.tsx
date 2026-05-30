'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const wordVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 20,
    },
  },
};

/**
 * Full-viewport opening section.
 *
 * Renders the oversized name in two lines using Bebas Neue at a fluid
 * `clamp` size, followed by a sub-tagline and a looping scroll indicator.
 * Each word slides up from below with a staggered spring animation on load.
 */
export default function Hero() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 clamp(1.5rem, 5vw, 5rem) clamp(3rem, 6vw, 6rem)',
        position: 'relative',
      }}
    >
      {/* Name */}
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(80px, 14vw, 200px)',
          lineHeight: 0.9,
          letterSpacing: '-0.01em',
        }}
      >
        {['EMANUELE', 'COLABELLO'].map((word) => (
          <div key={word} style={{ overflow: 'hidden' }}>
            <motion.span variants={wordVariants} style={{ display: 'block' }}>
              {word}
            </motion.span>
          </div>
        ))}
      </div>

      {/* Tagline */}
      <div style={{ overflow: 'hidden', marginTop: '2rem' }}>
        <motion.p
          variants={wordVariants}
          style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1.125rem)',
            color: 'var(--color-muted)',
            maxWidth: '36ch',
          }}
        >
          Front-end Developer —{' '}
          <span style={{ color: 'var(--color-accent)' }}>crafting</span>{' '}
          expressive interfaces with React.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={wordVariants}
        style={{
          position: 'absolute',
          bottom: 'clamp(2rem, 4vw, 4rem)',
          right: 'clamp(1.5rem, 5vw, 5rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--color-muted)',
        }}
      >
        <span
          style={{
            fontSize: '0.6875rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
          }}
        >
          scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: '1rem' }}
        >
          ↓
        </motion.span>
      </motion.div>
    </motion.section>
  );
}
