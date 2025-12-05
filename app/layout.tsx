import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { poppins } from "./fonts"

export const metadata: Metadata = {
  title: "Revis ton enfance - Dessins animés et séries des années 90",
  description: "Plus de 300 séries d'animation des années 90 disponibles en intégralité et en français",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
