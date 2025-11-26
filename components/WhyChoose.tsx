'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

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
              gsap.set(cardsRef.current.children, { opacity: 0, scale: 0.7, y: 60 })
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
                  scale: 1,
                  y: 0,
                  duration: 0.9,
                  ease: 'back.out(1.4)',
                  stagger: 0.1,
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
              gsap.set(cardsRef.current.children, { opacity: 1, scale: 1, y: 0 })
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
    <section ref={sectionRef} className="section-spacing bg-primary">
      <div className="section-container">
        <h2 ref={titleRef} className="text-h2 text-white mb-5 relative">
          Pourquoi Choisir Adrexo.net?
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-white"></span>
        </h2>
        
        <p className="text-body text-white mb-12 max-w-3xl opacity-95">
          8 raisons qui font de nous votre partenaire de confiance
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
