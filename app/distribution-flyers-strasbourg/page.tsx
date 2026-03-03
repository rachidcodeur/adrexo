import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Strasbourg | Adrexo.net',
  description:
    'Distribution de flyers, prospectus, journaux et tracts à Strasbourg et dans l’Eurométropole. Couverture des quartiers et communes, traçabilité et devis gratuit pour vos campagnes d’imprimés publicitaires.',
}

const STRASBOURG_OFFICIAL_SITE_URL = 'https://www.strasbourg.eu'

export default function DistributionFlyersStrasbourgPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + texte */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Strasbourg
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/strasbourg.webp"
                  alt="Distribution de flyers à Strasbourg"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                Adrexo.net accompagne les acteurs économiques et institutionnels strasbourgeois dans la distribution
                d&apos;imprimés : flyers, prospectus, journaux municipaux, tracts et magazines. Nos équipes couvrent
                Strasbourg et l&apos;ensemble de l’Eurométropole avec des tournées structurées, une traçabilité
                rigoureuse et des rapports détaillés pour chaque campagne.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/strasbourg.webp"
                alt="Vue de Strasbourg pour illustrer la distribution de flyers"
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

      {/* 2. Distribution de flyers et prospectus à Strasbourg */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyers et prospectus à Strasbourg
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus auprès du public strasbourgeois"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                À Strasbourg, la distribution de flyers et la distribution de prospectus restent des supports de
                communication incontournables pour faire connaître vos événements, vos commerces et vos services. Hyper
                centre, Grande Île, Neustadt, Krutenau, Neudorf, Robertsau, Hautepierre ou encore les zones commerciales
                et quartiers d’affaires : chaque campagne est pensée pour cibler précisément vos cibles dans leur zone
                de chalandise.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les distributions peuvent être réalisées en boîtes aux lettres ou en main à main, en complément d&apos;un
                dispositif digital ou d&apos;une campagne publicitaire plus globale. Pour renforcer la visibilité terrain,
                la distribution de flyers peut être associée à des opérations de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  street marketing
                </Link>{' '}
                dans les lieux publics, aux abords des points de vente ou lors d&apos;animations urbaines.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Distribution de journaux municipaux */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de journaux municipaux à Strasbourg
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans l’Eurométropole de Strasbourg"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                La distribution de journaux municipaux et de bulletins d&apos;information locale permet de maintenir un
                lien régulier entre la ville, l’Eurométropole de Strasbourg et les habitants. Nous assurons la diffusion
                des publications institutionnelles dans les immeubles et maisons individuelles, en couvrant les quartiers
                définis par la collectivité et les communes de l’agglomération.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l’actualité institutionnelle, les Strasbourgeois peuvent consulter le{' '}
                <a
                  href={STRASBOURG_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site officiel de Strasbourg
                </a>
                . De notre côté, nous organisons des tournées adaptées aux volumes à distribuer, aux fréquences de
                parution et aux contraintes de terrain, en nous appuyant sur notre service de{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux
                </Link>
                .
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Distribution de magazines, plaquettes et supports de communication */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de magazines, plaquettes et supports de communication à Strasbourg
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Au-delà des flyers, nous distribuons également des plaquettes commerciales, brochures, catalogues,
                dépliants, journaux d&apos;information ou programmes culturels. Ces supports de communication sont
                diffusés au plus près des cibles : boîtes aux lettres, points de vente, commerces de proximité, lieux
                publics, quartiers d’affaires et zones touristiques.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Grâce à une organisation rigoureuse et à des équipes de distributeurs formés, chaque campagne de
                distribution est contrôlée et mesurable. Visuels, grammage, format du support, stratégie de communication
                : nous adaptons les plans de diffusion pour que vos messages se démarquent et renforcent votre image de
                marque, en complément du travail de votre agence de communication ou de votre imprimeur.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de votre projet
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de supports de communication et magazines à Strasbourg"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts électoraux à Strasbourg et dans l’Eurométropole */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts électoraux à Strasbourg et dans l’Eurométropole
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts électoraux à Strasbourg"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                En période de campagne, la distribution de tracts électoraux et de documents officiels est strictement
                encadrée. Adrexo.net met à disposition des équipes dédiées pour distribuer vos tracts, professions de foi
                et bulletins dans le respect des réglementations et des délais imposés.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous intervenons à Strasbourg et dans les principales communes de l’Eurométropole : Schiltigheim,
                Illkirch-Graffenstaden, Ostwald, Lingolsheim, Bischheim, Hœnheim, Eckbolsheim, etc. Les plans de
                distribution sont construits pour couvrir les secteurs ciblés en boîtes aux lettres et en diffusion
                terrain, afin d’atteindre efficacement vos électeurs.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Organiser une distribution électorale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : la distribution d&apos;imprimés à Strasbourg */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            La distribution d&apos;imprimés à Strasbourg et dans l’agglomération
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Dans une métropole frontalière comme Strasbourg, au carrefour de la France et de l’Allemagne, la
              distribution d&apos;imprimés publicitaires est un levier puissant pour toucher un public local et
              transfrontalier. En ciblant finement les quartiers résidentiels, les secteurs étudiants, les zones de
              bureaux et les pôles commerciaux, la distribution de prospectus, catalogues, plaquettes et brochures permet
              de faire connaître vos offres auprès de vos différentes cibles.
            </p>
            <p className="text-body text-gray-dark mb-6">
              La diffusion de supports de communication (flyers, dépliants, mailing, cartes de visite, plaquettes
              commerciales, catalogues, journaux, programmes culturels, etc.) s’intègre à votre stratégie de
              communication globale : lancement de point de vente, campagne publicitaire, promotion saisonnière ou
              événementiel. L’imprimé publicitaire reste un média tangible, visible et mémorisable, complémentaire aux
              canaux digitaux.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une connaissance précise du territoire strasbourgeois et aux retours de nos distributeurs sur le
              terrain, nous ajustons les plans de distribution pour optimiser les volumes diffusés, la couverture de
              chaque secteur et la qualité de dépôt. Boîtes aux lettres, voie publique, affichage mobile, lieux publics :
              la distribution d&apos;imprimés à Strasbourg s’inscrit naturellement dans le quotidien des habitants.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En travaillant avec Adrexo.net, vous bénéficiez d&apos;un partenaire spécialisé dans la distribution de
              documents, tracts et journaux sur Strasbourg et son agglomération. Notre objectif : diffuser vos flyers,
              prospectus et brochures au bon endroit, au bon moment et auprès des bonnes cibles, pour renforcer durablement
              votre visibilité locale.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Strasbourg
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

