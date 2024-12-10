import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiWordpress } from 'react-icons/si';

const Technologies = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-12 text-white">
          Technologies I Use
        </h2>

        {/* Horizontal Layout with Floating Effect */}
        <div className="flex flex-wrap justify-center gap-16">
          {/* React */}
          <div className="rounded-2xl border-4 border-neutral-500 p-2 flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-xl">
            <FaReact className="text-blue-500 text-7xl drop-shadow-xl hover:drop-shadow-2xl" />
            <span className="text-xl font-medium text-white mt-4">React</span>
          </div>

          {/* Node.js */}
          <div className="rounded-2xl border-4 border-neutral-500 p-2 flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-xl">
            <FaNodeJs className="text-green-500 text-7xl drop-shadow-xl hover:drop-shadow-2xl" />
            <span className="text-xl font-medium text-white mt-4">Node.js</span>
          </div>

          {/* CSS */}
          <div className="rounded-2xl border-4 border-neutral-500 p-2 flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-xl">
            <FaCss3Alt className="text-blue-600 text-7xl drop-shadow-xl hover:drop-shadow-2xl" />
            <span className="text-xl font-medium text-white mt-4">CSS3</span>
          </div>

          {/* HTML */}
          <div className="rounded-2xl border-4 border-neutral-500 p-2 flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-xl">
            <FaHtml5 className="text-orange-500 text-7xl drop-shadow-xl hover:drop-shadow-2xl" />
            <span className="text-xl font-medium text-white mt-4">HTML5</span>
          </div>

          {/* JavaScript */}
          <div className="rounded-2xl border-4 border-neutral-500 p-2 flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-xl">
            <FaJs className="text-yellow-500 text-7xl drop-shadow-xl hover:drop-shadow-2xl" />
            <span className="text-xl font-medium text-white mt-4">JavaScript</span>
          </div>

          {/* Git */}
          <div className="rounded-2xl border-4 border-neutral-500 p-2 flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-xl">
            <FaGitAlt className="text-red-500 text-7xl drop-shadow-xl hover:drop-shadow-2xl" />
            <span className="text-xl font-medium text-white mt-4">Git</span>
          </div>

          {/* Tailwind CSS */}
          <div className="rounded-2xl border-4 border-neutral-500 p-2 flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-xl">
            <SiTailwindcss className="text-teal-400 text-7xl drop-shadow-xl hover:drop-shadow-2xl" />
            <span className="text-xl font-medium text-white mt-4">Tailwind CSS</span>
          </div>

          {/* Express */}
          <div className="rounded-2xl border-4 border-neutral-500 p-2 flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-xl">
            <SiExpress className="text-gray-700 text-7xl drop-shadow-xl hover:drop-shadow-2xl" />
            <span className="text-xl font-medium text-white mt-4">Express</span>
          </div>

          {/* MongoDB */}
          <div className="rounded-2xl border-4 border-neutral-500 p-2 flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-xl">
            <SiMongodb className="text-green-700 text-7xl drop-shadow-xl hover:drop-shadow-2xl" />
            <span className="text-xl font-medium text-white mt-4">MongoDB</span>
          </div>

          {/* Firebase */}
          <div className="rounded-2xl border-4 border-neutral-500 p-2 flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-xl">
            <SiFirebase className="text-yellow-500 text-7xl drop-shadow-xl hover:drop-shadow-2xl" />
            <span className="text-xl font-medium text-white mt-4">Firebase</span>
          </div>
          {/* wordpress */}
          <div className="rounded-2xl border-4 border-neutral-500 p-2 flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-xl">
            <SiWordpress className="text-yellow-500 text-7xl drop-shadow-xl hover:drop-shadow-2xl" />
            <span className="text-xl font-medium text-white mt-4">Wordpress</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
