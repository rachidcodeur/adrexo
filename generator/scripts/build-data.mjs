/**
 * PIPELINE DE DONNÉES
 * CSV brut  ->  src/data/dataset.json (villes enrichies + index départements)
 *
 * Lancé par `npm run data`. Le build Astro ne lit que le JSON produit ici :
 * la génération des 5 000 pages n'a donc aucun calcul géographique à refaire.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { haversineKm, slugify } from '../src/lib/geo.mjs'
import { SITE } from '../src/site.config.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const CSV = path.resolve(ROOT, '..', 'data', 'top-5000-villes-france.csv')
const OUT = path.resolve(ROOT, 'src', 'data', 'dataset.json')

/**
 * CORRECTIFS DE DONNÉES appliqués au CSV source.
 * Chaque entrée est un ajout ou une correction explicite et réversible :
 * supprimer une ligne ici suffit à revenir au fichier d'origine.
 */
const PATCHES = [
  // Paris est absent du CSV source (aucune ligne pour le département 75).
  // Sans ce correctif, la première ville de France n'aurait pas de page.
  {
    rang: 0, code_departement: '75', departement: 'Paris', region: 'Île-de-France',
    ville: 'Paris', slug: 'paris', code_postal: '75001', population: 2133111,
    superficie_km2: 105, densite: 20317, latitude: 48.8566, longitude: 2.3522,
  },
]

// ---------------------------------------------------------------- parsing CSV
function parseCsv(text) {
  const lines = text.replace(/^﻿/, '').split(/\r?\n/).filter((l) => l.trim())
  const head = lines[0].split(',')
  return lines.slice(1).map((line) => {
    // Les valeurs peuvent contenir des virgules entre guillemets (ex. régions).
    const cells = []
    let cur = '', quoted = false
    for (const ch of line) {
      if (ch === '"') quoted = !quoted
      else if (ch === ',' && !quoted) { cells.push(cur); cur = '' }
      else cur += ch
    }
    cells.push(cur)
    return Object.fromEntries(head.map((h, i) => [h.trim(), (cells[i] ?? '').trim()]))
  })
}

// ------------------------------------------------------------------- buckets
/** Strate de taille — pilote le vocabulaire (« métropole » vs « commune »). */
function strateTaille(pop) {
  if (pop >= 150000) return 'metropole'
  if (pop >= 50000) return 'grande'
  if (pop >= 20000) return 'moyenne'
  if (pop >= 10000) return 'petite'
  return 'bourg'
}

/** Type d'habitat déduit de la densité — pilote le discours sur le terrain. */
function typeHabitat(densite) {
  if (densite >= 4000) return 'hyperdense'
  if (densite >= 1500) return 'dense'
  if (densite >= 500) return 'pavillonnaire'
  if (densite >= 150) return 'periurbain'
  return 'rural'
}

// ---------------------------------------------------------------------- main
const raw = parseCsv(fs.readFileSync(CSV, 'utf8'))

const villes = [...raw.map((r) => ({
  codeDept: r.code_departement,
  departement: r.departement,
  region: r.region,
  nom: r.ville,
  slug: r.slug || slugify(r.ville),
  codePostal: r.code_postal,
  population: Number(r.population),
  superficie: Number(r.superficie_km2),
  densite: Math.round(Number(r.densite)),
  lat: Number(r.latitude),
  lon: Number(r.longitude),
})), ...PATCHES.map((p) => ({
  codeDept: p.code_departement, departement: p.departement, region: p.region,
  nom: p.ville, slug: p.slug, codePostal: p.code_postal, population: p.population,
  superficie: p.superficie_km2, densite: p.densite, lat: p.latitude, lon: p.longitude,
}))]

// Contrôle d'intégrité : l'URL /<dept>/<ville>/ doit être unique.
const vus = new Map()
for (const v of villes) {
  const url = `${slugify(v.departement)}/${v.slug}`
  if (vus.has(url)) throw new Error(`Collision d'URL : ${url} (${v.nom} et ${vus.get(url)})`)
  vus.set(url, v.nom)
}

