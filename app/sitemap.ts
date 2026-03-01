import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://adrexo.net'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/street-marketing`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/distribution-journaux-municipaux`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/distribution-tracts-municipaux`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/distribution-flyers-paris`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/distribution-flyers-bordeaux`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/distribution-flyers-toulouse`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/distribution-flyers-marseille`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/distribution-flyers-lyon`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/distribution-flyers-nice`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/distribution-flyers-nantes`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/distribution-flyers-montpellier`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/distribution-flyers-pau`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/distribution-flyers-aix-en-provence`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/politique-de-confidentialite`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/politique-de-cookies`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/conditions-d-utilisation`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]

  return routes
}
