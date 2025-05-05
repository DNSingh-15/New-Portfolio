'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    image: "/images/uv.jpg",
    title: "Ultraviolette website (F77)",
    link: "https://www.ultraviolette.com/",
    github: null
  },
  {
    id: 2,
    image: "/images/sunonix.jpg",
    title: "Sunonix website",
    link: "https://sunonix.com/",
    github: null
  },
  {
    id: 3,
    image: "/images/ceyone.jpg",
    title: "The Ceyone website",
    link: "https://beta.theceyone.com/",
    github: null
  },
  {
    id: 4,
    image: "/images/portfolio5.png",
    title: "Matrimonial Website",
    link: "http://matrimonywebsitedesigners.com/",
    github: "https://github.com/DNSingh-15/MWD"
  },
  {
    id: 5,
    image: "/images/portfolio3.jpg",
    title: "Realtime Chat Application",
    link: "https://chat-application123.netlify.app/",
    github: "https://github.com/DNSingh-15/realtime-chat-application"
  },
  {
    id: 6,
    image: "/images/portfolio6.jpg",
    title: "Weather App",
    link: "https://weather-application12.netlify.app",
    github: "https://github.com/DNSingh-15/React-Weather-App"
  }
];

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 15px 30px rgba(95, 0, 241, 0.3)",
      borderColor: "#5F00F1",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className='relative' id="portfolio">
      <div className="absolute inset-0 -z-10">
        <Image
          fill
          priority
          alt='Background'
          src="/images/purplebg2.png"
          className='object-cover sm:-mt-[100px] -mt-[100px]'
        />
      </div>
      
      <div className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="w-full"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h5 className="text-lg sm:text-xl text-purple-400 font-medium mb-2">My Recent Work</h5>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Portfolio
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover="hover"
                className="group bg-gradient-to-br from-[#120b29] to-[#1e0f4d] rounded-xl p-6 border border-[#2a1b5e] overflow-hidden"
              >
                <motion.div
                  variants={cardVariants}
                  className="relative h-60 overflow-hidden rounded-lg mb-4"
                >
                  <Image
                    fill
                    priority
                    alt={project.title}
                    src={project.image}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-white">{project.title}</h3>
                  <div className="flex justify-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-pink-600 hover:to-purple-600 transition-all"
                    >
                      Live Demo
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-purple-600 hover:to-pink-600 transition-all"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;