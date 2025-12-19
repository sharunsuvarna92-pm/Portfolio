
import React from 'react';
import { 
  Layers, 
  CheckCircle, 
  User, 
  Cpu, 
  Wrench, 
  ExternalLink, 
  Image as ImageIcon,
  AlertCircle,
  Clock,
  Briefcase
} from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 md:py-24 bg-white/40 dark:bg-midnight/40 relative transition-colors duration-300 backdrop-blur-sm border-t border-slate-200 dark:border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-5xl mb-6">Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Technical prototypes and systems developed to solve specific product delivery challenges.
          </p>
        </div>

        <div className="space-y-16">
          {/* Project Card: Deterministic Resource Planning & Task Scheduling Engine */}
          <div className="bg-white/80 dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-blue-900/20 shadow-xl overflow-hidden backdrop-blur-xl transition-all duration-300">
            {/* Header Area */}
            <div className="bg-slate-50 dark:bg-blue-900/20 px-6 py-8 md:px-10 border-b border-slate-200 dark:border-blue-900/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Deterministic Resource Planning & Task Scheduling Engine
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Next.js", "Supabase", "PostgreSQL", "AI-Assisted"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-[10px] font-bold uppercase tracking-wider rounded-md border border-blue-200 dark:border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10 lg:p-12">
              <div className="grid lg:grid-cols-12 gap-10">
                
                {/* Left Column: Context & Core */}
                <div className="lg:col-span-7 space-y-10">
                  {/* Background / Story */}
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      Background / Story
                    </h4>
                    <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                      <p>This project was inspired by real-world project and delivery experiences.</p>
                      <p>
                        When a feature enhancement request comes in, it often has clear business value and urgency.
                        At a high level, teams may already appear busy — but that understanding is usually informal.
                      </p>
                      <p className="font-medium text-slate-800 dark:text-slate-200">The real challenge appears when:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>There are already future commitments promised to clients</li>
                        <li>Some work is part of an internal roadmap</li>
                        <li>Dependencies across teams are not immediately visible</li>
                        <li>New requests target future dates where conflicts are easy to miss</li>
                      </ul>
                      <p>
                        As a result, timelines sometimes get committed based on partial visibility.
                        The clash between new requests and existing commitments is often discovered much later, when delivery pressure has already built up.
                      </p>
                      <p>
                        My intention was to get a clear picture of team availability before committing timelines, not to squeeze teams harder, but to avoid over-promising in the first place.
                      </p>
                      <p>
                        This system is not an ultimate source of truth, since real-world conditions always change.
                        It acts as a strong baseline for understanding resource availability before making commitments.
                      </p>
                    </div>
                  </div>

                  {/* What This Project Is About */}
                  <div className="p-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/20">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      What This Project Is About
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base mb-4">
                      I designed and built a backend-first resource management and task scheduling system that helps project managers validate delivery commitments before making them.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {["Capacity awareness", "Cross-team dependencies", "Ownership clarity", "Explainable planning decisions"].map((point) => (
                        <div key={point} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                          <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Roles & Tech */}
                <div className="lg:col-span-5 space-y-8">
                  {/* Enables */}
                  <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <h4 className="text-sm font-extrabold text-slate-400 uppercase tracking-widest mb-4">What the System Enables</h4>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                      <li className="flex gap-3">
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                        <span>Feasibility analysis before committing work</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                        <span>Early identification of scheduling conflicts</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                        <span>Clear explanations when timelines are not achievable</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                        <span>More realistic planning conversations with stakeholders</span>
                      </li>
                    </ul>
                  </div>

                  {/* Role */}
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg shrink-0">
                      <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">My Role</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Product problem framing, System and data-model design, Scheduling and dependency logic, Backend API implementation, Iteration on correctness and edge cases.
                      </p>
                    </div>
                  </div>

                  {/* Use of AI */}
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg shrink-0">
                      <Cpu className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Use of AI</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        AI was used as a development and reasoning assistant to explore scheduling scenarios, validate assumptions, and debug/refine logic. All product and architectural decisions were made by me.
                      </p>
                    </div>
                  </div>

                  {/* Tools & Tech */}
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg shrink-0">
                      <Wrench className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Tools & Technologies</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Next.js (backend-first), Supabase (PostgreSQL, APIs), Custom planning logic, AI-assisted development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visuals Placeholders */}
              <div className="mt-12 pt-10 border-t border-slate-100 dark:border-blue-900/20">
                <h4 className="text-sm font-extrabold text-slate-400 uppercase tracking-widest mb-8">System Overview & Visuals</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    "Task planning",
                    "Feasibility analysis",
                    "Execution timelines",
                    "Conflict explanations"
                  ].map((label) => (
                    <div key={label} className="group relative aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center gap-3 transition-colors hover:bg-slate-200 dark:hover:bg-slate-750">
                      <ImageIcon className="h-6 w-6 text-slate-400 dark:text-slate-500 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Link */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-slate-950 rounded-2xl text-white shadow-xl ring-1 ring-white/10 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <Layers className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Project Prototype</h5>
                    <p className="text-xs text-slate-400">Focus on deterministic correctness rather than UI polish.</p>
                  </div>
                </div>
                <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all transform hover:scale-105 relative z-10 shadow-lg shadow-blue-600/20">
                  Access Demo
                  <ExternalLink className="h-4 w-4" />
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
