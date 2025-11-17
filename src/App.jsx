import React from 'react'
import Hero from './components/Hero'
import Counters from './components/Counters'
import Process from './components/Process'
import Cases from './components/Cases'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="text-xl font-extrabold tracking-tight">
            <span className="mr-2 rounded-full bg-black px-2 py-1 text-white">BE</span>
            BEEdit
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#prozess" className="hover:text-black">Leistungen</a>
            <a href="#cases" className="hover:text-black">Cases</a>
            <a href="#kontakt" className="hover:text-black">Kontakt</a>
            <a href="#kontakt" className="rounded-full bg-[#ef7d8a] px-4 py-2 font-semibold text-white shadow-md shadow-[#ef7d8a]/30">Erstgespräch</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Counters />
        <div id="prozess"><Process /></div>
        <div id="cases"><Cases /></div>
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t border-black/5 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-600 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} BEEdit. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Impressum</a>
            <a href="#" className="hover:text-gray-900">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
