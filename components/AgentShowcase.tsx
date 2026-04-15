'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const AGENTS = [
  {
    emoji: '🎬',
    name: 'Content Creator Agent',
    description: 'Writes scripts, captions, tweets, and blogs on autopilot',
    price: '$29/mo',
    color: '#8b5cf6',
    colorDim: 'rgba(139,92,246,0.15)',
    colorBorder: 'rgba(139,92,246,0.4)',
    tag: 'Most Used',
  },
  {
    emoji: '🔍',
    name: 'Research Agent',
    description: 'Deep-dives any topic and delivers structured reports instantly',
    price: '$19/mo',
    color: '#22d3ee',
    colorDim: 'rgba(34,211,238,0.15)',
    colorBorder: 'rgba(34,211,238,0.4)',
    tag: 'Best Value',
  },
  {
    emoji: '📱',
    name: 'Social Media Agent',
    description: 'Posts, engages, and grows your audience 24/7',
    price: '$39/mo',
    color: '#ec4899',
    colorDim: 'rgba(236,72,153,0.15)',
    colorBorder: 'rgba(236,72,153,0.4)',
    tag: 'Top Rated',
  },
  {
    emoji: '📧',
    name: 'Outreach Agent',
    description: 'Finds leads, writes personalized emails, follows up automatically',
    price: '$49/mo',
    color: '#4ade80',
    colorDim: 'rgba(74,222,128,0.15)',
    colorBorder: 'rgba(74,222,128,0.4)',
    tag: 'Power Agent',
  },
  {
    emoji: '📅',
    name: 'Scheduling Agent',
    description: 'Manages your calendar, books meetings, sends reminders',
    price: '$14/mo',
    color: '#fbbf24',
    colorDim: 'rgba(251,191,36,0.15)',
    colorBorder: 'rgba(251,191,36,0.4)',
    tag: 'Essential',
  },
  {
    emoji: '📊',
    name: 'Data Agent',
    description: 'Scrapes, analyzes, and visualizes data from any source',
    price: '$24/mo',
    color: '#22d3ee',
    colorDim: 'rgba(139,92,246,0.1)',
    colorBorder: 'rgba(139,92,246,0.3)',
    tag: 'Analytics',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function AgentShowcase() {
  return (
    <section id="agents" className="py-24 px-6 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(34,211,238,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            style={{ border: '1px solid rgba(34,211,238,0.3)' }}>
            <span className="text-sm text-cyan-400 font-medium">⚡ Agent Marketplace</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Meet Your{' '}
            <span className="gradient-text">New Team</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Hand-crafted AI agents built for creators. Each one specialized, powerful, and ready to deploy in seconds.
          </p>
        </motion.div>

        {/* Agent cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {AGENTS.map((agent) => (
            <motion.div
              key={agent.name}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-2xl p-6 glass-card cursor-pointer group"
              style={{
                border: `1px solid ${agent.colorBorder}`,
                transition: 'all 0.3s ease',
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${agent.colorDim}, transparent 70%)`,
                }}
              />

              {/* Tag badge */}
              <div className="absolute top-4 right-4">
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-full"
                  style={{
                    background: agent.colorDim,
                    color: agent.color,
                    border: `1px solid ${agent.colorBorder}`,
                  }}
                >
                  {agent.tag}
                </span>
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 relative z-10"
                style={{
                  background: agent.colorDim,
                  border: `1px solid ${agent.colorBorder}`,
                  boxShadow: `0 0 20px ${agent.color}30`,
                }}
              >
                {agent.emoji}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-slate-100 mb-2">{agent.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{agent.description}</p>

                {/* Price + CTA row */}
                <div className="flex items-center justify-between mt-auto pt-4"
                  style={{ borderTop: `1px solid ${agent.colorBorder}` }}>
                  <div>
                    <span
                      className="text-2xl font-black"
                      style={{ color: agent.color, textShadow: `0 0 15px ${agent.color}60` }}
                    >
                      {agent.price.split('/')[0]}
                    </span>
                    <span className="text-slate-500 text-sm">/mo</span>
                  </div>
                  <a
                    href="https://joylanding.lovable.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 group-hover:gap-2"
                    style={{
                      background: agent.colorDim,
                      color: agent.color,
                      border: `1px solid ${agent.colorBorder}`,
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Deploy Now
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 mb-4">
            Can&apos;t find what you need?{' '}
            <span className="text-purple-400 font-semibold">Custom agents available on Studio plan</span>
          </p>
          <a
            href="https://joylanding.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white"
          >
            Browse All 50+ Agents
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
