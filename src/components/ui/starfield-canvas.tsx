"use client";

import React, { useEffect, useRef } from 'react';

interface StarfieldCanvasProps {
  className?: string;
}

// Starfield Canvas Component with brand blue tint
const StarfieldCanvas: React.FC<StarfieldCanvasProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let stars: Star[] = [];
    const numStars = 600;
    let speed = 1.5;

    // Brand blue colors for stars
    const starColors = [
      { r: 8, g: 145, b: 217 },    // #0891D9 - primary
      { r: 56, g: 182, b: 255 },   // #38B6FF - light
      { r: 6, g: 182, b: 212 },    // #06B6D4 - cyan accent
      { r: 125, g: 211, b: 252 },  // #7dd3fc - very light
      { r: 255, g: 255, b: 255 },  // white for variety
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Star {
      x: number;
      y: number;
      z: number;
      pz: number;
      color: { r: number; g: number; b: number };

      constructor() {
        this.x = Math.random() * canvas.width - canvas.width / 2;
        this.y = Math.random() * canvas.height - canvas.height / 2;
        this.z = Math.random() * canvas.width;
        this.pz = this.z;
        this.color = starColors[Math.floor(Math.random() * starColors.length)];
      }

      update() {
        this.z = this.z - speed;
        if (this.z < 1) {
          this.z = canvas.width;
          this.x = Math.random() * canvas.width - canvas.width / 2;
          this.y = Math.random() * canvas.height - canvas.height / 2;
          this.pz = this.z;
          this.color = starColors[Math.floor(Math.random() * starColors.length)];
        }
      }

      draw() {
        const sx = (this.x / this.z) * canvas.width / 2 + canvas.width / 2;
        const sy = (this.y / this.z) * canvas.height / 2 + canvas.height / 2;

        const r = Math.max(0.1, (1 - this.z / canvas.width) * 2);

        const px = (this.x / this.pz) * canvas.width / 2 + canvas.width / 2;
        const py = (this.y / this.pz) * canvas.height / 2 + canvas.height / 2;

        this.pz = this.z;

        const alpha = 1 - this.z / canvas.width;

        ctx!.beginPath();
        ctx!.moveTo(px, py);
        ctx!.lineTo(sx, sy);
        ctx!.lineWidth = r * 2;
        ctx!.strokeStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`;
        ctx!.stroke();
      }
    }

    const init = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const dist = Math.abs(event.clientX - centerX);
      const maxDist = window.innerWidth / 2;
      speed = 1.5 + (1 - dist / maxDist) * 8;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
    />
  );
};

export default StarfieldCanvas;
