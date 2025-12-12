
import React, { useRef, useEffect } from 'react';
import { SKILLS, TOOLS_LOGOS, CERTIFICATIONS } from '../constants';
import { Settings, Users, Code2, BadgeCheck } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  'strategy': <Settings className="h-6 w-6" />,
  'management': <Users className="h-6 w-6" />,
  'tech': <Code2 className="h-6 w-6" />
};

const Skills: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number, 
      y: number, 
      vx: number, 
      vy: number, 
      size: number, 
      color: string, 
      pulse: number,
      opacity: number
    }> = [];
    
    const colors = ['#3b82f6', '#60a5fa', '#06b6d4', '#22d3ee'];
    
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Higher density for the "Proficiency" card
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulse: Math.random() * Math.PI * 2,
          opacity: Math.random() * 0.5 + 0.3
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw Connections first
      const connectionDistance = 100;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = opacity;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw Particles with Bloom
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.03;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const currentSize = p.size + Math.sin(p.pulse) * 0.5;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="skills" className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl mb-4">My Toolkit & Credentials</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Backed by professional certifications and a modern technical stack.
          </p>
        </div>

        {/* Certifications Section */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center justify-center gap-2">
            <BadgeCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all group hover:-translate-y-1">
                <div className={`w-16 h-16 mx-auto mb-4 group-hover:scale-105 transition-transform`}>
                  <img 
                    src={cert.logoUrl} 
                    alt={cert.issuer}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1 leading-tight text-center">{cert.name}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 text-center">{cert.issuer} • {cert.year}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-center">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-16">
          {SKILLS.map((category) => (
            <div key={category.title} className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
              {/* Subtle hover blob */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 mb-6 relative z-10">
                {icons[category.icon]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">{category.title}</h3>
              <ul className="space-y-2 relative z-10">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools "Logos" with Enhanced Canvas Animation */}
        <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 border border-white/5 shadow-2xl">
            {/* Canvas for Particle Network Animation */}
            <canvas 
              ref={canvasRef}
              className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            />
            
             {/* Dynamic background glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <p className="text-center text-slate-400 uppercase tracking-widest text-xs mb-12 font-bold relative z-10">Technical Proficiency</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 relative z-10">
                {TOOLS_LOGOS.map((tool, idx) => (
                    <div 
                      key={tool.name} 
                      className="group flex flex-col items-center gap-4 animate-fade-in-up"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                        <div className="h-10 w-10 md:h-14 md:w-14 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 flex items-center justify-center">
                          <img 
                            src={tool.logoUrl} 
                            alt={tool.name}
                            className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-500"
                          />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-blue-400 transition-colors duration-300">{tool.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
