/**
 * GABARITS DE PARAGRAPHES
 *
 * Un paragraphe n'est jamais écrit en dur : c'est un gabarit contenant 2 à 3
 * jetons {{variable}}. Chaque emplacement de paragraphe propose 5 gabarits.
 *
 * Combinatoire d'un emplacement : 5 gabarits x (5^2 à 5^3) tirages de variables
 * = 125 à 625 formulations possibles, avant même de compter les variables
 * conditionnées par l'habitat et la strate de population.
 *
 * Convention : chaque tableau expose EXACTEMENT 5 entrées (vérifié par l'audit).
 */

// ------------------------------------------------------------------ balises
export const META = {
  titre: [
    'Distribution en boîtes aux lettres {{villePrep}} ({{codeDept}}) | {{marque}}',
    'Distribution de flyers et prospectus {{villePrep}} ({{codeDept}}) | {{marque}}',
    '{{ville}} : distribution en boîtes aux lettres et imprimés | {{marque}}',
    'Distribution d’imprimés {{villePrep}} ({{codeDept}}) — devis | {{marque}}',
    'Distribution toutes boîtes {{villePrep}} ({{codeDept}}) | {{marque}}',
  ],
  description: [
    'Distribution de flyers, prospectus et catalogues en boîtes aux lettres {{villePrep}} ({{cp}}), {{deptPrep}}. Environ {{boites}} boîtes couvertes, tournées suivies, devis sans engagement.',
    'Diffusion d’imprimés publicitaires {{villePrep}} et dans les communes voisines {{deptPrep}}. Ciblage par quartier, suivi des tournées, devis au nombre de boîtes.',
    'Campagnes de distribution en boîtes aux lettres {{villePrep}} ({{cp}}) : flyers, dépliants, catalogues et journaux municipaux. Couverture d’environ {{boites}} foyers.',
    'Organiser une distribution d’imprimés {{villePrep}} ({{codeDept}}) : découpage par secteur, contrôle terrain et compte rendu de couverture. Devis rapide.',
    'Distribution toutes boîtes {{villePrep}}, {{deptPrep}} : environ {{boites}} boîtes aux lettres, ciblage à la rue près et suivi de campagne.',
  ],
  h1: [
    'Distribution en boîtes aux lettres {{villePrep}}',
    'Distribution de flyers et prospectus {{villePrep}}',
    'Distribution d’imprimés {{villePrep}} ({{codeDept}})',
    'Distribution toutes boîtes {{villePrep}}',
    'Distribution en boîtes aux lettres {{villePrep}} et alentour',
  ],
}

// ----------------------------------------------------------------- sections
/**
 * `titres`      : 5 variantes de H2.
 * `paragraphes` : liste d'emplacements ; chaque emplacement = 5 gabarits.
 */
