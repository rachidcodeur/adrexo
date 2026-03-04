'use client'

import { useRef } from 'react'
import Link from 'next/link'

const reasons = [
  {
    title: 'Expertise Reconnue',
    description: 'Héritiers de l\'expérience Adrexo, nous maîtrisons parfaitement les enjeux de la distribution professionnelle en boîtes aux lettres.',
  },
  {
    title: 'Technologie de Pointe',
    description: 'Système de traçabilité GPS et plateforme digitale innovante pour un suivi en temps réel de vos campagnes.',
  },
  {
    title: 'Distribution SOLO Garantie',
    description: 'Un seul distributeur par zone pour une qualité optimale et une cohérence parfaite de votre distribution.',
  },
  {
    title: 'Couverture Nationale',
    description: 'Présent dans toutes les régions de France métropolitaine avec un réseau de distributeurs qualifiés.',
  },
  {
    title: 'Tarifs Compétitifs',
    description: 'Offres transparentes et adaptées à tous les budgets, sans frais cachés ni surprises.',
  },
  {
    title: 'Support Client Réactif',
    description: 'Équipe dédiée disponible pour répondre à vos besoins et vous accompagner dans vos projets.',
  },
  {
    title: 'Résultats Mesurables',
    description: 'Rapports détaillés et statistiques de distribution pour évaluer l\'efficacité de vos campagnes.',
  },
  {
    title: 'Engagement Qualité',
    description: 'Garantie satisfaction et suivi qualité rigoureux pour vous assurer un service irréprochable.',
  },
]

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={sectionRef} className="section-spacing bg-primary">
      <div className="section-container">
        <h2 ref={titleRef} className="text-h2 text-white mb-5 relative">
          Pourquoi Choisir Adrexo.net?
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-white"></span>
        </h2>
        
        <p className="text-body text-white mb-12 max-w-3xl opacity-95">
          8 raisons qui font de nous votre partenaire de confiance. Nous assurons également la{' '}
          <Link href="/distribution-tracts-municipaux" className="text-white font-semibold underline underline-offset-2 hover:opacity-90 transition-opacity">
            distribution de tracts municipaux
          </Link>{' '}
          pour les mairies et collectivités.
        </p>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-primary rounded-2xl p-6 border-2 transition-all duration-300 hover:-translate-y-1 card-shadow"
              style={{ borderColor: '#d1b7ef' }}
            >
              {/* Cercle avec numéro */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">{index + 1}</span>
              </div>
              
              {/* Titre */}
              <h3 className="text-h4 text-white mb-3 font-bold">
                {reason.title}
              </h3>
              
              {/* Description */}
              <p className="text-body-sm text-white opacity-95 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
