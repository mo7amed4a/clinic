/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // This will skip TypeScript errors in the build process
  },
};

export default nextConfig;
