import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Angers | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts à Angers (49) et dans la métropole angevine. Couverture des quartiers et communes, traçabilité et devis gratuit pour vos campagnes d’imprimés publicitaires.",
}

const ANGERS_OFFICIAL_SITE_URL = 'https://www.angers.fr'

export default function DistributionFlyersAngersPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + texte d’intro */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Angers
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/angers.webp"
                  alt="Vue d’Angers illustrant une campagne de distribution de flyers"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Angers, dans le département de Maine-et-Loire (49), Adrexo.net accompagne les enseignes, institutions et
                commerces de proximité dans la distribution de flyers, dépliants, catalogues, journaux municipaux et tracts.
                Nos équipes terrain couvrent le centre-ville, les bords de Maine, les quartiers résidentiels et les communes
                de la métropole angevine avec des tournées structurées et tracées.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/angers.webp"
                alt="Panorama d’Angers pour illustrer la diffusion d’imprimés publicitaires"
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
                alt="Distribution de flyers et prospectus dans les quartiers d’Angers"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                La distribution de flyers et la diffusion de prospectus restent des leviers efficaces pour faire connaître vos
                offres à Angers : centre-ville, quartier de la Doutre, Belle-Beille, Monplaisir, Roseraie, Justices, mais aussi
                les zones commerciales et les secteurs proches des axes de circulation. Vos supports de communication sont
                distribués en boîtes aux lettres ou en main à main, selon vos objectifs.
              </p>
              <p className="text-body text-gray-dark mb-6">
                En fonction de votre zone de chalandise et de votre cible, nous construisons des plans de diffusion par quartier
                ou secteur géographique. La distribution de flyers peut être complétée par des actions de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  street marketing
                </Link>{' '}
                pour occuper la voie publique lors d’événements, d’ouvertures de points de vente ou d’opérations promotionnelles.
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
                alt="Distribution de journaux municipaux dans la métropole angevine"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Les journaux municipaux, magazines d’information et bulletins locaux jouent un rôle clé dans la communication
                entre la collectivité et les habitants d’Angers (49). Nous assurons la distribution de ces imprimés dans les
                immeubles et maisons individuelles, sur les secteurs définis par la ville et les communes de l’agglomération.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l’actualité institutionnelle, les Angevins peuvent se rendre sur le{' '}
                <a
                  href={ANGERS_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site d&apos;information de la Ville d&apos;Angers
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

      {/* 4. Brochures, catalogues et documents promotionnels */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Brochures, catalogues et documents promotionnels
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Plaquettes commerciales, catalogues, dépliants, programmes culturels : ces supports de communication vous permettent
                de présenter en détail vos offres aux habitants d’Angers et des communes voisines comme Avrillé, Trélazé ou Saint-Barthélemy-d’Anjou.
                Ils peuvent être distribués en boîtes aux lettres ou autour des grands pôles d’activité et zones commerciales.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous adaptons les plans de diffusion à votre identité visuelle, aux périodes clés de votre activité et à votre
                stratégie de communication globale. La distribution de brochures, catalogues et plaquettes complète vos actions
                digitales pour renforcer la présence de votre marque sur le terrain angevin.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de vos supports imprimés
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de brochures et catalogues dans les boîtes aux lettres angevines"
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
                alt="Distribution de tracts électoraux dans les quartiers d’Angers"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Lors des campagnes électorales, la distribution de tracts, professions de foi et bulletins doit respecter un
                cadre réglementaire strict. Nous accompagnons les candidats et organisations dans leurs opérations à Angers (49)
                et dans les communes de la métropole, avec des tournées planifiées en boîtes aux lettres et une diffusion
                terrain encadrée.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nos opérations s’appuient sur notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                pour garantir une couverture homogène des secteurs ciblés. Quartiers denses, ensembles résidentiels et communes
                voisines : la distribution est pensée pour toucher efficacement les électeurs.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Préparer votre campagne électorale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : la distribution d’imprimés à Angers (49) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            La distribution d&apos;imprimés à Angers (49) et dans la métropole angevine
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Angers, grande ville de Maine-et-Loire (49), se caractérise par un mélange de quartiers historiques, d’ensembles
              résidentiels et de zones d’activités. La distribution d’imprimés publicitaires permet d’y développer une
              communication de proximité efficace, au plus près des foyers, actifs et consommateurs.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Flyers, dépliants, mailing, cartes de visite, plaquettes commerciales, journaux, catalogues ou programmes
              culturels : vos supports de communication papiers s’intègrent à une stratégie globale visant à faire connaître
              vos offres, renforcer votre notoriété locale et alimenter vos campagnes publicitaires. L’imprimé reste un média
              tangible, visible et mémorisable, complémentaire aux canaux digitaux.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En s’appuyant sur l’expérience de nos distributeurs et une bonne connaissance du territoire angevin, nous
              construisons des plans de diffusion adaptés à votre zone de chalandise : boîtes aux lettres, voie publique,
              lieux publics, abords des zones commerciales et des principaux axes. La distribution des journaux, brochures et
              tracts est contrôlée et documentée pour vous offrir un pilotage fiable de vos opérations.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En choisissant Adrexo.net pour vos campagnes à Angers et dans la métropole angevine, vous travaillez avec un
              partenaire spécialisé dans la distribution de supports de communication de proximité. Notre priorité : diffuser
              vos imprimés au bon endroit, au bon moment et auprès des bonnes cibles, afin de renforcer durablement votre
              visibilité locale.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Angers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

