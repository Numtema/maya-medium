"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MessageCircle, Calendar } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel rounded-full flex items-center justify-between px-4 sm:px-6 py-3 transition-all duration-300">
            {/* Logo */}
            <Link href="#accueil" className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
              <div className="size-10 sm:size-11 rounded-full overflow-hidden border-2 border-[#c9a24d] shadow-lg shadow-[#c9a24d]/30 transition-transform group-hover:scale-110">
                <Image src="/images/image.png" alt="Maya Medium" width={44} height={44} className="object-cover" />
              </div>
              <div className="hidden sm:block">
                <h2 className="text-[#f4efea] text-base sm:text-lg font-bold font-serif leading-tight tracking-wide">
                  Maya Medium
                </h2>
                <p className="text-[#c9a24d] text-xs font-medium font-sans">Guidance spirituelle</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link
                href="#accueil"
                className="text-[#f4efea] text-sm font-medium hover:text-[#c9a24d] transition-colors relative group font-sans"
              >
                Accueil
                <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-[#c9a24d]"></span>
              </Link>
              <Link
                href="#services"
                className="text-[#f4efea]/70 text-sm font-medium hover:text-[#c9a24d] transition-colors relative group font-sans"
              >
                Services
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#c9a24d] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#process"
                className="text-[#f4efea]/70 text-sm font-medium hover:text-[#c9a24d] transition-colors relative group font-sans"
              >
                Comment ça marche
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#c9a24d] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#about"
                className="text-[#f4efea]/70 text-sm font-medium hover:text-[#c9a24d] transition-colors relative group font-sans"
              >
                À propos
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#c9a24d] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#faq"
                className="text-[#f4efea]/70 text-sm font-medium hover:text-[#c9a24d] transition-colors relative group font-sans"
              >
                FAQ
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#c9a24d] transition-all group-hover:w-full"></span>
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 border-l border-[#c9a24d]/20 pl-3 sm:pl-6">
              <a
                href="https://calendly.com/amaya-pro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-blue-600 border border-blue-700 text-white font-semibold text-xs sm:text-sm hover:bg-blue-700 transition-all font-sans"
              >
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Calendly</span>
              </a>

              <a
                href="tel:+33759542696"
                className="hidden md:flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#c9a24d]/10 border border-[#c9a24d]/30 text-[#c9a24d] font-semibold text-xs sm:text-sm hover:bg-[#c9a24d]/20 transition-all font-sans"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">Appeler</span>
              </a>

              <a
                href="https://wa.me/33759542696"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#c9a24d] to-[#d4b960] text-[#0f0f0f] font-bold text-xs sm:text-sm btn-glow font-sans"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden text-[#f4efea] ml-2" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#0f0f0f]/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-6 font-sans">
          <Link
            href="#accueil"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-medium text-[#f4efea] hover:text-[#c9a24d] transition-colors"
          >
            Accueil
          </Link>
          <Link
            href="#services"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-medium text-[#f4efea] hover:text-[#c9a24d] transition-colors"
          >
            Services
          </Link>
          <Link
            href="#process"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-medium text-[#f4efea] hover:text-[#c9a24d] transition-colors"
          >
            Comment ça marche
          </Link>
          <Link
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-medium text-[#f4efea] hover:text-[#c9a24d] transition-colors"
          >
            À propos
          </Link>
          <Link
            href="#faq"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-medium text-[#f4efea] hover:text-[#c9a24d] transition-colors"
          >
            FAQ
          </Link>
          <a
            href="https://calendly.com/amaya-pro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg mt-4"
          >
            <Calendar className="w-5 h-5" />
            <span>Calendly</span>
          </a>
          <a
            href="https://wa.me/33759542696"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#c9a24d] to-[#d4b960] text-[#0f0f0f] font-bold text-lg btn-glow"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      )}
    </>
  )
}
