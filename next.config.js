/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "image.tmdb.org"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
