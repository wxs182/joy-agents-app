'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const PARTICLES_CTA = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 3,
  color: ['#8b5cf6', '#22d3ee', '#ec4899'][Math.floor(Math.random() * 3)],
}))

export default function FinalCTA() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient-bg" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Neon particles */}
      {mounted && PARTICLES_CTA.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 5}px ${p.color}`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 3,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Large radial glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.3) 0%, rgba(34,211,238,0.1) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
          style={{
            background: 'rgba(139,92,246,0.2)',
            border: '1px solid rgba(139,92,246,0.5)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Sparkles size={16} className="text-purple-400" />
          <span className="text-sm font-semibold text-purple-300">Start in 90 seconds</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
        >
          Ready to Build Your
          <br />
          <span className="gradient-text-hero">Agent Army?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          Join 2,400+ creators who&apos;ve delegated their busywork to AI.
          <br />
          Your next hour of work? Let the agents handle it.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://joylanding.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-xl text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Free Trial
            <ArrowRight size={22} />
          </motion.a>
        </motion.div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-slate-600 text-sm"
        >
          No credit card required · 7-day free trial · Cancel anytime
        </motion.p>
      </div>
    </section>
  )
}
