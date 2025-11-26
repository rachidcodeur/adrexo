'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Import dynamique de GSAP pour éviter les problèmes SSR
    if (typeof window !== 'undefined' && headerRef.current) {
      import('gsap').then(({ gsap }) => {
        // Initialiser le header comme visible par défaut
        gsap.set(headerRef.current, { opacity: 1, y: 0 })
        
        // Animation d'entrée
        gsap.fromTo(
          headerRef.current,
          {
            y: -100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
          }
        )
      })
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 h-20 bg-white border-b border-gray-light"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-[120px] h-full flex items-center justify-between relative">
        <Link href="/" className="text-2xl font-bold text-primary">
          ADREXO
        </Link>
        
        {/* Desktop Navigation - Centré */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('services')}
            className="text-body-sm text-gray-dark hover:text-primary transition-colors"
          >
            Nos Services
          </button>
          <button
            onClick={() => scrollToSection('atouts')}
            className="text-body-sm text-gray-dark hover:text-primary transition-colors"
          >
            Nos Atouts
          </button>
          <button
            onClick={() => scrollToSection('zones')}
            className="text-body-sm text-gray-dark hover:text-primary transition-colors"
          >
            Nos Zones
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-body-sm text-gray-dark hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary bg-primary text-white text-[16px] px-[18px] py-[13px] hover:bg-primary-dark"
          >
            Contactez-nous
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-dark hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-light py-4">
          <div className="max-w-[1320px] mx-auto px-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-body-sm text-gray-dark hover:text-primary transition-colors text-left"
            >
              Nos Services
            </button>
            <button
              onClick={() => scrollToSection('atouts')}
              className="text-body-sm text-gray-dark hover:text-primary transition-colors text-left"
            >
              Nos Atouts
            </button>
            <button
              onClick={() => scrollToSection('zones')}
              className="text-body-sm text-gray-dark hover:text-primary transition-colors text-left"
            >
              Nos Zones
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-body-sm text-gray-dark hover:text-primary transition-colors text-left"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary text-sm px-[18px] py-[10px] w-fit"
            >
              Contact
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}

