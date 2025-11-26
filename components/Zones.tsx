'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MapPin } from 'lucide-react'

const zones = [
  { name: 'Île-de-France', departments: ['75', '77', '78', '91', '92', '93', '94', '95'] },
  { name: 'Auvergne-Rhône-Alpes', departments: ['01', '03', '07', '15', '26', '38', '42', '43', '63', '69', '73', '74'] },
  { name: 'Provence-Alpes-Côte d\'Azur', departments: ['04', '05', '06', '13', '83', '84'] },
  { name: 'Nouvelle-Aquitaine', departments: ['16', '17', '19', '23', '24', '33', '40', '47', '64', '79', '86', '87'] },
  { name: 'Occitanie', departments: ['09', '11', '12', '30', '31', '32', '34', '46', '48', '65', '66', '81', '82'] },
  { name: 'Hauts-de-France', departments: ['02', '59', '60', '62', '80'] },
  { name: 'Grand Est', departments: ['08', '10', '51', '52', '54', '55', '57', '67', '68', '88'] },
  { name: 'Normandie', departments: ['14', '27', '50', '61', '76'] },
  { name: 'Bretagne', departments: ['22', '29', '35', '56'] },
  { name: 'Pays de la Loire', departments: ['44', '49', '53', '72', '85'] },
  { name: 'Centre-Val de Loire', departments: ['18', '28', '36', '37', '41', '45'] },
  { name: 'Bourgogne-Franche-Comté', departments: ['21', '25', '39', '58', '70', '71', '89', '90'] },
]

export default function Zones() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
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
              gsap.set(cardsRef.current.children, { opacity: 0, y: 80, scale: 0.85 })
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
                  duration: 0.8,
                  ease: 'back.out(1.3)',
                  stagger: 0.08,
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

    // Animation des particules/boules
    if (particlesRef.current) {
      const particles = particlesRef.current.children
      
      Array.from(particles).forEach((particle, index) => {
        const delay = index * 0.2
        const duration = 3 + Math.random() * 2
        const yMovement = 100 + Math.random() * 150
        
        // Animation de mouvement (vertical uniquement pour éviter le scroll horizontal)
        gsap.to(particle, {
          y: `+=${yMovement}`,
          duration: duration,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: delay,
        })
        
        // Animation de rotation
        gsap.to(particle, {
          rotation: 360,
          duration: 4 + Math.random() * 3,
          ease: 'none',
          repeat: -1,
          delay: delay,
        })
        
        // Animation d'opacité
        gsap.to(particle, {
          opacity: 0.2 + Math.random() * 0.3,
          duration: 2 + Math.random() * 2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: delay,
        })
      })
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="zones" ref={sectionRef} className="section-spacing bg-white relative overflow-hidden">
      {/* Particules animées en arrière-plan */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Boules animées */}
        {[...Array(15)].map((_, index) => {
          const size = 30 + Math.random() * 50
          const initialX = Math.random() * 100
          const initialY = Math.random() * 100
          
          return (
            <div
              key={index}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${initialX}%`,
                top: `${initialY}%`,
                backgroundColor: '#9A5DD0',
                opacity: 0.35 + Math.random() * 0.25,
                filter: 'blur(10px)',
              }}
            />
          )
        })}
      </div>
      
      <div className="section-container relative z-10">
        <h2 ref={titleRef} className="section-title">
          Nos Zones de Distribution
        </h2>
        
        <p className="text-body text-gray-dark mb-12 max-w-3xl">
          Une couverture nationale pour distribuer tous vos supports de distribution
        </p>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          {zones.map((zone, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden flex backdrop-blur-md bg-white/70 border border-white/20 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 100%)',
              }}
            >
              {/* Barre violette à gauche */}
              <div className="w-1 bg-primary flex-shrink-0"></div>
              
              {/* Contenu */}
              <div className="flex-1 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="text-body text-primary font-bold">{zone.name}</h3>
                </div>
                <p className="text-body-sm text-gray-dark">
                  {zone.departments.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-body text-gray-dark mt-12 text-center">
          Votre zone n'est pas listée ? Contactez-nous pour être orienté ou pour affiner votre distribution dans votre secteur.
        </p>
      </div>
    </section>
  )
}
