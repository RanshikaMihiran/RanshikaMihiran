import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const EXPERIENCE_DATA = [
  {
    company: "Hemas Consumer Brands",
    role: "Junior Executive IT",
    duration: "Oct 2025 - Present",
    location: "Colombo, Sri Lanka",
    description: [
      "Orchestrating enterprise IT infrastructure and digital transformation initiatives.",
      "Optimizing system workflows and ensuring high-availability server operations.",
      "Leading technical support and hardware lifecycle management for consumer-scale operations."
    ]
  },
  {
    company: "Visionary Design Vanguard",
    role: "Junior Web Developer",
    duration: "Jan 2025 - May 2025",
    location: "Remote / Colombo",
    description: [
      "Engineered high-performance web platforms using WordPress and Divi frameworks.",
      "Focused on mobile-first optimization and cross-platform brand consistency.",
      "Improved SEO rankings by 40% through metadata optimization and structural audits."
    ]
  },
  {
    company: "Ministry of Plantation",
    role: "IT & Web Development Intern",
    duration: "May 2024 - Nov 2024",
    location: "Colombo, Sri Lanka",
    description: [
      "Customized WordPress solutions with a focus on institutional security and scalability.",
      "Managed enterprise network servers and telecom infrastructure troubleshooting.",
      "Assisted in server-side performance tuning and security protocol implementation."
    ]
  },
  {
    company: "Freelance",
    role: "Full-Stack Web Developer",
    duration: "2021 - Present",
    location: "Remote",
    description: [
      "Delivering custom WordPress ecosystems using Elementor and clean architecture.",
      "Managing end-to-end cloud hosting, SSL security, and performance scaling.",
      "Specializing in local SEO and conversion-focused UI design for SMEs."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#09090b] py-32 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-500 mb-4">Career Journey</h4>
            <h2 className="text-4xl md:text-7xl font-medium tracking-tighter text-white leading-tight">
              Professional <br />
              <span className="text-zinc-500 italic font-light">History.</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest max-w-[200px] leading-relaxed">
            A chronological timeline of technical leadership and development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-900/50 ml-4 md:ml-0">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // Moving 'group' to the top-level motion div so the whole block triggers effects
              className="group mb-20 last:mb-0 relative pl-12"
            >
              {/* Timeline Indicator Node */}
              {/* Fixed: Line now highlights on group hover */}
              <div className="absolute -left-[1px] top-2 h-[40px] w-[1px] bg-zinc-800 group-hover:bg-blue-600 transition-colors duration-500" />
              <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-zinc-800 bg-[#09090b] group-hover:border-blue-500 group-hover:scale-125 transition-all duration-300" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Role & Company (Span 8) */}
                <div className="lg:col-span-8">
                  <div className="flex flex-col mb-6">
                    <h3 className="text-2xl md:text-3xl font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-lg text-zinc-500 font-light italic">
                        {exp.company}
                      </p>
                      <FiArrowUpRight className="text-zinc-800 group-hover:text-blue-500 transition-colors transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
                    </div>
                  </div>

                  <ul className="space-y-4 max-w-2xl">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="text-zinc-500 text-sm font-light leading-relaxed flex gap-4">
                        {/* Custom Bullet Line */}
                        <span className="text-zinc-800 mt-2.5 h-[1px] w-4 flex-shrink-0 bg-zinc-800 group-hover:bg-zinc-700 transition-colors" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration & Location (Span 4) */}
                <div className="lg:col-span-4 lg:text-right order-first lg:order-last mb-4 lg:mb-0">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-500/80 mb-1">
                    {exp.duration}
                  </p>
                  <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    {exp.location}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;