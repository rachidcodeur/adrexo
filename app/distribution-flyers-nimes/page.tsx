import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyer et prospectus à Nîmes | Adrexo.net',
  description:
    "Distribution de flyers, prospectus, journaux et tracts à Nîmes (30) et dans le Gard. Couverture des quartiers nîmois, zones résidentielles et communes voisines avec diffusion en boîtes aux lettres et opérations terrain ciblées.",
}

const NIMES_OFFICIAL_SITE_URL = 'https://www.nimes.fr'

export default function DistributionFlyersNimesPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Distribution de flyer et prospectus à Nîmes */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyer et prospectus à Nîmes
              </h1>

              {/* Image ville mobile, juste sous le titre */}
              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/nimes.webp"
                  alt="Vue de Nîmes illustrant la distribution de flyer et prospectus"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Nîmes, au cœur du département du Gard (30) en région Occitanie, la distribution de flyer et prospectus
                reste un levier puissant pour toucher les habitants, les touristes et les actifs. Adrexo.net accompagne les
                commerces, enseignes nationales, institutions et organisateurs d&apos;événements dans leurs campagnes de
                communication de proximité sur l&apos;ensemble du territoire nîmois.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            {/* Image ville desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/nimes.webp"
                alt="Panorama de Nîmes pour illustrer la distribution de flyer et prospectus"
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

      {/* 2. Distribution de supports imprimés dans les quartiers nîmois */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-4">
            Distribution de supports imprimés dans les quartiers nîmois
          </h2>

          {/* Image mobile juste sous le titre */}
          <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
            <Image
              src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
              alt="Distribution de flyers et prospectus dans les quartiers de Nîmes"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Centre historique, Arènes de Nîmes, Esplanade, quartiers résidentiels ou zones en développement : la
                distribution de flyer et prospectus à Nîmes (30) permet de cibler précisément votre zone de chalandise. Vos
                supports de communication imprimés – dépliants, mailings, plaquettes commerciales, catalogues promotionnels
                – sont distribués en boîtes aux lettres ou en main à main selon vos objectifs.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous construisons avec vous des tournées adaptées au territoire nîmois et aux communes voisines du Gard
                afin d&apos;optimiser vos campagnes de distribution. Pour renforcer la visibilité de votre enseigne, la
                diffusion de vos imprimés peut être complétée par des actions de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  street marketing
                </Link>{' '}
                sur les principaux flux piétons de Nîmes et de son agglomération.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Construire votre plan de diffusion
              </Link>
            </div>

            {/* Image desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card hidden lg:block">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de supports imprimés dans les boîtes aux lettres de Nîmes"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Distribution d’information municipale et journaux locaux à Nîmes */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-4">
            Distribution d&apos;information municipale et journaux locaux à Nîmes
          </h2>

          {/* Image mobile sous le titre */}
          <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
            <Image
              src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
              alt="Distribution de journaux municipaux dans les résidences de Nîmes"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-body text-gray-dark mb-6">
                Bulletins municipaux, journaux d&apos;information locale, magazines de l&apos;agglomération : ces supports
                jouent un rôle clé pour informer les Nîmois des projets, événements et décisions de la collectivité.
                Adrexo.net prend en charge la distribution de ces documents dans les immeubles, maisons individuelles et
                lotissements, en respectant le découpage des quartiers défini par l&apos;éditeur ou la mairie.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l&apos;actualité institutionnelle, les habitants peuvent consulter le{' '}
                <a
                  href={NIMES_OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site officiel de la Ville de Nîmes
                </a>
                . De notre côté, nous mobilisons notre expertise en{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux
                </Link>{' '}
                pour garantir une diffusion homogène dans les différents quartiers de Nîmes (30) et dans le Gard.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Organiser une diffusion institutionnelle
              </Link>
            </div>

            {/* Image desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card hidden lg:block">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux municipaux dans les boîtes aux lettres à Nîmes"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 40vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Distribution de brochures, catalogues et plaquettes dans le Gard */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-4">
            Distribution de brochures, catalogues et plaquettes dans le Gard
          </h2>

          {/* Image mobile */}
          <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
            <Image
              src="/images/services%20villes/distri%20magazine%20municipal.webp"
              alt="Distribution de brochures et catalogues dans les boîtes aux lettres de Nîmes"
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
                offres auprès des habitants de Nîmes (30) et des communes voisines du Gard. Ils complètent vos campagnes
                digitales en offrant un média tangible, facile à conserver.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Nous vous aidons à définir les secteurs de diffusion les plus pertinents : quartiers résidentiels, grands
                ensembles, villages proches, zones de chalandise stratégique. La distribution de ces supports imprimés
                s&apos;inscrit dans une approche globale de{' '}
                <Link
                  href="/street-marketing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  communication de proximité
                </Link>{' '}
                pour renforcer votre visibilité dans le Gard (30).
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Discuter de vos supports imprimés
              </Link>
            </div>

            {/* Image desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card hidden lg:block">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de catalogues et plaquettes commerciales dans les quartiers de Nîmes"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts et documents imprimés à Nîmes */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-4">
            Distribution de tracts et documents imprimés à Nîmes
          </h2>

          {/* Image mobile */}
          <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
            <Image
              src="/images/services%20villes/distribution%20tract%20electoral.webp"
              alt="Distribution de tracts et documents imprimés dans les rues de Nîmes"
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
                campagnes nécessitent une logistique terrain précise à Nîmes (30). Nous organisons la distribution en
                boîtes aux lettres, la diffusion en main à main ou la présence sur des lieux publics, en respectant la
                réglementation en vigueur dans le Gard.
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
                imprimés dans les quartiers densément peuplés, zones pavillonnaires et secteurs stratégiques de Nîmes (30).
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Préparer votre prochaine opération terrain
              </Link>
            </div>

            {/* Image desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card hidden lg:block">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts imprimés dans les boîtes aux lettres de Nîmes"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville : distribution de flyer et prospectus à Nîmes (30) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyer et prospectus à Nîmes (30) et dans le Gard
          </h2>
          <div>
            <p className="text-body text-gray-dark mb-6">
              Ville d&apos;histoire et de patrimoine, Nîmes occupe une position stratégique entre Méditerranée et Cévennes.
              La distribution de flyer et prospectus à Nîmes (30) constitue un levier efficace pour toucher directement les
              habitants, visiteurs et actifs en complément de vos actions digitales. Vos supports de communication papier
              renforcent la visibilité de votre marque sur l&apos;ensemble du territoire nîmois.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Flyers, dépliants, mailings, plaquettes commerciales, catalogues, brochures ou cartes de visite permettent de
              mettre en avant vos offres, votre image de marque et vos points de vente dans le Gard (30). Intégrés à une
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
              Grâce à une connaissance fine des quartiers nîmois et des communes voisines, nous définissons des plans de
              diffusion adaptés à votre zone de chalandise : boîtes aux lettres des zones résidentielles, secteurs à forte
              densité, axes menant vers les zones commerciales ou zones d&apos;activité. Chaque opération de distribution
              est pensée pour optimiser la couverture du territoire et maximiser l&apos;impact de vos supports imprimés
              dans le 30.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Parler de votre campagne à Nîmes
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

