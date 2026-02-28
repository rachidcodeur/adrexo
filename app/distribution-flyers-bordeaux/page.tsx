import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Bordeaux | Adrexo.net',
  description:
    'Distribution de flyers, prospectus, journaux et tracts à Bordeaux. Couverture des quartiers bordelais, traçabilité et devis gratuit pour vos campagnes d\'imprimés publicitaires.',
}

const MAIRIE_BORDEAUX_URL = 'https://www.bordeaux.fr'

export default function DistributionFlyersBordeauxPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + texte */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Colonne texte */}
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Bordeaux
              </h1>

              {/* Image juste après le titre en mobile */}
              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/bordeaux.avif"
                  alt="Campagne de distribution de flyers dans les rues bordelaises"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                Adrexo.net accompagne les acteurs économiques et institutionnels bordelais dans la distribution
                d&apos;imprimés : flyers, prospectus, journaux municipaux, tracts et magazines. Nos équipes couvrent
                l&apos;ensemble de la métropole bordelaise avec des tournées structurées, une traçabilité rigoureuse et
                des rapports détaillés pour chaque campagne.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            {/* Colonne image uniquement pour desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/bordeaux.avif"
                alt="Vue de Bordeaux utilisée pour illustrer la distribution de flyers"
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

      {/* 2. Distribution de flyers et prospectus à Bordeaux */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyers et prospectus à Bordeaux
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus auprès du public bordelais"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                À Bordeaux, la distribution de flyers et la distribution de prospectus permettent de toucher les
                habitants là où ils vivent, se déplacent et consomment réellement. Nous mettons en place des tournées
                adaptées aux quartiers que vous ciblez : centre historique, Quinconces, Mériadeck, Chartrons, rive
                droite, zones commerciales ou zones d&apos;activité. Chaque opération est pensée pour optimiser la
                diffusion de vos imprimés publicitaires.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les distributions peuvent être réalisées en boîtes aux lettres ou en main à main, selon la nature de
                votre campagne. Les volumes sont planifiés quartier par quartier, avec un suivi précis des secteurs
                couverts. Pour aller plus loin dans l&apos;animation terrain, la distribution de flyers peut être
                complétée par des opérations de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  street marketing
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

      {/* 3. Distribution de journaux municipaux */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de journaux municipaux
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans la métropole bordelaise"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                La distribution de journaux municipaux et de bulletins d&apos;information locale est essentielle pour
                maintenir le lien entre la collectivité bordelaise et ses habitants. Nous assurons la diffusion des
                publications institutionnelles dans les immeubles et maisons individuelles, en veillant à couvrir les
                secteurs définis par la mairie ou la communauté de communes. Les fréquences de parution et les délais
                sont respectés afin que chaque numéro arrive à temps dans les boîtes aux lettres.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour connaître les informations officielles de la ville, les Bordelais peuvent consulter le site de la{' '}
                <a
                  href={MAIRIE_BORDEAUX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  Mairie de Bordeaux
                </a>
                . De notre côté, nous mettons en œuvre des tournées adaptées au terrain et aux volumes à distribuer,
                dans la continuité de notre offre de{' '}
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

      {/* 4. Distribution de magazines municipaux à Bordeaux */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de magazines municipaux à Bordeaux
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de magazines municipaux aux habitants de Bordeaux"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Les magazines municipaux bordelais présentent l&apos;actualité des quartiers, les projets urbains,
                l&apos;agenda culturel et les services de proximité. La distribution de ces imprimés institutionnels
                doit couvrir un tissu urbain varié : hypercentre, quartiers résidentiels, grands ensembles, zones en
                renouvellement. Nous planifions les tournées de manière à respecter les dates de sortie, en coordonnant
                volumes, secteurs et contraintes d&apos;accès aux immeubles.
              </p>
              <p className="text-body text-gray-dark mb-6">
                La distribution d&apos;imprimés pour les magazines municipaux à Bordeaux tient compte des particularités
                locales : rues piétonnes, secteurs classés, boîtes aux lettres collectives, zones périurbaines. Qu&apos;il
                s&apos;agisse d&apos;un support trimestriel ou d&apos;une publication plus fréquente, nous garantissons une
                livraison complète et traçable, en lien avec vos équipes éditoriales.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts électoraux */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts électoraux
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts électoraux dans les quartiers de Bordeaux"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                En période électorale, la distribution de tracts doit respecter un calendrier précis et un cadre
                réglementaire strict. À Bordeaux, les campagnes se déploient à l&apos;échelle des quartiers, des
                circonscriptions ou de la métropole. Nous organisons la distribution d&apos;imprimés électoraux en boîtes
                aux lettres et, lorsque cela est pertinent, en main à main, avec des équipes briefées et un suivi
                permettant de documenter la diffusion.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les tournées sont adaptées aux périmètres définis pour chaque candidat ou liste, avec une attention
                particulière portée aux délais de dépôt. Notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                vous permet de piloter vos campagnes sur Bordeaux et dans les communes voisines en toute sérénité.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville — SEO local */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 text-primary mb-6">
              La distribution d&apos;imprimés à Bordeaux
            </h2>
            <p className="text-body text-gray-dark mb-6">
              Bordeaux combine un centre historique dense, des quais réaménagés, des quartiers en forte évolution et une
              périphérie résidentielle étendue. La distribution de flyers, la distribution de prospectus et plus
              généralement la distribution d&apos;imprimés doit tenir compte de cette diversité : habitats collectifs,
              maisons de ville, nouveaux écoquartiers, axes très fréquentés ou zones plus calmes. Une bonne connaissance
              du terrain est indispensable pour optimiser les tournées et garantir une couverture homogène.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Les institutions et les acteurs économiques bordelais ont besoin de supports bien diffusés pour informer,
              promouvoir et mobiliser. Adrexo.net intervient sur Bordeaux et la métropole pour des campagnes de
              distribution d&apos;imprimés publicitaires et institutionnels, en s&apos;adaptant aux spécificités locales
              et aux objectifs de chaque projet.
            </p>
            <div className="mt-10 text-center">
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

