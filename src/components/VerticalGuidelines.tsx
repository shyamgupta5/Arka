import { useEffect, useRef } from 'react';

export default function VerticalGuidelines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let scrollY = 0;

    const numLines = 5; // 5 lines to split gracefully
    let lines: number[] = [];

    interface Particle {
      lineIndex: number;
      y: number;
      speed: number;
      size: number;
      baseOpacity: number;
    }

    let particles: Particle[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);

      lines = [];
      for (let i = 1; i <= numLines; i++) {
        lines.push((width / (numLines + 1)) * i);
      }

      particles = [];
      for (let i = 0; i < numLines; i++) {
        for (let j = 0; j < 2; j++) {
          particles.push({
            lineIndex: i,
            y: Math.random() * height,
            speed: (Math.random() * 0.4 + 0.1) * (Math.random() > 0.5 ? 1 : -1),
            size: Math.random() * 1.5 + 0.5,
            baseOpacity: Math.random() * 0.4 + 0.2,
          });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    init();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      // More visible in dark mode, subtle in light mode
      const lineColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)';
      const magneticRadius = 150;
      
      lines.forEach((baseX, i) => {
        ctx.beginPath();
        ctx.moveTo(baseX, 0);
        ctx.lineTo(baseX, height);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;
        ctx.stroke();

        particles.forEach((p) => {
          if (p.lineIndex !== i) return;

          // Parallax effect on scroll
          const scrollOffset = scrollY * 0.1 * p.speed;
          
          let visualY = (p.y + scrollOffset) % (height + 100);
          if (visualY < -50) visualY += height + 100;

          p.y += p.speed;
          if (p.y > height + 50) p.y = -50;
          if (p.y < -50) p.y = height + 50;

          let x = baseX;
          let currentSize = p.size;
          let currentOpacity = p.baseOpacity;

          const dx = mouse.x - x;
          const dy = mouse.y - visualY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < magneticRadius) {
            const force = (magneticRadius - dist) / magneticRadius;
            x += dx * force * 0.2;
            currentSize += force * 2;
            currentOpacity += force * 0.5;
          }

          ctx.beginPath();
          ctx.arc(x, visualY, currentSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 204, 0, ${Math.min(currentOpacity, 1)})`;
          
          if (dist < magneticRadius) {
            ctx.shadowBlur = 12;
            ctx.shadowColor = 'rgba(255, 204, 0, 0.8)';
          } else {
            ctx.shadowBlur = 4;
            ctx.shadowColor = 'rgba(255, 204, 0, 0.3)';
          }
          
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[40]"
      aria-hidden="true"
    />
  );
}
