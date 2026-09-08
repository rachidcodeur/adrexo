/** Sitemap global unique — CDC bloc 3 (une seule propriété en Search Console). */
import { villes, departements } from '../lib/dataset.mjs'
import { SITE } from '../site.config.mjs'

export function GET() {
  const date = new Date().toISOString().slice(0, 10)
  const url = (chemin, priorite, frequence) =>
    `<url><loc>${SITE.baseUrl}${chemin}</loc><lastmod>${date}</lastmod>` +
    `<changefreq>${frequence}</changefreq><priority>${priorite}</priority></url>`

  const entrees = [
    url('/', '1.0', 'weekly'),
    url('/departements/', '0.6', 'monthly'),
    ...departements.map((d) => url(`/${d.slug}/`, '0.8', 'monthly')),
    ...villes.map((v) => url(`/${v.deptSlug}/${v.slug}/`, '0.7', 'monthly')),
    url('/mentions-legales/', '0.2', 'yearly'),
    url('/politique-de-confidentialite/', '0.2', 'yearly'),
  ]

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entrees.join('\n')}\n</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  )
}
