import React from "react";

const CoursesAndCertifications = () => {
  return (
    <section id="courses-certifications" className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gradient mb-16">Courses and Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Course Card 1 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <i className="fas fa-certificate text-3xl text-yellow-400 mr-4"></i>
              <h3 className="text-2xl font-semibold text-white">AWS Academy Cloud Foundations</h3>
            </div>
            <p className="text-lg text-gray-300">AWS</p>
          </div>

          {/* Course Card 2 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <i className="fas fa-certificate text-3xl text-yellow-400 mr-4"></i>
              <h3 className="text-2xl font-semibold text-white">Network Addressing and Basic Troubleshooting</h3>
            </div>
            <p className="text-lg text-gray-300">Cisco</p>
          </div>

          {/* Course Card 3 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <i className="fas fa-certificate text-3xl text-yellow-400 mr-4"></i>
              <h3 className="text-2xl font-semibold text-white">Introduction to IoT</h3>
            </div>
            <p className="text-lg text-gray-300">Cisco</p>
          </div>

          {/* Course Card 4 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <i className="fas fa-certificate text-3xl text-yellow-400 mr-4"></i>
              <h3 className="text-2xl font-semibold text-white">Python Essentials</h3>
            </div>
            <p className="text-lg text-gray-300">Cisco</p>
          </div>

          {/* Course Card 5 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <i className="fas fa-certificate text-3xl text-yellow-400 mr-4"></i>
              <h3 className="text-2xl font-semibold text-white">Selenium WebDriver</h3>
            </div>
            <p className="text-lg text-gray-300">Alison</p>
          </div>

          {/* Course Card 6 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <i className="fas fa-certificate text-3xl text-yellow-400 mr-4"></i>
              <h3 className="text-2xl font-semibold text-white">Herman Loos Certificate</h3>
            </div>
            <p className="text-lg text-gray-300">Cadet</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesAndCertifications;
