import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Lyon | Adrexo.net',
  description:
    'Distribution de flyers, prospectus, journaux et tracts à Lyon. Couverture de la métropole lyonnaise, traçabilité et devis gratuit pour vos campagnes d\'imprimés publicitaires.',
}

const MAIRIE_LYON_URL = 'https://www.lyon.fr'

export default function DistributionFlyersLyonPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Lyon
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/lyon.webp"
                  alt="Distribution de flyers à Lyon"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                Adrexo.net accompagne les acteurs économiques et institutionnels lyonnais dans la distribution
                d&apos;imprimés : flyers, prospectus, journaux municipaux, tracts et magazines. Nos équipes couvrent
                Lyon et l&apos;ensemble de la métropole avec des tournées structurées, une traçabilité rigoureuse et
                des rapports détaillés pour chaque campagne.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/lyon.webp"
                alt="Vue de Lyon pour illustrer la distribution de flyers"
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

      {/* 2. Distribution de flyers et prospectus */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyers et prospectus à Lyon
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus à Lyon"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                À Lyon, la distribution de flyers et la distribution de prospectus permettent de toucher les
                habitants là où ils vivent et consomment : Presqu&apos;île, Croix-Rousse, Part-Dieu, Confluence,
                quartiers résidentiels et zones commerciales. Chaque opération est pensée pour optimiser la diffusion
                de vos imprimés publicitaires.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les distributions peuvent être réalisées en boîtes aux lettres ou en main à main, selon la nature de
                votre campagne. Les volumes sont planifiés quartier par quartier, avec un suivi précis des secteurs
                couverts.
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
            Distribution de journaux municipaux à Lyon
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans la métropole lyonnaise"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                La distribution de journaux municipaux et de bulletins d&apos;information locale est essentielle pour
                maintenir le lien entre la Métropole de Lyon et ses habitants. Nous assurons la diffusion des
                publications institutionnelles dans les immeubles et maisons individuelles, en veillant à couvrir les
                secteurs définis. Les fréquences de parution et les délais sont respectés.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour les informations officielles, les Lyonnais peuvent consulter le site de la mairie. Notre offre de{' '}
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
            Distribution de magazines municipaux à Lyon
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de magazines municipaux à Lyon"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Les magazines municipaux lyonnais présentent l&apos;actualité des arrondissements, les projets urbains et
                l&apos;agenda culturel. Pour les actualités officielles, consultez le site de la{' '}
                <a
                  href={MAIRIE_LYON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  Mairie de Lyon
                </a>. La distribution de ces imprimés institutionnels doit couvrir un tissu urbain
                varié : centre-ville, quartiers résidentiels, zones en renouvellement. Nous planifions les tournées en
                respectant les dates de sortie et les périmètres définis.
              </p>
              <p className="text-body text-gray-dark mb-6">
                La distribution d&apos;imprimés pour les magazines municipaux à Lyon tient compte des particularités
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
                alt="Distribution de tracts électoraux à Lyon"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                En période électorale, la distribution de tracts doit respecter un calendrier précis et un cadre
                réglementaire strict. À Lyon, les campagnes se déploient à l&apos;échelle des arrondissements, des
                circonscriptions ou de la métropole. Nous organisons la distribution d&apos;imprimés électoraux en
                boîtes aux lettres et en main à main, avec des équipes briefées et un suivi documenté.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                vous permet de piloter vos campagnes sur Lyon et dans les communes de la métropole en toute sérénité.
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
            <h2 className="text-h2 text-primary mb-3">
              La distribution d&apos;imprimés à Lyon
            </h2>
            <p className="text-body text-gray-dark mb-10 font-medium text-lg">
              Distribution en boîtes aux lettres et en main à main sur Lyon et la métropole
            </p>

            <h3 className="text-h3 text-black mb-4 mt-8 first:mt-0">
              Un levier efficace au cœur de la métropole lyonnaise
            </h3>
            <p className="text-body text-gray-dark mb-6">
              Dans une agglomération aussi dynamique que Lyon, la distribution de flyers et de prospectus reste
              l&apos;un des moyens les plus directs pour toucher un public local. Entre la Presqu&apos;île, la Croix-Rousse,
              la Part-Dieu, Confluence et les communes de la métropole — Villeurbanne, Vénissieux, Vaulx-en-Velin,
              Caluire-et-Cuire, Bron, Saint-Priest — la diffusion d&apos;imprimés publicitaires permet de cibler les
              foyers et les consommateurs au plus près de leur quotidien.
            </p>

            <h3 className="text-h3 text-black mb-4 mt-8">
              Ciblage géographique et couverture
            </h3>
            <p className="text-body text-gray-dark mb-6">
              La distribution d&apos;imprimés à Lyon et en métropole permet un ciblage précis, par arrondissement, par
              quartier ou par secteur stratégique. Le flyer reste un support tangible et mémorisable, adapté aux
              lancements commerciaux, promotions ou campagnes de notoriété locale. L&apos;imprimé publicitaire crée un
              contact direct et s&apos;inscrit dans le quotidien des prospects.
            </p>

            <h3 className="text-h3 text-black mb-4 mt-8">
              Organisation rigoureuse et traçabilité
            </h3>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une organisation rigoureuse et des équipes terrain expérimentées, Adrexo.net optimise chaque
              campagne pour garantir une diffusion homogène, contrôlée et mesurable sur Lyon et la métropole.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Faire distribuer vos dépliants, brochures et tracts en boîtes aux lettres ou en main à main, c&apos;est cibler vos prospects et renforcer votre présence sur la voie publique. Nos distributeurs assurent la distribution de documents et la distribution des journaux sur la zone de chalandise que vous définissez. Campagnes publicitaires, mailing, affiches et supports de communication : nous mettons en œuvre une stratégie de communication adaptée pour faire connaître votre marque et attirer l&apos;attention des cibles autour de vos points de vente.
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
