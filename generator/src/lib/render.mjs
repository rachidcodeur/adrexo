/**
 * ASSEMBLAGE D'UNE PAGE VILLE
 *
 * Prend une commune du jeu de données et produit son contenu rédactionnel
 * complet, en tirant les variantes via le moteur de spinning.
 *
 * Garantie supplémentaire : ANTI-RÉPÉTITION INTRA-PAGE. Deux emplacements
 * différents peuvent tirer la même variable ; sans précaution, ils tomberaient
 * une fois sur cinq sur la même phrase. On mémorise donc les variantes déjà
 * employées sur la page et on décale au prochain index libre.
 */
import { createSpinner } from './spin.mjs'
import { nombre } from './geo.mjs'
import { aVille, deVille, dansDepartement, duDepartement } from './grammaire.mjs'
import { BANKS, BANKS_BY } from '../content/banks.mjs'
import { META, SECTIONS, FAQ, META_DEPT, SECTIONS_DEPT, BANKS_DEPT } from '../content/blocks.mjs'
import { SITE } from '../site.config.mjs'

/** Jetons de données injectés tels quels (non tirés au sort). */
function donnees(v) {
  return {
    marque: SITE.nom,
    activite: SITE.activite.principal,
    activiteCourt: SITE.activite.court,
    ville: v.nom,
    villePrep: aVille(v.nom),
    deVille: deVille(v.nom),
    dept: v.departement,
    deptPrep: dansDepartement(v.codeDept),
    duDept: duDepartement(v.codeDept),
    codeDept: v.codeDept,
    region: v.region,
    cp: v.codePostal,
    pop: nombre(v.population),
    boites: nombre(v.boites),
    densite: nombre(v.densite),
    superficie: nombre(v.superficie),
  }
}

/** Banques universelles + banques conditionnées par les données de la commune. */
function banques(v) {
  return {
    ...BANKS,
    ...BANKS_BY.habitat[v.habitat],
    ...BANKS_BY.strate[v.strate],
  }
}

export function construirePage(v) {
  const spin = createSpinner(`${v.deptSlug}/${v.slug}`, SITE.generation.seed)
  const data = donnees(v)
  const banks = banques(v)

  // Variantes déjà employées sur cette page, par variable.
  const employees = new Map()

  /**
   * Tire une variante non encore employée sur la page.
   * En cas de saturation (les 5 variantes déjà vues), on autorise la réutilisation
   * plutôt que d'échouer : la répétition reste préférable à une page incomplète.
   */
  function tirer(key, scope) {
    const bank = banks[key]
    if (!bank) throw new Error(`Variable inconnue "{{${key}}}" — ville ${v.nom} (${v.codeDept})`)
    const vus = employees.get(key) ?? new Set()
    const depart = spin.pickIndex(`${scope}.${key}`, bank.length)
    let idx = depart
    for (let i = 0; i < bank.length; i++) {
      idx = (depart + i) % bank.length
      if (!vus.has(idx)) break
    }
    vus.add(idx)
    employees.set(key, vus)
    return bank[idx]
  }

  /** Résout récursivement les jetons {{...}} d'un gabarit. */
  function resoudre(tpl, scope, profondeur = 0) {
    if (profondeur > 4) return tpl
    return tpl.replace(/\{\{(\w+)\}\}/g, (_, key) => {
      if (key in data) return String(data[key])
      const variante = tirer(key, scope)
      return /\{\{\w+\}\}/.test(variante) ? resoudre(variante, scope, profondeur + 1) : variante
    })
  }

  // ---------------------------------------------------------------- balises
  const meta = {
    titre: resoudre(spin.pick('meta.titre', META.titre), 'meta'),
    description: resoudre(spin.pick('meta.description', META.description), 'meta'),
    h1: resoudre(spin.pick('meta.h1', META.h1), 'meta'),
  }

  // --------------------------------------------------------------- sections
  const sections = SECTIONS.map((s) => ({
    id: s.id,
    titre: s.sansTitre ? null : resoudre(spin.pick(`${s.id}.titre`, s.titres), `${s.id}.t`),
    paragraphes: s.paragraphes.map((emplacement, i) =>
      resoudre(spin.pick(`${s.id}.p${i}`, emplacement), `${s.id}.p${i}`)
    ),
  }))

  // -------------------------------------------------------------------- FAQ
  const faq = spin.pickN('faq', FAQ, 5).map((f, i) => ({
    question: resoudre(spin.pick(`faq.q${i}`, f.q), `faq${i}.q`),
    reponse: resoudre(spin.pick(`faq.r${i}`, f.r), `faq${i}.r`),
  }))

  // ------------------------------------------------------------------- CTA
  const cta = resoudre(spin.pick('cta', BANKS.ctaPhrase), 'cta')

  // Comptage de mots, contrôlé par l'audit (cible CDC : 800 à 1 200 mots).
  const texte = [
    meta.h1,
    ...sections.flatMap((s) => [s.titre ?? '', ...s.paragraphes]),
    ...faq.flatMap((f) => [f.question, f.reponse]),
    cta,
  ].join(' ')
  const mots = texte.split(/\s+/).filter(Boolean).length

  return { ville: v, meta, sections, faq, cta, mots, data }
}

