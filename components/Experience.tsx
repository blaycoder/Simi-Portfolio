import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">Journey</h2>
          <p className="text-muted">My professional path and academic background.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-10">
              <div className="p-3 bg-primary/10 rounded-xl mr-4">
                <Briefcase className="text-primary h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-secondary">Experience</h3>
            </div>
            
            <div className="space-y-12 border-l border-white/10 ml-4 pl-8 relative">
              {EXPERIENCE.map((job) => (
                <div key={job.id} className="relative group">
                  <span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-surface border-2 border-primary group-hover:scale-125 transition-transform duration-300"></span>
                  <div className="mb-2">
                    <h4 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{job.role}</h4>
                    <div className="flex justify-between items-center flex-wrap gap-2 mt-1">
                      <span className="text-slate-300 font-medium">{job.company}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted bg-surface px-2 py-1 rounded">{job.period}</span>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed relative pl-4">
                        <span className="absolute left-0 top-2 w-1 h-1 bg-white/20 rounded-full"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-10">
              <div className="p-3 bg-accent/10 rounded-xl mr-4">
                <GraduationCap className="text-accent h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-secondary">Education</h3>
            </div>

            <div className="space-y-12 border-l border-white/10 ml-4 pl-8 relative">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="relative group">
                   <span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-surface border-2 border-accent group-hover:scale-125 transition-transform duration-300"></span>
                  <h4 className="text-xl font-bold text-secondary group-hover:text-accent transition-colors">{edu.degree}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1 mb-3">
                    <p className="text-slate-300 font-medium">{edu.institution}</p>
                    <span className="hidden sm:block text-white/20">•</span>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted bg-surface px-2 py-1 rounded w-fit">{edu.year}</p>
                  </div>
                  {edu.details && <p className="text-slate-400 text-sm">{edu.details}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;