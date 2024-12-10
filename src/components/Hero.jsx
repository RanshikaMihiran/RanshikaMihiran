import { motion } from "motion/react";
import profilePic from "../assets/RanshikaMihiran.png";

const container = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center text-white mb-20">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-6 lg:px-12 flex flex-col justify-center">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-6xl lg:text-8xl font-extrabold tracking-tight mb-6">
            Ranshika Mihiran
          </motion.h1>
          <motion.span
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-2xl lg:text-3xl font-semibold mb-4">
            Full Stack Developer
          </motion.span>
          <motion.p
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className="font-light leading-relaxed">
            I am a final-year IT student at SLIIT, pursuing a BSc (Hons) in Information Technology.
            With expertise in software development, database management, and system design, I have developed secure and scalable web applications.
            I excel in collaborative environments and continuously aim to grow professionally in the evolving tech industry.
          </motion.p>
        </div>

        {/* Profile Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 ">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="relative">
            <img
              src={profilePic}
              alt="Ranshika Mihiran"
              className="w-80 h-80 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-2 border-gradient-to-r from-pink-500 to-purple-500"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
