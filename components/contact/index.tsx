'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdOutlineMailOutline, MdPermPhoneMsg } from 'react-icons/md';
import { SiLinkedin } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';
import ContactForm from './form';

const Contact = () => {
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
    hidden: { y: 30, opacity: 0 },
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
      borderColor: "#5F00F1",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(95, 0, 241, 0.3)",
      transition: { duration: 0.2 }
    }
  };

  const contactOptions = [
    {
      icon: <MdOutlineMailOutline className="text-purple-400 text-2xl" />,
      title: "Email",
      description: "Connect with Email",
      action: "Send mail",
      link: "mailto:asmrdnsingh@gmail.com"
    },
    {
      icon: <MdPermPhoneMsg className="text-purple-400 text-2xl" />,
      title: "Call",
      description: "Connect with call",
      action: "Direct call",
      link: "tel:+916387538464"
    },
    {
      icon: <BsWhatsapp className="text-purple-400 text-2xl" />,
      title: "Whatsapp",
      description: "Connect with Whatsapp",
      action: "Send a message",
      link: "https://wa.me/+916387538464"
    },
    {
      icon: <SiLinkedin className="text-purple-400 text-2xl" />,
      title: "Linkedin",
      description: "Connect with Linkedin",
      action: "Send a message",
      link: "https://www.linkedin.com/in/dnsingh"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h5 className="text-lg sm:text-xl text-purple-400 font-medium mb-2">Get In Touch</h5>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Contact Me
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-gradient-to-br from-[#120b29] to-[#1e0f4d] rounded-xl p-8 border border-[#2a1b5e] shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#2a1b5e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {option.icon}
                  </div>
                  <h4 className="text-white font-medium mb-1">{option.title}</h4>
                  <p className="text-purple-200 text-sm mb-4">{option.description}</p>
                  <motion.a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm"
                  >
                    {option.action}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants}>
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;