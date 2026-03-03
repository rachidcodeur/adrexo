import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Lille | Adrexo.net',
  description:
    'Distribution de flyers, prospectus, journaux et tracts à Lille et dans la métropole lilloise. Couverture des quartiers et communes, traçabilité et devis gratuit pour vos campagnes d\'imprimés publicitaires.',
}

const MAIRIE_LILLE_URL = 'https://www.lille.fr'

export default function DistributionFlyersLillePage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + texte */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Lille
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/lille.webp"
                  alt="Distribution de flyers à Lille"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                Adrexo.net accompagne les acteurs économiques et institutionnels lillois dans la distribution
                d&apos;imprimés : flyers, prospectus, journaux municipaux, tracts et magazines. Nos équipes couvrent
                l&apos;ensemble de Lille et de la métropole européenne (MEL) avec des tournées structurées, une
                traçabilité rigoureuse et des rapports détaillés pour chaque campagne.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/lille.webp"
                alt="Vue de Lille pour illustrer la distribution de flyers"
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

      {/* 2. Distribution de flyers et prospectus à Lille */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyers et prospectus à Lille
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus auprès du public lillois"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                À Lille, la distribution de flyers et la distribution de prospectus restent des supports de communication
                incontournables pour faire connaître vos événements, enseignes et opérations commerciales. Centre-ville,
                Vieux-Lille, Euralille, Wazemmes, quartiers étudiants et zones commerciales : chaque campagne est pensée
                pour cibler précisément vos cibles dans leur zone de chalandise.
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
            Distribution de journaux municipaux à Lille
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans la métropole lilloise"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                La distribution de journaux municipaux et de bulletins d&apos;information locale permet de maintenir un
                lien régulier entre la Ville de Lille et ses habitants. Nous assurons la diffusion des publications
                institutionnelles dans les immeubles et maisons individuelles, en couvrant les quartiers définis par la
                collectivité et les communes de la métropole.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour les informations officielles et la vie municipale, les Lillois peuvent consulter le site de la{' '}
                <a
                  href={MAIRIE_LILLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  mairie de Lille
                </a>
                . De notre côté, nous organisons des tournées adaptées aux volumes à distribuer, aux fréquences de parution
                et aux contraintes de terrain.
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
            Distribution de magazines, plaquettes et supports de communication à Lille
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Au-delà des flyers, nous distribuons également des plaquettes commerciales, brochures, catalogues,
                dépliants, journaux d&apos;information ou programmes culturels. Ces supports de communication sont
                diffusés au plus près des cibles : boîtes aux lettres, points de vente, commerces de proximité, lieux
                publics et événements locaux.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Grâce à une organisation rigoureuse et à des équipes de distributeurs formés, chaque campagne de
                distribution est contrôlée et mesurable. Visuels, grammage, format du support, stratégie de communication
                : nous adaptons les plans de distribution pour que vos messages se démarquent et renforcent votre image
                de marque, en complément du travail de votre agence de communication ou de votre imprimeur.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de votre projet
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/distri%20journaux%20adrexo.webp"
                alt="Distribution de supports de communication et magazines à Lille"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts électoraux à Lille et dans la métropole */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts électoraux à Lille et dans la métropole
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/distri%20tract%20municipal.webp"
                alt="Distribution de tracts électoraux à Lille"
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
                Nous intervenons à Lille et dans les principales communes de la métropole : Roubaix, Tourcoing,
                Villeneuve-d&apos;Ascq, Mons-en-Barœul, Lambersart, Loos, Saint-André-lez-Lille, etc. Selon vos besoins,
                la distribution des tracts électoraux peut être intégrée à un dispositif plus large de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux
                </Link>{' '}
                et d&apos;imprimés en boîtes aux lettres.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Organiser une distribution électorale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : la distribution d&apos;imprimés à Lille et dans la MEL */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            La distribution d&apos;imprimés à Lille et dans la métropole européenne
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Dans une métropole aussi dense et dynamique que Lille, la distribution d&apos;imprimés publicitaires reste
              un média de communication de proximité particulièrement efficace. En ciblant finement les quartiers,
              typologies d&apos;habitat et zones de chalandise, la distribution de prospectus, brochures, catalogues et
              plaquettes permet de toucher directement les foyers et les consommateurs au plus près des points de vente
              et des lieux de consommation.
            </p>
            <p className="text-body text-gray-dark mb-6">
              La diffusion de vos supports de communication (flyers, dépliants, mailing, cartes de visite, plaquettes
              commerciales, catalogues, journaux, etc.) est organisée en tenant compte des objectifs de votre stratégie
              de communication : lancement commercial, ouverture de magasin, promotion ponctuelle, campagnes
              publicitaires, opérations de visibilité locale ou renforcement de l&apos;identité visuelle de votre marque.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une connaissance fine du tissu urbain lillois et aux retours de nos distributeurs sur le terrain,
              nous ajustons en permanence les plans de distribution pour optimiser les volumes distribués, la couverture
              de chaque secteur et la qualité de diffusion. Boîtes aux lettres, voie publique, affichage mobile, lieux
              publics : la distribution d&apos;imprimés à Lille s&apos;intègre naturellement aux habitudes urbaines et
              complète efficacement vos actions de communication digitale.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En travaillant avec Adrexo.net, vous bénéficiez d&apos;un partenaire spécialisé dans la distribution de
              documents, tracts et journaux, capable de déployer des campagnes sur mesure à Lille et dans toute la
              métropole. Notre objectif : vous aider à distribuer vos flyers, prospectus et brochures au bon endroit, au
              bon moment et auprès des bonnes cibles.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Lille
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

