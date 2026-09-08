# Générateur de sites nationaux

Génère un site statique complet à partir d'un fichier de communes : une page
nationale, une page par département, une page par commune. Le contenu de chaque
page est assemblé par tirage de variantes (« spinning ») semé sur la commune,
de sorte que les 5 000 pages soient réellement différentes les unes des autres.

État actuel : **5 106 pages, générées en 12 secondes, 26 Ko par page.**

---

## Démarrage

```bash
npm install
npm run data     # CSV -> src/data/dataset.json (communes enrichies)
npm run check    # audit : unicité, volume de texte, règle des 5 variantes
npm run build    # génère dist/
npm run dev      # serveur local
```

`npm run data` n'est à relancer que si le fichier de communes change.

---

## Comment fonctionne le spinning

### Le principe

Un paragraphe n'est jamais écrit en dur. C'est un **gabarit** contenant 2 à 3
jetons, et chaque jeton est une **variable** disposant de 5 variantes :

```js
// un emplacement de paragraphe = 5 gabarits
[
  '{{tournee}} {{suivi}}',
  '{{tournee}} {{suivi}} {{qualite}}',
  '{{suivi}} {{tournee}}',
  ...
]

// une variable = exactement 5 variantes
suivi: [
  'Le suivi GPS des tournées permet de vérifier que chaque secteur a bien été parcouru.',
  'Les trajets sont enregistrés, ce qui rend la couverture vérifiable après coup.',
  ...
]
```

Un emplacement produit donc 5 gabarits × 5² à 5³ tirages = **125 à 625
formulations**. Le site compte 20 emplacements de paragraphe.

### Les deux propriétés qui rendent le procédé utilisable en SEO

**1. Déterminisme.** Le tirage est semé sur `slug-département/slug-commune`.
Une commune produit exactement le même texte à chaque build. Sans cela, chaque
redéploiement réécrirait 5 000 pages et Google verrait un site instable.

> Conséquence : changer `SITE.generation.seed` redistribue **tout** le site.
> À ne faire qu'avant la première mise en ligne.

**2. Différenciation par les données, pas seulement par le hasard.** Un simple
mélange aléatoire produirait 5 000 pages interchangeables. Les variables les
plus structurantes sont donc conditionnées par des données réelles de la
commune :

| Dimension | Valeurs | Ce qu'elle pilote |
|---|---|---|
| `habitat` (densité) | hyperdense, dense, pavillonnaire, périurbain, rural | description du terrain, accès aux boîtes, rythme de tournée |
| `strate` (population) | métropole, grande, moyenne, petite, bourg | échelle de la campagne, enjeu budgétaire |

Une commune rurale de 2 000 habitants et une métropole ne reçoivent donc pas
le même texte réagencé : elles reçoivent un texte qui décrit leur réalité.

### Anti-répétition intra-page

Deux emplacements peuvent tirer la même variable ; sans précaution ils
tomberaient une fois sur cinq sur la même phrase. Le moteur mémorise les
variantes déjà employées sur la page et décale au prochain index libre.

---

## Vérification de l'unicité

`npm run check` mesure la similarité **dans le pire cas** : entre communes
voisines partageant la même strate ET le même habitat, donc les mêmes banques
conditionnelles. C'est là que du contenu dupliqué apparaîtrait en premier.

Résultat actuel sur les 5 001 pages villes :

```
pages strictement identiques : 0
similarité  médiane 14,5 %  |  p95 18,7 %  |  max 22,6 %
volume : min 806, médiane 883, max 989 mots — 100 % dans la cible 800-1 200
```

L'audit échoue si la similarité maximale dépasse 60 %, si une variable n'a pas
exactement 5 variantes, ou s'il reste un jeton `{{...}}` non résolu.

---

## Ajouter une nouvelle activité

L'enjeu du projet n'est pas ce site, c'est de rendre chaque nouvelle activité
déployable en quelques jours. Trois fichiers seulement sont propres au métier :

| Fichier | Contenu | Effort |
|---|---|---|
| `src/site.config.mjs` | nom, domaine, vocabulaire, téléphone, tracking, SIRET | 15 min |
| `src/content/banks.mjs` | les 255 variantes rédigées | 1 à 2 jours |
| `src/content/blocks.mjs` | gabarits de paragraphes et titres | quelques heures |

