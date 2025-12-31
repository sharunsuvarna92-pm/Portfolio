import React from 'react';
import { 
  Layers, 
  CheckCircle, 
  User, 
  Cpu, 
  ExternalLink, 
  FlaskConical,
  Code2,
  Lightbulb,
  Zap
} from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 relative transition-colors duration-300 border-t border-slate-200 dark:border-blue-900/10">
      {/* Subtle Blueprint Grid Pattern for a "Laboratory" feel */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-600/10 rounded-lg">
              <FlaskConical className="h-5 w-5 text-blue-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Personal Lab</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white sm:text-5xl mb-4 tracking-tight">The Side Quests</h2>
          <p className="text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-medium">
            Outside of the boardroom, I build. These are the tools I develop in my free time to scratch my own technical itches and experiment with the "what-ifs" of product delivery.
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-white dark:bg-midnight rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
            <div className="bg-slate-50 dark:bg-slate-900/50 px-8 py-8 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-3">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Personal Project // v1.0 Beta</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Deterministic Resource Planning & Task Scheduling Engine
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Supabase", "PostgreSQL", "Tailwind"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-600 dark:text-blue-300 text-xs font-bold uppercase tracking-widest rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div className="grid lg:grid-cols-12 gap-10">
                
                <div className="lg:col-span-8 space-y-8">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 uppercase tracking-widest">
                      <Lightbulb className="h-4 w-4 text-amber-500" />
                      The "Aha!" Moment
                    </h4>
                    <div className="space-y-4 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-medium">
                      <p>In the enterprise world, I saw teams constantly over-committing because capacity planning was a "vibe" rather than a calculation. I built this to turn delivery management into a predictable science.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                        {[
                            "Stop 'guesstimating' timelines",
                            "Model cross-team ripple effects",
                            "Visualizing hidden capacity leaks",
                            "Solving for 'Project Exhaustion'"
                        ].map(item => (
                            <div key={item} className="flex gap-3 items-center bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-slate-900 transition-colors">
                                <Zap className="h-4 w-4 text-blue-500 shrink-0" />
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">{item}</span>
                            </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-blue-50/30 dark:bg-blue-900/10 rounded-3xl border border-blue-100/50 dark:border-blue-900/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Code2 className="h-24 w-24 text-blue-600" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 uppercase tracking-widest relative z-10">
                      <Cpu className="h-4 w-4 text-blue-600" />
                      How I built it
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 relative z-10 font-medium">
                      A backend-first logic engine that treats time like a finite resource. It's essentially a constraint solver for human effort.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative z-10">
                      {["Capacity Engine", "Dependency Map", "Logic Reasoner", "Constraint Solver"].map((point) => (
                        <div key={point} className="flex flex-col gap-1 p-3 bg-white dark:bg-slate-950 rounded-2xl border border-blue-100/30 dark:border-blue-900/30 shadow-sm">
                          <CheckCircle className="h-3 w-3 text-emerald-500 mb-1" />
                          <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-slate-950 p-8 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden ring-1 ring-white/10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)]"></div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 relative z-10">Why this matters to me</h4>
                    <ul className="space-y-4 text-xs text-slate-300 relative z-10">
                      {[
                        "It connects engineering logic with human strategy.",
                        "It's a sandbox for complex state management.",
                        "I use it to validate my own delivery projections.",
                        "Because knowing is better than hoping."
                      ].map(item => (
                        <li key={item} className="flex gap-3 items-start">
                           <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                           <span className="font-medium leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-5 px-4">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                          <User className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-widest">The Maker</h4>
                          <p className="text-xs text-slate-500 mt-0.5">Sharun S. // Sole Architect</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                          <Zap className="h-5 w-5 text-amber-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-widest">Current Focus</h4>
                          <p className="text-xs text-slate-500 mt-0.5">Optimizing the AI heuristics</p>
                        </div>
                      </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-600/20">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-black text-base text-slate-900 dark:text-white tracking-tight italic">"The Delivery Scientist"</h5>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">A playground for architectural resilience.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg">
                      Explore Repo
                      <Code2 className="h-4 w-4" />
                    </button>
                    <button className="flex-1 lg:flex-none px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95">
                      Live Sandbox
                      <ExternalLink className="h-4 w-4" />
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;