export const SECTIONS = [
  {
    id: 'intro',
    sansTitre: true, // paragraphes d'accroche placés directement sous le H1
    paragraphes: [
      [
        '{{accroche}} {{positionnement}} {{benefice}}',
        '{{positionnement}} {{accroche}} {{benefice}}',
        '{{accroche}} {{benefice}} {{positionnement}}',
        '{{positionnement}} {{benefice}}',
        '{{accroche}} {{positionnement}}',
      ],
      [
        '{{echelle}} {{enjeu}}',
        '{{echelle}} {{enjeu}} {{transition}}, tout dépend ensuite du périmètre retenu.',
        '{{enjeu}} {{echelle}}',
        '{{echelle}} {{zoneChalandise}}',
        '{{echelle}} {{enjeu}} {{volumeAdapte}}',
      ],
    ],
  },

  {
    id: 'pourquoi',
    titres: [
      'Pourquoi distribuer en boîtes aux lettres {{villePrep}}',
      'L’intérêt de l’imprimé {{villePrep}}',
      'Ce que la boîte aux lettres apporte {{villePrep}}',
      'Un canal qui garde sa place {{villePrep}}',
      'Pourquoi l’imprimé fonctionne encore {{villePrep}}',
    ],
    paragraphes: [
      [
        '{{canal}} {{complementDigital}}',
        '{{canal}} {{benefice}}',
        '{{complementDigital}} {{canal}}',
        '{{canal}} {{transition}}, c’est ce qui explique la persistance du support papier en zone résidentielle.',
        '{{canal}} {{complementDigital}} {{transition}}, les deux canaux ne s’opposent pas.',
      ],
      [
        'Les annonceurs qui distribuent {{villePrep}} sont surtout des {{cible}}. {{volumeAdapte}}',
        'Ce canal est utilisé {{villePrep}} par des {{cible}}. {{volumeAdapte}}',
        'On retrouve {{villePrep}} des {{cible}}, avec des volumes très variables. {{volumeAdapte}}',
        'Les profils concernés {{villePrep}} vont des {{cible}}. {{accompagnement}}',
        'Parmi les annonceurs actifs {{villePrep}} : des {{cible}}. {{volumeAdapte}}',
      ],
      [
        '{{complementDigital}} {{saisonnalite}}',
        '{{saisonnalite}} {{complementDigital}}',
        '{{complementDigital}} {{devis}}',
        '{{saisonnalite}} {{benefice}}',
        '{{complementDigital}} {{zoneChalandise}}',
      ],
    ],
  },

  {
    id: 'terrain',
    titres: [
      'Le terrain {{villePrep}} : habitat et accès aux boîtes',
      'À quoi ressemble une tournée {{villePrep}}',
      'L’habitat {{deVille}} et ses contraintes de distribution',
      'Couvrir les quartiers {{deVille}}',
      'La réalité du terrain {{villePrep}}',
    ],
    paragraphes: [
      [
        '{{terrain}} {{acces}}',
        '{{terrain}} {{acces}} {{rythme}}',
        '{{terrain}} {{rythme}}',
        '{{acces}} {{terrain}}',
        '{{terrain}} {{transition}}, {{acces}}',
      ],
      [
        '{{rythme}} {{ciblageMethode}}',
        '{{ciblageMethode}} {{rythme}}',
        '{{rythme}} {{tournee}}',
        '{{ciblageMethode}} {{ciblagePrecision}}',
        '{{rythme}} {{ciblagePrecision}}',
      ],
      [
        '{{tournee}} {{acces}}',
        '{{acces}} {{tournee}}',
        '{{tournee}} {{terrain}}',
        '{{acces}} {{ciblageMethode}}',
        '{{tournee}} {{rythme}}',
      ],
    ],
  },

  {
    id: 'supports',
    titres: [
      'Quels supports distribuer {{villePrep}}',
      'Les imprimés que nous diffusons {{villePrep}}',
      'Formats et supports distribués {{villePrep}}',
      'Du flyer au catalogue : les supports pris en charge',
      'Les documents diffusés {{villePrep}}',
    ],
    paragraphes: [
      [
        'Nous diffusons {{villePrep}} des {{supportsPhrase}}. {{formatPhrase}}',
        'Les supports distribués {{villePrep}} couvrent les {{supportsPhrase}}. {{formatPhrase}}',
        'Sont pris en charge {{villePrep}} : {{supportsPhrase}}. {{formatPhrase}}',
        'La prestation couvre {{villePrep}} les {{supportsPhrase}}. {{formatPhrase}}',
        '{{formatPhrase}} Nous traitons {{villePrep}} les {{supportsPhrase}}.',
      ],
      [
        '{{impression}} {{reglementation}}',
        '{{reglementation}} {{impression}}',
        '{{impression}} {{delai}}',
        '{{reglementation}} {{transition}}, seuls les documents municipaux échappent à cette règle.',
        '{{impression}} {{transition}}, {{reglementation}}',
      ],
    ],
  },

  {
    id: 'ciblage',
    titres: [
      'Cibler les bons secteurs {{villePrep}}',
      'Définir la zone à couvrir {{villePrep}}',
      'Le découpage des secteurs {{villePrep}}',
      'Choisir son périmètre {{villePrep}}',
      'Zone de chalandise et découpage {{villePrep}}',
    ],
    paragraphes: [
      [
        '{{zoneChalandise}} {{ciblageMethode}}',
        '{{ciblageMethode}} {{zoneChalandise}}',
        '{{zoneChalandise}} {{ciblagePrecision}}',
        '{{ciblageMethode}} {{ciblagePrecision}} {{zoneChalandise}}',
        '{{zoneChalandise}} {{transition}}, {{ciblagePrecision}}',
      ],
      [
        '{{ciblagePrecision}} {{accompagnement}}',
        '{{accompagnement}} {{ciblagePrecision}}',
        '{{ciblagePrecision}} {{volumeAdapte}}',
        '{{accompagnement}} {{volumeAdapte}}',
        '{{volumeAdapte}} {{accompagnement}}',
      ],
      [
        '{{bassinVie}} {{elargissement}}',
        '{{elargissement}} {{bassinVie}}',
        '{{bassinVie}} {{mutualisation}}',
        '{{mutualisation}} {{elargissement}}',
        '{{bassinVie}} {{zoneChalandise}} {{elargissement}}',
      ],
    ],
  },

  {
    id: 'organisation',
    titres: [
      'Comment se déroule une campagne {{villePrep}}',
      'Organisation et suivi des tournées {{villePrep}}',
      'Le déroulement d’une opération {{villePrep}}',
      'Planification, contrôle et compte rendu',
      'Comment nous organisons la diffusion {{villePrep}}',
    ],
    paragraphes: [
      [
        '{{tournee}} {{suivi}}',
        '{{tournee}} {{suivi}} {{qualite}}',
        '{{suivi}} {{tournee}}',
        '{{tournee}} {{qualite}}',
        '{{suivi}} {{qualite}} {{tournee}}',
      ],
      [
        '{{qualite}} {{delai}}',
        '{{delai}} {{qualite}}',
        '{{delai}} {{saisonnalite}}',
        '{{saisonnalite}} {{delai}}',
        '{{qualite}} {{saisonnalite}}',
      ],
      [
        '{{reglementation}} {{suivi}}',
        '{{suivi}} {{reglementation}}',
        '{{reglementation}} {{qualite}}',
        '{{tournee}} {{reglementation}}',
        '{{reglementation}} {{delai}}',
      ],
    ],
  },

  {
    id: 'alentour',
    titres: [
      'Distribuer autour {{deVille}}',
      'Étendre la diffusion aux communes voisines',
      '{{ville}} et les communes limitrophes',
      'Couvrir le bassin de vie {{deVille}}',
      'Au-delà {{deVille}} : les communes proches',
    ],
    paragraphes: [
      [
        '{{bassinVie}} {{mutualisation}}',
        '{{mutualisation}} {{bassinVie}}',
        '{{bassinVie}} {{elargissement}} {{mutualisation}}',
        '{{mutualisation}} {{elargissement}}',
        '{{bassinVie}} {{mutualisation}} {{elargissement}}',
      ],
      [
        '{{elargissement}} {{accompagnement}}',
        '{{elargissement}} {{devis}}',
        '{{accompagnement}} {{elargissement}}',
        '{{elargissement}} {{volumeAdapte}}',
        '{{elargissement}} {{ciblagePrecision}}',
      ],
    ],
  },

  {
    id: 'budget',
    titres: [
      'Combien coûte une distribution {{villePrep}}',
      'Budget et devis pour {{ville}}',
      'Comment est calculé le prix {{villePrep}}',
      'Chiffrer votre campagne {{villePrep}}',
      'Le budget d’une opération {{villePrep}}',
    ],
    paragraphes: [
      [
        '{{devis}} {{volumeAdapte}}',
        '{{devis}} {{zoneChalandise}}',
        '{{volumeAdapte}} {{devis}}',
        '{{devis}} {{accompagnement}}',
        '{{devis}} {{transition}}, {{volumeAdapte}}',
      ],
      [
        '{{accompagnement}} {{ctaPhrase}}',
        '{{ctaPhrase}} {{accompagnement}}',
        '{{accompagnement}} {{delai}} {{ctaPhrase}}',
        '{{volumeAdapte}} {{ctaPhrase}}',
        '{{accompagnement}} {{saisonnalite}}',
      ],
    ],
  },
]

