/** Metadata for a portfolio project. */
export interface Project {
  /** Displayed index, e.g. "01" */
  index: string;
  title: string;
  /** One-line description shown in the project row */
  description: string;
  /** Technology tags */
  tags: string[];
  /** Year or range, e.g. "2022–present" */
  year: string;
  /** External URL, or null for internal/NDA work */
  url: string | null;
}

export const projects: Project[] = [
  {
    index: '01',
    title: 'Nextar Media Platform',
    description:
      'Multi-brand digital newspaper platform serving millions of Italian readers. React architecture with real-time content delivery.',
    tags: ['React', 'TypeScript', 'PHP', 'WordPress'],
    year: '2022–present',
    url: null,
  },
  {
    index: '02',
    title: 'Editorial CMS Integration',
    description:
      'Headless WordPress + React front-end for regional news publishers, built for editorial speed and SEO performance.',
    tags: ['React', 'WordPress', 'REST API', 'CSS'],
    year: '2023',
    url: null,
  },
  {
    index: '03',
    title: '21iLab Product Suite',
    description:
      'Front-end development across multiple client products — shipping features from design to production at pace.',
    tags: ['JavaScript', 'HTML', 'CSS', 'PHP'],
    year: '2021–2022',
    url: null,
  },
  {
    index: '04',
    title: 'This Portfolio',
    description:
      'Personal portfolio. Next.js static export, Tailwind v4, Framer Motion. Designed and coded from scratch.',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind v4'],
    year: '2025',
    url: 'https://emcol.github.io/the-amazing-portfolio',
  },
];

export const skills: string[] = [
  'React',
  'TypeScript',
  'JavaScript',
  'Next.js',
  'PHP',
  'WordPress',
  'HTML & CSS',
  'Git',
  'DevOps',
  'REST APIs',
];
