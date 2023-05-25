/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com'
          },
          {
            protocol: 'https',
            hostname: 'uploads.turbologo.com'
          }
        ],
      }
}

module.exports = nextConfig
