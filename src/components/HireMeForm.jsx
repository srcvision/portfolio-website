import React, { useState } from 'react';

const HireMeForm = ({ setShowForm }) => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to email or API)
    setShowForm(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg dark:bg-gray-800 dark:text-gray-200">
        <h2 className="text-2xl font-bold mb-4">Hire Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 mb-4 border rounded"
            value={formDetails.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 mb-4 border rounded"
            value={formDetails.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 mb-4 border rounded"
            rows="4"
            value={formDetails.message}
            onChange={handleChange}
          />
          <div className="flex justify-between">
            <button type="button" onClick={() => setShowForm(false)} className="bg-red-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HireMeForm;
