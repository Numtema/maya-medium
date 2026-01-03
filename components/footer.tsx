import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gold/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="size-12 rounded-full overflow-hidden border-2 border-[#c9a24d] shadow-lg shadow-[#c9a24d]/20 mr-3">
                <Image src="/images/image.png" alt="Maya Medium" width={48} height={48} className="object-cover" />
              </div>
              <span className="text-xl font-bold text-[#c9a24d] font-serif">Maya Medium</span>
            </div>
            <p className="text-[#f4efea]/80 mb-4 font-sans leading-relaxed">
              Voyance et guidance spirituelle avec Stéphanie. Accompagnement bienveillant dans la confidentialité.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#c9a24d] font-serif">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#accueil" className="text-[#f4efea]/70 hover:text-[#c9a24d] font-sans transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[#f4efea]/70 hover:text-[#c9a24d] font-sans transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-[#f4efea]/70 hover:text-[#c9a24d] font-sans transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-[#f4efea]/70 hover:text-[#c9a24d] font-sans transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#f4efea]/70 hover:text-[#c9a24d] font-sans transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#c9a24d] font-serif">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#c9a24d] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#f4efea]/60 font-sans text-sm">Téléphone</p>
                  <a href="tel:0759542626" className="text-[#f4efea] hover:text-[#c9a24d] font-sans">
                    07 59 54 26 26
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#c9a24d] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#f4efea]/60 font-sans text-sm">Email</p>
                  <a href="mailto:maya.medium@contact.fr" className="text-[#f4efea] hover:text-[#c9a24d] font-sans">
                    maya.medium@contact.fr
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#c9a24d] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#f4efea]/60 font-sans text-sm">Horaires</p>
                  <p className="text-[#f4efea] font-sans text-sm">Lun-Sam : 9h-20h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#c9a24d]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#f4efea]/60 text-sm font-sans">
              &copy; {new Date().getFullYear()} Maya Medium. Tous droits réservés.
            </p>
            <p className="text-[#f4efea]/50 text-xs font-sans text-center max-w-2xl">
              Disclaimer : La voyance est un art divinatoire qui ne se substitue pas à un avis médical, juridique ou
              financier professionnel. Les consultations sont données à titre indicatif.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
