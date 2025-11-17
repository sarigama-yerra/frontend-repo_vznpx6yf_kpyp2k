import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-center md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full bg-[#fff8de] px-4 py-1 text-sm font-medium text-gray-800 shadow-sm"
          >
            Social-Media-Agentur • BEEdit
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl"
          >
            Wir machen dein Unternehmen sichtbar.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-700"
          >
            Wir entwickeln deine Social-Media-Strategie, produzieren deine Videos und sorgen dafür, dass deine Marke täglich in den Feeds deiner Zielgruppe auftaucht.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#kontakt"
              className="rounded-full bg-[#ef7d8a] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#ef7d8a]/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Kostenloses Erstgespräch buchen
            </a>
            <a
              href="#prozess"
              className="rounded-full border border-gray-200 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-50"
            >
              Mehr über unsere Leistungen
            </a>
          </motion.div>
        </div>
        <div className="relative mt-10 aspect-[4/3] w-full flex-1 md:mt-0 md:aspect-[16/10]">
          <div className="absolute inset-0 rounded-3xl border border-black/5 bg-white/40 shadow-2xl backdrop-blur [box-shadow:0_10px_40px_rgba(0,0,0,.06)]">
            <Spline 
              scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" 
              style={{ width: '100%', height: '100%' }}
            />
            {/* soft gradient overlay to help contrast */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-white/60 via-transparent to-white/20"></div>
          </div>
        </div>
      </div>
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-[#fff8de] blur-3xl opacity-70"></div>
      <div className="pointer-events-none absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-[#ef7d8a]/40 blur-3xl"></div>
    </section>
  )
}

export default Hero
