
import React from 'react';
import { ABOUT_CONTENT, PROFILE, EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-white/40 dark:bg-midnight/40 relative transition-colors duration-300 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 mb-10 lg:mb-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-slate-200 dark:bg-slate-800 group border border-slate-100 dark:border-blue-900/30">
               <img 
                src={PROFILE.image}
                alt={PROFILE.name}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
               />
               <div className="absolute bottom-6 left-6 text-white drop-shadow-md">
                  <p className="font-bold text-xl">{PROFILE.name}</p>
                  <p className="text-blue-300 text-sm">{PROFILE.location}</p>
               </div>
            </div>
            {/* Decorative background element - Animated */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-600/10 rounded-br-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-tl-3xl -z-10 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl mb-6">
              From Mechanical Systems to <span className="text-blue-600 dark:text-blue-400">Digital Ecosystems</span>
            </h2>
            <div className="prose prose-lg text-slate-600 dark:text-slate-300">
              {ABOUT_CONTENT.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="p-4 bg-white/50 dark:bg-slate-900/60 backdrop-blur-sm rounded-lg text-center border border-slate-100 dark:border-blue-900/20 hover:border-blue-200 dark:hover:border-blue-400 transition-colors">
                <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400">200+</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Sites Managed</span>
              </div>
              <div className="p-4 bg-white/50 dark:bg-slate-900/60 backdrop-blur-sm rounded-lg text-center border border-slate-100 dark:border-blue-900/20 hover:border-blue-200 dark:hover:border-blue-400 transition-colors">
                <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400">$2M+</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Project Value</span>
              </div>
              <div className="p-4 bg-white/50 dark:bg-slate-900/60 backdrop-blur-sm rounded-lg text-center border border-slate-100 dark:border-blue-900/20 hover:border-blue-200 dark:hover:border-blue-400 transition-colors">
                <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400">10+</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Global Squads</span>
              </div>
              <div className="p-4 bg-white/50 dark:bg-slate-900/60 backdrop-blur-sm rounded-lg text-center border border-slate-100 dark:border-blue-900/20 hover:border-blue-200 dark:hover:border-blue-400 transition-colors">
                <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400">3+</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Fortune 500s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Journey */}
        <div className="mt-16 md:mt-24">
            <div className="flex items-center gap-3 mb-12">
                <div className="p-2.5 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 rounded-xl">
                    <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Professional Journey</h3>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
                {/* Continuous Line */}
                <div className="hidden md:block absolute left-12 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-blue-900/30" />

                <div className="space-y-12">
                    {EXPERIENCE.map((exp, index) => {
                        const isFirst = index === 0;

                        return (
                            <div key={index} className="relative pl-0 md:pl-40 group">
                                {/* Logo Bubble */}
                                <div className={`
                                    relative mb-6 md:mb-0 md:absolute md:left-0 md:top-0 
                                    h-20 w-20 md:h-24 md:w-24 
                                    rounded-3xl border-2 z-10 
                                    bg-white dark:bg-midnight 
                                    overflow-hidden transition-all duration-300 
                                    flex items-center justify-center 
                                    ${isFirst 
                                      ? 'border-blue-600 dark:border-blue-500 shadow-xl shadow-blue-200 dark:shadow-blue-900/50 scale-105' 
                                      : 'border-slate-200 dark:border-blue-900/40 group-hover:border-blue-400 group-hover:shadow-md'
                                    }
                                `}>
                                    <img 
                                        src={exp.logoUrl} 
                                        alt={exp.company}
                                        className="h-full w-full object-contain p-2"
                                    />
                                </div>

                                {/* Content Card */}
                                <div className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 relative min-h-[100px] flex flex-col justify-center backdrop-blur-md ${isFirst ? 'bg-white/80 dark:bg-slate-900/60 border-blue-200 dark:border-blue-500/40 shadow-xl shadow-blue-50/50 dark:shadow-blue-900/30' : 'bg-white/60 dark:bg-slate-900/40 border-slate-100 dark:border-blue-900/20 hover:bg-white dark:hover:bg-slate-900/60 hover:shadow-lg'}`}>
                                    {isFirst && (
                                        <div className="absolute -top-3 -right-3">
                                            <span className="relative flex h-4 w-4">
                                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                              <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
                                            </span>
                                        </div>
                                    )}
                                    
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h4 className={`text-xl font-bold ${isFirst ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-200'}`}>
                                                {exp.company}
                                            </h4>
                                            <p className={`font-semibold text-lg mt-1 ${isFirst ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`}>{exp.role}</p>
                                        </div>
                                        <span className={`self-start inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap ${isFirst ? 'bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-none' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
