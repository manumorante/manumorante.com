/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "secure.gravatar.com",
      "manumorante.com",
      "user-images.githubusercontent.com",
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
