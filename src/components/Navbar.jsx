import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { ThemeContext } from '../context/ThemeContext';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <div>
        <Link to="home" smooth={true} duration={500} className="text-2xl cursor-pointer">
          Saurav Chaudhari
        </Link>
      </div>
      <div className="flex items-center">
        <button onClick={toggleTheme} className="mr-4">
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
        <Link to="about" smooth={true} duration={500} className="mr-4 cursor-pointer">About</Link>
        <Link to="projects" smooth={true} duration={500} className="mr-4 cursor-pointer">Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="mr-4 cursor-pointer">Contact</Link>
        <a href="https://github.com/srcvision" className="mr-4" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/saurav-chaudhari-1ab838265/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </nav>
  );
}

export default Navbar;
