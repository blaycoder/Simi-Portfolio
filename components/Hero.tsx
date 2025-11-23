import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-label", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.5")
      .from(".hero-desc", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")
      .from(".hero-btn", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.5")
      .from(".hero-image", {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=1.0");

    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={comp}
      className="relative min-h-screen flex items-center justify-center bg-background pt-12 lg:pt-20 pb-12 overflow-hidden"
    >
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* <div className="hero-label inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-accent text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">
              Available for work
            </div> */}

            <h1 className="hero-title font-heading text-2xl md:text-4xl lg:text-4xl xl:text-6xl font-extrabold text-secondary mb-6 leading-[1.1] tracking-tight">
              <span className="block">SIMILEOLUWA</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                AJISAFE
              </span>
            </h1>

            <h2 className="hero-title font-heading text-xl md:text-2xl text-muted mb-8 font-light uppercase tracking-wide">
              {PERSONAL_INFO.role}
            </h2>

            <p className="hero-desc text-lg text-slate-400 mb-10 max-w-xl leading-relaxed font-light">
              Bridging the gap between complex data management and modern web
              experiences. Combining analytical skills with creative technical
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#experience"
                className="hero-btn group inline-flex items-center justify-center px-8 py-4 text-base font-bold font-heading rounded-full text-white bg-primary hover:bg-primaryDark transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
              >
                View Experience
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="hero-btn inline-flex items-center justify-center px-8 py-4 text-base font-bold font-heading rounded-full text-secondary bg-transparent border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all"
              >
                Contact Me
                <FileText className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="hero-image order-1 lg:order-2 flex justify-center lg:justify-end relative">
            {/* Decorative circle behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-white/5 rounded-full blur-3xl -z-10"></div>

            <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[450px] lg:h-[550px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>

              <img
                src="./images/simi.jpeg"
                alt="Simileoluwa Ajisafe"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform hover:scale-105"
              />

              <div className="absolute bottom-10 left-5 bg-surface p-4 rounded-xl border border-white/10 shadow-xl md:block animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-bold text-slate-300">
                    Open to work
                  </span>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;