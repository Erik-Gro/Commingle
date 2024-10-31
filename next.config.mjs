/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ignore TypeScript errors during builds
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
};

export default nextConfig;
