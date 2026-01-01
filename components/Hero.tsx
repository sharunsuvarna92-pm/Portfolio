import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from '../constants';
import BackgroundAnimation from './BackgroundAnimation';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-transparent overflow-hidden min-h-[50vh] flex items-center justify-center z-0 py-12 md:py-20">
      <BackgroundAnimation />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,249,255,0.4)_0%,rgba(248,250,252,0)_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.25)_0%,rgba(3,7,18,0.98)_100%)] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-30 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/20 bg-white/10 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-xl animate-fade-in-up shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400 mr-3 animate-pulse"></span>
          Project Lead | Product Delivery | Strategic Operations
        </div>
        
        {/* Headline */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6 animate-fade-in-up delay-100 max-w-4xl mx-auto">
          I bridge the gap between complex operations & <span className="rich-gradient-text">scalable digital products.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-2 max-w-2xl mx-auto text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium animate-fade-in-up delay-200 leading-relaxed">
          {HERO_CONTENT.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center relative z-20 animate-fade-in-up delay-300">
          <button 
            onClick={() => scrollToSection('work')}
            className="group inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-xs font-bold uppercase tracking-widest rounded-xl text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all cursor-pointer transform hover:-translate-y-1 active:scale-95"
          >
            Explore Case Studies
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 dark:border-blue-500/20 text-xs font-bold uppercase tracking-widest rounded-xl text-slate-700 dark:text-white bg-white/50 dark:bg-slate-900/50 hover:bg-white/80 dark:hover:bg-slate-800 transition-all cursor-pointer backdrop-blur-xl transform hover:-translate-y-1 active:scale-95"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;