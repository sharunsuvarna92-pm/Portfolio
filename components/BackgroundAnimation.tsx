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
    let sparkles: any[] = [];
    const mouse = { x: -1000, y: -1000 };
    
    // Deeper, richer color schemes
    const colorSchemes = [
      ['#4f46e5', '#3b82f6', '#0ea5e9', '#6366f1', '#1d4ed8'], // Royal Indigo & Blues
      ['#a855f7', '#7c3aed', '#6366f1', '#4338ca', '#312e81'], // Deep Purples
      ['#14b8a6', '#0d9488', '#0f766e', '#2dd4bf', '#5eead4'], // Rich Teals
    ];
    let currentColorScheme = Math.floor(Math.random() * colorSchemes.length);
    const speedMultiplier = 0.45; // Slower for "richer" feel
    const connectionDistance = 180;

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
      const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 30000));
      
      for (let i = 0; i < particleCount; i++) {
        const vx = (Math.random() - 0.5) * 0.8;
        const vy = (Math.random() - 0.5) * 0.8;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: vx,
          vy: vy,
          size: Math.random() * 2 + 1,
          color: getRandomColor(),
          opacity: Math.random() * 0.4 + 0.3, 
          originalVx: vx,
          originalVy: vy,
          pulse: Math.random() * Math.PI * 2
        });
      }
    };

    const createSparkle = () => {
      if (sparkles.length < 10) {
        sparkles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: 0.8,
          decay: Math.random() * 0.003 + 0.002
        });
      }
    };

    const updateParticles = () => {
      particles.forEach(p => {
        const dx = (mouse.x - canvas.getBoundingClientRect().left) - p.x;
        const dy = (mouse.y - canvas.getBoundingClientRect().top) - p.y;
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

        p.pulse += 0.02;
        p.currentSize = p.size + Math.sin(p.pulse) * 0.5;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (connectionDistance - dist) / connectionDistance * 0.25;
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = p1.color;
            ctx.lineWidth = 1;
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
        ctx.shadowBlur = 15;
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