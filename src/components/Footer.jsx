import React from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex">
          <Link to="home" smooth={true} duration={500} className="mr-4 cursor-pointer">Home</Link>
          <Link to="about" smooth={true} duration={500} className="mr-4 cursor-pointer">About</Link>
          <Link to="projects" smooth={true} duration={500} className="mr-4 cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="mr-4 cursor-pointer">Contact</Link>
        </div>
        <div className="flex">
          <a href="https://github.com/srcvision" className="mr-4" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/saurav-chaudhari-1ab838265/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
