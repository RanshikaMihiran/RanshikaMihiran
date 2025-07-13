import {
  FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs, FaGitAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMongodb, SiFirebase,
  SiWordpress, SiFigma, SiAdobephotoshop, SiAdobeillustrator,
} from 'react-icons/si';

const techList = [
  { icon: <FaReact className="text-sky-400" />, name: 'React' },
  { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
  { icon: <FaCss3Alt className="text-blue-600" />, name: 'CSS3' },
  { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
  { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
  { icon: <FaGitAlt className="text-red-500" />, name: 'Git' },
  { icon: <SiTailwindcss className="text-teal-400" />, name: 'Tailwind CSS' },
  { icon: <SiExpress className="text-gray-300" />, name: 'Express' },
  { icon: <SiMongodb className="text-green-700" />, name: 'MongoDB' },
  { icon: <SiFirebase className="text-yellow-500" />, name: 'Firebase' },
  { icon: <SiWordpress className="text-blue-500" />, name: 'WordPress' },
  { icon: <SiFigma className="text-pink-500" />, name: 'Figma' },
  { icon: <SiAdobephotoshop className="text-blue-500" />, name: 'Photoshop' },
  { icon: <SiAdobeillustrator className="text-red-500" />, name: 'Illustrator' },
];

const Technologies = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-14 text-white">
          Technologies I Use
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 justify-items-center">
          {techList.map((tech, index) => (
            <div
              key={index}
              className="w-32 h-32 sm:w-36 sm:h-36 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-5xl sm:text-6xl drop-shadow-xl group-hover:drop-shadow-2xl transition">
                {tech.icon}
              </div>
              <span className="text-sm sm:text-base font-medium mt-3">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
