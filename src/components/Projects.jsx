import React from 'react';
// import './Projects.css'; // Import the CSS file for styling
import kocofayImage from '../assets/projects/kocofay.png';
import MedocsImage from '../assets/projects/medocs.png';
import TeaMate from '../assets/projects/Teamate.jpg';
import HotelBooking from '../assets/projects/HotelBookig.png';
import WaterForAll from '../assets/projects/WaterForAll.png';
import SaftyUI from '../assets/projects/SaftyUI.png';
import leoaccess from '../assets/projects/leoaccess.png';
import eminentdesigner from '../assets/projects/eminentdesigner.png';
import { motion } from "motion/react"

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: eminentdesigner,
      title: 'Eminentdesigner',
      description: 'Developed "eminentdesigner", a professional website for a Premium Aluminum Fabrication company in companySri Lanka, built using WordPress and Elementor. The site features a clean, responsive layout, service-focused design, and SEO optimization tailored for local visibility.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Elementor', 'SEO plugins', 'responsive design principles'],
      link: 'https://Eminentdesigner.com/',
    },
    {
      id: 1,
      image: leoaccess,
      title: 'LeoAccess',
      description: 'Developed “LeoAccess”, a professional website for a cleaning and technical services company based in Dubai, built using WordPress and Elementor. The site features a clean, responsive layout, service-focused design, and SEO optimization tailored for local visibility.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Elementor', 'SEO plugins', 'responsive design principles'],
      link: 'https://leoaccess.com/',
    },
    {
      id: 2,
      image: kocofayImage,
      title: 'Kocofay',
      description: 'I created a website for Kocofay Salon, featuring services and a user-friendly booking system for appointment scheduling. The design ensures a seamless experience for clients to explore services and make bookings online.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Booking Plugins', 'Service Management Plugins'],
      link: 'https://kocofay.com/',
    },
    {
      id: 3,
      image: MedocsImage,
      title: 'Medocs',
      description: 'I developed Medocs, a Sri Lankan medical care website offering a range of healthcare services. The site provides easy access to medical information, appointments, and emergency services for users across Sri Lanka.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Booking Plugins', 'Service Management Plugins'],
      link: 'https://www.medocs.lk/',
    },
    {
      id: 4,
      image: TeaMate,
      title: 'TeaMate',
      description: 'TeaMate is a mobile app for tea factory owners, offering features like water level monitoring, tea leaf quality assessment, price prediction, farmer churn prediction, and inventory management using machine learning and image processing technologies.',
      technologies: ['React Native', 'Python', 'Firebase', 'TensorFlow', 'OpenCV', 'SQLite', 'RESTful APIs'],
      link: 'https://github.com/RanshikaMihiran/TeaMate/tree/master',
    },
     {
      id: 5,
      image: HotelBooking,
      title: 'Hotel Booking',
      description: 'Developed a user-friendly web application, that ensures secure CRUD operations and smooth user interactions using the MERN stack. The project also focused on API testing with Postman to guarantee reliability and performance.',
      technologies: ['MERN Stack', 'React', 'Node.js', 'Express', 'MongoDB', 'API Testing with Postman', 'JavaScript', 'HTML', 'CSS'],
      link: 'https://github.com/RanshikaMihiran/Booking_App',
    },
    {
      id: 6,
      image: WaterForAll,
      title: 'Water For All',
      description: 'Built a secure and user-friendly CRUD system using the MERN stack. Developed a responsive React frontend, scalable MongoDB database, and efficient APIs with Express and Node.js. Enhanced reliability through API testing with Postman, improving full-stack development skills.',
      technologies: [ 'React', 'MongoDB', 'Node.js', 'Express', 'API Testing (Postman)', 'HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/RanshikaMihiran/ITPM',
    },
    {
      id: 7,
      image: SaftyUI,
      title: 'SafetySiteCheck',
      description: 'Designed a user-friendly UI for the SafetySiteCheck MobileApp, focusing on intuitive navigation and modern design principles using Figma. The design aims to enhance user experience and provide seamless access to safety-related features.',
      technologies: ['Figma', 'UI Design', 'Mobile App Design', 'User Experience (UX)', 'User Interface (UI)'],
      link: 'https://www.behance.net/ranshinikz',
    },
    
    // Add more projects as needed
  ];

  return (
    <section className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies">
              <span>Technologies:</span> {project.technologies.join(', ')}
            </p>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
