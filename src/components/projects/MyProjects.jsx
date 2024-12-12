import React, { useState } from "react";
import salonImage from "../../assets/projects/SalonOpeening.jpg";
import Umbrella from "../../assets/projects/Umbrella Design.jpg";
import AGLOGO from "../../assets/projects/Final.png";
import Weddingcard from "../../assets/projects/Madara&Nuranga.jpg";
import RentCar from "../../assets/projects/RentCar.jpg";

const MyProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Graphic Design Projects Section */}
        <section id="graphic-design" className="mb-12">
          <h3 className="text-3xl font-bold text-blue-500 mb-6">Graphic Design Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example of a graphic design project */}
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openPopup(salonImage)}
            >
              <img src={salonImage} alt="Invitation Card" className="w-full h-68 object-cover mb-4 rounded-lg" />
              <h4 className="text-xl font-semibold mb-2">Invitation Card</h4>
            </div>
            {/* More graphic design projects */}
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openPopup(Umbrella)}
            >
              <img src={Umbrella} alt="Umbrella Design" className="w-full h-68 object-cover mb-4 rounded-lg" />
              <h4 className="text-xl font-semibold mb-2">Umbrella Design</h4>
            </div>
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openPopup(Weddingcard)}
            >
              <img src={Weddingcard} alt="Wedding Invitation" className="w-full h-68 object-cover mb-4 rounded-lg" />
              <h4 className="text-xl font-semibold mb-2">Wedding Invitation</h4>
            </div>
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openPopup(RentCar)}
            >
              <img src={RentCar} alt="Rent Car" className="w-full h-68 object-cover mb-4 rounded-lg" />
              <h4 className="text-xl font-semibold mb-2">Rent Car</h4>
            </div>
          </div>
        </section>
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closePopup}
        >
          <div className="relative">
            <button
              className="absolute top-0 right-0 text-white text-2xl p-2"
              onClick={closePopup}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Selected Project" className="max-w-full max-h-screen rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProjects;
