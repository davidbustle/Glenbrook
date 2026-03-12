import React from 'react'
import Navbar from './components/Navbar'
import TrustBar from './components/TrustBar'
import Hero from './components/Hero'
import FeaturedLogos from './components/FeaturedLogos'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-accent/30 selection:text-white">
      <Navbar />
      <TrustBar />
      <Hero />
      <FeaturedLogos />
      <Features />
      <Testimonials />
      <Process />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
