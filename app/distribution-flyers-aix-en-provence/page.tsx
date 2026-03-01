import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Aix-en-Provence | Adrexo.net',
  description:
    'Distribution de flyers, prospectus, journaux et tracts à Aix-en-Provence. Couverture de la ville et de la métropole, traçabilité et devis gratuit pour vos campagnes d\'imprimés publicitaires.',
}

const MAIRIE_AIX_URL = 'https://www.aix-en-provence.fr'

export default function DistributionFlyersAixEnProvencePage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Aix-en-Provence
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/aix-en-provenence.webp"
                  alt="Distribution de flyers à Aix-en-Provence"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                Adrexo.net accompagne les acteurs économiques et institutionnels aixois dans la distribution
                d&apos;imprimés : flyers, prospectus, journaux municipaux, tracts et magazines. Nos équipes couvrent
                Aix-en-Provence et les communes alentour au sein de la métropole Aix-Marseille-Provence, avec des
                tournées structurées, une traçabilité rigoureuse et des rapports détaillés pour chaque campagne.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/aix-en-provenence.webp"
                alt="Vue d'Aix-en-Provence pour illustrer la distribution de flyers"
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
            Distribution de flyers et prospectus à Aix-en-Provence
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus à Aix-en-Provence"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                À Aix-en-Provence, la distribution de flyers et la distribution de prospectus permettent de toucher les
                habitants et les visiteurs : centre-ville, Cours Mirabeau, quartiers résidentiels, zones commerciales et
                secteurs d&apos;activité. Chaque opération est pensée pour optimiser la diffusion de vos imprimés
                publicitaires.
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

      {/* 3. Distribution de journaux municipaux */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de journaux municipaux à Aix-en-Provence
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux à Aix-en-Provence"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                La distribution de journaux municipaux et de bulletins d&apos;information locale est essentielle pour
                maintenir le lien entre la Ville d&apos;Aix-en-Provence et ses habitants. Nous assurons la diffusion des
                publications institutionnelles dans les immeubles et maisons individuelles, en veillant à couvrir les
                secteurs définis. Les fréquences de parution et les délais sont respectés.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour les informations officielles de la ville, les Aixois peuvent consulter le site de la mairie. Nous
                mettons en œuvre des tournées adaptées au terrain et aux volumes à distribuer.
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
            Distribution de magazines municipaux à Aix-en-Provence
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de magazines municipaux à Aix-en-Provence"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Les magazines municipaux aixois présentent l&apos;actualité de la ville, les projets urbains et
                l&apos;agenda culturel. La distribution de ces imprimés institutionnels doit couvrir un tissu urbain
                varié : hypercentre, quartiers résidentiels, zones en développement. Nous planifions les tournées en
                respectant les dates de sortie et les périmètres définis.
              </p>
              <p className="text-body text-gray-dark mb-6">
                La distribution d&apos;imprimés pour les magazines municipaux à Aix-en-Provence tient compte des
                particularités locales. Nous garantissons une livraison complète et traçable.
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
                alt="Distribution de tracts électoraux à Aix-en-Provence"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                En période électorale, la distribution de tracts doit respecter un calendrier précis et un cadre
                réglementaire strict. À Aix-en-Provence, les campagnes se déploient à l&apos;échelle de la ville ou des
                circonscriptions. Pour les actualités officielles, consultez le site de la{' '}
                <a
                  href={MAIRIE_AIX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  Mairie d&apos;Aix-en-Provence
                </a>. Nous organisons la distribution d&apos;imprimés électoraux en boîtes aux lettres et
                en main à main, avec des équipes briefées et un suivi documenté.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                vous permet de piloter vos campagnes sur Aix-en-Provence et les communes voisines en toute sérénité.
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
              La distribution d&apos;imprimés à Aix-en-Provence
            </h2>
            <p className="text-body text-gray-dark mb-10 font-medium text-lg">
              Distribution en boîtes aux lettres et en main à main sur Aix-en-Provence et ses environs
            </p>

            <h3 className="text-h3 text-black mb-4 mt-8 first:mt-0">
              Un levier efficace au cœur du pays d&apos;Aix
            </h3>
            <p className="text-body text-gray-dark mb-6">
              Dans une ville aussi attractive qu&apos;Aix-en-Provence, la distribution de flyers et de prospectus reste
              l&apos;un des moyens les plus directs pour toucher un public local et de passage. Entre le centre
              historique, le Cours Mirabeau, les quartiers résidentiels et les zones d&apos;activité, la diffusion
              d&apos;imprimés publicitaires permet de cibler les foyers et les consommateurs. La distribution en boîtes
              aux lettres ou en main à main s&apos;intègre parfaitement aux habitudes des Aixois et des habitants des
              communes voisines.
            </p>

            <h3 className="text-h3 text-black mb-4 mt-8">
              Ciblage géographique et couverture
            </h3>
            <p className="text-body text-gray-dark mb-6">
              La distribution d&apos;imprimés à Aix-en-Provence permet un ciblage précis, par quartier, par secteur ou
              par zone définie. Le flyer reste un support tangible et mémorisable, adapté aux lancements commerciaux,
              promotions ou campagnes de notoriété locale. L&apos;imprimé publicitaire crée un contact direct et
              s&apos;inscrit dans le quotidien des prospects.
            </p>

            <h3 className="text-h3 text-black mb-4 mt-8">
              Organisation rigoureuse et traçabilité
            </h3>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une organisation rigoureuse et des équipes terrain expérimentées, Adrexo.net optimise chaque
              campagne pour garantir une diffusion homogène, contrôlée et mesurable sur Aix-en-Provence et les
              Bouches-du-Rhône.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Distribuer des flyers, distribuer des prospectus et distribuer des brochures en boîtes aux lettres permet de faire connaître votre image et d&apos;attirer l&apos;attention de vos cibles. Nos campagnes publicitaires et nos distributions de tracts s&apos;appuient sur des supports de communication — dépliants, plaquette, catalogues — pour une communication de proximité efficace. Distributeur de prospectus, distribution des journaux, zone de chalandise : nous assurons la distribution de documents sur votre zone pour une communication visuelle qui renforce votre point de vente et votre stratégie de communication.
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
