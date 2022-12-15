/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true, // Imageタグをexport可能にする
    },
  },
  assetPrefix: "./", // 画像、cssなどを反映させる
};

module.exports = nextConfig;
