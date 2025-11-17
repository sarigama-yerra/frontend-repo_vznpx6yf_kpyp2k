import React from 'react'

const cases = [
  {
    title: 'Handwerksbetrieb',
    before: {
      followers: '1.200',
      posts: 'unregelmäßig',
      views: '3.000/Monat',
    },
    after: {
      followers: '4.800',
      posts: '3-4x pro Woche',
      views: '120.000/Monat',
    },
    what: 'Strategie, Reels-Format, wöchentlicher Dreh und Upload/Optimierung',
  },
  {
    title: 'Lokales Restaurant',
    before: {
      followers: '900',
      posts: 'selten',
      views: '1.500/Monat',
    },
    after: {
      followers: '3.600',
      posts: 'täglich',
      views: '300.000/Monat',
    },
    what: 'Content-Ideen, Kurzvideos, Influencer-Kooperationen, Post-Plan',
  },
  {
    title: 'Finanzdienstleister',
    before: {
      followers: '2.100',
      posts: '1x/Woche',
      views: '4.000/Monat',
    },
    after: {
      followers: '7.200',
      posts: '3x/Woche',
      views: '210.000/Monat',
    },
    what: 'Educational-Formate, Storytelling, Performance-Analyse',
  },
]

const StatCard = ({ label, data }) => (
  <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</div>
    <div className="mt-3 grid grid-cols-3 gap-4 text-sm text-gray-900">
      <div>
        <div className="text-gray-500">Follower</div>
        <div className="font-semibold">{data.followers}</div>
      </div>
      <div>
        <div className="text-gray-500">Posts</div>
        <div className="font-semibold">{data.posts}</div>
      </div>
      <div>
        <div className="text-gray-500">Views</div>
        <div className="font-semibold">{data.views}</div>
      </div>
    </div>
  </div>
)

const Cases = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            Ergebnisse, die für sich sprechen
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {cases.map((c) => (
            <div key={c.title} className="rounded-3xl bg-[#fff8de] p-6 shadow-sm">
              <div className="mb-4 text-sm font-semibold text-gray-700">{c.title}</div>
              <div className="flex flex-col gap-4 md:flex-row">
                <StatCard label="Vorher" data={c.before} />
                <StatCard label="Nachher" data={c.after} />
              </div>
              <p className="mt-4 text-sm text-gray-700">Umsetzung: {c.what}</p>
              <div className="mt-4 h-40 rounded-xl bg-white/60 ring-1 ring-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cases
