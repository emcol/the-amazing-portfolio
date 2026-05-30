'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const EMAIL = 'emanuele.colabello@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/emanuele-colabello-b449a291';
const GITHUB = 'https://github.com/emcol';

/**
 * Final call-to-action section.
 *
 * Features a large display headline, a magnetic email link that floats
 * subtly toward the cursor, and social icon links.
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
    x.set(Math.max(-14, Math.min(14, dx * 0.25)));
    y.set(Math.max(-14, Math.min(14, dy * 0.25)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(6rem, 12vw, 14rem) clamp(1.5rem, 5vw, 5rem)',
        borderTop: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
      }}
    >
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.5rem, 9vw, 10rem)',
          lineHeight: 0.9,
          letterSpacing: '-0.01em',
        }}
      >
        LET&apos;S BUILD
        <br />
        <span style={{ color: 'var(--color-accent)' }}>SOMETHING.</span>
      </motion.h2>

      {/* Sub-text */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ color: 'var(--color-muted)', fontSize: '1rem' }}
      >
        Open to new opportunities and interesting projects.
      </motion.p>

      {/* Email — magnetic */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.a
          ref={emailRef}
          href={`mailto:${EMAIL}`}
          data-cursor-grow
          onMouseMove={handleMouseMove}
          style={{
            translateX: springX,
            translateY: springY,
            display: 'inline-block',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3.5vw, 3.5rem)',
            letterSpacing: '0.01em',
            borderBottom: '2px solid var(--color-border)',
            paddingBottom: '0.25rem',
            transition: 'border-color 0.3s, color 0.3s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              'var(--color-accent)';
            (e.currentTarget as HTMLAnchorElement).style.color =
              'var(--color-accent)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              'var(--color-border)';
            (e.currentTarget as HTMLAnchorElement).style.color =
              'var(--color-text)';
            handleMouseLeave();
          }}
        >
          {EMAIL}
        </motion.a>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', gap: '2rem' }}
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
            style={{
              fontSize: '0.8125rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                'var(--color-text)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                'var(--color-muted)')
            }
          >
            {label} ↗
          </a>
        ))}
      </motion.div>
    </section>
  );
}
