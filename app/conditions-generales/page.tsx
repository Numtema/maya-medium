import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FileText, AlertCircle, CalendarCheck, CreditCard } from "lucide-react"

export const metadata = {
  title: "Conditions Générales de Vente | Maya Medium",
  description: "Conditions générales de vente et d'utilisation des services de Maya Medium.",
}

export default function ConditionsGeneralesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gold/20">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-gold" />
            <h1 className="text-4xl font-serif text-dark font-bold">Conditions Générales de Vente</h1>
          </div>

          <div className="space-y-8 text-dark/80">
            <section>
              <h2 className="text-2xl font-serif text-dark mb-4">Préambule</h2>
              <p className="pl-8 leading-relaxed">
                Les présentes conditions générales de vente (CGV) s'appliquent à toutes les prestations de services
                proposées par Maya Medium. Toute consultation implique l'acceptation sans réserve des présentes CGV.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4">Services proposés</h2>
              <div className="pl-8 space-y-3">
                <p className="leading-relaxed">Maya Medium propose les services suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Consultations de voyance et médiumnité</li>
                  <li>Messages des défunts</li>
                  <li>Guidance spirituelle</li>
                  <li>Soins énergétiques</li>
                  <li>Lecture akashique</li>
                  <li>Communication animale</li>
                  <li>Ateliers et conférences en groupe</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4 flex items-center gap-2">
                <CalendarCheck className="w-6 h-6 text-gold" />
                Réservation et rendez-vous
              </h2>
              <div className="pl-8 space-y-3">
                <p className="leading-relaxed">
                  Les consultations se font uniquement sur rendez-vous via Calendly, téléphone, WhatsApp ou email. Toute
                  réservation est considérée comme ferme et définitive dès confirmation.
                </p>
                <p className="leading-relaxed">
                  <strong>Annulation :</strong> Toute annulation doit être effectuée au moins 24 heures avant le
                  rendez-vous. Passé ce délai, la consultation sera due dans son intégralité.
                </p>
                <p className="leading-relaxed">
                  <strong>Retard :</strong> En cas de retard de votre part, la durée de la consultation ne sera pas
                  prolongée.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4 flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-gold" />
                Tarifs et paiement
              </h2>
              <div className="pl-8 space-y-3">
                <p className="leading-relaxed">
                  Les tarifs sont indiqués en euros TTC et peuvent être modifiés à tout moment. Le tarif applicable est
                  celui en vigueur au moment de la réservation.
                </p>
                <p className="leading-relaxed">
                  <strong>Modes de paiement acceptés :</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Espèces (consultations en cabinet)</li>
                  <li>Virement bancaire</li>
                  <li>PayPal</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Le paiement est généralement requis avant ou lors de la consultation. Pour les consultations à
                  distance, le paiement peut être demandé en amont.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-gold" />
                Disclaimer important
              </h2>
              <div className="pl-8 space-y-3 bg-gold/10 p-6 rounded-xl border border-gold/30">
                <p className="leading-relaxed font-semibold">
                  La voyance et la médiumnité sont des arts divinatoires qui ne se substituent pas à un avis médical,
                  juridique ou financier professionnel.
                </p>
                <p className="leading-relaxed">
                  Les consultations sont données à titre indicatif et ne peuvent en aucun cas remplacer l'avis d'un
                  médecin, d'un avocat, d'un conseiller financier ou de tout autre professionnel qualifié.
                </p>
                <p className="leading-relaxed">
                  Maya Medium ne peut être tenue responsable des décisions prises à la suite d'une consultation. Vous
                  restez maître de vos choix et de votre libre arbitre.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4">Confidentialité</h2>
              <p className="pl-8 leading-relaxed">
                Toutes les informations partagées lors des consultations sont strictement confidentielles et ne seront
                jamais divulguées à des tiers, sauf obligation légale.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4">Éthique professionnelle</h2>
              <div className="pl-8 space-y-3">
                <p className="leading-relaxed">Maya Medium s'engage à :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Exercer avec bienveillance, respect et sans jugement</li>
                  <li>Ne jamais promettre de résultats garantis ou de miracles</li>
                  <li>Ne jamais créer de dépendance ou d'emprise psychologique</li>
                  <li>Refuser toute demande contraire à l'éthique ou à la loi</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4">Droit de rétractation</h2>
              <p className="pl-8 leading-relaxed">
                Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être
                exercé pour les prestations de services pleinement exécutées avant la fin du délai de rétractation et
                dont l'exécution a commencé après accord préalable exprès du consommateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4">Litiges</h2>
              <p className="pl-8 leading-relaxed">
                En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut, les
                tribunaux français seront seuls compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-dark mb-4">Modifications</h2>
              <p className="pl-8 leading-relaxed">
                Maya Medium se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont
                celles en vigueur au moment de la réservation. Dernière mise à jour : 9 janvier 2026.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