// ---------------------------------------------------------------------- FAQ
/** 4 questions tirées parmi 8, chaque réponse composée de 2 variables. */
export const FAQ = [
  {
    q: ['Quel volume minimum pour distribuer {{villePrep}} ?', 'Y a-t-il un minimum de boîtes {{villePrep}} ?'],
    r: ['{{volumeAdapte}} {{devis}}', '{{volumeAdapte}} {{accompagnement}}', '{{devis}} {{volumeAdapte}}', '{{volumeAdapte}} {{ciblagePrecision}}', '{{volumeAdapte}} {{zoneChalandise}}'],
  },
  {
    q: ['Combien de boîtes aux lettres compte {{ville}} ?', 'Quel est le nombre de foyers {{villePrep}} ?'],
    r: ['{{echelle}} {{enjeu}}', '{{echelle}} {{ciblagePrecision}}', '{{echelle}} {{zoneChalandise}}', '{{echelle}} {{volumeAdapte}}', '{{echelle}} {{accompagnement}}'],
  },
  {
    q: ['Les boîtes « Stop Pub » sont-elles évitées ?', 'Comment gérez-vous les refus de publicité {{villePrep}} ?'],
    r: ['{{reglementation}} {{qualite}}', '{{reglementation}} {{suivi}}', '{{reglementation}} {{ciblageMethode}}', '{{qualite}} {{reglementation}}', '{{reglementation}} {{tournee}}'],
  },
  {
    q: ['En combien de temps la campagne est-elle distribuée ?', 'Quel est le délai de diffusion {{villePrep}} ?'],
    r: ['{{delai}} {{tournee}}', '{{delai}} {{saisonnalite}}', '{{tournee}} {{delai}}', '{{delai}} {{suivi}}', '{{delai}} {{rythme}}'],
  },
  {
    q: ['Comment savoir si la distribution a bien été faite ?', 'Quelles preuves de distribution fournissez-vous ?'],
    r: ['{{suivi}} {{qualite}}', '{{qualite}} {{suivi}}', '{{suivi}} {{tournee}}', '{{qualite}} {{tournee}}', '{{suivi}} {{ciblageMethode}}'],
  },
  {
    q: ['Puis-je ne cibler qu’un quartier {{deVille}} ?', 'Peut-on limiter la diffusion à certains secteurs {{villePrep}} ?'],
    r: ['{{ciblagePrecision}} {{ciblageMethode}}', '{{ciblageMethode}} {{ciblagePrecision}}', '{{ciblagePrecision}} {{accompagnement}}', '{{ciblagePrecision}} {{zoneChalandise}}', '{{ciblagePrecision}} {{volumeAdapte}}'],
  },
  {
    q: ['Prenez-vous en charge l’impression des supports ?', 'Faut-il fournir les imprimés {{villePrep}} ?'],
    r: ['{{impression}} {{formatPhrase}}', '{{impression}} {{delai}}', '{{formatPhrase}} {{impression}}', '{{impression}} {{devis}}', '{{impression}} {{accompagnement}}'],
  },
  {
    q: ['Quelle est la meilleure période pour distribuer ?', 'Quand programmer une distribution {{villePrep}} ?'],
    r: ['{{saisonnalite}} {{delai}}', '{{saisonnalite}} {{complementDigital}}', '{{delai}} {{saisonnalite}}', '{{saisonnalite}} {{tournee}}', '{{saisonnalite}} {{devis}}'],
  },
]

