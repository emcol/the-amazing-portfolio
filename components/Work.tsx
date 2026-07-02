'use client';

import { motion } from 'framer-motion';
import { projects, type Project } from '@/lib/data';

const ease = [0.16, 1, 0.3, 1] as const;

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

/**
 * Single project row in the ledger. Layout and hover are CSS-driven
 * (`.work-row`): on pointer-fine devices the title shifts and takes the
 * accent colour; on touch the row stays in its readable default state.
 */
function ProjectRow({ project }: { project: Project }) {
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
        <span className="work-row__index">{project.index}</span>
        <h3 className="work-row__title">{project.title}</h3>
        <span className="work-row__arrow" aria-hidden>
          {isLink ? '↗' : '—'}
        </span>

        <span className="work-row__meta">
          <span className="work-row__desc">{project.description}</span>
          <span className="work-row__tags">
            {project.tags.join(' / ')} — {project.year}
          </span>
        </span>
      </Tag>
    </motion.li>
  );
}

/**
 * Selected work, as a ruled ledger.
 *
 * No section heading competes with the rows — the oversized project titles
 * are the typography of this section. Rows reveal with a staggered fade-up.
 */
export default function Work() {
  return (
    <section id="work" className="section">
      <motion.p
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease }}
        className="label-mono"
        style={{ marginBottom: 'clamp(1.75rem, 4vw, 3rem)' }}
      >
        <span className="label-mono__index">(02)</span> Selected work ··{' '}
        {String(projects.length).padStart(2, '0')}
      </motion.p>

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
    </section>
  );
}
