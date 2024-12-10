import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ContactMe = () => {
  return (
    <section className="py-20 px-8 -900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center mb-16">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-xl">Phone</h4>
                <p className="text-gray-400">+94 77 123 4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-xl">Email</h4>
                <p className="text-gray-400">ranshika@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-xl">Location</h4>
                <p className="text-gray-400">Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg">
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-md bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-md bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 rounded-md bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-md bg-green-600 text-white font-bold hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
