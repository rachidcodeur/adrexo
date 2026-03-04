import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Metz | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts à Metz (57) et dans la métropole messine. Couverture des quartiers et communes voisines, traçabilité et devis gratuit pour vos campagnes d’imprimés publicitaires.",
}

const METZ_OFFICIAL_SITE_URL = 'https://metz.fr'

export default function DistributionFlyersMetzPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + texte d’intro */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Metz
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/metz.webp"
                  alt="Vue de Metz illustrant une campagne de distribution de flyers"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Metz, dans le département de la Moselle (57) au cœur du Grand Est, Adrexo.net accompagne les enseignes,
                commerces de proximité, institutions et acteurs du tourisme dans leurs campagnes de communication de
                proximité. Flyers, dépliants, prospectus, journaux municipaux, catalogues ou tracts : nous diffusons vos
                supports imprimés dans les différents quartiers messins et dans la métropole.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/metz.webp"
                alt="Panorama de Metz illustrant la diffusion d’imprimés publicitaires dans la ville"
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

      {/* 2. Distribution de supports imprimés dans la métropole messine */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de supports imprimés dans la métropole messine
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers de Metz et de la Moselle"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                La distribution de flyers, prospectus, dépliants et cartes de visite reste un levier essentiel pour faire
                connaître vos offres à Metz (57) : centre-ville commerçant, quartiers résidentiels, zones d’activités et
                axes reliant la Moselle au Luxembourg et aux autres grandes villes du Grand Est. Vos supports de
                communication sont distribués en boîtes aux lettres ou en main à main, en fonction de vos objectifs et des
                profils de cibles.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous construisons avec vous des plans de diffusion adaptés à votre zone de chalandise messine : habitat
                collectif, zones pavillonnaires, flux vers les communes voisines et sites d’activité. Pour renforcer votre
                visibilité terrain, la distribution de vos imprimés peut être complétée par des actions de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  street marketing
                </Link>{' '}
                menées sur les principaux lieux de passage de Metz et de sa métropole.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Construire votre plan de diffusion
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Distribution d’information municipale et journaux locaux à Metz */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution d&apos;information municipale et journaux locaux à Metz
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans les résidences de Metz"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Bulletins municipaux, magazines d’information locale, journaux de quartier ou documents institutionnels :
                ces supports jouent un rôle central pour informer les habitants de Metz et de la métropole. Nous assurons
                leur distribution dans les immeubles, résidences et maisons individuelles, en respectant les secteurs
                définis par la ville ou par l’éditeur.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l’actualité de la commune, les Messins peuvent consulter le{' '}
                <a
                  href={METZ_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site d&apos;information de la Ville de Metz
                </a>
                . De notre côté, nous organisons la logistique des dépôts, le découpage des tournées et le suivi des
                distributions en nous appuyant sur notre expertise en{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux
                </Link>
                , afin de garantir une couverture homogène des quartiers de Moselle (57).
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
                Plaquettes de présentation, catalogues saisonniers, brochures d’offres, programmes culturels ou documents
                promotionnels : ces supports de communication papier vous permettent de présenter en détail votre activité
                aux habitants de Metz (57) et des communes voisines. Ils complètent vos campagnes digitales en apportant un
                média tangible, visible et mémorisable sur tout le territoire de Moselle.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous définissons avec vous les secteurs les plus pertinents pour la distribution : grands ensembles
                résidentiels, zones pavillonnaires, abords des commerces, lieux culturels et sportifs. La distribution de
                brochures et catalogues est pensée pour valoriser votre identité visuelle et renforcer votre présence sur
                le terrain, en cohérence avec vos autres canaux de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  communication de proximité
                </Link>
                .
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de vos supports imprimés
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de brochures et catalogues dans les boîtes aux lettres messines"
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
                alt="Distribution de tracts et documents imprimés dans les rues de Metz"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Tracts promotionnels, communications associatives, documents institutionnels ou tracts électoraux : ces
                supports exigent une organisation terrain rigoureuse à Metz (57). Nous planifions les tournées en boîtes
                aux lettres, les actions de diffusion en main à main et la couverture des secteurs prioritaires, dans le
                respect du cadre réglementaire en vigueur.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nos opérations s’appuient sur notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                pour garantir une diffusion adaptée aux spécificités de la Moselle (57) et du Grand Est. Quartiers denses,
                ensembles résidentiels, axes commerçants ou lieux publics : chaque zone est travaillée pour optimiser
                l’impact de vos messages imprimés.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Préparer votre prochaine opération terrain
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : distribution d’imprimés à Metz (57) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution d&apos;imprimés à Metz (57) et dans le Grand Est
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Ville d’art et d’histoire, Metz (57) occupe une position clé dans la région Grand Est, entre Luxembourg,
              Allemagne et grandes métropoles françaises. La distribution d’imprimés publicitaires y constitue un levier
              puissant pour toucher directement les foyers, les actifs et les consommateurs de Moselle.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Flyers, dépliants, mailings, plaquettes commerciales, journaux, catalogues, brochures ou cartes de visite :
              ces supports de communication tangibles complètent vos campagnes digitales en créant un contact visuel et
              physique avec vos cibles. Ils vous aident à renforcer votre notoriété, à faire connaître vos offres et à
              développer votre image de marque dans la métropole messine.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une bonne connaissance du territoire de Metz et des communes de Moselle (57), nous construisons des
              plans de diffusion adaptés à votre zone de chalandise : boîtes aux lettres, rues commerçantes, abords des
              transports et des principaux lieux de vie. Chaque campagne de distribution d’imprimés fait l’objet d’un
              suivi et de contrôles pour vous offrir un pilotage fiable de vos actions de{' '}
              <Link
                href="/street-marketing"
                className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
              >
                communication de proximité
              </Link>
              .
            </p>
            <p className="text-body text-gray-dark mb-6">
              En choisissant Adrexo.net pour vos opérations d&apos;imprimés à Metz (57), vous travaillez avec un partenaire
              spécialisé dans la distribution de supports de communication de proximité, capable d&apos;adapter ses dispositifs
              à vos enjeux commerciaux, institutionnels ou événementiels dans le Grand Est.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Metz
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

