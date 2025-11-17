import React from 'react'
import { CheckCircle } from 'lucide-react'

const steps = [
  {
    title: 'Strategieworkshop',
    text:
      'Wir analysieren deine aktuelle Situation, Zielgruppe und Ziele und entwickeln eine individuelle Social-Media-Strategie, die zu deinem Unternehmen passt.',
  },
  {
    title: 'Content-Konzept & Videoideen',
    text:
      'Wir denken uns kreative Videoideen aus, die deine Marke sichtbar machen und zu deiner Zielgruppe passen.',
  },
  {
    title: 'Produktion (Dreh & Schnitt)',
    text:
      'Wir skripten die Videos, filmen sie (gern mit dir oder deinem Team vor der Kamera) und kümmern uns um den Schnitt – inklusive Hooks, Untertiteln und Formaten für TikTok, Reels & Co.',
  },
  {
    title: 'Upload & Optimierung',
    text:
      'Wir laden die Videos hoch, optimieren Titel, Captions und Hashtags und werten die Performance aus, um deine Ergebnisse kontinuierlich zu verbessern.',
  },
]

const Process = () => {
  return (
    <section id="prozess" className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            So arbeiten wir mit dir zusammen
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Von der Strategie bis zum Upload – wir übernehmen den kompletten Prozess.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-[#fff8de] p-2 text-[#ef7d8a]">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Schritt {i + 1} – {s.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-4xl rounded-2xl bg-[#fff8de] p-6 text-center text-gray-900">
          Kurz gesagt: Ein Rundum-sorglos-Paket für Unternehmen, die mit Social Media wachsen und neue Kund:innen oder Mitarbeiter:innen gewinnen wollen.
        </p>
      </div>
    </section>
  )
}

export default Process
