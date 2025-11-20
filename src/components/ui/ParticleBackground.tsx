import React, { useEffect, useRef } from 'react';

interface ParticleConfig {
    particleColor: string;
    lineColor: string;
    particleAmount: number;
    defaultSpeed: number;
    variantSpeed: number;
    linkRadius: number;
}

const config: ParticleConfig = {
    particleColor: 'rgba(180, 190, 254, 0.7)', // Catppuccin Lavender
    lineColor: 'rgba(180, 190, 254, 0.3)',
    particleAmount: 40, // Initial amount, density adjusted by screen size
    defaultSpeed: 0.5,
    variantSpeed: 0.5,
    linkRadius: 150,
};

class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    canvasWidth: number;
    canvasHeight: number;

    constructor(w: number, h: number) {
        this.canvasWidth = w;
        this.canvasHeight = h;
        this.size = Math.random() * 2 + 1;

        // Randomize spawn edge: 0=top, 1=right, 2=bottom, 3=left
        const edge = Math.floor(Math.random() * 4);

        if (edge === 0) { // Top
            this.x = Math.random() * w;
            this.y = -10;
            this.vy = Math.random() * config.variantSpeed + config.defaultSpeed;
            this.vx = (Math.random() - 0.5) * config.variantSpeed;
        } else if (edge === 1) { // Right
            this.x = w + 10;
            this.y = Math.random() * h;
            this.vx = -(Math.random() * config.variantSpeed + config.defaultSpeed);
            this.vy = (Math.random() - 0.5) * config.variantSpeed;
        } else if (edge === 2) { // Bottom
            this.x = Math.random() * w;
            this.y = h + 10;
            this.vy = -(Math.random() * config.variantSpeed + config.defaultSpeed);
            this.vx = (Math.random() - 0.5) * config.variantSpeed;
        } else { // Left
            this.x = -10;
            this.y = Math.random() * h;
            this.vx = Math.random() * config.variantSpeed + config.defaultSpeed;
            this.vy = (Math.random() - 0.5) * config.variantSpeed;
        }
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
    }

    isOffScreen(): boolean {
        return (
            this.x < -50 ||
            this.x > this.canvasWidth + 50 ||
            this.y < -50 ||
            this.y > this.canvasHeight + 50
        );
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = config.particleColor;
        ctx.fill();
    }
}

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let w = window.innerWidth;
        let h = window.innerHeight;

        const resize = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w;
            canvas.height = h;
        };

        const init = () => {
            resize();
            // Pre-populate some particles so it's not empty at start
            for (let i = 0; i < config.particleAmount; i++) {
                const p = new Particle(w, h);
                // Randomize position inside for initial set
                p.x = Math.random() * w;
                p.y = Math.random() * h;
                particles.push(p);
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            // Update and draw particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.update();
                p.draw(ctx);

                // Remove off-screen particles
                if (p.isOffScreen()) {
                    particles.splice(i, 1);
                }
            }

            // Maintain particle count
            if (particles.length < config.particleAmount) {
                particles.push(new Particle(w, h));
            }

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < config.linkRadius) {
                        ctx.beginPath();
                        ctx.strokeStyle = config.lineColor;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    );
};

export default ParticleBackground;
