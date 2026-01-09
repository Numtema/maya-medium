import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Scale, MapPin, Phone } from "lucide-react"

export const metadata = {
  title: "Mentions Légales | Maya Medium",
  description: "Mentions légales du site Maya Medium, voyance et médiumnité professionnelle.",
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gold/20">
          <div className="flex items-center gap-3 mb-8">
            <Scale className="w-8 h-8 text-gold" />
            <h1 className="text-4xl font-serif text-dark font-bold">Mentions Légales</h1>
          </div>

          <div className="space-y-8 text-dark/80">
            <section>
              <h2 className="text-2xl font-serif text-dark mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-gold" />
                Informations de l'entreprise
              </h2>
              <div className="space-y-2 pl-8">
                <p>
                  <strong>Nom commercial :</strong> Maya Medium
                </p>
                <p>
                  <strong>Forme juridique :</strong> Auto-entrepreneur
                </p>
                <p>
                  <strong>Adresse :</strong> Saint-Romain-de-Colbosc, 76430, France
                </p>
                <p>
                  <strong>SIRET :</strong> [À compléter]
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4 flex items-center gap-2">
                <Phone className="w-6 h-6 text-gold" />
                Contact
              </h2>
              <div className="space-y-2 pl-8">
                <p>
                  <strong>Téléphone :</strong>{" "}
                  <a href="tel:+33759542696" className="text-gold hover:underline">
                    07 59 54 26 96
                  </a>
                </p>
                <p>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:amaya.pro@outlook.fr" className="text-gold hover:underline">
                    amaya.pro@outlook.fr
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4">Hébergement</h2>
              <div className="space-y-2 pl-8">
                <p>
                  <strong>Hébergeur :</strong> Vercel Inc.
                </p>
                <p>
                  <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                </p>
                <p>
                  <strong>Site web :</strong>{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    vercel.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4">Propriété intellectuelle</h2>
              <p className="pl-8 leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, logos, vidéos) est la propriété exclusive de Maya
                Medium ou est utilisé avec autorisation. Toute reproduction, distribution ou utilisation sans
                autorisation écrite préalable est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4">Données personnelles</h2>
              <p className="pl-8 leading-relaxed">
                Les informations collectées via le formulaire de contact sont destinées exclusivement à Maya Medium pour
                répondre à vos demandes. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de
                suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à{" "}
                <a href="mailto:amaya.pro@outlook.fr" className="text-gold hover:underline">
                  amaya.pro@outlook.fr
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4">Cookies</h2>
              <p className="pl-8 leading-relaxed">
                Ce site n'utilise pas de cookies de suivi ou publicitaires. Seuls des cookies techniques nécessaires au
                bon fonctionnement du site peuvent être utilisés.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
