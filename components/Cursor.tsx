'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Custom cursor that replaces the OS pointer on fine-pointer devices.
 *
 * Imported via `next/dynamic` with `ssr: false` so it only ever runs in the
 * browser — no SSR guard needed. Renders a fixed circle that smoothly follows
 * the mouse with spring physics and inverts colours beneath it via
 * `mix-blend-mode: difference`. Scales up on elements marked
 * `data-cursor-grow`.
 *
 * @returns null on touch/stylus devices (`pointer: coarse / none`).
 */
export default function Cursor() {
  // Lazy-init: safe because this component is never SSR'd (ssr: false).
  const [isPointerFine] = useState(
    () => window.matchMedia('(pointer: fine)').matches
  );
  const [growing, setGrowing] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 600, damping: 35, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 600, damping: 35, mass: 0.5 });

  useEffect(() => {
    if (!isPointerFine) return;

    document.body.style.cursor = 'none';

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
    };

    const onEnter = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('[data-cursor-grow]')) {
        setGrowing(true);
      }
    };

    const onLeave = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('[data-cursor-grow]')) {
        setGrowing(false);
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onEnter, true);
    document.addEventListener('mouseleave', onLeave, true);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter, true);
      document.removeEventListener('mouseleave', onLeave, true);
      document.body.style.cursor = '';
    };
  }, [isPointerFine, mouseX, mouseY]);

  if (!isPointerFine) return null;

  return (
    <motion.div
      style={{
        translateX: springX,
        translateY: springY,
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: '#f0ece4',
        mixBlendMode: 'difference',
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9000,
      }}
      animate={{ scale: growing ? 2.5 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    />
  );
}
