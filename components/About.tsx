import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PERSONAL_INFO } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="about-reveal font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">About Me</h2>
          <div className="about-reveal w-16 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="about-reveal bg-surface p-8 md:p-12 rounded-3xl border border-white/5 shadow-xl">
          <p className="text-xl text-slate-300 leading-relaxed mb-10 font-light text-center md:text-left">
            {PERSONAL_INFO.bio}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/5">
            <div className="flex flex-col text-center md:text-left">
              <span className="text-muted uppercase tracking-wider text-xs font-bold mb-2">Email</span>
              <span className="font-medium text-secondary break-words"><a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a></span>
            </div>
            <div className="flex flex-col text-center md:text-left">
              <span className="text-muted uppercase tracking-wider text-xs font-bold mb-2">Location</span>
              <span className="font-medium text-secondary">{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex flex-col text-center md:text-left">
              <span className="text-muted uppercase tracking-wider text-xs font-bold mb-2">Education</span>
              <span className="font-medium text-secondary">BSc. Pol. Sci.</span>
            </div>
            <div className="flex flex-col text-center md:text-left">
              <span className="text-muted uppercase tracking-wider text-xs font-bold mb-2">Availability</span>
              <span className="font-medium text-accent bg-accent/10 px-3 py-1 rounded-full inline-block w-fit mx-auto md:mx-0">Open to Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;