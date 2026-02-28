import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Street Marketing France | Distribution flyers & prospectus | Adrexo.net',
  description:
    'Street marketing en France : distribution de flyers, prospectus, tracts et journaux municipaux. Ciblage précis, couverture nationale, suivi terrain. Devis gratuit.',
}

export default function StreetMarketingPage() {
  return (
    <div className="street-marketing-page min-h-screen bg-white">
      <div className="section-container pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 text-primary mb-8">
            Expert du Street Marketing en France
          </h1>

          <p className="text-body text-gray-dark mb-8">
            Dans un paysage où l’attention est saturée par les écrans, le street marketing redevient un
            levier décisif pour toucher vos publics là où ils vivent, se déplacent et consomment
            réellement. La distribution de documents en main à main, en boîtes aux lettres ou sur des
            zones de passage stratégique permet de créer une présence physique forte, concrète et
            mémorisable.
          </p>

          <div className="mb-10">
            <Image
              src="/images/street-marketing.webp"
              alt="Opération de street marketing Adrexo : distribution de flyers et prospectus en France"
              width={1200}
              height={675}
              className="w-full h-auto rounded-[18px] shadow-card object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 60vw"
            />
          </div>

          <p className="text-body text-gray-dark mb-10">
            Notre équipe accompagne les entreprises, les collectivités et les institutions dans la mise
            en place de campagnes de street marketing partout en France, en combinant précision du
            ciblage, visibilité locale et suivi rigoureux des opérations terrain.
          </p>

          {/* Appel à l'action intermédiaire */}
          <div className="my-10 text-center">
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center">
              Demander un devis gratuit
            </Link>
          </div>

          <h2 className="text-h2 text-primary mb-6">
            Pourquoi le street marketing reste un levier puissant
          </h2>

          <h3 className="text-h3 text-primary mb-3">Recréer du lien direct avec vos publics</h3>
          <p className="text-body text-gray-dark mb-6">
            Le street marketing permet de dépasser le simple contact numérique pour renouer avec une
            communication de proximité, physique et tangible. Un flyer remis en main propre, un
            prospectus découvert dans une boîte aux lettres, un journal municipal ou un bulletin
            distribué dans un hall d’immeuble : autant de moments où votre message s’invite réellement
            dans le quotidien de votre cible.
          </p>

          <p className="text-body text-gray-dark mb-8">
            Cette approche renforce la mémorisation de votre message, la perception de proximité avec
            votre marque ou votre institution et la confiance, grâce à une présence visible sur le
            terrain. Bien pensée, une campagne de street marketing de proximité devient un prolongement
            naturel de vos actions digitales, en apportant la dimension humaine qui fait souvent la
            différence.
          </p>

          <h3 className="text-h3 text-primary mb-3">
            Un levier idéal pour les campagnes locales et nationales
          </h3>
          <p className="text-body text-gray-dark mb-10">
            Qu’il s’agisse de lancer une nouvelle offre commerciale, d’annoncer un événement, de
            diffuser des informations institutionnelles ou de communiquer des tracts électoraux, le
            street marketing offre une grande flexibilité. Il s’adapte à tous les contextes&nbsp;:
            campagnes locales ultra ciblées sur un quartier précis, déploiement national harmonisé de
            distribution de flyers ou de prospectus, ou encore communication via la{' '}
            <Link href="/distribution-journaux-municipaux" className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors">
              distribution de journaux municipaux et de bulletins municipaux
            </Link>.
          </p>

          <h2 className="text-h2 text-primary mb-6">
            Nos solutions de distribution de supports de communication
          </h2>

          <h3 className="text-h3 text-primary mb-3">
            Distribution de flyers, prospectus et tracts électoraux
          </h3>
          <p className="text-body text-gray-dark mb-6">
            La distribution de flyers et de prospectus reste un pilier du street marketing de proximité.
            Notre rôle est de transformer ce support simple en outil performant. Nous sélectionnons les
            zones de passage les plus pertinentes&nbsp;: sorties de transports, zones commerciales,
            flux piétons, abords de lieux de vie. Selon vos objectifs, nous organisons des opérations
            de distribution main à main ou en boîtes aux lettres, afin de maximiser le taux de contact
            utile.
          </p>

          <p className="text-body text-gray-dark mb-8">
            Nous prenons également en charge la distribution de tracts électoraux dans le respect
            strict des contraintes réglementaires et des délais liés aux périodes de campagne. Chaque
            opération est encadrée, briefée et suivie pour garantir la cohérence de votre image et la
            qualité de la diffusion.
          </p>

          <h3 className="text-h3 text-primary mb-3">
            Journaux et bulletins municipaux&nbsp;: informer efficacement vos administrés
          </h3>
          <p className="text-body text-gray-dark mb-10">
            Pour les collectivités et institutions, la bonne circulation de l’information est
            essentielle. Nous assurons la distribution de journaux municipaux et de bulletins municipaux
            en veillant à une couverture complète des secteurs définis, une diffusion régulière selon
            votre calendrier éditorial et un suivi de distribution précis. Votre communication
            institutionnelle gagne ainsi en portée, en lisibilité et en crédibilité.
          </p>

          <h2 className="text-h2 text-primary mb-6">
            Street marketing pour entreprises, collectivités et campagnes institutionnelles
          </h2>

          <h3 className="text-h3 text-primary mb-3">
            Entreprises&nbsp;: booster vos ventes et votre visibilité locale
          </h3>
          <p className="text-body text-gray-dark mb-6">
            Pour les enseignes, réseaux et entreprises, nos campagnes de street marketing France
            permettent de générer du trafic en point de vente, soutenir un lancement de produit ou de
            service et renforcer la présence de marque sur un territoire précis. Chaque opération de
            distribution de prospectus ou de flyers est construite en cohérence avec vos objectifs
            commerciaux et votre image.
          </p>

          <h3 className="text-h3 text-primary mb-3">
            Collectivités et institutions&nbsp;: renforcer le lien avec les citoyens
          </h3>
          <p className="text-body text-gray-dark mb-6">
            Les mairies, communautés de communes, institutions publiques et organismes para-publics
            s’appuient sur nos services de distribution de documents pour diffuser des informations
            pratiques et citoyennes, relayer des consultations, événements publics ou campagnes de
            prévention. Nous assurons aussi la{' '}
            <Link href="/distribution-tracts-municipaux" className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors">
              distribution de tracts municipaux
            </Link>{' '}
            pour les communications ponctuelles. La distribution de bulletins municipaux et de journaux municipaux reste un
            levier efficace pour maintenir un lien de proximité avec les habitants.
          </p>

          <h3 className="text-h3 text-primary mb-3">Campagnes électorales&nbsp;: visibilité et rigueur</h3>
          <p className="text-body text-gray-dark mb-10">
            Dans le cadre de campagnes électorales, la distribution de tracts électoraux doit être à la
            fois massive, ciblée et juridiquement sécurisée. Nous vous accompagnons sur le choix des
            zones de distribution, le respect des règles de diffusion et le suivi des volumes distribués
            pour que votre campagne de proximité soit à la fois visible, maîtrisée et conforme.
          </p>

          <h2 className="text-h2 text-primary mb-6">
            Une couverture nationale avec une approche locale
          </h2>

          <p className="text-body text-gray-dark mb-6">
            Nous intervenons sur l’ensemble du territoire français en gardant toujours une logique de
            street marketing de proximité. Notre force repose sur une coordination centrale unique pour
            vos campagnes nationales et sur des équipes terrain formées, encadrées et réparties sur tout
            le territoire.
          </p>

          <p className="text-body text-gray-dark mb-10">
            Grâce à une connaissance fine des spécificités locales (typologie d’habitat, flux piétons,
            profils socio-démographiques), chaque campagne de distribution de documents est déclinée en
            fonction des réalités de terrain, tout en respectant un cadre et des standards homogènes sur
            toute la France.
          </p>

          <h2 className="text-h2 text-primary mb-6">Notre méthode et notre savoir-faire terrain</h2>

          <h3 className="text-h3 text-primary mb-3">
            Une démarche structurée, de la préparation au reporting
          </h3>
          <p className="text-body text-gray-dark mb-6">
            Chaque campagne suit un processus clair&nbsp;: analyse de vos objectifs, définition du
            dispositif de distribution de flyers, prospectus ou journaux municipaux, planification des
            dates et zones d’intervention, encadrement des équipes terrain, suivi en temps réel et
            bilan détaillé en fin d’opération. Vous disposez ainsi d’une vision complète de la portée et
            de l’impact de votre campagne de street marketing.
          </p>

          <h3 className="text-h3 text-primary mb-3">Des équipes formées et encadrées</h3>
          <p className="text-body text-gray-dark mb-10">
            Nos distributeurs sont sélectionnés et encadrés pour garantir une présentation
            professionnelle, une diffusion sérieuse et méthodique des documents et un comportement
            irréprochable vis-à-vis du public et de l’environnement urbain. Cette exigence nous permet
            d’assurer un street marketing fiable, durable et respecté sur le terrain.
          </p>

          <h2 className="text-h2 text-primary mb-6">
            Pourquoi nous confier votre campagne de street marketing
          </h2>

          <p className="text-body text-gray-dark mb-6">
            Confier votre campagne de street marketing à un spécialiste, c’est sécuriser votre
            investissement et maximiser l’impact de vos messages. Vous bénéficiez d’une expertise dédiée
            en distribution de flyers, de prospectus, de journaux municipaux et de tracts électoraux,
            d’une couverture nationale avec une forte capacité d’adaptation locale, d’un ciblage précis
            et d’un suivi sérieux de chaque opération.
          </p>

          <p className="text-body text-gray-dark mb-10">
            Notre accompagnement couvre l’ensemble de votre campagne de proximité&nbsp;: conseils en
            amont, construction du plan de diffusion, optimisation en fonction de vos objectifs et
            de vos contraintes, reporting en fin de campagne et recommandations pour vos futures
            opérations.
          </p>

          <h2 className="text-h2 text-primary mb-6">
            Lancez votre campagne de street marketing partout en France
          </h2>

          <p className="text-body text-gray-dark mb-6">
            Le street marketing reste l’un des leviers les plus efficaces pour créer un contact réel,
            tangible et mémorisable avec vos publics. En combinant distribution de flyers, distribution
            de prospectus, diffusion de journaux municipaux et campagnes de tracts électoraux, vous
            renforcez votre visibilité locale tout en pilotant une stratégie cohérente à l’échelle
            nationale.
          </p>

          <p className="text-body text-gray-dark mb-8">
            Si vous souhaitez mettre en place une campagne de proximité performante, maîtrisée et
            suivie, nous sommes à votre disposition pour vous accompagner de la réflexion stratégique
            jusqu’à la distribution sur le terrain.
          </p>

          <p className="text-body text-gray-dark font-semibold mb-6">
            Parlons de votre projet de street marketing en France.{' '}
            <span className="text-primary">
              Contactez-nous dès maintenant pour obtenir un devis personnalisé et concevoir une campagne
              efficace, adaptée à vos objectifs et à votre budget.
            </span>
          </p>

          <div className="mt-4 text-center">
            <Link href="/#contact" className="btn-primary inline-flex items-center justify-center">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

