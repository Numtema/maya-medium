import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, UserCheck } from "lucide-react"

export const metadata = {
  title: "Politique de Confidentialité | Maya Medium",
  description: "Politique de confidentialité et protection des données personnelles - Maya Medium.",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gold/20">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-gold" />
            <h1 className="text-4xl font-serif text-dark font-bold">Politique de Confidentialité</h1>
          </div>

          <div className="space-y-8 text-dark/80">
            <section>
              <h2 className="text-2xl font-serif text-dark mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-gold" />
                Protection de vos données
              </h2>
              <p className="pl-8 leading-relaxed">
                Maya Medium s'engage à protéger la confidentialité de vos données personnelles. Cette politique explique
                comment nous collectons, utilisons et protégeons vos informations conformément au Règlement Général sur
                la Protection des Données (RGPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-gold" />
                Données collectées
              </h2>
              <div className="pl-8 space-y-3">
                <p className="leading-relaxed">
                  Nous collectons uniquement les données nécessaires à la fourniture de nos services :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Informations partagées lors des consultations (strictement confidentielles)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4">Utilisation des données</h2>
              <div className="pl-8 space-y-3">
                <p className="leading-relaxed">Vos données sont utilisées pour :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Répondre à vos demandes de renseignements</li>
                  <li>Planifier et gérer vos rendez-vous</li>
                  <li>Fournir nos services de voyance et médiumnité</li>
                  <li>Vous envoyer des confirmations de rendez-vous</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers à des fins
                  commerciales.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4">Confidentialité des consultations</h2>
              <p className="pl-8 leading-relaxed">
                Toutes les informations partagées lors de vos consultations sont strictement confidentielles. Maya
                Medium s'engage à ne jamais divulguer le contenu de vos échanges, sauf obligation légale.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4 flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-gold" />
                Vos droits
              </h2>
              <div className="pl-8 space-y-3">
                <p className="leading-relaxed">Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles
                  </li>
                  <li>
                    <strong>Droit de rectification :</strong> corriger des données inexactes
                  </li>
                  <li>
                    <strong>Droit à l'effacement :</strong> demander la suppression de vos données
                  </li>
                  <li>
                    <strong>Droit d'opposition :</strong> vous opposer au traitement de vos données
                  </li>
                  <li>
                    <strong>Droit à la portabilité :</strong> récupérer vos données dans un format exploitable
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Pour exercer ces droits, contactez-nous à{" "}
                  <a href="mailto:amaya.pro@outlook.fr" className="text-gold hover:underline">
                    amaya.pro@outlook.fr
                  </a>
                  .
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4">Conservation des données</h2>
              <p className="pl-8 leading-relaxed">
                Vos données sont conservées pendant la durée nécessaire à la fourniture de nos services et conformément
                aux obligations légales. Vous pouvez demander leur suppression à tout moment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4">Sécurité</h2>
              <p className="pl-8 leading-relaxed">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger
                vos données contre tout accès, modification, divulgation ou destruction non autorisés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4">Modifications</h2>
              <p className="pl-8 leading-relaxed">
                Cette politique de confidentialité peut être mise à jour. Nous vous encourageons à la consulter
                régulièrement. La dernière mise à jour date du 9 janvier 2026.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
