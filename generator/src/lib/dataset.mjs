/** Accès au jeu de données produit par `npm run data`. */
import donnees from '../data/dataset.json'

export const villes = donnees.villes
export const departements = donnees.departements

export const villeParUrl = new Map(villes.map((v) => [`${v.deptSlug}/${v.slug}`, v]))
export const deptParSlug = new Map(departements.map((d) => [d.slug, d]))

export const urlVille = (v) => `/${v.deptSlug}/${v.slug}/`
export const urlDept = (d) => `/${d.slug}/`

/** Villes d'un département, de la plus peuplée à la moins peuplée. */
export function villesDuDept(slugDept) {
  return villes
    .filter((v) => v.deptSlug === slugDept)
    .sort((a, b) => b.population - a.population)
}
