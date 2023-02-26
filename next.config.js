/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['user-images.githubusercontent.com']
  }
}

module.exports = nextConfig
