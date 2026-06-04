'use client';

import { motion } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Fixed top navigation bar.
 *
 * Fades in 0.8s after load, after the Hero has animated. Uses
 * `mix-blend-mode: difference` so the label stays legible over both the
 * dark sections and the bright feature image. Hover/focus styling is
 * CSS-driven (`.link-muted`) for smoothness and keyboard accessibility.
 */
export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.25rem var(--gutter)',
        mixBlendMode: 'difference',
      }}
    >
      <a
        href="#"
        aria-label="Back to top"
        data-cursor-grow
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          letterSpacing: '0.05em',
          color: 'var(--color-text)',
        }}
      >
        EC<span style={{ color: 'var(--color-accent)' }}>.</span>
      </a>

      <ul
        style={{
          display: 'flex',
          gap: 'clamp(1.1rem, 4vw, 2.25rem)',
        }}
      >
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              data-cursor-grow
              className="link-muted"
              style={{
                fontSize: '0.8125rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
