"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { Phone, MessageCircle } from "lucide-react"

export function HeroSection() {
  const bubbleContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bubbleContainerRef.current) {
      const container = bubbleContainerRef.current
      container.innerHTML = ""

      for (let i = 0; i < 20; i++) {
        const size = Math.random() * 60 + 30
        const bubble = document.createElement("div")
        bubble.className = "floating-bubble"

        const left = Math.random() * 100
        const top = Math.random() * 100
        const xMove = (Math.random() - 0.5) * 150
        const yMove = (Math.random() - 0.5) * 150
        const duration = Math.random() * 15 + 10

        bubble.style.width = `${size}px`
        bubble.style.height = `${size}px`
        bubble.style.left = `${left}%`
        bubble.style.top = `${top}%`
        bubble.style.setProperty("--x", `${xMove}px`)
        bubble.style.setProperty("--y", `${yMove}px`)
        bubble.style.setProperty("--duration", `${duration}s`)
        bubble.style.opacity = (Math.random() * 0.3 + 0.1).toString()

        container.appendChild(bubble)
      }
    }
  }, [])

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden mystical-gradient"
      id="accueil"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/chatgpt-20image-203-20janv.png"
          alt="Maya Medium - Voyante"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/80 via-[#0f0f0f]/60 to-[#0f0f0f]/90"></div>

        {/* Mystical overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(201, 162, 77, 0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div ref={bubbleContainerRef} className="absolute inset-0 overflow-hidden"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mt-16 sm:mt-0">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-serif">
          <span className="shimmer block mb-2">Maya Medium</span>
          <span className="text-2xl sm:text-3xl md:text-4xl text-[#f4efea]/90 font-light block font-sans">
            Voyance & Guidance Spirituelle
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-[#f4efea]/90 mb-4 max-w-3xl mx-auto font-sans leading-relaxed">
          Bienvenue, je suis Maya, médium et voyante
        </p>
        <p className="text-base sm:text-lg text-[#f4efea]/70 mb-10 max-w-3xl mx-auto font-sans leading-relaxed">
          Je vous accompagne avec bienveillance dans votre quête de clarté et de guidance spirituelle. Consultations par
          téléphone et WhatsApp dans la plus grande confidentialité.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="tel:+33759542696" className="phone-button text-base sm:text-lg">
            <Phone className="w-5 h-5" />
            07 59 54 26 96
          </a>
          <a
            href="https://wa.me/33759542696"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button text-base sm:text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Consulter sur WhatsApp
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#f4efea]/60 font-sans">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#c9a24d] rounded-full animate-pulse-glow"></div>
            <span>Confidentialité assurée</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#c9a24d] rounded-full animate-pulse-glow"></div>
            <span>Consultations à distance</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#c9a24d] rounded-full animate-pulse-glow"></div>
            <span>Écoute bienveillante</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-[#c9a24d]/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -right-16 w-96 h-96 bg-[#c9a24d]/10 rounded-full blur-3xl"></div>
    </div>
  )
}
