/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
     domains: ['apidev.marriextransfer.com','localhost']
    // domains: ['http://localhost:3000/','localhost']
  }
}

module.exports = nextConfig
