import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const ROUBAIX_OFFICIAL_SITE_URL = 'https://www.ville-roubaix.fr'

export const metadata: Metadata = {
  title: 'Distribution de flyer et prospectus à Roubaix | Adrexo.net',
  description:
    'Distribution de flyer, prospectus et imprimés publicitaires à Roubaix (59). Couverture des quartiers roubaisiens et de la métropole lilloise, traçabilité et accompagnement de vos campagnes locales.',
}

export default function DistributionFlyersRoubaixPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyer et prospectus à Roubaix
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/roubaix.webp"
                  alt="Vue de Roubaix illustrant la distribution de flyers et prospectus"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Roubaix, au cœur de la métropole européenne de Lille et du département du Nord (59), la distribution de
                flyers et de prospectus permet de toucher habitants, commerçants, salariés et étudiants dans des quartiers
                aux profils variés : centre-ville, Barbieux, Trois-Ponts, Épeule, Alma ou encore le secteur de l&apos;Union.
                Adrexo.net organise vos campagnes d&apos;imprimés publicitaires avec des tournées structurées et un suivi
                précis des diffusions.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/roubaix.webp"
                alt="Distribution de prospectus à Roubaix autour des bâtiments industriels réhabilités"
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

      {/* 2. Distribution de flyer et prospectus à Roubaix (59) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyer et prospectus à Roubaix (59)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers de Roubaix"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Dans le Nord (59), la distribution de flyers et la distribution de prospectus à Roubaix couvrent des
                secteurs très différents : rues commerçantes du centre, quartiers résidentiels proches du parc Barbieux,
                zones d&apos;habitat collectif, friches industrielles transformées en lieux de vie, ainsi que les axes
                structurants vers Tourcoing, Wattrelos ou Croix. Chaque campagne est pensée pour s&apos;adapter aux
                réalités du terrain roubaisien et aux habitudes de déplacement des habitants.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les opérations de distribution peuvent être réalisées en boîtes aux lettres ou en main à main lors
                d&apos;animations commerciales, d&apos;événements culturels ou de temps forts organisés dans les
                équipements de la ville. Pour renforcer la présence terrain, vous pouvez compléter ces actions avec notre
                service de{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux et publications locales
                </Link>
                , afin de toucher durablement les foyers roubaisiens.
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
            Distribution de journaux municipaux et d&apos;informations locales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0 order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans les immeubles et maisons de Roubaix"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Les journaux municipaux, bulletins d&apos;information et magazines de quartier contribuent à maintenir le
                lien entre la ville de Roubaix et ses habitants. La distribution de ces imprimés institutionnels est
                organisée dans les immeubles, maisons individuelles et résidences, des quartiers du centre jusqu&apos;aux
                secteurs plus périphériques, en passant par les zones pavillonnaires et les grands ensembles.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l&apos;actualité officielle, les Roubaisiens peuvent consulter le{' '}
                <a
                  href={ROUBAIX_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site d&apos;information de la ville de Roubaix
                </a>
                . De notre côté, nous veillons à ce que vos journaux municipaux et supports d&apos;information locale
                soient distribués dans les délais, sur les périmètres définis et avec une traçabilité adaptée aux attentes
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
                Plaquettes commerciales, catalogues, programmes culturels, invitations ou dépliants promotionnels : ces
                supports imprimés accompagnent la vie économique et culturelle de Roubaix et de la métropole lilloise.
                La distribution de brochures et catalogues en boîtes aux lettres permet de valoriser vos opérations auprès
                des habitants des quartiers résidentiels, des zones en rénovation urbaine ou des secteurs à forte densité
                de commerces de proximité.
              </p>
              <p className="text-body text-gray-dark mb-6">
                En coordonnant la distribution de vos supports imprimés avec vos actions digitales, vos campagnes
                médias et vos opérations terrain, vous renforcez la visibilité de votre marque dans le 59. Les plans
                de diffusion sont construits en fonction de votre zone de chalandise, des périodes fortes (soldes,
                événements, réouvertures) et du profil des habitants ciblés.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de catalogues et brochures publicitaires dans les boîtes aux lettres à Roubaix"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts pour vos campagnes à Roubaix */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts pour vos campagnes à Roubaix
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0 order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts et documents de campagne dans les quartiers de Roubaix"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Lors des campagnes électorales ou de consultations locales, la distribution de tracts, brochures
                programmatiques et documents officiels doit respecter un cadre réglementaire strict et un calendrier
                précis. À Roubaix, les opérations se déploient dans les différents quartiers de la ville, en boîtes aux
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
                vous permet de piloter vos campagnes sur Roubaix, dans le Nord et plus largement sur l&apos;ensemble de
                la métropole lilloise, avec une organisation rigoureuse des tournées et des comptes rendus de diffusion.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville Roubaix */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-3">
            La distribution d&apos;imprimés à Roubaix et dans le Nord
          </h2>
          <p className="text-body text-gray-dark mb-6">
            Située au cœur du département du Nord (59) et de la métropole européenne de Lille, Roubaix est une ville
            marquée par un patrimoine industriel fort, des quartiers en renouvellement urbain et une vie économique
            dynamique. La distribution d&apos;imprimés publicitaires permet d&apos;y développer une communication de
            proximité efficace, au plus près des habitants et des usagers.
          </p>
          <p className="text-body text-gray-dark mb-6">
            Flyers, dépliants, cartes de visite, catalogues, journaux, programmes culturels ou magazines locaux :
            vos supports de communication papiers complètent vos campagnes digitales et vos actions médias. Ils
            contribuent à faire connaître vos offres, à soutenir vos lancements et à renforcer votre présence dans
            les quartiers roubaisiens.
          </p>
          <p className="text-body text-gray-dark mb-6">
            En s&apos;appuyant sur l&apos;expérience des équipes terrain et sur une bonne connaissance du tissu urbain,
            nous élaborons des plans de diffusion adaptés à vos objectifs : boîtes aux lettres, voie publique, abords
            des commerces, zones résidentielles ou secteurs en requalification. La distribution des journaux, brochures
            et tracts est contrôlée et documentée pour vous offrir un pilotage fiable de vos opérations.
          </p>
          <p className="text-body text-gray-dark mb-6">
            En choisissant Adrexo.net pour vos campagnes à Roubaix et dans le Nord, vous bénéficiez d&apos;un partenaire
            spécialisé dans la distribution de supports de communication de proximité. Notre priorité : faire parvenir
            vos imprimés au bon endroit, au bon moment et auprès des bons publics, afin de renforcer durablement votre
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

