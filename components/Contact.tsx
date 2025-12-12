import React from 'react';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white dark:bg-slate-950 pt-12 md:pt-24 pb-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Let's build something scalable.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md">
              I'm always open to discussing new opportunities in Product Delivery, Cloud Solutions, and Technical Program Management.
            </p>
            
            <div className="space-y-4">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-medium break-all">{PROFILE.email}</span>
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                 <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                  <Linkedin className="h-5 w-5" />
                </div>
                <span className="font-medium">linkedin.com/in/sharun-suvarna</span>
              </a>
               <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                 <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="font-medium">{PROFILE.phone}</span>
              </div>
               <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                 <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="font-medium">{PROFILE.location}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Quick Recap</h3>
             <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-3">
                    <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                    <span>4+ Years delivering Enterprise SaaS & Cloud Solutions.</span>
                </li>
                 <li className="flex gap-3">
                    <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                    <span>Managed 200+ Global Sites for Fortune 500s.</span>
                </li>
                 <li className="flex gap-3">
                    <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                    <span>Certified Scrum Master (PSM I) & AWS Cloud Practitioner.</span>
                </li>
                 <li className="flex gap-3">
                    <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                    <span>Expert in bridging Technical Engineering & Business Strategy.</span>
                </li>
             </ul>
             <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-400">
                Designed with React, Tailwind, and Recharts. 
             </div>
          </div>
        </div>

        <div className="text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;