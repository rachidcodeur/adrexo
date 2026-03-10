import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const BESANCON_OFFICIAL_SITE_URL = 'https://www.besancon.fr'

export const metadata: Metadata = {
  title: 'Distribution de flyer et prospectus à Besançon | Adrexo.net',
  description:
    'Distribution de flyer, prospectus et imprimés publicitaires à Besançon (25). Couverture des quartiers bisontins et du Grand Besançon, traçabilité et accompagnement de vos campagnes locales.',
}

export default function DistributionFlyersBesanconPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyer et prospectus à Besançon
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/besancon.webp"
                  alt="Vue de Besançon illustrant la distribution de flyers et prospectus"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Besançon, capitale du Doubs (25) et de la région Bourgogne-Franche-Comté, la distribution de flyers et
                de prospectus permet de toucher habitants, commerçants, étudiants et actifs dans des quartiers aux
                profils variés : centre historique, boucles du Doubs, Battant, Planoise, Chaprais, Palente ou encore les
                communes de Grand Besançon Métropole. Adrexo.net organise vos campagnes d’imprimés publicitaires avec des
                tournées structurées et un suivi précis.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/besancon.webp"
                alt="Distribution de prospectus à Besançon le long des boucles du Doubs"
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

      {/* 2. Distribution de flyer et prospectus à Besançon (25) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyer et prospectus à Besançon (25)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers de Besançon"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Dans le Doubs (25), la distribution de flyers et la distribution de prospectus à Besançon s’adaptent à
                un territoire mêlant centre ancien, quartiers résidentiels, ensembles collectifs, zones d’activités et
                zones commerciales. Les plans de diffusion peuvent cibler les boucles du Doubs, les grands axes de
                circulation, les secteurs commerçants ou les quartiers plus périphériques, selon vos objectifs de
                communication et votre zone de chalandise.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les opérations de distribution sont réalisées en boîtes aux lettres ou en main à main lors d’animations
                commerciales, d’événements culturels ou de lancements de points de vente. Pour compléter votre
                dispositif, vous pouvez également vous appuyer sur notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et institutionnels
                </Link>
                , afin d’installer vos messages dans la durée auprès des habitants de Besançon et de Grand Besançon
                Métropole.
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
                alt="Distribution de journaux municipaux dans les immeubles et maisons de Besançon"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Les journaux municipaux, bulletins d’information et magazines locaux participent à maintenir le lien
                entre la ville de Besançon, l’agglomération et leurs habitants. La distribution de ces supports
                institutionnels est organisée dans les immeubles, maisons individuelles et résidences, en veillant à
                respecter les périmètres définis et les calendriers de parution.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l’actualité officielle, les Bisontins peuvent consulter le{' '}
                <a
                  href={BESANCON_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site d’information de la ville de Besançon
                </a>
                . De notre côté, nous veillons à ce que vos journaux municipaux et supports d’information locale soient
                distribués dans les délais, sur les secteurs choisis et avec une traçabilité compatible avec les attentes
                des collectivités du Doubs.
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
                ces supports imprimés accompagnent la vie économique, universitaire et culturelle de Besançon et de ses
                communes voisines. La distribution de brochures et catalogues en boîtes aux lettres permet de valoriser
                vos opérations auprès des habitants et de vos clients, en complément de vos campagnes digitales.
              </p>
              <p className="text-body text-gray-dark mb-6">
                En fonction de votre zone de chalandise, des temps forts de l’année (rentrée universitaire, événements
                culturels, soldes, manifestations sportives, etc.) et de vos objectifs de communication, nous construisons
                des plans de diffusion adaptés. La distribution de ces supports devient ainsi un levier pour renforcer
                votre présence dans le Doubs (25) et plus largement en Bourgogne-Franche-Comté.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de catalogues et brochures publicitaires dans les boîtes aux lettres à Besançon"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts pour vos campagnes à Besançon */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts pour vos campagnes à Besançon
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0 order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts et documents de campagne dans les quartiers de Besançon"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Lors des campagnes électorales ou des consultations locales, la distribution de tracts, professions de foi
                et documents officiels doit respecter un cadre réglementaire strict et un calendrier précis. À Besançon,
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
                vous permet de combiner diffusion en boîtes aux lettres et présence terrain, sur Besançon, dans le Doubs
                et plus largement en Bourgogne-Franche-Comté, avec des tournées organisées et des comptes rendus de
                diffusion.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville Besançon */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-3">
            La distribution d&apos;imprimés à Besançon et dans le Doubs
          </h2>
          <p className="text-body text-gray-dark mb-6">
            Ville universitaire et culturelle, marquée par ses fortifications classées à l’UNESCO et la présence du
            Doubs, Besançon est un pôle de services important pour le département (25). La distribution d’imprimés
            publicitaires permet d’y développer une communication de proximité ciblée, en tenant compte de la diversité
            des quartiers et des flux de population.
          </p>
          <p className="text-body text-gray-dark mb-6">
            Flyers, dépliants, cartes de visite, catalogues, journaux, programmes culturels ou brochures touristiques :
            vos supports de communication papiers complètent vos dispositifs digitaux et médias. Ils contribuent à faire
            connaître vos offres, à soutenir vos lancements et à renforcer votre présence auprès des Bisontins et des
            visiteurs de passage.
          </p>
          <p className="text-body text-gray-dark mb-6">
            En s’appuyant sur l’expérience des équipes terrain et sur une bonne connaissance du tissu urbain local, nous
            construisons des plans de diffusion adaptés à vos objectifs : boîtes aux lettres, voie publique, abords des
            commerces, zones résidentielles ou communes voisines. La distribution des journaux, brochures et tracts est
            contrôlée et documentée pour vous offrir un pilotage fiable de vos opérations.
          </p>
          <p className="text-body text-gray-dark mb-6">
            En choisissant Adrexo.net pour vos campagnes à Besançon et dans le Doubs (25), vous bénéficiez d’un partenaire
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

