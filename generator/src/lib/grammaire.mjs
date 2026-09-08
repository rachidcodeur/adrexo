/**
 * GRAMMAIRE FRANÇAISE DES NOMS DE LIEUX
 *
 * Ces formes apparaissent sur les 5 000 pages : une heuristique approximative
 * y produirait des fautes visibles (« en Paris », « de Albi », « dans le Ain »).
 * Les départements sont donc listés explicitement, forme par forme.
 *
 * Pour chaque département : [locatif, génitif]
 *   locatif  -> « nos tournées DANS LE TARN »
 *   génitif  -> « les communes DU TARN »
 */
export const DEPARTEMENTS_FORMES = {
  '01': ['dans l’Ain', 'de l’Ain'],
  '02': ['dans l’Aisne', 'de l’Aisne'],
  '03': ['dans l’Allier', 'de l’Allier'],
  '04': ['dans les Alpes-de-Haute-Provence', 'des Alpes-de-Haute-Provence'],
  '05': ['dans les Hautes-Alpes', 'des Hautes-Alpes'],
  '06': ['dans les Alpes-Maritimes', 'des Alpes-Maritimes'],
  '07': ['en Ardèche', 'de l’Ardèche'],
  '08': ['dans les Ardennes', 'des Ardennes'],
  '09': ['en Ariège', 'de l’Ariège'],
  '10': ['dans l’Aube', 'de l’Aube'],
  '11': ['dans l’Aude', 'de l’Aude'],
  '12': ['dans l’Aveyron', 'de l’Aveyron'],
  '13': ['dans les Bouches-du-Rhône', 'des Bouches-du-Rhône'],
  '14': ['dans le Calvados', 'du Calvados'],
  '15': ['dans le Cantal', 'du Cantal'],
  '16': ['en Charente', 'de la Charente'],
  '17': ['en Charente-Maritime', 'de la Charente-Maritime'],
  '18': ['dans le Cher', 'du Cher'],
  '19': ['en Corrèze', 'de la Corrèze'],
  '20': ['en Corse', 'de Corse'],
  '21': ['en Côte-d’Or', 'de la Côte-d’Or'],
  '22': ['dans les Côtes-d’Armor', 'des Côtes-d’Armor'],
  '23': ['dans la Creuse', 'de la Creuse'],
  '24': ['en Dordogne', 'de la Dordogne'],
  '25': ['dans le Doubs', 'du Doubs'],
  '26': ['dans la Drôme', 'de la Drôme'],
  '27': ['dans l’Eure', 'de l’Eure'],
  '28': ['en Eure-et-Loir', 'd’Eure-et-Loir'],
  '29': ['dans le Finistère', 'du Finistère'],
  '30': ['dans le Gard', 'du Gard'],
  '31': ['en Haute-Garonne', 'de Haute-Garonne'],
  '32': ['dans le Gers', 'du Gers'],
  '33': ['en Gironde', 'de la Gironde'],
  '34': ['dans l’Hérault', 'de l’Hérault'],
  '35': ['en Ille-et-Vilaine', 'd’Ille-et-Vilaine'],
  '36': ['dans l’Indre', 'de l’Indre'],
  '37': ['en Indre-et-Loire', 'd’Indre-et-Loire'],
  '38': ['en Isère', 'de l’Isère'],
  '39': ['dans le Jura', 'du Jura'],
  '40': ['dans les Landes', 'des Landes'],
  '41': ['en Loir-et-Cher', 'de Loir-et-Cher'],
  '42': ['dans la Loire', 'de la Loire'],
  '43': ['en Haute-Loire', 'de la Haute-Loire'],
  '44': ['en Loire-Atlantique', 'de Loire-Atlantique'],
  '45': ['dans le Loiret', 'du Loiret'],
  '46': ['dans le Lot', 'du Lot'],
  '47': ['en Lot-et-Garonne', 'de Lot-et-Garonne'],
  '48': ['en Lozère', 'de la Lozère'],
  '49': ['en Maine-et-Loire', 'de Maine-et-Loire'],
  '50': ['dans la Manche', 'de la Manche'],
  '51': ['dans la Marne', 'de la Marne'],
  '52': ['en Haute-Marne', 'de la Haute-Marne'],
  '53': ['en Mayenne', 'de la Mayenne'],
  '54': ['en Meurthe-et-Moselle', 'de Meurthe-et-Moselle'],
  '55': ['dans la Meuse', 'de la Meuse'],
  '56': ['dans le Morbihan', 'du Morbihan'],
  '57': ['en Moselle', 'de la Moselle'],
  '58': ['dans la Nièvre', 'de la Nièvre'],
  '59': ['dans le Nord', 'du Nord'],
  '60': ['dans l’Oise', 'de l’Oise'],
  '61': ['dans l’Orne', 'de l’Orne'],
  '62': ['dans le Pas-de-Calais', 'du Pas-de-Calais'],
  '63': ['dans le Puy-de-Dôme', 'du Puy-de-Dôme'],
  '64': ['dans les Pyrénées-Atlantiques', 'des Pyrénées-Atlantiques'],
  '65': ['dans les Hautes-Pyrénées', 'des Hautes-Pyrénées'],
  '66': ['dans les Pyrénées-Orientales', 'des Pyrénées-Orientales'],
  '67': ['dans le Bas-Rhin', 'du Bas-Rhin'],
  '68': ['dans le Haut-Rhin', 'du Haut-Rhin'],
  '69': ['dans le Rhône', 'du Rhône'],
  '70': ['en Haute-Saône', 'de la Haute-Saône'],
  '71': ['en Saône-et-Loire', 'de Saône-et-Loire'],
  '72': ['dans la Sarthe', 'de la Sarthe'],
  '73': ['en Savoie', 'de la Savoie'],
  '74': ['en Haute-Savoie', 'de la Haute-Savoie'],
  '75': ['à Paris', 'de Paris'],
  '76': ['en Seine-Maritime', 'de Seine-Maritime'],
  '77': ['en Seine-et-Marne', 'de Seine-et-Marne'],
  '78': ['dans les Yvelines', 'des Yvelines'],
  '79': ['dans les Deux-Sèvres', 'des Deux-Sèvres'],
  '80': ['dans la Somme', 'de la Somme'],
  '81': ['dans le Tarn', 'du Tarn'],
  '82': ['en Tarn-et-Garonne', 'de Tarn-et-Garonne'],
  '83': ['dans le Var', 'du Var'],
  '84': ['dans le Vaucluse', 'du Vaucluse'],
  '85': ['en Vendée', 'de la Vendée'],
  '86': ['dans la Vienne', 'de la Vienne'],
  '87': ['en Haute-Vienne', 'de la Haute-Vienne'],
  '88': ['dans les Vosges', 'des Vosges'],
  '89': ['dans l’Yonne', 'de l’Yonne'],
  '90': ['dans le Territoire de Belfort', 'du Territoire de Belfort'],
  '91': ['dans l’Essonne', 'de l’Essonne'],
  '92': ['dans les Hauts-de-Seine', 'des Hauts-de-Seine'],
  '93': ['en Seine-Saint-Denis', 'de Seine-Saint-Denis'],
  '94': ['dans le Val-de-Marne', 'du Val-de-Marne'],
  '95': ['dans le Val-d’Oise', 'du Val-d’Oise'],
  '971': ['en Guadeloupe', 'de Guadeloupe'],
  '972': ['en Martinique', 'de Martinique'],
  '973': ['en Guyane', 'de Guyane'],
  '974': ['à La Réunion', 'de La Réunion'],
  '976': ['à Mayotte', 'de Mayotte'],
}

