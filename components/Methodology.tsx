import React from 'react';
import { METHODOLOGY_STEPS } from '../constants';
import { Search, Layout, RefreshCw, BarChart2, ChevronRight, RotateCcw } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  'search': <Search className="h-6 w-6" />,
  'layout': <Layout className="h-6 w-6" />,
  'cycle': <RefreshCw className="h-6 w-6" />,
  'chart': <BarChart2 className="h-6 w-6" />
};

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-12 md:py-16 bg-white dark:bg-midnight relative overflow-hidden transition-colors duration-500">
      {/* Blueprint Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white sm:text-6xl mb-4 tracking-tight leading-none">
            Strategic <span className="rich-gradient-text">Framework.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            I blend engineering rigor with business strategy through a <span className="text-blue-600 dark:text-blue-400 font-bold">continuous iterative engine</span> designed to ensure every delivery aligns with core ROI.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Connection Path (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[12.5%] w-[75%] h-0.5 bg-gradient-to-r from-blue-200/50 via-slate-200 dark:via-slate-800 to-indigo-200/50 -translate-y-1/2 z-0"></div>

          {/* Iterative Feedback Loop (Visual connection from 4 back to 1) */}
          <div className="hidden lg:block absolute -bottom-12 left-[12.5%] w-[75%] h-16 border-b-2 border-x-2 border-dashed border-slate-200 dark:border-slate-800 rounded-b-[4rem] z-0 opacity-50">
            <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 bg-white dark:bg-midnight px-4 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <RotateCcw className="h-3 w-3 animate-spin-slow" />
              Continuous Feedback Loop
            </div>
          </div>

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
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Methodology;