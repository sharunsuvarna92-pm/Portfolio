
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
        if (s.includes('%')) val = parseInt(s.replace(/\D/g, '')) || 0;
        else if (s.includes('$') || s.includes('M')) val = 95;
        else val = 75; 
        return { name: m.label, value: Math.max(30, Math.min(val, 100)), fullValue: m.value };
     });
  };

  const renderChart = (study: CaseStudy) => {
    const data = getChartData(study);
    return (
      <div className="flex-grow w-full flex items-end justify-between gap-2 pt-2 pb-1 px-1 select-none min-h-[90px]">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-end w-1/2 h-full group relative">
            <div className="flex-grow w-full flex items-end justify-center mb-1.5">
                <div className="relative w-full max-w-[36px] h-full bg-slate-800/50 rounded-t-lg rounded-b-sm flex items-end overflow-hidden shadow-inner ring-1 ring-white/5">
                   <div style={{ height: `${item.value}%` }} className={`w-full transition-all duration-1000 ease-out ${i === 1 ? 'bg-blue-400' : 'bg-blue-600'} opacity-90`}></div>
                </div>
            </div>
            <div className="h-7 w-full flex flex-col justify-start items-center text-center">
              <span className="block text-[6px] text-slate-500 uppercase tracking-widest font-black mb-0.5 truncate w-full">{item.name}</span>
              <span className="block font-black text-white text-[9px] tracking-tight">{item.fullValue}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="work" className="py-12 md:py-16 bg-white/40 dark:bg-midnight/40 border-t border-slate-200 dark:border-blue-900/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl mb-3 leading-tight">Featured Case Studies</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
            Deep dives into enterprise project deliveries structured by the STAR method.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3 mb-6 lg:mb-0">
            <div className="space-y-2 lg:max-h-[450px] lg:overflow-y-auto lg:pr-2 custom-scrollbar">
              {CASE_STUDIES.map((study) => (
                <button
                  key={study.id}
                  onClick={() => setActiveId(study.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group cursor-pointer ${
                    activeId === study.id
                      ? 'bg-slate-900 dark:bg-blue-900/60 border-slate-900 dark:border-blue-400/50 shadow-xl'
                      : 'bg-white/80 dark:bg-slate-900/40 border-slate-200 dark:border-blue-900/10 hover:border-blue-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className={`text-[7px] font-black uppercase tracking-widest ${activeId === study.id ? 'text-blue-400' : 'text-blue-600'}`}>{study.client}</span>
                    {activeId === study.id && <ArrowUpRight className="h-3 w-3 text-white" />}
                  </div>
                  <h3 className={`text-[11px] font-bold mb-1 ${activeId === study.id ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{study.title}</h3>
                  <p className={`text-[9px] line-clamp-2 leading-tight ${activeId === study.id ? 'text-slate-400' : 'text-slate-500'}`}>{study.summary}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Detailed View */}
          <div className="lg:col-span-8 xl:col-span-9">
            {activeStudy && (
              <div className="bg-white/90 dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-blue-900/10 shadow-2xl overflow-hidden flex flex-col h-full backdrop-blur-xl">
                <div className="bg-slate-50 dark:bg-blue-900/20 px-6 py-4 border-b border-slate-200 dark:border-blue-900/20 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3">
                    <div>
                        <h3 className="text-lg font-black text-slate-900 dark:text-white mb-0.5 tracking-tight">{activeStudy.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-black text-[9px] uppercase tracking-[0.2em]">{activeStudy.role}</p>
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                        {activeStudy.tags.map(tag => (
                            <span key={tag} className="px-2 py-0.5 bg-white dark:bg-blue-900/40 border border-slate-200 dark:border-blue-500/20 rounded text-[7px] font-black text-slate-500 dark:text-blue-100 uppercase tracking-widest">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6 md:p-8 flex-grow">
                    <div className="grid gap-6">
                        <div className="grid xl:grid-cols-2 gap-4">
                            <div className="bg-rose-50/50 dark:bg-rose-900/10 p-5 rounded-2xl border border-rose-100 dark:border-rose-900/20">
                                <div className="flex items-center gap-2 mb-3 text-rose-700 dark:text-rose-400 font-black text-[9px] uppercase tracking-widest">
                                    <Target className="h-3 w-3" />
                                    <h4>Situation & Task</h4>
                                </div>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-2.5 leading-relaxed"><span className="font-black text-rose-900 dark:text-rose-200">Context:</span> {activeStudy.star.situation}</p>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed"><span className="font-black text-rose-900 dark:text-rose-200">Goal:</span> {activeStudy.star.task}</p>
                            </div>

                            <div className="bg-blue-50/50 dark:bg-blue-900/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-900/20">
                                <div className="flex items-center gap-2 mb-3 text-blue-700 dark:text-blue-400 font-black text-[9px] uppercase tracking-widest">
                                    <BarChart3 className="h-3 w-3" />
                                    <h4>Key Actions</h4>
                                </div>
                                <ul className="space-y-2">
                                    {activeStudy.star.action.map((act, i) => (
                                        <li key={i} className="flex gap-2.5 text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                                            <span className="text-blue-500 font-black mt-1.5 h-1 w-1 rounded-full bg-blue-500 shrink-0"></span>
                                            {act}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="grid xl:grid-cols-3 gap-6">
                            <div className="xl:col-span-2">
                                <h4 className="text-[9px] font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-2 mb-3">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                                    Business Outcomes
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {activeStudy.star.result.map((res, i) => (
                                        <li key={i} className="flex gap-2.5 text-slate-600 dark:text-slate-400 p-3 bg-white/60 dark:bg-slate-900/60 rounded-xl text-[10px] border border-slate-100 dark:border-blue-900/20">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1 shrink-0" />
                                            {res}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="bg-slate-950 rounded-2xl p-5 text-white flex flex-col shadow-xl ring-1 ring-white/10 relative overflow-hidden">
                                <div className="relative z-10 flex items-center justify-between mb-2">
                                   <span className="text-[7px] font-black text-slate-500 uppercase tracking-[0.2em]">Impact Metrics</span>
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
