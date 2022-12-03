const nextConfig = {
  // basePath: '/manumorante.com',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['secure.gravatar.com'],
  },
  experimental: {
    images: {
      allowFutureImage: true,
      // unoptimized: true,
    },
  },
}

module.exports = nextConfig
