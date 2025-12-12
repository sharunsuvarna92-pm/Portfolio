import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { PROFILE } from '../constants';

const SocialSidebar: React.FC = () => {
  return (
    <>
      {/* Desktop/Tablet Sidebar - Fixed Left */}
      <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
        
        {/* LinkedIn */}
        <div className="group relative">
          <a 
            href={PROFILE.linkedin}
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          {/* Tooltip */}
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-800 dark:bg-slate-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            LinkedIn
          </span>
        </div>

        {/* Email */}
        <div className="group relative">
          <a 
            href={`mailto:${PROFILE.email}`}
            className="flex items-center justify-center w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 hover:scale-110 transition-all duration-300"
            aria-label="Email Me"
          >
            <Mail className="h-5 w-5" />
          </a>
          {/* Tooltip */}
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-800 dark:bg-slate-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Email Me
          </span>
        </div>

      </div>
    </>
  );
};

export default SocialSidebar;