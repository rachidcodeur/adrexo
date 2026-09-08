/**
 * BANQUES DE VARIABLES
 *
 * Règle du projet : chaque variable expose EXACTEMENT 5 variantes.
 * Un test automatique (scripts/audit.mjs) échoue si ce n'est pas le cas.
 *
 * Deux familles :
 *  - BANKS       : variables universelles, tirées pour toutes les villes.
 *  - BANKS_BY    : variables conditionnées par une donnée réelle de la commune
 *                  (type d'habitat déduit de la densité, strate de population).
 *                  C'est ce qui rend le contenu réellement différent d'une ville
 *                  à l'autre, et pas seulement mélangé.
 *
 * Jetons de données disponibles dans toutes les variantes :
 *   {{ville}} {{villePrep}} {{dept}} {{deptPrep}} {{codeDept}} {{region}}
 *   {{cp}} {{pop}} {{boites}} {{densite}} {{superficie}}
 */

export const BANKS = {
  // ---------------------------------------------------------------- ouverture
  accroche: [
    'La boîte aux lettres reste l’un des rares canaux qui atteint un foyer sans dépendre d’un algorithme.',
    'Déposer un imprimé chez l’habitant, c’est occuper un espace que personne ne partage avec vos concurrents.',
    'Là où la publicité en ligne se dilue, l’imprimé distribué en main propre garde une présence physique.',
    'Un support papier posé dans une boîte aux lettres se lit, se garde et se transmet.',
    'La communication de proximité conserve un avantage simple : elle arrive au domicile, sans filtre.',
  ],

  positionnement: [
    '{{marque}} organise la {{activite}} {{villePrep}} et sur les communes alentour.',
    '{{marque}} prend en charge la {{activite}} sur le territoire {{deVille}} et son bassin de vie.',
    'Nous couvrons {{ville}} ({{cp}}) et les communes voisines pour vos opérations de {{activiteCourt}}.',
    '{{marque}} intervient {{villePrep}} pour la diffusion de vos supports imprimés en boîtes aux lettres.',
    'Nos tournées couvrent {{ville}} {{deptPrep}} ainsi que les communes limitrophes.',
  ],

  benefice: [
    'L’objectif est simple : toucher les foyers de votre zone de chalandise au bon moment, avec le bon volume.',
    'Le principe reste le même quelle que soit la taille de l’opération : la bonne zone, le bon nombre d’exemplaires, la bonne période.',
    'Vous choisissez les secteurs, nous nous chargeons du découpage, des tournées et du contrôle.',
    'Chaque campagne est calibrée sur votre zone réelle de clientèle, pas sur un périmètre théorique.',
    'Le but est de concentrer votre budget sur les foyers qui peuvent réellement devenir clients.',
  ],

  // ------------------------------------------------------------------ canal
  canal: [
    'Contrairement à une annonce en ligne, un imprimé ne disparaît pas au défilement : il reste sur la table de la cuisine.',
    'Un prospectus se consulte au moment choisi par le foyer, ce qui lui donne une durée de vie que le numérique n’a pas.',
    'Le support papier n’est ni bloqué par un filtre publicitaire, ni soumis aux enchères d’un espace publicitaire.',
    'Une distribution ne subit ni coût par clic, ni concurrence sur un mot-clé : le coût est connu à l’avance.',
    'La boîte aux lettres touche aussi les foyers les moins connectés, souvent absents des campagnes en ligne.',
  ],

  cible: [
    'commerces de proximité, enseignes de périphérie, artisans, services à domicile et collectivités',
    'commerçants, franchises locales, professions libérales, associations et services municipaux',
    'points de vente, réseaux d’enseignes, artisans du bâtiment, écoles privées et acteurs associatifs',
    'restaurants, garages, salles de sport, agences immobilières et services aux particuliers',
    'entreprises locales, sièges d’enseignes nationales, mairies et organisateurs d’événements',
  ],

  // --------------------------------------------------------------- supports
  supportsPhrase: [
    'flyers, dépliants, prospectus, catalogues, brochures et journaux municipaux',
    'prospectus, imprimés promotionnels, dépliants deux volets, catalogues et bulletins d’information',
    'flyers A5, dépliants A4, catalogues brochés, magazines municipaux et tracts',
    'imprimés publicitaires, plaquettes commerciales, catalogues saisonniers et supports institutionnels',
    'dépliants, prospectus, journaux locaux, catalogues et documents d’information municipale',
  ],

  formatPhrase: [
    'Du simple A6 au catalogue de plusieurs dizaines de pages, le format ne change pas la méthode, seulement le poids des tournées.',
    'Les formats courants vont du A6 au A4 plié ; au-delà, nous adaptons le nombre d’exemplaires portés par tournée.',
    'Petits formats légers ou catalogues épais : le découpage des tournées est recalculé selon le grammage.',
    'Le grammage et le format déterminent le volume transportable par distributeur, donc la durée de l’opération.',
    'Un imprimé léger permet des tournées plus longues ; un catalogue lourd impose des tournées plus courtes et plus nombreuses.',
  ],

  impression: [
    'Si vous n’avez pas encore d’imprimeur, nous pouvons prendre en charge l’impression en amont de la diffusion.',
    'L’impression peut être intégrée à la prestation, ce qui évite une double logistique de livraison.',
    'Vous fournissez vos imprimés ou nous les faisons produire : les deux fonctionnent.',
    'Nous travaillons aussi bien à partir de vos exemplaires livrés que d’une impression que nous gérons.',
    'La production des supports peut être incluse au devis pour n’avoir qu’un seul interlocuteur.',
  ],

  // ---------------------------------------------------------------- ciblage
  ciblageMethode: [
    'Le découpage se fait par quartier et par type d’habitat, pas par tranche administrative.',
    'Nous partons de votre zone de clientèle réelle, puis nous découpons en secteurs de tournée cohérents.',
    'Les secteurs sont construits sur le terrain : voirie, densité, accessibilité des immeubles.',
    'Le plan de diffusion s’appuie sur la structure du bâti plutôt que sur les limites communales.',
    'Nous délimitons les zones à partir de votre point de vente et du temps de trajet réel des habitants.',
  ],

  ciblagePrecision: [
    'Vous pouvez cibler un quartier précis, un ensemble de rues ou la commune entière.',
    'La granularité descend au niveau du groupe de rues, ce qui évite de payer pour des foyers hors zone.',
    'Un secteur peut être retenu ou écarté à la rue près selon votre budget.',
    'Il est possible de traiter d’abord un noyau prioritaire, puis d’élargir si les retours sont bons.',
    'Le périmètre peut être restreint aux seules zones qui pèsent réellement dans votre chiffre d’affaires.',
  ],

  zoneChalandise: [
    'Une zone de chalandise se juge en minutes de trajet, pas en kilomètres à vol d’oiseau.',
    'La bonne zone est celle d’où vos clients viennent déjà, élargie de manière raisonnée.',
    'Élargir trop vite le périmètre dilue le budget sans augmenter les retours.',
    'Mieux vaut couvrir intégralement une zone restreinte que survoler un large territoire.',
    'La densité de foyers par kilomètre parcouru détermine le coût réel de la couverture.',
  ],

  // ------------------------------------------------------------- opérations
  tournee: [
    'Les tournées sont préparées à l’avance, secteur par secteur, avec un volume défini par distributeur.',
    'Chaque distributeur reçoit un secteur délimité et un nombre d’exemplaires calculé sur le nombre de foyers.',
    'L’opération est découpée en tournées quotidiennes pour tenir les délais annoncés.',
    'Le planning est établi secteur par secteur afin d’éviter les doublons et les zones oubliées.',
    'Les tournées sont réparties de façon à couvrir la commune sans repasser deux fois au même endroit.',
  ],

  suivi: [
    'Le suivi GPS des tournées permet de vérifier que chaque secteur a bien été parcouru.',
    'Les trajets sont enregistrés, ce qui rend la couverture vérifiable après coup.',
    'Un relevé de passage est produit à l’issue de l’opération, secteur par secteur.',
    'La traçabilité des tournées est fournie en fin de campagne, sans avoir à la demander.',
    'Vous recevez un compte rendu de couverture qui indique ce qui a été distribué et où.',
  ],

  qualite: [
    'Des contrôles sont effectués pendant la campagne pour vérifier la réalité du dépôt.',
    'Des vérifications terrain sont menées en cours d’opération sur des secteurs tirés au hasard.',
    'Le contrôle qualité porte sur le dépôt effectif, pas seulement sur le trajet parcouru.',
    'Les secteurs sont recontrôlés ponctuellement pour éviter les distributions incomplètes.',
    'Un échantillon de boîtes est vérifié en cours de campagne pour valider la bonne exécution.',
  ],

  reglementation: [
    'Les boîtes portant un autocollant « Stop Pub » sont écartées des dépôts publicitaires, conformément à la réglementation.',
    'La mention « Stop Pub » est respectée : ces boîtes ne reçoivent pas d’imprimé publicitaire.',
    'Les foyers ayant refusé la publicité non adressée sont exclus des tournées commerciales.',
    'Le refus de publicité affiché sur une boîte est respecté ; seuls les documents d’information municipale peuvent y être déposés.',
    'La réglementation sur les imprimés non sollicités est appliquée sur l’ensemble des secteurs.',
  ],

  delai: [
    'Comptez généralement quelques jours entre la réception des imprimés et la fin de la diffusion.',
    'Le délai dépend surtout du volume : une commune se traite en quelques jours, un département en quelques semaines.',
    'Une opération est planifiée à date, avec une fenêtre de distribution annoncée à l’avance.',
    'Les dates de dépôt peuvent être calées sur un événement précis : ouverture, soldes, réunion publique.',
    'La campagne peut être programmée pour arriver dans les boîtes quelques jours avant votre échéance.',
  ],

  saisonnalite: [
    'Le meilleur moment dépend de votre activité : rentrée, fêtes de fin d’année, début de saison.',
    'Une diffusion en début de semaine laisse le temps au foyer de consulter le support avant le week-end.',
    'Les périodes de forte concurrence dans les boîtes méritent d’être anticipées de plusieurs semaines.',
    'Faire coïncider la distribution avec une échéance locale améliore nettement les retours.',
    'Répartir la même quantité sur deux vagues donne souvent de meilleurs résultats qu’un dépôt unique.',
  ],

  volumeAdapte: [
    'Il n’y a pas de volume minimum imposant de couvrir toute la commune d’un coup.',
    'Une première opération peut porter sur quelques milliers de boîtes seulement.',
    'Le volume s’ajuste au budget : un secteur test d’abord, l’ensemble de la ville ensuite.',
    'Les petites séries ciblées et les grandes campagnes suivent la même organisation.',
    'Vous pouvez commencer par un quartier avant d’engager un budget sur la commune entière.',
  ],

  complementDigital: [
    'L’imprimé se combine bien avec une campagne en ligne : le papier installe la notoriété, le digital capte la recherche.',
    'Utilisé avec une campagne locale en ligne, le support papier améliore la reconnaissance de l’enseigne.',
    'Beaucoup d’annonceurs font coïncider la distribution avec une campagne web sur la même zone.',
    'Un code ou une adresse dédiée sur le flyer permet de mesurer les retours de l’opération.',
    'Ajouter une offre limitée dans le temps sur l’imprimé facilite la mesure des résultats.',
  ],

  // ------------------------------------------------------------- commercial
  devis: [
    'Le devis est établi à partir du nombre de boîtes visées, du format et de la période souhaitée.',
    'Le chiffrage dépend de trois éléments : le volume, le grammage et l’étendue de la zone.',
    'Un devis se prépare à partir de votre zone cible et du nombre d’exemplaires.',
    'Le prix se calcule au nombre de boîtes couvertes, ce qui rend le budget prévisible.',
    'Indiquez votre secteur et votre volume : le chiffrage est établi sans engagement.',
  ],

  accompagnement: [
    'Si vous ne savez pas encore quelle zone retenir, nous la construisons avec vous.',
    'Un premier échange suffit à définir un périmètre réaliste au regard de votre budget.',
    'Nous vous aidons à arbitrer entre couverture large et ciblage serré.',
    'Le découpage peut être proposé par nos soins à partir de votre adresse et de votre activité.',
    'Vous décrivez votre objectif, nous proposons le plan de diffusion correspondant.',
  ],

  // -------------------------------------------------------------- liaisons
  transition: [
    'Concrètement',
    'Dans les faits',
    'En pratique',
    'Sur le terrain',
    'Dans le détail',
  ],

  ctaPhrase: [
    'Décrivez votre projet, vous recevez un chiffrage adapté à {{ville}}.',
    'Indiquez votre zone et votre volume pour obtenir un devis {{villePrep}}.',
    'Un devis pour {{ville}} peut être établi à partir de quelques informations.',
    'Précisez vos secteurs et vos dates : le chiffrage suit.',
    'Expliquez-nous votre opération {{villePrep}}, nous revenons vers vous avec un devis.',
  ],

  // ------------------------------------------------ communes alentour
  mutualisation: [
    'Regrouper plusieurs communes voisines dans la même tournée fait mécaniquement baisser le coût au contact.',
    'Une opération qui couvre {{ville}} et son bassin de vie coûte proportionnellement moins cher qu’une commune isolée.',
    'Les trajets entre communes sont mutualisés, ce qui évite de facturer deux fois la même approche.',
    'Traiter plusieurs communes d’un coup permet d’amortir la logistique sur un volume plus large.',
    'Le regroupement de communes limitrophes est le levier le plus simple pour améliorer le rapport coût/couverture.',
  ],

  bassinVie: [
    'Vos clients ne s’arrêtent pas à la limite communale : le bassin de vie déborde presque toujours la commune.',
    'La clientèle d’un commerce vient rarement d’une seule commune, surtout hors des grands centres.',
    'Le périmètre pertinent est celui des déplacements quotidiens, pas celui du découpage administratif.',
    'Les habitants des communes voisines fréquentent les mêmes commerces et les mêmes services.',
    'Raisonner en bassin de vie plutôt qu’en commune évite de passer à côté d’une partie de la clientèle.',
  ],

  elargissement: [
    'Nous pouvons donc étendre la diffusion aux communes limitrophes sans refaire toute l’organisation.',
    'L’extension à une ou deux communes voisines se décide au moment du devis.',
    'Ajouter des communes proches au périmètre ne change ni le calendrier ni la méthode.',
    'Le périmètre peut être élargi commune par commune, selon le budget disponible.',
    'Les communes alentour peuvent être intégrées à la même vague de distribution.',
  ],
}

