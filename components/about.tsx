'use client';

import React from 'react';
import { FaAward, FaCode } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 10px 25px rgba(95, 0, 241, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id='about' className='py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto'>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="w-full"
      >
        <motion.div variants={itemVariants} className='flex items-center justify-center mb-16'>
          <div className='text-center'>
            <h5 className='text-lg sm:text-xl text-purple-400 font-medium mb-2'>Get To Know</h5>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'>
              About Me
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mt-4 rounded-full" />
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            <motion.article 
              variants={cardVariants}
              whileHover="hover"
              className="about__card bg-gradient-to-br from-[#120b29] to-[#1e0f4d] rounded-xl p-6 text-center border border-[#2a1b5e] shadow-lg"
            >
              <div className="bg-[#2a1b5e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className='text-purple-400 text-2xl' />
              </div>
              <h5 className="text-white font-medium text-lg mb-2">Experience</h5>
              <div className="text-purple-200">4+ Years Working</div>
            </motion.article>

            <motion.article 
              variants={cardVariants}
              whileHover="hover"
              className="about__card bg-gradient-to-br from-[#120b29] to-[#1e0f4d] rounded-xl p-6 text-center border border-[#2a1b5e] shadow-lg"
            >
              <div className="bg-[#2a1b5e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className='text-purple-400 text-2xl' />
              </div>
              <h5 className="text-white font-medium text-lg mb-2">Clients</h5>
              <div className="text-purple-200">8+ Worldwide</div>
            </motion.article>

            <motion.article 
              variants={cardVariants}
              whileHover="hover"
              className="about__card bg-gradient-to-br from-[#120b29] to-[#1e0f4d] rounded-xl p-6 text-center border border-[#2a1b5e] shadow-lg"
            >
              <div className="bg-[#2a1b5e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <VscFolderLibrary className='text-purple-400 text-2xl' />
              </div>
              <h5 className="text-white font-medium text-lg mb-2">Projects</h5>
              <div className="text-purple-200">50+ Completed</div>
            </motion.article>

            <motion.article 
              variants={cardVariants}
              whileHover="hover"
              className="about__card bg-gradient-to-br from-[#120b29] to-[#1e0f4d] rounded-xl p-6 text-center border border-[#2a1b5e] shadow-lg"
            >
              <div className="bg-[#2a1b5e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className='text-purple-400 text-2xl' />
              </div>
              <h5 className="text-white font-medium text-lg mb-2">Frontend</h5>
              <div className="text-purple-200">React, Next.js</div>
            </motion.article>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:w-1/2 w-full">
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I'm a logical and results-driven Full Stack Developer dedicated to building and optimizing user-focused web applications. With expertise in both frontend and backend technologies, I create seamless digital experiences that drive business growth.
            </motion.p>
            
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Experienced in working with modern development tools and frameworks, I write clean, well-documented code that stands the test of time. My passion lies in solving complex problems with elegant solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-center lg:justify-start"
            >
              <a 
                href="#contact" 
                className="relative px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium overflow-hidden group"
              >
                <span className="relative z-10">Let's Talk</span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;