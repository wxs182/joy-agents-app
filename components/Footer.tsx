'use client'

import { motion } from 'framer-motion'
import { Twitter, ArrowUpRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Marketplace', href: 'https://joylanding.lovable.app/' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#' },
  { label: 'Blog', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-purple-900/30 py-12 px-6 overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(139,92,246,0.04), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl font-black gradient-text tracking-tight">
              JOY AGENTS
            </div>
            <p className="text-slate-600 text-xs mt-1">AI Agents That Work For You</p>
          </motion.div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6 justify-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-slate-500 hover:text-purple-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center glass-card hover:border-purple-500/60 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300"
              style={{ border: '1px solid rgba(139,92,246,0.2)' }}
            >
              <Twitter size={16} className="text-slate-400" />
            </a>
            <a
              href="https://joylanding.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold btn-ghost text-purple-400"
            >
              Get Your Agent
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-xs">
          <span>© 2026 Joy Marketplace. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
