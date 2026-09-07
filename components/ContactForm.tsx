'use client'

import { useState, useRef } from 'react'
import { Send, Shield, FileText, Search, Phone } from 'lucide-react'

const EMPTY_FORM = {
  nom: '',
  telephone: '',
  email: '',
  sujet: '',
  adresse: '',
  cp: '',
  ville: '',
  message: '',
}

export default function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

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
      // Le lead part vers l'API HomeService (et l'archive Supabase) via notre route serveur.
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          page: typeof window !== 'undefined' ? window.location.pathname : '',
        }),
      })

      const result = await response.json().catch(() => null)

      if (!response.ok) {
        setErrorMessage(result?.error || 'Une erreur est survenue lors de l\'envoi.')
        setSubmitStatus('error')
        return
      }

      setSubmitStatus('success')
      setFormData(EMPTY_FORM)
    } catch (error: any) {
      console.error('Error submitting form:', error)
      setErrorMessage(
        'Envoi impossible. Vérifiez votre connexion puis réessayez, ou contactez-nous directement.'
      )
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
            
            <div>
              <label htmlFor="adresse" className="block text-body-sm text-gray-dark mb-2">
                Adresse
              </label>
              <input
                type="text"
                id="adresse"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
                className="input-field w-full bg-gray-50"
                placeholder="N° et rue (facultatif)"
              />
            </div>

            <div>
              <label htmlFor="cp" className="block text-body-sm text-gray-dark mb-2">
                Code postal *
              </label>
              <input
                type="text"
                id="cp"
                name="cp"
                required
                inputMode="numeric"
                pattern="[0-9]{5}"
                maxLength={5}
                title="5 chiffres, ex : 69003"
                value={formData.cp}
                onChange={handleChange}
                className="input-field w-full bg-gray-50"
                placeholder="69003"
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
