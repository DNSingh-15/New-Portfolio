'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsInstagram, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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

    const iconVariants = {
        hover: {
            y: -5,
            scale: 1.2,
            color: "#d8b4fe",
            transition: {
                duration: 0.2
            }
        }
    };

    const linkVariants = {
        hover: {
            color: "#d8b4fe",
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <footer className="bg-gradient-to-b from-[#120b29] to-[#1e0f4d] py-16 text-white mt-28 border-t border-[#2a1b5e]">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center"
            >
                <motion.a
                    href="#"
                    variants={itemVariants}
                    className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 block mb-8"
                >
                    D N SINGH
                </motion.a>

                <motion.div
                    variants={containerVariants}
                    className="flex flex-wrap justify-center gap-6 mb-12 text-sm sm:text-base"
                >
                    {['Home', 'About', 'Experience', 'Portfolio', 'Testimonials', 'Contact'].map((item, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <motion.a
                                href={`#${item.toLowerCase()}`}
                                variants={linkVariants}
                                whileHover="hover"
                                className="text-white"
                            >
                                {item}
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    className="flex justify-center gap-8 mb-16 text-2xl"
                >
                    {[
                        { icon: <BsLinkedin />, href: "https://www.linkedin.com/in/d-n-singh-49b85b1b2/" },
                        { icon: <BsGithub />, href: "https://github.com/DNSingh-15" },
                        { icon: <BsInstagram />, href: "https://instagram.com/__dnsingh_15__" },
                        { icon: <BsTwitter />, href: "https://twitter.com/DNSingh_15" }
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            variants={itemVariants}
                            whileHover="hover"
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white"
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="text-gray-300 text-xs sm:text-sm"
                >
                    &copy; {new Date().getFullYear()} D N Singh. All rights reserved.
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;