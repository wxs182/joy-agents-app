import Hero from '@/components/Hero'
import AgentShowcase from '@/components/AgentShowcase'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050510] overflow-hidden">
      <Hero />
      <div className="section-divider mx-auto max-w-6xl" />
      <AgentShowcase />
      <div className="section-divider mx-auto max-w-6xl" />
      <HowItWorks />
      <div className="section-divider mx-auto max-w-6xl" />
      <Testimonials />
      <div className="section-divider mx-auto max-w-6xl" />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
