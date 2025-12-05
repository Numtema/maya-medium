"use client"

import type React from "react"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Testimonials } from "@/components/testimonials"
import { useEffect, useState } from "react"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Vérifier au chargement initial
    handleResize()

    // Ajouter l'écouteur d'événement
    window.addEventListener("resize", handleResize)

    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Données pour les catégories
  const categories = [
    {
      id: "sentai",
      title: "Sentai/Super Héros",
      series: [
        {
          id: "jiban",
          title: "JIBAN",
          image: "/images/jiban.jpeg",
          description: "Série emblématique de super-héros japonais des années 90",
        },
        {
          id: "maskman",
          title: "MASKMAN",
          image: "/images/maskman.jpeg",
          description: "Équipe de héros aux costumes colorés et aux pouvoirs extraordinaires",
        },
        {
          id: "sharivan",
          title: "SHARIVAN",
          image: "/images/sharivan.jpeg",
          description: "Héros de l'espace combattant les forces du mal",
        },
        {
          id: "bioman",
          title: "BIOMAN",
          image: "/images/bioman.jpeg",
          description: "Équipe de héros aux pouvoirs biologiques",
        },
        {
          id: "flashman",
          title: "FLASHMAN",
          image: "/images/flashman.jpeg",
          description: "Héros dotés de super-vitesse et pouvoirs spéciaux",
        },
        {
          id: "jetman",
          title: "JETMAN",
          image: "/images/jetman.jpeg",
          description: "Inspiré par la science-fiction et les oiseaux légendaires",
        },
      ],
    },
    {
      id: "animes",
      title: "Animes Next Generation",
      series: [
        {
          id: "naruto",
          title: "NARUTO",
          image: "/images/naruto.jpeg",
          description: "L'histoire d'un jeune ninja en quête de reconnaissance",
        },
        {
          id: "jujutsu",
          title: "JUJUTSU KAISEN",
          image: "/images/jujutsu-kaisen.jpeg",
          description: "Combat contre les fléaux dans un monde surnaturel",
        },
        {
          id: "dragonball",
          title: "DRAGON BALL SUPER",
          image: "/images/dragon-ball-super.jpeg",
          description: "Les nouvelles aventures de Goku et ses amis",
        },
        {
          id: "dragonball-classic",
          title: "DRAGON BALL",
          image: "/images/dragon-ball.jpeg",
          description: "Les aventures de Son Goku depuis son enfance",
        },
        {
          id: "onepiece",
          title: "ONE PIECE",
          image: "/anime-pirate-crew.png",
          description: "L'aventure de Luffy à la recherche du trésor légendaire",
        },
        {
          id: "demonslayer",
          title: "DEMON SLAYER",
          image: "/demon-slayer-anime-group.png",
          description: "Tanjiro combat les démons pour venger sa famille",
        },
      ],
    },
    {
      id: "kids",
      title: "Kids CLUB",
      series: [
        {
          id: "samsam",
          title: "SAMSAM",
          image: "/images/samsam.jpeg",
          description: "Les aventures d'un petit super-héros cosmique",
        },
        {
          id: "bluey",
          title: "BLUEY",
          image: "/images/bluey.jpeg",
          description: "Une adorable chienne bleue et sa famille",
        },
        {
          id: "petit-ours-brun",
          title: "LE PETIT OURS BRUN",
          image: "/images/petit-ours-brun.jpeg",
          description: "Les aventures quotidiennes d'un petit ourson",
        },
        {
          id: "tchoupi",
          title: "T'CHOUPI",
          image: "/generic-cartoon-child.png",
          description: "Les découvertes d'un petit pingouin curieux",
        },
        {
          id: "peppa",
          title: "PEPPA PIG",
          image: "/peppa-pig-cartoon.png",
          description: "Une famille de cochons et leurs aventures",
        },
        {
          id: "paw-patrol",
          title: "PAW PATROL",
          image: "/generic-cartoon-puppies.png",
          description: "Des chiots héroïques au service de leur ville",
        },
      ],
    },
    {
      id: "cartoon",
      title: "Cartoon SPACE",
      series: [
        {
          id: "kim-possible",
          title: "KIM POSSIBLE",
          image: "/images/kim-possible.jpeg",
          description: "Lycéenne le jour, espionne la nuit",
        },
        {
          id: "spongebob",
          title: "BOB L'ÉPONGE",
          image: "/images/spongebob.jpeg",
          description: "Une éponge optimiste et ses amis sous l'océan",
        },
        {
          id: "pocahontas",
          title: "POCAHONTAS",
          image: "/images/pocahontas.jpeg",
          description: "L'histoire d'une princesse amérindienne",
        },
        {
          id: "totally-spies",
          title: "TOTALLY SPIES",
          image: "/images/totally-spies.jpeg",
          description: "Trois adolescentes mènent une double vie d'espionnes",
        },
        {
          id: "tintin",
          title: "LES AVENTURES DE TINTIN",
          image: "/images/tintin.jpeg",
          description: "Le célèbre reporter et son chien Milou",
        },
        {
          id: "batman",
          title: "BATMAN",
          image: "/batman-animated-series.png",
          description: "Le justicier de Gotham City",
        },
      ],
    },
  ]

  // Données pour les témoignages
  const testimonials = [
    {
      id: "1",
      name: "Brice Ondoua",
      text: "Replonger dans l'univers de notre enfance et notre jeunesse...Beaucoup de rire et souvenir nostalgique ❤️",
      avatar: "/diverse-group-avatars.png",
    },
    {
      id: "2",
      name: "Van Fannel",
      text: "C'est super sympa de retrouver tout ces animes qui ont marqué notre enfance regrouper en un seul endroit. Facilement accessible à des prix cadeaux.",
      avatar: "/diverse-group-avatars.png",
    },
    {
      id: "3",
      name: "Miracle Miracle",
      text: "très belle page 🥰 j'ai l'impression de me retrouver tous petite...je vous recommande fortement",
      avatar: "/diverse-group-avatars.png",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />

      <section id="categories" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 text-transparent bg-clip-text font-sans">
          Nos Catégories
        </h2>

        {categories.map((category) => (
          <div key={category.id} className="mb-16">
            <div className="bg-green-100/50 py-2 px-4 rounded-md mb-6">
              <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 text-transparent bg-clip-text font-sans">
                {category.title}
              </h3>
            </div>
            <div className="carousel-container">
              <div className="carousel" mask="true">
                {category.series.map((item, index) => (
                  <article key={item.id} style={{ "--i": index } as React.CSSProperties}>
                    <img src={item.image || "/placeholder.svg"} alt={item.title} />
                    <h2 className="font-sans">{item.title}</h2>
                    <div>
                      <p className="font-sans">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section id="catalogue" className="py-12 px-4 md:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 text-transparent bg-clip-text font-sans">
          Notre Catalogue
        </h2>
        <div className="text-center mb-6">
          <p className="text-lg mb-4 font-sans text-white">
            🎀 Commandez vos Dessins des années 90 ! [+300] Séries D'animation
          </p>
          <p className="font-medium font-sans text-white">
            Dragon Ball, Xor, Sailor Moon, Gwendoline, La Petite Olympe, Bioman, Btx, etc...
          </p>
          <p className="text-lg font-bold mt-4 font-sans text-white">
            Disponible en intégralité Français à (100f/Giga.Promo)✅️
          </p>
        </div>
        <div className="flex justify-center">
          <a href="https://wa.me/c/237654373303" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Commander sur WhatsApp
          </a>
        </div>
      </section>

      <section id="temoignages">
        <Testimonials testimonials={testimonials} />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </main>
  )
}
