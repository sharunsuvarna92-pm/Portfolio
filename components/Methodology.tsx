import React from 'react';
import { METHODOLOGY_STEPS } from '../constants';
import { Search, Layout, RefreshCw, BarChart2, ChevronRight, Quote } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  'search': <Search className="h-6 w-6" />,
  'layout': <Layout className="h-6 w-6" />,
  'cycle': <RefreshCw className="h-6 w-6" />,
  'chart': <BarChart2 className="h-6 w-6" />
};

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-16 md:py-24 bg-white dark:bg-midnight relative overflow-hidden transition-colors duration-500">
      {/* Blueprint Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white sm:text-6xl mb-4 tracking-tight leading-none">
            Execution <span className="rich-gradient-text">Framework.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            I blend engineering rigor with business strategy through a <span className="text-blue-600 dark:text-blue-400 font-bold underline decoration-blue-500/30 decoration-2 underline-offset-4">continuous iterative engine</span> designed to ensure every delivery aligns with core ROI.
          </p>
        </div>

        <div className="relative mb-12 md:mb-16">
          {/* Main Flow Connection (Desktop) */}
          <div className="hidden lg:block absolute top-[110px] left-[12.5%] w-[75%] h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-900/50 to-transparent z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {METHODOLOGY_STEPS.map((step, index) => (
              <div 
                key={index} 
                className="group relative bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] p-10 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-2xl hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-2xl flex items-center justify-center font-display font-black text-lg shadow-xl z-20 transition-transform group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  0{index + 1}
                </div>

                {/* Progress Arrow (Except Last) */}
                {index < METHODOLOGY_STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700 shadow-md text-slate-400 group-hover:text-blue-500 transition-colors">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-[1.5rem] bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mb-8 border border-blue-100/50 dark:border-blue-800/20 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500">
                    {icons[step.icon]}
                  </div>
                  
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* New Dynamic Feedback Loop (SVG Path) */}
          <div className="hidden lg:block absolute -bottom-16 left-0 w-full h-32 z-0 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1000 120" fill="none" preserveAspectRatio="none" className="overflow-visible">
              <path 
                d="M875 40 C 875 100, 125 100, 125 40" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeDasharray="8 8" 
                className="text-slate-200 dark:text-slate-800"
              />
              <circle r="4" fill="#3b82f6" className="animate-loop-flow">
                 <animateMotion 
                    dur="6s" 
                    repeatCount="indefinite" 
                    path="M875 40 C 875 100, 125 100, 125 40" 
                    keyPoints="0;1" 
                    keyTimes="0;1"
                 />
              </circle>
            </svg>
          </div>
        </div>

        {/* Guiding Principle Quote Section - Spacing Reduced */}
        <div className="max-w-4xl mx-auto mt-16 md:mt-20 pt-12 md:pt-16 border-t border-slate-100 dark:border-slate-800 flex flex-col items-center">
            <div className="relative text-center w-full">
                <Quote className="absolute -top-4 -left-6 md:-left-12 h-10 w-10 text-blue-600/10 dark:text-blue-400/10" />
                <blockquote className="font-display text-2xl md:text-3xl lg:text-5xl font-black text-slate-900 dark:text-white italic tracking-tight leading-tight px-4 md:px-0">
                    “Deciding <span className="text-blue-600 dark:text-blue-400">what not to do</span> is as important as deciding what to do.”
                </blockquote>
                <cite className="mt-8 block not-italic">
                    <span className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center justify-center gap-4">
                        <span className="h-px w-8 bg-slate-200 dark:bg-slate-800"></span>
                        Steve Jobs
                        <span className="h-px w-8 bg-slate-200 dark:bg-slate-800"></span>
                    </span>
                </cite>
                <Quote className="absolute -bottom-4 -right-6 md:-right-12 h-10 w-10 text-blue-600/10 dark:text-blue-400/10 rotate-180" />
            </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .animate-loop-flow {
          filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.8));
        }
      `}} />
    </section>
  );
};

export default Methodology;