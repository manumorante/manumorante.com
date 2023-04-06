const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['secure.gravatar.com', 'manumorante.com', 'user-images.githubusercontent.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
