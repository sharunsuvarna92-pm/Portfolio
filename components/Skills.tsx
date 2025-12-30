import React from 'react';
import { SKILLS, TOOLS_LOGOS, CERTIFICATIONS } from '../constants';
import { Settings, Users, Code2, BadgeCheck } from 'lucide-react';
import BackgroundAnimation from './BackgroundAnimation';

const icons: Record<string, React.ReactNode> = {
  'strategy': <Settings className="h-5 w-5" />,
  'management': <Users className="h-5 w-5" />,
  'tech': <Code2 className="h-5 w-5" />
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-white dark:bg-midnight relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <BackgroundAnimation />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="text-center mb-16">
            <span className="text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Knowledge Stack</span>
            <h2 className="font-display text-3xl font-black text-slate-900 dark:text-white sm:text-5xl mb-4 tracking-tight">Technical Ecosystem</h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed font-medium">
                A specialized toolkit encompassing engineering rigor, product strategy, and cloud-native architecture.
            </p>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-[11px] font-black text-slate-900 dark:text-white flex items-center gap-3 uppercase tracking-[0.3em]">
                <BadgeCheck className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                Core Credentials
            </h3>
            <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800 ml-6 hidden md:block opacity-30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-900/80 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all group hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-16 h-16 mx-auto mb-6 bg-white dark:bg-midnight rounded-2xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                  <img 
                    src={cert.logoUrl} 
                    alt={cert.issuer}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-[14px] mb-1.5 leading-tight text-center tracking-tight">{cert.name}</h4>
                <p className="text-[9px] text-blue-600 dark:text-blue-400 font-black mb-3 text-center tracking-widest uppercase">{cert.issuer}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed text-center font-medium">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {SKILLS.map((category) => (
            <div key={category.title} className="bg-white dark:bg-slate-900/90 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-slate-50 dark:bg-midnight text-blue-600 dark:text-blue-400 mb-6 border border-slate-200 dark:border-slate-800 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {icons[category.icon]}
              </div>
              <h3 className="font-display text-lg font-black text-slate-900 dark:text-white mb-6 tracking-tight">{category.title}</h3>
              <ul className="space-y-3.5">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-600 dark:text-slate-400 font-bold text-[11px] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="bg-slate-950 dark:bg-black rounded-[3rem] p-12 relative overflow-hidden transition-all duration-500 shadow-2xl border border-white/5 ring-1 ring-white/10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <p className="font-display text-center text-slate-500 uppercase tracking-[0.45em] text-[10px] mb-12 font-black relative z-10">Enterprise Stack Proficiency</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20 relative z-10">
                {TOOLS_LOGOS.map((tool, idx) => (
                    <div 
                      key={tool.name} 
                      className="group flex flex-col items-center gap-4"
                    >
                        <div className="h-10 w-10 md:h-12 md:w-12 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 flex items-center justify-center">
                          <img 
                            src={tool.logoUrl} 
                            alt={tool.name}
                            className="w-full h-full object-contain filter grayscale invert brightness-75 group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-500"
                          />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.35em] text-slate-600 group-hover:text-blue-400 transition-colors duration-300">{tool.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;