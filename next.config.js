/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Cible uniquement les navigateurs modernes (supprime les polyfills legacy inutiles)
    legacyBrowsers: false,
    // Inline le CSS critique pour réduire les requêtes bloquantes (effet limité avec App Router)
    optimizeCss: true,
  },
}

module.exports = nextConfig

