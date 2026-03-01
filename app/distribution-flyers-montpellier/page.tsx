import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Montpellier | Adrexo.net',
  description:
    'Distribution de flyers, prospectus, journaux et tracts à Montpellier. Couverture de la métropole, traçabilité et devis gratuit pour vos campagnes d\'imprimés publicitaires.',
}

const MAIRIE_MONTPELLIER_URL = 'https://www.montpellier.fr'

export default function DistributionFlyersMontpellierPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Montpellier
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/montpellier.webp"
                  alt="Distribution de flyers à Montpellier"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                Adrexo.net accompagne les acteurs économiques et institutionnels montpelliérains dans la distribution
                d&apos;imprimés : flyers, prospectus, journaux municipaux, tracts et magazines. Nos équipes couvrent
                Montpellier et la métropole avec des tournées structurées, une traçabilité rigoureuse et des rapports
                détaillés pour chaque campagne.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/montpellier.webp"
                alt="Vue de Montpellier pour illustrer la distribution de flyers"
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

      {/* 2. Distribution de flyers et prospectus — lien street marketing */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyers et prospectus à Montpellier
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus à Montpellier"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                À Montpellier, la distribution de flyers et la distribution de prospectus permettent de toucher les
                habitants là où ils vivent et consomment : centre-ville, Écusson, quartiers résidentiels, zones
                commerciales et communes de la métropole. Chaque opération est pensée pour optimiser la diffusion de
                vos imprimés publicitaires.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les distributions peuvent être réalisées en boîtes aux lettres ou en main à main. Pour renforcer
                l&apos;animation terrain, la distribution de flyers peut être complétée par des opérations de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  street marketing
                </Link>.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Distribution de journaux municipaux — lien journaux */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de journaux municipaux à Montpellier
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans la métropole montpelliéraine"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                La distribution de journaux municipaux et de bulletins d&apos;information locale est essentielle pour
                maintenir le lien entre Montpellier Métropole et ses habitants. Nous assurons la diffusion des
                publications institutionnelles dans les immeubles et maisons individuelles, en veillant à couvrir les
                secteurs définis. Les fréquences de parution et les délais sont respectés.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour les informations officielles de la ville, les Montpelliérains peuvent consulter le site de la mairie. Notre offre de{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux
                </Link>{' '}
                s&apos;étend à tout le territoire.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Distribution de magazines municipaux — lien mairie ici */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de magazines municipaux à Montpellier
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de magazines municipaux à Montpellier"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Les magazines municipaux montpelliérains présentent l&apos;actualité des quartiers, les projets urbains et
                l&apos;agenda culturel. Pour les actualités officielles, consultez le site de la{' '}
                <a
                  href={MAIRIE_MONTPELLIER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  Mairie de Montpellier
                </a>. La distribution de ces imprimés institutionnels doit couvrir un tissu urbain varié :
                hypercentre, quartiers résidentiels, zones en renouvellement. Nous planifions les tournées en
                respectant les dates de sortie et les périmètres définis.
              </p>
              <p className="text-body text-gray-dark mb-6">
                La distribution d&apos;imprimés pour les magazines municipaux à Montpellier tient compte des particularités
                locales. Nous garantissons une livraison complète et traçable.
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
                alt="Distribution de tracts électoraux à Montpellier"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                En période électorale, la distribution de tracts doit respecter un calendrier précis et un cadre
                réglementaire strict. À Montpellier, les campagnes se déploient à l&apos;échelle des quartiers, des
                circonscriptions ou de la métropole. Nous organisons la distribution d&apos;imprimés électoraux en
                boîtes aux lettres et en main à main, avec des équipes briefées et un suivi documenté.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les tournées sont adaptées aux périmètres définis pour chaque candidat ou liste. Nous intervenons sur
                Montpellier et les communes de la métropole avec rigueur et traçabilité.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 text-primary mb-3">
              La distribution d&apos;imprimés à Montpellier
            </h2>
            <p className="text-body text-gray-dark mb-10 font-medium text-lg">
              Distribution en boîtes aux lettres et en main à main sur Montpellier et la métropole
            </p>

            <h3 className="text-h3 text-black mb-4 mt-8 first:mt-0">
              Un levier efficace au cœur de la métropole montpelliéraine
            </h3>
            <p className="text-body text-gray-dark mb-6">
              Dans une agglomération aussi dynamique que Montpellier, la distribution de flyers et de prospectus reste
              l&apos;un des moyens les plus directs pour toucher un public local. Entre l&apos;Écusson, les quartiers
              en développement, les zones d&apos;activité et les communes de la métropole — Castelnau-le-Lez, Lattes,
              Pérols, Juvignac, Grabels, Saint-Jean-de-Védas — la diffusion d&apos;imprimés publicitaires permet de
              cibler les foyers et les consommateurs au plus près de leur quotidien.
            </p>

            <h3 className="text-h3 text-black mb-4 mt-8">
              Ciblage géographique et couverture
            </h3>
            <p className="text-body text-gray-dark mb-6">
              La distribution d&apos;imprimés à Montpellier et en métropole permet un ciblage précis, par quartier, par
              commune ou par secteur stratégique. Le flyer reste un support tangible et mémorisable, adapté aux
              lancements commerciaux, promotions ou campagnes de notoriété locale. L&apos;imprimé publicitaire crée un
              contact direct et s&apos;inscrit dans le quotidien des prospects.
            </p>

            <h3 className="text-h3 text-black mb-4 mt-8">
              Organisation rigoureuse et traçabilité
            </h3>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une organisation rigoureuse et des équipes terrain expérimentées, Adrexo.net optimise chaque
              campagne pour garantir une diffusion homogène, contrôlée et mesurable sur Montpellier et l&apos;Hérault.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Faire distribuer vos tracts, dépliants et brochures en boîtes aux lettres et sur la voie publique, c&apos;est cibler vos cibles et faire connaître votre activité. Annonceurs, agence de communication et imprimeur : nos campagnes publicitaires s&apos;appuient sur des supports de communication personnalisés pour une stratégie de communication de proximité. Distribuer des flyers, distribution des journaux, zone de chalandise : nous assurons la distribution de documents pour attirer l&apos;attention des prospects et renforcer votre point de vente et votre identité visuelle.
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
