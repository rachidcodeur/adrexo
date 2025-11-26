import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions d\'Utilisation | Adrexo.net',
  description: 'Conditions générales d\'utilisation des services Adrexo.net',
}

export default function ConditionsUtilisation() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-container pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 text-primary mb-8">Conditions d'Utilisation</h1>
          
          <div className="text-body text-gray-dark space-y-6">
            <p className="text-caption text-gray-medium mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">1. Objet</h2>
              <p>
                Les présentes Conditions d'Utilisation (« CGU ») régissent l'utilisation du site web Adrexo.net 
                (ci-après « le Site ») et des services de distribution en boîtes aux lettres proposés par Adrexo.net 
                (ci-après « les Services »).
              </p>
              <p>
                L'utilisation du Site et des Services implique l'acceptation pleine et entière des présentes CGU. 
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Site ni les Services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">2. Informations Légales</h2>
              <div className="bg-gray-verylight p-6 rounded-lg">
                <p className="font-semibold mb-2">Adrexo.net</p>
                <p>123 Rue de la Distribution</p>
                <p>75001 Paris, France</p>
                <p className="mt-2">SIRET : [Numéro SIRET]</p>
                <p>RCS : [Numéro RCS]</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">3. Définitions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>« Utilisateur »</strong> : toute personne accédant au Site</li>
                <li><strong>« Client »</strong> : toute personne ayant souscrit à nos Services</li>
                <li><strong>« Services »</strong> : services de distribution en boîtes aux lettres avec suivi GPS</li>
                <li><strong>« Contenu »</strong> : tous les éléments présents sur le Site (textes, images, logos, etc.)</li>
                <li><strong>« Données »</strong> : informations collectées et traitées dans le cadre des Services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">4. Accès au Site</h2>
              <p>
                L'accès au Site est gratuit. Adrexo.net se réserve le droit de modifier, suspendre ou interrompre 
                l'accès au Site à tout moment, sans préavis, notamment pour des raisons de maintenance, de mise à jour 
                ou de force majeure.
              </p>
              <p>
                L'Utilisateur est responsable de la configuration de son équipement informatique et de son accès à Internet. 
                Les frais de connexion sont à la charge de l'Utilisateur.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">5. Services Proposés</h2>
              <p>Adrexo.net propose des services de distribution en boîtes aux lettres incluant :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Distribution de documents publicitaires, prospectus et imprimés</li>
                <li>Suivi GPS en temps réel des tournées de distribution</li>
                <li>Garantie SOLO (distribution individuelle garantie)</li>
                <li>Traçabilité complète des opérations</li>
                <li>Rapports de distribution détaillés</li>
              </ul>
              <p className="mt-4">
                Les caractéristiques détaillées des Services sont disponibles sur le Site. Adrexo.net se réserve le droit 
                de modifier, suspendre ou interrompre tout ou partie des Services à tout moment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">6. Inscription et Compte Utilisateur</h2>
              <p>
                Pour utiliser certains Services, l'Utilisateur doit créer un compte en fournissant des informations 
                exactes, complètes et à jour. L'Utilisateur s'engage à :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fournir des informations exactes et véridiques</li>
                <li>Mettre à jour ses informations en cas de modification</li>
                <li>Maintenir la confidentialité de ses identifiants de connexion</li>
                <li>Être responsable de toutes les activités effectuées sous son compte</li>
                <li>Notifier immédiatement Adrexo.net en cas d'utilisation non autorisée de son compte</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">7. Commandes et Tarifs</h2>
              <p>
                Les tarifs des Services sont indiqués en euros, toutes taxes comprises (TTC). Adrexo.net se réserve 
                le droit de modifier ses tarifs à tout moment. Les tarifs applicables sont ceux en vigueur au moment 
                de la commande.
              </p>
              <p>
                Toute commande implique l'acceptation des tarifs et des conditions de vente en vigueur. La commande 
                est confirmée par l'envoi d'un email de confirmation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">8. Paiement</h2>
              <p>
                Le paiement s'effectue par les moyens de paiement acceptés sur le Site (carte bancaire, virement, etc.). 
                Le paiement est exigible à la commande ou selon les conditions convenues.
              </p>
              <p>
                En cas de défaut de paiement, Adrexo.net se réserve le droit de suspendre ou d'annuler la commande 
                et de réclamer des dommages et intérêts.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">9. Exécution des Services</h2>
              <p>
                Adrexo.net s'engage à exécuter les Services commandés dans les délais convenus et selon les 
                spécifications indiquées. Les délais de livraison sont donnés à titre indicatif et ne constituent 
                pas un engagement ferme.
              </p>
              <p>
                En cas de retard ou d'impossibilité d'exécution, Adrexo.net informera le Client dans les plus brefs 
                délais. Le Client pourra alors annuler sa commande et obtenir le remboursement des sommes versées.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">10. Obligations du Client</h2>
              <p>Le Client s'engage à :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fournir des informations exactes concernant les zones de distribution</li>
                <li>Respecter la réglementation en vigueur concernant la distribution publicitaire</li>
                <li>Ne pas utiliser les Services à des fins illégales ou frauduleuses</li>
                <li>Respecter les droits de propriété intellectuelle d'Adrexo.net</li>
                <li>Ne pas perturber le fonctionnement du Site ou des Services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">11. Propriété Intellectuelle</h2>
              <p>
                Le Site et son Contenu (textes, images, logos, graphismes, etc.) sont la propriété exclusive d'Adrexo.net 
                ou de ses partenaires et sont protégés par les lois françaises et internationales relatives à la propriété 
                intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie du Site ou 
                de son Contenu est strictement interdite sans autorisation écrite préalable d'Adrexo.net.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">12. Données Personnelles</h2>
              <p>
                Le traitement des données personnelles collectées dans le cadre de l'utilisation du Site et des Services 
                est régi par notre <a href="/politique-de-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">13. Responsabilité</h2>
              <p>
                Adrexo.net s'efforce d'assurer la disponibilité et le bon fonctionnement du Site et des Services. 
                Cependant, Adrexo.net ne peut garantir :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>L'absence d'interruptions ou d'erreurs</li>
                <li>L'absence de virus ou d'éléments nuisibles</li>
                <li>La sécurité absolue des transmissions de données</li>
              </ul>
              <p className="mt-4">
                La responsabilité d'Adrexo.net ne pourra être engagée en cas de dommages directs ou indirects résultant 
                de l'utilisation ou de l'impossibilité d'utiliser le Site ou les Services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">14. Force Majeure</h2>
              <p>
                Adrexo.net ne pourra être tenu responsable de tout retard ou défaillance dans l'exécution de ses obligations 
                résultant de circonstances indépendantes de sa volonté, notamment en cas de force majeure, de grève, de 
                panne technique, d'interruption des réseaux de télécommunication, etc.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">15. Liens Hypertextes</h2>
              <p>
                Le Site peut contenir des liens vers d'autres sites web. Adrexo.net n'exerce aucun contrôle sur ces sites 
                et décline toute responsabilité quant à leur contenu ou leur accessibilité.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">16. Modification des CGU</h2>
              <p>
                Adrexo.net se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en 
                vigueur dès leur publication sur le Site. Il appartient à l'Utilisateur de consulter régulièrement les CGU. 
                L'utilisation continue du Site après modification des CGU vaut acceptation des nouvelles conditions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">17. Droit de Rétractation</h2>
              <p>
                Conformément à la législation en vigueur, le Client dispose d'un délai de 14 jours calendaires à compter 
                de la commande pour exercer son droit de rétractation, sous réserve que les Services n'aient pas encore 
                été entièrement exécutés.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">18. Réclamations et Médiation</h2>
              <p>
                En cas de réclamation, le Client peut contacter Adrexo.net via le formulaire de contact disponible sur notre site.
              </p>
              <p>
                Conformément aux articles L.611-1 et R.612-1 et suivants du Code de la consommation, le Client a le droit 
                de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige qui 
                l'oppose à Adrexo.net.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">19. Droit Applicable et Juridiction</h2>
              <p>
                Les présentes CGU sont régies par le droit français. En cas de litige et à défaut d'accord amiable, 
                le litige sera porté devant les tribunaux compétents de Paris.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">20. Contact</h2>
              <p>
                Pour toute question concernant les présentes Conditions d'Utilisation, contactez-nous :
              </p>
              <div className="bg-gray-verylight p-6 rounded-lg mt-4">
                <p className="font-semibold mb-2">Adrexo.net</p>
                <p className="mt-2">123 Rue de la Distribution<br />75001 Paris, France</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

