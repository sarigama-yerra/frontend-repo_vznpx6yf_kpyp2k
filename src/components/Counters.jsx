import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const Counter = ({ value, suffix = '+', label }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({
        number: value,
        transition: { duration: 2.2, ease: 'easeOut' },
      })
    }
  }, [inView, controls, value])

  return (
    <div ref={ref} className="text-center">
      <motion.span
        initial={{ number: 0 }}
        animate={controls}
      >
        {({ number }) => (
          <span className="text-5xl font-extrabold text-[#ef7d8a] md:text-6xl">
            {Math.floor(number).toLocaleString('de-DE')}{suffix}
          </span>
        )}
      </motion.span>
      <p className="mt-2 text-sm text-[#fff8de] md:text-base">{label}</p>
    </div>
  )
}

const Counters = () => {
  return (
    <section className="w-full bg-black py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 text-white sm:grid-cols-3 lg:px-8">
        <Counter value={1000} label="Social Media Posts erstellt" />
        <Counter value={7000000} label="Views für unsere Kund:innen generiert" />
        <Counter value={20} label="betreute Marken & Unternehmen" />
      </div>
    </section>
  )
}

export default Counters
