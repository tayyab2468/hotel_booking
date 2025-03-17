/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false, // Navigation issue fix
  images: {
    domains: ["pix10.agoda.net"], // Allow Agoda images
  },
};

export default nextConfig;
