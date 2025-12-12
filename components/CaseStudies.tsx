
import React, { useState } from 'react';
import { CASE_STUDIES } from '../constants';
import { ArrowUpRight, BarChart3, CheckCircle2, Target } from 'lucide-react';
import { CaseStudy } from '../types';

const CaseStudies: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(
    (CASE_STUDIES && CASE_STUDIES.length > 0) ? CASE_STUDIES[0].id : null
  );

  const activeStudy = CASE_STUDIES.find(c => c.id === activeId);

  const getChartData = (study: CaseStudy) => {
     if (!study || !study.metrics) return [];
     
     return study.metrics.map(m => {
        let val = 50; 
        const s = m.value;

        if (s.includes('%')) {
            val = parseInt(s.replace(/\D/g, '')) || 0;
        } 
        else if (s.includes('$') || s.includes('M') || s.includes('k')) {
            val = 95; 
        }
        else if (s.toLowerCase().includes('real-time') || s.toLowerCase().includes('auto') || s.toLowerCase().includes('high') || s.toLowerCase().includes('dynamic')) {
            val = 90; 
        }
        else {
            const parsed = parseInt(s.replace(/\D/g, ''));
            if (!isNaN(parsed)) {
                val = parsed > 100 ? 100 : Math.max(parsed, 40);
            } else {
                val = 75; 
            }
        }

        const visualValue = Math.max(30, Math.min(val, 100));

        return {
          name: m.label,
          value: visualValue, 
          fullValue: m.value
        };
     });
  };

  const renderChart = (study: CaseStudy) => {
    const data = getChartData(study);
    
    return (
      <div className="flex-grow w-full flex items-end justify-between gap-2 pt-2 pb-1 px-1 select-none min-h-[140px]">
        {data.map((item, i) => {
          const delay = i * 150; 
          
          return (
            <div key={i} className="flex flex-col items-center justify-end w-1/2 h-full group relative">
              <div className="flex-grow w-full flex items-end justify-center mb-2">
                  <div className="relative w-full max-w-[56px] h-full bg-slate-800/50 rounded-t-lg rounded-b-md flex items-end overflow-hidden shadow-inner ring-1 ring-white/5 backdrop-blur-sm">
                     <div 
                        style={{ height: `${item.value}%`, animationDelay: `${delay}ms` }}
                        className={`w-full transition-all duration-1000 ease-out rounded-t-sm relative
                            ${i === 1 ? 'bg-blue-400' : 'bg-blue-600'} 
                            group-hover:bg-blue-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
                            opacity-90 group-hover:opacity-100`}
                     >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/40"></div>
                     </div>
                  </div>
              </div>
              
              <div className="h-10 w-full flex flex-col justify-start items-center text-center">
                <span className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold mb-0.5 w-full truncate px-1">
                    {item.name}
                </span>
                <span className={`block font-bold text-white tracking-tight leading-tight px-0.5 w-full break-words
                    ${item.fullValue.length > 7 ? 'text-xs md:text-sm' : 'text-sm md:text-base'}
                `}>
                    {item.fullValue}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="work" className="py-12 md:py-24 bg-white/40 dark:bg-midnight/40 border-t border-slate-200 dark:border-blue-900/20 transition-colors duration-300 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-5xl mb-6">Featured Case Studies</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Deep dives into my most impactful projects, structured by the STAR method (Situation, Task, Action, Result).
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-4 mb-8 lg:mb-0">
            <div className="space-y-4 lg:max-h-[600px] lg:overflow-y-auto lg:pr-2 custom-scrollbar">
              {CASE_STUDIES.map((study) => (
                <button
                  key={study.id}
                  onClick={() => setActiveId(study.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group cursor-pointer backdrop-blur-md ${
                    activeId === study.id
                      ? 'bg-slate-900 dark:bg-blue-900/60 border-slate-900 dark:border-blue-400/50 shadow-xl'
                      : 'bg-white/80 dark:bg-slate-900/40 border-slate-200 dark:border-blue-900/20 hover:border-blue-300 dark:hover:border-blue-400/40 hover:bg-slate-50 dark:hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-xs font-semibold uppercase tracking-widest ${
                      activeId === study.id ? 'text-blue-400' : 'text-blue-600 dark:text-blue-400'
                    }`}>
                      {study.client}
                    </span>
                    {activeId === study.id && <ArrowUpRight className="h-4 w-4 text-white" />}
                  </div>
                  <h3 className={`text-base md:text-lg font-bold mb-3 ${
                    activeId === study.id ? 'text-white' : 'text-slate-900 dark:text-white'
                  }`}>
                    {study.title}
                  </h3>
                  <p className={`text-sm line-clamp-2 leading-relaxed ${
                    activeId === study.id ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'
                  }`}>
                    {study.summary}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Detailed View */}
          <div className="lg:col-span-8">
            {activeStudy && (
              <div className="bg-white/90 dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-blue-900/20 shadow-lg overflow-hidden animate-fade-in transition-colors duration-300 flex flex-col h-full backdrop-blur-xl">
                {/* Header */}
                <div className="bg-slate-50 dark:bg-blue-900/20 px-6 py-8 md:px-10 border-b border-slate-200 dark:border-blue-900/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">{activeStudy.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-bold text-sm md:text-base uppercase tracking-[0.15em]">{activeStudy.role}</p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {activeStudy.tags.map(tag => (
                            <span key={tag} className="px-4 py-1.5 bg-white dark:bg-blue-900/40 border border-slate-200 dark:border-blue-500/30 rounded-full text-xs font-bold text-slate-600 dark:text-blue-100 shadow-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-8 md:p-12 flex-grow flex flex-col">
                    <div className="grid gap-10 flex-grow">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-rose-50 dark:bg-rose-900/10 p-6 md:p-8 rounded-2xl border border-rose-100 dark:border-rose-900/20">
                                <div className="flex items-center gap-2 mb-4 text-rose-700 dark:text-rose-400 font-bold text-lg">
                                    <Target className="h-5 w-5" />
                                    <h4>Situation & Task</h4>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base mb-4 leading-relaxed"><span className="font-bold text-rose-900 dark:text-rose-200">Context:</span> {activeStudy.star.situation}</p>
                                <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed"><span className="font-bold text-rose-900 dark:text-rose-200">Goal:</span> {activeStudy.star.task}</p>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/10 p-6 md:p-8 rounded-2xl border border-blue-100 dark:border-blue-900/20">
                                <div className="flex items-center gap-2 mb-4 text-blue-700 dark:text-blue-400 font-bold text-lg">
                                    <BarChart3 className="h-5 w-5" />
                                    <h4>My Role & Actions</h4>
                                </div>
                                <ul className="space-y-3">
                                    {activeStudy.star.action.map((act, i) => (
                                        <li key={i} className="flex gap-3 text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                                            <span className="text-blue-500 font-bold mt-2 h-2 w-2 rounded-full bg-blue-500 shrink-0"></span>
                                            {act}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Results & Visuals */}
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="md:col-span-2 space-y-6">
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                                    Key Results
                                </h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {activeStudy.star.result.map((res, i) => (
                                        <li key={i} className="flex gap-4 text-slate-700 dark:text-slate-300 p-5 bg-white/60 dark:bg-slate-900/60 rounded-xl text-sm md:text-base border border-slate-100 dark:border-blue-900/30 hover:border-emerald-500/30 transition-all">
                                            <div className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                            {res}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            {/* Data Vis Widget */}
                            <div className="bg-slate-950 rounded-2xl p-6 text-white flex flex-col shadow-2xl ring-1 ring-white/10 relative overflow-hidden h-full min-h-[240px]">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full pointer-events-none"></div>
                                <div className="relative z-10 flex items-center justify-between mb-4">
                                   <span className="text-[10px] md:text-xs font-extrabold text-slate-400 uppercase tracking-[0.2em]">Impact Metrics</span>
                                </div>
                                {renderChart(activeStudy)}
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
