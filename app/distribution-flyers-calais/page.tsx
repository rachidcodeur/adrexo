import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const CALAIS_OFFICIAL_SITE_URL = 'https://www.calais.fr'

export const metadata: Metadata = {
  title: 'Distribution de flyer et prospectus à Calais | Adrexo.net',
  description:
    'Distribution de flyer, prospectus et imprimés publicitaires à Calais (62). Couverture des quartiers calaisiens et du littoral, traçabilité et accompagnement de vos campagnes locales.',
}

export default function DistributionFlyersCalaisPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyer et prospectus à Calais
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/calais.webp"
                  alt="Vue de Calais illustrant la distribution de flyers et prospectus"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Calais, au bord de la Manche et au cœur du Pas-de-Calais (62), la distribution de flyers et de
                prospectus permet de toucher habitants, actifs et voyageurs dans des contextes variés : centre-ville, zones
                commerciales, quartiers résidentiels, secteur du port, gare et terminaux transmanche. Adrexo.net organise
                vos campagnes d&apos;imprimés publicitaires avec des tournées structurées et un suivi précis des diffusions.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/calais.webp"
                alt="Distribution de prospectus à Calais près du beffroi et du front de mer"
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

      {/* 2. Distribution de flyer et prospectus à Calais (62) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyer et prospectus à Calais (62)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers de Calais"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Dans le département du Pas-de-Calais (62), la distribution de flyers et la distribution de prospectus à
                Calais couvre un territoire composite : centre historique, quartiers résidentiels, zones pavillonnaires,
                ensembles collectifs, zones d&apos;activités et secteur portuaire. Les plans de diffusion sont construits
                en fonction de votre zone de chalandise, des flux de passage et des profils de foyers que vous souhaitez
                toucher.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les opérations de diffusion sont réalisées en boîtes aux lettres ou en main à main, lors d&apos;événements
                locaux, d&apos;animations commerciales ou d&apos;ouvertures de points de vente. Pour renforcer votre
                dispositif, vous pouvez également combiner ces actions avec notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et institutionnels
                </Link>
                , afin d&apos;ancrer vos messages dans le quotidien des Calaisiens.
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
                alt="Distribution de journaux municipaux dans les immeubles et maisons de Calais"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Les journaux municipaux, bulletins d&apos;information et magazines de quartier participent à maintenir le
                lien entre la ville de Calais et ses habitants. La distribution de ces supports institutionnels est
                organisée dans les immeubles, maisons individuelles et résidences, en tenant compte des périmètres définis
                par la collectivité et de la diversité des quartiers.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l&apos;actualité officielle, les Calaisiens peuvent consulter le{' '}
                <a
                  href={CALAIS_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site d&apos;information de la ville de Calais
                </a>
                . De notre côté, nous veillons à ce que vos journaux municipaux et supports d&apos;information locale
                soient distribués dans les délais, sur les secteurs choisis et avec une traçabilité compatible avec les
                attentes des collectivités du 62.
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
                ces supports imprimés accompagnent la vie économique et touristique de Calais et du littoral
                boulonnais-calaisien. La distribution de brochures et catalogues en boîtes aux lettres permet de valoriser
                vos opérations auprès des habitants, des clients de vos points de vente et des visiteurs de passage.
              </p>
              <p className="text-body text-gray-dark mb-6">
                En définissant une zone de chalandise claire, en lien avec vos implantations et vos objectifs, la
                distribution de ces imprimés devient un levier pour renforcer votre présence dans le Pas-de-Calais (62).
                Vos campagnes papier complètent ainsi vos dispositifs digitaux pour toucher les Calaisiens et les usagers
                du littoral au plus près de leur quotidien.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de catalogues et brochures publicitaires dans les boîtes aux lettres à Calais"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts pour vos campagnes à Calais */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts pour vos campagnes à Calais
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0 order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts et documents de campagne dans les quartiers de Calais"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Lors des campagnes électorales ou des consultations locales, la distribution de tracts, professions de foi
                et documents officiels doit respecter un cadre réglementaire strict et un calendrier précis. À Calais, ces
                opérations couvrent les différents quartiers de la ville et les communes voisines, en boîtes aux lettres ou
                en main à main, pour toucher les électeurs au plus près de leur lieu de vie.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Notre service de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts et actions de street marketing
                </Link>{' '}
                vous permet de combiner diffusion en boîtes aux lettres et présence terrain, sur Calais, dans le
                Pas-de-Calais et plus largement sur la côte d&apos;Opale, avec des tournées organisées et des comptes rendus
                de diffusion.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville Calais */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-3">
            La distribution d&apos;imprimés à Calais et dans le Pas-de-Calais
          </h2>
          <p className="text-body text-gray-dark mb-6">
            Ville portuaire et frontalière, Calais joue un rôle clé dans les échanges entre la France et le Royaume-Uni,
            tout en restant un centre de vie important pour les habitants du Pas-de-Calais (62). La distribution
            d&apos;imprimés publicitaires permet d&apos;y développer une communication de proximité ciblée, adaptée aux
            réalités de chaque quartier et aux flux de population.
          </p>
          <p className="text-body text-gray-dark mb-6">
            Flyers, dépliants, cartes de visite, catalogues, journaux, programmes culturels ou brochures touristiques :
            vos supports de communication papiers complètent vos dispositifs digitaux et médias. Ils contribuent à faire
            connaître vos offres, à soutenir vos lancements et à renforcer votre présence auprès des Calaisiens et des
            visiteurs de passage.
          </p>
          <p className="text-body text-gray-dark mb-6">
            En s&apos;appuyant sur l&apos;expérience des équipes terrain et sur une bonne connaissance du tissu urbain
            local, nous construisons des plans de diffusion adaptés à vos objectifs : boîtes aux lettres, voie publique,
            abords des commerces, zones résidentielles ou communes voisines de la côte d&apos;Opale. La distribution des
            journaux, brochures et tracts est contrôlée et documentée pour vous offrir un pilotage fiable de vos
            opérations.
          </p>
          <p className="text-body text-gray-dark mb-6">
            En choisissant Adrexo.net pour vos campagnes à Calais et dans le Pas-de-Calais (62), vous bénéficiez d&apos;un
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

