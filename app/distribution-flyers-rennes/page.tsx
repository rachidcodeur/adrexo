import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Rennes | Adrexo.net',
  description:
    'Distribution de flyers, prospectus, journaux et tracts à Rennes et dans la métropole rennaise. Couverture des quartiers et communes, traçabilité et devis gratuit pour vos campagnes d’imprimés publicitaires.',
}

const RENNES_OFFICIAL_SITE_URL = 'https://metropole.rennes.fr'

export default function DistributionFlyersRennesPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + texte */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Rennes
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/rennes.webp"
                  alt="Distribution de flyers à Rennes"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                Adrexo.net accompagne les acteurs économiques et institutionnels rennais dans la distribution d&apos;imprimés :
                flyers, prospectus, journaux municipaux, tracts et magazines. Nos équipes couvrent Rennes et l&apos;ensemble de
                la métropole avec des tournées structurées, une traçabilité rigoureuse et des rapports détaillés pour chaque
                campagne.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/rennes.webp"
                alt="Vue de Rennes pour illustrer la distribution de flyers"
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

      {/* 2. Distribution de flyers et prospectus à Rennes */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyers et prospectus à Rennes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus auprès du public rennais"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                À Rennes, la distribution de flyers et la distribution de prospectus restent des supports de communication
                incontournables pour faire connaître vos événements, commerces et services. Centre historique, quartier Sainte-Anne,
                Villejean, Beauregard, Cleunay, Sud-Gare, zones commerciales ou campus universitaires : chaque campagne est pensée
                pour cibler précisément vos cibles dans leur zone de chalandise.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les distributions peuvent être réalisées en boîtes aux lettres ou en main à main, en complément d&apos;un dispositif
                digital ou d&apos;une campagne publicitaire plus globale. Pour renforcer la visibilité terrain, la diffusion de vos
                imprimés peut être associée à des opérations de{' '}
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

      {/* 3. Distribution de journaux municipaux à Rennes */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de journaux municipaux à Rennes
          </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
            <Image
              src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
              alt="Distribution de journaux municipaux à Rennes"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
            />
          </div>
          <div className="order-2 lg:order-1">
            <p className="text-body text-gray-dark mb-6">
              La distribution de journaux municipaux et de bulletins d&apos;information locale permet de maintenir un lien régulier
              entre la Ville de Rennes, la métropole et les habitants. Nous assurons la diffusion des publications institutionnelles
              dans les immeubles et maisons individuelles, en couvrant les quartiers définis par la collectivité et les communes
              de l’agglomération.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Pour suivre l’actualité locale, les Rennais peuvent consulter le{' '}
              <a
                href={RENNES_OFFICIAL_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
              >
                site de Rennes Métropole
              </a>
              . De notre côté, nous organisons des tournées adaptées aux volumes à distribuer, aux fréquences de parution et aux
              contraintes de terrain, en nous appuyant sur notre service de{' '}
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
            Distribution de magazines, plaquettes et supports de communication à Rennes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Au-delà des flyers, nous distribuons également des plaquettes commerciales, brochures, catalogues, dépliants,
                journaux d&apos;information ou programmes culturels. Ces supports de communication sont diffusés au plus près des
                cibles : boîtes aux lettres, points de vente, commerces de proximité, lieux publics, quartiers d’affaires et
                zones résidentielles.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Grâce à une organisation rigoureuse et à des équipes de distributeurs formés, chaque campagne de distribution est
                contrôlée et mesurable. Visuels, grammage, format du support, stratégie de communication : nous adaptons les plans
                de diffusion pour que vos messages se démarquent et renforcent votre image de marque, en complément du travail de
                votre agence de communication ou de votre imprimeur.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de votre projet
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de supports de communication et magazines à Rennes"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts électoraux à Rennes et dans la métropole */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts électoraux à Rennes et dans la métropole
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts électoraux à Rennes"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                En période de campagne, la distribution de tracts électoraux et de documents officiels est strictement encadrée.
                Adrexo.net met à disposition des équipes dédiées pour distribuer vos tracts, professions de foi et bulletins dans
                le respect des réglementations et des délais imposés.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous intervenons à Rennes et dans les principales communes de la métropole : Cesson-Sévigné, Saint-Jacques-de-la-Lande,
                Chantepie, Bruz, Betton, Pacé, etc. Les plans de distribution sont construits pour couvrir les secteurs ciblés en boîtes
                aux lettres et en diffusion terrain. Notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                vous permet de piloter vos campagnes en toute sérénité.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Organiser une distribution électorale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : la distribution d&apos;imprimés à Rennes */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            La distribution d&apos;imprimés à Rennes et dans l’agglomération
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Dans une capitale régionale comme Rennes, marquée par une forte population étudiante et un tissu économique dynamique,
              la distribution d&apos;imprimés publicitaires reste un levier efficace de communication de proximité. En ciblant finement
              les quartiers résidentiels, les zones d’activités, les secteurs commerçants et les pôles universitaires, la distribution
              de prospectus, catalogues, plaquettes et brochures permet de faire connaître vos offres auprès de vos différentes cibles.
            </p>
            <p className="text-body text-gray-dark mb-6">
              La diffusion de supports de communication (flyers, dépliants, mailing, cartes de visite, plaquettes commerciales,
              catalogues, journaux, programmes culturels, etc.) s’intègre à votre stratégie de communication globale : ouverture de
              point de vente, campagne publicitaire, promotion saisonnière ou événementiel. L’imprimé publicitaire reste un média
              tangible, visible et mémorisable, complémentaire aux canaux digitaux.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une connaissance précise du territoire rennais et aux retours de nos distributeurs sur le terrain, nous ajustons
              les plans de distribution pour optimiser les volumes diffusés, la couverture de chaque secteur et la qualité de dépôt.
              Boîtes aux lettres, voie publique, affichage mobile, lieux publics : la distribution d&apos;imprimés à Rennes s’inscrit
              naturellement dans le quotidien des habitants.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En travaillant avec Adrexo.net, vous bénéficiez d&apos;un partenaire spécialisé dans la distribution de documents, tracts
              et journaux sur Rennes et sa métropole. Notre objectif : diffuser vos flyers, prospectus et brochures au bon endroit, au
              bon moment et auprès des bonnes cibles, pour renforcer durablement votre visibilité locale.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Rennes
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

