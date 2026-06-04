'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';

const EMAIL = 'emanuele.colabello@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/emanuele-colabello-b449a291';
const GITHUB = 'https://github.com/emcol';

const ease = [0.16, 1, 0.3, 1] as const;

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' } as const,
  transition: { duration: 0.7, delay, ease },
});

/**
 * Final call-to-action section.
 *
 * A large display headline, a magnetic email link that drifts toward the
 * cursor (pointer-fine only; the underlying anchor wraps safely on mobile),
 * and social links. Hover styling is CSS-driven for fluidity.
 */
export default function Contact() {
  const emailRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 18 });
  const springY = useSpring(y, { stiffness: 120, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = emailRef.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-14, Math.min(14, dx * 0.2)));
    y.set(Math.max(-10, Math.min(10, dy * 0.2)));
  };

  const resetMagnet = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="contact" className="section">
      <div
        className="shell"
        style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
      >
        <SectionHeader index="03" label="Contact" />

        <motion.h2
          {...reveal(0)}
          transition={{ duration: 0.9, ease }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 9vw, 10rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.01em',
          }}
        >
          Let&apos;s build
          <br />
          <span style={{ color: 'var(--color-accent)' }}>something.</span>
        </motion.h2>

        <motion.p
          {...reveal(0.1)}
          style={{
            color: 'var(--color-muted)',
            fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
            maxWidth: '40ch',
          }}
        >
          Open to new opportunities and collaborations. The fastest way to reach
          me is email.
        </motion.p>

        {/* Email — magnetic on pointer-fine, plain anchor on touch */}
        <motion.div {...reveal(0.2)}>
          <motion.a
            ref={emailRef}
            href={`mailto:${EMAIL}`}
            data-cursor-grow
            className="email-link"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetMagnet}
            style={{ x: springX, y: springY }}
          >
            {EMAIL}
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          {...reveal(0.3)}
          style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap' }}
        >
          {[
            { label: 'GitHub', href: GITHUB },
            { label: 'LinkedIn', href: LINKEDIN },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-grow
              className="link-muted"
              style={{
                fontSize: '0.8125rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {label} ↗
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