export function dansDepartement(code) {
  const f = DEPARTEMENTS_FORMES[code]
  if (!f) throw new Error(`Département sans forme grammaticale déclarée : ${code}`)
  return f[0]
}

export function duDepartement(code) {
  const f = DEPARTEMENTS_FORMES[code]
  if (!f) throw new Error(`Département sans forme grammaticale déclarée : ${code}`)
  return f[1]
}

/** Voyelle ou h muet en initiale : déclenche l'élision (« d’Albi »). */
const ELIDE = /^[aeiouyàâäéèêëîïôöûüh]/i

/** « à Albi » / « au Havre » / « aux Sables-d’Olonne » / « à La Rochelle ». */
export function aVille(nom) {
  if (/^Les /.test(nom)) return `aux ${nom.slice(4)}`
  if (/^Le /.test(nom)) return `au ${nom.slice(3)}`
  return `à ${nom}`
}

/** « d’Albi » / « de Gaillac » / « du Havre » / « des Sables-d’Olonne ». */
export function deVille(nom) {
  if (/^Les /.test(nom)) return `des ${nom.slice(4)}`
  if (/^Le /.test(nom)) return `du ${nom.slice(3)}`
  if (ELIDE.test(nom)) return `d’${nom}`
  return `de ${nom}`
}
