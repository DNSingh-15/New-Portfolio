'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await emailjs.sendForm(
                'service_4xgpdcp',
                'template_95399lb',
                e.target as HTMLFormElement,
                'GEwHwVXmIbUCXxZEx'
            );
            toast.success('Message Sent Successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error('Failed to send message. Please try again later.');
        }
    };

    const inputVariants = {
        focus: {
            borderColor: "#5F00F1",
            boxShadow: "0 0 0 2px rgba(95, 0, 241, 0.2)",
            transition: { duration: 0.2 }
        }
    };

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
        <div className="bg-gradient-to-br from-[#120b29] to-[#1e0f4d] rounded-xl p-8 border border-[#2a1b5e] shadow-lg h-full">
            <ToastContainer position="top-center" />

            <form onSubmit={handleSubmit} className="flex flex-col space-y-6 h-full">
                <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                    className="px-6 py-4 border border-[#2a1b5e] rounded-lg bg-[#120b29] text-white focus:outline-none"
                    whileFocus="focus"
                    variants={inputVariants}
                />

                <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="px-6 py-4 border border-[#2a1b5e] rounded-lg bg-[#120b29] text-white focus:outline-none"
                    whileFocus="focus"
                    variants={inputVariants}
                />

                <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message.."
                    required
                    className="px-6 py-4 border border-[#2a1b5e] rounded-lg bg-[#120b29] text-white resize-none focus:outline-none"
                    rows={5}
                    whileFocus="focus"
                    variants={inputVariants}
                ></motion.textarea>

                <motion.div className="mt-4 flex justify-center">
                    <motion.button
                        type="submit"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium"
                    >
                        Send Message
                    </motion.button>
                </motion.div>
            </form>
        </div>
    );
};

export default ContactForm;