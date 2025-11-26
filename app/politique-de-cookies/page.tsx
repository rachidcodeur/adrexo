import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Cookies | Adrexo.net',
  description: 'Politique de cookies d\'Adrexo.net - Utilisation des cookies sur notre site',
}

export default function PolitiqueCookies() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-container pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 text-primary mb-8">Politique de Cookies</h1>
          
          <div className="text-body text-gray-dark space-y-6">
            <p className="text-caption text-gray-medium mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">1. Qu'est-ce qu'un Cookie ?</h2>
              <p>
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) 
                lors de la visite d'un site web. Il permet au site de reconnaître votre navigateur et de mémoriser 
                certaines informations vous concernant.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">2. Types de Cookies Utilisés</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-h4 text-primary font-semibold mb-2">2.1. Cookies Strictement Nécessaires</h3>
                  <p>
                    Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés. 
                    Ils sont généralement définis en réponse à des actions que vous effectuez et qui équivalent à 
                    une demande de services, comme la définition de vos préférences de confidentialité, la connexion 
                    ou le remplissage de formulaires.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Nom :</strong> session_id</li>
                    <li><strong>Durée :</strong> Session</li>
                    <li><strong>Finalité :</strong> Maintien de la session utilisateur</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-h4 text-primary font-semibold mb-2">2.2. Cookies de Performance</h3>
                  <p>
                    Ces cookies nous permettent de compter les visites et les sources de trafic afin d'améliorer 
                    les performances de notre site. Ils nous aident à savoir quelles pages sont les plus et le moins 
                    populaires et à voir comment les visiteurs naviguent sur le site.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Nom :</strong> analytics_id</li>
                    <li><strong>Durée :</strong> 13 mois</li>
                    <li><strong>Finalité :</strong> Analyse du trafic et du comportement des utilisateurs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-h4 text-primary font-semibold mb-2">2.3. Cookies de Fonctionnalité</h3>
                  <p>
                    Ces cookies permettent au site de fournir des fonctionnalités et une personnalisation améliorées. 
                    Ils peuvent être définis par nous ou par des fournisseurs tiers dont nous avons ajouté les services 
                    à nos pages.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Nom :</strong> preferences</li>
                    <li><strong>Durée :</strong> 12 mois</li>
                    <li><strong>Finalité :</strong> Mémorisation de vos préférences (langue, région)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-h4 text-primary font-semibold mb-2">2.4. Cookies de Ciblage</h3>
                  <p>
                    Ces cookies peuvent être définis sur notre site par nos partenaires publicitaires. Ils peuvent 
                    être utilisés par ces entreprises pour établir un profil de vos intérêts et vous montrer des 
                    publicités pertinentes sur d'autres sites.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Nom :</strong> marketing_id</li>
                    <li><strong>Durée :</strong> 6 mois</li>
                    <li><strong>Finalité :</strong> Personnalisation des publicités (avec votre consentement)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">3. Cookies Tiers</h2>
              <p>
                Certains cookies sont placés par des services tiers qui apparaissent sur nos pages. Nous n'avons 
                aucun contrôle sur ces cookies tiers. Voici les principaux services tiers que nous utilisons :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics :</strong> Analyse du trafic et du comportement des visiteurs</li>
                <li><strong>Google Maps :</strong> Affichage de cartes interactives pour les zones de distribution</li>
                <li><strong>Réseaux sociaux :</strong> Partage de contenu sur les réseaux sociaux</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">4. Durée de Conservation</h2>
              <p>Les cookies que nous utilisons ont différentes durées de vie :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies de session :</strong> Supprimés à la fermeture du navigateur</li>
                <li><strong>Cookies persistants :</strong> Conservés jusqu'à leur date d'expiration ou jusqu'à ce que vous les supprimiez</li>
                <li><strong>Durée maximale :</strong> 13 mois conformément aux recommandations de la CNIL</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">5. Gestion de Vos Cookies</h2>
              <p>
                Vous avez le contrôle sur les cookies. Vous pouvez les accepter, les refuser ou les supprimer. 
                Voici comment procéder :
              </p>
              
              <div className="bg-gray-verylight p-6 rounded-lg mt-4 space-y-4">
                <div>
                  <h3 className="text-h4 text-primary font-semibold mb-2">5.1. Paramètres du Navigateur</h3>
                  <p className="mb-2">Vous pouvez configurer votre navigateur pour :</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Accepter tous les cookies</li>
                    <li>Refuser tous les cookies</li>
                    <li>Vous avertir avant l'installation d'un cookie</li>
                    <li>Supprimer les cookies existants</li>
                  </ul>
                  <p className="mt-2 text-body-sm">
                    <strong>Note :</strong> La désactivation des cookies peut affecter certaines fonctionnalités du site.
                  </p>
                </div>

                <div>
                  <h3 className="text-h4 text-primary font-semibold mb-2">5.2. Liens vers les Paramètres des Navigateurs</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-995b-2a3ac0b5fe52" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-h4 text-primary font-semibold mb-2">5.3. Bandeau de Consentement</h3>
                  <p>
                    Lors de votre première visite, un bandeau vous permet de choisir quels types de cookies vous acceptez. 
                    Vous pouvez modifier vos préférences à tout moment en cliquant sur le lien "Gérer les cookies" 
                    en bas de la page.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">6. Conséquences du Refus des Cookies</h2>
              <p>
                Si vous choisissez de désactiver les cookies, certaines fonctionnalités du site peuvent ne pas fonctionner 
                correctement :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Impossibilité de mémoriser vos préférences</li>
                <li>Nécessité de vous reconnecter à chaque visite</li>
                <li>Perte de certaines fonctionnalités personnalisées</li>
                <li>Expérience utilisateur dégradée</li>
              </ul>
              <p className="mt-2">
                <strong>Important :</strong> Les cookies strictement nécessaires ne peuvent pas être désactivés car ils 
                sont essentiels au fonctionnement du site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">7. Cookies et Données Personnelles</h2>
              <p>
                Certains cookies peuvent collecter des données personnelles. Ces données sont traitées conformément à 
                notre <a href="/politique-de-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a> 
                et au RGPD.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">8. Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de cookies à tout moment. Les modifications 
                seront publiées sur cette page avec une date de mise à jour révisée. Nous vous encourageons à consulter 
                régulièrement cette page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-h3 text-primary font-semibold">9. Contact</h2>
              <p>
                Pour toute question concernant notre utilisation des cookies, contactez-nous :
              </p>
              <div className="bg-gray-verylight p-6 rounded-lg mt-4">
                <p className="font-semibold mb-2">Adrexo.net</p>
                <p className="mt-2">Contactez-nous via le formulaire disponible sur notre site.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

