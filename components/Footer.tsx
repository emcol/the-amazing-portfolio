/**
 * Minimal site footer. Static server component — mono type, one hairline.
 */
export default function Footer() {
  return (
    <footer
      className="label-mono"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem 1.5rem',
        padding: '1.75rem var(--gutter)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <span>© {new Date().getFullYear()} Emanuele Colabello</span>
      <span>Next.js · Tailwind · Motion</span>
      <a href="#" className="link-muted" aria-label="Back to top">
        Top ↑
      </a>
    </footer>
  );
}
