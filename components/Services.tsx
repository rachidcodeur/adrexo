'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ShoppingCart, Building, Briefcase, Printer } from 'lucide-react'

const services = [
  {
    icon: ShoppingCart,
    title: 'Distribution pour Commerçants & Artisans',
    description: [
      'Distribution ciblée dans votre zone de chalandise',
      'Supports publicitaires et flyers',
      'Promotions et offres spéciales',
      'Relance client personnalisée',
    ],
  },
  {
    icon: Building,
    title: 'Distribution pour Collectivités',
    description: [
      'Bulletins municipaux et communications officielles',
      'Informations sur les services publics',
      'Événements locaux et animations',
      'Campagnes de sensibilisation',
    ],
  },
  {
    icon: Briefcase,
    title: 'Distribution Ciblée pour Entreprises',
    description: [
      'Campagnes marketing B2B et B2C',
      'Lancements de produits',
      'Newsletters et catalogues',
      'Stratégies de communication sur mesure',
    ],
  },
  {
    icon: Printer,
    title: 'Impression & Création Graphique',
    description: [
      'Conception graphique de vos supports',
      'Impression haute qualité',
      'Conseil en design et mise en page',
      'Service clé en main',
    ],
  },
]

export default function Services() {
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
              gsap.set(cardsRef.current.children, { opacity: 0, y: 120, scale: 0.75, rotation: -8 })
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
                  duration: 1,
                  ease: 'back.out(1.4)',
                  stagger: 0.18,
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
    <section id="services" ref={sectionRef} className="section-spacing bg-white">
      <div className="section-container">
        <h2 ref={titleRef} className="section-title">
          Nos Services Professionnels
        </h2>
        
        <p className="text-body text-gray-dark mb-12 max-w-3xl">
          Des solutions adaptées à chaque besoin professionnel
        </p>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index} 
                className="bg-white rounded-[18px] shadow-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                style={{
                  border: '1px solid #e8e8e8',
                  boxSizing: 'border-box'
                }}
              >
                <div className="w-14 h-14 bg-primary-pastel rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-h4 text-primary mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="text-body-sm text-gray-dark flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
