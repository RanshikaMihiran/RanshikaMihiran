import logo from "../assets/Ranshika.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { useState } from "react"; // Import useState for managing menu visibility

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu

  return (
    <nav className="mb-20 flex items-center justify-between py-6 rounded-b-2xl w-full">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <img className="" src={logo} alt="logo" />
      </div>

      {/* Navbar Links */}
      <div className="flex items-center gap-8">
        {/* Desktop Navigation Links */}
        {/* <div className="hidden md:flex gap-6 text-xl">
          <a href="#about" className="hover:text-blue-500">About Me</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div> */}

        {/* Social Media Icons */}
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/ranshika-mihiran-682450193/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/RanshikaMihiran"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/Ranshika2000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaSquareTwitter />
          </a>
          <a
            href="https://www.instagram.com/abeykoon_rm/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>


        {/* Hamburger Menu (Visible on small screens) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible on small screens when menuOpen is true) */}
      {/* {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4">
          <a href="#about" className="text-xl hover:text-blue-500">About Me</a>
          <a href="#projects" className="text-xl hover:text-blue-500">Projects</a>
          <a href="#contact" className="text-xl hover:text-blue-500">Contact</a>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;