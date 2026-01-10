import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiX } from "react-icons/fi";

// Import Assets
import salonImage from "../../assets/projects/SalonOpeening.jpg";
import Umbrella from "../../assets/projects/Umbrella Design.jpg";
import Weddingcard from "../../assets/projects/Madara&Nuranga.jpg";
import RentCar from "../../assets/projects/RentCar.jpg";
import Class from "../../assets/projects/Class.jpg";

const GRAPHIC_PROJECTS = [
  { id: 1, src: salonImage, title: "Salon Opening", cat: "Print Design" },
  { id: 2, src: Umbrella, title: "Umbrella Branding", cat: "Identity" },
  { id: 3, src: Weddingcard, title: "Wedding Suite", cat: "Typography" },
  { id: 4, src: RentCar, title: "Rental Campaign", cat: "Marketing" },
  { id: 5, src: Class, title: "Education Poster", cat: "Social Media" },
];

const MyProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="design" className="bg-[#09090b] py-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-500 mb-4">Creative Gallery</h4>
          <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter italic leading-none">
            Visual <span className="text-zinc-500 not-italic">Stories.</span>
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {GRAPHIC_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedImage(project.src)}
              className="relative group overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer rounded-sm"
            >
              {/* Image - Always in color */}
              <img 
                src={project.src} 
                alt={project.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <FiPlus className="text-white text-3xl mb-4" />
                <p className="text-blue-500 text-[10px] uppercase tracking-widest font-mono">{project.cat}</p>
                <h4 className="text-xl font-medium text-white">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 backdrop-blur-xl flex justify-center items-center z-[100] p-4 lg:p-20"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-white p-2">
              <FiX size={32} />
            </button>

            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage} 
              className="max-w-full max-h-full object-contain border border-zinc-800" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MyProjects;