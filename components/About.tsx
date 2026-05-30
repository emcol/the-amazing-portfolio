'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

const ease = [0.16, 1, 0.3, 1] as const;

const revealProps = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' } as const,
  transition: { duration: 0.8, delay, ease },
});

/**
 * Personal introduction section.
 *
 * Two-column layout: bio text on the left, skills list on the right.
 * Each element fades up as it enters the viewport.
 */
export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(6rem, 12vw, 14rem) clamp(1.5rem, 5vw, 5rem)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      {/* Section label */}
      <motion.p
        {...revealProps(0)}
        style={{
          fontSize: '0.6875rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-muted)',
          marginBottom: '3rem',
        }}
      >
        About
      </motion.p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 30ch), 1fr))',
          gap: 'clamp(3rem, 6vw, 8rem)',
          alignItems: 'start',
        }}
      >
        {/* Bio */}
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <motion.p
            {...revealProps(0.1)}
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              lineHeight: 1.7,
              color: 'var(--color-text)',
            }}
          >
            I&apos;m a front-end developer based in Italy, currently building
            digital experiences at{' '}
            <span style={{ color: 'var(--color-accent)' }}>Nextar S.r.l.</span>{' '}
            — a multi-brand media platform powering Italian digital newspapers.
            My work lives at the intersection of engineering precision and
            visual craft.
          </motion.p>

          <motion.p
            {...revealProps(0.25)}
            style={{
              fontSize: 'clamp(0.9rem, 1.2vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'var(--color-muted)',
            }}
          >
            I started as a junior developer at 21iLab, where I learned that
            clean code and thoughtful design are inseparable. Today I specialise
            in React and TypeScript, with a particular interest in animation,
            performance, and the kind of details users feel but rarely notice.
          </motion.p>
        </div>

        {/* Skills */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}
        >
          {skills.map((skill) => (
            <motion.li
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease },
                },
              }}
              style={{
                padding: '0.375rem 0.875rem',
                border: '1px solid var(--color-border)',
                borderRadius: '999px',
                fontSize: '0.8125rem',
                color: 'var(--color-muted)',
                letterSpacing: '0.04em',
              }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
