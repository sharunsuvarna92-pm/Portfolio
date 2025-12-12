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
    <section id="methodology" className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Floating Background Blobs (Subtle) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-64 h-64 bg-blue-100/40 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 -right-10 w-80 h-80 bg-indigo-100/40 dark:bg-indigo-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl mb-4">How I Deliver Value</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            My process blends Agile rigor with strategic solutioning. I don't just execute tickets; I ensure we are building the right thing for the right reason.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {METHODOLOGY_STEPS.map((step, index) => (
            <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 relative group hover:-translate-y-1">
               {/* Step Number Background */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-slate-100 dark:text-slate-700/50 z-0 group-hover:text-blue-50 dark:group-hover:text-slate-700 transition-colors">
                0{index + 1}
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {icons[step.icon]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;