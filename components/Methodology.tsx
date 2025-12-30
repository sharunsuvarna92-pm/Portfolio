
import React from 'react';
import { METHODOLOGY_STEPS } from '../constants';
import { Search, Layout, RefreshCw, BarChart2 } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  'search': <Search className="h-4 w-4" />,
  'layout': <Layout className="h-4 w-4" />,
  'cycle': <RefreshCw className="h-4 w-4" />,
  'chart': <BarChart2 className="h-4 w-4" />
};

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-12 md:py-16 bg-slate-50/50 dark:bg-midnight/50 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl mb-3 leading-tight">Strategic Framework</h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            I blend Agile engineering rigor with high-level strategy to ensure that 
            every feature delivered aligns with core business ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {METHODOLOGY_STEPS.map((step, index) => (
            <div key={index} className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/50 dark:border-blue-900/10 hover:shadow-xl hover:bg-white dark:hover:bg-slate-800/80 transition-all duration-500 relative group hover:-translate-y-1">
              <div className="absolute top-6 right-6 text-3xl font-black text-slate-100 dark:text-slate-800/20 z-0 group-hover:text-blue-50/50 dark:group-hover:text-blue-900/10 transition-colors pointer-events-none">
                0{index + 1}
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {icons[step.icon]}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 tracking-tight">{step.title}</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
