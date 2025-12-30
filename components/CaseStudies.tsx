import React, { useState } from 'react';
import { CASE_STUDIES } from '../constants';
import { ArrowUpRight, BarChart3, CheckCircle2, Target } from 'lucide-react';
import { CaseStudy } from '../types';

const CaseStudies: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(
    (CASE_STUDIES && CASE_STUDIES.length > 0) ? CASE_STUDIES[0].id : null
  );

  const activeStudy = CASE_STUDIES.find(c => c.id === activeId);

  const renderChart = (study: CaseStudy) => {
    const data = study.metrics.map(m => {
        let val = 50; 
        const s = m.value;
        if (s.includes('%')) val = parseInt(s.replace(/\D/g, '')) || 0;
        else if (s.includes('$') || s.includes('M')) val = 95;
        else val = 75; 
        return { name: m.label, value: Math.max(30, Math.min(val, 100)), fullValue: m.value };
    });
    
    return (
      <div className="flex-grow w-full flex items-end justify-between gap-3 pt-4 px-2 select-none min-h-[100px]">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-end w-full h-full group relative">
            <div className="flex-grow w-full flex items-end justify-center mb-3">
                <div className="relative w-full max-w-[42px] h-full bg-slate-800/80 rounded-t-xl rounded-b-md flex items-end overflow-hidden shadow-2xl ring-1 ring-white/5">
                   <div 
                     style={{ height: `${item.value}%` }} 
                     className={`w-full transition-all duration-1000 ease-out ${i % 2 === 0 ? 'bg-gradient-to-t from-blue-700 to-blue-400' : 'bg-gradient-to-t from-indigo-700 to-indigo-400'}`}
                   ></div>
                </div>
            </div>
            <div className="h-8 w-full flex flex-col justify-start items-center text-center">
              <span className="block text-[7px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-black mb-1 truncate w-full">{item.name}</span>
              <span className="block font-black text-white text-[10px] tracking-tight">{item.fullValue}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="work" className="py-20 md:py-24 bg-slate-50 dark:bg-midnight transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white sm:text-5xl mb-4 tracking-tight">Strategic Deliveries</h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              Propelling global enterprise operations through data-driven digital architecture and high-stakes product management.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 dark:text-slate-700">Section 03 // Projects</span>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3 mb-8 lg:mb-0">
            <div className="space-y-3 lg:max-h-[600px] lg:overflow-y-auto lg:pr-3 custom-scrollbar">
              {CASE_STUDIES.map((study) => (
                <button
                  key={study.id}
                  onClick={() => setActiveId(study.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-500 group cursor-pointer shadow-sm relative overflow-hidden ${
                    activeId === study.id
                      ? 'bg-slate-900 dark:bg-slate-800 border-blue-500/50 shadow-2xl scale-[1.02]'
                      : 'bg-white dark:bg-midnight-lighter border-slate-200 dark:border-slate-800 hover:border-blue-500/30'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${activeId === study.id ? 'text-blue-400' : 'text-blue-600'}`}>{study.client}</span>
                      {activeId === study.id && <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>}
                    </div>
                    <h3 className={`text-[12px] font-extrabold mb-1 leading-snug ${activeId === study.id ? 'text-white' : 'text-slate-900 dark:text-slate-200'}`}>{study.title}</h3>
                  </div>
                  {activeId === study.id && (
                    <div className="absolute top-0 right-0 p-1 opacity-10">
                        <ArrowUpRight className="h-16 w-16 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Detailed View */}
          <div className="lg:col-span-8 xl:col-span-9">
            {activeStudy && (
              <div className="bg-white dark:bg-midnight-lighter rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col h-full animate-fade-in-up">
                <div className="bg-slate-50 dark:bg-slate-900/50 px-8 py-8 border-b border-slate-200 dark:border-slate-800 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">{activeStudy.title}</h3>
                        <div className="flex items-center gap-4">
                            <p className="text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-[0.3em]">{activeStudy.role}</p>
                            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                            <span className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest">{activeStudy.client}</span>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {activeStudy.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-[8px] font-black text-slate-600 dark:text-blue-300 uppercase tracking-widest">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-8 md:p-10 flex-grow">
                    <div className="grid gap-10">
                        <div className="grid xl:grid-cols-2 gap-8">
                            <div className="bg-slate-50/50 dark:bg-slate-900/30 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-indigo-500 rounded-xl text-white shadow-lg shadow-indigo-500/20">
                                        <Target className="h-4 w-4" />
                                    </div>
                                    <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em]">Context & Mission</h4>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"><span className="font-black text-slate-900 dark:text-white mr-2">Situation:</span> {activeStudy.star.situation}</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"><span className="font-black text-slate-900 dark:text-white mr-2">Task:</span> {activeStudy.star.task}</p>
                                </div>
                            </div>

                            <div className="bg-slate-50/50 dark:bg-slate-900/30 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-blue-500 rounded-xl text-white shadow-lg shadow-blue-500/20">
                                        <BarChart3 className="h-4 w-4" />
                                    </div>
                                    <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em]">Execution Strategy</h4>
                                </div>
                                <ul className="space-y-3">
                                    {activeStudy.star.action.map((act, i) => (
                                        <li key={i} className="flex gap-4 text-sm text-slate-600 dark:text-slate-400 leading-tight">
                                            <span className="text-blue-500 font-black text-xs">0{i+1}</span>
                                            {act}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="grid xl:grid-cols-3 gap-8">
                            <div className="xl:col-span-2">
                                <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] flex items-center gap-3 mb-6">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                    High-Impact Outcomes
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {activeStudy.star.result.map((res, i) => (
                                        <div key={i} className="flex gap-4 text-slate-600 dark:text-slate-300 p-5 bg-white dark:bg-slate-900 rounded-2xl text-xs font-medium border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="h-2 w-2 rounded-full bg-emerald-500 mt-1 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                            {res}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="bg-slate-950 dark:bg-black rounded-[2rem] p-7 text-white flex flex-col shadow-2xl ring-1 ring-white/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                                <div className="relative z-10 flex items-center justify-between mb-4">
                                   <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.3em]">Operational Metrics</span>
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