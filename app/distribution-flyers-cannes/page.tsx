import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const MAIRIE_CANNES_URL = 'https://www.cannes.com'

export const metadata: Metadata = {
  title: 'Distribution de flyer et prospectus à Cannes | Adrexo.net',
  description:
    "Distribution de flyer, prospectus et imprimés publicitaires à Cannes (06). Couverture de Cannes et des communes voisines des Alpes-Maritimes, traçabilité et devis pour vos campagnes.",
}

export default function DistributionFlyersCannesPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyer et prospectus à Cannes
              </h1>

              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/cannes.webp"
                  alt="Vue de Cannes illustrant la distribution de flyers et prospectus"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                À Cannes, sur la Croisette, autour du Palais des Festivals, dans le Suquet ou à Cannes La Bocca, la
                distribution de flyers et de prospectus reste un levier puissant pour toucher les Cannois et les
                visiteurs de la Côte d&apos;Azur. Adrexo.net organise vos campagnes d&apos;imprimés publicitaires dans
                tout le bassin cannois avec un suivi précis des tournées.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/cannes.webp"
                alt="Distribution de prospectus à Cannes sur la Croisette"
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

      {/* 2. Distribution de flyers et prospectus à Cannes (06) */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyer et prospectus à Cannes (06)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus dans les quartiers de Cannes"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Dans le 06, la distribution de flyers et la distribution de prospectus à Cannes permettent de couvrir
                des zones très contrastées : centre-ville commerçant, Croisette, plages, quartiers résidentiels de
                Californie-Pezou, La Bocca, ainsi que les zones d&apos;activité en direction de Mougins, Le Cannet ou
                Mandelieu-la-Napoule. Chaque campagne est pensée pour profiter des flux piétons et des habitudes de
                consommation locales.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les distributions peuvent se faire en boîtes aux lettres ou en main à main lors d&apos;événements
                cannois : salons professionnels, festivals, manifestations sportives ou culturelles. Pour compléter la
                présence terrain, vous pouvez articuler votre plan de communication avec la{' '}
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de journaux municipaux et d&apos;imprimés institutionnels
                </Link>{' '}
                afin de renforcer la visibilité de votre message dans les Alpes-Maritimes.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Distribution de publications locales et d'informations de proximité */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de publications locales et d&apos;informations de proximité
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0 order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journaux locaux dans les quartiers de Cannes et du Suquet"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                La distribution de journaux locaux, bulletins d&apos;information et magazines de quartier participe à la
                circulation de l&apos;information entre la Ville de Cannes et ses habitants. Les tournées couvrent les
                immeubles du centre, les résidences de La Bocca, les hauteurs de Cannes, ainsi que les axes majeurs qui
                relient la ville aux communes voisines du littoral azuréen.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Pour suivre l&apos;actualité officielle, les Cannois et les professionnels peuvent consulter le{' '}
                <a
                  href={MAIRIE_CANNES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  site officiel de la ville de Cannes
                </a>
                . De notre côté, nous veillons à ce que vos imprimés de proximité soient distribués dans les délais, sur
                les périmètres définis et avec une traçabilité adaptée aux exigences des collectivités du 06.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brochures, catalogues et supports promotionnels à Cannes */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de brochures, catalogues et supports promotionnels
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                Catalogues commerciaux, programmes d&apos;événements, plaquettes institutionnelles ou dépliants touristiques
                : ces supports imprimés jouent un rôle clé dans la visibilité des acteurs économiques et culturels de
                Cannes et des communes voisines comme Le Cannet, Mougins ou Mandelieu-la-Napoule. La distribution de
                brochures et catalogues en boîtes aux lettres permet de cibler des secteurs précis autour de vos points de
                vente, hôtels, résidences ou équipements culturels.
              </p>
              <p className="text-body text-gray-dark mb-6">
                En coordonnant la distribution de ces supports avec vos opérations digitales ou vos actions de terrain,
                vous renforcez votre présence sur la Côte d&apos;Azur. Les plans de diffusion sont adaptés aux périodes
                fortes de fréquentation, aux quartiers stratégiques et aux profils de clientèle visés, afin de faire de la
                distribution de documents un véritable levier de notoriété dans le 06.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de catalogues et brochures dans les boîtes aux lettres à Cannes"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts pour vos campagnes sur la Côte d'Azur */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts pour vos campagnes sur la Côte d&apos;Azur
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card mb-6 lg:mb-0">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts et imprimés de campagne à Cannes"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Qu&apos;il s&apos;agisse d&apos;une campagne électorale, d&apos;un référendum local ou de la promotion
                d&apos;un événement institutionnel, la distribution de tracts à Cannes s&apos;organise sur un
                calendrier précis. Les équipes terrain interviennent dans les différents quartiers cannois ainsi que
                dans les communes voisines de l&apos;aire urbaine pour assurer une diffusion homogène.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Notre service de{' '}
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  distribution de tracts électoraux et municipaux
                </Link>{' '}
                permet de piloter vos opérations sur Cannes, dans les Alpes-Maritimes et le reste de la région
                Provence-Alpes-Côte d&apos;Azur, avec un reporting détaillé des zones couvertes.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-3">
            La distribution d&apos;imprimés à Cannes et dans les Alpes-Maritimes
          </h2>
          <p className="text-body text-gray-dark mb-10 font-medium text-lg">
            Distribution en boîtes aux lettres et en main à main à Cannes et sur la Riviera
          </p>

          <h3 className="text-h3 text-black mb-4 mt-8 first:mt-0">
            Un outil de visibilité dans une ville touristique
          </h3>
          <p className="text-body text-gray-dark mb-6">
            Cannes est une ville internationale, rythmée par les congrès, les festivals et les saisons touristiques.
            Dans ce contexte, la distribution de flyers, de prospectus et de tracts permet de toucher des publics
            variés : habitants, actifs des Alpes-Maritimes, visiteurs français et étrangers. Les imprimés
            publicitaires accompagnent les campagnes de lancement, les ouvertures de points de vente et les temps
            forts de la vie cannoise.
          </p>

          <h3 className="text-h3 text-black mb-4 mt-8">
            Ciblage géographique et quartiers stratégiques
          </h3>
          <p className="text-body text-gray-dark mb-6">
            La distribution d&apos;imprimés à Cannes permet de cibler des zones spécifiques : Croisette, rues
            commerçantes, quartiers résidentiels, zones de villas, résidences secondaires ou grands ensembles. En
            définissant une zone de chalandise précise, la distribution de documents en boîtes aux lettres ou en
            main à main contribue à renforcer la notoriété de vos établissements et de vos événements dans le 06.
          </p>

          <h3 className="text-h3 text-black mb-4 mt-8">
            Organisation, traçabilité et qualité de diffusion
          </h3>
          <p className="text-body text-gray-dark mb-6">
            En tant que distributeur d&apos;imprimés publicitaires, Adrexo.net met à votre disposition des équipes
            formées, une organisation rigoureuse des tournées et des outils de suivi. Distribution de prospectus,
            brochures, dépliants, magazines ou journaux : chaque campagne fait l&apos;objet d&apos;un contrôle pour
            garantir une diffusion qualitative sur Cannes et dans le reste des Alpes-Maritimes.
          </p>

          <div className="mt-10 text-center">
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

