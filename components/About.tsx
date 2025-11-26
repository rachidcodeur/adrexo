'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
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
            if (contentRef.current) {
              gsap.set(contentRef.current.children, { opacity: 0, y: 60, scale: 0.95 })
            }
            if (imageRef.current) {
              gsap.set(imageRef.current, { opacity: 0, y: 60, scale: 0.9 })
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
            
            if (contentRef.current) {
              tl.to(
                contentRef.current.children,
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.9,
                  ease: 'power3.out',
                  stagger: 0.15,
                },
                '-=0.6'
              )
            }

            if (imageRef.current) {
              tl.to(
                imageRef.current,
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 1,
                  ease: 'power3.out',
                },
                '-=0.8'
              )
            }
          } else if (entry.isIntersecting && !isScrollingDown) {
            // En remontant, garder les éléments visibles sans animation
            if (titleRef.current) {
              gsap.set(titleRef.current, { opacity: 1, y: 0, scale: 1 })
            }
            if (contentRef.current) {
              gsap.set(contentRef.current.children, { opacity: 1, y: 0, scale: 1 })
            }
            if (imageRef.current) {
              gsap.set(imageRef.current, { opacity: 1, y: 0, scale: 1 })
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
    <section ref={sectionRef} className="section-spacing bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-6">
            <h2 ref={titleRef} className="section-title mb-6">
              Adrexo.net: L'évolution moderne de la distribution professionnelle
            </h2>
            <p className="text-body text-gray-dark">
              Adrexo.net représente l'évolution moderne de la distribution professionnelle en boîtes aux lettres. 
              Nous avons transformé un service traditionnel en une solution technologique avancée, offrant à nos 
              clients une expérience transparente, fiable et traçable.
            </p>
            
            <p className="text-body text-gray-dark">
              Notre approche combine l'expertise humaine de nos distributeurs qualifiés avec les dernières 
              innovations technologiques, notamment le suivi GPS en temps réel. Chaque distribution est 
              enregistrée, géolocalisée et vérifiée, garantissant une traçabilité totale de vos campagnes.
            </p>
            
            <p className="text-body text-gray-dark">
              Nous proposons des solutions sur mesure, adaptées à votre secteur d'activité et vos objectifs marketing. 
              La qualité et la satisfaction client sont au cœur de notre mission, avec une garantie SOLO qui assure 
              qu'une seule personne distribue vos documents dans chaque zone.
            </p>
          </div>
          
          <div ref={imageRef} className="relative w-full rounded-[18px] overflow-hidden shadow-card">
            <Image
              src="/images/bal-distrib.webp"
              alt="Distribution professionnelle en boîtes aux lettres"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
