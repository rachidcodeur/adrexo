import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const AUXERRE_OFFICIAL_SITE_URL = 'https://www.auxerre.fr'

export const metadata: Metadata = {
  title: 'Distribution de flyer et prospectus à Auxerre | Adrexo.net',
  description:
    'Distribution de flyer, prospectus et imprimés publicitaires à Auxerre (89). Couverture des quartiers auxerrois et de l’agglomération, traçabilité et accompagnement de vos campagnes locales.',
}

export default function DistributionFlyersAuxerrePage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyer et prospectus à Auxerre
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/auxerre.webp"
                  alt="Vue d’Auxerre illustrant la distribution de flyers et prospectus"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Auxerre, au cœur du département de l’Yonne (89) et de la Bourgogne-Franche-Comté, la distribution de
                flyers et de prospectus permet de toucher habitants, commerçants et actifs dans les différents quartiers :
                centre historique autour de la cathédrale Saint-Étienne, bords de l’Yonne, quartiers résidentiels, zones
                commerciales et communes de l’agglomération. Adrexo.net structure vos campagnes d’imprimés publicitaires
                avec des tournées organisées et un suivi précis.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/auxerre.webp"
                alt="Distribution de prospectus à Auxerre le long des quais de l’Yonne"
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

      {/* 2. Distribution de flyer et prospectus à Auxerre (89) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyer et prospectus à Auxerre (89)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers d’Auxerre"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Dans le département de l’Yonne (89), la distribution de flyers et la distribution de prospectus à
                Auxerre s’adaptent à un territoire composé de centre ancien, de quartiers résidentiels, d’ensembles
                collectifs et de zones d’activités en périphérie. Les plans de diffusion peuvent cibler les bords de
                l’Yonne, les axes d’entrée de ville, les secteurs commerçants ou les quartiers à forte densité, en
                fonction de vos objectifs et de votre zone de chalandise.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les opérations de distribution sont réalisées en boîtes aux lettres ou en main à main lors d’animations
                commerciales, d’événements locaux ou de lancements de points de vente. Pour compléter votre dispositif,
                vous pouvez également vous appuyer sur notre service de{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux et supports institutionnels
                </Link>
                , afin de renforcer votre présence auprès des habitants d’Auxerre et des communes voisines.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Distribution de journaux municipaux et d’informations locales */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de journaux municipaux et bulletins d’information
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0 order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans les immeubles et maisons d’Auxerre"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Les journaux municipaux, bulletins d’information et magazines locaux participent à maintenir le lien
                entre la ville d’Auxerre et ses habitants. La distribution de ces supports institutionnels est organisée
                dans les immeubles, maisons individuelles et résidences, en veillant à respecter les périmètres définis
                par la collectivité et les fréquences de parution.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l’actualité officielle, les Auxerrois peuvent consulter le{' '}
                <a
                  href={AUXERRE_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site d’information de la ville d’Auxerre
                </a>
                . De notre côté, nous veillons à ce que vos journaux municipaux et supports d’information locale soient
                distribués dans les délais, sur les secteurs choisis et avec une traçabilité compatible avec les attentes
                des collectivités de l’Yonne.
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
                Plaquettes commerciales, catalogues produits, invitations, programmes culturels ou dépliants touristiques :
                ces supports imprimés accompagnent la vie économique et culturelle d’Auxerre et de son agglomération. La
                distribution de brochures et catalogues en boîtes aux lettres permet de valoriser vos opérations auprès des
                habitants et de vos clients, en complément de vos campagnes digitales.
              </p>
              <p className="text-body text-gray-dark mb-6">
                En fonction de votre zone de chalandise, des temps forts de l’année (soldes, rentrée, événements sur les
                quais de l’Yonne, manifestations sportives, etc.) et de vos objectifs de communication, nous construisons
                des plans de diffusion adaptés. La distribution de ces supports devient ainsi un levier pour renforcer
                votre présence dans l’Yonne (89) et plus largement en Bourgogne-Franche-Comté.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de catalogues et brochures publicitaires dans les boîtes aux lettres à Auxerre"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts pour vos campagnes à Auxerre */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts pour vos campagnes à Auxerre
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0 order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts et documents de campagne dans les quartiers d’Auxerre"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Lors des campagnes électorales ou des consultations locales, la distribution de tracts, professions de foi
                et documents officiels doit respecter un cadre réglementaire strict et un calendrier précis. À Auxerre,
                ces opérations couvrent les différents quartiers de la ville et les communes voisines, en boîtes aux
                lettres ou en main à main, pour toucher les électeurs au plus près de leur lieu de vie.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Notre service de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts et actions de street marketing
                </Link>{' '}
                vous permet de combiner diffusion en boîtes aux lettres et présence terrain, sur Auxerre, dans l’Yonne et
                plus largement en Bourgogne, avec des tournées organisées et des comptes rendus de diffusion.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville Auxerre */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-3">
            La distribution d&apos;imprimés à Auxerre et dans l&apos;Yonne
          </h2>
          <p className="text-body text-gray-dark mb-6">
            Ville bourguignonne traversée par l’Yonne, Auxerre joue un rôle de pôle de services, de commerce et de vie
            culturelle pour une large partie du département (89). La distribution d’imprimés publicitaires permet d’y
            développer une communication de proximité ciblée, en tenant compte de la diversité des quartiers et des flux
            de population.
          </p>
          <p className="text-body text-gray-dark mb-6">
            Flyers, dépliants, cartes de visite, catalogues, journaux, programmes culturels ou brochures touristiques :
            vos supports de communication papiers complètent vos dispositifs digitaux et médias. Ils contribuent à faire
            connaître vos offres, à soutenir vos lancements et à renforcer votre présence auprès des Auxerrois et des
            visiteurs de passage.
          </p>
          <p className="text-body text-gray-dark mb-6">
            En s’appuyant sur l’expérience des équipes terrain et sur une bonne connaissance du tissu urbain local, nous
            construisons des plans de diffusion adaptés à vos objectifs : boîtes aux lettres, voie publique, abords des
            commerces, zones résidentielles ou communes voisines. La distribution des journaux, brochures et tracts est
            contrôlée et documentée pour vous offrir un pilotage fiable de vos opérations.
          </p>
          <p className="text-body text-gray-dark mb-6">
            En choisissant Adrexo.net pour vos campagnes à Auxerre et dans l’Yonne (89), vous bénéficiez d’un partenaire
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

