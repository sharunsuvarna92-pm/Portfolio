import React from 'react';
import { SKILLS, TOOLS_LOGOS, CERTIFICATIONS } from '../constants';
import { Settings, Users, Code2, BadgeCheck } from 'lucide-react';
import BackgroundAnimation from './BackgroundAnimation';

const icons: Record<string, React.ReactNode> = {
  'strategy': <Settings className="h-4 w-4" />,
  'management': <Users className="h-4 w-4" />,
  'tech': <Code2 className="h-4 w-4" />
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 md:py-16 bg-white/30 dark:bg-midnight/30 transition-colors duration-500 backdrop-blur-sm relative overflow-hidden">
      <BackgroundAnimation />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl mb-3 leading-tight">Technical Ecosystem</h2>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            A comprehensive suite of certifications and tools honed through years of 
            global product delivery.
          </p>
        </div>

        {/* Certifications Section */}
        <div className="mb-12">
          <h3 className="text-[10px] font-black text-slate-900 dark:text-white mb-6 flex items-center justify-center gap-3 uppercase tracking-[0.3em]">
            <BadgeCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            Core Credentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="bg-white/80 dark:bg-slate-900/40 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-blue-500/20 hover:border-blue-400 dark:hover:border-blue-500 transition-all group hover:-translate-y-1 hover:shadow-xl backdrop-blur-md">
                <div className={`w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <img 
                    src={cert.logoUrl} 
                    alt={cert.issuer}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs mb-1 leading-tight text-center">{cert.name}</h4>
                <p className="text-[8px] text-blue-600 dark:text-blue-400 font-black mb-2 text-center tracking-widest uppercase">{cert.issuer}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed text-center">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SKILLS.map((category) => (
            <div key={category.title} className="bg-white/80 dark:bg-slate-900/40 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-blue-500/10 relative overflow-hidden group hover:shadow-xl transition-all duration-500 backdrop-blur-md">
              <div className="inline-flex items-center justify-center h-8 w-8 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 mb-4 relative z-10">
                {icons[category.icon]}
              </div>
              <h3 className="text-base font-black text-slate-900 dark:text-white mb-4 relative z-10">{category.title}</h3>
              <ul className="space-y-2.5 relative z-10">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-600 dark:text-slate-300 font-bold text-[10px]">
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2.5 flex-shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="bg-slate-950/80 dark:bg-midnight-lighter/60 rounded-[2rem] p-10 relative overflow-hidden transition-all duration-500 shadow-2xl border border-white/5 dark:border-blue-500/20 backdrop-blur-md">
            <p className="text-center text-slate-500 uppercase tracking-[0.4em] text-[8px] mb-8 font-black relative z-10">Tech Stack Proficiency</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative z-10">
                {TOOLS_LOGOS.map((tool, idx) => (
                    <div 
                      key={tool.name} 
                      className="group flex flex-col items-center gap-3 animate-fade-in-up"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                        <div className="h-8 w-8 md:h-10 md:w-10 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 flex items-center justify-center">
                          <img 
                            src={tool.logoUrl} 
                            alt={tool.name}
                            className="w-full h-full object-contain filter grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-125 transition-all duration-500"
                          />
                        </div>
                        <span className="text-[7px] font-black uppercase tracking-[0.2em] text-slate-600 group-hover:text-blue-400 transition-colors duration-300">{tool.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;