// ============================================================================
// PAGES DÉPARTEMENTS
// Même mécanique : 5 variantes par emplacement, paragraphes de 2 à 3 variables.
// Jetons propres au département : {{dept}} {{deptPrep}} {{duDept}} {{codeDept}}
//                                 {{region}} {{nbVilles}} {{popDept}} {{prefecture}}
// ============================================================================
export const META_DEPT = {
  titre: [
    'Distribution en boîtes aux lettres {{deptPrep}} ({{codeDept}}) | {{marque}}',
    'Distribution de flyers {{deptPrep}} ({{codeDept}}) | {{marque}}',
    '{{dept}} ({{codeDept}}) : distribution d’imprimés en boîtes aux lettres | {{marque}}',
    'Distribution toutes boîtes {{deptPrep}} ({{codeDept}}) | {{marque}}',
    'Distribution d’imprimés {{deptPrep}} — {{nbVilles}} communes | {{marque}}',
  ],
  description: [
    'Distribution de flyers, prospectus et catalogues en boîtes aux lettres {{deptPrep}} ({{codeDept}}) : {{nbVilles}} communes couvertes, {{deVille}} aux villages. Devis sans engagement.',
    'Diffusion d’imprimés publicitaires {{deptPrep}} : {{nbVilles}} communes, ciblage par secteur et suivi des tournées. Devis au nombre de boîtes.',
    'Campagnes de distribution en boîtes aux lettres {{deptPrep}} ({{codeDept}}), {{nbVilles}} communes desservies. Flyers, catalogues et journaux municipaux.',
    'Organiser une distribution d’imprimés {{deptPrep}} : découpage par commune, contrôle terrain et compte rendu. {{nbVilles}} communes couvertes.',
    'Distribution toutes boîtes {{deptPrep}} ({{codeDept}}) : {{nbVilles}} communes, du chef-lieu aux zones rurales. Chiffrage rapide.',
  ],
  h1: [
    'Distribution en boîtes aux lettres {{deptPrep}} ({{codeDept}})',
    'Distribution de flyers et prospectus {{deptPrep}}',
    'Distribution d’imprimés {{deptPrep}} ({{codeDept}})',
    'Distribution toutes boîtes {{deptPrep}}',
    'Distribution en boîtes aux lettres : {{dept}} ({{codeDept}})',
  ],
}

