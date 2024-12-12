import React from "react";

const Education = () => {
  return (
    <section id="education" className=" text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gradient mb-16">My Education Journey</h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute inset-0 left-1/2 border-l-4 border-gray-600 z-0"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {/* Education Item 1 */}
            <div className="flex flex-col items-center relative z-10">
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full flex items-center justify-center shadow-xl transform transition duration-500 hover:scale-110">
                <span className="text-lg font-semibold">1</span>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 mt-16 md:mt-0">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">BSC (HONS) in Information Technology</h3>
                <p className="text-lg text-gray-300 mb-4">Specializing in Information Technology</p>
                <p className="text-md text-gray-400">Sri Lanka Institute of Information Technology (SLIIT)</p>
                <p className="text-md text-gray-400">2021 - Present</p>
              </div>
            </div>

            {/* Education Item 2 */}
            <div className="flex flex-col items-center relative z-10">
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full flex items-center justify-center shadow-xl transform transition duration-500 hover:scale-110">
                <span className="text-lg font-semibold">2</span>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 mt-16 md:mt-0">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">G.C.E. Advanced Level</h3>
                <p className="text-lg text-gray-300 mb-4">Mayurapada Central College</p>
                <p className="text-md text-gray-400">2019</p>
              </div>
            </div>

            {/* Education Item 3 */}
            <div className="flex flex-col items-center relative z-10">
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full flex items-center justify-center shadow-xl transform transition duration-500 hover:scale-110">
                <span className="text-lg font-semibold">3</span>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 mt-16 md:mt-0">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">G.C.E. Ordinary Level</h3>
                <p className="text-lg text-gray-300 mb-4">Mayurapada Central College</p>
                <p className="text-md text-gray-400">2016</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
