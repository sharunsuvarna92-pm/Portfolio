import React from 'react';
import { 
  Layers, 
  CheckCircle, 
  User, 
  Cpu, 
  ExternalLink, 
  AlertCircle,
  Clock
} from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 md:py-16 bg-white dark:bg-midnight-lighter relative transition-colors duration-300 border-t border-slate-200 dark:border-blue-900/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl mb-3 leading-tight">Projects</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
            Technical prototypes developed to solve delivery challenges.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-blue-900/30 shadow-2xl overflow-hidden">
            <div className="bg-slate-50 dark:bg-blue-900/40 px-6 py-5 border-b border-slate-200 dark:border-blue-900/30">
              <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
                Deterministic Resource Planning & Task Scheduling Engine
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Supabase", "PostgreSQL", "Logic Core"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-white text-[8px] font-black uppercase tracking-widest rounded-lg border border-blue-200 dark:border-blue-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid lg:grid-cols-12 gap-8">
                
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <h4 className="text-[9px] font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2 uppercase tracking-widest">
                      <Clock className="h-3 w-3 text-blue-600" />
                      Background / Story
                    </h4>
                    <div className="space-y-3 text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                      <p>Inspired by enterprise delivery scenarios where commitments are often made without a clear picture of future availability.</p>
                      <p className="font-bold text-slate-800 dark:text-slate-100">Solving for:</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {[
                            "Future-dated capacity conflicts",
                            "Roadmap priority competition",
                            "Cross-team dependency lag",
                            "Timeline communication gaps"
                        ].map(item => (
                            <li key={item} className="flex gap-2 items-center text-[9px] font-black uppercase bg-slate-50 dark:bg-slate-800 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700">
                                <AlertCircle className="h-3 w-3 text-amber-500 shrink-0" />
                                {item}
                            </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-5 bg-blue-50/50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                    <h4 className="text-[9px] font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2 uppercase tracking-widest">
                      <Layers className="h-3 w-3 text-blue-600" />
                      Core Objective
                    </h4>
                    <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      A backend-first scheduling logic designed to validate delivery feasibility before the first sprint planning session.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {["Capacity Engine", "Dependency Mapping", "Logic Reasoner", "Constraint Solver"].map((point) => (
                        <div key={point} className="flex flex-col gap-1 p-2.5 bg-white dark:bg-slate-950 rounded-xl border border-blue-100/50 dark:border-blue-900/40">
                          <CheckCircle className="h-2.5 w-2.5 text-emerald-500 shrink-0" />
                          <span className="text-[7px] font-black text-slate-600 dark:text-slate-200 uppercase tracking-wider">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 shadow-xl">
                    <h4 className="text-[7px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Functional Benefits</h4>
                    <ul className="space-y-2 text-[9px] text-slate-400">
                      {[
                        "Feasibility modeling",
                        "Early conflict identification",
                        "Data-backed delivery timelines",
                        "Cross-functional alignment"
                      ].map(item => (
                        <li key={item} className="flex gap-2 items-start">
                           <div className="h-1 w-1 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
                           <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="p-1.5 bg-blue-50 dark:bg-blue-900/40 rounded-lg shrink-0">
                          <User className="h-3 w-3 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-[11px]">Role</h4>
                          <p className="text-[9px] text-slate-500 dark:text-slate-500 mt-0.5">Architecture & Data Modeling</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-1.5 bg-purple-50 dark:bg-purple-900/40 rounded-lg shrink-0">
                          <Cpu className="h-3 w-3 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-[11px]">AI Layer</h4>
                          <p className="text-[9px] text-slate-500 dark:text-slate-500 mt-0.5">Simulation logic optimization</p>
                        </div>
                      </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-blue-900/10 flex flex-col lg:flex-row items-center justify-between gap-4 p-5 bg-slate-950 rounded-2xl text-white relative overflow-hidden">
                <div className="flex items-center gap-4 relative z-10">
                  <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="font-black text-sm tracking-tight">Project Prototype Preview</h5>
                    <p className="text-[7px] text-slate-500 uppercase tracking-widest mt-0.5">Backend corrected architecture.</p>
                  </div>
                </div>
                <button className="w-full lg:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-black text-[9px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                  Access Demo
                  <ExternalLink className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;