import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Clermont-Ferrand | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts à Clermont-Ferrand (63) et dans la métropole clermontoise. Couverture des quartiers et communes voisines, traçabilité et devis gratuit pour vos campagnes d’imprimés publicitaires.",
}

const CLERMONT_FERRAND_OFFICIAL_SITE_URL = 'https://www.clermont-ferrand.fr'

export default function DistributionFlyersClermontFerrandPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + texte d’intro */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Clermont-Ferrand
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/clermont-ferrand.webp"
                  alt="Vue de Clermont-Ferrand illustrant une campagne de distribution de flyers"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Clermont-Ferrand, dans le département du Puy-de-Dôme (63) au cœur de l’Auvergne, Adrexo.net accompagne
                enseignes nationales, commerces de proximité, institutions et organisateurs d’événements dans leurs campagnes
                de communication de proximité. Flyers, dépliants, prospectus, journaux municipaux, catalogues ou tracts :
                nous diffusons vos supports imprimés dans les différents quartiers de la métropole clermontoise.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/clermont-ferrand.webp"
                alt="Panorama de Clermont-Ferrand et du Puy-de-Dôme illustrant la diffusion d’imprimés publicitaires"
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

      {/* 2. Distribution de supports imprimés pour vos actions locales */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de supports imprimés pour vos actions locales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers de Clermont-Ferrand"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                La distribution de flyers, prospectus, dépliants et cartes de visite reste un levier essentiel pour faire
                connaître vos offres à Clermont-Ferrand (63) : centre historique, quartiers résidentiels, zones commerciales
                et secteurs d’activités de la métropole auvergnate. Vos supports de communication sont distribués en boîtes
                aux lettres ou en main à main, en fonction de vos objectifs et des profils de cibles visées.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous construisons avec vous des plans de diffusion adaptés à votre zone de chalandise dans le Puy-de-Dôme :
                habitat collectif, zones pavillonnaires, secteurs proches des grands axes, abords des commerces. Pour
                amplifier l’impact de vos campagnes, la distribution de vos imprimés peut être complétée par des actions de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  street marketing
                </Link>{' '}
                menées sur les principaux points de passage de Clermont-Ferrand et de son agglomération.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Construire votre plan de diffusion
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Distribution d’information municipale et journaux locaux */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution d&apos;information municipale et journaux locaux
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans les résidences de Clermont-Ferrand"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Bulletins municipaux, magazines d’information locale, journaux de quartier ou documents institutionnels :
                ces supports jouent un rôle clé pour informer les habitants de Clermont-Ferrand et des communes de la
                métropole. Nous assurons leur distribution dans les immeubles, résidences et maisons individuelles, dans le
                respect des secteurs définis par la collectivité ou l’éditeur.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour découvrir l’actualité de la commune, les Clermontois peuvent consulter le{' '}
                <a
                  href={CLERMONT_FERRAND_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site officiel de la Ville de Clermont-Ferrand
                </a>
                . De notre côté, nous organisons la logistique des dépôts, le découpage des tournées et le suivi des
                distributions en nous appuyant sur notre expertise en{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux
                </Link>
                , afin de garantir une couverture homogène des quartiers de la métropole auvergnate.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Planifier une diffusion institutionnelle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Distribution de brochures, catalogues et plaquettes commerciales */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de brochures, catalogues et plaquettes commerciales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Plaquettes de présentation, catalogues saisonniers, brochures d’offres, programmes culturels ou documents
                promotionnels : ces supports imprimés vous permettent de développer un discours riche et structuré auprès
                des habitants de Clermont-Ferrand (63) et des communes voisines du Puy-de-Dôme. Ils complètent idéalement vos
                actions digitales en apportant un média tangible, visible et mémorisable.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous définissons avec vous les secteurs les plus pertinents pour la distribution : grands ensembles
                résidentiels, zones pavillonnaires, abords des commerces, lieux culturels et sportifs. La distribution de
                brochures et catalogues est pensée pour valoriser votre identité visuelle et renforcer votre présence sur le
                terrain auvergnat.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de vos supports imprimés
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de brochures et catalogues dans les boîtes aux lettres de Clermont-Ferrand"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts et opérations terrain ciblées */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts et opérations terrain ciblées
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts et documents imprimés dans les rues de Clermont-Ferrand"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Tracts promotionnels, communications associatives, documents institutionnels ou tracts électoraux : ces
                supports nécessitent une organisation terrain rigoureuse à Clermont-Ferrand (63). Nous planifions les
                tournées en boîtes aux lettres, les actions de diffusion en main à main et la couverture des secteurs
                prioritaires, dans le respect du cadre réglementaire.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nos opérations s’appuient sur notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                pour garantir une diffusion adaptée aux spécificités du Puy-de-Dôme et de la région Auvergne-Rhône-Alpes.
                Quartiers denses, ensembles résidentiels, axes commerçants ou lieux publics : chaque zone est travaillée
                pour optimiser l’impact de vos messages imprimés.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Préparer votre prochaine opération terrain
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : distribution d’imprimés à Clermont-Ferrand (63) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution d&apos;imprimés à Clermont-Ferrand (63) et dans la métropole auvergnate
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Ville auvergnate emblématique, située au pied de la chaîne des Puys et au cœur du Puy-de-Dôme (63),
              Clermont-Ferrand se compose de quartiers variés mêlant habitat, zones d’activités et équipements culturels.
              La distribution d’imprimés publicitaires y constitue un levier stratégique pour toucher directement les foyers,
              les actifs et les consommateurs, dans un environnement à taille humaine.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Flyers, dépliants, mailings, plaquettes commerciales, journaux, catalogues, brochures ou cartes de visite :
              ces supports de communication tangibles complètent vos campagnes digitales en créant un contact concret avec
              vos cibles. Ils vous aident à vous démarquer, à renforcer votre identité visuelle et à développer votre
              notoriété dans la métropole clermontoise et plus largement en Auvergne.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une bonne connaissance du territoire clermontois et des communes voisines, nous construisons des plans
              de diffusion adaptés à votre zone de chalandise : boîtes aux lettres, rues commerçantes, abords des transports,
              grands ensembles résidentiels. Chaque campagne de distribution d’imprimés fait l’objet d’un suivi et de
              contrôles pour vous offrir un pilotage fiable de vos actions de communication.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En faisant appel à Adrexo.net pour vos opérations d&apos;imprimés à Clermont-Ferrand (63), vous travaillez avec un
              partenaire spécialisé dans la distribution de supports de communication de proximité, capable d&apos;adapter ses
              dispositifs à vos enjeux commerciaux, institutionnels ou événementiels dans le Massif central.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Clermont-Ferrand
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

