/**
 * AUDIT DU GÉNÉRATEUR — à lancer avant chaque mise en production.
 *
 * Vérifie, sur les 5 001 pages réellement générées :
 *   1. la règle des 5 variantes par variable ;
 *   2. l'absence de jeton {{...}} non résolu ;
 *   3. le volume de texte (cible CDC : 800 à 1 200 mots) ;
 *   4. l'UNICITÉ RÉELLE du contenu — mesurée dans le pire cas, c'est-à-dire
 *      entre communes voisines de même strate et même habitat, qui partagent
 *      les mêmes banques conditionnelles. C'est là que le duplicate content
 *      apparaîtrait en premier.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { construirePage } from '../src/lib/render.mjs'
import { BANKS, BANKS_BY } from '../src/content/banks.mjs'
import { META, SECTIONS, FAQ } from '../src/content/blocks.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const { villes } = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/dataset.json'), 'utf8'))

let erreurs = 0
const ko = (m) => { console.error('  ✗ ' + m); erreurs++ }

// ------------------------------------------------------- 1. règle des 5
console.log('\n[1] Règle des 5 variantes')
for (const [k, v] of Object.entries(BANKS)) if (v.length !== 5) ko(`BANKS.${k} : ${v.length} variantes`)
for (const [dim, buckets] of Object.entries(BANKS_BY))
  for (const [b, vars] of Object.entries(buckets))
    for (const [k, v] of Object.entries(vars)) if (v.length !== 5) ko(`BANKS_BY.${dim}.${b}.${k} : ${v.length}`)
for (const [k, v] of Object.entries(META)) if (v.length !== 5) ko(`META.${k} : ${v.length}`)
for (const s of SECTIONS) {
  if (!s.sansTitre && s.titres.length !== 5) ko(`SECTIONS.${s.id}.titres : ${s.titres.length}`)
  s.paragraphes.forEach((p, i) => { if (p.length !== 5) ko(`SECTIONS.${s.id}.p${i} : ${p.length}`) })
}
for (const f of FAQ) if (f.r.length !== 5) ko(`FAQ "${f.q[0]}" : ${f.r.length} réponses`)
const nbVars = Object.keys(BANKS).length +
  Object.values(BANKS_BY).reduce((n, b) => n + Object.values(b).reduce((m, v) => m + Object.keys(v).length, 0), 0)
console.log(`  ${nbVars} variables x 5 = ${nbVars * 5} variantes rédigées`)

// -------------------------------------------- 2-3. génération de masse
console.log('\n[2] Génération des pages')
const t0 = Date.now()
const pages = new Map()
const mots = []
for (const v of villes) {
  let p
  try { p = construirePage(v) } catch (e) { ko(`${v.nom} (${v.codeDept}) : ${e.message}`); continue }
  const texte = [p.meta.titre, p.meta.description, p.meta.h1,
    ...p.sections.flatMap((s) => [s.titre ?? '', ...s.paragraphes]),
    ...p.faq.flatMap((f) => [f.question, f.reponse])].join(' ')
  if (/\{\{\w+\}\}/.test(texte)) ko(`${v.nom} : jeton non résolu ${texte.match(/\{\{\w+\}\}/)[0]}`)
  pages.set(`${v.deptSlug}/${v.slug}`, texte)
  mots.push(p.mots)
}
console.log(`  ${pages.size} pages générées en ${Date.now() - t0} ms`)

console.log('\n[3] Volume de texte (cible 800-1 200 mots)')
mots.sort((a, b) => a - b)
const moy = Math.round(mots.reduce((a, b) => a + b, 0) / mots.length)
const dansCible = mots.filter((m) => m >= 800 && m <= 1200).length
console.log(`  min ${mots[0]} | médiane ${mots[Math.floor(mots.length / 2)]} | moyenne ${moy} | max ${mots.at(-1)}`)
console.log(`  dans la cible : ${(dansCible / mots.length * 100).toFixed(1)} %`)
if (mots[0] < 700) ko(`page la plus courte : ${mots[0]} mots`)

// --------------------------------------------------- 4. unicité réelle
console.log('\n[4] Unicité du contenu')

// Doublons stricts
const empreintes = new Map()
let identiques = 0
for (const [url, t] of pages) {
  const e = t.replace(/\s+/g, ' ').trim()
  if (empreintes.has(e)) { identiques++; if (identiques <= 3) ko(`page identique : ${url} == ${empreintes.get(e)}`) }
  else empreintes.set(e, url)
}
console.log(`  pages strictement identiques : ${identiques}`)
if (identiques > 0) erreurs++

/** Similarité de Jaccard sur les 5-grammes de mots. */
function shingles(t) {
  const w = t.toLowerCase().replace(/[^\wàâäéèêëîïôöùûüç' ]/g, ' ').split(/\s+/).filter(Boolean)
  const s = new Set()
  for (let i = 0; i + 5 <= w.length; i++) s.add(w.slice(i, i + 5).join(' '))
  return s
}
function jaccard(a, b) {
  let inter = 0
  for (const x of a) if (b.has(x)) inter++
  return inter / (a.size + b.size - inter)
}

// PIRE CAS : chaque commune comparée à ses voisines de même strate ET même habitat.
const cache = new Map()
const shOf = (url) => { if (!cache.has(url)) cache.set(url, shingles(pages.get(url))); return cache.get(url) }
const parUrl = new Map(villes.map((v) => [`${v.deptSlug}/${v.slug}`, v]))

let scores = [], pireScore = 0, pirePaire = null, comparaisons = 0
for (const v of villes) {
  const u1 = `${v.deptSlug}/${v.slug}`
  for (const n of v.voisines) {
    const u2 = `${n.deptSlug}/${n.slug}`
    const w = parUrl.get(u2)
    if (!w || u1 >= u2) continue
    if (w.strate !== v.strate || w.habitat !== v.habitat) continue // on ne garde que le pire cas
    const j = jaccard(shOf(u1), shOf(u2))
    scores.push(j); comparaisons++
    if (j > pireScore) { pireScore = j; pirePaire = [u1, u2] }
  }
}
scores.sort((a, b) => a - b)
const p = (q) => scores[Math.floor(scores.length * q)] ?? 0
console.log(`  comparaisons pire cas (voisines, même strate + même habitat) : ${comparaisons}`)
console.log(`  similarité  médiane ${(p(0.5) * 100).toFixed(1)} %  |  p95 ${(p(0.95) * 100).toFixed(1)} %  |  max ${(pireScore * 100).toFixed(1)} %`)
if (pirePaire) console.log(`  paire la plus proche : ${pirePaire[0]} / ${pirePaire[1]}`)
if (pireScore > 0.60) ko(`similarité maximale trop élevée : ${(pireScore * 100).toFixed(1)} %`)

console.log(erreurs ? `\n✗ AUDIT ÉCHOUÉ — ${erreurs} problème(s)\n` : '\n✓ AUDIT RÉUSSI\n')
process.exit(erreurs ? 1 : 0)
