'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(95, 0, 241, 0.3)",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <div className="flex justify-center gap-6">
      <motion.a
        href="/images/DN_CV.pdf"
        download
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium"
      >
        Download CV
      </motion.a>

      <motion.a
        href="#contact"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="px-6 py-3 rounded-lg border border-purple-500 text-white font-medium"
      >
        Let's Talk
      </motion.a>
    </div>
  );
};

export default CTA;