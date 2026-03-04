import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Argenteuil | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts à Argenteuil (95) et dans l’Ouest parisien. Couverture des quartiers et communes voisines, traçabilité et devis gratuit pour vos campagnes d’imprimés publicitaires.",
}

const ARGENTEUIL_OFFICIAL_SITE_URL = 'https://www.argenteuil.fr'

export default function DistributionFlyersArgenteuilPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + texte d’intro */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Argenteuil
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/argenteuil.webp"
                  alt="Vue d’Argenteuil illustrant une campagne de distribution de flyers"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Argenteuil, dans le Val-d’Oise (95), Adrexo.net accompagne les enseignes nationales, les commerces de
                proximité, les institutions et les associations dans leurs campagnes de communication de proximité. Flyers,
                dépliants, prospectus, journaux municipaux, catalogues ou tracts : nous diffusons vos supports imprimés
                dans les quartiers du centre-ville, du Val-d’Argent, des Coteaux, d’Orgemont, du Val-Notre-Dame et le long
                des berges de Seine.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/argenteuil.webp"
                alt="Panorama d’Argenteuil pour illustrer la diffusion d’imprimés publicitaires"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 50vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Distribution de supports imprimés pour vos campagnes locales */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de supports imprimés pour vos campagnes locales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers d’Argenteuil"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                La distribution de flyers, prospectus, dépliants et cartes de visite reste l’un des leviers les plus directs
                pour faire connaître vos offres à Argenteuil : centre-ville commerçant, quartiers résidentiels, zones
                d’activités ou grands axes de circulation vers Paris et les communes voisines comme Bezons, Sannois ou
                Colombes. Vos supports de communication sont déposés en boîtes aux lettres ou distribués en main à main
                selon vos objectifs.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous construisons avec vous des plans de diffusion qui tiennent compte de votre zone de chalandise, des
                profils de cibles et de la saisonnalité de vos campagnes publicitaires. Vos visuels, plaquettes
                commerciales, brochures ou catalogues sont distribués de façon homogène, avec un pilotage précis des
                tournées pour assurer la meilleure couverture locale possible dans le 95.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Construire votre plan de diffusion
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Distribution d’information municipale et journaux locaux */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution d&apos;information municipale et journaux locaux
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans les résidences d’Argenteuil"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Bulletins municipaux, magazines d’information locale, guides de quartier ou documents institutionnels :
                ces supports jouent un rôle clé pour informer les habitants d’Argenteuil. Nous assurons la distribution de
                ces imprimés dans les immeubles, résidences et maisons individuelles, sur les secteurs définis par la ville
                ou par l’éditeur.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l’actualité de la commune, les Argenteuillais peuvent consulter le{' '}
                <a
                  href={ARGENTEUIL_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site officiel de la Ville d&apos;Argenteuil
                </a>
                . De notre côté, nous organisons la logistique des dépôts, le découpage des tournées et le suivi de
                diffusion, en nous appuyant sur notre expertise en{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux
                </Link>
                , afin de garantir une couverture homogène des quartiers.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Planifier une diffusion institutionnelle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Distribution de brochures, catalogues et plaquettes commerciales */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de brochures, catalogues et plaquettes commerciales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Plaquettes de présentation, catalogues saisonniers, brochures d’offres ou documents promotionnels : ces
                supports de communication papier vous permettent de présenter en détail vos services et produits aux
                habitants d’Argenteuil et des communes voisines. Ils complètent idéalement vos campagnes digitales en
                apportant un support tangible et mémorisable.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous ciblons avec vous les zones de distribution les plus pertinentes : grands ensembles résidentiels,
                secteurs pavillonnaires, axes commerçants, proximité des transports et parkings, zones d’activités.
                L’objectif : maximiser le retour de vos campagnes publicitaires en diffusant vos supports imprimés au bon
                endroit et au bon moment.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de vos supports imprimés
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de brochures et catalogues dans les boîtes aux lettres d’Argenteuil"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts et opérations terrain ciblées */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts et opérations terrain ciblées
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts et documents imprimés dans les rues d’Argenteuil"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Tracts promotionnels, documents associatifs, communications institutionnelles ou tracts électoraux : ces
                supports nécessitent une organisation terrain rigoureuse à Argenteuil (95). Nous planifions les tournées en
                boîtes aux lettres, les éventuelles actions de distribution en main à main et la couverture des secteurs
                prioritaires.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nos opérations s’appuient sur notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                pour garantir une diffusion conforme au cadre réglementaire et adaptée à vos objectifs de communication.
                Quartiers résidentiels, zones commerçantes, proximité des équipements publics : chaque secteur est travaillé
                pour optimiser l’impact de vos messages.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Préparer votre prochaine opération terrain
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : distribution d’imprimés à Argenteuil (95) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution d&apos;imprimés à Argenteuil (95) et dans l’Ouest parisien
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Située en bord de Seine, à la limite des Hauts-de-Seine et des Yvelines, Argenteuil (95) rassemble des
              quartiers d’habitat dense, des zones pavillonnaires, des pôles commerciaux et des zones d’activités. La
              distribution d’imprimés publicitaires y constitue un levier stratégique pour toucher directement les foyers,
              les actifs et les consommateurs dans leur quotidien.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Flyers, dépliants, mailings, plaquettes commerciales, journaux, catalogues, brochures ou cartes de visite :
              ces supports de communication tangibles complètent vos campagnes digitales en créant un contact visuel et
              physique avec vos cibles. Ils vous aident à vous démarquer dans un environnement concurrentiel où les
              messages numériques sont nombreux.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une bonne connaissance du territoire argenteuillais et des communes voisines, nous construisons des
              plans de diffusion adaptés à votre zone de chalandise : boîtes aux lettres, rues commerçantes, axes
              fréquentés, abords des transports. Chaque campagne de distribution d’imprimés fait l’objet d’un suivi et de
              contrôles pour vous offrir un pilotage fiable de vos actions.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En choisissant Adrexo.net pour vos opérations d&apos;imprimés à Argenteuil (95), vous travaillez avec un
              partenaire spécialisé dans la distribution de supports de communication de proximité, capable d&apos;adapter ses
              dispositifs à vos enjeux commerciaux, institutionnels ou événementiels dans l’Ouest parisien.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Argenteuil
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

