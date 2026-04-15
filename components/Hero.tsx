'use client'

import { motion } from 'framer-motion'
import { Zap, ArrowRight, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 2,
  color: ['#8b5cf6', '#22d3ee', '#ec4899', '#4ade80', '#fbbf24'][Math.floor(Math.random() * 5)],
}))

const FLOATING_AGENTS = [
  { emoji: '🎬', label: 'Content', color: '#8b5cf6', x: -280, y: -60, delay: 0 },
  { emoji: '🔍', label: 'Research', color: '#22d3ee', x: 280, y: -80, delay: 0.5 },
  { emoji: '📱', label: 'Social', color: '#ec4899', x: -300, y: 120, delay: 1 },
  { emoji: '📧', label: 'Outreach', color: '#4ade80', x: 300, y: 100, delay: 1.5 },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      {/* Deep space radial glow */}
      <div className="absolute inset-0 radial-glow-purple pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Neon particles */}
      {mounted && PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating agent cards */}
      {mounted && FLOATING_AGENTS.map((agent, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl glass-card"
          style={{
            x: agent.x,
            y: agent.y,
            border: `1px solid ${agent.color}40`,
            boxShadow: `0 0 20px ${agent.color}30`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [agent.y, agent.y - 15, agent.y],
          }}
          transition={{
            opacity: { duration: 0.6, delay: agent.delay + 1 },
            scale: { duration: 0.6, delay: agent.delay + 1 },
            y: {
              duration: 4 + i,
              delay: agent.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <span className="text-xl">{agent.emoji}</span>
          <span className="text-sm font-semibold" style={{ color: agent.color }}>
            {agent.label} Agent
          </span>
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: agent.color }}
          />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 glass-card"
          style={{ border: '1px solid rgba(139,92,246,0.4)' }}
        >
          <span className="text-sm">🤖</span>
          <span className="text-sm font-medium text-purple-400">Powered by Joy AI</span>
          <Zap size={14} className="text-yellow-400" />
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight"
        >
          <span className="gradient-text-hero">Your Personal</span>
          <br />
          <span className="gradient-text-hero">AI Agent Army</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Deploy intelligent agents that handle your content, research, outreach, and more —
          so you can focus on creating.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="https://joylanding.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg text-white"
          >
            Deploy Your First Agent
            <ArrowRight size={20} />
          </a>
          <a
            href="#how-it-works"
            className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-slate-300"
          >
            See How It Works
            <ChevronDown size={18} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center items-center"
        >
          {[
            { value: '2,400+', label: 'Creators', color: '#8b5cf6' },
            { value: '50+', label: 'Agent Types', color: '#22d3ee' },
            { value: '10M+', label: 'Tasks Completed', color: '#ec4899' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl md:text-4xl font-black mb-1"
                style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}60` }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #050510, transparent)' }}
      />
    </section>
  )
}
