import React from 'react';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white dark:bg-slate-950 pt-12 md:pt-20 pb-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-16">
          <div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-5 leading-tight">Let's build something <br/>scalable.</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              I'm always open to discussing new opportunities in Product Delivery, Cloud Solutions, and Technical Program Management.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <a 
                href={`mailto:${PROFILE.email}`} 
                className="flex items-center gap-3.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all group min-w-0"
                title={PROFILE.email}
              >
                <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform group-hover:bg-blue-600 group-hover:text-white">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-bold text-sm truncate">{PROFILE.email}</span>
              </a>
              <a 
                href={PROFILE.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all group min-w-0"
              >
                 <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform group-hover:bg-blue-600 group-hover:text-white">
                  <Linkedin className="h-4 w-4" />
                </div>
                <span className="font-bold text-sm truncate">LinkedIn Profile</span>
              </a>
               <div className="flex items-center gap-3.5 text-slate-600 dark:text-slate-400 min-w-0">
                 <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-bold text-sm truncate">{PROFILE.phone}</span>
              </div>
               <div className="flex items-center gap-3.5 text-slate-600 dark:text-slate-400 min-w-0">
                 <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="font-bold text-sm truncate">{PROFILE.location}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/40 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md">
             <h3 className="text-[10px] font-black text-slate-900 dark:text-white mb-5 uppercase tracking-widest">Quick Recap</h3>
             <ul className="space-y-3.5 text-slate-600 dark:text-slate-300">
                {[
                    "4+ Years delivering Enterprise SaaS & Cloud Solutions.",
                    "Managed 200+ Global Sites for Fortune 500s.",
                    "Certified Scrum Master (PSM I) & AWS Cloud Practitioner.",
                    "Expert in bridging Technical Engineering & Business Strategy."
                ].map(point => (
                    <li key={point} className="flex gap-3 items-start">
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
                        <span className="font-bold text-xs">{point}</span>
                    </li>
                ))}
             </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-100 dark:border-slate-900 text-slate-400 text-[9px] font-black uppercase tracking-[0.2em]">
          <div>&copy; {new Date().getFullYear()} {PROFILE.name}.</div>
          <div className="flex gap-8">
              <a href="#about" className="hover:text-blue-600 transition-colors">Back to top</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;