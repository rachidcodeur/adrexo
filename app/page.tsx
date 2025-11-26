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

