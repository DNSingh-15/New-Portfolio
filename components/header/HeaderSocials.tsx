'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';

const HeaderSocials = () => {
  const socialLinks = [
    {
      icon: <BsLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/dnsingh",
    },
    {
      icon: <BsGithub className="text-2xl" />,
      url: "https://github.com/DNSingh-15",
    },
    {
      icon: <TfiEmail className="text-2xl" />,
      url: "mailto:asmrdnsingh@gmail.com",
    }
  ];

  const itemVariants = {
    hover: {
      y: -5,
      scale: 1.2,
      color: "#5F00F1",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="flex flex-col items-center gap-6 absolute left-8 bottom-12"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover="hover"
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default HeaderSocials;