import React, { useEffect, useRef } from 'react';

export default function OrganicNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates with smoothing
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create 15-18 curated organic points (Ecosystem of Ideas)
    const nodeCount = 16;
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        baseX: (0.12 + Math.random() * 0.76) * width,
        baseY: (0.12 + Math.random() * 0.76) * height,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        // Harmonic frequencies for natural floating drift
        freqX: 0.0006 + Math.random() * 0.0008,
        freqY: 0.0005 + Math.random() * 0.0007,
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        radius: 1.8 + Math.random() * 1.4,
        maxDrift: 45 + Math.random() * 35,
      });
    }

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Update node positions with harmonic drift + subtle cursor reaction
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const driftX = Math.sin(time * n.freqX + n.phaseX) * n.maxDrift;
        const driftY = Math.cos(time * n.freqY + n.phaseY) * n.maxDrift;

        const targetX = n.baseX + driftX;
        const targetY = n.baseY + driftY;

        // Subtle mouse repulsion / attraction
        const dx = targetX - mouse.x;
        const dy = targetY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let mouseInfluenceX = 0;
        let mouseInfluenceY = 0;

        if (dist < 260) {
          const force = (1 - dist / 260) * 22;
          mouseInfluenceX = (dx / dist) * force;
          mouseInfluenceY = (dy / dist) * force;
        }

        n.x = targetX + mouseInfluenceX;
        n.y = targetY + mouseInfluenceY;
      }

      // Draw subtle organic curved connector lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect points within organic threshold
          if (dist < width * 0.38) {
            const alpha = (1 - dist / (width * 0.38)) * 0.16;

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);

            // Subtle curved line using mid-point control
            const midX = (n1.x + n2.x) / 2;
            const midY = (n1.y + n2.y) / 2;
            const curveOffset = Math.sin(time * 0.001 + i) * 18;

            ctx.quadraticCurveTo(midX + curveOffset, midY - curveOffset, n2.x, n2.y);
            ctx.strokeStyle = `rgba(143, 216, 184, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // Draw soft points
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(199, 232, 215, 0.45)';
        ctx.fill();

        // Subtle outer aura
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(143, 216, 184, 0.04)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}
