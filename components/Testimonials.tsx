'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote: 'My Content Agent saved me 15 hours last week. My channel is growing faster than ever.',
    handle: '@alex_creates',
    role: '250K YouTube Subscribers',
    avatar: '🎥',
    stars: 5,
    color: '#8b5cf6',
    highlight: '15 hours saved',
  },
  {
    quote: 'The Outreach Agent booked 12 brand deals in one month. This is insane ROI for $49.',
    handle: '@priya_builds',
    role: 'Creator Economy Expert',
    avatar: '🚀',
    stars: 5,
    color: '#ec4899',
    highlight: '12 brand deals',
  },
  {
    quote: 'I run my entire newsletter with the Research + Content agents. Total game changer.',
    handle: '@marcus_io',
    role: 'Substack Top 100',
    avatar: '✍️',
    stars: 5,
    color: '#22d3ee',
    highlight: 'Full newsletter automation',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(236,72,153,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            style={{ border: '1px solid rgba(236,72,153,0.3)' }}>
            <span className="text-sm text-pink-400 font-medium">💬 Creator Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Creators Are Already{' '}
            <span className="gradient-text-pink">Winning</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Real results from real creators who delegated their busywork to AI.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.handle}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl p-7 relative overflow-hidden group"
              style={{ border: `1px solid ${t.color}30` }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{
                  background: `radial-gradient(ellipse at bottom right, ${t.color}15, transparent 70%)`,
                }}
              />

              {/* Quote icon */}
              <div className="mb-4 relative z-10">
                <Quote size={28} style={{ color: t.color, opacity: 0.6 }} />
              </div>

              {/* Highlight pill */}
              <div
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                style={{
                  background: `${t.color}20`,
                  color: t.color,
                  border: `1px solid ${t.color}40`,
                }}
              >
                ✨ {t.highlight}
              </div>

              {/* Quote text */}
              <p className="text-slate-200 text-base leading-relaxed mb-6 relative z-10 font-medium">
                &quot;{t.quote}&quot;
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    fill={t.color}
                    style={{ color: t.color }}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 relative z-10"
                style={{ borderTop: `1px solid ${t.color}20`, paddingTop: '16px' }}>
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl"
                  style={{
                    background: `${t.color}20`,
                    border: `1px solid ${t.color}40`,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: t.color }}>
                    {t.handle}
                  </div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: '⭐', text: '4.9/5 avg rating' },
            { icon: '🔒', text: 'SOC 2 compliant' },
            { icon: '⚡', text: '99.9% uptime SLA' },
            { icon: '💯', text: '30-day money back' },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-slate-400"
              style={{ border: '1px solid rgba(139,92,246,0.2)' }}
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
