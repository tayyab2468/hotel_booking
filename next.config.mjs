/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false, // Navigation issue fix
  images: {
    domains: ["pix10.agoda.net"], // Allow Agoda images
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore ESLint issues during the build
  },
};

export default nextConfig;
