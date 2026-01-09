import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { playfair, poppins } from "./fonts"

export const metadata: Metadata = {
  title: "Maya Medium | Voyance & Médiumnité Saint-Romain-de-Colbosc (76)",
  description:
    "Maya Medium, voyante et médium professionnelle à Saint-Romain-de-Colbosc (76). Consultations de voyance, médiumnité et guidance spirituelle au cabinet ou à distance. Seine-Maritime, Normandie.",
  keywords: [
    "voyance Saint-Romain-de-Colbosc",
    "médium Seine-Maritime",
    "voyante 76",
    "médiumnité Normandie",
    "guidance spirituelle Le Havre",
    "cartomancie Fécamp",
    "consultation voyance à distance",
    "messages défunts",
    "soin énergétique",
    "voyance sérieuse",
    "médium fiable",
    "tarot",
    "lecture akashique",
    "voyante professionnelle Normandie",
  ],
  authors: [{ name: "Maya Medium" }],
  creator: "Maya Medium",
  publisher: "Maya Medium",
  robots: "index, follow",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.maya-medium.com",
    title: "Maya Medium | Voyance & Médiumnité Saint-Romain-de-Colbosc (76)",
    description:
      "Voyante et médium professionnelle en Normandie. Cabinet à Saint-Romain-de-Colbosc, consultations à distance disponibles.",
    siteName: "Maya Medium",
    images: [
      {
        url: "https://www.maya-medium.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maya Medium - Voyance et Médiumnité Normandie",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Maya Medium | Voyance & Médiumnité 76",
    description: "Voyante professionnelle à Saint-Romain-de-Colbosc, consultations au cabinet ou à distance",
    images: ["https://www.maya-medium.com/og-image.jpg"],
  },

  // Additional metadata
  alternates: {
    canonical: "https://www.maya-medium.com",
  },

  icons: {
    icon: "/images/image.png",
    shortcut: "/images/image.png",
    apple: "/images/image.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/images/image.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/images/image.png",
      },
    ],
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#c9a24d",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data - LocalBusiness with enhanced local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.maya-medium.com/#organization",
              name: "Maya Medium",
              alternateName: "Maya Medium Voyance",
              description:
                "Voyante et médium professionnelle offrant consultations de voyance, médiumnité et guidance spirituelle",
              url: "https://www.maya-medium.com",
              telephone: "+33759542696",
              email: "amaya.pro@outlook.fr",
              image: "https://www.maya-medium.com/og-image.jpg",
              logo: "https://www.maya-medium.com/images/image.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Saint-Romain-de-Colbosc",
                addressRegion: "Normandie",
                postalCode: "76430",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 49.5267,
                longitude: 0.3589,
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Saint-Romain-de-Colbosc",
                },
                {
                  "@type": "City",
                  name: "Le Havre",
                },
                {
                  "@type": "City",
                  name: "Fécamp",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Seine-Maritime",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Normandie",
                },
                {
                  "@type": "Country",
                  name: "France",
                },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "00:00",
                  closes: "00:00",
                  description: "Sur rendez-vous uniquement",
                },
              ],
              priceRange: "€€",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+33759542696",
                availableLanguage: ["fr"],
                areaServed: "FR",
                contactOption: ["TollFree"],
              },
              sameAs: [
                "https://www.instagram.com/amaya.apro",
                "https://www.tiktok.com/@amaya.apro",
                "https://www.facebook.com/amaya.apro.2024",
                "https://calendly.com/amaya-pro",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services de Voyance et Médiumnité",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Messages des Défunts",
                      description: "Connexion avec les proches disparus pour apporter réconfort et messages",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cartomancie",
                      description: "Lecture de cartes pour l'amour, le travail et la famille",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Guidance Spirituelle",
                      description: "Accompagnement bienveillant pour traverser les moments difficiles",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Soin Énergétique",
                      description: "Harmonisation et rééquilibrage énergétique",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Lecture Akashique",
                      description: "Accès aux mémoires de l'âme",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Structured Data - Person (Maya) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Maya",
              alternateName: "Stéphanie",
              jobTitle: "Voyante et Médium Professionnelle",
              description: "Médium professionnelle spécialisée en voyance, médiumnité et guidance spirituelle",
              url: "https://www.maya-medium.com",
              telephone: "+33759542696",
              email: "amaya.pro@outlook.fr",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Saint-Romain-de-Colbosc",
                addressRegion: "Normandie",
                postalCode: "76430",
                addressCountry: "FR",
              },
              sameAs: [
                "https://www.instagram.com/amaya.apro",
                "https://www.tiktok.com/@amaya.apro",
                "https://www.facebook.com/amaya.apro.2024",
              ],
            }),
          }}
        />

        {/* Structured Data - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Où se trouve le cabinet de Maya Medium ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le cabinet de Maya Medium est situé à Saint-Romain-de-Colbosc (76430) en Seine-Maritime, Normandie. Des consultations à distance sont également disponibles par téléphone, WhatsApp ou Zoom pour toute la France.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels services propose Maya Medium ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Maya Medium propose des services de médiumnité (messages des défunts, lecture akashique), des soins énergétiques, de la cartomancie, de la guidance spirituelle, de la communication animale et des ateliers en groupe.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Comment prendre rendez-vous avec Maya Medium ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vous pouvez prendre rendez-vous en appelant le 07 59 54 26 96, par WhatsApp au +33 7 59 54 26 96, par email à amaya.pro@outlook.fr ou directement via Calendly sur https://calendly.com/amaya-pro",
                  },
                },
                {
                  "@type": "Question",
                  name: "Qu'est-ce qu'une consultation de voyance ou de médiumnité ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Une consultation est un échange confidentiel durant lequel je vous apporte des éclairages sur votre situation actuelle, avec écoute et bienveillance, sans jugement ni promesses irréalistes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Les consultations à distance sont-elles aussi efficaces ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Oui, les consultations à distance par téléphone, WhatsApp ou Zoom sont tout aussi efficaces que les consultations en cabinet. L'énergie et la connexion spirituelle ne connaissent pas de frontières physiques.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Structured Data - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Accueil",
                  item: "https://www.maya-medium.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://www.maya-medium.com/#services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "À propos",
                  item: "https://www.maya-medium.com/#about",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Contact",
                  item: "https://www.maya-medium.com/#contact",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
