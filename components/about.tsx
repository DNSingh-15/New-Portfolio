/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import Image from 'next/image';

const About = () => {
    return (
        <div id='about'>
            <div className='flex item center justify-center animate-slide-up'>
                <div className='eurostile'>
                    <h5 className='sm:text-[18px] text-[15px]'>Get To Know</h5>
                    <h1 className='sm:text-[30px] text-[24px] -ml-4 sm:-ml-5 font-medium mt-3'> About Me</h1>
                </div>
            </div>

            <div className="flex justify-between gap-8 sm:mt-12 mt-8 eurostile">
                <div className="sm:w-[100%] animate-slide-up">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <article className="about__card bg-[#120b29] rounded-lg py-14 text-center transition-all hover:bg-transparent border border-transparent hover:border-[#5F00F1]">
                            <FaAward className='text-[#4e33a9] text-4xl mx-auto mb-3' />
                            <h5 className="text-white">EXPERIENCE</h5>
                            <div className="text-gray-400 mt-2">3 + Years Working</div>
                        </article>

                        <article className="about__card bg-[#120b29] rounded-lg py-14 text-center transition-all hover:bg-transparent border border-transparent hover:border-[#5F00F1]">
                            <FiUsers className='text-[#4e33a9] text-4xl mx-auto mb-3' />
                            <h5 className="text-white">CLIENTS</h5>
                            <div className="text-gray-400 mt-2">8 + World Wide</div>
                        </article>

                        <article className="about__card bg-[#120b29] rounded-lg py-14 text-center transition-all hover:bg-transparent border border-transparent hover:border-[#5F00F1]">
                            <VscFolderLibrary className='text-[#4e33a9] text-4xl mx-auto mb-3' />
                            <h5 className="text-white">PROJECTS</h5>
                            <div className="text-gray-400 mt-2">50 + Completed</div>
                        </article>
                    </div>
                    <p className="text-gray-400 sm:mt-8 mt-6">I'm a logical and results-driven Full Stack Developer dedicated to building and optimizing user-focused web applications. Experience in working with Package Management tools such as npm and yarn. Experienced in writing clear, well-documented and commented code for any type of application.</p>

                    <div className='flex item center justify-center'>
                        <a href="#contact" className='sm:mt-8 mt-6 sm:text-[18px] text-[15px]'>Let's Talk</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
