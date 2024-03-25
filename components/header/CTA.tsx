/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const CTA = () => {
  return (
    <div className="mt-10 flex justify-center space-x-3 eurostile">

      <a href="/images/DN-CV.pdf" download className='sm:px-6 mr-4 px-3 py-2 rounded-xl shadow-lg text-white transition duration-300 ease-in-out transform hover:scale-105' style={{ background: 'linear-gradient(to right, #8e2de2, #4a00e0)' }}>Download CV</a>

      <div className='mt-[7px]'>
        <a href="#contact" className='text-white transition duration-300 ease-in-out transform hover:scale-105 sm:text-[18px] text-[16px]'>Let's Talk</a>
      </div>

    </div>
  );
}

export default CTA;
