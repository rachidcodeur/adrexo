'use client'

import { useRef } from 'react'
import { User, Shield, Briefcase, MapPin, CheckCircle, Clock } from 'lucide-react'

const atouts = [
  {
    icon: User,
    title: 'Distribution SOLO',
    description: 'Une seule personne par zone pour garantir la cohérence et la qualité de votre distribution.',
  },
  {
    icon: MapPin,
    title: 'Traçabilité GPS',
    description: 'Suivez en temps réel chaque distribution avec notre système de géolocalisation avancé.',
  },
  {
    icon: Briefcase,
    title: 'Accompagnement',
    description: 'Un conseiller dédié vous accompagne de la planification à la réalisation de votre campagne.',
  },
  {
    icon: Shield,
    title: 'Garantie Qualité',
    description: 'Engagement qualité avec vérification systématique et garantie de satisfaction.',
  },
  {
    icon: CheckCircle,
    title: 'Rapidité d\'Exécution',
    description: 'Délais optimisés pour répondre à vos urgences et respecter vos contraintes temporelles.',
  },
  {
    icon: Clock,
    title: 'Disponibilité 7/7',
    description: 'Service client disponible toute la semaine pour répondre à vos besoins et questions.',
  },
]

export default function Atouts() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  return (
    <section id="atouts" ref={sectionRef} className="section-spacing bg-gray-verylight">
      <div className="section-container">
        <h2 ref={titleRef} className="section-title">
          Nos Atouts Professionnels
        </h2>
        
        <p className="text-body text-gray-dark mb-12 max-w-3xl">
          Découvrez ce qui fait d'Adrexo.net le partenaire idéal pour vos campagnes de distribution
        </p>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {atouts.map((atout, index) => {
            const Icon = atout.icon
            return (
              <div key={index} className="card bg-white">
                <div className="w-14 h-14 bg-primary-pastel rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-h4 text-primary mb-3">{atout.title}</h3>
                <p className="text-body-sm text-gray-dark">{atout.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
