'use client';

import { useEffect, useRef } from 'react';

export default function PipelineBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Floating cloud/nebula orbs
    const orbs = Array.from({ length: 5 }, () => ({
      x: Math.random() * 1.2 - 0.1,
      y: Math.random() * 1.2 - 0.1,
      radius: 0.15 + Math.random() * 0.25,
      speedX: (Math.random() - 0.5) * 0.0003,
      speedY: (Math.random() - 0.5) * 0.0003,
      hue: Math.random() > 0.5 ? 185 : 260, // cyan or purple
      saturation: 70 + Math.random() * 30,
    }));

    // Small floating particles
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: 0.5 + Math.random() * 1.5,
      speedY: -(0.0001 + Math.random() * 0.0004),
      speedX: (Math.random() - 0.5) * 0.0002,
      opacity: 0.2 + Math.random() * 0.5,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02,
      hue: 170 + Math.random() * 100, // cyan to purple range
    }));

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      time += 1;

      // Deep space background
      ctx.fillStyle = '#050510';
      ctx.fillRect(0, 0, w, h);

      // Draw nebula orbs with soft radial gradients
      orbs.forEach((orb) => {
        orb.x += orb.speedX + Math.sin(time * 0.002 + orb.hue) * 0.0001;
        orb.y += orb.speedY + Math.cos(time * 0.0015 + orb.hue) * 0.0001;

        // Wrap around
        if (orb.x < -0.3) orb.x = 1.3;
        if (orb.x > 1.3) orb.x = -0.3;
        if (orb.y < -0.3) orb.y = 1.3;
        if (orb.y > 1.3) orb.y = -0.3;

        const cx = orb.x * w;
        const cy = orb.y * h;
        const r = orb.radius * Math.max(w, h);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        const alpha = 0.06 + Math.sin(time * 0.005 + orb.hue) * 0.02;
        grad.addColorStop(0, `hsla(${orb.hue}, ${orb.saturation}%, 60%, ${alpha})`);
        grad.addColorStop(0.5, `hsla(${orb.hue}, ${orb.saturation}%, 40%, ${alpha * 0.4})`);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
      });

      // Aurora wave bands
      for (let band = 0; band < 3; band++) {
        ctx.beginPath();
        const baseY = h * (0.3 + band * 0.2);
        const bandHue = band === 0 ? 185 : band === 1 ? 220 : 270;

        for (let x = 0; x <= w; x += 3) {
          const wave1 = Math.sin(x * 0.002 + time * 0.008 + band * 2) * 40;
          const wave2 = Math.sin(x * 0.005 + time * 0.005 + band) * 20;
          const wave3 = Math.cos(x * 0.001 + time * 0.003) * 30;
          const y = baseY + wave1 + wave2 + wave3;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `hsla(${bandHue}, 80%, 60%, 0.04)`;
        ctx.lineWidth = 60 + Math.sin(time * 0.01 + band) * 20;
        ctx.stroke();

        // Thinner bright core
        ctx.strokeStyle = `hsla(${bandHue}, 90%, 70%, 0.06)`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Subtle grid lines
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.015)';
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Floating particles
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulse += p.pulseSpeed;

        if (p.y < -0.05) { p.y = 1.05; p.x = Math.random(); }
        if (p.x < -0.05) p.x = 1.05;
        if (p.x > 1.05) p.x = -0.05;

        const px = p.x * w;
        const py = p.y * h;
        const currentOpacity = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));
        const size = p.size * (0.8 + 0.2 * Math.sin(p.pulse * 0.7));

        // Glow
        const glow = ctx.createRadialGradient(px, py, 0, px, py, size * 4);
        glow.addColorStop(0, `hsla(${p.hue}, 80%, 70%, ${currentOpacity * 0.3})`);
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.fillRect(px - size * 4, py - size * 4, size * 8, size * 8);

        // Core
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 80%, ${currentOpacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
