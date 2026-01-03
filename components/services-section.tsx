"use client"

import Image from "next/image"
import { Sparkles, Moon, Eye, Hand } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      id: "voyance",
      title: "Voyance",
      icon: Eye,
      image: "/images/tarot-cards.jpg",
      description:
        "Éclairage sur votre avenir, réponses à vos questions sur l'amour, le travail, la famille. Je vous aide à y voir plus clair grâce à mes ressentis et mes outils divinatoires.",
    },
    {
      id: "guidance",
      title: "Guidance Spirituelle",
      icon: Hand,
      image: "/images/spiritual-guidance.jpg",
      description:
        "Un accompagnement bienveillant pour vous aider à traverser les moments difficiles, prendre des décisions importantes et avancer sur votre chemin de vie avec confiance.",
    },
    {
      id: "messages",
      title: "Messages des Défunts",
      icon: Moon,
      image: "/images/crystal-ball.jpg",
      description:
        "Je fais le lien avec vos proches disparus pour vous apporter réconfort et messages. Un moment d'échange précieux pour trouver la paix et avancer dans votre deuil.",
    },
  ]

  return (
    <section className="py-24 px-4 md:px-8 bg-[#f4efea] relative overflow-hidden" id="services">
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#c9a24d]/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-[#c9a24d]/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#c9a24d] font-serif text-glow">Mes Services</h2>
          <p className="text-xl text-[#0f0f0f] max-w-3xl mx-auto font-sans leading-relaxed">
            Je mets mes capacités à votre service pour vous accompagner avec authenticité et bienveillance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card-enhanced group"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <div className="relative mb-6 flex justify-center">
                <div className="absolute inset-0 bg-[#c9a24d]/20 rounded-full blur-xl group-hover:bg-[#c9a24d]/40 transition-all duration-500" />
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#c9a24d] to-[#d4b960] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 mystical-glow">
                  <service.icon className="w-12 h-12 text-[#0f0f0f]" strokeWidth={1.5} />
                </div>
              </div>

              <div className="relative h-56 mb-6 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/80 via-[#0f0f0f]/20 to-transparent" />
              </div>

              <h3 className="text-3xl font-bold mb-5 text-[#c9a24d] font-serif group-hover:text-[#d4b960] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-[#0f0f0f] leading-relaxed font-sans text-base opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {service.description}
              </p>

              <div className="mt-6 pt-6 border-t border-[#c9a24d]/30">
                <div className="flex items-center justify-center gap-2 text-[#c9a24d] font-semibold group-hover:gap-4 transition-all duration-300">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-sans tracking-wide">Découvrez la guidance</span>
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
