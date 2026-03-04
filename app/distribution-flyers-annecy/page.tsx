import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Annecy | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts à Annecy (74) et autour du lac. Couverture des quartiers et communes voisines, traçabilité et devis gratuit pour vos campagnes d’imprimés publicitaires.",
}

const ANNECY_OFFICIAL_SITE_URL = 'https://www.annecy.fr'

export default function DistributionFlyersAnnecyPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + texte d’intro */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Annecy
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/annecy.webp"
                  alt="Vue d’Annecy et de son lac illustrant une campagne de distribution de flyers"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Annecy, dans le département de la Haute-Savoie (74), au bord du lac et au pied des montagnes, Adrexo.net
                accompagne les enseignes, commerces, institutions et acteurs du tourisme dans leurs campagnes de communication
                de proximité. Flyers, dépliants, prospectus, journaux municipaux, catalogues ou tracts : nous diffusons vos
                supports imprimés dans les quartiers de la ville et dans la métropole annécienne.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/annecy.webp"
                alt="Panorama d’Annecy et de la vieille ville pour illustrer la diffusion d’imprimés publicitaires"
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

      {/* 2. Distribution de supports imprimés dans la métropole annécienne */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de supports imprimés dans la métropole annécienne
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers d’Annecy et autour du lac"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                La distribution de flyers, prospectus, dépliants et cartes de visite reste un levier essentiel pour faire
                connaître vos offres à Annecy (74) : vieille ville, quartiers résidentiels, zones commerciales, bords du lac
                et axes menant vers les communes voisines de Haute-Savoie. Vos supports de communication sont distribués en
                boîtes aux lettres ou en main à main, selon vos objectifs et le profil de vos cibles.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous construisons avec vous des plans de diffusion adaptés à votre zone de chalandise dans le 74 : habitat
                collectif, zones pavillonnaires, flux touristiques, secteurs proches des commerces et hôtels. Pour renforcer
                votre présence sur le terrain, la distribution de vos imprimés peut être complétée par des actions de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  street marketing
                </Link>{' '}
                sur les principaux lieux de passage d’Annecy et de son agglomération.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Construire votre plan de diffusion
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Distribution d’information municipale et journaux locaux à Annecy (74) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution d&apos;information municipale et journaux locaux à Annecy (74)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans les résidences d’Annecy"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Bulletins municipaux, magazines d’information locale, journaux de quartier ou documents institutionnels :
                ces supports jouent un rôle clé pour informer les habitants d’Annecy et des communes environnantes. Nous
                assurons leur distribution dans les immeubles, résidences et maisons individuelles, en respectant les
                secteurs définis par la collectivité ou l’éditeur.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l’actualité de la commune et du territoire annécien, les habitants peuvent consulter le{' '}
                <a
                  href={ANNECY_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site officiel de la Ville d&apos;Annecy
                </a>
                . De notre côté, nous organisons la logistique des dépôts, les tournées et le suivi des distributions en
                nous appuyant sur notre expertise en{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux
                </Link>
                , afin de garantir une couverture homogène des quartiers de Haute-Savoie (74).
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
                promotionnels : ces supports de communication papier vous permettent de détailler votre activité auprès des
                habitants et visiteurs d’Annecy (74). Ils complètent vos actions digitales en apportant un média tangible,
                visible et facilement mémorisable.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous ciblons avec vous les secteurs les plus adaptés à la distribution : grands ensembles résidentiels, zones
                pavillonnaires, abords des commerces, lieux touristiques et espaces publics proches du lac d’Annecy. La
                distribution de brochures, catalogues et plaquettes est pensée pour valoriser votre identité visuelle et
                renforcer votre notoriété dans la métropole annécienne.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de vos supports imprimés
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de brochures et catalogues dans les boîtes aux lettres d’Annecy et de sa région"
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
                alt="Distribution de tracts et documents imprimés dans les rues d’Annecy"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Tracts promotionnels, communications associatives, documents institutionnels ou tracts électoraux : ces
                supports exigent une organisation terrain rigoureuse à Annecy (74). Nous planifions les tournées en boîtes
                aux lettres, les actions de diffusion en main à main et la couverture des secteurs prioritaires définis avec
                vous, dans le respect du cadre réglementaire.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nos opérations s’appuient sur notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                pour garantir une diffusion adaptée aux spécificités de la Haute-Savoie et de la région Auvergne-Rhône-Alpes.
                Quartiers denses, ensembles résidentiels, axes commerçants ou lieux publics : chaque zone est travaillée
                pour optimiser l’impact de vos messages imprimés.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Préparer votre prochaine opération terrain
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : distribution d’imprimés à Annecy (74) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution d&apos;imprimés à Annecy (74) et dans la région du lac
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Ville emblématique de Haute-Savoie (74), Annecy se distingue par son lac, sa vieille ville, ses quartiers
              résidentiels et son dynamisme touristique. La distribution d’imprimés publicitaires y constitue un levier
              stratégique pour toucher directement les habitants, les actifs et les visiteurs dans leur quotidien.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Flyers, dépliants, mailings, plaquettes commerciales, journaux, catalogues, brochures ou cartes de visite :
              ces supports de communication tangibles complètent vos campagnes digitales en créant un contact visuel et
              physique avec vos cibles. Ils vous aident à développer votre notoriété, à renforcer votre image de marque et
              à faire connaître vos offres dans la métropole annécienne.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une bonne connaissance du territoire d’Annecy et des communes voisines du 74, nous construisons des
              plans de diffusion adaptés à votre zone de chalandise : boîtes aux lettres, rues commerçantes, abords des
              transports, zones touristiques. Chaque campagne de distribution d’imprimés fait l’objet d’un suivi et de
              contrôles pour vous offrir un pilotage fiable de vos actions de communication.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En choisissant Adrexo.net pour vos opérations d&apos;imprimés à Annecy (74), vous travaillez avec un partenaire
              spécialisé dans la distribution de supports de communication de proximité, capable d&apos;adapter ses dispositifs
              à vos enjeux commerciaux, institutionnels ou événementiels en Haute-Savoie.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Annecy
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

