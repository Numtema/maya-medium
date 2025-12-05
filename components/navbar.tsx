"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode")
    } else {
      document.documentElement.classList.remove("dark-mode")
    }
  }, [isDarkMode])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 flex justify-center items-center h-16 ${
        isScrolled ? "py-2" : "py-0"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center">
        {/* Toggle Switch pour le mode sombre */}
        <div className="absolute right-4 top-4 md:right-8 md:top-4 z-60">
          <label className="switch">
            <input
              type="checkbox"
              className="input__check"
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* Bouton hamburger pour mobile */}
        <button className="md:hidden absolute left-4 top-4 text-white z-60" onClick={toggleMenu}>
          <Menu size={24} />
        </button>

        {/* Menu principal avec fond arrondi - centré au-dessus du logo */}
        <div
          className={`flex items-center justify-center transition-all duration-500 ${
            isScrolled ? "bg-white/10 backdrop-blur-md shadow-md rounded-full px-6 py-2" : "bg-transparent"
          } ${isMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"}`}
        >
          <Link
            href="#accueil"
            className="px-3 py-2 text-sm font-medium text-white hover:text-green-400 transition-colors font-sans"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            href="#categories"
            className="px-3 py-2 text-sm font-medium text-white hover:text-green-400 transition-colors font-sans"
            onClick={() => setIsMenuOpen(false)}
          >
            Catégories
          </Link>
          <Link
            href="#catalogue"
            className="px-3 py-2 text-sm font-medium text-white hover:text-green-400 transition-colors font-sans"
            onClick={() => setIsMenuOpen(false)}
          >
            Catalogue
          </Link>
          <Link
            href="#temoignages"
            className="px-3 py-2 text-sm font-medium text-white hover:text-green-400 transition-colors font-sans"
            onClick={() => setIsMenuOpen(false)}
          >
            Témoignages
          </Link>
          <Link
            href="#contact"
            className="px-3 py-2 text-sm font-medium text-white hover:text-green-400 transition-colors font-sans"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Bouton WhatsApp séparé */}
        <div className="absolute right-16 top-4 md:right-24 md:top-4">
          <a href="https://wa.me/c/237654373303" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
