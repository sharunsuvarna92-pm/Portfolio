import React from 'react';
import { CLIENT_LOGOS } from '../constants';
import { ChevronDown } from 'lucide-react';

const TrustBar: React.FC = () => {
  return (
    <section className="relative py-8 md:py-12 bg-white dark:bg-midnight overflow-hidden border-b border-slate-100 dark:border-slate-900/50">
      {/* Background Plexus Graphic (Simplified SVG) */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 dark:opacity-20 pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="350" cy="50" r="3" fill="currentColor" className="text-blue-600" />
          <circle cx="380" cy="150" r="2" fill="currentColor" className="text-indigo-500" />
          <circle cx="320" cy="250" r="4" fill="currentColor" className="text-blue-400" />
          <circle cx="390" cy="320" r="2" fill="currentColor" className="text-blue-600" />
          <line x1="350" y1="50" x2="380" y2="150" stroke="currentColor" strokeWidth="0.5" className="text-blue-300" />
          <line x1="380" y1="150" x2="320" y2="250" stroke="currentColor" strokeWidth="0.5" className="text-blue-300" />
          <line x1="320" y1="250" x2="390" y2="320" stroke="currentColor" strokeWidth="0.5" className="text-blue-300" />
          <line x1="350" y1="50" x2="320" y2="250" stroke="currentColor" strokeWidth="0.5" className="text-blue-200" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10 text-center">
        <p className="font-display text-xs text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] font-bold mb-8 animate-fade-in-up">
          Powering Solutions For
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 dark:opacity-50 hover:opacity-100 transition-opacity duration-700">
           {CLIENT_LOGOS.map((client, idx) => (
             <div 
               key={client.name} 
               className="group relative transition-all duration-500 hover:scale-110"
               style={{ animationDelay: `${idx * 100}ms` }}
             >
               <img 
                 src={client.logoUrl} 
                 alt={client.name}
                 className="h-5 md:h-7 w-auto object-contain grayscale hover:grayscale-0 dark:invert transition-all duration-500"
               />
             </div>
           ))}
        </div>

        {/* Navigation Indicator - Reduced gap */}
        <div className="mt-8 flex justify-center opacity-20 dark:opacity-10 animate-bounce">
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default TrustBar;