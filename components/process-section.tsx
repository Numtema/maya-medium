export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Contactez-moi",
      description: "Par téléphone au 07 59 54 26 26 ou via WhatsApp. Je suis à votre écoute.",
    },
    {
      number: "02",
      title: "Exposez votre situation",
      description: "Partagez vos questionnements, vos préoccupations dans un cadre bienveillant et confidentiel.",
    },
    {
      number: "03",
      title: "Consultation personnalisée",
      description:
        "Je me connecte à vos énergies et vous transmets mes ressentis, messages et guidance avec authenticité.",
    },
    {
      number: "04",
      title: "Clarté et apaisement",
      description:
        "Vous repartez avec des réponses, une meilleure compréhension et un regard nouveau sur votre situation.",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 mystical-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-serif">Comment ça se passe ?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-sans">
            Un processus simple et bienveillant en 4 étapes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <span className="text-3xl font-bold text-gold font-serif">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white font-serif">{step.title}</h3>
              <p className="text-white/70 leading-relaxed font-sans">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
