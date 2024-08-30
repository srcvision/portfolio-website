import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Automatic Attendance System',
    description: 'Face Recognition Automatic Attendance System using OpenCV and Python.',
    tech: 'Python3, OpenCV, Tkinter, XLSXWriter',
  },
  {
    title: 'Invoice Generator Project',
    description: 'Developed a responsive and user-friendly invoice generator application.',
    tech: 'React, Tailwind CSS, JavaScript, React-to-Print',
    link: 'https://invoice-generator-srcvision.vercel.app/',
  },
];

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg"
            variants={item}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
            <p className="text-sm mt-2">{project.tech}</p>
            {project.link && <a href={project.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">View Project</a>}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
