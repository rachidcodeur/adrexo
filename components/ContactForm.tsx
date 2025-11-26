'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Send, Shield, FileText, Search, Phone } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    sujet: '',
    ville: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')
  
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
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
            if (formRef.current) {
              gsap.set(formRef.current.children, { opacity: 0, y: 60, scale: 0.95 })
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
            
            if (formRef.current) {
              tl.to(
                formRef.current.children,
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.8,
                  ease: 'back.out(1.2)',
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
            if (formRef.current) {
              gsap.set(formRef.current.children, { opacity: 1, y: 0, scale: 1 })
            }
            if (stepsRef.current) {
              gsap.set(stepsRef.current.children, { opacity: 1, y: 0, scale: 1 })
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Animation des étapes en boucle
    if (stepsRef.current) {
      const steps = stepsRef.current.children
      
      Array.from(steps).forEach((step, index) => {
        const delay = index * 0.3
        
        // Animation d'entrée
        gsap.fromTo(
          step,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: delay,
          }
        )

        // Animation continue de pulsation pour les cercles
        const circle = step.querySelector('.step-circle')
        if (circle) {
          gsap.to(circle, {
            scale: 1.1,
            duration: 2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: delay + 0.5,
          })
        }
      })
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Vérifier que les variables d'environnement sont définies
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        throw new Error('Supabase n\'est pas configuré. Vérifiez que NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY sont définis dans votre fichier .env.local et redémarrez le serveur.')
      }

      const { data, error } = await supabase
        .from('adrexo_contact_submissions')
        .insert([
          {
            nom: formData.nom,
            telephone: formData.telephone,
            email: formData.email,
            sujet: formData.sujet,
            ville: formData.ville,
            message: formData.message,
          },
        ])
        .select()

      if (error) {
        console.error('Error submitting form:', error)
        
        // Messages d'erreur plus explicites
        let errorMsg = 'Une erreur est survenue lors de l\'envoi.'
        
        if (error.code === 'PGRST116') {
          errorMsg = 'La table n\'existe pas dans la base de données. Vérifiez que la migration SQL a été exécutée.'
        } else if (error.code === '42501') {
          errorMsg = 'Permission refusée. Vérifiez les politiques RLS dans Supabase.'
        } else if (error.message) {
          errorMsg = `Erreur: ${error.message}`
        }
        
        setErrorMessage(errorMsg)
        setSubmitStatus('error')
        return
      }

      setSubmitStatus('success')
      setFormData({
        nom: '',
        telephone: '',
        email: '',
        sujet: '',
        ville: '',
        message: '',
      })
    } catch (error: any) {
      console.error('Error submitting form:', error)
      
      let errorMsg = 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.'
      
      if (error?.message) {
        errorMsg = error.message
      } else if (typeof error === 'string') {
        errorMsg = error
      }
      
      setErrorMessage(errorMsg)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="section-spacing bg-white">
      <div className="section-container">
        <h2 ref={titleRef} className="section-title">
          Demandez Votre Devis Gratuit
        </h2>
        
        <p className="text-body text-gray-dark mb-12 max-w-3xl">
          Remplissez le formulaire ci-dessous et recevez une offre personnalisée sous 24h
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-[18px] shadow-2xl p-10 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="nom" className="block text-body-sm text-gray-dark mb-2">
                Nom Complet *
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                required
                value={formData.nom}
                onChange={handleChange}
                className="input-field w-full bg-gray-50"
                placeholder="Votre nom complet"
              />
            </div>
            
            <div>
              <label htmlFor="telephone" className="block text-body-sm text-gray-dark mb-2">
                Téléphone *
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                required
                value={formData.telephone}
                onChange={handleChange}
                className="input-field w-full bg-gray-50"
                placeholder="06 12 34 56 78"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-body-sm text-gray-dark mb-2">
                Votre Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="input-field w-full bg-gray-50"
                placeholder="votre@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="sujet" className="block text-body-sm text-gray-dark mb-2">
                Sujet *
              </label>
              <input
                type="text"
                id="sujet"
                name="sujet"
                required
                value={formData.sujet}
                onChange={handleChange}
                className="input-field w-full bg-gray-50"
                placeholder="Sujet de votre demande"
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="ville" className="block text-body-sm text-gray-dark mb-2">
                Ville de distribution *
              </label>
              <input
                type="text"
                id="ville"
                name="ville"
                required
                value={formData.ville}
                onChange={handleChange}
                className="input-field w-full bg-gray-50"
                placeholder="Ville où vous souhaitez distribuer"
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-body-sm text-gray-dark mb-2">
                Votre message / Détails du projet *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="input-field w-full resize-none bg-gray-50"
                placeholder="Décrivez votre projet de distribution..."
              />
            </div>
          </div>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              Votre demande a été envoyée avec succès ! Nous vous répondrons sous 24h.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
              <p className="font-semibold mb-1">Erreur lors de l'envoi</p>
              <p className="text-sm">{errorMessage || 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.'}</p>
              <p className="text-xs mt-2 opacity-75">Vérifiez la console du navigateur (F12) pour plus de détails.</p>
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full md:w-auto"
          >
            <Send className="inline-block mr-2 w-5 h-5" />
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </button>
          
          <p className="text-caption text-gray-medium mt-4 flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Vos données sont 100% sécurisées et confidentielles.
          </p>
        </form>

        {/* Étapes du processus */}
        <div ref={stepsRef} className="space-y-8">
          <h3 className="text-h3 text-primary mb-8">Comment ça marche ?</h3>
          
          {/* Étape 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="step-circle w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">1</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-6 h-6 text-primary" />
                <h4 className="text-h4 text-primary">Demander un devis</h4>
              </div>
              <p className="text-body-sm text-gray-dark">
                Remplissez le formulaire avec vos informations et décrivez votre projet de distribution.
              </p>
            </div>
          </div>

          {/* Ligne de connexion */}
          <div className="ml-7 border-l-2 border-primary-pastel h-8"></div>

          {/* Étape 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="step-circle w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">2</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Search className="w-6 h-6 text-primary" />
                <h4 className="text-h4 text-primary">Analyse de votre besoin</h4>
              </div>
              <p className="text-body-sm text-gray-dark">
                Notre équipe étudie votre demande et prépare une solution personnalisée adaptée à vos besoins.
              </p>
            </div>
          </div>

          {/* Ligne de connexion */}
          <div className="ml-7 border-l-2 border-primary-pastel h-8"></div>

          {/* Étape 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="step-circle w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">3</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-6 h-6 text-primary" />
                <h4 className="text-h4 text-primary">Nous vous rappelons</h4>
              </div>
              <p className="text-body-sm text-gray-dark">
                Un conseiller vous contacte sous 24h pour discuter de votre projet et vous proposer une offre sur mesure.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
