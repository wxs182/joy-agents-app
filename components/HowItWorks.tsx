'use client'

import { motion } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    emoji: '⚡',
    title: 'Choose Your Agent',
    description: 'Browse 50+ pre-built agents or describe what you need in plain English. Find the perfect AI worker for any task.',
    color: '#8b5cf6',
    colorDim: 'rgba(139,92,246,0.1)',
  },
  {
    number: '02',
    emoji: '🔧',
    title: 'Configure in Seconds',
    description: 'Connect your tools, set your preferences, and define your goals. Our guided setup takes under 2 minutes.',
    color: '#22d3ee',
    colorDim: 'rgba(34,211,238,0.1)',
  },
  {
    number: '03',
    emoji: '🚀',
    title: 'Deploy & Delegate',
    description: 'Your agent starts working immediately. No coding required. Watch tasks disappear from your to-do list in real time.',
    color: '#ec4899',
    colorDim: 'rgba(236,72,153,0.1)',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)',
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            style={{ border: '1px solid rgba(139,92,246,0.3)' }}>
            <span className="text-sm text-purple-400 font-medium">🔥 Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Go From Idea to Agent{' '}
            <br />
            <span className="gradient-text">in Minutes</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No engineers. No complexity. Just point, click, and delegate.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), rgba(34,211,238,0.4), rgba(236,72,153,0.4), transparent)',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-3xl p-8 text-center relative overflow-hidden group"
                  style={{ border: `1px solid ${step.color}30` }}
                >
                  {/* Background glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at top, ${step.colorDim}, transparent 70%)`,
                    }}
                  />

                  {/* Step number - big background */}
                  <div
                    className="absolute top-2 right-4 text-8xl font-black opacity-5 select-none pointer-events-none"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </div>

                  {/* Step badge */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-6"
                    style={{
                      background: step.colorDim,
                      color: step.color,
                      border: `1px solid ${step.color}40`,
                    }}
                  >
                    STEP {step.number}
                  </div>

                  {/* Emoji */}
                  <div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6 relative z-10"
                    style={{
                      background: step.colorDim,
                      border: `2px solid ${step.color}40`,
                      boxShadow: `0 0 30px ${step.color}30`,
                    }}
                  >
                    {step.emoji}
                  </div>

                  {/* Content */}
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: step.color }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                    {step.description}
                  </p>

                  {/* Arrow for non-last steps */}
                  {i < 2 && (
                    <div className="lg:hidden flex justify-center mt-8">
                      <div className="w-px h-8" style={{ background: `linear-gradient(to bottom, ${step.color}60, transparent)` }} />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom detail */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 glass-card rounded-2xl px-6 py-3"
            style={{ border: '1px solid rgba(74,222,128,0.3)' }}>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-semibold">Average setup time: 90 seconds</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
