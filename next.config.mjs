/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Gera ficheiros estáticos para GitHub Pages
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true  // Necessário para static export
  }
};

export default nextConfig;
