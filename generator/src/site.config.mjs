/**
 * CONFIGURATION MÉTIER — un seul fichier à dupliquer pour lancer une nouvelle activité.
 *
 * Tout ce qui est propre à l'activité (nom, domaine, vocabulaire, tracking, mentions
 * légales, formulaire) est ici. Le générateur, les variables et les templates ne
 * contiennent aucune valeur en dur.
 *
 * Les valeurs marquées « À RENSEIGNER » doivent être remplies avant mise en production.
 */
export const SITE = {
  // ---- Identité ------------------------------------------------------------
  metier: 'distribution',
  nom: 'Adrexo',
  baseUrl: 'https://adrexo.net',

  // ---- Vocabulaire métier (utilisé par les templates et les variables) -----
  // `activite` : le nom de la prestation, décliné pour éviter la répétition.
  activite: {
    principal: 'distribution en boîtes aux lettres',
    court: 'distribution',
    synonymes: [
      'distribution en boîtes aux lettres',
      'diffusion en boîtes aux lettres',
      'distribution d’imprimés publicitaires',
      'diffusion de supports imprimés',
      'distribution toutes boîtes',
    ],
    supports: ['flyers', 'prospectus', 'dépliants', 'catalogues', 'journaux municipaux', 'tracts'],
  },

  // ---- Segments URL --------------------------------------------------------
  // Architecture CDC : domaine.fr/<departement>/<ville>/
  urls: {
    merci: '/merci/',
    mentionsLegales: '/mentions-legales/',
    confidentialite: '/politique-de-confidentialite/',
  },

  // ---- Conversion ----------------------------------------------------------
  contact: {
    // Numéro Keyyo dédié à l'activité. Format E.164 pour le lien tel:.
    telephone: '+33000000000',        // À RENSEIGNER — numéro Keyyo dédié
    telephoneAffiche: '00 00 00 00 00', // À RENSEIGNER
    typesTravaux: [
      'Distribution de flyers et prospectus',
      'Distribution de journaux municipaux',
      'Distribution de tracts',
      'Distribution de catalogues et brochures',
      'Street marketing',
      'Autre / je ne sais pas encore',
    ],
    delais: ['Dès que possible', 'Sous 2 à 4 semaines', 'Sous 1 à 3 mois', 'Simple demande d’information'],
  },

  // ---- API leads -----------------------------------------------------------
  lead: {
    endpoint: 'https://api.example.com/receiveLead', // À RENSEIGNER
    slugActivite: 'distribution-bal',
    origine: 'site-national-distribution',
  },

  // ---- Tracking (bloc 7 du CDC) -------------------------------------------
  // Laisser une valeur vide désactive proprement la balise correspondante.
  tracking: {
    googleAdsId: '',       // À RENSEIGNER — AW-XXXXXXXXX du compte MCC
    googleAdsLabel: '',    // À RENSEIGNER — label de conversion submit_lead
    uetTagId: '97262223',
    metaPixelId: '',       // À RENSEIGNER
  },

  // ---- Mentions légales / conformité (bloc 5 du CDC) ----------------------
  legal: {
    editeur: 'Home Service',
    mentionFooter: 'Une marque de Home Service',
    siret: '000 000 000 00000', // À RENSEIGNER
  },

  // ---- Génération ----------------------------------------------------------
  generation: {
    // Sel du générateur pseudo-aléatoire. Le changer redistribue TOUTES les
    // variantes du site — à ne faire qu'avant une première mise en ligne.
    seed: 'adrexo-v1',
    // Nombre de communes voisines affichées en bas de page ville.
    nbCommunesVoisines: 8,
    // Rayon max (km) pour qu'une commune soit considérée voisine.
    rayonVoisinesKm: 30,
  },
}

export default SITE
