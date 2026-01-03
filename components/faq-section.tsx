"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Qu'est-ce qu'une consultation de voyance ou de médiumnité ?",
      answer:
        "Une consultation est un échange confidentiel durant lequel je vous apporte des éclairages sur votre situation, avec écoute et bienveillance.",
    },
    {
      question: "Comment se déroule une consultation de voyance à distance ?",
      answer:
        "Vous me contactez par téléphone, WhatsApp ou message. Nous convenons d'un moment. Pendant la consultation, je vous partage mes perceptions et réponses. Vous pouvez poser vos questions.",
    },
    {
      question: "Dois-je préparer quelque chose avant la consultation ?",
      answer:
        "Aucune préparation particulière n'est nécessaire. Il est simplement utile d'avoir votre question en tête.",
    },
    {
      question: "Quels sujets puis-je aborder lors d'une consultation ?",
      answer: "L'amour, les relations, le travail, les choix de vie ou le développement personnel.",
    },
    {
      question: "La consultation est-elle confidentielle ?",
      answer: "Oui. Tous les échanges sont strictement confidentiels et respectent votre vie privée.",
    },
    {
      question: "Les consultations se font-elles à distance ?",
      answer: "Oui, les consultations se font à distance et sont accessibles partout en France.",
    },
    {
      question: "La voyance peut-elle prédire l'avenir ?",
      answer: "Elle apporte des tendances et des éclairages possibles, sans figer l'avenir.",
    },
    {
      question: "Puis-je poser une question précise ou générale ?",
      answer: "Les deux sont possibles.",
    },
    {
      question: "Faut-il y croire pour consulter un médium ?",
      answer: "Il n'est pas nécessaire d'y croire absolument. L'important est l'échange.",
    },
    {
      question: "Combien de temps dure une consultation ?",
      answer: "La durée varie selon la demande et l'échange.",
    },
    {
      question: "Prenez-vous des décisions à ma place ?",
      answer: "Non. Vous restez toujours maître de vos choix.",
    },
    {
      question: "Les consultations remplacent-elles un avis médical ou juridique ?",
      answer: "Non, jamais.",
    },
    {
      question: "Peut-on consulter en période de doute ?",
      answer: "Oui, beaucoup de personnes consultent lors de périodes de questionnement.",
    },
    {
      question: "Y a-t-il des promesses de résultats ?",
      answer: "Non. Aucune promesse irréaliste n'est faite.",
    },
    {
      question: "Comment me contacter pour une consultation ?",
      answer:
        "Le plus simple est de me contacter par téléphone ou via WhatsApp. Vous pouvez également utiliser le formulaire de contact du site.",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 mystical-gradient" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-serif">Questions Fréquentes</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-sans">
            Vous avez des questions ? Voici les réponses aux interrogations les plus courantes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left transition-all"
              >
                <span className="font-semibold text-white font-sans pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gold transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-4" : "max-h-0"
                }`}
              >
                <p className="px-6 text-white/80 leading-relaxed font-sans">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
