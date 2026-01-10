import React from 'react';
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiWordpress, SiFigma, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';

const TECH_STACK = [
  { name: 'React', icon: <FaReact />, color: 'text-sky-400', bg: 'bg-sky-400/5' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500', bg: 'bg-green-500/5' },
  { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400', bg: 'bg-yellow-400/5' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600', bg: 'bg-green-600/5' },
  { name: 'Express', icon: <SiExpress />, color: 'text-zinc-100', bg: 'bg-zinc-100/5' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-teal-400', bg: 'bg-teal-400/5' },
  { name: 'Firebase', icon: <SiFirebase />, color: 'text-orange-500', bg: 'bg-orange-500/5' },
  { name: 'WordPress', icon: <SiWordpress />, color: 'text-blue-500', bg: 'bg-blue-500/5' },
  { name: 'Figma', icon: <SiFigma />, color: 'text-pink-500', bg: 'bg-pink-500/5' },
  { name: 'Photoshop', icon: <SiAdobephotoshop />, color: 'text-blue-600', bg: 'bg-blue-600/5' },
  { name: 'Illustrator', icon: <SiAdobeillustrator />, color: 'text-orange-600', bg: 'bg-orange-600/5' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500', bg: 'bg-red-500/5' },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-24 bg-[#09090b] relative overflow-hidden border-t border-zinc-900">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-500 mb-4">Stack & Tools</h4>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6 leading-tight">
              Technical <span className="text-zinc-500 italic font-light">Arsenal.</span>
            </h2>
            <p className="text-zinc-500 text-lg font-light leading-relaxed">
              A specialized toolkit spanning IT infrastructure management, 
              full-stack development, and high-fidelity design.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative p-8 ${tech.bg} border border-zinc-800/50 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-zinc-600 transition-all duration-300 shadow-sm`}
            >
              {/* Subtle Glow Overlay (always present, intensifies on hover) */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors rounded-xl" />

              <div className={`text-4xl ${tech.color} transition-all duration-500 transform group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]`}>
                {tech.icon}
              </div>
              
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-100 transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;