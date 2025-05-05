'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    avatar: "/images/avatar1.jpg",
    name: 'Sarah Johnson',
    role: 'Marketing Director, TechCorp',
    review:
      'Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule with exceptional attention to detail. The site performance improved by 40% and our conversion rates doubled within the first month.',
  },
  {
    avatar: "/images/avatar2.jpg",
    name: 'Michael Chen',
    role: 'CTO, StartupHub',
    review:
      'The React components they built for our SaaS platform are incredibly robust. Their clean code and thorough documentation made it easy for our team to take over maintenance. We continue to hire them for ongoing feature development.',
  },
  {
    avatar: "/images/avatar4.jpg",
    name: 'Priya Patel',
    role: 'Product Manager, FinTech Solutions',
    review:
      'Their expertise in Next.js and AWS was exactly what our financial dashboard needed. They implemented complex data visualizations that load instantly, even with millions of data points. The security implementations were particularly impressive.',
  },
  {
    avatar: "/images/avatar3.jpg",
    name: 'David Wilson',
    role: 'Founder, EduTech Innovations',
    review:
      'From initial concept to deployment, their full-stack skills brought our learning platform to life. The serverless architecture they designed handles our peak traffic effortlessly while keeping costs minimal. Truly a top-tier developer.',
  },
];

const Testimonials = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 30px rgba(95, 0, 241, 0.2)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className='relative' id='testimonials'>
      <div className="absolute inset-0 -z-10">
        <Image
          fill
          priority
          alt='Background'
          src="/images/purplebg3.png"
          className='object-cover'
        />
      </div>

      <div className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h5 className="text-lg sm:text-xl text-purple-400 font-medium mb-2">Review from clients</h5>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Testimonials
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-gradient-to-br from-[#120b29] to-[#1e0f4d] rounded-xl p-8 border border-[#2a1b5e]"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    variants={cardVariants}
                    className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 mb-6"
                  >
                    <Image
                      fill
                      alt={testimonial.name}
                      src={testimonial.avatar}
                      className="object-cover"
                      sizes="(max-width: 128px) 100vw"
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-1">{testimonial.name}</h3>
                  <p className="text-purple-300 text-sm mb-6">{testimonial.role}</p>
                  
                  <div className="relative">
                    <svg 
                      className="w-8 h-8 text-purple-500 opacity-30 absolute -top-6 -left-2"
                      fill="currentColor" 
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    
                    <p className="text-gray-300 italic relative z-10">
                      {testimonial.review}
                    </p>
                    
                    <svg 
                      className="w-8 h-8 text-purple-500 opacity-30 absolute -bottom-6 -right-2"
                      fill="currentColor" 
                      viewBox="0 0 32 32"
                    >
                      <path d="M22.648 28c4.896-3.456 8.352-9.12 8.352-15.36 0-5.088-3.072-8.064-6.624-8.064-3.36 0-5.856 2.688-5.856 5.856 0 3.168 2.208 5.472 5.088 5.472.576 0 1.344-.096 1.536-.192-.48 3.264-3.552 7.104-6.624 9.024L22.648 28zm-16.512 0c4.8-3.456 8.256-9.12 8.256-15.36 0-5.088-3.072-8.064-6.624-8.064-3.264 0-5.856 2.688-5.856 5.856 0 3.168 2.304 5.472 5.184 5.472.576 0 1.248-.096 1.44-.192-.48-3.264-3.456-7.104-6.528-9.024L6.136 28z" />
                    </svg>
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

export default Testimonials;