// Champs dérivés
for (const v of villes) {
  v.deptSlug = slugify(v.departement)
  v.strate = strateTaille(v.population)
  v.habitat = typeHabitat(v.densite)
  // Estimation du nombre de boîtes aux lettres : 2,2 personnes par ménage
  // (moyenne Insee). Donnée concrète, propre à chaque commune.
  v.boites = Math.round((v.population / 2.2) / 100) * 100
}

// Classement dans le département (par population)
const parDept = new Map()
for (const v of villes) {
  if (!parDept.has(v.codeDept)) parDept.set(v.codeDept, [])
  parDept.get(v.codeDept).push(v)
}
for (const [, list] of parDept) {
  list.sort((a, b) => b.population - a.population)
  list.forEach((v, i) => { v.rangDept = i + 1; v.totalDept = list.length })
}

// ------------------------------------------------- communes voisines (grille)
const RAYON = SITE.generation.rayonVoisinesKm
const N_VOISINES = SITE.generation.nbCommunesVoisines
const CELL = 0.3 // ~33 km de côté : garantit de couvrir le rayon avec 3x3 cellules
const grille = new Map()
const cle = (la, lo) => `${Math.floor(la / CELL)}:${Math.floor(lo / CELL)}`
for (const v of villes) {
  const k = cle(v.lat, v.lon)
  if (!grille.has(k)) grille.set(k, [])
  grille.get(k).push(v)
}

let sansVoisine = 0
for (const v of villes) {
  const ci = Math.floor(v.lat / CELL), cj = Math.floor(v.lon / CELL)
  const cands = []
  for (let di = -1; di <= 1; di++) {
    for (let dj = -1; dj <= 1; dj++) {
      const bucket = grille.get(`${ci + di}:${cj + dj}`)
      if (bucket) cands.push(...bucket)
    }
  }
  let proches = cands
    .filter((c) => c !== v)
    .map((c) => ({ v: c, d: haversineKm(v.lat, v.lon, c.lat, c.lon) }))
    .filter((x) => x.d <= RAYON)
    .sort((a, b) => a.d - b.d)

  // Repli pour les communes isolées (montagne, DOM) : les plus proches du
  // département, quelle que soit la distance.
  if (proches.length < 3) {
    sansVoisine++
    proches = (parDept.get(v.codeDept) || [])
      .filter((c) => c !== v)
      .map((c) => ({ v: c, d: haversineKm(v.lat, v.lon, c.lat, c.lon) }))
      .sort((a, b) => a.d - b.d)
  }

  v.voisines = proches.slice(0, N_VOISINES).map((x) => ({
    nom: x.v.nom, slug: x.v.slug, deptSlug: x.v.deptSlug,
    codePostal: x.v.codePostal, km: Math.round(x.d),
  }))
}

// ------------------------------------------------------------- départements
const departements = [...parDept.entries()].map(([code, list]) => {
  const t = list[0]
  return {
    code, nom: t.departement, slug: t.deptSlug, region: t.region,
    nbVilles: list.length,
    population: list.reduce((s, v) => s + v.population, 0),
    prefecture: t.nom,
    villes: list.map((v) => v.slug),
  }
}).sort((a, b) => a.code.localeCompare(b.code))

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, JSON.stringify({ villes, departements }, null, 0))

// ------------------------------------------------------------------ rapport
const st = {}, hab = {}
for (const v of villes) { st[v.strate] = (st[v.strate] || 0) + 1; hab[v.habitat] = (hab[v.habitat] || 0) + 1 }
console.log(`villes           : ${villes.length} (dont ${PATCHES.length} correctif(s))`)
console.log(`départements     : ${departements.length}`)
console.log(`strates          :`, st)
console.log(`habitat          :`, hab)
console.log(`repli voisines   : ${sansVoisine} commune(s) isolée(s)`)
console.log(`voisines (moy.)  : ${(villes.reduce((s, v) => s + v.voisines.length, 0) / villes.length).toFixed(1)}`)
console.log(`écrit            : ${path.relative(ROOT, OUT)} (${(fs.statSync(OUT).size / 1048576).toFixed(1)} Mo)`)