export const SECTIONS_DEPT = [
  {
    id: 'intro',
    sansTitre: true,
    paragraphes: [
      [
        '{{accroche}} {{couverture}} {{benefice}}',
        '{{couverture}} {{accroche}} {{benefice}}',
        '{{accroche}} {{couverture}}',
        '{{couverture}} {{benefice}} {{accroche}}',
        '{{benefice}} {{couverture}}',
      ],
      [
        '{{echelleDept}} {{zoneChalandise}}',
        '{{echelleDept}} {{ciblageMethode}}',
        '{{zoneChalandise}} {{echelleDept}}',
        '{{echelleDept}} {{ciblagePrecision}}',
        '{{echelleDept}} {{volumeAdapte}}',
      ],
    ],
  },
  {
    id: 'couverture',
    titres: [
      'Couvrir {{dept}} commune par commune',
      'Notre couverture {{deptPrep}}',
      'Les {{nbVilles}} communes desservies {{deptPrep}}',
      'Du chef-lieu aux communes rurales',
      'Organiser une campagne départementale {{deptPrep}}',
    ],
    paragraphes: [
      [
        '{{mutualisation}} {{bassinVie}}',
        '{{bassinVie}} {{mutualisation}}',
        '{{mutualisation}} {{elargissement}}',
        '{{bassinVie}} {{mutualisation}} {{elargissement}}',
        '{{mutualisation}} {{ciblageMethode}}',
      ],
      [
        '{{ciblageMethode}} {{ciblagePrecision}}',
        '{{ciblagePrecision}} {{ciblageMethode}}',
        '{{ciblageMethode}} {{volumeAdapte}}',
        '{{ciblagePrecision}} {{accompagnement}}',
        '{{ciblageMethode}} {{accompagnement}}',
      ],
    ],
  },
  {
    id: 'methode',
    titres: [
      'Comment se déroule une campagne {{deptPrep}}',
      'Organisation et contrôle des tournées',
      'Notre méthode de diffusion {{deptPrep}}',
      'Planification et suivi {{deptPrep}}',
      'Le déroulement d’une opération départementale',
    ],
    paragraphes: [
      [
        '{{tournee}} {{suivi}}',
        '{{tournee}} {{suivi}} {{qualite}}',
        '{{suivi}} {{qualite}}',
        '{{tournee}} {{qualite}}',
        '{{suivi}} {{tournee}}',
      ],
      [
        '{{reglementation}} {{delai}}',
        '{{delai}} {{reglementation}}',
        '{{reglementation}} {{qualite}}',
        '{{delai}} {{saisonnalite}}',
        '{{reglementation}} {{saisonnalite}}',
      ],
    ],
  },
  {
    id: 'supports',
    titres: [
      'Les supports distribués {{deptPrep}}',
      'Quels imprimés diffusons-nous {{deptPrep}}',
      'Formats pris en charge {{deptPrep}}',
      'Du flyer au catalogue {{deptPrep}}',
      'Supports et formats {{deptPrep}}',
    ],
    paragraphes: [
      [
        'Nous diffusons {{deptPrep}} des {{supportsPhrase}}. {{formatPhrase}}',
        'Sont pris en charge {{deptPrep}} : {{supportsPhrase}}. {{formatPhrase}}',
        'La prestation couvre {{deptPrep}} les {{supportsPhrase}}. {{impression}}',
        '{{formatPhrase}} Nous traitons {{deptPrep}} les {{supportsPhrase}}.',
        'Les supports diffusés {{deptPrep}} vont des {{supportsPhrase}}. {{impression}}',
      ],
      [
        '{{devis}} {{volumeAdapte}}',
        '{{volumeAdapte}} {{devis}}',
        '{{devis}} {{accompagnement}}',
        '{{accompagnement}} {{devis}}',
        '{{devis}} {{ciblagePrecision}}',
      ],
    ],
  },
]

/**
 * Banques départementales conditionnées par le nombre de communes couvertes.
 * Nécessaire car Paris (1 commune) et le Nord (200+) ne peuvent pas partager
 * la même phrase : « couvre 1 communes, de Paris aux villages » est faux deux fois.
 */
