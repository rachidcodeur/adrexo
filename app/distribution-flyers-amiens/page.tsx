import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const AMIENS_OFFICIAL_SITE_URL = 'https://www.amiens.fr'

export const metadata: Metadata = {
  title: 'Distribution de flyer et prospectus à Amiens | Adrexo.net',
  description:
    "Distribution de flyer, prospectus et imprimés publicitaires à Amiens (80). Couverture d'Amiens et de la métropole dans la Somme, traçabilité et accompagnement de vos campagnes locales.",
}

export default function DistributionFlyersAmiensPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyer et prospectus à Amiens
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/amiens.webp"
                  alt="Vue d’Amiens illustrant la distribution de flyers et prospectus"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Amiens, au cœur de la Somme (80) et de la région Hauts-de-France, la distribution de flyers et de
                prospectus permet de toucher habitants, étudiants et actifs dans les différents quartiers : centre-ville,
                Saint-Leu, Saint-Pierre, Henriville, Vallée Saint-Ladre ou Amiens Nord. Adrexo.net structure vos campagnes
                d&apos;imprimés publicitaires sur Amiens Métropole avec des tournées organisées et un suivi précis.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/amiens.webp"
                alt="Distribution de prospectus à Amiens près de la cathédrale"
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

      {/* 2. Distribution de flyer et prospectus à Amiens (80) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyer et prospectus à Amiens (80)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers d’Amiens"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Dans le département de la Somme (80), la distribution de flyers et la distribution de prospectus à Amiens
                couvrent des zones variées : hypercentre commerçant, quartiers étudiants autour de l&apos;université de
                Picardie Jules-Verne, Saint-Leu et ses quais, zones résidentielles d&apos;Henriville et Saint-Acheul,
                retail parks de Glisy ou Longueau. Chaque opération tient compte des flux piétons, des axes routiers et
                des habitudes de consommation des habitants.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les distributions peuvent être réalisées en boîtes aux lettres ou en main à main lors d&apos;événements
                locaux : manifestations culturelles, rendez-vous sportifs, animations de centre-ville ou temps forts
                commerciaux. Pour compléter vos opérations, vous pouvez également activer notre service dédié à la{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution street marketing et animations de terrain
                </Link>
                , afin de renforcer votre présence sur Amiens et dans la Somme.
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
                alt="Distribution de journaux municipaux dans les quartiers d’Amiens"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Les journaux municipaux, magazines d&apos;information et bulletins locaux contribuent à maintenir le lien
                entre Amiens Métropole et ses habitants. La distribution de ces imprimés institutionnels est organisée
                dans les immeubles et maisons individuelles, des hortillonnages aux quartiers plus périphériques, en
                passant par les faubourgs et les secteurs pavillonnaires.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l&apos;actualité officielle, les Amiénois peuvent consulter le{' '}
                <a
                  href={AMIENS_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site de la ville d&apos;Amiens
                </a>
                . De notre côté, nous veillons à ce que vos journaux municipaux et publications locales soient distribués
                dans les délais et sur les périmètres définis, avec une traçabilité compatible avec les exigences des
                collectivités de la Somme.
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
                Plaquettes commerciales, catalogues produits, programmes culturels ou dépliants touristiques : ces supports
                imprimés accompagnent la vie économique et culturelle d&apos;Amiens et des communes voisines comme
                Rivery, Longueau, Camon ou Salouël. La distribution de brochures et catalogues en boîtes aux lettres permet
                de valoriser vos offres auprès des habitants de la métropole, en complément de vos actions digitales.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les plans de diffusion sont adaptés à votre zone de chalandise, à la saisonnalité (rentrée universitaire,
                périodes festives, soldes, événements dans le centre historique, etc.) et à votre stratégie de
                communication. La distribution de ces supports devient ainsi un levier pour renforcer votre présence dans
                le 80 et plus largement en Hauts-de-France.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de catalogues et brochures dans les boîtes aux lettres à Amiens"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts pour vos campagnes à Amiens */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts pour vos campagnes à Amiens
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0 order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts et documents de campagne à Amiens"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Qu&apos;il s&apos;agisse d&apos;élections municipales, départementales, régionales ou d&apos;un
                référendum, la distribution de tracts et documents de campagne à Amiens doit respecter un calendrier et un
                cadre réglementaire précis. Nos équipes interviennent dans les différents quartiers amiénois et les
                communes de la métropole pour assurer une diffusion homogène en boîtes aux lettres ou en main à main.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts électoraux et municipaux
                </Link>{' '}
                permet de piloter vos campagnes sur Amiens, dans la Somme et plus largement en région Hauts-de-France, avec
                des comptes rendus de diffusion et une organisation pensée pour couvrir les secteurs visés.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville Amiens */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-3">
            La distribution d&apos;imprimés à Amiens et dans la Somme
          </h2>
          <p className="text-body text-gray-dark mb-6">
            Située au cœur du département de la Somme (80), Amiens est une ville universitaire, administrative et
            culturelle qui réunit une grande diversité de profils : familles, étudiants, salariés, commerçants et
            acteurs institutionnels. La distribution d&apos;imprimés publicitaires permet d&apos;y développer une
            communication de proximité efficace, au plus près des foyers et des lieux de fréquentation quotidienne.
          </p>
          <p className="text-body text-gray-dark mb-6">
            Flyers, dépliants, cartes de visite, plaquettes commerciales, journaux, catalogues ou programmes culturels :
            vos supports de communication papiers s&apos;intègrent dans une stratégie globale visant à faire connaître
            vos offres, soutenir vos lancements ou accompagner vos campagnes promotionnelles. L&apos;imprimé
            publicitaire reste un média tangible, visible et mémorisable, complémentaire aux canaux digitaux.
          </p>
          <p className="text-body text-gray-dark mb-6">
            En s&apos;appuyant sur l&apos;expérience des équipes terrain et sur une bonne connaissance du tissu urbain
            amiénois, nous construisons des plans de diffusion adaptés à vos objectifs : boîtes aux lettres, voie
            publique, abords des zones commerciales, quartiers résidentiels ou communes de la métropole. La distribution
            des journaux, brochures et tracts est contrôlée et documentée pour vous offrir un pilotage fiable de vos
            opérations.
          </p>
          <p className="text-body text-gray-dark mb-6">
            En choisissant Adrexo.net pour vos campagnes à Amiens et dans la Somme, vous bénéficiez d&apos;un partenaire
            spécialisé dans la distribution de supports de communication de proximité. Notre priorité : faire parvenir vos
            imprimés au bon endroit, au bon moment et auprès des bonnes cibles, afin de renforcer durablement votre
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

