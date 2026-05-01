import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import TrustBar from './components/TrustBar'
import Hero from './components/Hero'
import FeaturedLogos from './components/FeaturedLogos'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Process from './components/Process'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import { RetellProvider } from './RetellContext'

function App() {
  return (
    <RetellProvider>
      <div className="min-h-screen bg-background relative selection:bg-accent/30 selection:text-white">
        <Navbar />
        <TrustBar />
        <Hero />
        <FeaturedLogos />
        <Features />
        <Testimonials />
        <Booking />
        <Process />
        <CTASection />
        <Footer />
        <Analytics />
      </div>
    </RetellProvider>
  )
}

export default App
