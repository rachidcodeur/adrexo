import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Grenoble | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts à Grenoble (38) et dans la métropole grenobloise. Couverture des quartiers et communes, traçabilité et devis gratuit pour vos campagnes d’imprimés publicitaires.",
}

const GRENOBLE_OFFICIAL_SITE_URL = 'https://www.grenoble.fr'

export default function DistributionFlyersGrenoblePage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + texte d’intro */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Grenoble
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/grenoble.webp"
                  alt="Vue de Grenoble illustrant une campagne de distribution de flyers"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Grenoble, au cœur du département de l’Isère (38), Adrexo.net accompagne les entreprises, enseignes et
                institutions dans la distribution de flyers, dépliants, catalogues, journaux municipaux et tracts. Nos
                équipes terrain couvrent le centre-ville, l’Hyper-Centre, Europole, la Presqu&apos;île, les quartiers
                résidentiels et les communes de la métropole grenobloise avec des tournées structurées et tracées.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/grenoble.webp"
                alt="Panorama de Grenoble pour illustrer la diffusion d’imprimés publicitaires"
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

      {/* 2. Flyers et prospectus pour vos actions locales */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Flyers et prospectus pour vos actions locales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers grenoblois"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                La distribution de flyers et la diffusion de prospectus permettent de faire connaître vos offres auprès des
                habitants de Grenoble : centre-ville, Championnet, Berriat, Île Verte, Eaux-Claires, quartiers sud, campus
                universitaires de Saint-Martin-d’Hères ou encore zones commerciales et retail parks de la métropole. Vos
                supports de communication sont distribués en boîtes aux lettres ou en main à main selon vos objectifs.
              </p>
              <p className="text-body text-gray-dark mb-6">
                En fonction de votre zone de chalandise et des cibles visées, nous élaborons des plans de diffusion par
                quartier, type d’habitat ou secteur stratégique. La distribution de flyers peut être complétée par des
                opérations de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  street marketing
                </Link>{' '}
                pour renforcer votre présence au contact direct du public dans l’espace urbain.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Construire votre plan de diffusion
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Journaux municipaux et information locale */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Journaux municipaux et information locale
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans la métropole grenobloise"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Les journaux municipaux, magazines d’information et bulletins locaux sont essentiels pour maintenir le lien
                entre la collectivité et les habitants de Grenoble (38). Nous assurons la distribution de ces imprimés dans
                les immeubles et maisons individuelles, sur les secteurs définis par la ville et les communes de la
                métropole.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l’actualité institutionnelle, les Grenoblois peuvent consulter le{' '}
                <a
                  href={GRENOBLE_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site d&apos;information de la Ville de Grenoble
                </a>
                . De notre côté, nous mettons en place une organisation adaptée aux rythmes de parution et aux volumes à
                distribuer, en nous appuyant sur notre expertise en{' '}
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

      {/* 4. Brochures, catalogues et supports promotionnels */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Brochures, catalogues et supports promotionnels
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Plaquettes commerciales, catalogues, dépliants, programmes culturels : ces supports de communication vous
                permettent de présenter en détail vos offres aux habitants de Grenoble et des communes voisines comme
                Échirolles, Saint-Martin-d’Hères, Seyssinet-Pariset ou Fontaine. Ils peuvent être distribués en boîtes aux
                lettres ou autour des pôles d’activités et zones commerciales.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous adaptons les plans de diffusion à votre identité visuelle, aux périodes clés de votre activité et à
                votre stratégie de communication globale. La distribution de brochures, catalogues et plaquettes complète
                vos actions digitales pour renforcer la présence de votre marque sur le terrain grenoblois.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de vos supports imprimés
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de brochures et catalogues dans les boîtes aux lettres grenobloises"
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
                alt="Distribution de tracts électoraux à Grenoble et dans la métropole"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Lors des campagnes électorales, la distribution de tracts, professions de foi et bulletins doit respecter
                un cadre légal précis. Nous accompagnons les candidats et organisations dans leurs opérations à Grenoble
                (38) et dans les communes de la métropole, avec des tournées planifiées en boîtes aux lettres et une
                diffusion terrain encadrée.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nos opérations s’appuient sur notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                pour garantir une couverture homogène des secteurs ciblés. Quartiers denses, ensembles résidentiels et
                communes voisines : la distribution est pensée pour toucher efficacement les électeurs.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Préparer votre campagne électorale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : la distribution d’imprimés à Grenoble (38) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            La distribution d&apos;imprimés à Grenoble (38) et dans la métropole
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Entourée de massifs alpins, Grenoble est une ville dense et dynamique où se côtoient quartiers
              résidentiels, pôles universitaires, centres de recherche, zones d’activités et espaces commerçants. La
              distribution d’imprimés publicitaires y constitue un levier puissant de communication de proximité pour
              toucher foyers, étudiants, salariés et consommateurs.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Flyers, dépliants, mailing, cartes de visite, plaquettes commerciales, journaux, catalogues ou programmes
              culturels : vos supports de communication papiers s’intègrent à une stratégie globale visant à faire
              connaître vos offres, renforcer votre notoriété locale et alimenter vos campagnes publicitaires. L’imprimé
              reste un média tangible, visible et mémorisable, complémentaire aux canaux digitaux.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Grâce à l’expérience de nos distributeurs et à une bonne connaissance du territoire grenoblois, nous
              construisons des plans de diffusion adaptés à votre zone de chalandise : boîtes aux lettres, voie publique,
              lieux publics, abords des zones commerciales et des principaux axes. La distribution des journaux,
              brochures et tracts est contrôlée et documentée pour vous offrir un pilotage fiable de vos opérations.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En choisissant Adrexo.net pour vos campagnes à Grenoble et dans la métropole, vous travaillez avec un
              partenaire spécialisé dans la distribution de supports de communication de proximité. Notre priorité :
              diffuser vos imprimés au bon endroit, au bon moment et auprès des bonnes cibles, afin de renforcer
              durablement votre visibilité locale.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Grenoble
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

