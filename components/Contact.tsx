'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

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
 * The headline closes the typographic gesture opened by the hero: a solid
 * line followed by a hollow one, this time stroked in the accent colour.
 * The email is a large magnetic link (pointer-fine only; a plain wrapping
 * anchor on touch), followed by mono social links.
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
    <section
      id="contact"
      className="section"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <motion.p {...reveal(0)} className="label-mono">
        <span className="label-mono__index">(03)</span> Contact
      </motion.p>

      <motion.h2
        {...reveal(0.05)}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 10vw, 11rem)',
          lineHeight: 0.9,
          letterSpacing: '0.005em',
          marginTop: 'clamp(1.75rem, 4vw, 3rem)',
        }}
      >
        Let&apos;s build
        <br />
        <span className="outline-accent">something.</span>
      </motion.h2>

      <motion.p
        {...reveal(0.1)}
        style={{
          color: 'var(--color-muted)',
          fontSize: 'clamp(0.9375rem, 1.4vw, 1.125rem)',
          maxWidth: '40ch',
          marginTop: 'clamp(1.75rem, 3.5vw, 2.75rem)',
        }}
      >
        Open to new opportunities and collaborations. The fastest way to reach
        me is email.
      </motion.p>

      {/* Email — magnetic on pointer-fine, plain anchor on touch */}
      <motion.div {...reveal(0.15)} style={{ marginTop: '2rem' }}>
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
        {...reveal(0.2)}
        style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          marginTop: '2.5rem',
        }}
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
            className="link-muted label-mono"
          >
            {label} ↗
          </a>
        ))}
      </motion.div>
    </section>
  );
}
