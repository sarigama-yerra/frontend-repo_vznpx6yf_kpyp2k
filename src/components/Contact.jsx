import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Gesendet! Wir melden uns in Kürze.')
    e.currentTarget.reset()
  }

  return (
    <section id="kontakt" className="w-full bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Bereit, dein Unternehmen sichtbar zu machen?</h2>
          <p className="mt-4 text-lg text-white/80">
            Lass uns über deine Ziele sprechen und schauen, wie wir deine Marke auf Social Media groß machen können.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-4 rounded-3xl bg-white p-6 text-black shadow-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <input required type="text" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ef7d8a]" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">E-Mail</label>
                <input required type="email" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ef7d8a]" />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Unternehmen</label>
              <input type="text" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ef7d8a]" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Nachricht</label>
              <textarea rows="4" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ef7d8a]"></textarea>
            </div>
            <button type="submit" className="w-full rounded-full bg-[#ef7d8a] px-6 py-3 font-semibold text-white shadow-lg shadow-[#ef7d8a]/30">
              Jetzt kostenloses Erstgespräch anfragen
            </button>
            {status && <p className="pt-2 text-sm text-green-700">{status}</p>}
          </form>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Oder direkt per Mail</h3>
            <p className="mt-2 text-white/80">
              Schreib uns an: <a href="mailto:hallo@beedit.de" className="text-[#ef7d8a] underline">hallo@beedit.de</a>
            </p>
            <div className="mt-6 rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-white/80">Unser Versprechen:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Antwort innerhalb von 24 Stunden</li>
                <li>Konkrete Ideen im Erstgespräch</li>
                <li>Transparente, faire Pakete</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
