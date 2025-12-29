
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-[#030014] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            CAREER PATH
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Professional Experience
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1.5 bg-[#D4AF37] rounded-full"
          />
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-12 pl-8 md:pl-16 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[73px] top-0 w-6 h-6 rounded-full bg-[#030014] border-2 border-[#D4AF37] z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              </div>

              <div className="p-8 rounded-[32px] glass border border-white/5 hover:border-[#D4AF37]/20 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-5 h-5 text-[#D4AF37]" />
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                        {exp.role}
                      </h3>
                    </div>
                    <div className="text-[#D4AF37] font-medium tracking-wide uppercase text-sm">
                      {exp.company}
                    </div>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-400 whitespace-nowrap h-fit">
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {exp.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-3 text-slate-400 text-sm leading-relaxed font-light">
                      <span className="text-[#D4AF37] mt-1.5">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
