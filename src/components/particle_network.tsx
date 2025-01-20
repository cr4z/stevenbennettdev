import { useEffect, useRef } from "react";
import { Box } from "@mui/material";

class Particle {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  particleColor: string;
  radius: number;
  opacity: number;
  x: number;
  y: number;
  velocity: { x: number; y: number };

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, x?: number, y?: number) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.particleColor = "#aaa";
    this.radius = Math.random() * (2.5 - 1.5) + 1.5;
    this.opacity = 0;
    this.x = x || Math.random() * this.canvas.width;
    this.y = y || Math.random() * this.canvas.height;
    this.velocity = {
      x: (Math.random() - 0.5) * 1,
      y: (Math.random() - 0.5) * 1,
    };
  }

  update() {
    if (this.opacity < 1) {
      this.opacity += 0.01;
    } else {
      this.opacity = 1;
    }

    if (this.x > this.canvas.width + 100 || this.x < -100) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y > this.canvas.height + 100 || this.y < -100) {
      this.velocity.y = -this.velocity.y;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.particleColor;
    this.ctx.globalAlpha = this.opacity;
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}

function ParticleNetwork(props: { height: string }) {
  const { height } = props;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const createParticles = () => {
      const density = 15000;
      const quantity = (canvas.width * canvas.height) / density;
      particles.current = [];
      for (let i = 0; i < quantity; i++) {
        particles.current.push(new Particle(canvas, ctx));
      }
    };

    const drawConnections = () => {
      const distanceThreshold = 250;
      particles.current.forEach((particle, index) => {
        for (let i = index + 1; i < particles.current.length; i++) {
          const otherParticle = particles.current[i];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < distanceThreshold) {
            const alpha = 1 - distance / distanceThreshold;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(146, 146, 146, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });
    };

    let animationFrameId: number = 0;
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      drawConnections();
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    createParticles();
    drawParticles();

    return () => {
      particles.current = [];
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height,
        "::before": {
          zIndex: -2,
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1450849608880-6f787542c88a?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          opacity: 0.2,
        },
      }}
    >
      {/* <Glow sx={glowStyles.glow1} />
      <Glow sx={glowStyles.glow2} />
      <Glow sx={glowStyles.glow3} /> */}
      <canvas ref={canvasRef} style={{ width: "300rem", height }} />
    </Box>
  );
}

export default ParticleNetwork;

const globalStyles = `
@keyframes glow-1-move {
  from {
    transform: translate(-100%, 100%);
  }
  to {
    transform: translate(100%, -100%);
  }
}

@keyframes glow-2-move {
  from {
    transform: translate(-100%, 0%);
  }
  to {
    transform: translate(100%, 100%);
  }
}

@keyframes glow-3-move {
  from {
    transform: translate(100%, 100%);
  }
  to {
    transform: translate(0%, -100%);
  }
}`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);
