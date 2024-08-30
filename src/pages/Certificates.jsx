import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      course: 'HTML, CSS, and JavaScript for Web Developers',
      date: 'Completed on 8 Feb 2023',
      institution: 'Johns Hopkins University - Coursera',
      grade: 'Grade: 100%',
    },
    {
      course: 'Exploratory Data Analysis for Machine Learning',
      date: 'Completed on 6 Aug 2023',
      institution: 'IBM - Coursera',
      grade: 'Grade: 95%',
    },
    {
      course: 'Algorithmic Thinking (Part 1 & 2)',
      date: 'Completed on 4 Jan 2024',
      institution: 'Rice University - Coursera',
      grade: 'Grade: 96%',
    },
  ];

  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <h2 className="text-4xl font-bold mb-6">Certificates</h2>
      {certificates.map((cert, index) => (
        <div key={index} className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="text-2xl font-semibold">{cert.course}</h3>
          <p>{cert.date}</p>
          <p>{cert.institution}</p>
          <p>{cert.grade}</p>
        </div>
      ))}
    </div>
  );
};

export default Certificates;
