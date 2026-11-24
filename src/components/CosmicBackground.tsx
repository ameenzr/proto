'use client';
import { useEffect, useRef } from 'react';

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    class Ray {
      angle: number;
      speed: number;
      length: number;
      distance: number;
      color: string;
      width: number;
      opacity: number;

      constructor() {
        this.angle = Math.random() * Math.PI * 2;
        // Rays move outward from the center
        this.speed = Math.random() * 6 + 2;
        this.length = Math.random() * 400 + 100;
        this.distance = Math.random() * (Math.max(width, height) / 1.5);
        this.opacity = Math.random() * 0.6 + 0.1;
        
        // Colors closely matching the provided reference image
        const colors = [
          '255, 95, 0',    // Orange
          '155, 0, 243',   // Purple
          '0, 243, 141',   // Green
          '255, 40, 60',   // Deep Red
          '0, 218, 243',   // Cyan
          '255, 255, 255'  // White flashes
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.width = Math.random() * 3 + 0.5;
      }

      update() {
        this.distance += this.speed;
        // Add a slight perspective acceleration effect
        this.speed *= 1.02; 
        
        if (this.distance > Math.max(width, height)) {
          this.distance = Math.random() * 50; // Reset near center
          this.speed = Math.random() * 6 + 2;
          this.angle = Math.random() * Math.PI * 2;
        }
      }

      draw() {
        if (!ctx) return;
        const centerX = width / 2;
        const centerY = height / 2;
        
        const startX = centerX + Math.cos(this.angle) * this.distance;
        const startY = centerY + Math.sin(this.angle) * this.distance;
        const endX = centerX + Math.cos(this.angle) * (this.distance + this.length);
        const endY = centerY + Math.sin(this.angle) * (this.distance + this.length);

        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(0, `rgba(${this.color}, 0)`);
        gradient.addColorStop(1, `rgba(${this.color}, ${this.opacity})`);

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.width;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    }

    const rays: Ray[] = Array.from({ length: 400 }, () => new Ray());

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'screen';

      rays.forEach(ray => {
        ray.update();
        ray.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#050505]">
      
      {/* Pre-rendered blurred conic gradient to mimic the light blooms in the reference image */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] opacity-[0.85] mix-blend-screen blur-[100px]"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, 
            rgba(255, 40, 60, 0.5) 0deg, 
            rgba(0, 243, 141, 0.6) 80deg, 
            rgba(0, 218, 243, 0.3) 140deg, 
            rgba(155, 0, 243, 0.5) 200deg, 
            rgba(255, 95, 0, 0.5) 260deg, 
            rgba(255, 40, 60, 0.5) 360deg
          )`
        }}
      />

      {/* Canvas Layer for flying streaks of light */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full mix-blend-screen opacity-90" />

      {/* Dark vignette to focus intensity in the center and darken edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#030303_100%)]" />

      {/* Central Star Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] min-w-[400px] min-h-[400px] bg-white opacity-[0.15] blur-[80px] rounded-full mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[4px] h-[4px] min-w-[20px] min-h-[20px] bg-white blur-[2px] rounded-full shadow-[0_0_80px_20px_white] mix-blend-screen" />
    </div>
  );
}
