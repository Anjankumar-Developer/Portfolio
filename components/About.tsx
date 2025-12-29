
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, FileText } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Projects Built', value: '25+', icon: Code2 },
    { label: 'Hackathons', value: '10', icon: Zap },
    { label: 'Research Paper', value: '1', icon: FileText },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-[#030014] overflow-hidden border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-[#D4AF37] text-sm uppercase tracking-widest mb-4 block"> About</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 tracking-tight text-white leading-tight">
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8860B]">Intelligence</span> in Digital Spaces.
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto mb-16">
            <p>
              As a visionary Full-Stack Developer and AI Engineer, I specialize in bridging the gap between sophisticated 
              machine learning models and high-performance, visually stunning user interfaces.
            </p>
            <p>
              My philosophy centers on <strong>immersive utility</strong>—creating digital experiences that are as beautiful 
              as they are functional. I leverage cutting-edge technologies like React, Next.js, and advanced AI orchestration 
              to build scalable products that solve real-world problems.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl text-left">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-6 md:p-8 rounded-[32px] glass border border-white/5 group hover:border-[#D4AF37]/30 transition-all flex flex-col items-start"
                >
                  <div className="p-3 rounded-xl bg-[#D4AF37]/5 mb-6 group-hover:bg-[#D4AF37]/10 transition-colors">
                    <stat.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-semibold tracking-wider text-slate-500 uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
