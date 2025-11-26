'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Atouts from '@/components/Atouts'
import Services from '@/components/Services'
import WhyChoose from '@/components/WhyChoose'
import Zones from '@/components/Zones'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Security from '@/components/Security'

export default function Home() {
  useEffect(() => {
    // Gérer le scroll vers la section si un hash est présent dans l'URL
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash) {
        // Attendre que le DOM soit complètement chargé
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1))
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Atouts />
      <Services />
      <WhyChoose />
      <Zones />
      <Testimonials />
      <ContactForm />
      <Security />
    </main>
  )
}

