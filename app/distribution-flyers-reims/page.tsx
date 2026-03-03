import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Reims | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts à Reims (51) et dans la communauté urbaine du Grand Reims. Couverture des quartiers et communes, traçabilité et devis gratuit pour vos campagnes d’imprimés publicitaires.",
}

const REIMS_OFFICIAL_SITE_URL = 'https://www.reims.fr'

export default function DistributionFlyersReimsPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Bannière ville + introduction */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Reims
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/reims.webp"
                  alt="Vue de Reims illustrant une campagne de distribution de flyers"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Reims et dans l’agglomération du Grand Reims (51), Adrexo.net déploie des solutions complètes pour la
                distribution d&apos;imprimés publicitaires : flyers, dépliants, catalogues, journaux municipaux et tracts.
                Nos équipes terrain couvrent les quartiers centraux, les secteurs résidentiels, les zones commerciales et
                les communes périphériques avec une organisation rigoureuse et des tournées tracées.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/reims.webp"
                alt="Panorama de Reims pour illustrer la diffusion d’imprimés publicitaires"
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

      {/* 2. Flyers et prospectus pour les commerces et événements */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Flyers et prospectus pour vos campagnes locales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers de Reims"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                La distribution de flyers et la diffusion de prospectus constituent un levier performant pour faire
                connaître vos offres à Reims : centre-ville, secteur de la cathédrale Notre-Dame, quartier Saint-Remi,
                Clairmarais, Tinqueux, Cormontreuil ou encore les zones commerciales de la périphérie. Vos supports de
                communication sont distribués en boîtes aux lettres ou en main à main au plus près de vos cibles.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Qu’il s’agisse d’un lancement de point de vente, d’une opération spéciale ou d’une campagne publicitaire
                plus large, nous définissons des plans de diffusion précis par quartier, rue ou secteur. La distribution
                de flyers peut être complétée par des opérations de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  street marketing
                </Link>{' '}
                pour occuper la voie publique lors d’événements ou d’animations locales.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Journaux municipaux et bulletins d’information */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Diffusion de journaux institutionnels
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans le Grand Reims"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Les journaux municipaux, bulletins d’information locale et magazines institutionnels jouent un rôle clé
                dans la communication entre la collectivité et les habitants de Reims (51). Nous organisons la
                distribution de ces imprimés dans les immeubles et maisons individuelles, en veillant à couvrir les
                quartiers ciblés et les communes de la communauté urbaine.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l’actualité officielle, les habitants peuvent se rendre sur le{' '}
                <a
                  href={REIMS_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  portail d’information de la ville de Reims
                </a>
                . De notre côté, nous mettons en œuvre une logistique adaptée aux rythmes de parution et aux volumes à
                diffuser, en nous appuyant sur notre expertise en{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux
                </Link>
                .
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Planifier une diffusion institutionnelle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brochures, catalogues et plaquettes commerciales */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Brochures, catalogues et documents promotionnels
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Les brochures commerciales, plaquettes, catalogues ou dépliants sont des supports de communication
                essentiels pour présenter vos produits, vos services et votre image de marque. À Reims, ces imprimés
                peuvent être distribués en boîtes aux lettres dans les quartiers résidentiels, mais aussi dans les zones
                d’activités et autour des principaux axes de circulation.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous adaptons la diffusion à votre stratégie de communication : ciblage par secteur géographique, type
                d’habitat, profil de clientèle ou zone de chalandise autour de vos points de vente. La distribution
                s’intègre facilement à une campagne publicitaire plus large, en complément de la communication digitale
                et des actions menées avec votre agence de communication.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de votre projet à Reims
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de brochures et catalogues dans les boîtes aux lettres rémoises"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tracts électoraux et documents officiels */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Organisation de la distribution de tracts électoraux
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts électoraux dans les quartiers de Reims"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Pendant les périodes électorales, la distribution de tracts, professions de foi et bulletins répond à un
                cadre réglementaire strict. Nous accompagnons les candidats et formations politiques dans leurs campagnes
                à Reims et dans le Grand Reims, avec des tournées planifiées en boîtes aux lettres et des distributions
                terrain encadrées.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les opérations s’appuient sur notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                afin de garantir une couverture homogène des secteurs définis. Centre-ville, quartiers populaires,
                communes voisines comme Bétheny, Tinqueux ou Cormontreuil : nous ajustons les plans selon vos enjeux de
                communication de proximité.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Organiser une campagne électorale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : la distribution d’imprimés à Reims (51) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            La distribution d&apos;imprimés à Reims (51) et dans le Grand Reims
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Reims, grande ville de la Marne (51), concentre des zones résidentielles, des pôles d’activités et des
              espaces commerciaux où la distribution d’imprimés publicitaires constitue un média de proximité très
              efficace. En ciblant les quartiers comme Croix-Rouge, Europe, Murigny, les secteurs proches de la gare ou
              encore les communes limitrophes, vos supports de communication atteignent directement les foyers et
              consommateurs.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Flyers, dépliants, mailing, cartes de visite, plaquettes commerciales, journaux, catalogues ou programmes
              culturels : la distribution de documents imprimés s’intègre à une stratégie de communication globale pour
              faire connaître vos offres, renforcer votre notoriété locale et alimenter vos campagnes publicitaires. Le
              support papier reste tangible, visible et mémorisable, en complément des actions digitales.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Grâce au retour d’expérience de nos distributeurs et à notre connaissance du terrain rémois, nous
              construisons des plans de diffusion adaptés à votre zone de chalandise : boîtes aux lettres, voie publique,
              lieux publics stratégiques, axes de passage et zones d’activités. La distribution des journaux, brochures
              et tracts est contrôlée et documentée pour vous offrir un suivi fiable.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En choisissant Adrexo.net pour vos campagnes à Reims et dans le Grand Reims, vous travaillez avec un
              partenaire spécialisé dans la distribution de supports de communication de proximité. Notre objectif : vous
              aider à diffuser vos imprimés au bon endroit, au bon moment et auprès des bonnes cibles, afin de générer
              du trafic et de soutenir durablement votre présence locale.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Reims
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

