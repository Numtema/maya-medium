import { Phone, MessageCircle, Mail, Clock, MapPin, Video, Instagram, Film } from "lucide-react"
import { FaTiktok, FaFacebook } from "react-icons/fa"

export function ContactSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gold font-serif">
            Contactez-moi
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Je suis à votre écoute pour vous accompagner. N'hésitez pas à me contacter
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 font-serif">Téléphone</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2 font-sans">
                  Appelez-moi directement pour une consultation
                </p>
                <a href="tel:+33759542696" className="text-gold font-semibold hover:underline text-sm sm:text-base">
                  +33 7 59 54 26 96
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 font-serif">WhatsApp</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2 font-sans">
                  Consultations également disponibles sur WhatsApp
                </p>
                <a
                  href="https://wa.me/33759542696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold font-semibold hover:underline text-sm sm:text-base"
                >
                  Ouvrir WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 font-serif">Email</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2 font-sans">
                  Pour toute demande d'information
                </p>
                <a
                  href="mailto:amaya.pro@outlook.fr"
                  className="text-gold font-semibold hover:underline text-sm sm:text-base"
                >
                  amaya.pro@outlook.fr
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 font-serif">Consultations</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-1 font-sans flex items-center gap-2">
                  <span className="text-gold">•</span> En cabinet : Saint-Romain-de-Colbosc (76)
                </p>
                <p className="text-sm sm:text-base text-gray-600 font-sans flex items-center gap-2">
                  <Video className="w-4 h-4 text-gold" />À distance : WhatsApp ou Zoom
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 font-serif">Disponibilités</h3>
                <p className="text-sm sm:text-base text-gray-600 font-sans">Lundi au Vendredi</p>
                <p className="text-sm sm:text-base text-gray-600 font-sans">Horaires en détail sur Calendly</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 font-serif">Suivez-moi</h3>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href="https://instagram.com/amaya.apro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gold transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                  <a
                    href="https://tiktok.com/@amaya.apro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gold transition-colors"
                  >
                    <FaTiktok className="w-4 h-4" />
                    TikTok
                  </a>
                  <a
                    href="https://facebook.com/amaya.apro.2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gold transition-colors"
                  >
                    <FaFacebook className="w-4 h-4" />
                    Facebook
                  </a>
                  <a
                    href="https://clapper.app/Maya_medium_99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gold transition-colors"
                  >
                    <Film className="w-4 h-4" />
                    Clapper
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-lg p-6 sm:p-8 text-white mystical-glow">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gold font-serif">
              Prêt(e) à franchir le pas ?
            </h3>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-white/80 leading-relaxed font-sans">
              Que vous ayez des questions précises ou simplement besoin d'écoute et de guidance, je suis là pour vous.
              Prenez contact dès maintenant pour votre première consultation.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                <span className="text-xs sm:text-sm text-white/80">Confidentialité absolue garantie</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                <span className="text-xs sm:text-sm text-white/80">Sans jugement, avec bienveillance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                <span className="text-xs sm:text-sm text-white/80">Réponses claires et authentiques</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a href="tel:+33759542696" className="phone-button w-full justify-center text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Appeler maintenant
              </a>
              <a
                href="https://wa.me/33759542696"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button w-full justify-center text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
