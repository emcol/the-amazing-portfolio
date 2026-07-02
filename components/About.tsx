'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

const ease = [0.16, 1, 0.3, 1] as const;

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' } as const,
  transition: { duration: 0.8, delay, ease },
});

/**
 * Personal introduction section.
 *
 * A mono micro-label opens the section, a large statement line sets the
 * tone, then body copy and a ruled skills ledger — the same hairline
 * language as the work rows, so the whole page reads as one system.
 */
export default function About() {
  return (
    <section id="about" className="section">
      <motion.p {...reveal(0)} className="label-mono">
        <span className="label-mono__index">(01)</span> About
      </motion.p>

      <motion.p
        {...reveal(0.05)}
        style={{
          fontSize: 'clamp(1.5rem, 3.2vw, 2.5rem)',
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
          maxWidth: '24ch',
          marginTop: 'clamp(1.75rem, 4vw, 3rem)',
          textWrap: 'balance',
        }}
      >
        Engineering precision, met with{' '}
        <span style={{ color: 'var(--color-accent)' }}>visual craft</span>.
      </motion.p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 32ch), 1fr))',
          gap: 'clamp(2.5rem, 6vw, 7rem)',
          alignItems: 'start',
          marginTop: 'clamp(2.5rem, 5vw, 4.5rem)',
        }}
      >
        {/* Bio */}
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <motion.p
            {...reveal(0.1)}
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
              lineHeight: 1.7,
              maxWidth: '54ch',
            }}
          >
            I&apos;m a front-end developer based in Italy, currently building
            digital experiences at{' '}
            <span style={{ color: 'var(--color-accent)' }}>Nextar S.r.l.</span>{' '}
            — a multi-brand platform powering Italian digital newspapers.
          </motion.p>

          <motion.p
            {...reveal(0.15)}
            style={{
              fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'var(--color-muted)',
              maxWidth: '54ch',
            }}
          >
            I started out at 21iLab, where I learned that clean code and
            thoughtful design are inseparable. Today I specialise in React and
            TypeScript, with a particular interest in animation, performance,
            and the details users feel but rarely notice.
          </motion.p>
        </div>

        {/* Skills ledger */}
        <div>
          <motion.p {...reveal(0.1)} className="label-mono">
            Toolkit
          </motion.p>
          <motion.ul
            {...reveal(0.15)}
            className="skills-list"
            style={{ marginTop: '1rem' }}
          >
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
