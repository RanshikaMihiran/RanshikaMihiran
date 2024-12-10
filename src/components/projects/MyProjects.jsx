import React from "react";
import salonImage from "../../assets/projects/SalonOpeening.jpg";
import Umbrella from "../../assets/projects/Umbrella Design.jpg";
import AGLOGO from "../../assets/projects/Final.png";
import Weddingcard from "../../assets/projects/Madara&Nuranga.jpg";
 // Import the image

const MyProjects = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        {/* <h2 className="text-4xl font-semibold text-center mb-12">My Projects</h2> */}

        {/* Graphic Design Projects Section */}
        <section id="graphic-design" className="mb-12">
          <h3 className="text-3xl font-bold text-blue-500 mb-6">Graphic Design Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example of a graphic design project */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 mb-12">
              <img src={salonImage} alt="Graphic Design Project" className="w-full h-68 object-cover mb-4 rounded-lg"/>
              <h4 className="text-xl font-semibold mb-2">Invitation Card</h4>
              {/* <p className="text-gray-300">A brief description of the graphic design project. This could involve branding, digital art, and more.</p> */}
            </div>
            {/* More graphic design projects */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 mb-12">
              <img src={Umbrella} alt="Graphic Design Project" className="w-full h-68 object-cover mb-4 rounded-lg"/>
              <h4 className="text-xl font-semibold mb-2">Umbrella Design </h4>
              {/* <p className="text-gray-300">A brief description of the graphic design project. This could involve branding, digital art, and more.</p> */}
            </div>
            {/* More graphic design projects */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 mb-12">
              <img src={Weddingcard} alt="Graphic Design Project" className="w-full h-68 object-cover mb-4 rounded-lg"/>
              <h4 className="text-xl font-semibold mb-2">Wedding Invitation </h4>
              {/* <p className="text-gray-300">A brief description of the graphic design project. This could involve branding, digital art, and more.</p> */}
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyProjects;
