
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
    
    // Using a professional palette that aligns with the portfolio's blue/slate theme
    // Slightly saturated colors to pop in both light and dark modes
    const colorSchemes = [
      ['#2563eb', '#3b82f6', '#60a5fa', '#1d4ed8', '#1e40af'], // Blues
      ['#4f46e5', '#6366f1', '#818cf8', '#4338ca', '#3730a3'], // Indigos
      ['#0891b2', '#06b6d4', '#22d3ee', '#0e7490', '#155e75'], // Cyans
    ];
    let currentColorScheme = 0;
    const speedMultiplier = 0.8;
    const connectionDistance = 140;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const getRandomColor = () => {
      const colors = colorSchemes[currentColorScheme];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
      
      for (let i = 0; i < particleCount; i++) {
        const vx = (Math.random() - 0.5) * 1.0;
        const vy = (Math.random() - 0.5) * 1.0;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: vx,
          vy: vy,
          size: Math.random() * 3.0 + 1.2,
          color: getRandomColor(),
          // Slightly higher minimum opacity for visibility on light backgrounds
          opacity: Math.random() * 0.4 + 0.35, 
          originalVx: vx,
          originalVy: vy,
          pulse: Math.random() * Math.PI * 2
        });
      }
    };

    const createSparkle = () => {
      if (sparkles.length < 20) {
        sparkles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.0 + 0.5,
          opacity: 1,
          decay: Math.random() * 0.008 + 0.004
        });
      }
    };

    const updateParticles = () => {
      particles.forEach(p => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force * 0.25;
          p.vy -= Math.sin(angle) * force * 0.25;
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
        p.currentSize = p.size + Math.sin(p.pulse) * 0.6;
      });
    };

    const updateSparkles = () => {
      sparkles = sparkles.filter(s => {
        s.opacity -= s.decay;
        return s.opacity > 0;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (connectionDistance - dist) / connectionDistance * 0.35;
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

      sparkles.forEach(s => {
        ctx.save();
        ctx.globalAlpha = s.opacity;
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#ffffff';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      if (mouse.x !== -1000) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 180);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2);
        ctx.fill();
      }

      updateParticles();
      updateSparkles();
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

    const sparkleInterval = setInterval(createSparkle, 600);

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(sparkleInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none transition-opacity duration-1000"
      style={{ zIndex: 0 }}
    />
  );
};

export default BackgroundAnimation;