/**
 * ASSEMBLAGE D'UNE PAGE DÉPARTEMENT.
 * Réutilise les banques universelles ; les variables conditionnées par
 * l'habitat et la strate ne s'appliquent pas à cette échelle.
 */
export function construirePageDept(d) {
  const spin = createSpinner(`dept/${d.slug}`, SITE.generation.seed)
  const data = {
    marque: SITE.nom,
    activite: SITE.activite.principal,
    activiteCourt: SITE.activite.court,
    dept: d.nom,
    deptPrep: dansDepartement(d.code),
    duDept: duDepartement(d.code),
    codeDept: d.code,
    region: d.region,
    nbVilles: nombre(d.nbVilles),
    popDept: nombre(d.population),
    prefecture: d.prefecture,
    // Plusieurs variables universelles évoquent « la ville » : à l'échelle
    // départementale, on les rattache au chef-lieu plutôt que d'échouer.
    ville: d.prefecture,
    villePrep: aVille(d.prefecture),
    deVille: deVille(d.prefecture),
  }
  // Paris (1 commune) et le Nord (200+) ne peuvent pas partager les mêmes phrases.
  const taille = d.nbVilles === 1 ? 'unique' : d.nbVilles < 20 ? 'petit' : d.nbVilles <= 60 ? 'moyen' : 'grand'
  const banks = { ...BANKS, ...BANKS_DEPT[taille] }
  const employees = new Map()

  function tirer(key, scope) {
    const bank = banks[key]
    if (!bank) throw new Error(`Variable inconnue "{{${key}}}" — département ${d.nom}`)
    const vus = employees.get(key) ?? new Set()
    const depart = spin.pickIndex(`${scope}.${key}`, bank.length)
    let idx = depart
    for (let i = 0; i < bank.length; i++) { idx = (depart + i) % bank.length; if (!vus.has(idx)) break }
    vus.add(idx); employees.set(key, vus)
    return bank[idx]
  }
  function resoudre(tpl, scope, prof = 0) {
    if (prof > 4) return tpl
    return tpl.replace(/\{\{(\w+)\}\}/g, (_, key) => {
      if (key in data) return String(data[key])
      const v = tirer(key, scope)
      return /\{\{\w+\}\}/.test(v) ? resoudre(v, scope, prof + 1) : v
    })
  }

  const meta = {
    titre: resoudre(spin.pick('meta.titre', META_DEPT.titre), 'meta'),
    description: resoudre(spin.pick('meta.description', META_DEPT.description), 'meta'),
    h1: resoudre(spin.pick('meta.h1', META_DEPT.h1), 'meta'),
  }
  const sections = SECTIONS_DEPT.map((s) => ({
    id: s.id,
    titre: s.sansTitre ? null : resoudre(spin.pick(`${s.id}.titre`, s.titres), `${s.id}.t`),
    paragraphes: s.paragraphes.map((e, i) => resoudre(spin.pick(`${s.id}.p${i}`, e), `${s.id}.p${i}`)),
  }))
  return { dept: d, meta, sections, data }
}
