import React from 'react'

const testimonials = [
  {
    name: 'Lea M., Marketing-Leitung',
    quote:
      'Seit BEEdit unsere Reels übernimmt, bekommen wir jede Woche neue Anfragen über Instagram. Sichtbarkeit und Anfragen sind deutlich gestiegen.',
  },
  {
    name: 'Jonas M., Geschäftsführer',
    quote:
      'Die Zusammenarbeit ist super unkompliziert – wir müssen nur zum Dreh erscheinen, den Rest erledigt das Team. Klare Empfehlung!',
  },
  {
    name: 'Anonym, Personalabteilung',
    quote:
      'Wir konnten mit den Videos gezielt neue Bewerber:innen erreichen und offene Stellen schneller besetzen. Inhalte, die wirklich performen.',
  },
]

const Avatar = ({ name }) => (
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ef7d8a] text-sm font-bold text-white">
    {name.split(' ').map((n) => n[0]).join('')}
  </div>
)

const Testimonials = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            Was unsere Kund:innen sagen
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Avatar name={t.name} />
                <div className="text-sm font-semibold text-gray-900">{t.name}</div>
              </div>
              <p className="mt-4 text-gray-700">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