Tout le reste — moteur de spinning, grammaire française, pipeline de données,
gabarits Astro, formulaire, tracking, sitemap, conformité — est indépendant du
métier et se réutilise tel quel.

Procédure :

1. Copier le dossier, remplacer `src/site.config.mjs`.
2. Réécrire les variantes de `banks.mjs` en gardant les **mêmes noms de
   variables** : les gabarits continuent alors de fonctionner sans modification.
3. `npm run check` — l'audit refuse toute variable qui n'aurait pas 5 variantes.
4. `npm run build`.

---

## Architecture des URL

```
/                            accueil national
/departements/               index des départements
/tarn/                       page département     (x100)
/tarn/albi/                  page commune         (x5 001)
/merci/                      page de conversion (noindex)
/mentions-legales/
/politique-de-confidentialite/
/sitemap.xml                 5 105 URL
```

Le maillage suit accueil → département → commune, avec les communes voisines
(calculées par distance réelle, rayon de 30 km) en bas de chaque page commune.
Ces liens traversent les frontières départementales, ce qui crée un maillage
transversal en plus de la pyramide.

---

## Conformité intégrée

Contraintes du cahier des charges appliquées à toutes les pages, et vérifiables
sur le HTML produit :

- **Aucun avis client, aucune note, aucun `aggregateRating`.**
- **Aucun bloc `PostalAddress`** : le JSON-LD décrit un `Service` avec
  `areaServed`, et le `provider` est une `Organization` sans adresse.
- Mention « une marque de » + SIRET dans le pied de page.
- Mentions légales et politique de confidentialité liées depuis chaque page.
- Pied de page précisant l'absence d'établissement dans chaque commune.
- `robots.txt` n'interdit **aucun** robot publicitaire (`AdsBot-Google`,
  `AdIdxBot`, `Bingbot`) — c'est ce blocage qui avait provoqué les refus
  « destination non fonctionnelle ».
- Consent Mode v2 Google **et** signal de consentement Microsoft UET déclarés
  en refus par défaut, avant toute balise.

---

## Le formulaire et le secret partagé

Le cahier des charges demande un secret partagé en en-tête vers `receiveLead`.
**Un secret placé dans le JavaScript d'un site statique est lisible par
n'importe quel visiteur.** Le formulaire poste donc vers `/api/lead`, une
Cloudflare Pages Function (`functions/api/lead.js`) qui porte le secret côté
serveur et le transmet à `receiveLead`.

C'est le seul composant non statique du site. Variables d'environnement à
définir dans le projet Cloudflare Pages :

```
LEAD_ENDPOINT   URL de l'API receiveLead
LEAD_SECRET     secret partagé, envoyé en en-tête X-Api-Secret
```

La fonction normalise le téléphone et le renvoie dans `cle_dedoublonnage`.

---

## Le fichier de données

Source : `../data/top-5000-villes-france.csv`.

`npm run data` produit `src/data/dataset.json` en ajoutant : type d'habitat,
strate de population, nombre estimé de boîtes aux lettres (population ÷ 2,2,
taille moyenne des ménages Insee), rang dans le département et communes
voisines calculées par distance orthodromique.

Le script **refuse de s'exécuter** si deux communes produisent la même URL.

### Correctifs appliqués au CSV source

Le CSV d'origine ne contient aucune ligne pour le département 75 : **Paris en
était absent**. Le tableau `PATCHES` de `scripts/build-data.mjs` l'ajoute, avec
les données Insee. Chaque correctif y est explicite et réversible — supprimer
la ligne suffit à revenir au fichier d'origine.

La Corse figure sous le code `20` et n'est pas éclatée en 2A/2B.

---

## Ce qu'il reste à renseigner avant mise en production

Toutes ces valeurs sont regroupées dans `src/site.config.mjs`, signalées
« À RENSEIGNER ». Les balises dont l'identifiant est vide ne sont tout
simplement pas émises dans le HTML.

- `contact.telephone` / `telephoneAffiche` — numéro Keyyo dédié
- `lead.endpoint` — URL de receiveLead
- `tracking.googleAdsId` et `googleAdsLabel` — AW- du compte MCC
- `tracking.metaPixelId` — pixel Meta
- `legal.siret`

La balise UET (`97262223`) est déjà active.
