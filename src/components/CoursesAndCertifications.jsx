import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";

const CERTIFICATES = [
  { title: "AWS Academy Cloud Foundations", issuer: "AWS", category: "Cloud" },
  { title: "Network Addressing & Troubleshooting", issuer: "Cisco", category: "Networking" },
  { title: "Introduction to IoT", issuer: "Cisco", category: "IoT" },
  { title: "Python Essentials", issuer: "Cisco", category: "Development" },
  { title: "Selenium WebDriver", issuer: "Alison", category: "Testing" },
  { title: "Herman Loos Certificate", issuer: "Cadet", category: "Leadership" },
];

const CoursesAndCertifications = () => {
  return (
    <section id="certifications" className="bg-[#09090b] py-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 italic">
              Professional <span className="text-zinc-500 font-light not-italic">Certifications</span>
            </h2>
            <div className="h-[1px] w-12 bg-blue-500"></div>
          </div>
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-[0.3em]">Verified Credentials</p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-zinc-900/50 border border-zinc-800 p-8 rounded-sm hover:border-zinc-500 transition-all duration-500 flex flex-col justify-between min-h-[180px]"
            >
              {/* Top Row: Icon & Category */}
              <div className="flex justify-between items-start">
                <div className="p-2 bg-zinc-800 rounded-sm text-zinc-400 group-hover:text-blue-400 transition-colors">
                  <FiAward size={20} />
                </div>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest group-hover:text-zinc-400 transition-colors">
                  {cert.category}
                </span>
              </div>

              {/* Middle: Title */}
              <div className="mt-4">
                <h3 className="text-xl font-medium text-zinc-200 leading-tight group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
              </div>

              {/* Bottom: Issuer */}
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-light text-zinc-500 italic">
                  Issued by {cert.issuer}
                </p>
                <FiExternalLink className="text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Modern Hover Glow Overlay */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesAndCertifications;