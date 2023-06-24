/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.coingecko.com'],
    cacheControl: {
      default: "public, max-age=3600",
    }
  }
}

module.exports = nextConfig
