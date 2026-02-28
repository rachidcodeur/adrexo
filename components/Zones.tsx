'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { MapPin } from 'lucide-react'

const regions = [
  { name: 'Île-de-France', cities: ['Paris', 'Boulogne-Billancourt', 'Saint-Denis', 'Argenteuil', 'Montreuil', 'Nanterre'] },
  { name: 'Auvergne-Rhône-Alpes', cities: ['Lyon', 'Saint-Étienne', 'Grenoble', 'Clermont-Ferrand', 'Annecy', 'Valence'] },
  { name: 'Grand Est', cities: ['Strasbourg', 'Metz', 'Nancy', 'Mulhouse', 'Reims', 'Colmar'] },
  { name: 'Nouvelle-Aquitaine', cities: ['Bordeaux', 'Pau', 'Limoges', 'Poitiers', 'La Rochelle', 'Bayonne'] },
  { name: 'Pays de la Loire', cities: ['Nantes', 'Angers', 'Le Mans', 'Saint-Nazaire', 'Laval', 'Cholet'] },
  { name: 'Normandie', cities: ['Le Havre', 'Rouen', 'Caen', 'Cherbourg-en-Cotentin', 'Évreux', 'Dieppe'] },
  { name: 'Occitanie', cities: ['Toulouse', 'Montpellier', 'Nîmes', 'Perpignan', 'Béziers', 'Albi'] },
  { name: 'Bretagne', cities: ['Rennes', 'Brest', 'Quimper', 'Lorient', 'Vannes', 'Saint-Brieuc'] },
  { name: 'Centre-Val de Loire', cities: ['Orléans', 'Tours', 'Bourges', 'Blois', 'Châteauroux', 'Chartres'] },
  { name: "Provence-Alpes-Côte d'Azur", cities: ['Marseille', 'Aix-en-Provence', 'Nice', 'Cannes', 'Toulon', 'Avignon'] },
  { name: 'Hauts-de-France', cities: ['Lille', 'Amiens', 'Roubaix', 'Tourcoing', 'Dunkerque', 'Calais'] },
  { name: 'Bourgogne-Franche-Comté', cities: ['Dijon', 'Besançon', 'Chalon-sur-Saône', 'Auxerre', 'Mâcon', 'Belfort'] },
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
          Nos mairies d&apos;intervention
        </h2>
        
        <p className="text-body text-gray-dark mb-12 max-w-3xl">
          Une couverture nationale par régions : découvrez les grandes villes où nous intervenons pour la distribution de vos imprimés.
        </p>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          {regions.map((region, index) => (
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
                  <h3 className="text-body text-primary font-bold">{region.name}</h3>
                </div>
                <p className="text-body-sm text-gray-dark">
                  {region.cities.map((city, i) => (
                    <span key={city}>
                      {city === 'Paris' ? (
                        <Link
                          href="/distribution-flyers-paris"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Paris
                        </Link>
                      ) : city === 'Bordeaux' ? (
                        <Link
                          href="/distribution-flyers-bordeaux"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Bordeaux
                        </Link>
                      ) : (
                        city
                      )}
                      {i < region.cities.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-body text-gray-dark mt-12 text-center">
          Votre ville n&apos;est pas listée ? Contactez-nous pour être orienté ou pour affiner votre distribution dans votre secteur.
        </p>
      </div>
    </section>
  )
}
