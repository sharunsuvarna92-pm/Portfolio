import React from 'react';
import { ABOUT_CONTENT, PROFILE, EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';
import BackgroundAnimation from './BackgroundAnimation';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-white/40 dark:bg-midnight/40 relative transition-colors duration-300 backdrop-blur-sm">
      {/* Background animation restricted to the top of this section */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none opacity-40">
        <BackgroundAnimation />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-4 mb-8 lg:mb-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-slate-200 dark:bg-slate-800 group border border-slate-100 dark:border-blue-900/20">
               <img 
                src={PROFILE.image}
                alt={PROFILE.name}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
               />
               <div className="absolute bottom-6 left-6 text-white drop-shadow-md">
                  <p className="font-bold text-lg">{PROFILE.name}</p>
                  <p className="text-blue-300 text-[10px] font-black uppercase tracking-wider">{PROFILE.location}</p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl mb-4 leading-tight">
              From Mechanical Systems to <br/><span className="text-blue-600 dark:text-blue-400">Digital Ecosystems</span>
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-2xl">
              {ABOUT_CONTENT.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-3 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Sites Managed", value: "200+" },
                { label: "Project Value", value: "$2M+" },
                { label: "Global Squads", value: "10+" },
                { label: "Fortune 500s", value: "3+" }
              ].map((stat) => (
                <div key={stat.label} className="p-3 bg-white/50 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl text-center border border-slate-100 dark:border-blue-900/10 hover:border-blue-200 dark:hover:border-blue-400/30 transition-all shadow-sm">
                  <span className="block text-xl font-bold text-blue-600 dark:text-blue-400 mb-0.5">{stat.value}</span>
                  <span className="text-[9px] text-slate-500 dark:text-slate-500 uppercase tracking-widest font-black">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alternating Professional Timeline */}
        <div className="mt-16 md:mt-24">
            <div className="flex items-center justify-center gap-3 mb-12">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 rounded-xl">
                    <Briefcase className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">Professional Journey</h3>
            </div>
            
            <div className="relative max-w-5xl mx-auto px-4 sm:px-0">
                {/* Central Vertical Spine */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-slate-200 dark:border-slate-800 -translate-x-1/2" />

                <div className="space-y-16 md:space-y-24">
                    {EXPERIENCE.map((exp, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index} className="relative flex flex-col md:flex-row items-center justify-between">
                                
                                {/* Timeline Intersection Node */}
                                <div className="absolute left-4 md:left-1/2 top-0 md:top-6 -translate-x-1/2 z-20">
                                    <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-lg group">
                                        <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                    </div>
                                </div>

                                {/* Content Side A (Company Info or Role depending on index) */}
                                <div className={`w-full md:w-[42%] pl-12 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left order-2 md:order-1'}`}>
                                    {isEven ? (
                                        /* Company Column */
                                        <div className="flex flex-col md:items-end">
                                            <div className="w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-slate-900 rounded-xl p-2 border border-slate-100 dark:border-slate-800 shadow-sm mb-3">
                                                <img src={exp.logoUrl} alt={exp.company} className="w-full h-full object-contain" />
                                            </div>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{exp.company}</h4>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">
                                                {PROFILE.location} • {exp.period}
                                            </p>
                                        </div>
                                    ) : (
                                        /* Role Column */
                                        <div>
                                            <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">{exp.role}</h4>
                                            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                                                {exp.description}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Content Side B */}
                                <div className={`w-full md:w-[42%] mt-4 md:mt-0 pl-12 md:pl-0 ${isEven ? 'md:text-left order-2' : 'md:text-right order-1 md:order-2'}`}>
                                    {isEven ? (
                                        /* Role Column */
                                        <div className="md:pt-6">
                                            <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">{exp.role}</h4>
                                            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                                                {exp.description}
                                            </p>
                                        </div>
                                    ) : (
                                        /* Company Column */
                                        <div className="flex flex-col md:items-start md:pt-6">
                                            <div className="w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-slate-900 rounded-xl p-2 border border-slate-100 dark:border-slate-800 shadow-sm mb-3">
                                                <img src={exp.logoUrl} alt={exp.company} className="w-full h-full object-contain" />
                                            </div>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{exp.company}</h4>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">
                                                {PROFILE.location} • {exp.period}
                                            </p>
                                        </div>
                                    )}
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