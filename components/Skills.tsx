
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
    
    // Neon palette for the card - Electric Blue, Cyan, Purple
    const colors = ['#00f2ff', '#00d4ff', '#bc00ff', '#00ff9f'];
    
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
            ctx.lineWidth = 1;
            ctx.shadowBlur = 5;
            ctx.shadowColor = p1.color;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.03;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const currentSize = p.size + Math.sin(p.pulse) * 0.6;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 25;
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
    <section id="skills" className="py-24 md:py-32 bg-white/30 dark:bg-midnight/30 transition-colors duration-500 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-5xl mb-6">Technical Ecosystem</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive suite of certifications and tools honed through years of 
            global product delivery.
          </p>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-12 flex items-center justify-center gap-3">
            <BadgeCheck className="h-7 w-7 text-blue-600 dark:text-blue-400" />
            Core Credentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="bg-white/80 dark:bg-slate-900/40 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-blue-500/20 hover:border-blue-400 dark:hover:border-blue-500 transition-all group hover:-translate-y-2 hover:shadow-lg backdrop-blur-md">
                <div className={`w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <img 
                    src={cert.logoUrl} 
                    alt={cert.issuer}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight text-center">{cert.name}</h4>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-bold mb-4 text-center tracking-wide">{cert.issuer}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed text-center">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {SKILLS.map((category) => (
            <div key={category.title} className="bg-white/80 dark:bg-slate-900/40 p-10 rounded-2xl shadow-sm border border-slate-100 dark:border-blue-500/10 relative overflow-hidden group hover:shadow-xl transition-all duration-500 backdrop-blur-md">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 dark:bg-blue-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 mb-8 relative z-10">
                {icons[category.icon]}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">{category.title}</h3>
              <ul className="space-y-4 relative z-10">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-600 dark:text-slate-300 font-medium">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="bg-slate-950/80 dark:bg-midnight-lighter/60 rounded-3xl p-10 md:p-16 relative overflow-hidden transition-all duration-500 shadow-2xl border border-white/5 dark:border-blue-500/20 backdrop-blur-md">
            <canvas 
              ref={canvasRef}
              className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60"
            />
            
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

            <p className="text-center text-slate-500 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-16 font-extrabold relative z-10">Tech Stack Proficiency</p>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20 relative z-10">
                {TOOLS_LOGOS.map((tool, idx) => (
                    <div 
                      key={tool.name} 
                      className="group flex flex-col items-center gap-5 animate-fade-in-up"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                        <div className="h-12 w-12 md:h-16 md:w-16 transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-125 flex items-center justify-center">
                          <img 
                            src={tool.logoUrl} 
                            alt={tool.name}
                            className="w-full h-full object-contain filter brightness-75 group-hover:brightness-125 transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(0,242,255,0.6)]"
                          />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 group-hover:text-blue-400 transition-colors duration-300">{tool.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
