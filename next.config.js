/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['user-images.githubusercontent.com'],
    deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  }
}

module.exports = nextConfig
