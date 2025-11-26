'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
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
  const lastScrollY = useRef(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentScrollY = window.scrollY
          const isScrollingDown = currentScrollY > lastScrollY.current
          lastScrollY.current = currentScrollY

          if (entry.isIntersecting && isScrollingDown) {
            // Réinitialiser les éléments avant l'animation seulement en scrollant vers le bas
            if (titleRef.current) {
              gsap.set(titleRef.current, { opacity: 0, y: 80, scale: 0.9 })
            }
            if (cardsRef.current) {
              gsap.set(cardsRef.current.children, { opacity: 0, y: 100, scale: 0.8, rotation: -5 })
            }

            const tl = gsap.timeline()
            
            if (titleRef.current) {
              tl.to(
                titleRef.current,
                { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  duration: 1.2, 
                  ease: 'power3.out' 
                }
              )
            }
            
            if (cardsRef.current) {
              tl.to(
                cardsRef.current.children,
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotation: 0,
                  duration: 0.9,
                  ease: 'back.out(1.2)',
                  stagger: 0.12,
                },
                '-=0.6'
              )
            }
          } else if (entry.isIntersecting && !isScrollingDown) {
            // En remontant, garder les éléments visibles sans animation
            if (titleRef.current) {
              gsap.set(titleRef.current, { opacity: 1, y: 0, scale: 1 })
            }
            if (cardsRef.current) {
              gsap.set(cardsRef.current.children, { opacity: 1, y: 0, scale: 1, rotation: 0 })
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

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
