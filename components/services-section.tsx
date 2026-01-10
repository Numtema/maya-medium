"use client"

import Image from "next/image"
import { Sparkles, Moon, Eye, Hand, Flame, BookOpen, Footprints, Users, Home, Wind } from "lucide-react"

export function ServicesSection() {
  const categories = [
    {
      id: "mediumnique",
      title: "Médiumnique",
      subtitle: "Orientation, guidance, liens, lecture subtile",
      services: [
        {
          title: "Messages des Défunts",
          icon: Moon,
          image: "/images/messages-defunts-pro.jpg",
          duration: "60 minutes",
          location: "Plusieurs lieux / en privé",
          description:
            "Je fais le lien avec vos proches disparus pour vous apporter réconfort et messages. Un moment d'échange précieux pour trouver la paix et avancer dans votre deuil.",
        },
        {
          title: "Lecture Akashique",
          icon: BookOpen,
          image: "/images/lecture-akashique-pro.jpg",
          duration: "60 minutes",
          location: "Plusieurs lieux / en privé",
          description:
            "Lecture ou libération akashique pour accéder aux mémoires de votre âme et comprendre votre chemin de vie.",
        },
        {
          title: "Passage d'Âme",
          icon: Sparkles,
          image: "/images/passage-ame-pro.jpg",
          duration: "60 minutes",
          location: "Plusieurs lieux",
          description: "Accompagnement des âmes en transition pour faciliter leur passage vers la lumière.",
        },
        {
          title: "Réponse Question Précise",
          icon: Eye,
          image: "/images/question-precise-pro.jpg",
          duration: "30 minutes",
          location: "Plusieurs lieux",
          description: "Une réponse claire et directe à une question précise qui vous préoccupe.",
        },
        {
          title: "Conférence Médiumnique",
          icon: Users,
          image: "/images/conference-pro.jpg",
          duration: "210 minutes (3h30)",
          location: "En personne - Groupe",
          description:
            "Événement en groupe pour découvrir la médiumnité et recevoir des messages collectifs. Chaque personne peut choisir entre contact défunt, cartomancie, lecture akashique ou numérologie.",
        },
      ],
    },
    {
      id: "energetique",
      title: "Énergétique",
      subtitle: "Nettoyage, harmonisation, libération",
      services: [
        {
          title: "Soin Énergétique",
          icon: Flame,
          image: "/images/soin-energetique-pro.jpg",
          duration: "60 minutes",
          location: "Plusieurs lieux / en privé",
          description: "Harmonisation et rééquilibrage de vos énergies pour retrouver bien-être et sérénité.",
        },
        {
          title: "Dégagement Énergétique",
          icon: Wind,
          image: "/images/degagement-energetique-pro.jpg",
          duration: "60 minutes",
          location: "Plusieurs lieux / en privé",
          description: "Dégagement profond pour libérer les blocages et retrouver la vitalité.",
        },
        {
          title: "Nettoyage Énergétique de Lieu",
          icon: Home,
          image: "/images/nettoyage-lieu-pro.jpg",
          duration: "60 minutes",
          location: "À domicile (76)",
          description: "Purification de votre habitat pour retrouver sérénité et harmonie dans votre espace de vie.",
        },
        {
          title: "Lectures et Libérations",
          icon: BookOpen,
          image: "/images/lectures-liberations-pro.jpg",
          duration: "60 minutes",
          location: "Plusieurs lieux",
          description: "Séance combinant lecture énergétique et libération des mémoires limitantes.",
        },
      ],
    },
    {
      id: "guidance",
      title: "Guidance & Lecture",
      subtitle: "Supports symboliques, interprétation",
      services: [
        {
          title: "Cartomancie",
          icon: Hand,
          image: "/images/cartomancie-pro.jpg",
          duration: "60 minutes",
          location: "Plusieurs lieux / en privé",
          description:
            "Lecture des cartes pour éclairer votre chemin et répondre à vos questions sur l'amour, le travail, la famille.",
        },
        {
          title: "Étude Photo - Décryptage Rêve",
          icon: Eye,
          image: "/images/decryptage-reve-pro.jpg",
          duration: "30 minutes",
          location: "Plusieurs lieux",
          description:
            "Analyse intuitive d'une photo ou interprétation symbolique de vos rêves pour en révéler les messages.",
        },
      ],
    },
    {
      id: "specifique",
      title: "Accompagnements Ciblés",
      subtitle: "Services spécialisés",
      services: [
        {
          title: "Communication Animale",
          icon: Footprints,
          image: "/images/communication-animale-pro.jpg",
          duration: "15 minutes",
          location: "Plusieurs lieux",
          description:
            "Je communique avec vos animaux de compagnie (défunts ou vivants) pour comprendre leurs besoins et leurs messages.",
        },
      ],
    },
    {
      id: "groupe",
      title: "Groupe / Événementiel",
      subtitle: "Présentiel uniquement",
      services: [
        {
          title: "Atelier en Groupe",
          icon: Users,
          image: "/images/atelier-groupe-pro.jpg",
          duration: "150 minutes (2h30)",
          location: "En personne - Groupe",
          description: "Ateliers collectifs pour développer votre intuition et découvrir vos capacités spirituelles.",
        },
      ],
    },
  ]

  return (
    <section
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-[#f4efea] relative overflow-hidden"
      id="services"
    >
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#c9a24d]/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-[#c9a24d]/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-[#c9a24d] font-serif text-glow">
            Mes Services
          </h2>
          <p className="text-lg sm:text-xl text-[#0f0f0f] max-w-3xl mx-auto font-sans leading-relaxed mb-6 sm:mb-8 px-4">
            Je mets mes capacités à votre service pour vous accompagner avec authenticité et bienveillance
          </p>

          <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#c9a24d]/30">
            <h3 className="text-xl sm:text-2xl font-bold text-[#c9a24d] font-serif mb-3 sm:mb-4">
              Modalités Générales
            </h3>
            <div className="space-y-2 text-[#0f0f0f] text-sm sm:text-base">
              <p>Durées variables selon la prestation (15 à 210 min)</p>
              <p>
                En cabinet (Saint-Romain-de-Colbosc – 76), à votre domicile (76), ou à distance (visio WhatsApp / Zoom)
              </p>
              <p>À distance ou à l'étranger : merci d'indiquer votre indicatif pays lors de la réservation</p>
              <p>Lundi au Vendredi – horaires en détail sur Calendly</p>
            </div>
          </div>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={category.id} className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#c9a24d] font-serif mb-2">{category.title}</h3>
              <p className="text-base sm:text-lg text-[#0f0f0f]/70 font-sans italic">{category.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {category.services.map((service, index) => (
                <div
                  key={`${category.id}-${index}`}
                  className="service-card-enhanced group"
                  style={{
                    animationDelay: `${categoryIndex * 300 + index * 150}ms`,
                  }}
                >
                  <div className="relative mb-6 flex justify-center">
                    <div className="absolute inset-0 bg-[#c9a24d]/20 rounded-full blur-xl group-hover:bg-[#c9a24d]/40 transition-all duration-500" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#c9a24d] to-[#d4b960] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 mystical-glow">
                      <service.icon className="w-10 h-10 text-[#0f0f0f]" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/80 via-[#0f0f0f]/20 to-transparent" />
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold mb-3 text-[#c9a24d] font-serif group-hover:text-[#d4b960] transition-colors duration-300 text-center">
                    {service.title}
                  </h4>

                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    <span className="text-xs bg-[#c9a24d]/20 text-[#0f0f0f] px-3 py-1 rounded-full font-sans">
                      {service.duration}
                    </span>
                    <span className="text-xs bg-[#c9a24d]/20 text-[#0f0f0f] px-3 py-1 rounded-full font-sans">
                      {service.location}
                    </span>
                  </div>

                  <p className="text-[#0f0f0f] leading-relaxed font-sans text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300 mb-6 text-center">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-[#c9a24d]/30">
                    <a
                      href="https://calendly.com/amaya-pro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-[#c9a24d] font-semibold hover:gap-4 transition-all duration-300 hover:text-[#d4b960]"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-sans tracking-wide">Réserver une consultation</span>
                      <Sparkles className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
