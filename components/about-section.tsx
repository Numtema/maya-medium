import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative flex justify-center items-center order-2 md:order-1">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a24d]/20 to-[#d4b960]/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative size-full rounded-full overflow-hidden border-4 border-[#c9a24d] shadow-2xl shadow-[#c9a24d]/30">
                <Image src="/images/maya-logo-round.png" alt="Maya Medium" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gold font-serif">
              À propos de moi
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base font-sans">
              <p>
                Je m'appelle <span className="font-semibold text-gold">Maya Medium</span>, médium et voyante passionnée.
              </p>
              <p>
                Depuis mon plus jeune âge, j'ai développé une sensibilité particulière au monde spirituel. Ce don de
                médiumnité et de voyance, je l'ai cultivé et approfondi au fil des années pour vous offrir aujourd'hui
                un accompagnement authentique et bienveillant.
              </p>
              <p>
                Ma mission est simple : vous apporter clarté, réconfort et guidance dans les moments où vous en avez le
                plus besoin. Que ce soit pour des questions d'amour, de travail, de famille, ou pour un message d'un
                être cher disparu, je mets mon don à votre service avec respect et confidentialité.
              </p>
              <p className="font-semibold italic text-gold">
                "La voyance n'est pas seulement prédire l'avenir, c'est éclairer le présent pour mieux construire
                demain."
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="tel:0759542696" className="phone-button justify-center">
                Appelez-moi
              </a>
              <a
                href="https://wa.me/33759542696"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button justify-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
