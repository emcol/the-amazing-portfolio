import { Fragment } from 'react';

const items = [
  'Available for work',
  'React',
  'TypeScript',
  'Next.js',
  'Motion',
];

/** One run of the marquee content; rendered twice for a seamless loop. */
function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <span className="marquee__group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <Fragment key={item}>
          <span>{item}</span>
          <span className="marquee__sep" aria-hidden>
            ·
          </span>
        </Fragment>
      ))}
    </span>
  );
}

/**
 * Kinetic divider between the hero and the content sections.
 *
 * A slow, infinite CSS marquee — the page's single always-moving element,
 * carrying the availability note so it doesn't clutter the hero. Pure CSS
 * animation (no JS), paused entirely under `prefers-reduced-motion`.
 */
export default function Marquee() {
  return (
    <div className="marquee" aria-label="Available for work">
      <div className="marquee__track">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
