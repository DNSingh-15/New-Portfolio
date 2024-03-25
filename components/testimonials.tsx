'use client';

import React from 'react';
import Image from 'next/image';

import "react-slideshow-image/dist/styles.css"
import { Fade, Zoom, Slide } from 'react-slideshow-image'

// do not use the image in production
const data = [
    {
        avatar: "/images/avatar1.jpg",
        name: 'Tina Snow',
        review:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perferendis deserunt iure dignissimos ut aspernatur sint rem placeat a ex. Culpa sequi cum eveniet totam deserunt? Fugit veritatis fugiat quidem!',
    },
    {
        avatar: "/images/avatar2.jpg",
        name: 'Rohan',
        review:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perferendis deserunt iure dignissimos ut aspernatur sint rem placeat a ex. Culpa sequi cum eveniet totam deserunt? Fugit veritatis fugiat quidem!',
    },
    {
        avatar: "/images/avatar4.jpg",
        name: 'John',
        review:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perferendis deserunt iure dignissimos ut aspernatur sint rem placeat a ex. Culpa sequi cum eveniet totam deserunt? Fugit veritatis fugiat quidem!',
    },
    {
        avatar: "/images/avatar2.jpg",
        name: 'Tom Snow',
        review:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perferendis deserunt iure dignissimos ut aspernatur sint rem placeat a ex. Culpa sequi cum eveniet totam deserunt? Fugit veritatis fugiat quidem!',
    },
];

const Testimonials = () => {
    return (
        <div className='relative'>
            <div className="absolute inset-0">
                <Image
                    height={2000}
                    width={2000}
                    alt=''
                    src={"/images/purplebg3.png"}
                    style={{ height: "100%", width: "100%" }}
                />
            </div>

            <div className='sm:mx-16 mx-6'>
                <div className='flex item center justify-center'>
                    <div className='eurostile'>
                        <h5 className='sm:text-[18px] text-[15px]'>Review from clients</h5>
                        <h1 className='sm:text-[30px] text-[24px] -ml-1 font-medium mt-3'>Testimonials</h1>
                    </div>
                </div>

                <div className='sm:mt-12 mt-8 eurostile'>
                    <Fade>
                        {data.map(({ avatar, name, review }, index) => (
                            <div key={index}>
                                <div className="client_avatar w-44 h-44 rounded-full overflow-hidden border-4 border-primary m-auto mb-4 mt-3">
                                    <Image
                                        height={2000}
                                        width={2000}
                                        alt={name}
                                        src={avatar}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className='flex justify-center mt-3'>
                                    <div className="text-lg font-semibold mb-2">{name}</div>
                                </div>
                                <div className='flex justify-center mt-3'>
                                    <div className="text-gray-400 block sm:w-3/4 w-[90%] mx-auto">{review}</div>
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;
