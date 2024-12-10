import React from "react";
import cvFile from "../assets/Ranshika_CV.pdf"; // Path to your CV PDF

const CVSection = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 mb-12">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-semibold text-blue-500 mb-4">Download My CV</h2>
        <p className="text-lg text-gray-300">
          Here is a summary of my professional experience, skills, and qualifications.
          Click the button below to download my full CV and learn more about my work and background.
        </p>
      </div>

      <div className="flex justify-center">
        <a
          href={cvFile} // Link to the PDF file
          download // This makes it downloadable
          className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default CVSection;
