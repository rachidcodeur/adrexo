import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const TOURCOING_OFFICIAL_SITE_URL = 'https://www.tourcoing.fr'

export const metadata: Metadata = {
  title: 'Distribution de flyer et prospectus à Tourcoing | Adrexo.net',
  description:
    'Distribution de flyer, prospectus et imprimés publicitaires à Tourcoing (59). Couverture des quartiers tourquennois et de la métropole lilloise, traçabilité et accompagnement de vos campagnes locales.',
}

export default function DistributionFlyersTourcoingPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyer et prospectus à Tourcoing
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/tourcoing.webp"
                  alt="Vue de Tourcoing illustrant la distribution de flyers et prospectus"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Tourcoing, au cœur de la métropole européenne de Lille et du département du Nord (59), la distribution
                de flyers et de prospectus permet de toucher habitants, commerçants et usagers dans des quartiers aux
                profils variés : centre-ville, Brun Pain, Croix-Rouge, Belencontre, Pont de Neuville ou encore le secteur
                de l&apos;Union partagé avec Roubaix. Adrexo.net organise vos campagnes d&apos;imprimés publicitaires
                avec des tournées structurées et un suivi précis des diffusions.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/tourcoing.webp"
                alt="Distribution de prospectus à Tourcoing dans le centre et les quartiers rénovés"
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

      {/* 2. Distribution de flyer et prospectus à Tourcoing (59) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyer et prospectus à Tourcoing (59)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers de Tourcoing"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Dans le Nord (59), la distribution de flyers et la distribution de prospectus à Tourcoing s&apos;adaptent
                à un tissu urbain mêlant centre historique, quartiers résidentiels, grands ensembles et zones d&apos;activité.
                Les campagnes peuvent cibler les secteurs commerçants, les quartiers en renouvellement urbain ou les axes
                de passage en direction de Roubaix, Mouvaux, Neuville-en-Ferrain ou Wattrelos, en fonction de vos objectifs.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les opérations de diffusion sont réalisées en boîtes aux lettres ou en main à main, lors d&apos;animations
                commerciales, d&apos;événements locaux ou d&apos;ouvertures de points de vente. Pour renforcer la portée
                de vos messages, vous pouvez vous appuyer sur notre service de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution street marketing et opérations terrain
                </Link>
                , afin de combiner présence papier et animation de proximité sur Tourcoing et la métropole lilloise.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Distribution de journaux municipaux et d'informations locales */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de journaux municipaux et supports d&apos;information
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0 order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans les immeubles et maisons de Tourcoing"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Les journaux municipaux, bulletins d&apos;information et magazines de quartier participent à maintenir le
                lien entre la ville de Tourcoing et ses habitants. La distribution de ces imprimés institutionnels est
                organisée dans les immeubles, maisons individuelles et résidences, des quartiers du centre jusqu&apos;aux
                secteurs plus périphériques, en veillant à respecter les périmètres définis par la collectivité.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l&apos;actualité officielle, les Tourquennois peuvent consulter le{' '}
                <a
                  href={TOURCOING_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site d&apos;information de la ville de Tourcoing
                </a>
                . De notre côté, nous veillons à ce que vos journaux municipaux et supports d&apos;information locale
                soient distribués dans les délais, sur les périmètres décidés et avec une traçabilité adaptée aux attentes
                des collectivités du 59.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Distribution de brochures, catalogues et supports promotionnels */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de brochures, catalogues et supports promotionnels
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Plaquettes commerciales, catalogues, invitations, programmes culturels ou dépliants promotionnels : ces
                supports imprimés accompagnent la vie économique et associative de Tourcoing et de la métropole lilloise.
                La distribution de brochures et catalogues en boîtes aux lettres permet de valoriser vos opérations auprès
                des habitants des quartiers résidentiels, des zones en rénovation et des secteurs à forte densité de
                commerces de proximité.
              </p>
              <p className="text-body text-gray-dark mb-6">
                En construisant des plans de diffusion adaptés à votre zone de chalandise, aux périodes fortes de
                l&apos;année et aux cibles visées, la distribution de ces imprimés devient un véritable levier pour
                renforcer votre présence locale dans le Nord (59). Vos campagnes papier complètent ainsi vos dispositifs
                digitaux pour toucher les Tourquennois au plus près de leur quotidien.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de catalogues et brochures publicitaires dans les boîtes aux lettres à Tourcoing"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts pour vos campagnes à Tourcoing */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts pour vos campagnes à Tourcoing
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0 order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts et documents de campagne dans les quartiers de Tourcoing"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Lors des campagnes électorales ou des consultations locales, la distribution de tracts, professions de foi
                et documents officiels doit respecter un cadre réglementaire strict et un calendrier précis. À Tourcoing,
                ces opérations couvrent les différents quartiers de la ville et les communes voisines, en boîtes aux
                lettres ou en main à main, pour toucher les électeurs au plus près de leur lieu de vie.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts électoraux et municipaux
                </Link>{' '}
                vous permet de piloter vos campagnes sur Tourcoing, dans le Nord et plus largement sur la métropole
                lilloise, avec des tournées organisées, des équipes briefées et des comptes rendus de diffusion.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville Tourcoing */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-3">
            La distribution d&apos;imprimés à Tourcoing et dans le Nord
          </h2>
          <p className="text-body text-gray-dark mb-6">
            Ville frontalière, marquée par son histoire industrielle et sa proximité avec la Belgique, Tourcoing occupe
            une position stratégique au sein de la métropole européenne de Lille. La distribution d&apos;imprimés
            publicitaires permet d&apos;y développer une communication de proximité ciblée, en tenant compte des
            spécificités de chaque quartier.
          </p>
          <p className="text-body text-gray-dark mb-6">
            Flyers, dépliants, cartes de visite, catalogues, journaux, programmes culturels ou magazines locaux : vos
            supports de communication papiers complètent vos dispositifs digitaux et médias. Ils contribuent à faire
            connaître vos offres, à soutenir vos lancements et à renforcer votre présence dans les quartiers tourquennois
            et plus largement dans le 59.
          </p>
          <p className="text-body text-gray-dark mb-6">
            En s&apos;appuyant sur l&apos;expérience des équipes terrain et sur une bonne connaissance du tissu urbain,
            nous construisons des plans de diffusion adaptés à vos objectifs : boîtes aux lettres, voie publique, abords
            des commerces, zones résidentielles ou secteurs en requalification. La distribution des journaux, brochures et
            tracts est contrôlée et documentée pour vous offrir un pilotage fiable de vos opérations.
          </p>
          <p className="text-body text-gray-dark mb-6">
            En choisissant Adrexo.net pour vos campagnes à Tourcoing et dans le Nord, vous bénéficiez d&apos;un partenaire
            spécialisé dans la distribution de supports de communication de proximité. Notre priorité : faire parvenir vos
            imprimés au bon endroit, au bon moment et auprès des bons publics, afin de renforcer durablement votre
            visibilité locale.
          </p>

          <div className="mt-10 text-center">
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

