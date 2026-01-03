import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { playfair, poppins } from "./fonts"

export const metadata: Metadata = {
  title: "Maya Medium - Voyance & Guidance Spirituelle | Stéphanie",
  description:
    "Consultations de voyance par téléphone et WhatsApp avec Maya Medium (Stéphanie). Guidance spirituelle, messages des défunts, et accompagnement bienveillant dans la confidentialité.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
