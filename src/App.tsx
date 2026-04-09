import React from 'react';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { PremiumCaseStudy } from './components/PremiumCaseStudy';
import { Trust } from './components/Trust';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Proof } from './components/Proof';
import { Services } from './components/Services';
import { CaseStudy } from './components/CaseStudy';
import { Process } from './components/Process';
import { Offer } from './components/Offer';
import { Testimonials } from './components/Testimonials';
import { LeadForm } from './components/LeadForm';
import { FooterCTA } from './components/FooterCTA';
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-accent-blue/30 selection:text-blue-100 flex flex-col font-sans overflow-x-hidden">
      <CustomCursor />
      
      {/* Navigation - Glassmorphism */}
      <nav className="fixed top-0 w-full z-50 border-b border-glass-border bg-[#0a0a0c]/60 backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-2xl font-semibold tracking-tighter tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">RahulDesigns.</span>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-300">
            <a href="#work" className="hover:text-white transition-colors drop-shadow-sm">Our Work</a>
            <a href="#process" className="hover:text-white transition-colors drop-shadow-sm">Process</a>
            <a href="#services" className="hover:text-white transition-colors drop-shadow-sm">Services</a>
          </div>
          <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Book a Call
          </button>
        </div>
      </nav>

      <main className="flex-1 w-full relative z-0">
        <Hero />
        <SelectedWork />
        <PremiumCaseStudy />
        <Trust />
        <Problem />
        <Solution />
        <Proof />
        <Services />
        <CaseStudy />
        <Process />
        <Offer />
        <Testimonials />
        <LeadForm />
        <FooterCTA />
      </main>

    </div>
  )
}

export default App;
