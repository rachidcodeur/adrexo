import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Saint-Denis | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts à Saint-Denis (93) et dans le nord de la métropole parisienne. Couverture des quartiers et communes voisines, traçabilité et devis gratuit pour vos campagnes d’imprimés publicitaires.",
}

const SAINT_DENIS_OFFICIAL_SITE_URL = 'https://www.saint-denis.fr'

export default function DistributionFlyersSaintDenisPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + texte d’intro */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Saint-Denis
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/saint-denis.webp"
                  alt="Vue de Saint-Denis illustrant une campagne de distribution de flyers"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Saint-Denis, au cœur de la Seine-Saint-Denis (93) et aux portes de Paris, Adrexo.net accompagne les
                commerces, enseignes nationales, institutions et organisateurs d’événements dans leurs campagnes de
                communication de proximité. Flyers, dépliants, catalogues, journaux municipaux, prospectus ou tracts :
                nous diffusons vos supports imprimés dans les quartiers du centre-ville, autour de la basilique, de la
                gare, de La Plaine Saint-Denis ou encore à proximité du Stade de France.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/saint-denis.webp"
                alt="Panorama de Saint-Denis pour illustrer la diffusion d’imprimés publicitaires"
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

      {/* 2. Supports imprimés pour vos actions locales */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Supports imprimés pour vos actions locales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers de Saint-Denis"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                La distribution de flyers, prospectus, dépliants et catalogues permet d’installer une présence forte sur le
                terrain à Saint-Denis : centre historique, quartiers résidentiels, zones commerçantes, axes de passage
                menant à Paris ou vers les communes limitrophes comme Aubervilliers, La Courneuve ou Pierrefitte-sur-Seine.
                Vos supports de communication sont déposés en boîtes aux lettres ou diffusés en main à main selon vos
                objectifs.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous concevons des plans de diffusion qui tiennent compte de la zone de chalandise, des profils de cibles et
                des particularités du territoire dionysien. Vos visuels, plaquettes commerciales, brochures ou cartes de
                visite viennent renforcer votre stratégie de communication globale et soutiennent vos campagnes
                publicitaires locales dans le 93.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Construire votre plan de diffusion
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Journaux municipaux et information locale à Saint-Denis (93) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Journaux municipaux et information locale à Saint-Denis (93)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans les immeubles et résidences de Saint-Denis"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Bulletins municipaux, magazines d’information locale, guides de quartier ou supports institutionnels : ces
                documents jouent un rôle central dans la communication entre la collectivité et les habitants de
                Saint-Denis. Nous assurons leur distribution dans les immeubles, résidences et maisons individuelles, en
                respectant les secteurs définis par la ville ou par l’éditeur.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l’actualité de la commune, les Dyonisiens peuvent se rendre sur le{' '}
                <a
                  href={SAINT_DENIS_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site d&apos;information de la Ville de Saint-Denis
                </a>
                . De notre côté, nous organisons la logistique des dépôts et tournées en nous appuyant sur notre expertise en{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux
                </Link>
                , pour garantir une diffusion homogène dans le 93.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Planifier une diffusion institutionnelle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brochures, catalogues et communications commerciales */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Brochures, catalogues et communications commerciales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Plaquettes de présentation, catalogues produits, programmes culturels, brochures commerciales ou documents
                promotionnels : ces supports de communication papier vous permettent de développer un discours plus riche
                auprès des habitants de Saint-Denis et des communes limitrophes. Ils sont distribués en boîtes aux lettres
                ou autour des principaux pôles d’activité et lieux de passage.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous définissons avec vous les secteurs prioritaires : quartiers résidentiels, zones pavillonnaires,
                secteurs d’activités, proximité des transports ou des équipements sportifs comme le Stade de France.
                L’objectif : renforcer votre visibilité locale grâce à des supports imprimés cohérents avec votre identité
                visuelle et votre stratégie de communication globale.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de vos supports imprimés
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de brochures et catalogues dans les boîtes aux lettres de Saint-Denis"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tracts, opérations terrain et campagnes ciblées */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Tracts, opérations terrain et campagnes ciblées
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts et documents imprimés dans les rues de Saint-Denis"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Qu’il s’agisse de tracts promotionnels, de communications associatives ou de documents électoraux, les
                opérations terrain à Saint-Denis (93) nécessitent une organisation précise. Nos équipes planifient les
                tournées en boîtes aux lettres et les éventuelles actions en main à main, dans le respect du cadre
                réglementaire et des zones définies.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous nous appuyons sur notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                pour garantir une couverture homogène des quartiers ciblés et une visibilité optimale de vos messages auprès
                des habitants et des usagers de la ville.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Préparer votre prochaine opération terrain
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : la distribution d’imprimés à Saint-Denis (93) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            La distribution d&apos;imprimés à Saint-Denis (93) et dans le nord de Paris
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Ville dynamique de la Seine-Saint-Denis (93), marquée par la présence de la basilique, du Stade de France et
              de grands quartiers en renouvellement, Saint-Denis offre un terrain stratégique pour la distribution
              d’imprimés publicitaires. La communication de proximité y permet de toucher directement les foyers, actifs et
              consommateurs, au plus près de leurs lieux de vie et de travail.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Flyers, dépliants, mailings, plaquettes, journaux, catalogues, brochures ou cartes de visite : vos supports
              papiers complètent efficacement vos campagnes digitales. Ils vous aident à vous démarquer, à renforcer votre
              identité visuelle et à faire connaître vos offres dans un environnement urbain très fréquenté.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une bonne connaissance des quartiers dionysiens et des communes voisines du nord de Paris, nous
              construisons des stratégies de diffusion adaptées à votre zone de chalandise : boîtes aux lettres, rues
              commerçantes, abords des transports, lieux publics. Chaque campagne de distribution d’imprimés est suivie et
              documentée pour vous offrir un pilotage fiable de vos actions de communication.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En faisant appel à Adrexo.net pour vos campagnes d&apos;imprimés à Saint-Denis (93), vous travaillez avec un
              partenaire spécialisé dans la distribution de supports de communication de proximité, capable d&apos;adapter ses
              dispositifs à vos objectifs commerciaux, institutionnels ou événementiels.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Saint-Denis
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

