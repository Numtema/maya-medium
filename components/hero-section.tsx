"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const bubbleContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Créer les bulles flottantes
    if (bubbleContainerRef.current) {
      const container = bubbleContainerRef.current
      container.innerHTML = "" // Nettoyer les bulles existantes

      // Créer 15 bulles avec des tailles, positions et animations aléatoires
      for (let i = 0; i < 15; i++) {
        const size = Math.random() * 100 + 50 // Taille entre 50px et 150px
        const bubble = document.createElement("div")
        bubble.className = "floating-bubble"

        // Position aléatoire
        const left = Math.random() * 100
        const top = Math.random() * 100

        // Direction aléatoire pour l'animation
        const xMove = (Math.random() - 0.5) * 200 // Entre -100px et 100px
        const yMove = (Math.random() - 0.5) * 200

        // Durée aléatoire
        const duration = Math.random() * 10 + 10 // Entre 10s et 20s

        // Appliquer les styles
        bubble.style.width = `${size}px`
        bubble.style.height = `${size}px`
        bubble.style.left = `${left}%`
        bubble.style.top = `${top}%`
        bubble.style.setProperty("--x", `${xMove}px`)
        bubble.style.setProperty("--y", `${yMove}px`)
        bubble.style.setProperty("--duration", `${duration}s`)

        // Opacité aléatoire
        bubble.style.opacity = (Math.random() * 0.5 + 0.1).toString()

        container.appendChild(bubble)
      }
    }
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" id="accueil">
      {/* Fond avec grille et dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Conteneur pour les bulles flottantes */}
        <div ref={bubbleContainerRef} className="absolute inset-0 overflow-hidden"></div>
      </div>

      {/* Contenu du hero */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mt-16 sm:mt-0">
        <div className="mb-8">
          <Image
            src="/images/logo.png"
            alt="Revis ton enfance"
            width={150}
            height={150}
            className="mx-auto rounded-full border-4 border-white/20"
          />
        </div>
        {/* Titre avec gradient amélioré style TaskAI */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-sans">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-green-300">
            Replongez dans vos
          </span>{" "}
          <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400">
            dessins animés d'enfance
          </span>
        </h1>
        <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto font-sans">
          Plus de 50 téra de données mangas disponibles en intégralité et en français. Retrouvez tous vos héros préférés
          !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/c/237654373303" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
            <svg className="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Commander sur WhatsApp
          </a>
          <a
            href="#categories"
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center transition-all border border-white/30 text-lg font-sans"
          >
            Découvrir le catalogue
          </a>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-green-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
    </div>
  )
}
