'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
    {
        name: 'Rohan Singh',
        role: 'CTO, TechMahindra',
        review:
            'As a full-stack developer, they built our entire e-commerce platform with Next.js frontend and Node.js backend. The seamless integration between React components and MongoDB database was particularly impressive. Our site performance improved by 65%.',
    },
    {
        name: 'Priya Patel',
        role: 'Product Lead, Flipkart',
        review:
            'Their expertise in both frontend (React/Redux) and backend (NestJS/PostgreSQL) helped us launch our new feature 2 weeks ahead of schedule. The GraphQL API implementation was flawless and reduced our data fetching time by 40%.',
    },
    {
        name: 'Arjun Sharma',
        role: 'Engineering Manager, Paytm',
        review:
            'From designing the AWS architecture to implementing the React dashboard, they delivered a complete full-stack solution. Their ability to optimize both client-side and server-side performance saved us thousands in cloud costs.',
    },
    {
        name: 'Ananya Gupta',
        role: 'Director, Zomato',
        review:
            'The full-stack application they developed handles 10,000+ daily orders with perfect reliability. The Next.js SSR implementation improved our SEO rankings while the Node.js microservices handle peak loads effortlessly.',
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
        hidden: { y: 40, opacity: 0, scale: 0.95 },
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
            boxShadow: "0 10px 25px rgba(95, 0, 241, 0.3)",
            borderColor: "#5F00F1",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const avatarVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 150
            }
        },
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: {
                duration: 0.2
            }
        }
    };

    const getInitials = (name) => {
        return name.split(' ').map(part => part[0]).join('').toUpperCase();
    };

    const getRandomGradient = () => {
        const gradients = [
            'from-purple-500 to-pink-500',
            'from-blue-500 to-teal-400',
            'from-orange-500 to-yellow-400',
            'from-green-500 to-emerald-400'
        ];
        return gradients[Math.floor(Math.random() * gradients.length)];
    };

    return (
        <div className='relative' id='testimonials'>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#120b29] to-[#1e0f4d] opacity-90" />

            <div className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h5 className="text-lg sm:text-xl text-purple-400 font-medium mb-2">What Clients Say</h5>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                            Client Testimonials
                        </h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mt-4 rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                whileHover="hover"
                                variants={cardVariants}
                                className="bg-gradient-to-br from-[#120b29] to-[#1e0f4d] rounded-xl p-8 border border-[#2a1b5e] shadow-lg relative overflow-hidden"
                            >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(95,0,241,0.3)_0%,_rgba(95,0,241,0)_70%)]"
                                />

                                <div className="flex flex-col items-center text-center relative z-10">
                                    <motion.div
                                        variants={avatarVariants}
                                        className={`flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-gradient-to-br ${getRandomGradient()} text-white text-2xl font-bold shadow-lg`}
                                    >
                                        {getInitials(testimonial.name)}
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

                                        <p className="text-gray-300 italic">
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