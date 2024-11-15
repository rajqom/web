/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [], // Add any external image domains you're using
    unoptimized: true
  },
}

module.exports = nextConfig