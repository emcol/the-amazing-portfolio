/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Produce a static export in `out/` for GitHub Pages deployment.
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
