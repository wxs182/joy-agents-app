'use client'

import { motion } from 'framer-motion'
import { Check, Zap, ArrowRight, Crown, Sparkles } from 'lucide-react'

const PLANS = [
  {
    name: 'Starter',
    price: '$29',
    period: '/mo',
    description: 'Perfect for solo creators just getting started',
    icon: Zap,
    color: '#8b5cf6',
    colorDim: 'rgba(139,92,246,0.1)',
    popular: false,
    features: [
      '1 Active Agent',
      '1,000 Tasks / month',
      'Basic integrations',
      'Email support',
      'Task history (7 days)',
      'Standard speed',
    ],
    cta: 'Start with Starter',
  },
  {
    name: 'Creator',
    price: '$79',
    period: '/mo',
    description: 'For creators ready to scale their operation',
    icon: Sparkles,
    color: '#a855f7',
    colorDim: 'rgba(168,85,247,0.15)',
    popular: true,
    features: [
      '5 Active Agents',
      '10,000 Tasks / month',
      'All integrations',
      'Priority support',
      'Task history (30 days)',
      'Turbo speed',
      'Custom workflows',
      'Analytics dashboard',
    ],
    cta: 'Start Creating',
  },
  {
    name: 'Studio',
    price: '$199',
    period: '/mo',
    description: 'For studios and serious content operations',
    icon: Crown,
    color: '#fbbf24',
    colorDim: 'rgba(251,191,36,0.1)',
    popular: false,
    features: [
      'Unlimited Agents',
      'Unlimited Tasks',
      'Custom agent creation',
      'Dedicated account manager',
      'Unlimited task history',
      'Lightning speed',
      'API access',
      'Team collaboration',
      'White-label option',
    ],
    cta: 'Go Studio',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.06) 0%, transparent 70%)',
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
            style={{ border: '1px solid rgba(251,191,36,0.3)' }}>
            <span className="text-sm text-yellow-400 font-medium">💰 Simple Pricing</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Pick Your{' '}
            <span className="gradient-text">Power Level</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Cancel anytime. No hidden fees. Upgrade or downgrade whenever you want.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative glass-card rounded-3xl p-7 ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                style={{
                  border: plan.popular
                    ? `2px solid ${plan.color}60`
                    : `1px solid ${plan.color}30`,
                  boxShadow: plan.popular
                    ? `0 0 40px ${plan.color}25`
                    : 'none',
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="popular-badge text-white whitespace-nowrap">
                      🔥 Most Popular
                    </div>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{
                      background: plan.colorDim,
                      border: `1px solid ${plan.color}40`,
                    }}
                  >
                    <Icon size={22} style={{ color: plan.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-1">{plan.name}</h3>
                  <p className="text-slate-500 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span
                      className="text-5xl font-black"
                      style={{ color: plan.color, textShadow: `0 0 20px ${plan.color}50` }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-slate-500 text-lg mb-2">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: plan.colorDim, border: `1px solid ${plan.color}40` }}
                      >
                        <Check size={11} style={{ color: plan.color }} />
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://joylanding.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${
                    plan.popular ? 'btn-primary text-white' : 'btn-ghost'
                  }`}
                  style={
                    plan.popular
                      ? {}
                      : { color: plan.color, borderColor: `${plan.color}50` }
                  }
                >
                  {plan.cta}
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-600 text-sm mt-8"
        >
          All plans include a 7-day free trial. No credit card required to start.
        </motion.p>
      </div>
    </section>
  )
}
