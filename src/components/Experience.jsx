import React, { useState } from "react";
import { FaBuilding, FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleActiveSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <section className="py-20 px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center text-white mb-16">
          Professional Experience
        </h2>

        <div className="space-y-12">
          {/* Ministry of Plantation Internship */}
          <div
            className={`flex flex-col lg:flex-row gap-8 bg-gray-800 p-8 rounded-lg shadow-lg transition-all transform transition duration-300 hover:scale-110 hover:shadow-xl ${
              activeSection === 0 ? "scale-105 shadow-2xl" : "hover:shadow-xl"
            }`}
            onClick={() => toggleActiveSection(0)}
          >
            <div className="flex items-start gap-4">
              <FaBuilding className="text-green-500 text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold text-white">Ministry of Plantation</h3>
                <p className="text-gray-400">May 2024 - November 2024</p>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-white mb-4">IT and Web Development Intern</h4>
              <ul className="list-disc pl-5 space-y-3 text-gray-300">
                <li>
                  Gained experience in WordPress web development, including design, customization, and maintenance.
                </li>
                <li>
                  Developed a strong understanding of network servers, telecom lines, and web hosting.
                </li>
                <li>
                  Acquired troubleshooting skills for network issues and PC hardware/software problems.
                </li>
                <li>
                  Assisted in optimizing website performance, implementing security measures, and providing user support.
                </li>
                <li>
                  Collaborated with teams to improve IT solutions and system efficiency.
                </li>
              </ul>
            </div>
          </div>

          {/* Freelance Web Developer */}
          <div
            className={`flex flex-col lg:flex-row gap-8 bg-gray-800 p-8 rounded-lg shadow-lg transition-all transform transition duration-300 hover:scale-110 hover:shadow-xl  ${
              activeSection === 1 ? "scale-105 shadow-2xl" : "hover:shadow-xl"
            }`}
            onClick={() => toggleActiveSection(1)}
          >
            <div className="flex items-start gap-4 ">
              <FaBriefcase className="text-blue-500 text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold text-white">Freelance Web Developer</h3>
                <p className="text-gray-400">2021 - Present</p>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-white mb-4">Self-Employed (CodeScape)</h4>
              <ul className="list-disc pl-5 space-y-3 text-gray-300">
                <li>
                  Specialized in WordPress development using Elementor, handling domain registration, web hosting, and optimizing site performance, security, and functionality with plugins.
                </li>
                <li>
                  Provided ongoing maintenance and client support.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;