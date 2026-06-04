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
 * A lead statement sets the tone, a supporting paragraph adds context, and
 * a labelled skills list anchors the right column. The lead is the largest
 * body type on the page, establishing a clear reading hierarchy.
 */
export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 32ch), 1fr))',
            gap: 'clamp(2.5rem, 6vw, 8rem)',
            alignItems: 'start',
          }}
        >
          {/* Bio */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <motion.p
              {...reveal(0)}
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
                maxWidth: '20ch',
                textWrap: 'balance',
              }}
            >
              Engineering precision, met with visual craft.
            </motion.p>

            <motion.p
              {...reveal(0.1)}
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.1875rem)',
                lineHeight: 1.7,
                color: 'var(--color-text)',
                maxWidth: '58ch',
              }}
            >
              I&apos;m a front-end developer based in Italy, currently building
              digital experiences at{' '}
              <span style={{ color: 'var(--color-accent)' }}>
                Nextar S.r.l.
              </span>{' '}
              — a multi-brand platform powering Italian digital newspapers.
            </motion.p>

            <motion.p
              {...reveal(0.2)}
              style={{
                fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
                lineHeight: 1.8,
                color: 'var(--color-muted)',
                maxWidth: '58ch',
              }}
            >
              I started out at 21iLab, where I learned that clean code and
              thoughtful design are inseparable. Today I specialise in React and
              TypeScript, with a particular interest in animation, performance,
              and the details users feel but rarely notice.
            </motion.p>
          </div>

          {/* Skills */}
          <div>
            <motion.p
              {...reveal(0.1)}
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                marginBottom: '1.25rem',
              }}
            >
              Toolkit
            </motion.p>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}
            >
              {skills.map((skill) => (
                <motion.li
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease },
                    },
                  }}
                  style={{
                    padding: '0.4rem 0.9rem',
                    border: '1px solid var(--color-border)',
                    borderRadius: '999px',
                    fontSize: '0.8125rem',
                    color: 'var(--color-muted)',
                    letterSpacing: '0.03em',
                  }}
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
