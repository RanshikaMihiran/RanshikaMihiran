import React from "react";
import { motion } from "framer-motion";

const EDUCATION_DATA = [
  {
    title: "BSc (Hons) in Information Technology",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    duration: "2021 - Present",
    description: "Specializing in Information Technology, focusing on software engineering, cloud computing, and system design.",
  },
  {
    title: "G.C.E. Advanced Level",
    institution: "Mayurapada Central College",
    duration: "2019",
    description: "Completed secondary education with a focus on physical science stream.",
  },
  {
    title: "G.C.E. Ordinary Level",
    institution: "Mayurapada Central College",
    duration: "2016",
    description: "Successfully completed with distinctions in key subjects.",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-[#09090b] py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
            Academic <span className="text-zinc-500 italic font-light">Background</span>
          </h2>
          <div className="h-[1px] w-12 bg-blue-500"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-800 ml-3">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 ml-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1.5">
                <div className="h-4 w-4 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500 mb-2">
                  {item.duration}
                </span>
                
                <h3 className="text-2xl font-medium text-zinc-100 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-lg text-zinc-400 font-light">
                  {item.institution}
                </p>
                
                {item.description && (
                  <p className="mt-3 text-sm text-zinc-500 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;