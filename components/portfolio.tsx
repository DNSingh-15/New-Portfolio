import React from 'react';
import Image from 'next/image';

const data = [
    {
        id: 1,
        image: "/images/uv.jpg",
        title: "Ultraviolette website ( F77 )",
        link: "https://www.ultraviolette.com/"
    },
    {
        id: 2,
        image: "/images/sunonix.jpg",
        title: "Sunonix website",
        link: "https://sunonix.com/"
    },
    {
        id: 3,
        image: "/images/ceyone.jpg",
        title: "The Ceyone website",
        link: "https://beta.theceyone.com/"
    },
    {
        id: 4,
        image: "/images/portfolio5.png",
        title: "Matrimonial Website",
        github: "https://github.com/DNSingh-15/MWD",
        link: "http://matrimonywebsitedesigners.com/"
    },
    {
        id: 5,
        image: "/images/portfolio3.jpg",
        title: "Realtime Chat Application",
        github: "https://github.com/DNSingh-15/realtime-chat-application",
        link: "https://chat-application123.netlify.app/"
    },
    {
        id: 6,
        image: "/images/portfolio6.jpg",
        title: "Weather App",
        github: "https://github.com/DNSingh-15/React-Weather-App",
        link: "https://weather-application12.netlify.app"
    }
];

const Portfolio = () => {
    return (
        <div className='relative'>
            <div className="absolute inset-0">
                <Image
                    height={2000}
                    width={2000}
                    alt=''
                    src={"/images/purplebg2.png"}
                    style={{ height: "100%", width: "100%" }}
                    className='sm:-mt-[100px] -mt-[100px]'
                />
            </div>
            <div className="py-16 sm:mx-16 mx-6">

                <div className='flex item center justify-center'>
                    <div className='eurostile'>
                        <h5 className='sm:text-[18px] text-[15px]'>My Recent Work</h5>
                        <h1 className='sm:text-[30px] text-[24px] ml-3 font-medium mt-3'>Portfolio</h1>
                    </div>
                </div>

                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:mt-12 mt-8 eurostile">
                    {data.map(({ id, image, title, link }) => (
                        <div key={id} className="portfolio_item rounded-xl p-6 transition-all hover:bg-transparent border border-transparent bg-[#120b29] hover:border-[#5F00F1]">
                            <div className="portfolio_item-image h-80 overflow-hidden animate-slide-up">
                                <Image
                                    height={2000}
                                    width={2000}
                                    alt={title}
                                    src={image}
                                    className="w-full h-auto rounded-xl"
                                />
                            </div>
                            <div className="text-center animate-slide-up">
                                <h3 className="text-xl font-semibold my-4">{title}</h3>
                                <div className="flex justify-center items-center">
                                    <a href={link} target="_blank" className='text-[12px] sm:text-[14px] sm:px-5 mr-4 px-3 py-2 rounded-xl shadow-lg text-white transition duration-300 ease-in-out transform hover:scale-105' style={{ background: 'linear-gradient(to right, #8e2de2, #4a00e0)' }}>Link</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
