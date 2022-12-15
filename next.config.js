/** @type {import('next').NextConfig} */
const nextConfig = {
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
