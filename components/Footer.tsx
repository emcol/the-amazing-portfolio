/**
 * Minimal site footer. Static server component — no interactivity needed.
 */
export default function Footer() {
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem 1.5rem',
        padding: '2rem var(--gutter)',
        borderTop: '1px solid var(--color-border)',
        fontSize: '0.75rem',
        color: 'var(--color-muted)',
        letterSpacing: '0.04em',
      }}
    >
      <span>© {new Date().getFullYear()} Emanuele Colabello</span>
      <span>Designed &amp; built with care in Italy</span>
    </footer>
  );
}
