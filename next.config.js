/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['api.supersconto24.com', 'localhost']
        // domains: ['http://localhost:3000/','localhost']
    },
    head: {
        link: [
          {
            rel: "icon",
            type: "image/ico",
            href: "/favicon.ico",
          },
        ],
      },
    output: "standalone"
}

module.exports = nextConfig
