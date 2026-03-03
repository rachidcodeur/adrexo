import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Toulon | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts à Toulon (83) et dans la métropole toulonnaise. Couverture des quartiers et communes, traçabilité et devis gratuit pour vos campagnes d’imprimés publicitaires.",
}

const TOULON_OFFICIAL_SITE_URL = 'https://www.toulon.fr'

export default function DistributionFlyersToulonPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + texte d’intro */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Toulon
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/toulon.webp"
                  alt="Vue de Toulon illustrant une campagne de distribution de flyers"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Toulon, dans le département du Var (83), Adrexo.net accompagne les commerçants, enseignes nationales et
                acteurs institutionnels dans la distribution de flyers, dépliants, catalogues, journaux municipaux et
                tracts. Nos équipes terrain couvrent le centre-ville, le port, le Mourillon, les quartiers résidentiels
                et les communes de la métropole toulonnaise avec des tournées structurées et tracées.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/toulon.webp"
                alt="Panorama de Toulon pour illustrer la diffusion d’imprimés publicitaires"
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

      {/* 2. Flyers et prospectus pour vos opérations locales */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Flyers et prospectus pour vos opérations locales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers toulonnais"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                La distribution de flyers et la diffusion de prospectus permettent de faire connaître vos offres auprès des
                habitants de Toulon : centre ancien, Haute-Ville, quartier du port, Mourillon, Pont-du-Las, Saint-Jean-du-Var,
                Saint-Roch ou encore les zones commerciales et retail parks. Vos supports de communication sont distribués en
                boîtes aux lettres ou en main à main selon vos objectifs de campagne.
              </p>
              <p className="text-body text-gray-dark mb-6">
                En fonction de votre zone de chalandise et des cibles visées, nous construisons des plans de diffusion par
                quartier ou secteur stratégique. La distribution de flyers peut être complétée par des actions de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  street marketing
                </Link>{' '}
                pour renforcer votre présence sur la voie publique lors d’animations, de promotions ou d’ouvertures de
                points de vente.
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
                alt="Distribution de journaux municipaux dans la métropole toulonnaise"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Les journaux municipaux, magazines d’information et bulletins locaux sont essentiels pour maintenir le lien
                entre la collectivité et les habitants de Toulon (83). Nous assurons la distribution de ces imprimés dans les
                immeubles et maisons individuelles, sur les secteurs définis par la ville et les communes de la métropole.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l’actualité institutionnelle, les Toulonnais peuvent consulter le{' '}
                <a
                  href={TOULON_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site d&apos;information de la Ville de Toulon
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
                Plaquettes commerciales, catalogues, dépliants, programmes culturels : ces supports de communication valorisent
                vos offres auprès des habitants de Toulon et des communes voisines comme La Seyne-sur-Mer, La Valette-du-Var
                ou La Garde. Nous les distribuons en boîtes aux lettres ou autour des pôles d’activités et des zones
                commerciales.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous adaptons les plans de diffusion à votre identité visuelle, à la saisonnalité de vos campagnes et à votre
                stratégie de communication globale. La distribution de brochures, catalogues et plaquettes vient compléter vos
                actions digitales pour renforcer la présence de votre marque sur le terrain toulonnais.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de vos supports imprimés
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de brochures et catalogues dans les boîtes aux lettres toulonnaises"
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
                alt="Distribution de tracts électoraux dans les quartiers de Toulon"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Lors des campagnes électorales, la distribution de tracts, professions de foi et bulletins doit respecter un
                cadre légal précis. Nous accompagnons les candidats et organisations dans leurs campagnes à Toulon (83) et
                dans les communes de la métropole, avec des tournées planifiées en boîtes aux lettres et une diffusion
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
                pour garantir une couverture homogène des secteurs ciblés. Quartiers densément peuplés, ensembles
                résidentiels et communes voisines : la distribution est pensée pour toucher efficacement les électeurs.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Préparer votre campagne électorale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : la distribution d’imprimés à Toulon (83) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            La distribution d&apos;imprimés à Toulon (83) et dans la métropole
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Située au cœur de la rade, Toulon est une ville littorale marquée par une forte activité portuaire, commerciale
              et résidentielle. La distribution d’imprimés publicitaires y constitue un moyen efficace de développer une
              communication de proximité, en ciblant les quartiers, les zones d’habitat et les secteurs d’activité les plus
              pertinents pour vos campagnes.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Flyers, dépliants, mailing, cartes de visite, plaquettes commerciales, journaux, catalogues ou programmes
              culturels : vos supports de communication papiers s’intègrent à une stratégie globale visant à faire connaître
              vos offres, soutenir vos lancements et alimenter vos campagnes publicitaires. L’imprimé reste un média tangible,
              visible et mémorisable, complémentaire aux canaux digitaux.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En s’appuyant sur l’expérience de nos distributeurs et une bonne connaissance du territoire toulonnais, nous
              construisons des plans de diffusion adaptés à votre zone de chalandise : boîtes aux lettres, voie publique,
              lieux publics, abords des zones commerciales et des principaux axes. La distribution des journaux, brochures et
              tracts est contrôlée et documentée pour vous offrir un pilotage fiable de vos opérations.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En choisissant Adrexo.net pour vos campagnes à Toulon et dans la métropole, vous travaillez avec un partenaire
              spécialisé dans la distribution de supports de communication de proximité. Notre priorité : diffuser vos
              imprimés au bon endroit, au bon moment et auprès des bonnes cibles, afin de renforcer durablement votre
              visibilité locale.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Toulon
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

