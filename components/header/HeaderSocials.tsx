import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';

const HeaderSocials = () => {
    return (
        <div className='flex flex-col items-center gap-6 absolute left-0 bottom-12'>
            <a href="https://www.linkedin.com/in/%F0%9D%90%83-%F0%9D%90%8D-%F0%9D%90%92%F0%9D%90%88%F0%9D%90%8D%F0%9D%90%86%F0%9D%90%87-49b85b1b2/" target="_blank" className='text-primary text-[14px]'><BsLinkedin /></a>
            <a href='https://github.com/DNSingh-15' target="_blank" className='text-primary text-[14px]'><BsGithub /></a>
            <a href="mailto:asmrdnsingh@gmail.com" target="_blank" className='text-primary text-[14px]'><TfiEmail /></a>
        </div>
    );
}

export default HeaderSocials;
