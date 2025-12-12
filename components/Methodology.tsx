
import React from 'react';
import { METHODOLOGY_STEPS } from '../constants';
import { Search, Layout, RefreshCw, BarChart2 } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  'search': <Search className="h-6 w-6" />,
  'layout': <Layout className="h-6 w-6" />,
  'cycle': <RefreshCw className="h-6 w-6" />,
  'chart': <BarChart2 className="h-6 w-6" />
};

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-20 md:py-32 bg-slate-50/50 dark:bg-midnight/50 relative overflow-hidden transition-colors duration-500">
      {/* Floating Background Blobs (Adaptive) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-96 h-96 bg-blue-100/30 dark:bg-blue-600/10 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-indigo-100/30 dark:bg-indigo-600/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-5xl mb-6">Strategic Framework</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I blend Agile engineering rigor with high-level strategy to ensure that 
            every feature delivered aligns with core business ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {METHODOLOGY_STEPS.map((step, index) => (
            <div key={index} className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-10 shadow-sm border border-white/50 dark:border-blue-900/20 hover:shadow-xl hover:bg-white dark:hover:bg-slate-800/80 transition-all duration-500 relative group hover:-translate-y-2">
               {/* Step Number Background */}
              <div className="absolute top-6 right-8 text-7xl font-extrabold text-slate-100 dark:text-slate-800/40 z-0 group-hover:text-blue-50/50 dark:group-hover:text-blue-900/20 transition-colors pointer-events-none">
                0{index + 1}
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-all duration-500 shadow-sm">
                  {icons[step.icon]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
