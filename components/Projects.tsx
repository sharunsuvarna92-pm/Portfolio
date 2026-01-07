import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  CheckCircle, 
  User, 
  Users,
  Cpu, 
  ExternalLink, 
  FlaskConical,
  Code2,
  Lightbulb,
  Zap,
  Activity,
  X,
  FileText,
  Database,
  Terminal as TerminalIcon,
  Maximize2,
  ChevronRight,
  Monitor,
  Target,
  BrainCircuit,
  Settings,
  ShieldCheck,
  History,
  Workflow,
  Search,
  MessageSquare,
  AlertTriangle,
  Layout,
  Clock,
  RefreshCw
} from 'lucide-react';

const Projects: React.FC = () => {
  const [showSpec] = useState(false);
  const [showSpecModal, setShowSpecModal] = useState(false);

  useEffect(() => {
    if (showSpecModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSpecModal]);

  const handleLaunchPrototype = () => {
    window.open('https://sched-iq.vercel.app/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 relative transition-colors duration-300 border-t border-slate-200 dark:border-blue-900/10">
      {/* Blueprint Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-600/10 rounded-lg">
              <FlaskConical className="h-5 w-5 text-blue-600" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">Personal Lab</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white sm:text-6xl mb-6 tracking-tight leading-none">
            The <span className="rich-gradient-text">Side Quests.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-medium">
            These are things I build in my free time, mostly inspired by problems I keep running into at work. They’re my sandbox for experimenting and fixing my own annoyances.
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-white dark:bg-midnight rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
            <div className="bg-slate-50 dark:bg-slate-900/50 px-6 py-8 md:px-8 md:py-8 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-5 max-w-2xl">
                <div className="h-14 w-14 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <Activity className="h-7 w-7 text-white relative z-10" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                    SchedIQ — Deterministic Resource Planning & Task Scheduling Engine
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Supabase", "PostgreSQL", "AI-Assisted System Design"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-600 dark:text-blue-300 text-[10px] font-black uppercase tracking-widest rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-10">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 space-y-8">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 uppercase tracking-widest">
                      <Lightbulb className="h-4 w-4 text-amber-500" />
                      The Core Thesis
                    </h4>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-medium">
                      I built SchedIQ to treat project planning as a feasibility problem—validating commitments before work is ever committed by modeling real working hours and constraints.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                      {["Deterministic Feasibility", "Dependency-Aware Scheduling", "Capacity-Constrained Planning", "Explainable Blocker Analysis"].map(item => (
                        <div key={item} className="flex gap-3 items-center bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 transition-colors">
                          <Zap className="h-4 w-4 text-blue-500 shrink-0" />
                          <span className="text-[10px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="bg-slate-950 p-6 md:p-8 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden ring-1 ring-white/10">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Operational Value</h4>
                    <ul className="space-y-4 text-xs text-slate-300">
                      {["Forces reality into planning.", "Surfaces delivery bottlenecks early.", "Explains trade-offs clearly.", "Data-backed decision making."].map(item => (
                        <li key={item} className="flex gap-3 items-start">
                           <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                           <span className="font-bold leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Bar - Fixed Mobile Overhang */}
              <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4 w-full lg:w-auto">
                  <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-600/20 shrink-0">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div className="max-w-md">
                    <h5 className="font-black text-base text-slate-900 dark:text-white tracking-tight">Built end-to-end by me</h5>
                    <p className="text-xs text-slate-400 font-medium mt-1">From problem framing and system design to implementation.</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                    <button 
                      onClick={() => setShowSpecModal(true)}
                      className="flex-1 lg:flex-none px-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-lg whitespace-nowrap"
                    >
                      Technical Spec
                      <Code2 className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={handleLaunchPrototype}
                      className="flex-1 lg:flex-none px-6 py-4 bg-blue-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95 shadow-lg whitespace-nowrap"
                    >
                      Launch Prototype
                      <ExternalLink className="h-4 w-4" />
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Spec Modal */}
      {showSpecModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-0 md:p-4 lg:p-8">
          <div className="absolute inset-0 bg-slate-950/98 backdrop-blur-xl" onClick={() => setShowSpecModal(false)}></div>
          
          <div className="bg-white dark:bg-[#0a0f1c] w-full max-w-[1400px] h-full md:h-auto md:max-h-[92vh] md:rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden flex flex-col border border-slate-200 dark:border-white/10 animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="px-6 md:px-8 py-6 border-b border-slate-100 dark:border-white/5 flex items-center justify-between sticky top-0 bg-white/90 dark:bg-[#0a0f1c]/90 backdrop-blur-md z-20">
              <div className="flex items-center gap-5">
                <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20 shrink-0">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white tracking-tight uppercase">SchedIQ Technical Blueprint</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Internal Build // Engineering Documentation</p>
                </div>
              </div>
              <button onClick={() => setShowSpecModal(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors">
                <X className="h-6 w-6 text-slate-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-grow overflow-y-auto p-6 md:p-14 lg:p-16 custom-scrollbar space-y-20">
              
              {/* Introduction & Origin Section */}
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[0.9]">SchedIQ</h1>
                    <p className="text-lg lg:text-xl font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Deterministic Resource Planning & Task Scheduling Engine</p>
                  </div>
                  
                  <div className="space-y-6">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                      <Search className="h-6 w-6 text-blue-600" />
                      Why I Built SchedIQ
                    </h2>
                    <div className="space-y-4 text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-lg">
                      <p>SchedIQ started from a very familiar frustration.</p>
                      <p>In fast-paced product environments, teams work across multiple modules, individuals juggle overlapping responsibilities, and roadmaps are constantly reshaped by user feedback and high-priority requests. On paper, plans look solid. In reality, priorities shift, capacity gets stretched, and dependencies surface too late.</p>
                      <p>As a project and delivery lead, I kept seeing plans fail not because teams couldn’t execute—but because the planning systems allowed <span className="text-blue-600 font-black">optimistic commitments</span> without validating feasibility.</p>
                      <p>SchedIQ is my attempt to fix that. Not with better reporting, but by forcing reality into the planning conversation before commitments are made.</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="bg-slate-50 dark:bg-midnight p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-inner">
                    <h5 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest mb-8 flex items-center gap-2">
                      <Monitor className="h-4 w-4 text-blue-600" />
                      The Reality SchedIQ Is Designed For
                    </h5>
                    <p className="text-sm text-slate-400 mb-8 font-bold uppercase tracking-widest">Built for environments where:</p>
                    <ul className="space-y-6">
                      {[
                        { icon: <Cpu className="h-5 w-5" />, text: "Engineers contribute to multiple modules simultaneously" },
                        { icon: <Users className="h-5 w-5" />, text: "Ownership is distributed across teams, not isolated" },
                        { icon: <AlertTriangle className="h-5 w-5" />, text: "High-priority requests interrupt planned work regularly" },
                        { icon: <RefreshCw className="h-5 w-5" />, text: "Reprioritization is constant and unavoidable" }
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-5 items-start">
                          <div className="h-10 w-10 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 dark:border-white/10 shadow-sm">
                            <span className="text-blue-600 dark:text-blue-400">{item.icon}</span>
                          </div>
                          <span className="text-sm text-slate-600 dark:text-slate-300 font-bold leading-snug pt-2">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10 pt-8 border-t border-slate-200 dark:border-white/5 text-center">
                       <p className="text-xs text-slate-400 italic font-medium px-4">Traditional tools assume stability. Real product teams don’t have it.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What SchedIQ Is / Is Not Section */}
              <div className="bg-slate-900 p-8 md:p-12 lg:p-20 rounded-[2.5rem] md:rounded-[3.5rem] text-white relative overflow-hidden ring-1 ring-white/10">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Activity className="h-64 w-64" />
                </div>
                <div className="relative z-10 max-w-5xl">
                   <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 tracking-tight">What SchedIQ Is <span className="text-slate-500">(and Is Not)</span></h2>
                   <p className="text-lg lg:text-2xl text-slate-300 font-medium mb-12 max-w-3xl leading-relaxed">
                     SchedIQ is <span className="text-white font-bold">not a task tracker</span>. It doesn’t ask what you want to do. It helps you understand what you can do—realistically and explainably.
                   </p>
                   
                   <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                     {[
                       { q: "Can this task be delivered by the requested date?", a: "Deterministic Check" },
                       { q: "If yes, what does the execution plan look like?", a: "Visual Roadmap" },
                       { q: "If no, what exactly is blocking it, and what needs to change?", a: "Blocker Analysis" }
                     ].map((item, idx) => (
                       <div key={idx} className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                          <p className="text-base md:text-lg font-bold mb-6 leading-tight">{item.q}</p>
                          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400">
                             <Zap className="h-3 w-3" />
                             {item.a}
                          </div>
                       </div>
                     ))}
                   </div>
                   <p className="mt-12 text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Every answer is grounded in deterministic logic, not assumptions.</p>
                </div>
              </div>

              {/* How It Works - Detailed Steps */}
              <div className="space-y-16">
                 <div className="flex items-center gap-6">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight whitespace-nowrap">How It Works</h2>
                    <div className="h-px flex-grow bg-slate-100 dark:bg-white/5"></div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                    {[
                      { 
                        title: "1. Planning Without Commitment", 
                        icon: <Layout className="h-6 w-6" />,
                        content: "Tasks are first created in a planning state. At this stage, no capacity is consumed, no assignments are locked, and scenarios can be explored safely. Planning should be cheap; commitment should be deliberate." 
                      },
                      { 
                        title: "2. Deterministic Feasibility Analysis", 
                        icon: <Activity className="h-6 w-6" />,
                        content: "The engine simulates execution by respecting real working hours, only considering already committed work, enforcing ownership rules (primary/secondary), and honoring cross-team dependencies." 
                      },
                      { 
                        title: "3. Explainable Outcomes", 
                        icon: <MessageSquare className="h-6 w-6" />,
                        content: "Returns a realistic execution window if feasible. If not, it explains exactly who/what is blocking it and what should change—reprioritization or timeline shifts." 
                      },
                      { 
                        title: "4. Explicit Commitment", 
                        icon: <CheckCircle className="h-6 w-6" />,
                        content: "Only after confirmation does a task move to committed. At that point, assignments become capacity-blocking and delivery discipline is enforced automatically across future plans." 
                      }
                    ].map((step, idx) => (
                      <div key={idx} className="bg-slate-50 dark:bg-white/5 p-8 md:p-10 rounded-[2rem] border border-slate-100 dark:border-white/5 flex flex-col sm:flex-row gap-8 group">
                         <div className="h-14 w-14 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center shrink-0 shadow-sm border border-slate-100 dark:border-white/10 group-hover:scale-110 transition-transform">
                            <span className="text-blue-600 dark:text-blue-400">{step.icon}</span>
                         </div>
                         <div className="space-y-4">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{step.title}</h3>
                            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{step.content}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Core Design Principles & My Role */}
              <div className="grid lg:grid-cols-12 gap-16">
                 <div className="lg:col-span-5 space-y-12">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Core Design Principles</h2>
                    <div className="space-y-6">
                       {[
                         { label: "Determinism over optimism", desc: "If a system allows impossible plans, people will make them." },
                         { label: "Explanation over abstraction", desc: "A 'no' is only useful if it clearly explains why." },
                         { label: "Ownership matters", desc: "Work should flow to people who actually own the system." },
                         { label: "Planning is not execution", desc: "Mixing the two is how silent overcommitment happens." }
                       ].map((principle, idx) => (
                         <div key={idx} className="flex gap-6 items-start">
                            <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,1)]"></div>
                            <div>
                               <p className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-[10px] mb-1">{principle.label}</p>
                               <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{principle.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="lg:col-span-7 bg-blue-50/30 dark:bg-blue-900/10 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-blue-100/30 dark:border-blue-900/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                      <User className="h-32 w-32 text-blue-600" />
                    </div>
                    <div className="relative z-10 space-y-8">
                       <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">My Role</h2>
                       <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                         SchedIQ is something I designed and built end-to-end. This wasn't built as a demo—it was built as a thinking tool I genuinely wished I had while planning real projects.
                       </p>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {[
                           "Problem Framing", "Ownership Modeling", "Dependency Logic", "Lifecycle & State Rules", "Backend Decision Engine", "API Architecture"
                         ].map(item => (
                           <div key={item} className="bg-white dark:bg-slate-900 p-4 rounded-xl flex items-center gap-3 border border-blue-100 dark:border-white/5">
                              <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                              <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">{item}</span>
                           </div>
                         ))}
                       </div>
                    </div>
                 </div>
              </div>

              {/* AI Multiplication Section */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                 <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-xl border border-amber-100 dark:border-amber-800">
                       <BrainCircuit className="h-5 w-5" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Build Methodology</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Force Multiplication via AI</h2>
                    <div className="space-y-4 text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-lg">
                      <p>I don’t come from a traditional coding background, and I used AI as a force multiplier to translate system thinking into working software.</p>
                      <p>AI helped me turn product and delivery problems into concrete system designs, explore edge cases faster, and iterate on backend code based on clearly defined rules.</p>
                      <ul className="space-y-4 pt-4">
                        {[
                          "Defining strict constraints & ownership rules",
                          "Translating product problems into system designs",
                          "Exploring complex scheduling logic & heuristics",
                          "Simulating 'what breaks if this changes?' scenarios"
                        ].map((point, idx) => (
                          <li key={idx} className="flex gap-4 items-start">
                             <ChevronRight className="h-5 w-5 text-amber-500 shrink-0" />
                             <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                 </div>

                 <div className="bg-slate-950 p-10 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)]"></div>
                    <div className="relative z-10 space-y-6">
                       <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Internal Reflection</h4>
                       <p className="text-lg md:text-2xl text-slate-300 font-medium italic leading-relaxed">
                         "SchedIQ works not because the code is clever, but because the rules are explicit, the constraints are real, and the system refuses to lie about feasibility."
                       </p>
                       <div className="pt-6 flex items-center gap-4">
                          <div className="h-px w-12 bg-blue-500/50"></div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">System Architect's Log</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Tech Stack & Closing */}
              <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
                 <div className="bg-slate-50 dark:bg-midnight p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-white/5 space-y-8">
                    <h5 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-3">
                       <Settings className="h-4 w-4 text-blue-600" />
                       Tech Stack
                    </h5>
                    <div className="space-y-6">
                       <div className="flex flex-wrap gap-2">
                          {["Next.js", "Supabase", "PostgreSQL", "Backend-first"].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 dark:border-white/5">{tag}</span>
                          ))}
                       </div>
                       <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                         The system is intentionally backend-heavy. Decisions are made server-side so the UI reflects reality, not optimism.
                       </p>
                    </div>
                 </div>

                 <div className="bg-slate-50 dark:bg-midnight p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-white/5 space-y-8">
                    <h5 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-3">
                       <History className="h-4 w-4 text-blue-600" />
                       What It Taught Me
                    </h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-bold italic leading-relaxed">
                      "Most delivery failures aren’t execution failures. They’re planning failures that nobody surfaced early enough. Good planning isn’t about confidence. It’s about constraints."
                    </p>
                 </div>

                 <div className="bg-slate-50 dark:bg-midnight p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-white/5 space-y-8">
                    <h5 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-3">
                       <Zap className="h-4 w-4 text-amber-500" />
                       What's Next
                    </h5>
                    <ul className="space-y-3">
                       {["Smarter capacity slot detection", "Skill-based owner selection", "Scenario simulation", "Parallel execution heuristics"].map(item => (
                         <li key={item} className="flex gap-3 items-center text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            <div className="h-1 w-1 bg-blue-500 rounded-full"></div>
                            {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 md:px-8 py-6 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-[#0a0f1c] flex flex-col md:flex-row items-center justify-between gap-6 sticky bottom-0 z-20">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                   <ShieldCheck className="h-5 w-5 text-emerald-500" />
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Commitments should be earned, not assumed</span>
                </div>
                <div className="h-4 w-px bg-slate-200 dark:bg-white/10 hidden md:block"></div>
                <div className="flex items-center gap-2">
                   <Clock className="h-4 w-4 text-blue-500" />
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Refined Version 2.1.0</span>
                </div>
              </div>
              <button 
                onClick={() => setShowSpecModal(false)}
                className="w-full md:w-auto px-12 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                Close Documentation
              </button>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.1);
          border-radius: 20px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.2);
        }
      `}} />
    </section>
  );
};

export default Projects;