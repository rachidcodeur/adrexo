import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const AVIGNON_OFFICIAL_SITE_URL = 'https://www.avignon.fr'

export const metadata: Metadata = {
  title: 'Distribution de flyer et prospectus à Avignon | Adrexo.net',
  description:
    "Distribution de flyer, prospectus et imprimés publicitaires à Avignon (84). Couverture d’Avignon et de son agglomération dans le Vaucluse, traçabilité et accompagnement de vos campagnes locales.",
}

export default function DistributionFlyersAvignonPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyer et prospectus à Avignon
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/avignon.webp"
                  alt="Vue d’Avignon illustrant la distribution de flyers et prospectus"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Avignon, au cœur du Vaucluse (84) et de la Provence, la distribution de flyers et de prospectus permet
                de toucher habitants, touristes et actifs dans des quartiers aux profils variés : intra-muros autour du
                Palais des Papes, zones résidentielles de Montfavet ou Saint-Ruf, quartiers de La Rocade ou de Courtine.
                Adrexo.net organise vos campagnes d&apos;imprimés publicitaires sur Avignon et son agglomération avec des
                tournées structurées et un suivi précis.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/avignon.webp"
                alt="Distribution de prospectus à Avignon près du Pont d’Avignon"
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

      {/* 2. Distribution de flyer et prospectus à Avignon (84) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyer et prospectus à Avignon (84)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers d’Avignon"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Dans le département du Vaucluse (84), la distribution de flyers et la distribution de prospectus à
                Avignon couvrent des zones très contrastées : centre historique intra-muros, boulevards ceinturant les
                remparts, quartiers résidentiels, ensembles collectifs, zones d&apos;activités de Courtine ou Agroparc,
                ainsi que les axes desservant les communes voisines comme Le Pontet, Morières-lès-Avignon ou Villeneuve-lès-Avignon.
                Chaque campagne est pensée pour s&apos;adapter au tissu urbain et aux flux de circulation.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les distributions peuvent être réalisées en boîtes aux lettres ou en main à main lors d&apos;événements
                avignonnais : festival de théâtre, rendez-vous culturels, manifestations sportives ou opérations
                commerciales. Pour compléter vos actions papier, vous pouvez aussi vous appuyer sur notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et institutionnels
                </Link>
                , afin de renforcer la présence de vos messages sur l&apos;ensemble de l&apos;agglomération.
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
                alt="Distribution de journaux municipaux dans les quartiers d’Avignon"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Les journaux municipaux, bulletins d&apos;information et magazines de quartier contribuent à maintenir le
                lien entre la Ville d&apos;Avignon et ses habitants. La distribution de ces imprimés institutionnels est
                organisée dans les immeubles et maisons individuelles, des ruelles du centre ancien aux lotissements plus
                récents, en passant par les quartiers périphériques et les communes de l&apos;agglomération.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l&apos;actualité officielle, les Avignonnais peuvent consulter le{' '}
                <a
                  href={AVIGNON_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site d&apos;information de la ville d&apos;Avignon
                </a>
                . De notre côté, nous veillons à ce que vos journaux municipaux, bulletins d&apos;information locale et
                supports institutionnels soient distribués dans les délais, sur les périmètres définis et avec une
                traçabilité adaptée aux attentes des collectivités du 84.
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
                ces supports imprimés accompagnent la vie économique et culturelle d&apos;Avignon et des communes voisines
                du Grand Avignon. La distribution de brochures et catalogues en boîtes aux lettres permet de valoriser vos
                offres auprès des habitants, en complément de vos actions digitales et de vos campagnes médias.
              </p>
              <p className="text-body text-gray-dark mb-6">
                En fonction de votre zone de chalandise, des temps forts de l&apos;année (saison estivale, festival
                d&apos;Avignon, périodes de soldes, rentrée scolaire, etc.) et de vos objectifs de communication, nous
                construisons des plans de diffusion adaptés. La distribution de ces supports devient ainsi un levier pour
                renforcer votre visibilité dans le Vaucluse et plus largement en Provence.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de catalogues et brochures publicitaires dans les boîtes aux lettres à Avignon"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts pour vos campagnes à Avignon */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts pour vos campagnes à Avignon
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0 order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts et documents de campagne dans les quartiers d’Avignon"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Lors des campagnes électorales ou de consultations locales, la distribution de tracts, professions de foi
                et documents officiels doit respecter un cadre réglementaire strict. À Avignon, ces opérations couvrent les
                différents quartiers de la ville et les communes de l&apos;agglomération, en boîtes aux lettres ou en main
                à main, pour toucher les électeurs au plus près de leur quotidien.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Notre service de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts et actions de street marketing
                </Link>{' '}
                vous permet de combiner diffusion en boîtes aux lettres et présence terrain, sur Avignon, dans le
                Vaucluse et plus largement en Provence-Alpes-Côte d&apos;Azur, avec des tournées organisées et un
                reporting détaillé.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville Avignon */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-3">
            La distribution d&apos;imprimés à Avignon et dans le Vaucluse
          </h2>
          <p className="text-body text-gray-dark mb-6">
            Située au bord du Rhône, Avignon est une ville emblématique de Provence, connue pour son patrimoine, son
            festival et sa vie culturelle intense. Dans ce contexte, la distribution d&apos;imprimés publicitaires permet
            de toucher des publics variés : habitants du centre, familles des quartiers résidentiels, touristes de passage
            et actifs de la région.
          </p>
          <p className="text-body text-gray-dark mb-6">
            Flyers, dépliants, cartes de visite, catalogues, journaux, programmes culturels ou brochures touristiques :
            vos supports de communication papiers complètent vos dispositifs digitaux et médias. Ils contribuent à faire
            connaître vos offres, à soutenir vos lancements et à ancrer votre marque dans le quotidien des Avignonnais et
            des visiteurs.
          </p>
          <p className="text-body text-gray-dark mb-6">
            En s&apos;appuyant sur l&apos;expérience des équipes terrain et sur une bonne connaissance du tissu urbain
            local, nous construisons des plans de diffusion adaptés à vos enjeux : boîtes aux lettres, voie publique,
            abords des commerces, zones d&apos;activités ou communes de l&apos;agglomération. La distribution des
            journaux, brochures et tracts est contrôlée et documentée pour vous offrir un pilotage fiable de vos
            opérations.
          </p>
          <p className="text-body text-gray-dark mb-6">
            En choisissant Adrexo.net pour vos campagnes à Avignon et dans le Vaucluse, vous bénéficiez d&apos;un
            partenaire spécialisé dans la distribution de supports de communication de proximité. Notre priorité : faire
            parvenir vos imprimés au bon endroit, au bon moment et auprès des bons publics, afin de renforcer durablement
            votre visibilité locale.
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

