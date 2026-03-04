'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

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
              Nous proposons des solutions sur mesure, adaptées à votre secteur d'activité et vos objectifs marketing, 
              notamment la{' '}
              <Link href="/distribution-journaux-municipaux" className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors">
                distribution de journaux et bulletins municipaux
              </Link>{' '}
              pour les collectivités. La qualité et la satisfaction client sont au cœur de notre mission, avec une garantie SOLO qui assure 
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
