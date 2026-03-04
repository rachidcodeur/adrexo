import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Boulogne-Billancourt | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts à Boulogne-Billancourt (92) et dans la métropole parisienne. Couverture des quartiers et communes voisines, traçabilité et devis gratuit pour vos campagnes d’imprimés publicitaires.",
}

const BOULOGNE_BILLANCOURT_OFFICIAL_SITE_URL = 'https://www.boulognebillancourt.com'

export default function DistributionFlyersBoulogneBillancourtPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image ville + texte d’intro */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Boulogne-Billancourt
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/boulogne-billancourt.webp"
                  alt="Vue de Boulogne-Billancourt illustrant une distribution de flyers"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Boulogne-Billancourt, aux portes de Paris dans le département des Hauts-de-Seine (92), Adrexo.net accompagne
                les enseignes, commerces de proximité, institutions et agences de communication dans la diffusion de leurs
                supports imprimés : flyers, dépliants, catalogues, journaux municipaux, brochures ou tracts. Nos équipes
                terrain couvrent les quartiers autour du Pont de Sèvres, de l’île Seguin, de Rives de Seine ou encore du
                Parc de Billancourt avec des tournées structurées et traçables.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/boulogne-billancourt.webp"
                alt="Panorama de Boulogne-Billancourt pour illustrer la diffusion d’imprimés publicitaires"
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

      {/* 2. Flyers, prospectus et dépliants pour vos campagnes locales */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Flyers, prospectus et dépliants pour vos campagnes locales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers de Boulogne-Billancourt"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                La distribution de flyers et de prospectus reste un moyen direct et efficace pour faire connaître votre
                point de vente, votre événement ou votre nouvelle offre à Boulogne-Billancourt. Les boîtes aux lettres des
                résidences, les grands axes, les zones commerçantes ou les abords des stations de métro et de tram
                constituent des points stratégiques pour toucher vos cibles au plus près de leur quotidien.
              </p>
              <p className="text-body text-gray-dark mb-6">
                En fonction de votre zone de chalandise et du profil de vos prospects, nous construisons un plan de diffusion
                sur mesure : quartiers résidentiels, secteurs d’affaires, zones mixtes habitat/commerces… Vos visuels, plaquettes
                commerciales, dépliants ou cartes de visite sont distribués de manière homogène, avec un contrôle qualité
                permanent, pour soutenir vos campagnes publicitaires sur le terrain.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Construire votre plan de diffusion
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Journaux municipaux et information locale dans le 92 */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Journaux municipaux et information locale dans le 92
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux à Boulogne-Billancourt et dans les Hauts-de-Seine"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Bulletins municipaux, magazines d’information locale, documents de communication institutionnelle : ces
                supports sont essentiels pour maintenir le lien avec les habitants de Boulogne-Billancourt (92). Nous
                assurons leur distribution dans les immeubles, résidences et maisons individuelles, sur les secteurs définis
                par la collectivité ou la structure éditrice.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour découvrir l’actualité de la commune, les habitants peuvent se rendre sur le{' '}
                <a
                  href={BOULOGNE_BILLANCOURT_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site officiel de la Ville de Boulogne-Billancourt
                </a>
                . De notre côté, nous organisons la logistique des dépôts et tournées, en nous appuyant sur notre expertise
                en{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux
                </Link>
                , pour que chaque support de communication atteigne efficacement sa cible.
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
              Plaquettes commerciales, catalogues, brochures de lancement, programmes culturels ou magazines de quartier :
              ces supports de communication papier vous permettent de déployer un message riche, détaillé et durable auprès
              des habitants de Boulogne-Billancourt et des communes voisines comme Issy-les-Moulineaux, Sèvres ou Saint-Cloud.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Nous définissons avec vous les zones de distribution les plus pertinentes : grands ensembles résidentiels,
              secteurs pavillonnaires, quartier d’affaires, commerces de proximité, équipements culturels. La mise en page,
              le grammage et la qualité d’impression de vos supports sont valorisés par une diffusion maîtrisée, pour une
              communication de proximité cohérente avec votre identité visuelle.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Discuter de vos supports imprimés
            </Link>
          </div>
          <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
            <Image
              src="/images/services%20villes/distri%20magazine%20municipal.webp"
              alt="Distribution de brochures et catalogues dans les boîtes aux lettres de Boulogne-Billancourt"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        </div>
      </section>

      {/* 5. Opérations terrain et tracts sur mesure */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Opérations terrain et tracts sur mesure
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts et documents imprimés à Boulogne-Billancourt"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Qu’il s’agisse de tracts promotionnels, de documents institutionnels ou de tracts électoraux, la diffusion
                sur le terrain doit être organisée, mesurable et conforme au cadre réglementaire. À Boulogne-Billancourt (92),
                nous accompagnons vos campagnes en boîtes aux lettres ou en main à main, en nous appuyant sur notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>
                .
              </p>
              <p className="text-body text-gray-dark mb-6">
                Vos supports de communication sont pensés pour capter l’attention : visuels percutants, messages clairs,
                formats adaptés à la boîte aux lettres et à la manipulation. Nous veillons à ce que chaque tract ou document
                soit effectivement distribué dans les secteurs définis, afin de maximiser l’impact de votre stratégie de
                communication locale.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Préparer votre prochaine opération terrain
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : la distribution d’imprimés à Boulogne-Billancourt (92) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            La distribution d&apos;imprimés à Boulogne-Billancourt (92) et dans la métropole parisienne
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Située sur la rive gauche de la Seine, face au bois de Boulogne et aux portes de Paris, Boulogne-Billancourt
              concentre à la fois habitat dense, bureaux, sièges d’entreprises, lieux culturels et zones commerçantes. La
              distribution d’imprimés publicitaires y occupe une place clé pour faire connaître une enseigne, soutenir une
              campagne de lancement ou dynamiser un point de vente.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Flyers, dépliants, catalogues, mailings, brochures, journaux ou cartes de visite : ces supports de communication
              tangibles complètent parfaitement vos actions digitales. Ils vous aident à vous démarquer dans un environnement
              concurrentiel, à renforcer votre image de marque et à créer un contact concret avec vos cibles au quotidien.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une organisation rigoureuse, à des distributeurs formés et à une bonne connaissance des quartiers de
              Boulogne-Billancourt, nous construisons des plans de diffusion adaptés à votre stratégie : boîtes aux lettres,
              affichage de proximité, diffusion autour des principaux axes et équipements publics. Chaque campagne fait l’objet
              d’un suivi et de retours pour vous offrir un pilotage fiable de vos investissements.
            </p>
            <p className="text-body text-gray-dark mb-6">
              En choisissant Adrexo.net pour vos campagnes d&apos;imprimés à Boulogne-Billancourt (92), vous travaillez avec un
              partenaire spécialisé dans la distribution de supports de communication de proximité. Notre objectif : diffuser vos
              documents au bon endroit, au bon moment et auprès des bonnes cibles, pour maximiser la visibilité de vos messages
              dans la métropole parisienne.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Boulogne-Billancourt
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

