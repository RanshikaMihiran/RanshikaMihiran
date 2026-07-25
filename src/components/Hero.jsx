import { motion } from "framer-motion";
import profilePic from "../assets/RanshikaMihiran1.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090b] pt-20">
      
      {/* --- Executive Background Depth --- */}
      {/* A soft blue spotlight that makes the content "pop" without being neon */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-500/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
        
        {/* Left Column: Content (Span 7) */}
        <div className="lg:col-span-7 text-left order-2 lg:order-1">
          
          {/* Professional Role Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-blue-400 text-[10px] uppercase tracking-[0.2em] font-mono mb-8 shadow-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Junior Executive IT @ Hemas Consumer Brands
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-tight"
          >
            Ranshika <br />
            <span className="text-zinc-500 font-light italic">Mihiran.</span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-3xl font-light text-zinc-400 mb-8 tracking-tight max-w-2xl"
          >
            Orchestrating <span className="text-white font-medium">Enterprise Infrastructure</span> & Digital Systems.
          </motion.h2>

          {/* Junior Executive Responsibilities */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500">
                <span className="flex items-center gap-3"><span className="h-[1px] w-4 bg-blue-600"></span> Infrastructure Operations</span>
                <span className="flex items-center gap-3"><span className="h-[1px] w-4 bg-blue-600"></span> Network Management</span>
                <span className="flex items-center gap-3"><span className="h-[1px] w-4 bg-blue-600"></span> System Security</span>
                <span className="flex items-center gap-3"><span className="h-[1px] w-4 bg-blue-600"></span> Technical Strategy</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-8"
          >
            <a href="#projects" className="px-10 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] rounded-sm hover:bg-blue-600 hover:text-white transition-all duration-300">
              Explore Portfolio
            </a>
            <a href="#contact" className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em] hover:text-white border-b border-zinc-800 pb-1 transition-all">
              Contact Executive
            </a>
          </motion.div>
        </div>

        {/* Right Column: Image (Span 5) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* Architectural Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-zinc-800 -z-10"></div>
            
            <div className="relative bg-zinc-900 overflow-hidden border border-zinc-800 aspect-[4/5] w-72 lg:w-[420px] shadow-2xl">
              <img 
                src={profilePic} 
                alt="Ranshika Mihiran" 
                className="w-full h-full object-cover saturate-[1.1] contrast-[1.05] opacity-90 hover:opacity-100 transition-opacity duration-700"
              />
            </div>

            {/* Credential Badge */}
            <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-zinc-800 p-6 shadow-2xl rounded-sm">
              <p className="text-white font-medium text-lg tracking-tighter leading-none">SLIIT</p>
              <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] mt-2 font-mono">Graduated</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;