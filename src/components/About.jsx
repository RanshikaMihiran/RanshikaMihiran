import React from "react";
import { motion } from "framer-motion";
import { FiCommand, FiGlobe, FiCpu, FiShield } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="relative bg-[#09090b] py-32 overflow-hidden border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Summary & Title (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-500 mb-4">Professional Profile</h4>
              <h2 className="text-5xl md:text-6xl font-medium text-white tracking-tighter leading-[1.1]">
                Bridging <br />
                <span className="text-zinc-500 italic font-light">Infrastructure</span> <br />
                & Development.
              </h2>
            </motion.div>
            
            <div className="pt-8 flex flex-col gap-4">
              <div className="flex items-center gap-4 group">
                <div className="h-12 w-12 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-500 group-hover:border-blue-500/50 transition-colors">
                  <FiCommand size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono">Current Role</p>
                  <p className="text-zinc-200 font-medium">Junior Executive IT @ Hemas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Bio & Core Expertise (Span 7) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-xl">
              <p>
                Currently serving as a <span className="text-white font-medium underline decoration-blue-500/30 underline-offset-8">Junior Executive in IT</span> at Hemas Consumer Brands, I manage complex IT ecosystems while leveraging my background in full-stack development.
              </p>
              <p className="text-lg">
                My journey began in 2022 as a freelance developer, where I specialized in WordPress ecosystems and site optimization. This evolved into deep expertise in front-end performance, network infrastructure, and system efficiency during my tenures at Ministry of Plantation and Visionary Design Vanguard.
              </p>
            </div>

            {/* Expertise Grid - Static Colors, No Effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-zinc-900">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-blue-400">
                  <FiGlobe size={18} />
                  <h5 className="font-mono text-xs uppercase tracking-widest">Web Ecosystems</h5>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Advanced WordPress & Divi development, Elementor mastery, and end-to-end domain/hosting management.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-blue-400">
                  <FiCpu size={18} />
                  <h5 className="font-mono text-xs uppercase tracking-widest">IT Infrastructure</h5>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Proficient in network servers, telecom troubleshooting, and PC hardware/software lifecycle management.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-blue-400">
                  <FiShield size={18} />
                  <h5 className="font-mono text-xs uppercase tracking-widest">Operations</h5>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Focused on security measures, system efficiency, and delivering high-level technical user support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;