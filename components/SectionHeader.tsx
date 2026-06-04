'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  /** Two-digit section index, e.g. "01". Rendered in the accent colour. */
  index: string;
  /** Short uppercase label, e.g. "About". */
  label: string;
}

/**
 * Editorial eyebrow header: `(01) — LABEL ————————`.
 *
 * The trailing rule draws in from the left when the header scrolls into
 * view, giving each section a consistent, magazine-like entry point that
 * reinforces the visual hierarchy.
 */
export default function SectionHeader({ index, label }: SectionHeaderProps) {
  return (
    <motion.div
      className="eyebrow"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="eyebrow__index">({index})</span>
      <span>{label}</span>
      <motion.span
        className="eyebrow__rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}
