'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, type Project } from '@/lib/data';

interface ProjectRowProps {
  project: Project;
}

/** Single project row with a slide-in background fill on hover. */
function ProjectRow({ project }: ProjectRowProps) {
  const [hovered, setHovered] = useState(false);
  const isLink = project.url !== null;
  const Tag = isLink ? 'a' : 'div';

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      <Tag
        {...(isLink
          ? {
              href: project.url ?? '',
              target: '_blank',
              rel: 'noopener noreferrer',
            }
          : {})}
        data-cursor-grow={isLink ? '' : undefined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(1rem, 3vw, 3rem)',
          padding: 'clamp(1.25rem, 2.5vw, 2rem) 0',
          borderTop: '1px solid var(--color-border)',
          position: 'relative',
          overflow: 'hidden',
          cursor: isLink ? 'none' : 'default',
          color: hovered ? 'var(--color-background)' : 'var(--color-text)',
          transition: 'color 0.5s ease',
        }}
      >
        {/* Background fill */}
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--color-text)',
            transformOrigin: 'left',
            zIndex: 0,
          }}
        />

        {/* Index */}
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
            color: hovered ? 'var(--color-background)' : 'var(--color-accent)',
            flexShrink: 0,
            zIndex: 1,
            transition: 'color 0.3s',
          }}
        >
          {project.index}
        </span>

        {/* Title */}
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3.5vw, 3rem)',
            letterSpacing: '0.01em',
            flex: 1,
            zIndex: 1,
          }}
        >
          {project.title}
        </span>

        {/* Tags */}
        <span
          style={{
            fontSize: '0.75rem',
            color: hovered ? 'var(--color-background)' : 'var(--color-muted)',
            flexShrink: 0,
            zIndex: 1,
            transition: 'color 0.3s',
          }}
        >
          {project.tags.slice(0, 2).join(' · ')}
        </span>

        {/* Year */}
        <span
          style={{
            fontSize: '0.8125rem',
            color: hovered ? 'var(--color-background)' : 'var(--color-muted)',
            flexShrink: 0,
            zIndex: 1,
            transition: 'color 0.3s',
          }}
        >
          {project.year}
        </span>

        {/* Arrow */}
        <motion.span
          animate={{ x: hovered ? 6 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            fontSize: '1.25rem',
            flexShrink: 0,
            zIndex: 1,
            opacity: isLink ? 1 : 0.2,
          }}
        >
          →
        </motion.span>
      </Tag>

      {/* Description (always visible below the row) */}
      <p
        style={{
          fontSize: '0.875rem',
          color: 'var(--color-muted)',
          padding: '0.5rem 0 0',
          paddingLeft: 'clamp(2rem, 5vw, 5rem)',
          borderTop: 'none',
          lineHeight: 1.6,
        }}
      >
        {project.description}
        {!isLink && (
          <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem' }}>
            (internal)
          </span>
        )}
      </p>
    </motion.li>
  );
}

/**
 * Projects showcase section.
 *
 * Renders each project as a full-width row with a slide-in fill on hover.
 * Rows enter with a staggered fade-up animation on scroll.
 */
export default function Work() {
  return (
    <section
      id="work"
      style={{
        padding: 'clamp(6rem, 12vw, 14rem) clamp(1.5rem, 5vw, 5rem)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 7vw, 8rem)',
          lineHeight: 0.9,
          letterSpacing: '-0.01em',
          marginBottom: 'clamp(3rem, 6vw, 6rem)',
        }}
      >
        SELECTED
        <br />
        WORK
      </motion.h2>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {projects.map((project) => (
          <ProjectRow key={project.index} project={project} />
        ))}
        {/* Close last border */}
        <li style={{ borderTop: '1px solid var(--color-border)' }} />
      </motion.ul>
    </section>
  );
}
