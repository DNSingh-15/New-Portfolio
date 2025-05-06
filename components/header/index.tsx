'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollButtonVariants = {
    hover: {
      y: 5,
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 0.8
      }
    }
  };

  return (
    <header className='' id="home">
      <div className="absolute inset-0 -z-10">
        <Image
          fill
          priority
          alt='Background'
          src="/images/purplebg.png"
          className='object-cover'
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-12 pb-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <h5 className="text-lg sm:text-xl text-purple-400 font-medium mb-2">Hello I'm</h5>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              D N SINGH
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-8">
            <p className="text-gray-300 text-lg sm:text-xl">
              A Full Stack Developer specializing in JavaScript/TypeScript ecosystems with expertise in ReactJS, Next.js, Node.js, NestJS, and database technologies including MongoDB, PostgreSQL, and MSSQL.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <CTA />
          </motion.div>

          <motion.div
            className="relative w-full max-w-lg mx-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="rounded-t-full rounded-b-lg overflow-hidden border-4 border-[#2a1b5e] shadow-xl">
              <Image
                width={500}
                height={500}
                alt="D N Singh"
                src="/images/me-about.png"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        <HeaderSocials />

        <motion.a
          href='#contact'
          whileHover="hover"
          variants={scrollButtonVariants}
          className="absolute right-8 bottom-20 transform rotate-90 text-sm text-gray-300 flex items-center"
        >
          Scroll Down
          <span className="ml-2 text-purple-400">↓</span>
        </motion.a>
      </div>
    </header>
  );
};

export default Header;