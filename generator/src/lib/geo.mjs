/** Distance orthodromique en km (formule de haversine). */
export function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371
  const toRad = (d) => (d * Math.PI) / 180
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(a))
}

/** Slugification française : accents retirés, ponctuation normalisée. */
export function slugify(s) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’]/g, '-')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Séparateur de milliers à la française (espace insécable fine). */
export function nombre(n) {
  return Math.round(n).toLocaleString('fr-FR').replace(/ | /g, ' ')
}

/** « à Albi » / « au Havre » / « aux Sables-d'Olonne » — préposition correcte. */
export function prepositionVille(nom) {
  if (/^Les /i.test(nom)) return `aux ${nom.slice(4)}`
  if (/^Le /i.test(nom)) return `au ${nom.slice(3)}`
  if (/^La /i.test(nom)) return `à ${nom}`
  return `à ${nom}`
}

/** « dans le Tarn » / « en Gironde » / « dans les Landes » — article départemental. */
export function prepositionDepartement(nom) {
  if (/^(Les|Hautes|Basses|Alpes|Pyrénées|Bouches|Ardennes|Landes|Deux-Sèvres|Vosges|Yvelines|Côtes|Hauts|Pays)/i.test(nom)) {
    if (/^Les /i.test(nom)) return `dans les ${nom.slice(4)}`
    return `dans les ${nom}`
  }
  if (/^(Ain|Aisne|Allier|Aube|Aude|Aveyron|Cher|Calvados|Cantal|Doubs|Finistère|Gard|Gers|Jura|Loiret|Lot|Maine|Morbihan|Nord|Puy|Rhône|Tarn|Var|Vaucluse|Val|Territoire|Bas-Rhin|Haut-Rhin|Loir|Cotentin)/i.test(nom)) {
    return `dans le ${nom}`
  }
  return `en ${nom}`
}
