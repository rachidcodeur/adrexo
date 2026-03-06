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
                  src="/images/villes/bordeaux.webp"
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
                Pour les informations officielles de la ville, les Bordelais peuvent consulter le site de la mairie. De notre côté, nous mettons en œuvre des tournées adaptées au terrain et aux volumes à distribuer,
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
                locales : rues piétonnes, secteurs classés, boîtes aux lettres collectives, zones périurbaines. Pour les
                actualités officielles, consultez le site de la{' '}
                <a
                  href={MAIRIE_BORDEAUX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  Mairie de Bordeaux
                </a>. Qu&apos;il s&apos;agisse d&apos;un support trimestriel ou d&apos;une publication plus fréquente, nous garantissons une
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
            <h2 className="text-h2 text-primary mb-3">
              La distribution d&apos;imprimés à Bordeaux
            </h2>
            <p className="text-body text-gray-dark mb-10 font-medium text-lg">
              Distribution en boîtes aux lettres et en main à main sur Bordeaux et la métropole
            </p>

            <h3 className="text-h3 text-black mb-4 mt-8 first:mt-0">
              Un levier efficace au cœur de la métropole bordelaise
            </h3>
            <p className="text-body text-gray-dark mb-6">
              Dans une agglomération aussi attractive et dynamique que Bordeaux, la distribution de flyers et de
              prospectus reste l&apos;un des moyens les plus directs pour toucher un public local et générer un impact
              immédiat. Entre le centre-ville patrimonial, les quais rénovés, les quartiers en renouvellement et les
              communes de la métropole — Mérignac, Talence, Pessac, Bègles, Villenave-d&apos;Ornon, Cenon, Floirac,
              Lormont, Bruges ou Le Bouscat — la diffusion d&apos;imprimés publicitaires permet de cibler les foyers et
              les consommateurs au plus près de leur quotidien. La distribution en boîtes aux lettres ou en main à main
              s&apos;intègre parfaitement aux habitudes des Bordelais et des habitants de la métropole.
            </p>

            <h3 className="text-h3 text-black mb-4 mt-8">
              Ciblage géographique et couverture en Gironde
            </h3>
            <p className="text-body text-gray-dark mb-6">
              La distribution d&apos;imprimés à Bordeaux et en métropole permet un ciblage précis, par quartier, par
              commune ou par secteur stratégique, en tenant compte des typologies d&apos;habitat et des pôles
              d&apos;activité. Du centre historique aux Chartrons, de la Bastide à Bacalan, des écoquartiers aux zones
              commerciales, le flyer reste un support tangible et mémorisable, adapté aux lancements commerciaux,
              ouvertures de points de vente, promotions ou campagnes de notoriété locale. Contrairement aux canaux digitaux
              saturés, l&apos;imprimé publicitaire crée un contact direct et s&apos;inscrit dans le quotidien des
              prospects.
            </p>

            <h3 className="text-h3 text-black mb-4 mt-8">
              Organisation rigoureuse et traçabilité
            </h3>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une organisation rigoureuse, des équipes terrain expérimentées et une connaissance du tissu
              urbain bordelais et girondin, Adrexo.net optimise chaque campagne pour garantir une diffusion homogène,
              contrôlée et mesurable. Qu&apos;il s&apos;agisse du centre-ville, des quartiers résidentiels, des zones
              d&apos;activité ou des communes de la couronne — Saint-Médard-en-Jalles, Eysines, Blanquefort, Gradignan,
              Martignas-sur-Jalle — la distribution de flyers et prospectus s&apos;impose comme un outil stratégique pour
              développer la visibilité locale, générer du trafic et renforcer l&apos;impact de votre communication.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Faire distribuer vos tracts, dépliants et brochures en boîtes aux lettres, c&apos;est cibler vos cibles et faire connaître votre offre. Nos campagnes publicitaires s&apos;appuient sur des supports de communication — plaquette commerciale, catalogue, carte de visite — pour une communication visuelle et une communication de proximité adaptées à votre identité visuelle. Distribution de documents, distribution des journaux et distribuer des prospectus : nous couvrons votre zone de chalandise et les lieux publics pour attirer l&apos;attention des prospects et renforcer votre point de vente.
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