export const BANKS_DEPT = {
  unique: {
    couverture: [
      '{{marque}} couvre la commune {{deVille}}, qui constitue à elle seule le département.',
      'Le département se confond avec la commune {{deVille}}, que nous couvrons intégralement.',
      'Ici, le territoire départemental correspond à une seule commune : {{prefecture}}.',
      '{{marque}} intervient sur {{prefecture}}, commune unique du département.',
      'La couverture porte sur {{prefecture}}, seule commune du département.',
    ],
    echelleDept: [
      'Le territoire compte {{popDept}} habitants, ce qui en fait l’une des zones les plus denses de France.',
      'Avec {{popDept}} habitants, l’enjeu est le découpage interne plutôt que l’étendue géographique.',
      '{{popDept}} habitants sur un territoire restreint : le ciblage se joue au quartier.',
      'La concentration de {{popDept}} habitants impose de raisonner par arrondissement et par quartier.',
      'Le volume de {{popDept}} habitants rend indispensable une sélection fine des secteurs.',
    ],
  },
  petit: {
    couverture: [
      '{{marque}} couvre {{nbVilles}} communes {{deptPrep}}, à partir {{deVille}}.',
      'Nos tournées desservent {{nbVilles}} communes {{deptPrep}}, dont {{prefecture}}.',
      '{{nbVilles}} communes {{deptPrep}} sont couvertes, {{prefecture}} en tête.',
      'La couverture porte sur {{nbVilles}} communes {{deptPrep}}, autour {{deVille}}.',
      '{{marque}} intervient sur {{nbVilles}} communes {{deptPrep}}, {{prefecture}} comprise.',
    ],
    echelleDept: [
      'Le département est peu dense : les tournées y regroupent systématiquement plusieurs communes.',
      'La faible densité impose de mutualiser les communes pour tenir un coût raisonnable.',
      'Sur un territoire de ce type, l’opération se conçoit à l’échelle du canton.',
      'Les distances entre communes structurent davantage le coût que le nombre de boîtes.',
      'Le regroupement de communes est ici la règle plutôt que l’exception.',
    ],
  },
  moyen: {
    couverture: [
      '{{marque}} couvre {{nbVilles}} communes {{deptPrep}}, {{deVille}} aux communes rurales.',
      'Nos tournées desservent {{nbVilles}} communes {{deptPrep}}, du chef-lieu aux villages.',
      '{{nbVilles}} communes sont couvertes {{deptPrep}}, {{prefecture}} incluse.',
      'La couverture s’étend à {{nbVilles}} communes {{deptPrep}}, urbaines comme rurales.',
      '{{marque}} intervient sur {{nbVilles}} communes {{deptPrep}}, autour {{deVille}}.',
    ],
    echelleDept: [
      'Le département mêle pôles urbains et communes rurales : les deux logiques de tournée cohabitent.',
      'Entre chef-lieu et campagne, le découpage doit distinguer nettement les types de secteurs.',
      'La diversité du territoire impose des tournées calibrées différemment selon les zones.',
      'Les communes denses et les communes étalées ne se traitent pas au même rythme.',
      'Le plan de diffusion sépare généralement les pôles urbains du reste du territoire.',
    ],
  },
  grand: {
    couverture: [
      '{{marque}} couvre {{nbVilles}} communes {{deptPrep}}, {{deVille}} aux plus petits bourgs.',
      'Nos tournées desservent {{nbVilles}} communes {{deptPrep}}, sur l’ensemble du territoire.',
      '{{nbVilles}} communes sont couvertes {{deptPrep}}, {{prefecture}} en tête de réseau.',
      'La couverture porte sur {{nbVilles}} communes {{deptPrep}}, urbaines, périurbaines et rurales.',
      '{{marque}} intervient sur {{nbVilles}} communes {{deptPrep}}, dont {{prefecture}}.',
    ],
    echelleDept: [
      'À cette échelle, une campagne départementale se planifie par vagues successives.',
      'Le volume impose de hiérarchiser : tous les secteurs ne se valent pas commercialement.',
      'Couvrir l’intégralité du département représente un budget que peu d’annonceurs engagent d’un coup.',
      'La pratique courante consiste à traiter d’abord les agglomérations, puis à élargir.',
      'Le découpage se fait par bassin de vie plutôt que commune par commune.',
    ],
  },
}