/**
 * VARIABLES CONDITIONNÉES PAR LES DONNÉES RÉELLES DE LA COMMUNE.
 * La clé de premier niveau est le champ de la ville, la seconde sa valeur.
 */
export const BANKS_BY = {
  // Type d'habitat, déduit de la densité (hab/km²) — décrit le terrain réel.
  habitat: {
    hyperdense: {
      terrain: [
        'Avec {{densite}} habitants au kilomètre carré, {{ville}} est un tissu urbain serré où les boîtes sont regroupées par immeuble.',
        'La densité {{deVille}} ({{densite}} hab/km²) concentre un grand nombre de foyers sur peu de surface.',
        'À {{densite}} habitants au kilomètre carré, la commune présente un habitat collectif dominant.',
        'Le bâti {{deVille}} est majoritairement vertical : batteries de boîtes en hall d’immeuble.',
        'La forte densité {{deVille}} permet de couvrir beaucoup de foyers sur un périmètre restreint.',
      ],
      acces: [
        'La difficulté principale reste l’accès aux halls d’immeubles, qui conditionne le taux de couverture réel.',
        'L’accès aux parties communes est le point déterminant : sans lui, une partie des boîtes reste hors d’atteinte.',
        'Les codes d’accès et interphones sont le vrai sujet logistique sur ce type de terrain.',
        'Une part du travail consiste à obtenir l’accès aux halls pour ne pas laisser d’immeubles entiers de côté.',
        'Le taux de couverture dépend directement du nombre de halls réellement accessibles.',
      ],
      rythme: [
        'En contrepartie, le rendement par tournée est élevé : peu de distance parcourue pour beaucoup de boîtes.',
        'Le coût au contact reste bas, car les distances entre deux boîtes sont très courtes.',
        'Ce type de secteur se traite vite : la densité compense largement les contraintes d’accès.',
        'Une tournée y couvre un nombre de foyers sans commune mesure avec une zone pavillonnaire.',
        'Le ratio boîtes servies par heure y est le plus favorable de tous les types d’habitat.',
      ],
    },
    dense: {
      terrain: [
        'Avec {{densite}} habitants au kilomètre carré, {{ville}} mêle petits collectifs et maisons de ville.',
        'Le bâti {{deVille}} alterne immeubles de faible hauteur et habitat individuel groupé.',
        'À {{densite}} hab/km², la commune combine rues denses en centre et quartiers plus aérés.',
        '{{ville}} présente un habitat mixte, avec des poches de collectif et des rues pavillonnaires.',
        'La densité {{deVille}} ({{densite}} hab/km²) correspond à un tissu urbain de taille intermédiaire.',
      ],
      acces: [
        'Ce type de tissu demande d’alterner entre boîtes de rue et halls collectifs sur une même tournée.',
        'Les tournées combinent dépôt en façade et accès aux petits collectifs.',
        'Le découpage doit tenir compte de deux logiques d’accès différentes dans le même secteur.',
        'La couverture est généralement bonne, l’essentiel des boîtes étant accessible depuis la voirie.',
        'Une partie des boîtes est en accès direct, l’autre en hall : le rythme de tournée s’en ressent.',
      ],
      rythme: [
        'Le rendement reste confortable, avec des tournées de taille homogène.',
        'Ce profil permet des tournées régulières et un délai de couverture prévisible.',
        'Les secteurs y sont faciles à équilibrer entre distributeurs.',
        'Le temps de parcours reste maîtrisé, ce qui stabilise le coût de l’opération.',
        'La commune se traite en un nombre de tournées limité et facile à planifier.',
      ],
    },
    pavillonnaire: {
      terrain: [
        'Avec {{densite}} habitants au kilomètre carré, {{ville}} est dominée par la maison individuelle.',
        '{{ville}} présente un habitat pavillonnaire : boîtes en limite de propriété, accès direct depuis la rue.',
        'À {{densite}} hab/km², le bâti {{deVille}} est surtout composé de lotissements et de maisons.',
        'Le tissu {{deVille}} est celui d’une commune résidentielle, avec des boîtes en façade ou en portail.',
        'La commune s’étend sur {{superficie}} km² d’habitat majoritairement individuel.',
      ],
      acces: [
        'L’avantage est net : presque toutes les boîtes sont accessibles sans code ni interphone.',
        'Le taux de couverture est élevé, les boîtes étant en accès libre depuis la voirie.',
        'Aucune contrainte de hall : la quasi-totalité des foyers est atteignable.',
        'Ce type de secteur permet une couverture quasi complète des boîtes visées.',
        'L’accès direct aux boîtes évite les zones inaccessibles typiques du collectif.',
      ],
      rythme: [
        'En revanche, la distance entre deux boîtes allonge les tournées.',
        'Le temps de parcours y est plus long qu’en centre-ville, ce qui joue sur le nombre de tournées nécessaires.',
        'Le découpage doit rester serré pour éviter des tournées trop étendues.',
        'Les lotissements se traitent efficacement, les rues en impasse un peu moins.',
        'Le rendement à l’heure est plus faible qu’en collectif, mais la couverture est meilleure.',
      ],
    },
    periurbain: {
      terrain: [
        'Avec {{densite}} habitants au kilomètre carré répartis sur {{superficie}} km², {{ville}} présente un habitat étalé.',
        '{{ville}} combine un centre-bourg groupé et des habitations dispersées en périphérie.',
        'À {{densite}} hab/km², le bâti {{deVille}} alterne noyau villageois et écarts résidentiels.',
        'La commune s’étend sur {{superficie}} km², avec des foyers répartis entre bourg et hameaux.',
        '{{ville}} est une commune périurbaine : un centre identifiable, puis un habitat plus lâche.',
      ],
      acces: [
        'Les boîtes sont presque toutes en accès direct, souvent regroupées en entrée de hameau.',
        'La couverture est bonne, mais elle demande de ne pas oublier les habitations isolées.',
        'Le centre-bourg se traite rapidement ; les écarts demandent un passage dédié.',
        'Le découpage distingue le noyau dense du reste de la commune.',
        'Les regroupements de boîtes en bord de route facilitent une partie de la tournée.',
      ],
      rythme: [
        'Le coût dépend surtout du kilométrage entre les groupes d’habitations.',
        'Il est souvent pertinent de traiter {{ville}} avec les communes voisines dans la même tournée.',
        'Le rendement s’améliore nettement en mutualisant plusieurs communes proches.',
        'Une opération limitée au seul centre-bourg réduit fortement le coût au contact.',
        'Le rapport distance/foyers rend la mutualisation avec les communes alentour intéressante.',
      ],
    },
    rural: {
      terrain: [
        'Avec {{densite}} habitants au kilomètre carré sur {{superficie}} km², {{ville}} est une commune rurale à l’habitat dispersé.',
        '{{ville}} compte {{pop}} habitants répartis sur {{superficie}} km² : un bourg et des fermes ou hameaux isolés.',
        'La faible densité {{deVille}} ({{densite}} hab/km²) implique des habitations éloignées les unes des autres.',
        '{{ville}} présente un habitat rural : un centre restreint, puis des foyers dispersés sur le territoire.',
        'Sur {{superficie}} km², les foyers {{deVille}} sont répartis entre le bourg et les écarts.',
      ],
      acces: [
        'Toutes les boîtes sont en accès libre, généralement en bord de voie.',
        'Aucune contrainte d’accès : la totalité des foyers peut être servie.',
        'Les boîtes sont en portail ou en entrée de chemin, sans obstacle particulier.',
        'La couverture peut être complète, à condition de prévoir les hameaux écartés.',
        'L’accès ne pose aucune difficulté ; c’est la distance qui structure la tournée.',
      ],
      rythme: [
        'Traiter {{ville}} seule a peu de sens économiquement : la commune s’intègre dans une tournée élargie.',
        'Une opération ici se conçoit à l’échelle du canton plutôt que de la seule commune.',
        'Le coût au contact baisse fortement en regroupant plusieurs communes voisines.',
        'La mutualisation avec les communes alentour est ce qui rend l’opération rentable.',
        'Nous intégrons {{ville}} à une tournée couvrant le secteur, pour tenir un coût raisonnable.',
      ],
    },
  },

  // Strate de population — cadre l'échelle et l'enjeu de la campagne.
  strate: {
    metropole: {
      echelle: [
        '{{ville}} compte {{pop}} habitants, soit de l’ordre de {{boites}} boîtes aux lettres à couvrir.',
        'Avec {{pop}} habitants, {{ville}} représente environ {{boites}} foyers à traiter.',
        '{{ville}} et ses {{pop}} habitants pèsent autour de {{boites}} boîtes aux lettres.',
        'Sur {{ville}}, {{pop}} habitants correspondent à près de {{boites}} boîtes à desservir.',
        'Le territoire {{deVille}} regroupe {{pop}} habitants, soit environ {{boites}} boîtes.',
      ],
      enjeu: [
        'À cette échelle, couvrir la ville entière représente un budget conséquent : le ciblage par quartier est presque toujours préférable.',
        'Une couverture totale est rarement le bon choix ici ; mieux vaut concentrer l’effort sur quelques secteurs.',
        'Sur une ville de cette taille, le découpage par arrondissement ou par quartier structure l’opération.',
        'L’enjeu principal est d’arbitrer entre les quartiers plutôt que de viser l’exhaustivité.',
        'La taille de la ville impose de hiérarchiser les secteurs selon leur poids commercial.',
      ],
    },
    grande: {
      echelle: [
        '{{ville}} compte {{pop}} habitants, soit environ {{boites}} boîtes aux lettres.',
        'Avec {{pop}} habitants, {{ville}} représente de l’ordre de {{boites}} foyers.',
        'Les {{pop}} habitants {{deVille}} correspondent à près de {{boites}} boîtes à couvrir.',
        '{{ville}} regroupe {{pop}} habitants, soit autour de {{boites}} boîtes aux lettres.',
        'Sur {{ville}}, on compte {{pop}} habitants pour environ {{boites}} boîtes.',
      ],
      enjeu: [
        'Une couverture complète de la commune reste envisageable sur un budget maîtrisé.',
        'La ville peut être traitée en totalité, ou découpée en deux ou trois secteurs prioritaires.',
        'À cette taille, couvrir l’ensemble de la commune est une option réaliste.',
        'Le choix se pose entre couverture intégrale et concentration sur les quartiers porteurs.',
        'La commune se traite d’un bloc ou par vagues successives selon votre budget.',
      ],
    },
    moyenne: {
      echelle: [
        '{{ville}} compte {{pop}} habitants, soit environ {{boites}} boîtes aux lettres.',
        'Avec ses {{pop}} habitants, {{ville}} représente près de {{boites}} foyers.',
        'Les {{pop}} habitants {{deVille}} correspondent à environ {{boites}} boîtes.',
        '{{ville}} totalise {{pop}} habitants, soit de l’ordre de {{boites}} boîtes aux lettres.',
        'On compte {{villePrep}} {{pop}} habitants pour environ {{boites}} boîtes.',
      ],
      enjeu: [
        'Le volume permet de couvrir la commune entière en une seule opération.',
        'Une campagne unique suffit généralement à traiter l’ensemble de la ville.',
        'La totalité de la commune peut être couverte sans découpage complexe.',
        'À ce volume, viser la commune entière est le scénario le plus courant.',
        'L’opération se planifie sur quelques jours pour l’ensemble du territoire communal.',
      ],
    },
    petite: {
      echelle: [
        '{{ville}} compte {{pop}} habitants, soit de l’ordre de {{boites}} boîtes aux lettres.',
        'Avec {{pop}} habitants, {{ville}} représente environ {{boites}} foyers.',
        'Les {{pop}} habitants {{deVille}} correspondent à près de {{boites}} boîtes.',
        '{{ville}} regroupe {{pop}} habitants pour environ {{boites}} boîtes aux lettres.',
        'Le territoire {{deVille}} compte {{pop}} habitants, soit autour de {{boites}} boîtes.',
      ],
      enjeu: [
        'La commune se couvre intégralement en une opération courte.',
        'L’ensemble {{deVille}} peut être traité rapidement, souvent en une seule vague.',
        'Le volume permet une couverture totale sans arbitrage particulier.',
        'Couvrir toute la commune reste peu coûteux à ce niveau de population.',
        'Il est fréquent d’associer {{ville}} aux communes voisines dans la même campagne.',
      ],
    },
    bourg: {
      echelle: [
        '{{ville}} compte {{pop}} habitants, soit environ {{boites}} boîtes aux lettres.',
        'Avec {{pop}} habitants, {{ville}} représente de l’ordre de {{boites}} foyers.',
        'Les {{pop}} habitants {{deVille}} correspondent à près de {{boites}} boîtes.',
        '{{ville}} totalise {{pop}} habitants pour environ {{boites}} boîtes aux lettres.',
        'On dénombre {{villePrep}} {{pop}} habitants, soit autour de {{boites}} boîtes.',
      ],
      enjeu: [
        'À cette échelle, la commune est le plus souvent intégrée à une tournée couvrant plusieurs villages.',
        'L’opération prend tout son sens en regroupant {{ville}} et les communes alentour.',
        'Une campagne limitée à la seule commune reste possible, mais le coût au contact est plus élevé.',
        'Le scénario habituel consiste à traiter {{ville}} avec son bassin de vie immédiat.',
        'Couvrir {{ville}} seule est faisable ; l’associer aux communes voisines est plus efficace.',
      ],
    },
  },
}
