import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Saint-Étienne | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts à Saint-Étienne (42) et dans la métropole stéphanoise. Couverture des quartiers et communes, traçabilité et devis gratuit pour vos campagnes d’imprimés publicitaires.",
}

const SAINT_ETIENNE_OFFICIAL_SITE_URL = 'https://www.saint-etienne.fr'

export default function DistributionFlyersSaintEtiennePage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + texte d’intro */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Saint-Étienne
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/saint-etienne.webp"
                  alt="Vue de Saint-Étienne illustrant une campagne de distribution de flyers"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Saint-Étienne, dans le département de la Loire (42), Adrexo.net déploie ses équipes pour la distribution
                de flyers, dépliants, catalogues, journaux municipaux et tracts. Nous couvrons les principaux quartiers
                stéphanois, les zones d’activités et les communes de la métropole avec des tournées structurées et un
                suivi précis de vos campagnes.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/saint-etienne.webp"
                alt="Panorama de Saint-Étienne pour illustrer la diffusion d’imprimés publicitaires"
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

      {/* 2. Flyers et prospectus pour vos opérations locales */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Flyers et prospectus pour vos opérations locales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers de Saint-Étienne"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                La distribution de flyers et de prospectus permet de toucher directement les habitants de Saint-Étienne :
                centre-ville, secteur de Châteaucreux, quartier de Bellevue, La Terrasse, Montreynaud, Montplaisir ou
                encore les zones commerciales et retail parks. Vos supports de communication sont diffusés en boîtes aux
                lettres ou en main à main, au plus près de votre zone de chalandise.
              </p>
              <p className="text-body text-gray-dark mb-6">
                En fonction de vos objectifs, nous définissons des plans de diffusion par quartier, type d’habitat ou
                profil de clientèle. La distribution de flyers peut être complétée par des actions de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  street marketing
                </Link>{' '}
                pour occuper la voie publique lors d’animations, d’ouvertures de magasins ou d’événements culturels.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Construire votre plan de diffusion
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Journaux municipaux et informations locales */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Journaux municipaux et bulletins d’information
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans la métropole de Saint-Étienne"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Les journaux municipaux, magazines d’information et bulletins locaux contribuent à maintenir le lien entre
                la collectivité et les habitants de Saint-Étienne (42). Nous assurons la distribution de ces imprimés dans
                les immeubles et maisons individuelles, sur les secteurs définis par la ville et les communes de la
                métropole.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour consulter l’actualité institutionnelle, les Stéphanois peuvent se rendre sur le{' '}
                <a
                  href={SAINT_ETIENNE_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site officiel de la ville de Saint-Étienne
                </a>
                . De notre côté, nous organisons une logistique adaptée aux volumes, aux fréquences de parution et aux
                contraintes de terrain pour une{' '}
                <span className="font-semibold">distribution de journaux municipaux</span> fiable et maîtrisée.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Planifier une diffusion institutionnelle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brochures, catalogues et supports promotionnels */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Brochures, catalogues et supports promotionnels
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Plaquettes commerciales, catalogues produits, dépliants, programmes culturels : ces supports de
                communication sont idéaux pour valoriser votre offre auprès des habitants de Saint-Étienne et des communes
                voisines comme Saint-Priest-en-Jarez, Villars ou La Ricamarie. Ils peuvent être distribués en boîtes aux
                lettres ou ciblés autour de pôles commerciaux et de zones d’activité.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous construisons des plans de diffusion adaptés à votre identité visuelle, à la saisonnalité de vos
                campagnes et à votre stratégie de communication globale. La distribution de brochures et catalogues vient
                compléter vos actions digitales pour renforcer la présence de votre marque sur le terrain.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de vos supports imprimés
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de brochures et catalogues dans les boîtes aux lettres à Saint-Étienne"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tracts électoraux et documents officiels */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Organisation de la distribution de tracts électoraux
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts électoraux dans les quartiers de Saint-Étienne"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Lors des élections, la distribution de tracts, professions de foi et bulletins doit respecter un cadre
                légal précis. Nous accompagnons les candidats et organisations dans leurs campagnes à Saint-Étienne et
                dans la métropole, avec des tournées planifiées en boîtes aux lettres et une diffusion terrain encadrée.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nos opérations s’appuient sur notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                pour garantir une couverture homogène des secteurs ciblés. Quartiers denses, ensembles résidentiels,
                communes voisines de la vallée du Gier : la distribution est pensée pour toucher efficacement les
                électeurs.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Préparer votre campagne électorale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : la distribution d’imprimés à Saint-Étienne (42) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            La distribution d&apos;imprimés à Saint-Étienne (42) et dans la Loire
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Située au cœur du département de la Loire (42), Saint-Étienne est une grande ville marquée par une
              importante diversité de quartiers, de typologies d’habitat et de zones d’activités. La distribution
              d’imprimés publicitaires permet d’y développer une communication de proximité efficace, au plus près des
              foyers et des consommateurs.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Flyers, dépliants, mailing, cartes de visite, plaquettes commerciales, journaux, catalogues ou programmes
              culturels : vos supports de communication papiers s’intègrent à une stratégie globale visant à faire
              connaître vos offres, soutenir vos lancements ou accompagner vos campagnes publicitaires. L’imprimé
              publicitaire reste un média tangible, visible et mémorisable, complémentaire aux canaux digitaux.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En s’appuyant sur l’expérience de nos distributeurs et une bonne connaissance du tissu urbain stéphanois,
              nous construisons des plans de diffusion adaptés à vos objectifs : boîtes aux lettres, voie publique, lieux
              publics, abords des zones commerciales et zones d’activités. La distribution des journaux, brochures et
              tracts est contrôlée et documentée pour vous offrir un pilotage fiable de vos opérations.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En choisissant Adrexo.net pour vos campagnes à Saint-Étienne et dans la Loire, vous bénéficiez d’un
              partenaire spécialisé dans la distribution de supports de communication de proximité. Notre priorité :
              diffuser vos imprimés au bon endroit, au bon moment et auprès des bonnes cibles, afin de renforcer
              durablement votre visibilité locale.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Saint-Étienne
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

