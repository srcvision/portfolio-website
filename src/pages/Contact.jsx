import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import HireMeForm from '../components/HireMeForm';

const Contact = () => {
  const [showHireMeForm, setShowHireMeForm] = useState(false);

  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen" id="contact">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form className="mb-6">
        <input type="text" placeholder="Name" className="w-full p-2 mb-4 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 mb-4 border rounded" rows="4"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
      </form>
      <div className="flex items-center">
        <a href="https://github.com/srcvision" className="mr-4" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/saurav-chaudhari-1ab838265/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
      <button onClick={() => setShowHireMeForm(true)} className="bg-green-500 text-white px-4 py-2 rounded mt-4">Hire Me</button>
      {showHireMeForm && <HireMeForm setShowForm={setShowHireMeForm} />}
    </div>
  );
};

export default Contact;
