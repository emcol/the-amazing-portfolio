# The Amazing Portfolio

A personal portfolio site built with [Next.js](https://nextjs.org/), React and TypeScript. It is exported as a static site and deployed to GitHub Pages.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Edit `pages/index.tsx` and the page will hot-reload as you save.

## Available Scripts

| Script                 | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Start the development server.                     |
| `npm run build`        | Build and statically export the site into `out/`. |
| `npm start`            | Serve the production build.                       |
| `npm run lint`         | Run ESLint.                                       |
| `npm run prettier`     | Format the codebase with Prettier.                |
| `npm run format-check` | Verify formatting without writing changes.        |
| `npm test`             | Run the Jest test suite.                          |

## Tech Stack

- **Next.js 16** with the `pages/` router and static export (`output: 'export'`)
- **React 19** + **TypeScript 6**
- **ESLint 9** (flat config) and **Prettier 3** for linting and formatting
- **Jest 30** for testing

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in
[`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml), which lints,
tests, builds the static export and publishes it to GitHub Pages.

A [`Dockerfile`](Dockerfile) is also provided to build and serve the static
export in a container:

```bash
docker build -t the-amazing-portfolio .
docker run -p 3000:3000 the-amazing-portfolio
```
