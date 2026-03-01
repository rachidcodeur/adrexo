import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Pau | Adrexo.net',
  description:
    'Distribution de flyers, prospectus, journaux et tracts à Pau. Couverture de l\'agglomération paloise, traçabilité et devis gratuit pour vos campagnes d\'imprimés publicitaires.',
}

const MAIRIE_PAU_URL = 'https://www.pau.fr'

export default function DistributionFlyersPauPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Pau
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/pau.webp"
                  alt="Distribution de flyers à Pau"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                Adrexo.net accompagne les acteurs économiques et institutionnels palois dans la distribution
                d&apos;imprimés : flyers, prospectus, journaux municipaux, tracts et magazines. Nos équipes couvrent
                Pau et l&apos;agglomération avec des tournées structurées, une traçabilité rigoureuse et des rapports
                détaillés pour chaque campagne.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/pau.webp"
                alt="Vue de Pau pour illustrer la distribution de flyers"
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
            Distribution de flyers et prospectus à Pau
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus à Pau"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                À Pau, la distribution de flyers et la distribution de prospectus permettent de toucher les
                habitants là où ils vivent et consomment : centre-ville, quartiers résidentiels, zones commerciales et
                communes de l&apos;agglomération. Chaque opération est pensée pour optimiser la diffusion de vos
                imprimés publicitaires.
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

      {/* 3. Distribution de journaux municipaux — lien mairie ici */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de journaux municipaux à Pau
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans l'agglomération paloise"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                La distribution de journaux municipaux et de bulletins d&apos;information locale est essentielle pour
                maintenir le lien entre la Ville de Pau et ses habitants. Pour les informations officielles, consultez
                le site de la{' '}
                <a
                  href={MAIRIE_PAU_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  Mairie de Pau
                </a>. Nous assurons la diffusion des publications institutionnelles dans les immeubles et maisons
                individuelles, en veillant à couvrir les secteurs définis. Les fréquences de parution et les délais
                sont respectés.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Notre offre de{' '}
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

      {/* 4. Distribution de magazines municipaux */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de magazines municipaux à Pau
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de magazines municipaux à Pau"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Les magazines municipaux palois présentent l&apos;actualité des quartiers, les projets urbains et
                l&apos;agenda culturel. La distribution de ces imprimés institutionnels doit couvrir un tissu urbain
                varié : hypercentre, quartiers résidentiels, zones en développement. Nous planifions les tournées en
                respectant les dates de sortie et les périmètres définis.
              </p>
              <p className="text-body text-gray-dark mb-6">
                La distribution d&apos;imprimés pour les magazines municipaux à Pau tient compte des particularités
                locales. Nous garantissons une livraison complète et traçable.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts électoraux — lien tracts */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts électoraux
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts électoraux à Pau"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                En période électorale, la distribution de tracts doit respecter un calendrier précis et un cadre
                réglementaire strict. À Pau, les campagnes se déploient à l&apos;échelle des quartiers, des
                circonscriptions ou de l&apos;agglomération. Nous organisons la distribution d&apos;imprimés électoraux
                en boîtes aux lettres et en main à main, avec des équipes briefées et un suivi documenté.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                vous permet de piloter vos campagnes sur Pau et les communes voisines en toute sérénité.
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
              La distribution d&apos;imprimés à Pau
            </h2>
            <p className="text-body text-gray-dark mb-10 font-medium text-lg">
              Distribution en boîtes aux lettres et en main à main sur Pau et l&apos;agglomération
            </p>

            <h3 className="text-h3 text-black mb-4 mt-8 first:mt-0">
              Un levier efficace au cœur du Béarn
            </h3>
            <p className="text-body text-gray-dark mb-6">
              Dans une ville aussi attractive que Pau, la distribution de flyers et de prospectus reste l&apos;un des
              moyens les plus directs pour toucher un public local. Entre le centre-ville, les quartiers résidentiels
              et les communes de l&apos;agglomération — Jurançon, Billère, Lons, Lescar, Lée — la diffusion
              d&apos;imprimés publicitaires permet de cibler les foyers et les consommateurs au plus près de leur
              quotidien.
            </p>

            <h3 className="text-h3 text-black mb-4 mt-8">
              Ciblage géographique et couverture
            </h3>
            <p className="text-body text-gray-dark mb-6">
              La distribution d&apos;imprimés à Pau et en agglomération permet un ciblage précis, par quartier, par
              commune ou par secteur stratégique. Le flyer reste un support tangible et mémorisable, adapté aux
              lancements commerciaux, promotions ou campagnes de notoriété locale. L&apos;imprimé publicitaire crée un
              contact direct et s&apos;inscrit dans le quotidien des prospects.
            </p>

            <h3 className="text-h3 text-black mb-4 mt-8">
              Organisation rigoureuse et traçabilité
            </h3>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une organisation rigoureuse et des équipes terrain expérimentées, Adrexo.net optimise chaque
              campagne pour garantir une diffusion homogène, contrôlée et mesurable sur Pau et les Pyrénées-Atlantiques.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Distribuer des flyers, distribuer des brochures ou distribuer des prospectus en boîtes aux lettres permet de faire connaître votre activité auprès de vos cibles. En tant que distributeur de prospectus et distributeur de journaux, nous assurons la distribution de documents et les distributions de tracts sur votre zone de chalandise. Dépliants, plaquette, catalogues : vos supports de communication personnalisés sont distribués pour une communication de proximité qui renforce votre image et démarque votre point de vente.
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
