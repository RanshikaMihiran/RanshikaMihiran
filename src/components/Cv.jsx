import React from "react";
import { motion } from "framer-motion";
import { FiDownloadCloud, FiFileText, FiCheckCircle } from "react-icons/fi";
import cvFile from "../assets/Ranshika Mihiran CV Resume.pdf";

const CVSection = () => {
  return (
    <section className="bg-[#09090b] py-20 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-zinc-900/30 border border-zinc-800 p-8 md:p-12 rounded-sm overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text & Info */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-blue-500 mb-2 font-mono">Credentials</h4>
                <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
                  Curriculum <span className="text-zinc-500 italic font-light">Vitae</span>
                </h2>
              </div>
              
              <p className="text-zinc-400 font-light leading-relaxed">
                A comprehensive overview of my technical expertise, academic background, 
                and professional journey as a software developer.
              </p>

              <ul className="grid grid-cols-2 gap-3 text-xs text-zinc-500 font-mono uppercase tracking-widest">
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-blue-500" /> Technical Skills
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-blue-500" /> Project History
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-blue-500" /> Certifications
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-blue-500" /> Leadership
                </li>
              </ul>
            </div>

            {/* Right: Download Action */}
            <div className="flex justify-center lg:justify-end">
              <a
                href={cvFile}
                download="Ranshika_Mihiran_CV.pdf"
                className="group relative flex flex-col items-center gap-4 p-10 border border-dashed border-zinc-700 hover:border-blue-500 transition-colors duration-500 bg-zinc-900/50 rounded-sm"
              >
                <div className="p-5 bg-zinc-800 rounded-full text-zinc-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <FiDownloadCloud size={32} />
                </div>
                <div className="text-center">
                  <span className="block text-white font-bold uppercase tracking-widest text-sm">Download PDF</span>
                  <span className="text-[10px] text-zinc-500 uppercase font-mono mt-1">Ready for Print</span>
                </div>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CVSection;