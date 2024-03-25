/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import Image from 'next/image';
import "../../app/globals.css"

const Header = () => {

  return (
    <div className='relative'>
      <div className="absolute inset-0">
        <Image
          height={2000}
          width={2000}
          alt=''
          src={"/images/purplebg.png"}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div className='relative h-screen sm:pt-16 pt-10 sm:mx-16 mx-6'>
        <div className='flex item center justify-center'>
          <div className='eurostile animate-slide-up'>
            <h5 className='sm:text-[18px] text-[15px]'>Hello I'm</h5>
            <h1 className='sm:text-[28px] text-[22px] mt-3 sm:-ml-12 -ml-8 font-medium'> D N SINGH</h1>
          </div>
        </div>
        <div className='flex item center justify-center eurostile mt-3 sm:text-[16px] text-[14px] animate-slide-up'>
          <div>A Full Stack Developer with a solid background in JavaScript technology stacks such as ReactJS, Vue.js and Node.js </div>
        </div>

        <div className='sm:mt-16 mt-8'>
          <CTA />
          <HeaderSocials />
        </div>

        <div>
          <a href='#contact' className='absolute right-0 bottom-[65px] transform rotate-90 font-light text-sm -mr-8'>Scroll Down</a>
        </div>

        <div className="flex justify-center sm:mt-16 mt-8">
          <div className="rounded-t-full rounded-b-sm overflow-hidden animate-slide-up">
            <Image
              height={2000}
              width={2000}
              alt=""
              src={"/images/me-about.png"}
              className="h-[100%] sm:w-[30vw] w-[68vw] object-cover"
            // style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>


      </div>
    </div>

  );
}

export default Header;
