'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Mail } from 'lucide-react'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const shapesRef = useRef<HTMLDivElement>(null)
  const waveRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    // Initialiser les éléments comme visibles par défaut
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 1, y: 0 })
    }
    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { opacity: 1, y: 0 })
    }
    if (buttonsRef.current) {
      gsap.set(buttonsRef.current.children, { opacity: 1, y: 0 })
    }

    // Animation du contenu au chargement
    const tl = gsap.timeline()
    
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
    }
    
    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      )
    }
    
    if (buttonsRef.current) {
      tl.fromTo(
        buttonsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.2,
        },
        '-=0.4'
      )
    }

    // Animations de fond avec GSAP
    if (shapesRef.current) {
      const shapes = shapesRef.current.children
      
      // Animation des formes flottantes (vertical uniquement pour éviter le scroll horizontal)
      Array.from(shapes).forEach((shape, index) => {
        const delay = index * 0.2
        const duration = 3 + Math.random() * 2
        const yMovement = 50 + Math.random() * 100
        const rotation = 360 * (Math.random() > 0.5 ? 1 : -1)
        
        gsap.to(shape, {
          y: `+=${yMovement}`,
          rotation: rotation,
          duration: duration,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: delay,
        })
        
        // Animation d'opacité pulsante
        gsap.to(shape, {
          opacity: 0.3 + Math.random() * 0.3,
          duration: 2 + Math.random() * 2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: delay,
        })
      })
    }

    // Animation du gradient de fond
    if (backgroundRef.current) {
      gsap.to(backgroundRef.current, {
        backgroundPosition: '200% 50%',
        duration: 20,
        ease: 'none',
        repeat: -1,
      })
    }

    // Animation de la vague organique
    if (waveRef.current) {
      const wave = waveRef.current
      const originalPath = 'M0,200 Q200,150 400,170 Q600,190 800,180 Q1000,170 1200,175 T1440,180 L1440,200 L0,200 Z'
      
      // Animation fluide de la vague au repos
      gsap.to(wave, {
        attr: {
          d: originalPath
        },
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    }

    // Animation de parallaxe et redressement de la vague au scroll
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = 400 // Distance de scroll pour que la vague soit complètement droite
      const progress = Math.min(scrolled / maxScroll, 1)
      
      if (shapesRef.current) {
        gsap.to(shapesRef.current, {
          y: scrolled * 0.3,
          ease: 'power1.out',
          duration: 0.5,
        })
      }
      
      if (waveRef.current) {
        const wave = waveRef.current
        const originalPath = 'M0,200 Q200,150 400,170 Q600,190 800,180 Q1000,170 1200,175 T1440,180 L1440,200 L0,200 Z'
        const straightPath = 'M0,200 L1440,200 L1440,200 L0,200 Z'
        
        // Interpolation fluide entre la forme organique et la ligne droite
        // Calculer les points de contrôle interpolés
        const easeProgress = progress * progress * (3 - 2 * progress) // Smoothstep pour une transition plus fluide
        
        if (easeProgress === 0) {
          // Forme organique complète
          gsap.set(wave, { attr: { d: originalPath } })
        } else if (easeProgress === 1) {
          // Ligne droite complète
          gsap.set(wave, { attr: { d: straightPath } })
        } else {
          // Interpolation progressive
          // Réduire progressivement les courbes jusqu'à obtenir une ligne droite
          const curveHeight = 50 * (1 - easeProgress)
          const x1 = 200 * (1 - easeProgress)
          const x2 = 400 * (1 - easeProgress)
          const x3 = 600 * (1 - easeProgress)
          const x4 = 800 * (1 - easeProgress)
          const x5 = 1000 * (1 - easeProgress)
          const x6 = 1200 * (1 - easeProgress)
          const x7 = 1440 * (1 - easeProgress)
          
          const y = 200 - curveHeight
          
          const intermediatePath = easeProgress < 0.95
            ? `M0,200 Q${x1},${y} ${x2},${y} Q${x3},${y} ${x4},${y} Q${x5},${y} ${x6},${y} T${x7},${y} L1440,200 L0,200 Z`
            : straightPath
          
          gsap.set(wave, { attr: { d: intermediatePath } })
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-primary pt-[188px] md:pt-[220px] pb-16 md:pb-24 overflow-hidden min-h-[600px] flex items-center">
      {/* Fond animé avec gradient */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, #7C3DC0 0%, #6A2BAE 25%, #4B1F7C 50%, #6A2BAE 75%, #7C3DC0 100%)',
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 50%',
        }}
      />

      {/* Formes géométriques animées */}
      <div ref={shapesRef} className="absolute inset-0 overflow-hidden">
        {/* Grand cercle */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-primary-light rounded-full opacity-25 blur-2xl" />
        <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-primary-pastel rounded-full opacity-15 blur-3xl" />
        
        {/* Formes géométriques */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white rounded-lg opacity-10 rotate-45" />
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-primary-light rounded-lg opacity-15 -rotate-12" />
        <div className="absolute top-1/2 right-10 w-40 h-40 bg-white rounded-full opacity-10" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary-pastel rounded-lg opacity-12 rotate-45" />
        
        {/* Petites particules */}
        <div className="absolute top-32 left-1/2 w-16 h-16 bg-white rounded-full opacity-15 blur-xl" />
        <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-primary-light rounded-full opacity-20 blur-xl" />
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-white rounded-full opacity-10 blur-lg" />
        <div className="absolute bottom-1/3 right-1/2 w-18 h-18 bg-primary-pastel rounded-full opacity-15 blur-xl" />
      </div>

      {/* Contenu */}
      <div className="section-container relative z-20 pb-24 md:pb-32">
        <h1
          ref={titleRef}
          className="text-white text-3xl md:text-4xl lg:text-h1 mb-6 max-w-4xl leading-tight drop-shadow-lg"
        >
          Distribution en boîtes aux lettres fiable, traçable et professionnelle
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-white text-base md:text-body mb-8 max-w-3xl opacity-95 drop-shadow-md"
        >
          Votre partenaire de confiance pour une distribution ciblée avec traçabilité GPS et garantie SOLO
        </p>
        
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={scrollToContact}
            className="btn-secondary bg-white text-primary border-2 border-white hover:bg-primary-pastel hover:scale-105 transition-transform duration-200"
          >
            <Mail className="inline-block mr-2 w-5 h-5" />
            Demander un devis gratuit
          </button>
        </div>
      </div>

      {/* Vague animée organique en bas */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-48 md:h-64">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            ref={waveRef}
            d="M0,200 Q200,150 400,170 Q600,190 800,180 Q1000,170 1200,175 T1440,180 L1440,200 L0,200 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
