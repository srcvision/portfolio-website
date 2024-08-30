import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <motion.h1
        className="text-gray-500 text-9xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Saurav Chaudhari
      </motion.h1>
    </div>
  );
};

export default Home;
