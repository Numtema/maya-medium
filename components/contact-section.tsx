import { Phone, MessageCircle, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gold font-serif">Contactez-moi</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Je suis à votre écoute pour vous accompagner. N'hésitez pas à me contacter
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 font-serif">Téléphone</h3>
                <p className="text-gray-600 mb-2 font-sans">Appelez-moi directement pour une consultation</p>
                <a href="tel:0759542626" className="text-gold font-semibold hover:underline">
                  07 59 54 26 26
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 font-serif">WhatsApp</h3>
                <p className="text-gray-600 mb-2 font-sans">Consultations également disponibles sur WhatsApp</p>
                <a
                  href="https://wa.me/33759542626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold font-semibold hover:underline"
                >
                  Ouvrir WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 font-serif">Email</h3>
                <p className="text-gray-600 mb-2 font-sans">Pour toute demande d'information</p>
                <a href="mailto:maya.medium@contact.fr" className="text-gold font-semibold hover:underline">
                  maya.medium@contact.fr
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 font-serif">Disponibilités</h3>
                <p className="text-gray-600 font-sans">Lundi au Samedi : 9h - 20h</p>
                <p className="text-gray-600 font-sans">Dimanche : Sur rendez-vous</p>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-lg p-8 text-white mystical-glow">
            <h3 className="text-2xl font-bold mb-6 text-gold font-serif">Prêt(e) à franchir le pas ?</h3>
            <p className="mb-6 text-white/80 leading-relaxed font-sans">
              Que vous ayez des questions précises ou simplement besoin d'écoute et de guidance, je suis là pour vous.
              Prenez contact dès maintenant pour votre première consultation.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-sm text-white/80">Confidentialité absolue garantie</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-sm text-white/80">Sans jugement, avec bienveillance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-sm text-white/80">Réponses claires et authentiques</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a href="tel:0759542626" className="phone-button w-full justify-center">
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>
              <a
                href="https://wa.me/33759542626"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button w-full justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
