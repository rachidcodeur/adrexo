import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution de flyers et imprimés publicitaires à Paris | Adrexo.net',
  description:
    'Distribution de flyers, prospectus, journaux et tracts à Paris. Couverture des arrondissements, traçabilité et devis gratuit pour vos campagnes d\'imprimés publicitaires.',
}

const MAIRIE_PARIS_URL = 'https://www.paris.fr'

export default function DistributionFlyersParisPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      {/* 1. HERO — Image gauche, Texte + CTA droite */}
      <section className="pt-[160px] pb-[82px] bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Colonne texte */}
            <div className="order-1 lg:order-2">
              <h1 className="text-h1 text-primary mb-6">
                Distribution de flyers et d&apos;imprimés publicitaires à Paris
              </h1>

              {/* Image juste après le titre en mobile */}
              <div className="mb-6 rounded-[18px] overflow-hidden shadow-card lg:hidden">
                <Image
                  src="/images/villes/paris.avif"
                  alt="Distribution de flyers à Paris"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-body text-gray-dark mb-8">
                Adrexo.net assure la distribution d&apos;imprimés à Paris pour les entreprises, les collectivités et les institutions. Flyers, prospectus, journaux municipaux et tracts : une couverture fiable sur l&apos;ensemble des arrondissements avec suivi et traçabilité.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>

            {/* Colonne image uniquement pour desktop */}
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-2 lg:order-1 hidden lg:block">
              <Image
                src="/images/villes/paris.avif"
                alt="Distribution de flyers à Paris"
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

      {/* 2. Distribution de flyers et prospectus */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de flyers et prospectus à Paris
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20flyers%20et%20propectus.webp"
                alt="Distribution de flyers et prospectus à Paris"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                Créer de la visibilité dans l&apos;espace public parisien repose sur la capacité à intervenir là où les habitants circulent réellement. La distribution flyers et la distribution prospectus permettent de diffuser vos imprimés directement au contact du public, dans un contexte dynamique et dense. À Paris, cette approche s&apos;intègre à une ville rythmée par les déplacements quotidiens, la vie de quartier et l&apos;activité commerciale. La distribution d&apos;imprimés publicitaires s&apos;adapte à la diversité des arrondissements et aux contraintes de la capitale.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les opérations en main à main sont menées sur des zones stratégiques : centre-ville, Marais, Bastille, Belleville, abords des gares. La distribution d&apos;imprimés en boîtes aux lettres couvre les immeubles ciblés du 1er au 20e. Découvrez également notre expertise en{' '}
                <Link href="/street-marketing" className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors">
                  street marketing
                </Link>{' '}
                pour renforcer la notoriété au cœur de Paris.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Distribution de journaux municipaux */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de journaux municipaux
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distrinution%20journaux%20municipaux.webp"
                alt="Distribution de journal municipal à Paris"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                La distribution journal municipal et la distribution magazine municipal permettent à la Ville de Paris d&apos;informer les habitants de l&apos;actualité locale, des projets et des événements. À Paris, la communication institutionnelle repose sur une diffusion large et régulière des supports éditoriaux. Nous assurons une distribution complète et traçable dans les immeubles et boîtes aux lettres des secteurs définis, avec respect des fréquences et reporting détaillé. Pour les publications officielles, le site de la{' '}
                <a href={MAIRIE_PARIS_URL} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors">
                  Mairie de Paris
                </a>{' '}
                reste la référence.
              </p>
              <p className="text-body text-gray-dark mb-6">
                La distribution de journaux municipaux à Paris s&apos;appuie sur une connaissance fine des îlots et des copropriétés. Que ce soit pour un journal d&apos;arrondissement ou à l&apos;échelle de la capitale, nous adaptons les tournées. Notre offre{' '}
                <Link href="/distribution-journaux-municipaux" className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors">
                  distribution de journaux municipaux
                </Link>{' '}
                s&apos;étend à tout le territoire.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Distribution de magazines municipaux */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de magazines municipaux à Paris
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card">
              <Image
                src="/images/services%20villes/distri%20magazine%20municipal.webp"
                alt="Distribution de magazines municipaux à Paris"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-body text-gray-dark mb-6">
                La distribution magazine municipal accompagne la Ville de Paris et les mairies d&apos;arrondissement dans la diffusion de leurs publications périodiques. Programmes culturels, agendas des équipements, bulletins d&apos;information et dossiers thématiques : la distribution d&apos;imprimés publicitaires et institutionnels à Paris doit couvrir un tissu urbain dense et varié. Nous organisons les tournées par secteur, en respectant les calendriers de parution et les périmètres définis (arrondissement, groupe d&apos;arrondissements ou Paris entier), avec un reporting précis pour justifier de la bonne diffusion.
              </p>
              <p className="text-body text-gray-dark mb-6">
                La distribution d&apos;imprimés pour les magazines municipaux à Paris s&apos;adapte aux spécificités des immeubles, des zones piétonnes et des boîtes aux lettres collectives. Que vous éditions un magazine trimestriel ou un bulletin plus fréquent, nous assurons une livraison complète et traçable.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Distribution de tracts électoraux */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-gray-50">
        <div className="section-container">
          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts électoraux
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-[18px] overflow-hidden shadow-card order-1 lg:order-2">
              <Image
                src="/images/services%20villes/distribution%20tract%20electoral.webp"
                alt="Distribution de tracts électoraux à Paris"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-1">
              <p className="text-body text-gray-dark mb-6">
                La distribution tract en contexte électoral doit respecter un cadre légal strict et des délais serrés. À Paris, les campagnes s&apos;organisent par arrondissement, par circonscription ou à l&apos;échelle de la ville. Nous assurons la distribution d&apos;imprimés électoraux avec des équipes briefées et un suivi pour justifier la bonne diffusion. La distribution d&apos;imprimés pour les élections s&apos;adapte aux volumes, aux périmètres et aux dates de scrutin.
              </p>
              <p className="text-body text-gray-dark mb-6">
                Les opérations de distribution de tracts à Paris sont réalisées en boîtes aux lettres et en main à main dans le respect de la réglementation. Nous intervenons sur tous les arrondissements. En savoir plus sur notre service de{' '}
                <Link href="/distribution-tracts-municipaux" className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors">
                  distribution de tracts municipaux et électoraux
                </Link>{' '}
                sur tout le territoire.
              </p>
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Focus ville — SEO local */}
      <section className="py-11 md:py-[60px] lg:py-[100px] bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 text-primary mb-6">
              La distribution d&apos;imprimés à Paris
            </h2>
            <p className="text-body text-gray-dark mb-6">
              Paris présente une densité urbaine et une diversité de quartiers qui exigent une organisation adaptée pour la distribution de flyers, la distribution prospectus et la distribution d&apos;imprimés en général. Du centre (1er, 2e, 3e, 4e) aux arrondissements périphériques (18e, 19e, 20e), en passant par les quartiers d&apos;affaires (8e, 9e, 16e) et les zones résidentielles, nous couvrons l&apos;ensemble des secteurs avec des tournées optimisées. La distribution journal municipal et la distribution d&apos;imprimés publicitaires s&apos;appuient sur une bonne connaissance des flux et des typologies d&apos;habitat.
            </p>
            <p className="text-body text-gray-dark mb-6">
              Les institutions et la Ville de Paris peuvent s&apos;appuyer sur des prestataires spécialisés pour la diffusion de leurs supports. Pour découvrir les actualités et publications officielles, rendez-vous sur{' '}
              <a href={MAIRIE_PARIS_URL} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors">
                paris.fr
              </a>. Adrexo.net intervient sur Paris et l&apos;Île-de-France pour une distribution de tracts, de prospectus et de magazines professionnelle et traçable.
            </p>
            <div className="mt-10 text-center">
              <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
