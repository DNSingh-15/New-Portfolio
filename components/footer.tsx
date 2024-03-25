import Image from 'next/image';
import React from 'react';
import { BsInstagram, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='relative'>
            <div className="absolute inset-0">
                <Image
                    height={2000}
                    width={2000}
                    alt=''
                    src={"/images/purplebg2.png"}
                    style={{ height: "100%", width: "100%" }}
                />
            </div>

            <div className="bg-primary py-12 text-white text-sm text-center mt-28 eurostile sm:mx-16 mx-6">
                <a href="#" className="text-2xl font-semibold block mb-8 animate-slide-up">D N SINGH</a>
                <div className="flex flex-wrap justify-center lg:gap-8 sm:gap-6 gap-4 mb-12 sm:text-[18px] text-[15px]">
                    <div>
                        <a href="#" className="text-white hover:text-gray-300 cursor-pointer">Home</a>
                    </div>
                    <div>
                        <a href="#about" className="text-white hover:text-gray-300">About</a>
                    </div>
                    <div>
                        <a href="#experience" className="text-white hover:text-gray-300">Experience</a>
                    </div>
                    <div>
                        <a href="#services" className="text-white hover:text-gray-300">Services</a>
                    </div>
                    <div>
                        <a href="#portfolio" className="text-white hover:text-gray-300">Portfolio</a>
                    </div>
                    <div>
                        <a href="#testimonials" className="text-white hover:text-gray-300">Testimonials</a>
                    </div>
                    <div>
                        <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
                    </div>
                </div>
                <div className="flex justify-center gap-10 mb-16 sm:text-[22px] text-[18px]">
                    <a href="https://www.linkedin.com/in/d-n-singh-49b85b1b2/" className="text-white hover:text-gray-300"><BsLinkedin /></a>
                    <a href="https://github.com/DNSingh-15" className="text-white hover:text-gray-300"><BsGithub /></a>
                    <a href="https://instagram.com/__dnsingh_15__?igshid=ZDdkNTZiNTM=" className="text-white hover:text-gray-300"><BsInstagram /></a>
                    <a href="https://twitter.com/DNSingh_15?t=xWdK5Bg918dBMaCp3UDeWQ&s=09" className="text-white hover:text-gray-300"><BsTwitter /></a>
                </div>
                <div className="text-gray-300 sm:text-[16px] text-[14px]">
                    <div>&copy; D N Singh Personal Website. All rights riversed.</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
