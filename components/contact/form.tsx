'use client';

import React, { useState } from 'react';
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

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await emailjs.sendForm('service_4xgpdcp', 'template_95399lb', e.target, 'GEwHwVXmIbUCXxZEx');
            toast.success('Message Sent Successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error('Failed to send message. Please try again later.');
        }
    };

    return (
        <div>
            <ToastContainer />

            <form onSubmit={handleSubmit} className="sm:mt-0 mt-8">
                <div className='flex flex-col space-y-6'>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        required
                        className="px-6 py-6 border border-[#5F00F1] rounded-lg bg-transparent text-white"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="px-6 py-6 border border-[#5F00F1] rounded-lg bg-transparent text-white"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message.."
                        required
                        className="px-6 py-10 border border-[#5F00F1] rounded-lg bg-transparent text-white resize-none"
                    ></textarea>
                </div>

                <div className="mt-10 flex justify-center">
                    <button
                        type='submit'
                        className='sm:px-6 mr-4 px-3 py-2 rounded-xl shadow-lg text-white transition duration-300 ease-in-out transform hover:scale-105'
                        style={{ background: 'linear-gradient(to right, #8e2de2, #4a00e0)' }}
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

