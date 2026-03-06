import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyer et prospectus à Bourges | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts à Bourges (18) et dans le Cher. Couverture des quartiers berruyers, zones résidentielles et communes voisines avec diffusion en boîtes aux lettres et opérations terrain ciblées.",
}

const BOURGES_OFFICIAL_SITE_URL = 'https://www.ville-bourges.fr'

export default function DistributionFlyersBourgesPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Distribution de flyer et prospectus à Bourges */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyer et prospectus à Bourges
              </h1>

              {/* Image ville mobile, juste sous le titre */}
              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/bourges.webp"
                  alt="Vue de Bourges illustrant la distribution de flyer et prospectus"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Bourges, ville d&apos;art et d&apos;histoire au cœur du département du Cher (18), la distribution de
                flyer et prospectus reste un levier puissant pour toucher les habitants, les actifs, les étudiants et les
                visiteurs. Adrexo.net accompagne les commerces de proximité, enseignes nationales, institutions et
                organisateurs d&apos;événements dans leurs campagnes de communication de proximité sur l&apos;ensemble du
                territoire berruyer.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            {/* Image ville desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/bourges.webp"
                alt="Panorama de Bourges pour illustrer la distribution de flyer et prospectus"
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

      {/* 2. Distribution de supports imprimés dans les quartiers berruyers */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-4">
            Distribution de supports imprimés dans les quartiers berruyers
          </h2>

          {/* Image mobile sous le titre */}
          <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
            <Image
              src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
              alt="Distribution de flyers et prospectus dans les quartiers de Bourges"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Centre historique, quartiers résidentiels, zones d&apos;activités, secteurs proches de la cathédrale
                Saint-Étienne ou des marais de Bourges : la distribution de flyer et prospectus à Bourges (18) permet de
                cibler précisément votre zone de chalandise. Vos supports de communication imprimés – dépliants, mailings
                papier, plaquettes commerciales, catalogues promotionnels – sont distribués en boîtes aux lettres ou en
                main à main selon vos objectifs.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous construisons avec vous des tournées adaptées au territoire berruyer et aux communes voisines du Cher
                afin d&apos;optimiser vos campagnes de distribution. Pour renforcer la visibilité de votre enseigne, la
                diffusion de vos imprimés peut être complétée par des opérations de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  street marketing
                </Link>{' '}
                menées sur les principaux flux piétons de Bourges et de l&apos;agglomération.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Construire votre plan de diffusion
              </Link>
            </div>

            {/* Image desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card hidden lg:block">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de supports imprimés dans les boîtes aux lettres de Bourges"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Distribution d’information municipale et journaux locaux à Bourges */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-4">
            Distribution d&apos;information municipale et journaux locaux à Bourges
          </h2>

          {/* Image mobile sous le titre */}
          <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
            <Image
              src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
              alt="Distribution de journaux municipaux dans les résidences de Bourges"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Bulletins municipaux, journaux d&apos;information locale, magazines de la ville ou de l&apos;agglomération :
                ces supports jouent un rôle clé pour informer les Berruyers des projets, événements et décisions de la
                collectivité. Adrexo.net prend en charge la distribution de ces documents dans les immeubles, maisons
                individuelles et lotissements, en respectant le découpage des quartiers défini par l&apos;éditeur ou la
                ville.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l&apos;actualité institutionnelle, les habitants peuvent consulter le{' '}
                <a
                  href={BOURGES_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site officiel de la Ville de Bourges
                </a>
                . De notre côté, nous mobilisons notre expertise en{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux
                </Link>{' '}
                pour garantir une diffusion homogène dans les différents quartiers de Bourges (18) et dans le Cher.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Organiser une diffusion institutionnelle
              </Link>
            </div>

            {/* Image desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card hidden lg:block">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans les boîtes aux lettres à Bourges"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 40vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Distribution de brochures, catalogues et plaquettes dans le Cher */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-4">
            Distribution de brochures, catalogues et plaquettes dans le Cher
          </h2>

          {/* Image mobile */}
          <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
            <Image
              src="/images/services%20villes/distri%20magazine%20municipal.webp"
              alt="Distribution de brochures et catalogues dans les boîtes aux lettres de Bourges"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Commerces de centre-ville, zones commerciales, agences de services ou acteurs touristiques : vos brochures,
                catalogues et plaquettes commerciales sont des supports de communication essentiels pour détailler vos
                offres auprès des habitants de Bourges (18) et des communes voisines du Cher. Ils complètent vos campagnes
                digitales en offrant un média tangible, facile à conserver.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous vous aidons à définir les secteurs de diffusion les plus pertinents : quartiers résidentiels, grands
                ensembles, communes proches, zones de chalandise stratégique. La distribution de ces supports imprimés
                s&apos;intègre dans une approche globale de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  communication de proximité
                </Link>{' '}
                pour renforcer votre visibilité dans le 18.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de vos supports imprimés
              </Link>
            </div>

            {/* Image desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card hidden lg:block">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de catalogues et plaquettes commerciales dans les quartiers de Bourges"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts et documents imprimés à Bourges */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-4">
            Distribution de tracts et documents imprimés à Bourges
          </h2>

          {/* Image mobile */}
          <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
            <Image
              src="/images/services%20villes/distribution%20tract%20electoral.webp"
              alt="Distribution de tracts et documents imprimés dans les rues de Bourges"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Tracts promotionnels, opérations associatives, communication institutionnelle ou tracts électoraux : ces
                campagnes nécessitent une logistique terrain précise à Bourges (18). Nous organisons la distribution en
                boîtes aux lettres, la diffusion en main à main ou la présence sur des lieux publics, en respectant la
                réglementation en vigueur dans le Cher.
              </p>
              <p className="text-body text-gray-dark mb-6">
                En vous appuyant sur notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts municipaux et électoraux
                </Link>
                , vous bénéficiez d&apos;une organisation de tournées pensée pour maximiser l&apos;impact de vos documents
                imprimés dans les quartiers densément peuplés, zones pavillonnaires et secteurs stratégiques de Bourges
                (18).
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Préparer votre prochaine opération terrain
              </Link>
            </div>

            {/* Image desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card hidden lg:block">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts imprimés dans les boîtes aux lettres de Bourges"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : distribution de flyer et prospectus à Bourges (18) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyer et prospectus à Bourges (18) et dans le Cher
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Ville de patrimoine et de culture au cœur du Berry, Bourges bénéficie d&apos;une position centrale dans le
              Cher (18). La distribution de flyer et prospectus à Bourges constitue un levier efficace pour toucher
              directement les habitants, visiteurs et actifs en complément de vos actions digitales, que ce soit pour un
              commerce, une enseigne ou un événement.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Flyers, dépliants, mailings, plaquettes commerciales, catalogues, brochures ou cartes de visite permettent de
              mettre en avant vos offres, votre image de marque et vos points de vente dans le 18. Intégrés à une
              stratégie de{' '}
              <Link
                href="/street-marketing"
                className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
              >
                communication de proximité
              </Link>
              , ces supports complètent vos campagnes publicitaires et contribuent à générer du trafic vers vos lieux
              d&apos;accueil.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Grâce à une connaissance fine des quartiers berruyers et des communes environnantes, nous définissons des
              plans de diffusion adaptés à votre zone de chalandise : boîtes aux lettres des zones résidentielles, secteurs
              à forte densité, axes menant vers les zones commerciales ou zones d&apos;activité. Chaque opération de
              distribution est pensée pour optimiser la couverture du territoire et maximiser l&apos;impact de vos supports
              imprimés dans le Cher (18).
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Bourges
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

