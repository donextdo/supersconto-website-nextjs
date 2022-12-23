/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['apidev.marriextransfer.com']
  }
}

module.exports = nextConfig
