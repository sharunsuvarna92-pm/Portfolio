import React, { useState, useEffect } from 'react';
import { CASE_STUDIES } from '../constants';
import { 
  ArrowRight, 
  Target, 
  CheckCircle2, 
  BarChart3, 
  Globe, 
  Briefcase,
  X,
  FileText,
  Zap,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeStudy = CASE_STUDIES.find(c => c.id === selectedId);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedId]);

  return (
    <section id="work" className="py-12 md:py-16 bg-white dark:bg-midnight transition-colors duration-500 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white sm:text-6xl mb-4 tracking-tight leading-none">
              Strategic <span className="rich-gradient-text">Deliveries.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              Bridging operations and technology through meticulous product lifecycle management.
            </p>
          </div>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              onClick={() => setSelectedId(study.id)}
              className="group relative flex flex-col h-[500px] bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] hover:border-blue-500/40 text-left"
            >
              {/* Visual Card Top with Relevant Background Image */}
              <div className="h-2/5 w-full bg-slate-100 dark:bg-slate-950 p-10 flex flex-col justify-end relative overflow-hidden transition-all">
                {study.imageUrl ? (
                  <>
                    <img 
                      src={study.imageUrl} 
                      alt={study.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Readability Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent dark:from-slate-950 dark:via-slate-950/60 dark:to-transparent"></div>
                  </>
                ) : (
                  <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <FileText className="h-32 w-32 text-slate-400 dark:text-slate-200" />
                  </div>
                )}
                
                <div className="relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-2 block">{study.client}</span>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight">{study.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-grow p-10 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-4 font-medium mb-8">
                    {study.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-lg text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform">
                  Full Case Study <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* High-Density Case Study Modal */}
      {selectedId && activeStudy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-10 animate-fade-in-up">
          <div 
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          ></div>
          
          <div className="bg-white dark:bg-[#0a0f1c] w-full max-w-[1400px] h-full md:h-auto md:max-h-[95vh] md:rounded-[1.5rem] shadow-2xl relative z-10 overflow-hidden flex flex-col border border-white/5">
            
            {/* Minimal Sticky Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-[#0a0f1c] border-b border-slate-100 dark:border-white/5 sticky top-0 z-30">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{activeStudy.id}</span>
              </div>
              <button 
                onClick={() => setSelectedId(null)}
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                <X className="h-5 w-5 text-slate-400" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto custom-scrollbar p-6 md:p-10">
              
              {/* Top Hero Section: Title (Left) + Metadata (Right) */}
              <div className="grid lg:grid-cols-12 gap-10 mb-10 items-start">
                <div className="lg:col-span-8">
                  <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                    {activeStudy.title}
                  </h1>
                  <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-4xl">
                    {activeStudy.summary}
                  </p>
                </div>
                
                <div className="lg:col-span-4 bg-slate-50 dark:bg-white/5 p-6 rounded-3xl border border-slate-100 dark:border-white/5">
                  <h4 className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-6 border-b border-blue-500/10 pb-4">Project Metadata</h4>
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Lead Client</p>
                      <p className="text-sm font-black text-slate-900 dark:text-white">{activeStudy.client}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Capacity</p>
                      <p className="text-sm font-black text-slate-900 dark:text-white">{activeStudy.role}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Scope & Tech</p>
                      <div className="flex flex-wrap gap-1.5">
                        {activeStudy.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-bold px-2 py-0.5 bg-white dark:bg-midnight rounded border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horizontal Metrics Bar: Quick Impact Glance */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
                {activeStudy.metrics.map((metric, i) => (
                  <div key={i} className="bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-2xl border border-blue-100/50 dark:border-blue-900/20 text-center">
                    <p className="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">{metric.label}</p>
                    <p className="text-xl font-black text-slate-900 dark:text-white leading-none">{metric.value}</p>
                    <p className="text-[10px] text-slate-400 mt-1 font-medium italic">{metric.description}</p>
                  </div>
                ))}
              </div>

              {/* Main STAR Content: Dashboard Layout */}
              <div className="grid lg:grid-cols-2 gap-10">
                
                {/* Left Side: Context & Goals */}
                <div className="space-y-8">
                  <div className="p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="h-5 w-5 text-blue-600" />
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">The Situation</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                      {activeStudy.star.situation}
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-indigo-50/30 dark:bg-indigo-900/10 border border-indigo-100/30 dark:border-indigo-900/20">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="h-5 w-5 text-indigo-500" />
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">The Task</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                      {activeStudy.star.task}
                    </p>
                  </div>
                  
                  {/* Results: Integrated here to save vertical space */}
                  <div className="p-6 rounded-3xl bg-emerald-50/20 dark:bg-emerald-500/5 border border-emerald-100/30 dark:border-emerald-900/20">
                    <div className="flex items-center gap-3 mb-6">
                      <TrendingUp className="h-5 w-5 text-emerald-500" />
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">Measurable Outcomes</h4>
                    </div>
                    <div className="grid gap-4">
                      {activeStudy.star.result.map((res, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <p className="text-sm text-slate-800 dark:text-slate-200 font-bold leading-tight">{res}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Execution Roadmap */}
                <div className="p-8 bg-white dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-3 mb-8">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">Leadership & Action Steps</h4>
                  </div>
                  <div className="space-y-4">
                    {activeStudy.star.action.map((action, i) => (
                      <div key={i} className="flex gap-6 items-start p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-white/5">
                        <span className="flex items-center justify-center h-7 w-7 rounded-lg bg-slate-900 dark:bg-midnight text-white text-[10px] font-black shrink-0">{(i+1).toString().padStart(2, '0')}</span>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                          {action}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Compact Action Footer */}
            <div className="px-6 py-4 bg-slate-50 dark:bg-[#0a0f1c] border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
               <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="h-3 w-3" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Time-to-Value Optimized Delivery</span>
               </div>
               <button 
                onClick={() => setSelectedId(null)}
                className="px-10 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-md"
               >
                 Exit Detailed View
               </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudies;