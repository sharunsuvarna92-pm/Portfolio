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
    
    // Electric Neon Palettes
    const colorSchemes = [
      ['#00f2ff', '#00d4ff', '#0077ff', '#33ffff', '#0062ff'], // Neon Cyans/Blues
      ['#bc00ff', '#8a2be2', '#bf00ff', '#ff00ff', '#4b0082'], // Neon Purples/Magentas
      ['#00ff9f', '#00ffcc', '#00ffa3', '#33ffaa', '#00ff88'], // Neon Greens/Mints
    ];
    let currentColorScheme = 0;
    const speedMultiplier = 0.6;
    const connectionDistance = 160;

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
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 20000));
      
      for (let i = 0; i < particleCount; i++) {
        const vx = (Math.random() - 0.5) * 1.2;
        const vy = (Math.random() - 0.5) * 1.2;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: vx,
          vy: vy,
          size: Math.random() * 2.5 + 1.5,
          color: getRandomColor(),
          opacity: Math.random() * 0.5 + 0.4, 
          originalVx: vx,
          originalVy: vy,
          pulse: Math.random() * Math.PI * 2
        });
      }
    };

    const createSparkle = () => {
      if (sparkles.length < 15) {
        sparkles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.0 + 0.5,
          opacity: 1,
          decay: Math.random() * 0.005 + 0.003
        });
      }
    };

    const updateParticles = () => {
      particles.forEach(p => {
        const dx = (mouse.x - canvas.getBoundingClientRect().left) - p.x;
        const dy = (mouse.y - canvas.getBoundingClientRect().top) - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 250;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force * 0.4;
          p.vy -= Math.sin(angle) * force * 0.4;
        } else {
          p.vx += (p.originalVx - p.vx) * 0.03;
          p.vy += (p.originalVy - p.vy) * 0.03;
        }

        p.x += p.vx * speedMultiplier;
        p.y += p.vy * speedMultiplier;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        p.pulse += 0.04;
        p.currentSize = p.size + Math.sin(p.pulse) * 0.8;
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
      
      // Draw Connections with Neon Glow
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (connectionDistance - dist) / connectionDistance * 0.4;
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = p1.color;
            ctx.lineWidth = 1.5;
            ctx.shadowBlur = 10;
            ctx.shadowColor = p1.color;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Draw Particles with Intense Neon Bloom
      particles.forEach(p => {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        // The core particle
        ctx.shadowBlur = 30;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.currentSize || p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Secondary Bloom layer
        ctx.globalAlpha = p.opacity * 0.3;
        ctx.shadowBlur = 50;
        ctx.beginPath();
        ctx.arc(p.x, p.y, (p.currentSize || p.size) * 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      sparkles.forEach(s => {
        ctx.save();
        ctx.globalAlpha = s.opacity;
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#ffffff';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      const relMouseX = mouse.x - canvas.getBoundingClientRect().left;
      const relMouseY = mouse.y - canvas.getBoundingClientRect().top;

      if (mouse.x !== -1000) {
        ctx.save();
        const gradient = ctx.createRadialGradient(relMouseX, relMouseY, 0, relMouseX, relMouseY, 220);
        gradient.addColorStop(0, 'rgba(0, 242, 255, 0.2)');
        gradient.addColorStop(0.5, 'rgba(0, 212, 255, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(relMouseX, relMouseY, 220, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
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

    const sparkleInterval = setInterval(createSparkle, 1000);

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
      className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000"
      style={{ zIndex: 0 }}
    />
  );
};

export default BackgroundAnimation;