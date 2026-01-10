import { useState, useEffect } from "react";
import logo from "../assets/Ranshika.png";
import { FaBehance, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const SOCIAL_LINKS = [
  { id: 1, href: "https://www.linkedin.com/in/ranshika-mihiran-682450193/", icon: <FaLinkedin />, hover: "hover:text-blue-500" },
  { id: 2, href: "https://github.com/RanshikaMihiran", icon: <FaGithub />, hover: "hover:text-white" },
  { id: 3, href: "https://x.com/Ranshika2000", icon: <FaSquareTwitter />, hover: "hover:text-sky-400" },
  { id: 4, href: "https://www.instagram.com/abeykoon_rm/", icon: <FaInstagram />, hover: "hover:text-pink-500" },
  { id: 5, href: "https://www.behance.net/ranshinikz", icon: <FaBehance />, hover: "hover:text-blue-400" },
];

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img className="h-9 w-auto hover:opacity-80 transition-opacity cursor-pointer" src={logo} alt="Ranshika" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 text-sm font-medium tracking-tight text-gray-400">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="h-6 w-[1px] bg-white/10"></div> {/* Vertical Divider */}

          <div className="flex items-center gap-5 text-xl">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.hover} text-gray-400 transition-all duration-300 hover:-translate-y-1`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setMenuOpen(true)} 
          className="md:hidden text-white hover:text-blue-400 transition-colors"
        >
          <HiMenuAlt3 size={30} />
        </button>
      </div>

      {/* --- Mobile Slide-over Drawer --- */}
      <div className={`fixed inset-0 z-[60] transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out md:hidden`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
        
        {/* Drawer Content */}
        <div className="absolute right-0 top-0 h-full w-[75%] bg-[#0e0e10] border-l border-white/10 p-8 shadow-2xl">
          <div className="flex justify-end mb-8">
            <button onClick={() => setMenuOpen(false)} className="text-white">
              <HiX size={30} />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="absolute bottom-12 left-8 right-8">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">Let's Connect</p>
            <div className="flex gap-6 text-2xl">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.id} href={social.href} className={`text-gray-400 ${social.hover}`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;