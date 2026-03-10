import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const DUNKERQUE_OFFICIAL_SITE_URL = 'https://www.ville-dunkerque.fr'

export const metadata: Metadata = {
  title: 'Distribution de flyer et prospectus à Dunkerque | Adrexo.net',
  description:
    'Distribution de flyer, prospectus et imprimés publicitaires à Dunkerque (59). Couverture des quartiers dunkerquois et du littoral nord, traçabilité et accompagnement de vos campagnes locales.',
}

export default function DistributionFlyersDunkerquePage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyer et prospectus à Dunkerque
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/dunkerque.webp"
                  alt="Vue de Dunkerque illustrant la distribution de flyers et prospectus"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Dunkerque, au bord de la mer du Nord et au cœur du département du Nord (59), la distribution de flyers
                et de prospectus permet de toucher habitants, actifs et visiteurs sur l&apos;ensemble du territoire :
                centre-ville, quartier du Grand Large, Rosendaël, Malo-les-Bains, Petite-Synthe, Grande-Synthe ou encore
                les communes du littoral comme Saint-Pol-sur-Mer et Leffrinckoucke. Adrexo.net organise vos campagnes
                d&apos;imprimés publicitaires avec des tournées structurées et un suivi précis des diffusions.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/dunkerque.webp"
                alt="Distribution de prospectus à Dunkerque sur le front de mer et en centre-ville"
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

      {/* 2. Distribution de flyer et prospectus à Dunkerque (59) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyer et prospectus à Dunkerque (59)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers de Dunkerque"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Dans le Nord (59), la distribution de flyers et la distribution de prospectus à Dunkerque s&apos;appuie
                sur un territoire contrasté : centre-ville commerçant, quartiers résidentiels, grands ensembles,
                quartiers portuaires, zones d&apos;activités industrielles et communes du littoral. Les plans de diffusion
                sont construits en fonction de votre zone de chalandise, de vos objectifs de communication et des profils
                d&apos;habitants que vous souhaitez toucher.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les opérations de distribution se déclinent en boîtes aux lettres ou en main à main lors d&apos;événements
                locaux : carnaval de Dunkerque, manifestations sportives, rendez-vous culturels ou animations commerciales.
                Pour renforcer la portée de vos actions papier, vous pouvez également vous appuyer sur notre service de{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux et supports institutionnels
                </Link>
                , afin de déployer une présence régulière auprès des foyers dunkerquois.
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
                alt="Distribution de journaux municipaux dans les immeubles et maisons de Dunkerque"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Les journaux municipaux, bulletins d&apos;information et magazines de quartier assurent un lien régulier
                entre la ville de Dunkerque, l&apos;agglomération dunkerquoise et leurs habitants. La distribution de ces
                supports institutionnels est organisée dans les immeubles et maisons individuelles, de Malo-les-Bains à
                Petite-Synthe, en passant par Rosendaël, le centre-ville et les communes voisines.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l&apos;actualité officielle, les Dunkerquois peuvent consulter le{' '}
                <a
                  href={DUNKERQUE_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site d&apos;information de la ville de Dunkerque
                </a>
                . De notre côté, nous veillons à ce que vos journaux municipaux et supports d&apos;information locale
                soient distribués dans les délais, sur les secteurs définis et avec une traçabilité compatible avec les
                attentes des collectivités du 59.
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
                ces supports imprimés accompagnent la vie économique, culturelle et touristique de Dunkerque et du
                littoral nord. La distribution de brochures et catalogues en boîtes aux lettres permet de valoriser vos
                opérations auprès des habitants, des usagers du port, des salariés des zones industrielles et des
                visiteurs.
              </p>
              <p className="text-body text-gray-dark mb-6">
                En fonction de votre zone de chalandise, des temps forts de l&apos;année (saison balnéaire, carnaval,
                événements culturels, soldes, etc.) et de vos objectifs de communication, nous construisons des plans de
                diffusion adaptés. La distribution de ces supports devient ainsi un levier pour renforcer votre présence
                locale dans le Nord (59) et sur l&apos;ensemble du littoral dunkerquois.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de catalogues et brochures publicitaires dans les boîtes aux lettres à Dunkerque"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts pour vos campagnes à Dunkerque */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts pour vos campagnes à Dunkerque
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0 order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts et documents de campagne dans les quartiers de Dunkerque"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Lors des campagnes électorales ou des consultations locales, la distribution de tracts, professions de foi
                et documents officiels doit respecter un cadre réglementaire strict et un calendrier précis. À Dunkerque,
                les opérations couvrent les différents quartiers de la ville et les communes de l&apos;agglomération, en
                boîtes aux lettres ou en main à main, pour toucher les électeurs au plus près de leur lieu de vie.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts électoraux et municipaux
                </Link>{' '}
                vous permet de piloter vos campagnes sur Dunkerque, dans le Nord et plus largement sur le territoire
                littoral, avec des tournées organisées, des équipes briefées et des comptes rendus de diffusion.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville Dunkerque */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-3">
            La distribution d&apos;imprimés à Dunkerque et sur le littoral nord
          </h2>
          <p className="text-body text-gray-dark mb-6">
            Ville portuaire et balnéaire, Dunkerque occupe une place particulière dans le paysage des Hauts-de-France :
            activités industrielles, commerce, tourisme, événements culturels et vie associative. La distribution
            d&apos;imprimés publicitaires permet d&apos;y développer une communication de proximité ciblée, adaptée aux
            rythmes de la ville et aux spécificités de chaque quartier.
          </p>
          <p className="text-body text-gray-dark mb-6">
            Flyers, dépliants, cartes de visite, catalogues, journaux, programmes culturels ou brochures touristiques :
            vos supports de communication papiers complètent vos dispositifs digitaux et médias. Ils contribuent à faire
            connaître vos offres, à soutenir vos lancements et à renforcer votre présence auprès des habitants, des
            salariés et des visiteurs du littoral dunkerquois.
          </p>
          <p className="text-body text-gray-dark mb-6">
            En s&apos;appuyant sur l&apos;expérience des équipes terrain et sur une bonne connaissance du tissu urbain
            local, nous construisons des plans de diffusion adaptés à vos objectifs : boîtes aux lettres, voie publique,
            abords des commerces, zones résidentielles ou communes voisines. La distribution des journaux, brochures et
            tracts est contrôlée et documentée pour vous offrir un pilotage fiable de vos opérations.
          </p>
          <p className="text-body text-gray-dark mb-6">
            En choisissant Adrexo.net pour vos campagnes à Dunkerque et dans le Nord (59), vous bénéficiez d&apos;un
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

