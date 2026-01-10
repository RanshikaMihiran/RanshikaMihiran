import React from 'react';
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";

// Ensure these paths are 100% correct in your folder structure
import kocofayImage from '../assets/projects/kocofay.png';
import MedocsImage from '../assets/projects/medocs.png';
import TeaMate from '../assets/projects/Teamate.jpg';
import HotelBooking from '../assets/projects/HotelBookig.png';
import WaterForAll from '../assets/projects/WaterForAll.png';
import SaftyUI from '../assets/projects/SaftyUI.png';
import leoaccess from '../assets/projects/leoaccess.png';
import eminentdesigner from '../assets/projects/eminentdesigner.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: eminentdesigner,
      title: 'Eminentdesigner',
      description: 'Developed a professional website for a Premium Aluminum Fabrication company in Sri Lanka. Built using WordPress and Elementor.',
      technologies: ['WordPress', 'Elementor', 'SEO'],
      link: 'https://Eminentdesigner.com/',
    },
    {
      id: 2,
      image: leoaccess,
      title: 'LeoAccess',
      description: 'A cleaning and technical services platform based in Dubai. Optimized for high performance and service-focused user experience.',
      technologies: ['WordPress', 'Elementor', 'UI/UX'],
      link: 'https://leoaccess.com/',
    },
    {
      id: 3,
      image: kocofayImage,
      title: 'Kocofay',
      description: 'Created a sleek salon website featuring an integrated booking system for seamless client appointment scheduling.',
      technologies: ['WordPress', 'Booking Plugins', 'JavaScript'],
      link: 'https://kocofay.com/',
    },
    {
      id: 4,
      image: MedocsImage,
      title: 'Medocs',
      description: 'A comprehensive medical care portal for Sri Lanka, providing easy access to appointments and emergency health information.',
      technologies: ['WordPress', 'Healthcare UI'],
      link: 'https://www.medocs.lk/',
    },
    {
      id: 5,
      image: TeaMate,
      title: 'TeaMate',
      description: 'Mobile application for tea factory management using ML to predict farmer churn and assess leaf quality.',
      technologies: ['React Native', 'Python', 'Firebase'],
      link: 'https://github.com/RanshikaMihiran/TeaMate/tree/master',
    },
    {
      id: 6,
      image: HotelBooking,
      title: 'Hotel Booking',
      description: 'A MERN stack application featuring secure CRUD operations and a smooth booking flow.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      link: 'https://github.com/RanshikaMihiran/Booking_App',
    },
    {
      id: 7,
      image: WaterForAll,
      title: 'Water For All',
      description: 'A social impact full-stack system built with the MERN stack to manage water distribution logistics.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/RanshikaMihiran/ITPM',
    },
    {
      id: 8,
      image: SaftyUI,
      title: 'SafetySiteCheck',
      description: 'Figma-based UI/UX design for a mobile safety inspection app, focusing on high-usability standards.',
      technologies: ['Figma', 'UI Design', 'UX Research'],
      link: 'https://www.behance.net/ranshinikz',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-[#09090b] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-500 mb-4">Portfolio</h4>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white leading-tight">
              Selected <span className="text-zinc-500 italic font-light">Works.</span>
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-zinc-900 border border-zinc-800 rounded-sm mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                   <span className="bg-white text-black px-6 py-2 rounded-sm font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
                    View Project <FiArrowUpRight />
                  </span>
                </a>
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-2xl font-medium text-white tracking-tight italic">
                  {project.title}
                </h3>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-[9px] font-mono uppercase tracking-widest px-2 py-1 bg-zinc-900 text-blue-400/80 border border-zinc-800 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;