'use client';

import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';

/**
 * Full-bleed image interlude that breaks the editorial column rhythm.
 *
 * A placeholder Dolomites scene (Alta Badia) is rendered with a tonal
 * treatment and a subtle vertical parallax as it scrolls through the
 * viewport — transform-only, so it stays GPU-composited and fluid. The
 * band reveals with a clip-path wipe and carries an overlaid caption.
 *
 * Parallax and the wipe are disabled when the user prefers reduced motion.
 */
export default function Feature() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Move the over-sized image within its frame as the band passes by.
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ['0%', '0%'] : ['-8%', '8%']
  );

  return (
    <motion.section
      ref={ref}
      className="feature"
      aria-label="Alta Badia — where this was built"
      initial={reduced ? false : { clipPath: 'inset(12% 0% 12% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src="/alta-badia.svg"
        alt=""
        aria-hidden="true"
        className="feature__media"
        style={{ y }}
        draggable={false}
      />
      <div className="feature__wash" />
      <div className="feature__caption">
        <motion.p
          className="feature__quote"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Built where the air is thin.
        </motion.p>
        <span className="feature__coords">Alta Badia · 46.56°N 11.89°E</span>
      </div>
    </motion.section>
  );
}
