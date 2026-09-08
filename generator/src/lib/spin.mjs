/**
 * MOTEUR DE SPINNING
 *
 * Principe : chaque page ville possède une graine (seed) dérivée de son slug.
 * Chaque variable est tirée avec une graine dérivée de (seed_page + nom_variable).
 *
 * Conséquences — les deux propriétés qui rendent le procédé utilisable en SEO :
 *
 *  1. DÉTERMINISME  — une même ville produit exactement le même texte à chaque
 *     build. Sans cela, chaque redéploiement réécrirait 5 000 pages et Google
 *     verrait un site instable.
 *
 *  2. INDÉPENDANCE  — le tirage de la variable B ne dépend pas de celui de la
 *     variable A. Deux villes voisines ne « glissent » donc pas vers la même
 *     combinaison : leurs tirages sont décorrélés variable par variable.
 */

/** Hash FNV-1a 32 bits — rapide, bonne dispersion, stable entre versions de Node. */
export function hash32(str) {
  let h = 0x811c9dc5
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return h >>> 0
}

/** PRNG mulberry32 — déterministe, période suffisante pour notre usage. */
export function mulberry32(seed) {
  let a = seed >>> 0
  return function () {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * Crée un « spinner » pour une page donnée.
 * @param {string} pageSeed identifiant unique et stable de la page (ex. "31/toulouse")
 * @param {string} globalSalt sel global du site (SITE.generation.seed)
 */
export function createSpinner(pageSeed, globalSalt = '') {
  const base = `${globalSalt}::${pageSeed}`

  /** Tirage déterministe d'un élément dans une liste. */
  function pick(key, variants) {
    if (!Array.isArray(variants) || variants.length === 0) {
      throw new Error(`spin.pick("${key}") : liste de variantes vide pour ${pageSeed}`)
    }
    const rnd = mulberry32(hash32(`${base}::${key}`))
    return variants[Math.floor(rnd() * variants.length) % variants.length]
  }

  /** Index tiré (utile pour tracer/auditer la combinaison d'une page). */
  function pickIndex(key, length) {
    const rnd = mulberry32(hash32(`${base}::${key}`))
    return Math.floor(rnd() * length) % length
  }

  /** Tirage de n éléments DISTINCTS (mélange de Fisher-Yates semé). */
  function pickN(key, variants, n) {
    const arr = [...variants]
    const rnd = mulberry32(hash32(`${base}::${key}::n`))
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr.slice(0, Math.min(n, arr.length))
  }

  /** Vrai avec la probabilité p — pour rendre certains blocs optionnels. */
  function chance(key, p) {
    const rnd = mulberry32(hash32(`${base}::${key}::c`))
    return rnd() < p
  }

  /**
   * Résout un texte contenant des jetons {{variable}} en tirant une variante
   * pour chacun. C'est ce qui permet d'écrire un paragraphe comme un gabarit
   * composé de 2 à 3 variables.
   *
   * @param {string} template texte avec des jetons {{cle}}
   * @param {object} banks    dictionnaire { cle: [5 variantes] }
   * @param {object} data     valeurs directes (ville, département…) injectées telles quelles
   * @param {string} scope    préfixe de clé, pour qu'une même variable réutilisée
   *                          dans deux paragraphes puisse tirer différemment
   */
  function resolve(template, banks, data = {}, scope = '') {
    return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
      if (key in data) return String(data[key])
      const bank = banks[key]
      if (!bank) throw new Error(`spin.resolve : variable inconnue "{{${key}}}" (page ${pageSeed})`)
      const chosen = pick(scope ? `${scope}.${key}` : key, bank)
      // Une variante peut elle-même contenir des jetons : on résout en cascade.
      return /\{\{\w+\}\}/.test(chosen) ? resolve(chosen, banks, data, scope) : chosen
    })
  }

  return { pick, pickIndex, pickN, chance, resolve, seed: base }
}
