
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Methodology from './components/Methodology';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SocialSidebar from './components/SocialSidebar';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative">
      {/* High-fidelity interactive galaxy background */}
      <BackgroundAnimation />
      
      {/* Global Subtle Grid Pattern - Lowered opacity to allow Galaxy effect to shine */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10 animate-pan-grid bg-grid-custom"
      ></div>
      
      <div className="relative z-10">
        <Navbar />
        <SocialSidebar />
        <main>
          <Hero />
          <About />
          <Methodology />
          <CaseStudies />
          <Skills />
        </main>
        <Contact />
      </div>
    </div>
  );
}

export default App;
