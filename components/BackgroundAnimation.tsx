import React, { useEffect, useRef } from 'react';

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];
    const mouse = { x: -1000, y: -1000 };
    
    // Deeper, richer color schemes - Adjusted for better contrast in dark mode
    const colorSchemes = [
      ['#6366f1', '#3b82f6', '#0ea5e9', '#818cf8', '#2563eb'], // Royal Indigo & Blues
      ['#a855f7', '#8b5cf6', '#6366f1', '#4f46e5', '#4338ca'], // Deep Purples
      ['#2dd4bf', '#14b8a6', '#0d9488', '#5eead4', '#99f6e4'], // Rich Teals
    ];
    let currentColorScheme = Math.floor(Math.random() * colorSchemes.length);
    const speedMultiplier = 0.4; // Slower for "richer" feel
    const connectionDistance = 200;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      createParticles();
    };

    const getRandomColor = () => {
      const colors = colorSchemes[currentColorScheme];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const createParticles = () => {
      particles = [];
      const isDark = document.documentElement.classList.contains('dark');
      const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 28000));
      
      for (let i = 0; i < particleCount; i++) {
        const vx = (Math.random() - 0.5) * 0.8;
        const vy = (Math.random() - 0.5) * 0.8;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: vx,
          vy: vy,
          size: Math.random() * 2 + 1.2,
          color: getRandomColor(),
          // Slightly higher opacity for dark mode
          opacity: isDark ? Math.random() * 0.5 + 0.4 : Math.random() * 0.4 + 0.3, 
          originalVx: vx,
          originalVy: vy,
          pulse: Math.random() * Math.PI * 2
        });
      }
    };

    const updateParticles = () => {
      particles.forEach(p => {
        const rect = canvas.getBoundingClientRect();
        const dx = (mouse.x - rect.left) - p.x;
        const dy = (mouse.y - rect.top) - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 300;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force * 0.2;
          p.vy -= Math.sin(angle) * force * 0.2;
        } else {
          p.vx += (p.originalVx - p.vx) * 0.02;
          p.vy += (p.originalVy - p.vy) * 0.02;
        }

        p.x += p.vx * speedMultiplier;
        p.y += p.vy * speedMultiplier;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        p.pulse += 0.025;
        p.currentSize = p.size + Math.sin(p.pulse) * 0.6;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains('dark');
      
      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // Increased connection opacity for dark mode
            const opacityMultiplier = isDark ? 0.45 : 0.3;
            const opacity = (connectionDistance - dist) / connectionDistance * opacityMultiplier;
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = p1.color;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Particles
      particles.forEach(p => {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        
        // Intensified glow for dark mode
        ctx.shadowBlur = isDark ? 20 : 12;
        ctx.shadowColor = p.color;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.currentSize || p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      updateParticles();
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000"
      style={{ zIndex: 0 }}
    />
  );
};

export default BackgroundAnimation;