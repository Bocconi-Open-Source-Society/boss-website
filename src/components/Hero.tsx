import { Github, Users, Code2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const elements = heroRef.current.querySelectorAll('.parallax-slow');
      const fastElements = heroRef.current.querySelectorAll('.parallax-fast');
      
      elements.forEach((el) => {
        (el as HTMLElement).style.transform = `translateY(${scrolled * 0.3}px)`;
      });
      
      fastElements.forEach((el) => {
        (el as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3D tilt effect for stat cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };
  const stats = [
    { icon: Users, label: "Active Members", value: "10" },
    { icon: Code2, label: "Projects", value: "2" },
    { icon: Github, label: "Contributions", value: "0" },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-slow absolute top-1/4 -left-20 w-96 h-96 bg-ctp-lavender/10 rounded-full blur-3xl animate-pulse-slow transition-transform duration-1000 ease-out" />
        <div className="parallax-fast absolute bottom-1/4 -right-20 w-96 h-96 bg-ctp-sapphire/10 rounded-full blur-3xl animate-pulse-slow delay-1000 transition-transform duration-1000 ease-out" />
        <div className="parallax-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ctp-mauve/5 rounded-full blur-3xl transition-transform duration-1000 ease-out" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* 1. Title */}
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight scroll-fade-in" style={{ animationDelay: '0.1s' }}>
          Bocconi Open Source Society
        </h1>

        {/* 2. Short Description */}
        <p className="text-xl md:text-2xl text-ctp-subtext0 w-full mx-auto mb-4 leading-relaxed scroll-fade-in" style={{ animationDelay: '0.3s' }}>
          Students building, learning, and sharing open source at Bocconi University.
        </p>

        {/* 3. Mission (lower level) */}
        <p className="text-base md:text-lg text-ctp-subtext1 leading-relaxed scroll-fade-in w-full mx-auto mb-8" style={{ animationDelay: '0.36s' }}>
          Our mission is to achieve{' '}
          <span className="font-bold bg-gradient-to-r from-ctp-lavender to-ctp-mauve bg-clip-text text-transparent">
            n PRs
          </span>{' '}
          merged into open-source projects for the{' '}
          <span className="font-bold bg-gradient-to-r from-ctp-lavender to-ctp-mauve bg-clip-text text-transparent">
            n-th semester
          </span>{' '}
          since our inception.
        </p>

        <button
          onClick={() => navigate('/contact')}
          className="scroll-fade-in mb-20 px-8 py-4 rounded-2xl bg-gradient-to-r from-ctp-lavender to-ctp-mauve text-ctp-base font-bold text-lg hover:shadow-glow hover:scale-105 transition-all duration-500 hover:-translate-y-1"
          style={{ animationDelay: '0.4s' }}
        >
          Join Our Community
        </button>

        {/* Stats with 3D tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group scroll-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ctp-lavender/20 to-ctp-mauve/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative glass-panel-3d p-8 rounded-3xl hover:border-ctp-lavender/50 transition-all duration-500 shadow-elevated hover:shadow-glow light-reflection overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ctp-lavender/30 to-ctp-mauve/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <stat.icon className="w-7 h-7 text-ctp-lavender" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-ctp-subtext0 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
