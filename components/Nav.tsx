'use client';

import { motion } from 'framer-motion';

/**
 * Fixed top navigation bar.
 *
 * Fades in 0.8s after page load, giving the Hero animation time to play.
 * Anchor links smooth-scroll to `#about`, `#work`, and `#contact`.
 */
export default function Nav() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

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
        padding: '1.5rem clamp(1.5rem, 5vw, 5rem)',
        mixBlendMode: 'difference',
      }}
    >
      <a
        href="#"
        data-cursor-grow
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          letterSpacing: '0.05em',
          color: 'var(--color-text)',
        }}
      >
        EC
      </a>

      <ul style={{ display: 'flex', gap: '2rem' }}>
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
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
              {label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
