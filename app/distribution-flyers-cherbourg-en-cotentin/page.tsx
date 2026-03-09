import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyer et prospectus à Cherbourg-en-Cotentin | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts à Cherbourg-en-Cotentin (50) et dans la Manche. Couverture des quartiers cherbourgeois, zones résidentielles et communes voisines avec diffusion en boîtes aux lettres et opérations terrain ciblées.",
}

const CHERBOURG_OFFICIAL_SITE_URL = 'https://www.cherbourg.fr'

export default function DistributionFlyersCherbourgPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Distribution de flyer et prospectus à Cherbourg-en-Cotentin */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyer et prospectus à Cherbourg-en-Cotentin
              </h1>

              {/* Image ville mobile, juste sous le titre */}
              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/cherbourg-en-cotentin.webp"
                  alt="Vue de Cherbourg-en-Cotentin illustrant la distribution de flyer et prospectus"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                Port majeur de la Manche (50) tourné vers la rade et la mer, Cherbourg-en-Cotentin est un territoire où la
                distribution de flyer et prospectus permet de toucher habitants, salariés des sites portuaires et visiteurs de
                passage. Adrexo.net accompagne les commerces du centre, les enseignes nationales, les institutions et les
                organisateurs d&apos;événements dans leurs campagnes d&apos;imprimés publicitaires sur l&apos;ensemble du
                territoire cherbourgeois.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>

            {/* Image ville desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/cherbourg-en-cotentin.webp"
                alt="Panorama de Cherbourg-en-Cotentin utilisé pour illustrer la distribution de flyer et prospectus"
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

      {/* 2. Distribution de supports imprimés dans les quartiers cherbourgeois */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-4">
            Distribution de supports imprimés dans les quartiers cherbourgeois
          </h2>

          {/* Image mobile sous le titre */}
          <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
            <Image
              src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
              alt="Distribution de flyers et prospectus dans les quartiers de Cherbourg-en-Cotentin"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Centre-ville, quartiers des bassins, Octeville, Équeurdreville-Hainneville, La Glacerie ou encore Tourlaville
                : la distribution de flyer et prospectus à Cherbourg-en-Cotentin (50) permet de cibler précisément votre zone
                de chalandise. Flyers, dépliants, mailings papier, plaquettes commerciales et catalogues promotionnels sont
                diffusés en boîtes aux lettres ou en main à main selon vos objectifs.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous construisons avec vous des tournées adaptées au territoire cherbourgeois et aux communes voisines de la
                Manche, afin d&apos;optimiser la couverture de vos campagnes. Les volumes sont planifiés secteur par secteur, en
                tenant compte des grands axes, des ensembles collectifs et des zones d&apos;emploi pour garantir une diffusion
                efficace de vos imprimés publicitaires dans le 50.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>

            {/* Image desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card hidden lg:block">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de supports imprimés dans les boîtes aux lettres de Cherbourg-en-Cotentin"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Distribution de journaux municipaux et d’information locale à Cherbourg-en-Cotentin */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-4">
            Distribution de journaux municipaux et d&apos;information locale à Cherbourg-en-Cotentin
          </h2>

          {/* Image mobile sous le titre */}
          <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
            <Image
              src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
              alt="Distribution de journaux municipaux dans les résidences de Cherbourg-en-Cotentin"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Bulletins municipaux, journaux d&apos;information locale, magazines de l&apos;agglomération : ces supports sont
                essentiels pour informer les habitants de Cherbourg-en-Cotentin des projets, événements et décisions des
                institutions. Adrexo.net prend en charge la distribution de ces documents dans les immeubles, maisons
                individuelles et lotissements, en respectant le découpage des secteurs défini par l&apos;éditeur ou la
                collectivité.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l&apos;actualité de la ville, les habitants peuvent consulter le{' '}
                <a
                  href={CHERBOURG_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site officiel de Cherbourg-en-Cotentin
                </a>
                . De notre côté, nous mettons en œuvre notre expertise en{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux
                </Link>{' '}
                afin de garantir une diffusion homogène dans les différents quartiers de Cherbourg-en-Cotentin (50) et dans la
                Manche.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>

            {/* Image desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card hidden lg:block">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans les boîtes aux lettres à Cherbourg-en-Cotentin"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 40vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Distribution de brochures, catalogues et plaquettes autour de la rade de Cherbourg */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-4">
            Distribution de brochures, catalogues et plaquettes autour de la rade de Cherbourg
          </h2>

          {/* Image mobile */}
          <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
            <Image
              src="/images/services%20villes/distri%20magazine%20municipal.webp"
              alt="Distribution de brochures et catalogues dans les boîtes aux lettres de Cherbourg-en-Cotentin"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Commerces du centre, acteurs touristiques liés à la rade et à la Cité de la Mer, zones commerciales et
                industries portuaires : vos brochures, catalogues et plaquettes commerciales sont des supports essentiels pour
                présenter vos offres auprès des habitants de Cherbourg-en-Cotentin (50) et des communes voisines. Ils
                complètent vos campagnes digitales en offrant un support tangible, que l&apos;on feuillette et conserve.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous vous aidons à définir les secteurs de diffusion les plus pertinents : quartiers résidentiels, ensembles
                collectifs, communes proches, zones d&apos;emploi et zones de chalandise stratégiques le long du littoral. Cette
                diffusion ciblée de supports imprimés s&apos;intègre dans une stratégie globale de communication locale pour
                renforcer votre visibilité dans le 50.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>

            {/* Image desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card hidden lg:block">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de catalogues et plaquettes commerciales dans les quartiers de Cherbourg-en-Cotentin"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts et documents imprimés à Cherbourg-en-Cotentin */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-4">
            Distribution de tracts et documents imprimés à Cherbourg-en-Cotentin
          </h2>

          {/* Image mobile */}
          <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
            <Image
              src="/images/services%20villes/distribution%20tract%20electoral.webp"
              alt="Distribution de tracts et documents imprimés dans les rues de Cherbourg-en-Cotentin"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Tracts promotionnels pour une ouverture de magasin, communication associative, événements culturels ou
                campagnes locales : ces diffusions nécessitent une organisation terrain rigoureuse à Cherbourg-en-Cotentin
                (50). Nous mettons en place des tournées en boîtes aux lettres ou des distributions en main à main sur des
                lieux stratégiques, en respectant la réglementation applicable dans la Manche.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nos équipes de distributeurs connaissent les principaux quartiers cherbourgeois, les zones pavillonnaires et
                les secteurs à forte densité. En complément, vous pouvez vous appuyer sur notre offre de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux
                </Link>{' '}
                pour diffuser des messages institutionnels ou officiels dans l&apos;ensemble de l&apos;agglomération de
                Cherbourg-en-Cotentin.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>

            {/* Image desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card hidden lg:block">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts imprimés dans les boîtes aux lettres de Cherbourg-en-Cotentin"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Distribution de flyer et prospectus à Cherbourg-en-Cotentin (50) et dans la Manche */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyer et prospectus à Cherbourg-en-Cotentin (50) et dans la Manche
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              À l&apos;extrémité nord du Cotentin, Cherbourg-en-Cotentin bénéficie d&apos;une position stratégique entre rade,
              port de passagers et zones résidentielles. La distribution de flyer et prospectus dans le 50 permet de toucher
              directement les habitants, actifs et visiteurs, en complément des canaux digitaux, au plus près de leurs lieux
              de vie.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Flyers, dépliants, mailings, plaquettes commerciales, catalogues, brochures ou cartes de visite permettent de
              mettre en avant vos offres, votre image de marque et vos points de vente dans la Manche (50). Intégrés à une
              stratégie de{' '}
              <Link
                href="/distribution-journaux-municipaux"
                className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
              >
                communication locale imprimée
              </Link>
              , ces supports complètent vos actions sur le web et contribuent à générer du trafic vers vos lieux d&apos;accueil.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une connaissance fine des quartiers cherbourgeois et des communes environnantes, nous définissons des
              plans de diffusion adaptés à votre zone de chalandise : boîtes aux lettres des zones résidentielles, ensembles
              collectifs, axes menant vers les zones commerciales ou zones d&apos;activité. Chaque opération de distribution est
              pensée pour optimiser la couverture du territoire et maximiser l&apos;impact de vos supports imprimés en
              Normandie et dans la Manche (50).
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

