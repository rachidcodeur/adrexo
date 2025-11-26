import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Adrexo.net',
  description: 'Politique de confidentialité d\'Adrexo.net - Protection de vos données personnelles',
}

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-container pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 text-primary mb-8">Politique de Confidentialité</h1>
          
          <div className="text-body text-gray-dark space-y-6">
            <p className="text-caption text-gray-medium mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">1. Introduction</h2>
              <p>
                Adrexo.net (« nous », « notre », « nos ») s'engage à protéger la confidentialité de vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations 
                personnelles lorsque vous utilisez notre site web et nos services de distribution en boîtes aux lettres.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">2. Données Collectées</h2>
              <p>Nous collectons les types de données suivants :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone, adresse postale</li>
                <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de visite</li>
                <li><strong>Données de commande :</strong> historique des commandes, informations de facturation, adresses de livraison</li>
                <li><strong>Données techniques :</strong> données GPS pour le suivi des livraisons, horodatage des opérations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">3. Utilisation des Données</h2>
              <p>Nous utilisons vos données personnelles pour :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Traiter et gérer vos commandes de distribution</li>
                <li>Assurer le suivi GPS et la traçabilité de vos envois</li>
                <li>Vous contacter concernant vos commandes et nos services</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Vous envoyer des communications marketing (avec votre consentement)</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">4. Base Légale du Traitement</h2>
              <p>Nous traitons vos données personnelles sur la base de :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Exécution d'un contrat :</strong> pour la fourniture de nos services de distribution</li>
                <li><strong>Consentement :</strong> pour les communications marketing et l'utilisation de cookies non essentiels</li>
                <li><strong>Obligation légale :</strong> pour respecter nos obligations comptables et fiscales</li>
                <li><strong>Intérêt légitime :</strong> pour améliorer nos services et prévenir la fraude</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">5. Partage des Données</h2>
              <p>
                Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos données avec :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Prestataires de services :</strong> prestataires de livraison, services de paiement, hébergeurs</li>
                <li><strong>Autorités légales :</strong> si requis par la loi ou une ordonnance judiciaire</li>
                <li><strong>Partenaires commerciaux :</strong> uniquement avec votre consentement explicite</li>
              </ul>
              <p>
                Tous nos partenaires sont tenus de respecter la confidentialité de vos données et de se conformer au RGPD.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">6. Conservation des Données</h2>
              <p>
                Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire pour les finalités 
                pour lesquelles elles ont été collectées :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Données de commande :</strong> 10 ans (obligation légale comptable)</li>
                <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                <li><strong>Données GPS :</strong> 6 mois après la livraison</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">7. Vos Droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous via le formulaire de contact disponible sur notre site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">8. Sécurité des Données</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données 
                personnelles contre tout accès non autorisé, perte, destruction ou altération :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Chiffrement SSL/TLS pour toutes les transmissions de données</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegardes régulières et sécurisées</li>
                <li>Formation du personnel à la protection des données</li>
                <li>Surveillance et détection des incidents de sécurité</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">9. Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience. Pour plus d'informations, 
                consultez notre <a href="/politique-de-cookies" className="text-primary hover:underline">Politique de Cookies</a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">10. Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications seront publiées sur cette page avec une date de mise à jour révisée.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">11. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles, 
                contactez-nous :
              </p>
              <div className="bg-gray-verylight p-6 rounded-lg mt-4">
                <p className="font-semibold mb-2">Adrexo.net</p>
                <p className="mt-2">Contactez-nous via le formulaire disponible sur notre site.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">12. Réclamation</h2>
              <p>
                Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, 
                vous avez le droit d'introduire une réclamation auprès de l'autorité de contrôle compétente :
              </p>
              <div className="bg-gray-verylight p-6 rounded-lg mt-4">
                <p className="font-semibold mb-2">CNIL (Commission Nationale de l'Informatique et des Libertés)</p>
                <p>3 Place de Fontenoy - TSA 80715<br />75334 Paris Cedex 07</p>
                <p>Téléphone : 01 53 73 22 22</p>
                <p>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

