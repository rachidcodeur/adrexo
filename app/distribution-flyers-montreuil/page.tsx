import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Montreuil | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts à Montreuil (93) et à l’est de Paris. Couverture des quartiers et communes voisines, traçabilité et devis gratuit pour vos campagnes d’imprimés publicitaires.",
}

const MONTREUIL_OFFICIAL_SITE_URL = 'https://www.montreuil.fr'

export default function DistributionFlyersMontreuilPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + texte d’intro */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Montreuil
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/montreuil.webp"
                  alt="Vue de Montreuil illustrant une campagne de distribution de flyers"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Montreuil, en Seine-Saint-Denis (93), Adrexo.net accompagne les enseignes, commerces de proximité,
                collectivités et associations dans leurs campagnes de communication de proximité. Flyers, dépliants,
                prospectus, journaux municipaux, catalogues ou tracts : nous diffusons vos supports imprimés au cœur des
                quartiers montreuillois, des hauteurs de la ville jusqu’aux abords du périphérique et des grands axes vers
                Paris.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/montreuil.webp"
                alt="Panorama de Montreuil pour illustrer la diffusion d’imprimés publicitaires"
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
                alt="Distribution de flyers et prospectus dans les quartiers de Montreuil"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                La distribution de flyers, prospectus, dépliants et cartes de visite reste l’un des leviers les plus
                efficaces pour faire connaître vos offres à Montreuil : centre-ville commerçant, quartiers résidentiels,
                secteurs en renouvellement urbain et grands axes reliant le 93 à Paris. Vos supports de communication sont
                distribués en boîtes aux lettres ou en main à main, selon vos objectifs et le profil de vos cibles.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous construisons avec vous des plans de diffusion adaptés à votre zone de chalandise : habitat collectif,
                zones pavillonnaires, zones d’activités ou secteurs proches des transports. La distribution de supports
                imprimés peut être complétée par des actions de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  street marketing
                </Link>{' '}
                pour renforcer votre visibilité sur la voie publique et lors de temps forts commerciaux.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Construire votre plan de diffusion
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Distribution d’information municipale et journaux de quartier */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution d&apos;information municipale et journaux de quartier
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans les résidences de Montreuil"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Bulletins municipaux, magazines d’information locale, journaux de quartier ou guides pratiques : ces
                supports jouent un rôle clé pour informer les habitants de Montreuil (93). Nous assurons leur distribution
                dans les immeubles, résidences et maisons individuelles, en respectant les secteurs définis par la ville ou
                par l’éditeur.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l’actualité municipale, les Montreuillois peuvent consulter le{' '}
                <a
                  href={MONTREUIL_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site officiel de la Ville de Montreuil
                </a>
                . De notre côté, nous organisons la logistique des dépôts, le découpage des tournées et le suivi des
                distributions en nous appuyant sur notre expertise en{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux
                </Link>
                , pour une couverture homogène des quartiers du 93.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Planifier une diffusion institutionnelle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Distribution de brochures, catalogues et plaquettes */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de brochures, catalogues et plaquettes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Plaquettes commerciales, catalogues saisonniers, brochures d’offres, programmes culturels ou documents
                promotionnels : ces supports de communication papier vous permettent de présenter en détail vos produits et
                services aux habitants de Montreuil et des communes voisines de Seine-Saint-Denis (93). Ils complètent
                efficacement vos campagnes digitales.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous ciblons avec vous les secteurs les plus pertinents : grands ensembles résidentiels, zones pavillonnaires,
                abords des commerces, équipements culturels ou sportifs. La distribution de brochures et catalogues est pensée
                pour valoriser votre identité visuelle et renforcer votre visibilité sur le terrain, dans un contexte urbain
                très fréquenté à l’est de Paris.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de vos supports imprimés
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de brochures et catalogues dans les boîtes aux lettres de Montreuil"
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
                alt="Distribution de tracts et documents imprimés dans les rues de Montreuil"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Tracts promotionnels, documents associatifs, communications institutionnelles ou tracts électoraux : ces
                supports exigent une organisation terrain rigoureuse à Montreuil (93). Nous planifions les tournées en
                boîtes aux lettres, les actions de diffusion en main à main et la couverture des secteurs prioritaires en
                fonction de vos objectifs.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nos opérations s’appuient sur notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                pour garantir une diffusion conforme au cadre réglementaire et adaptée aux spécificités de la Seine-Saint-Denis.
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

      {/* 6. Focus ville : distribution d’imprimés à Montreuil (93) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution d&apos;imprimés à Montreuil (93) et à l&apos;est de Paris
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Ville dense et contrastée de Seine-Saint-Denis (93), Montreuil concentre habitat collectif, zones
              pavillonnaires, pôles culturels et activités économiques. La distribution d’imprimés publicitaires y constitue
              un levier stratégique pour toucher directement les foyers, actifs et consommateurs, dans leur environnement
              quotidien à l’est de Paris.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Flyers, dépliants, mailings, plaquettes commerciales, journaux, catalogues, brochures ou cartes de visite :
              ces supports de communication tangibles complètent vos campagnes digitales en créant un contact visuel et
              physique avec vos cibles. Ils vous aident à faire connaître vos offres, à renforcer votre identité visuelle
              et à développer votre notoriété locale dans le 93.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une bonne connaissance des quartiers montreuillois et des communes voisines de la petite couronne,
              nous construisons des plans de diffusion adaptés à votre zone de chalandise : boîtes aux lettres, rues
              commerçantes, abords des transports, grands ensembles résidentiels. Chaque campagne de distribution
              d’imprimés fait l’objet d’un suivi et de contrôles pour vous offrir un pilotage fiable de vos actions.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En choisissant Adrexo.net pour vos opérations d&apos;imprimés à Montreuil (93), vous travaillez avec un
              partenaire spécialisé dans la distribution de supports de communication de proximité, capable d&apos;adapter ses
              dispositifs à vos enjeux commerciaux, institutionnels ou événementiels à l’échelle de la métropole parisienne.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Montreuil
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

