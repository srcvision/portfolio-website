import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      institution: 'Ranchhodlal Chhotalal Technical Institute',
      location: 'Ahmedabad, Gujarat, India',
      period: '2019 - 2022',
      degree: 'Diploma Engineering, Major in Electric Engineering',
      gpa: 'CGPA - 7.69',
    },
    {
      institution: 'Lok Jagruti University',
      location: 'Ahmedabad, Gujarat, India',
      period: '2022 - Present',
      degree: 'Bachelor of Engineering, Major in Computer Science Engineering',
      gpa: 'GPA - 6.30',
    },
  ];

  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <h2 className="text-4xl font-bold mb-6">Education</h2>
      {educationDetails.map((edu, index) => (
        <div key={index} className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="text-2xl font-semibold">{edu.institution}</h3>
          <p>{edu.location}</p>
          <p>{edu.period}</p>
          <p>{edu.degree}</p>
          <p>{edu.gpa}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
