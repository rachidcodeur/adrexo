'use client'

import { useRef } from 'react'
import Link from 'next/link'
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
          Nos communes d&apos;intervention
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
                      ) : city === 'Boulogne-Billancourt' ? (
                        <Link
                          href="/distribution-flyers-boulogne-billancourt"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Boulogne-Billancourt
                        </Link>
                      ) : city === 'Saint-Denis' ? (
                        <Link
                          href="/distribution-flyers-saint-denis"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Saint-Denis
                        </Link>
                      ) : city === 'Argenteuil' ? (
                        <Link
                          href="/distribution-flyers-argenteuil"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Argenteuil
                        </Link>
                      ) : city === 'Montreuil' ? (
                        <Link
                          href="/distribution-flyers-montreuil"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Montreuil
                        </Link>
                      ) : city === 'Nanterre' ? (
                        <Link
                          href="/distribution-flyers-nanterre"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Nanterre
                        </Link>
                      ) : city === 'Bordeaux' ? (
                        <Link
                          href="/distribution-flyers-bordeaux"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Bordeaux
                        </Link>
                      ) : city === 'Toulouse' ? (
                        <Link
                          href="/distribution-flyers-toulouse"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Toulouse
                        </Link>
                      ) : city === 'Marseille' ? (
                        <Link
                          href="/distribution-flyers-marseille"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Marseille
                        </Link>
                      ) : city === 'Aix-en-Provence' ? (
                        <Link
                          href="/distribution-flyers-aix-en-provence"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Aix-en-Provence
                        </Link>
                      ) : city === 'Lyon' ? (
                        <Link
                          href="/distribution-flyers-lyon"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Lyon
                        </Link>
                      ) : city === 'Grenoble' ? (
                        <Link
                          href="/distribution-flyers-grenoble"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Grenoble
                        </Link>
                      ) : city === 'Clermont-Ferrand' ? (
                        <Link
                          href="/distribution-flyers-clermont-ferrand"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Clermont-Ferrand
                        </Link>
                      ) : city === 'Annecy' ? (
                        <Link
                          href="/distribution-flyers-annecy"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Annecy
                        </Link>
                      ) : city === 'Valence' ? (
                        <Link
                          href="/distribution-flyers-valence"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Valence
                        </Link>
                      ) : city === 'Saint-Étienne' ? (
                        <Link
                          href="/distribution-flyers-saint-etienne"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Saint-Étienne
                        </Link>
                      ) : city === 'Nice' ? (
                        <Link
                          href="/distribution-flyers-nice"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Nice
                        </Link>
                      ) : city === 'Toulon' ? (
                        <Link
                          href="/distribution-flyers-toulon"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Toulon
                        </Link>
                      ) : city === 'Nantes' ? (
                        <Link
                          href="/distribution-flyers-nantes"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Nantes
                        </Link>
                      ) : city === 'Angers' ? (
                        <Link
                          href="/distribution-flyers-angers"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Angers
                        </Link>
                      ) : city === 'Dijon' ? (
                        <Link
                          href="/distribution-flyers-dijon"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Dijon
                        </Link>
                      ) : city === 'Strasbourg' ? (
                        <Link
                          href="/distribution-flyers-strasbourg"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Strasbourg
                        </Link>
                      ) : city === 'Metz' ? (
                        <Link
                          href="/distribution-flyers-metz"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Metz
                        </Link>
                      ) : city === 'Mulhouse' ? (
                        <Link
                          href="/distribution-flyers-mulhouse"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Mulhouse
                        </Link>
                      ) : city === 'Nancy' ? (
                        <Link
                          href="/distribution-flyers-nancy"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Nancy
                        </Link>
                      ) : city === 'Reims' ? (
                        <Link
                          href="/distribution-flyers-reims"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Reims
                        </Link>
                      ) : city === 'Rennes' ? (
                        <Link
                          href="/distribution-flyers-rennes"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Rennes
                        </Link>
                      ) : city === 'Brest' ? (
                        <Link
                          href="/distribution-flyers-brest"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Brest
                        </Link>
                      ) : city === 'Quimper' ? (
                        <Link
                          href="/distribution-flyers-quimper"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Quimper
                        </Link>
                      ) : city === 'Lorient' ? (
                        <Link
                          href="/distribution-flyers-lorient"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Lorient
                        </Link>
                      ) : city === 'Vannes' ? (
                        <Link
                          href="/distribution-flyers-vannes"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Vannes
                        </Link>
                      ) : city === 'Saint-Brieuc' ? (
                        <Link
                          href="/distribution-flyers-saint-brieuc"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Saint-Brieuc
                        </Link>
                      ) : city === 'Le Havre' ? (
                        <Link
                          href="/distribution-flyers-le-havre"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Le Havre
                        </Link>
                      ) : city === 'Lille' ? (
                        <Link
                          href="/distribution-flyers-lille"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Lille
                        </Link>
                      ) : city === 'Montpellier' ? (
                        <Link
                          href="/distribution-flyers-montpellier"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Montpellier
                        </Link>
                      ) : city === 'Nîmes' ? (
                        <Link
                          href="/distribution-flyers-nimes"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Nîmes
                        </Link>
                      ) : city === 'Perpignan' ? (
                        <Link
                          href="/distribution-flyers-perpignan"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Perpignan
                        </Link>
                      ) : city === 'Béziers' ? (
                        <Link
                          href="/distribution-flyers-beziers"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Béziers
                        </Link>
                      ) : city === 'Pau' ? (
                        <Link
                          href="/distribution-flyers-pau"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Pau
                        </Link>
                      ) : city === 'Limoges' ? (
                        <Link
                          href="/distribution-flyers-limoges"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Limoges
                        </Link>
                      ) : city === 'Poitiers' ? (
                        <Link
                          href="/distribution-flyers-poitiers"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Poitiers
                        </Link>
                      ) : city === 'La Rochelle' ? (
                        <Link
                          href="/distribution-flyers-la-rochelle"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          La Rochelle
                        </Link>
                      ) : city === 'Bayonne' ? (
                        <Link
                          href="/distribution-flyers-bayonne"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Bayonne
                        </Link>
                      ) : city === 'Colmar' ? (
                        <Link
                          href="/distribution-flyers-colmar"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Colmar
                        </Link>
                      ) : city === 'Albi' ? (
                        <Link
                          href="/distribution-flyers-albi"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Albi
                        </Link>
                      ) : city === 'Orléans' ? (
                        <Link
                          href="/distribution-flyers-orleans"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Orléans
                        </Link>
                      ) : city === 'Tours' ? (
                        <Link
                          href="/distribution-flyers-tours"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Tours
                        </Link>
                      ) : city === 'Bourges' ? (
                        <Link
                          href="/distribution-flyers-bourges"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Bourges
                        </Link>
                      ) : city === 'Blois' ? (
                        <Link
                          href="/distribution-flyers-blois"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Blois
                        </Link>
                      ) : city === 'Châteauroux' ? (
                        <Link
                          href="/distribution-flyers-chateauroux"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Châteauroux
                        </Link>
                      ) : city === 'Chartres' ? (
                        <Link
                          href="/distribution-flyers-chartres"
                          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          Chartres
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
