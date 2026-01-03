import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { playfair, poppins } from "./fonts"

export const metadata: Metadata = {
  title: "Maya Medium | Voyance Sérieuse & Guidance Spirituelle",
  description:
    "Maya Medium propose des consultations de voyance et de guidance spirituelle sérieuse à distance, avec écoute, bienveillance et confidentialité. France entière.",
  keywords: [
    "voyance sérieuse",
    "guidance spirituelle",
    "médium fiable",
    "consultation à distance",
    "voyance à distance",
    "France",
  ],
  authors: [{ name: "Maya Medium" }],
  creator: "Maya Medium",
  publisher: "Maya Medium",
  robots: "index, follow",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mayamedium.fr",
    title: "Maya Medium | Voyance Sérieuse & Guidance Spirituelle",
    description: "Guidance et voyance avec sincérité et bienveillance",
    siteName: "Maya Medium",
    images: [
      {
        url: "https://mayamedium.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maya Medium - Voyance et Guidance Spirituelle",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Maya Medium | Voyance Sérieuse",
    description: "Guidance et voyance avec sincérité",
    images: ["https://mayamedium.fr/og-image.jpg"],
  },

  // Additional metadata
  alternates: {
    canonical: "https://mayamedium.fr",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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

        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Maya Medium",
              description: "Consultations de voyance et guidance spirituelle sérieuse",
              url: "https://mayamedium.fr",
              telephone: "+33759542626",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+33759542626",
                availableLanguage: ["fr"],
              },
              areaServed: "FR",
              serviceType: "Voyance, Guidance spirituelle",
              image: "https://mayamedium.fr/og-image.jpg",
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
                  name: "Qu'est-ce qu'une consultation de voyance ou de médiumnité ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Une consultation est un échange confidentiel durant lequel je vous apporte des éclairages sur votre situation actuelle, avec écoute et bienveillance, sans jugement ni promesses irréalistes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Comment se déroule une consultation ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vous me contactez par téléphone, WhatsApp ou message. Nous convenons d'un moment. Pendant la consultation, je vous partage mes perceptions et réponses. Vous pouvez poser vos questions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Puis-je vous contacter à distance ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Oui, les consultations se font entièrement à distance par téléphone ou WhatsApp, peu importe où vous êtes en France ou ailleurs.",
                  },
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
