
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const SOCIAL_LINKS = [
  { name: 'GitHub', icon: Github, href: 'https://github.com', color: '#D4AF37' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: '#D4AF37' },
  { name: 'Get in Touch', icon: Mail, href: 'mailto:sai@tanneeru.dev', color: '#D4AF37' },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden bg-[#030014]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B8860B]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm uppercase tracking-[0.4em] mb-4 block font-bold"
          >
            CONNECT WITH ME
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white leading-tight"
          >
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8860B] italic">legendary</span>.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Reach out through any of the channels below.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SOCIAL_LINKS.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name === 'Get in Touch' ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="flex flex-col items-center justify-center p-10 rounded-[48px] glass border border-white/5 hover:border-[#D4AF37]/40 group transition-all duration-500 relative"
            >
              <div className="p-6 rounded-3xl bg-white/5 group-hover:bg-[#D4AF37]/10 text-[#D4AF37] mb-8 transition-all duration-500 group-hover:scale-110 shadow-inner">
                <link.icon className="w-10 h-10" />
              </div>
              
              <span className="text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-6 text-center tracking-tight">
                {link.name}
              </span>

              {/* Action Button */}
              <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-black text-slate-400 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300">
                Visit <ExternalLink className="w-3.5 h-3.5" />
              </div>

              {/* Decorative light reflection on hover */}
              <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
