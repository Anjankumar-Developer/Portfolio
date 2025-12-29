
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Categories = [
  'Languages', 
  'Frontend',
  'Backend',
  'AI / ML', 
  'Mobile Development', 
  'Tools', 
  'Databases', 
  'UI/UX & Design'
] as const;

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-[#030014]/80 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            VERSATILITY
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Technical Arsenal
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1.5 bg-[#D4AF37] rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Categories.map((category, idx) => {
            const categorySkills = SKILLS.filter(s => s.category === category);
            if (categorySkills.length === 0) return null;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-8 rounded-[40px] glass border border-white/5 hover:border-[#D4AF37]/20 transition-all group h-fit"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ 
                        y: -2,
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        borderColor: 'rgba(212, 175, 55, 0.4)'
                      }}
                      className="px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] text-slate-300 text-xs font-medium transition-all"
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
