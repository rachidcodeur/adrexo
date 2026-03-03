import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires au Havre | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts au Havre (76) et dans la communauté urbaine Le Havre Seine Métropole. Couverture des quartiers et communes, traçabilité et devis gratuit pour vos campagnes d’imprimés publicitaires.",
}

const LE_HAVRE_OFFICIAL_SITE_URL = 'https://www.lehavre.fr'

export default function DistributionFlyersLeHavrePage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + texte d’intro */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires au Havre
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/le-havre.webp"
                  alt="Vue du Havre illustrant une campagne de distribution de flyers"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                Au Havre, dans le département de la Seine-Maritime (76), Adrexo.net accompagne les annonceurs, enseignes
                et institutions dans la distribution de flyers, catalogues, journaux municipaux et tracts. Nos équipes
                couvrent le centre reconstruit classé à l’UNESCO, les quartiers résidentiels, les zones portuaires et les
                communes de la communauté urbaine Le Havre Seine Métropole avec des tournées structurées et tracées.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/le-havre.webp"
                alt="Panorama du Havre pour illustrer la diffusion d’imprimés publicitaires"
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

      {/* 2. Flyers et prospectus en bord de mer */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Diffuser vos flyers et prospectus au Havre
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers du Havre"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                La distribution de flyers et de prospectus permet de toucher les habitants du Havre dans leur quotidien :
                centre-ville Perret, quartier de la plage, Sanvic, Caucriauville, Aplemont, Graville, quartiers sud ou
                encore les zones commerciales proches des grands axes. Vos supports de communication sont diffusés en
                boîtes aux lettres ou en main à main, en fonction de vos objectifs.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Chaque campagne est construite à partir de votre zone de chalandise, de votre cible et de votre stratégie
                de communication. La distribution de flyers peut être associée à des actions de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  street marketing
                </Link>{' '}
                pour renforcer votre présence sur la voie publique lors d’animations, d’inaugurations ou de temps forts
                commerciaux.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Construire votre plan de diffusion
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Journaux municipaux et bulletins d’information */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Journaux municipaux et information locale
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans la communauté urbaine du Havre"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Les journaux municipaux, magazines d’information et bulletins locaux sont essentiels pour maintenir le lien
                entre la collectivité et les habitants du Havre (76). Nous organisons la distribution de ces imprimés dans
                les immeubles et maisons individuelles, en couvrant les secteurs définis par la ville et les communes de
                la communauté urbaine.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l’actualité institutionnelle, les Havrais peuvent se rendre sur le{' '}
                <a
                  href={LE_HAVRE_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site d&apos;information de la Ville du Havre
                </a>
                . De notre côté, nous mettons en œuvre une logistique adaptée aux rythmes de parution et aux volumes à
                diffuser, en nous appuyant sur notre expertise en{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux
                </Link>
                .
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Planifier une diffusion institutionnelle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brochures, catalogues et documents promotionnels */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Brochures, catalogues et documents promotionnels
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Plaquettes commerciales, catalogues produits, dépliants, programmes culturels ou brochures institutionnelles
                : ces supports de communication permettent de présenter en détail vos offres au public havrais. Ils sont
                distribués dans les quartiers résidentiels, autour des pôles d’activités et dans les zones de commerce
                comme les Docks Vauban ou les centres commerciaux de la rive droite.
              </p>
              <p className="text-body text-gray-dark mb-6">
                La diffusion est pensée en fonction de votre stratégie de communication globale : identité visuelle,
                saisonnalité, ciblage géographique, profil des cibles. La distribution de documents imprimés complète vos
                actions digitales et vos campagnes publicitaires pour renforcer la présence de votre marque sur le terrain.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de vos supports imprimés
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de brochures et catalogues dans les boîtes aux lettres du Havre"
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
                alt="Distribution de tracts électoraux dans les quartiers du Havre"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                En période électorale, la distribution de tracts, professions de foi et bulletins répond à un cadre
                réglementaire strict. Nous accompagnons les candidats et organisations dans leurs campagnes au Havre (76)
                et dans les communes de l’agglomération, avec des tournées planifiées en boîtes aux lettres et une diffusion
                terrain encadrée.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nos opérations s’appuient sur notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                pour garantir une couverture homogène des secteurs ciblés. Des quartiers densément peuplés aux communes
                voisines comme Sainte-Adresse, Montivilliers ou Harfleur, la distribution est pensée pour toucher
                efficacement les électeurs.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Préparer votre campagne électorale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : la distribution d’imprimés au Havre (76) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            La distribution d&apos;imprimés au Havre (76) et sur le littoral normand
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Ville portuaire majeure de Normandie, Le Havre (Seine-Maritime, 76) présente des profils de quartiers très
              variés : habitat collectif, maisons individuelles, zones industrielles, zones logistiques et quartiers
              balnéaires. La distribution d’imprimés publicitaires permet d’y développer une communication de proximité
              efficace pour toucher foyers, salariés et consommateurs.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Flyers, dépliants, mailing, cartes de visite, plaquettes commerciales, journaux, catalogues ou programmes
              culturels : vos supports de communication papiers s’intègrent à une stratégie globale visant à faire
              connaître vos offres, soutenir vos lancements et alimenter vos campagnes publicitaires. L’imprimé reste un
              média tangible, visible et mémorisable, complémentaire aux canaux digitaux.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En s’appuyant sur l’expérience de nos distributeurs et une bonne connaissance du tissu urbain havrais, nous
              construisons des plans de diffusion adaptés à votre zone de chalandise : boîtes aux lettres, voie publique,
              lieux publics, abords des zones commerciales et des principaux axes. La distribution des journaux, brochures
              et tracts est contrôlée et documentée pour vous offrir un pilotage fiable de vos opérations.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En choisissant Adrexo.net pour vos campagnes au Havre et sur la côte normande, vous travaillez avec un
              partenaire spécialisé dans la distribution de supports de communication de proximité. Notre priorité :
              diffuser vos imprimés au bon endroit, au bon moment et auprès des bonnes cibles afin de renforcer durablement
              votre visibilité locale.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne au Havre
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

