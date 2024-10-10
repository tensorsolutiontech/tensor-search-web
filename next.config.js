/** @type {import('next').NextConfig} */
const { withNextVideo } = require('next-video/process');
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
};

module.exports = withNextVideo(nextConfig);
