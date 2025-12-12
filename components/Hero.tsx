
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { HERO_CONTENT, CLIENT_LOGOS } from '../constants';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-transparent overflow-hidden min-h-[90vh] flex items-center justify-center z-0 py-12 md:py-20">
      {/* 
          Sophisticated adaptive overlay:
          Light Mode: Clean gradient focus.
          Dark Mode: Deep 'Midnight Space' radial focus that lets the galaxy particles pop.
      */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,249,255,0.7)_0%,rgba(248,250,252,0.2)_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.5)_0%,rgba(2,6,23,0.9)_100%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 text-center">
        
        {/* Badge - Adaptive styling */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-100 dark:border-blue-500/20 bg-white/80 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-bold mb-8 backdrop-blur-xl animate-fade-in-up shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400 mr-2 animate-pulse"></span>
          Project Lead | Product Delivery | Agile Program Management
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6 animate-fade-in-up delay-100">
          {HERO_CONTENT.headline.split('scalable digital products').map((part, i) => (
            <React.Fragment key={i}>
              {part}
              {i === 0 && <span className="text-blue-600 dark:text-blue-400 relative inline-block">
                scalable digital products
                {/* Underline decoration */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-500/20 dark:text-blue-400/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>}
            </React.Fragment>
          ))}
        </h1>

        {/* Subheadline */}
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium animate-fade-in-up delay-200 leading-relaxed">
          {HERO_CONTENT.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center relative z-20 animate-fade-in-up delay-300">
          <button 
            onClick={() => scrollToSection('work')}
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-bold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 cursor-pointer transform hover:-translate-y-1 active:scale-95"
          >
            View Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center px-10 py-4 border border-slate-200 dark:border-blue-400/20 text-base font-bold rounded-2xl text-slate-700 dark:text-white bg-white/60 dark:bg-slate-800/40 hover:bg-white/90 dark:hover:bg-slate-700/60 transition-all cursor-pointer backdrop-blur-xl transform hover:-translate-y-1 active:scale-95 shadow-sm"
          >
            Contact Me
          </button>
        </div>
        
        {/* Trust Bar */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-slate-200/60 dark:border-blue-900/40 animate-fade-in-up delay-300">
          <p className="text-xs md:text-sm text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] font-bold mb-8">Trusted by Global Enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 dark:opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
             {CLIENT_LOGOS.map((client) => (
               <div key={client.name} className="group relative" title={client.name}>
                 <img 
                   src={client.logoUrl} 
                   alt={client.name}
                   className="h-7 md:h-10 w-auto object-contain dark:invert transition-all duration-300 transform group-hover:scale-110 group-hover:opacity-100"
                 />
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-300 dark:text-blue-400/30 animate-bounce hidden md:block pointer-events-none z-30">
        <ChevronDown className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Hero;
