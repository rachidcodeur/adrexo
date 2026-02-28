import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribution tracts municipaux | Mairies & collectivités | Adrexo.net',
  description:
    'Distribution de tracts municipaux en boîtes aux lettres : concertation, enquête publique, événements. Mairies et intercommunalités, partout en France. Devis gratuit.',
}

export default function DistributionTractsMunicipauxPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      <div className="section-container pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 text-primary mb-8">
            Distribution de tracts municipaux
          </h1>

          <p className="text-body text-gray-dark mb-8">
            La distribution de tracts municipaux permet aux mairies et aux collectivités de
            diffuser rapidement une information ciblée auprès de leurs administrés : concertation,
            enquête publique, événement, campagne de prévention ou communication ponctuelle. Un
            tract municipal bien distribué assure une visibilité immédiate et une couverture
            homogène des secteurs définis.
          </p>

          <div className="mb-10">
            <Image
              src="/images/distri%20tract%20municipal.webp"
              alt="Distribution de tracts municipaux en boîtes aux lettres par Adrexo pour mairies et collectivités"
              width={1200}
              height={675}
              className="w-full h-auto rounded-[18px] shadow-card object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 60vw"
            />
          </div>

          <p className="text-body text-gray-dark mb-10">
            Nous assurons la distribution de tracts municipaux en boîtes aux lettres sur
            l’ensemble du territoire français, avec des équipes formées, des tournées
            structurées et un suivi précis. Pour une communication régulière auprès de vos
            administrés, nous proposons aussi la{' '}
            <Link href="/distribution-journaux-municipaux" className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors">
              distribution de journaux et bulletins municipaux
            </Link>. Notre activité s’inscrit dans une offre plus large de{' '}
            <Link href="/street-marketing" className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors">
              street marketing
            </Link>{' '}
            et de distribution de proximité. Que ce soit pour une opération ponctuelle ou
            récurrente, vous bénéficiez d’une diffusion fiable et traçable adaptée aux besoins
            des collectivités.
          </p>

          <div className="my-10 text-center">
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Demander un devis gratuit
            </Link>
          </div>

          <h2 className="text-h2 text-primary mb-6">
            À quoi sert la distribution de tracts municipaux
          </h2>

          <h3 className="text-h3 text-primary mb-3">
            Informer et mobiliser les habitants
          </h3>
          <p className="text-body text-gray-dark mb-6">
            Le tract municipal est un support léger et direct pour annoncer une réunion publique,
            une consultation, un projet d’aménagement ou une campagne de sensibilisation. La
            distribution en boîtes aux lettres garantit que l’information arrive chez chaque foyer
            concerné, sans dépendre des canaux numériques ou de la présence en mairie. Idéal pour
            les sujets qui nécessitent une large diffusion et une bonne lecture par les citoyens.
          </p>

          <h3 className="text-h3 text-primary mb-3">
            Respect des délais et des périmètres
          </h3>
          <p className="text-body text-gray-dark mb-10">
            Les opérations de concertation ou d’enquête publique sont encadrées par des dates
            précises. Une distribution professionnelle de tracts municipaux permet de respecter
            le calendrier et de couvrir exactement les zones prévues (commune entière, quartiers
            ciblés, secteurs impactés par un projet). Vous disposez d’un retour terrain et d’un
            bilan de distribution pour justifier de la bonne diffusion de l’information.
          </p>

          <h2 className="text-h2 text-primary mb-6">
            Distribution de tracts municipaux : une expertise au service des collectivités
          </h2>

          <h3 className="text-h3 text-primary mb-3">
            Mairies et communes
          </h3>
          <p className="text-body text-gray-dark mb-6">
            Les mairies font régulièrement appel à des prestataires pour la distribution de
            tracts d’information : réunions de quartier, budgets participatifs, travaux, fêtes
            locales, prévention, etc. Nous intervenons sur des périmètres définis ensemble, avec
            un nombre d’exemplaires adapté au nombre de foyers et un planning aligné sur vos
            contraintes. La distribution en boîtes aux lettres assure une couverture complète et
            un dépôt soigné dans chaque boîte.
          </p>

          <h3 className="text-h3 text-primary mb-3">
            Communautés de communes et intercommunalités
          </h3>
          <p className="text-body text-gray-dark mb-10">
            Les structures intercommunales ont besoin de relayer des informations à l’échelle de
            plusieurs communes. La distribution de tracts municipaux sur un territoire élargi
            demande une organisation rigoureuse et une répartition claire des tournées. Nous
            mettons en place un plan de distribution adapté à la géographie et au nombre de
            boîtes aux lettres, avec un suivi par secteur pour un reporting précis.
          </p>

          <h2 className="text-h2 text-primary mb-6">
            Comment se déroule une opération de distribution de tracts municipaux
          </h2>

          <h3 className="text-h3 text-primary mb-3">
            Définition du périmètre et des volumes
          </h3>
          <p className="text-body text-gray-dark mb-6">
            Nous définissons avec vous les secteurs à couvrir, le nombre de tracts à distribuer
            et la date de l’opération. Un devis est établi en fonction du nombre de boîtes aux
            lettres, de la complexité des tournées et des délais. Vous recevez une proposition
            claire et un planning de réalisation.
          </p>

          <h3 className="text-h3 text-primary mb-3">
            Réalisation et suivi
          </h3>
          <p className="text-body text-gray-dark mb-10">
            La distribution de tracts municipaux est réalisée par des équipes encadrées et
            formées aux bonnes pratiques (dépôt en boîte aux lettres, respect des consignes,
            couverture complète). Un bilan de distribution vous est remis à l’issue de
            l’opération, pour une traçabilité et une justification vis-à-vis des élus et des
            administrés.
          </p>

          <h2 className="text-h2 text-primary mb-6">
            Avantages d’une distribution professionnelle pour vos tracts municipaux
          </h2>

          <p className="text-body text-gray-dark mb-6">
            Confier la distribution de vos tracts municipaux à un partenaire spécialisé vous
            permet de vous concentrer sur le contenu et le message, tout en vous assurant que
            chaque exemplaire est bien déposé dans les boîtes aux lettres des zones prévues.
            Vous bénéficiez d’une couverture fiable, d’un suivi transparent et d’une intervention
            partout en France, avec des équipes habituées aux spécificités de la communication
            publique locale.
          </p>

          <p className="text-body text-gray-dark mb-10">
            La distribution de tracts municipaux fait partie des compétences d’Adrexo.net. Nous
            intervenons pour les mairies et les intercommunalités qui souhaitent une diffusion
            professionnelle, ponctuelle ou récurrente, adaptée à leurs besoins d’information et
            de concertation.
          </p>

          <h2 className="text-h2 text-primary mb-6">
            Demandez un devis pour la distribution de vos tracts municipaux
          </h2>

          <p className="text-body text-gray-dark mb-6">
            Que vous prépariez une concertation, une enquête publique, un événement ou une
            campagne d’information, nous pouvons vous proposer une offre adaptée à votre
            périmètre, vos volumes et vos délais. Un devis personnalisé vous permet de budgétiser
            votre opération et de planifier sereinement la diffusion de vos tracts municipaux.
          </p>

          <p className="text-body text-gray-dark mb-8">
            Contactez-nous pour échanger sur votre projet de distribution de tracts municipaux.
            Notre équipe vous accompagne de la définition du périmètre jusqu’au bilan de
            distribution.
          </p>

          <p className="text-body text-gray-dark font-semibold mb-6">
            Parlons de votre projet de distribution de tracts municipaux.{' '}
            <span className="text-primary">
              Demandez un devis gratuit pour une couverture fiable et un suivi transparent sur
              l’ensemble du territoire.
            </span>
          </p>

          <div className="mt-4 text-center">
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center hover:text-white">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
