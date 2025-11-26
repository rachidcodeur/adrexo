'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    text: 'Service exceptionnel ! La traçabilité GPS nous a permis de suivre notre campagne en temps réel. Résultats au-delà de nos attentes.',
    author: 'Marie Dubois',
    role: 'Directrice Marketing, TechCorp',
  },
  {
    text: 'Adrexo.net a su s\'adapter à nos besoins spécifiques. Distribution professionnelle et équipe réactive. Je recommande vivement !',
    author: 'Jean Martin',
    role: 'Gérant, Boutique Moderne',
  },
  {
    text: 'Enfin un service de distribution moderne et fiable. La garantie SOLO nous rassure et les résultats sont mesurables. Parfait !',
    author: 'Sophie Bernard',
    role: 'Responsable Communication, Ville de Lyon',
  },
  {
    text: 'Une équipe à l\'écoute et des résultats concrets. La distribution a été effectuée dans les temps avec un suivi impeccable.',
    author: 'Pierre Lefebvre',
    role: 'Directeur Commercial, Entreprise Plus',
  },
  {
    text: 'Excellent rapport qualité-prix. Le suivi GPS est un vrai plus pour nos campagnes marketing. Service irréprochable !',
    author: 'Claire Moreau',
    role: 'Responsable Marketing, Retail Pro',
  },
  {
    text: 'Adrexo.net a transformé notre façon de communiquer. Distribution rapide, traçable et professionnelle. Nous sommes très satisfaits.',
    author: 'Thomas Petit',
    role: 'CEO, Startup Innovante',
  },
  {
    text: 'Un service de qualité avec un suivi exemplaire. La distribution GPS nous permet de vérifier chaque étape. Très professionnel !',
    author: 'Isabelle Rousseau',
    role: 'Directrice Marketing, Groupe Retail',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)

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
              gsap.set(titleRef.current, { opacity: 0, y: 80, scale: 0.9, x: 0 })
            }
            if (sliderRef.current) {
              gsap.set(sliderRef.current, { opacity: 0, y: 60 })
            }

            const tl = gsap.timeline()
            
            if (titleRef.current) {
              tl.to(
                titleRef.current,
                { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  x: 0,
                  duration: 1.2, 
                  ease: 'power3.out' 
                }
              )
            }
            
            if (sliderRef.current) {
              tl.to(
                sliderRef.current,
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: 'power3.out',
                },
                '-=0.6'
              )
            }
          } else if (entry.isIntersecting && !isScrollingDown) {
            // En remontant, garder les éléments visibles sans animation
            if (titleRef.current) {
              gsap.set(titleRef.current, { opacity: 1, y: 0, scale: 1, x: 0 })
            }
            if (sliderRef.current) {
              gsap.set(sliderRef.current, { opacity: 1, y: 0 })
            }
          }
        })
      },
      { threshold: 0.2 }
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

  useEffect(() => {
    if (trackRef.current) {
      const cards = trackRef.current.children
      
      // Animation fluide du slider - centrer la carte active au milieu
      // Chaque carte fait 33.33% de la largeur du container, on déplace d'une carte à la fois
      gsap.to(trackRef.current, {
        x: `-${currentIndex * (100 / 3)}%`,
        duration: 0.8,
        ease: 'power3.inOut',
      })

      // Animation des cartes individuelles avec effet de focus sur celle du milieu
      Array.from(cards).forEach((card, index) => {
        const distance = Math.abs(index - currentIndex)
        const isActive = index === currentIndex
        const isAdjacent = distance === 1 // Cartes à gauche et droite
        
        gsap.to(card, {
          opacity: isActive ? 1 : (isAdjacent ? 0.4 : 0.2),
          scale: isActive ? 1 : 0.92,
          y: isActive ? 0 : 0,
          duration: 0.6,
          ease: 'power2.out',
        })
      })
    }
  }, [currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section ref={sectionRef} className="section-spacing bg-gray-verylight">
      <div className="section-container">
        <h2 ref={titleRef} className="section-title">
          Ils Nous Font Confiance
        </h2>
        
        <p className="text-body text-gray-dark mb-12 max-w-3xl">
          Découvrez les témoignages de nos clients satisfaits
        </p>
        
        <div ref={sliderRef} className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden relative max-w-7xl mx-auto">
            <div 
              ref={trackRef}
              className="flex"
              style={{ width: `${testimonials.length * (100 / 3)}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `calc(100% / 3)` }}
                >
                  <div className="card bg-white h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <Quote className="w-12 h-12 text-primary mb-4" />
                    
                    <p className="text-body-sm text-gray-dark mb-6">{testimonial.text}</p>
                    
                    <div>
                      <p className="text-body-sm font-semibold text-primary">{testimonial.author}</p>
                      <p className="text-caption text-gray-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-primary hover:text-white transition-colors z-10"
            aria-label="Avis précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-primary hover:text-white transition-colors z-10"
            aria-label="Avis suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-light hover:bg-primary-pastel'
                }`}
                aria-label={`Aller à l'avis ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
