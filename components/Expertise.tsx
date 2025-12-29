
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, ShieldCheck, Zap, Users, BookOpen } from 'lucide-react';

const EXPERTISE_DATA = [
  {
    title: 'Full Stack Development',
    description: 'Building scalable web applications with React, Next.js, Node.js, and modern web technologies for production environments.',
    icon: Code2
  },
  {
    title: 'AI & Machine Learning',
    description: 'Developing AI-powered solutions using LLMs, TensorFlow, Scikit-learn, and prompt engineering for intelligent applications.',
    icon: Lightbulb
  },
  {
    title: 'Database Design',
    description: 'Designing and managing databases with MongoDB, Firebase, and PostgreSQL for optimal data storage and retrieval.',
    icon: ShieldCheck
  },
  {
    title: 'DevOps & Deployment',
    description: 'Deploying applications on Vercel, Render, Netlify, and AWS with Git workflows and CI/CD integration.',
    icon: Zap
  },
  {
    title: 'Responsive Design',
    description: 'Creating beautiful, responsive UIs with Tailwind CSS and modern design principles for all device sizes.',
    icon: Users
  },
  {
    title: 'Problem Solving',
    description: 'Solving complex technical challenges with innovative approaches and a focus on clean, maintainable code.',
    icon: BookOpen
  }
];

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 px-4 bg-[#030014]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            SPECIALIZATIONS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Core Expertise
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
          {EXPERTISE_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-8 rounded-[32px] glass border border-white/5 hover:border-[#D4AF37]/30 transition-all flex flex-col group"
            >
              <div className="mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform origin-left">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
