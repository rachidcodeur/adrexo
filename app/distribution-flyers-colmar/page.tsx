import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyer et prospectus à Colmar | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts à Colmar (68) et dans l'agglomération colmarienne. Couverture des quartiers, communes voisines et zones de chalandise avec diffusion en boîtes aux lettres et opérations terrain ciblées.",
}

const COLMAR_OFFICIAL_SITE_URL = 'https://www.colmar.fr'

export default function DistributionFlyersColmarPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + intro */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyer et prospectus à Colmar
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/colmar.webp"
                  alt="Vue de Colmar illustrant la distribution de flyer et prospectus"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Colmar, capitale des vins d&apos;Alsace située dans le département du Haut-Rhin (68), la distribution de
                flyer et prospectus reste un support de communication incontournable pour toucher les habitants, les
                touristes et les actifs. Adrexo.net accompagne les enseignes, commerces indépendants, institutions et
                organisateurs d&apos;événements dans leurs campagnes de communication de proximité sur l&apos;ensemble du
                territoire colmarien.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/colmar.webp"
                alt="Panorama de Colmar pour illustrer la distribution de flyer et prospectus"
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

      {/* 2. Distribution de supports imprimés dans Colmar et son agglomération */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de supports imprimés dans Colmar et son agglomération
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers de Colmar"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Quartiers historiques, zones résidentielles, axes commerçants, périphérie : la distribution de flyer et
                prospectus à Colmar (68) permet de cibler précisément votre zone de chalandise. Vos supports de
                communication imprimés – dépliants, mailing papier, catalogues promotionnels ou plaquettes commerciales –
                sont remis en boîtes aux lettres ou en main à main selon vos objectifs.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Notre organisation terrain tient compte des spécificités du Haut-Rhin (68) et des communes autour de Colmar
                afin d&apos;optimiser vos campagnes de distribution. Pour renforcer la visibilité de votre marque, la
                diffusion de vos imprimés peut être complétée par des opérations de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  street marketing
                </Link>{' '}
                sur les principaux flux piétons de la ville et de l’agglomération colmarienne.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Construire votre plan de diffusion
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Distribution d’information municipale et journaux locaux autour de Colmar */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution d&apos;information municipale et journaux locaux autour de Colmar
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans les résidences de Colmar"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Bulletins municipaux, journaux d&apos;information locale, magazines de l&apos;agglomération : ces supports
                sont essentiels pour informer les habitants de Colmar et des communes du 68. Nous prenons en charge la
                distribution de ces documents dans les immeubles, lotissements et maisons individuelles, en respectant les
                secteurs définis par l&apos;éditeur ou la collectivité.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre la vie locale, les Colmariens peuvent consulter le{' '}
                <a
                  href={COLMAR_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site officiel de la Ville de Colmar
                </a>
                . De notre côté, nous mettons en œuvre notre savoir-faire en{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux
                </Link>{' '}
                pour assurer une couverture homogène des quartiers et une diffusion fiable dans tout le Haut-Rhin (68).
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Organiser une diffusion institutionnelle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Distribution de brochures, catalogues et plaquettes pour les acteurs économiques */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de brochures, catalogues et plaquettes pour les acteurs économiques
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Commerce de centre-ville, enseigne nationale, artisan, agence immobilière ou structure touristique : vos
                brochures, catalogues et plaquettes commerciales sont des supports de communication stratégiques pour
                valoriser vos offres auprès des habitants de Colmar (68) et des visiteurs. Ils viennent compléter vos
                actions digitales par une présence tangible dans les boîtes aux lettres.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous vous aidons à définir les secteurs de distribution les plus pertinents : cœurs de quartiers, zones
                résidentielles, secteurs à forte densité, axes menant vers les zones commerciales et les villages viticoles
                voisins. Cette distribution de catalogues et plaquettes s&apos;intègre dans une stratégie globale de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  communication de proximité
                </Link>{' '}
                pour renforcer votre visibilité dans le 68.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de vos supports imprimés
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de brochures et catalogues dans les boîtes aux lettres de Colmar"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts et opérations terrain ciblées à Colmar */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts et opérations terrain ciblées à Colmar
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts et documents imprimés dans les rues de Colmar"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Tracts promotionnels, campagnes associatives, communication institutionnelle ou tracts électoraux : ces
                opérations nécessitent une logistique terrain précise à Colmar (68). Nous organisons la distribution en
                boîtes aux lettres, la diffusion en main à main ou les actions sur des lieux publics en tenant compte de la
                réglementation en vigueur.
              </p>
              <p className="text-body text-gray-dark mb-6">
                En nous appuyant sur notre expertise en{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>
                , nous adaptons les tournées à vos enjeux et à vos cibles. Quartiers densément peuplés, secteurs
                pavillonnaires, proximité des commerces et des équipements publics : chaque zone est travaillée pour
                maximiser l&apos;impact de vos supports imprimés dans le 68.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Préparer votre prochaine opération terrain
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : distribution de flyer et prospectus à Colmar (68) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyer et prospectus à Colmar (68) et dans le vignoble alsacien
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Avec son centre historique, son quartier de la Petite Venise, ses musées et son environnement viticole,
              Colmar attire à la fois habitants, touristes et visiteurs professionnels. La distribution de flyer et
              prospectus à Colmar (68) permet de créer un contact direct avec ces différents publics en complétant vos
              actions digitales par un média papier visible et mémorisable.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Supports de communication tels que flyers, dépliants, mailings, catalogues, plaquettes commerciales,
              brochures ou cartes de visite s&apos;inscrivent dans une stratégie de communication de proximité. Ils
              valorisent votre image, soutiennent vos campagnes publicitaires et contribuent à attirer l&apos;attention sur
              vos points de vente, événements ou services au cœur du Haut-Rhin (68).
            </p>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une connaissance fine du territoire colmarien et de ses environs, nous définissons des plans de
              diffusion adaptés à vos cibles : boîtes aux lettres, zones résidentielles, quartiers touristiques, axes
              principaux menant vers les villages viticoles et zones commerciales. Chaque opération de distribution est
              pensée pour optimiser la couverture de votre zone de chalandise et renforcer l&apos;efficacité de vos actions
              de{' '}
              <Link
                href="/street-marketing"
                className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
              >
                street marketing
              </Link>
              .
            </p>
            <p className="text-body text-gray-dark mb-6">
              En choisissant Adrexo.net pour la distribution de flyer et prospectus à Colmar (68), vous bénéficiez d&apos;un
              partenaire spécialisé dans la diffusion de documents imprimés, capable de coordonner vos campagnes à
              l&apos;échelle de l&apos;Alsace et du Grand Est, en tenant compte des particularités locales de chaque
              secteur.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Colmar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

