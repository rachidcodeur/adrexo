/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Cible uniquement les navigateurs modernes (supprime les polyfills legacy inutiles)
    legacyBrowsers: false,
  },
}

module.exports = nextConfig

