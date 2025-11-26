'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Lock, Shield, ShieldCheck, FileCheck } from 'lucide-react'

const securityFeatures = [
  {
    icon: Lock,
    title: 'Connexion HTTPS Sécurisée',
    description: 'Toutes les communications sont cryptées via un protocole SSL/TLS sécurisé.',
  },
  {
    icon: Shield,
    title: 'Hébergement Sécurisé',
    description: 'Nos serveurs sont protégés et surveillés 24/7 pour garantir la sécurité de vos données.',
  },
  {
    icon: ShieldCheck,
    title: 'Protection Anti-Spam',
    description: 'Système avancé de protection contre les spams et les tentatives d\'intrusion.',
  },
  {
    icon: FileCheck,
    title: 'Conformité RGPD',
    description: 'Respect strict du Règlement Général sur la Protection des Données (RGPD).',
  },
]

export default function Security() {
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
              gsap.set(cardsRef.current.children, { opacity: 0, y: 90, scale: 0.8 })
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
                  duration: 0.9,
                  ease: 'back.out(1.3)',
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
              gsap.set(cardsRef.current.children, { opacity: 1, y: 0, scale: 1 })
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
    <section ref={sectionRef} className="section-spacing bg-gray-verylight">
      <div className="section-container">
        <h2 ref={titleRef} className="section-title">
          Sécurité & Confidentialité
        </h2>
        
        <p className="text-body text-gray-dark mb-12 max-w-3xl">
          Vos données sont plus que jamais au centre de nos préoccupations
        </p>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="card bg-white">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #9A5DD0 0%, #7C3DC0 50%, #6A2BAE 100%)',
                  }}
                >
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-h4 text-primary mb-3">{feature.title}</h3>
                <p className="text-body-sm text-gray-dark">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
