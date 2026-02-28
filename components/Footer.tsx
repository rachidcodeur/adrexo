'use client'

import Link from 'next/link'

export default function Footer() {
  const scrollToSection = (id: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-primary pt-20 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* ADREXO */}
          <div>
            <h3 className="text-h4 text-white mb-4">ADREXO</h3>
            <p className="text-body-sm text-white opacity-90">
              Votre partenaire de confiance pour une distribution en boîtes aux lettres 
              fiable, traçable et professionnelle avec GPS et garantie SOLO.
            </p>
          </div>
          
          {/* Nos services */}
          <div>
            <h4 className="text-body font-semibold text-white mb-4">Nos services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/street-marketing"
                  className="text-body-sm text-white opacity-90 hover:text-gray-200 transition-colors"
                >
                  Street marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/distribution-tracts-municipaux"
                  className="text-body-sm text-white opacity-90 hover:text-gray-200 transition-colors"
                >
                  Distribution de tract municipal
                </Link>
              </li>
              <li>
                <Link
                  href="/distribution-journaux-municipaux"
                  className="text-body-sm text-white opacity-90 hover:text-gray-200 transition-colors"
                >
                  Distribution de journal municipal
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Liens Rapides */}
          <div>
            <h4 className="text-body font-semibold text-white mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-body-sm text-white opacity-90 hover:text-gray-200 transition-colors"
                >
                  Nos Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('atouts')}
                  className="text-body-sm text-white opacity-90 hover:text-gray-200 transition-colors"
                >
                  Nos Atouts
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('zones')}
                  className="text-body-sm text-white opacity-90 hover:text-gray-200 transition-colors"
                >
                  Nos Zones
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-body-sm text-white opacity-90 hover:text-gray-200 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Informations Légales */}
          <div>
            <h4 className="text-body font-semibold text-white mb-4">Informations Légales</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/politique-de-confidentialite" className="text-body-sm text-white opacity-90 hover:text-gray-200 transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/politique-de-cookies" className="text-body-sm text-white opacity-90 hover:text-gray-200 transition-colors">
                  Politique de Cookies
                </Link>
              </li>
              <li>
                <Link href="/conditions-d-utilisation" className="text-body-sm text-white opacity-90 hover:text-gray-200 transition-colors">
                  Conditions d'Utilisation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 pt-6 pb-2 text-center">
          <p className="text-caption text-white mb-2">
            © 2023 Adrexo.net. Tous droits réservés.
          </p>
          <p className="text-xs text-white">
            Adrexo.net est une filiale de FRANCE DISTRIBUTION
          </p>
        </div>
      </div>
    </footer>
  )
}

