'use client';

import { motion } from 'framer-motion';
import { projects, type Project } from '@/lib/data';

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

interface ProjectRowProps {
  project: Project;
}

/**
 * Single project row. Layout and hover are CSS-driven (`.work-row`): the
 * background fill, colour inversion and arrow nudge all happen via `:hover`
 * on pointer-fine devices, so there is no per-frame React state. On touch
 * the row stays in its readable default state.
 */
function ProjectRow({ project }: ProjectRowProps) {
  const isLink = project.url !== null;
  const Tag = isLink ? motion.a : motion.div;

  return (
    <motion.li variants={rowVariants}>
      <Tag
        className={`work-row${isLink ? ' work-row--link' : ''}`}
        {...(isLink
          ? {
              href: project.url ?? '',
              target: '_blank',
              rel: 'noopener noreferrer',
              'data-cursor-grow': '',
            }
          : {})}
      >
        <span className="work-row__fill" aria-hidden />

        <span className="work-row__head">
          <span className="work-row__index">{project.index}</span>
          <span className="work-row__title">{project.title}</span>
          <span className="work-row__arrow" aria-hidden>
            {isLink ? '↗' : '—'}
          </span>
        </span>

        <span className="work-row__meta">
          <span className="work-row__desc">{project.description}</span>
          <span className="work-row__tags">
            {project.tags.join(' · ')} · {project.year}
          </span>
        </span>
      </Tag>
    </motion.li>
  );
}

/**
 * Projects showcase section.
 *
 * Renders each project as a full-width row that reveals on scroll with a
 * staggered fade-up, then responds to hover with a printed-label inversion.
 */
export default function Work() {
  return (
    <section id="work" className="section">
      <div className="shell">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 7rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.01em',
            marginBottom: 'clamp(2.5rem, 5vw, 5rem)',
          }}
        >
          Things I&apos;ve{' '}
          <span style={{ color: 'var(--color-accent)' }}>shipped</span>
        </motion.h2>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          style={{ borderBottom: '1px solid var(--color-border)' }}
        >
          {projects.map((project) => (
            <ProjectRow key={project.index} project={project} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
