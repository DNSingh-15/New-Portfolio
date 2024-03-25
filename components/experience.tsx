import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import "../app/globals.css"

const Experience = () => {
    return (
        <section id="experience" className="py-16">

            <div className='flex item center justify-center'>
                <div className='eurostile animate-slide-up'>
                    <h5 className='sm:text-[18px] text-[15px] ml-7 sm:ml-0'>What Skills I Have</h5>
                    <h1 className='sm:text-[30px] text-[24px] -ml-4 sm:-ml-16 font-medium mt-3'>MY EXPERIENCE</h1>
                </div>
            </div>

            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 eurostile sm:mt-12 mt-8 animate-slide-up">
                {/* Languages */}
                <div className="bg-[#120b29] rounded-xl p-6 hover:border-[#5F00F1] transition-all hover:bg-transparent border border-transparent">
                    <h3 className="text-center sm:text-2xl text-xl mb-6">Languages</h3>
                    <div className="grid grid-cols-2 gap-8 text-[13px] sm:text-[16px]">
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>HTML</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>CSS</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Javascript</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Typescript</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Python</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Go</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>YAML</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Markdown</div>
                        </div>
                    </div>
                </div>


                {/* Frontend */}
                <div className="bg-[#120b29] rounded-xl p-6 hover:border-[#5F00F1] transition-all hover:bg-transparent border border-transparent">
                    <h3 className="text-center sm:text-2xl text-xl mb-6">FRONTEND DEVELOPMENT</h3>
                    <div className="grid grid-cols-2 gap-8 text-[13px] sm:text-[16px]">
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>React.Js</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Next.Js</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Tailwind CSS</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Material UI</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Vue.Js</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Nuxt.Js</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Vuetify</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Axios</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>WordPress</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>JQuery</div>
                        </div>
                    </div>
                </div>

                {/* Backend */}
                <div className="bg-[#120b29] rounded-xl p-6 hover:border-[#5F00F1] transition-all hover:bg-transparent border border-transparent">
                    <h3 className="text-center sm:text-2xl text-xl mb-6">BACKEND DEVELOPMENT</h3>
                    <div className="grid grid-cols-2 gap-8 text-[13px] sm:text-[16px]">
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Node.js</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Express.Js</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>JWT</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>MQTT</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>WebSocket</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>AWS</div>
                        </div>
                    </div>
                </div>

                {/* Database */}
                <div className="bg-[#120b29] rounded-xl p-6 hover:border-[#5F00F1] transition-all hover:bg-transparent border border-transparent">
                    <h3 className="text-center sm:text-2xl text-xl mb-6">Database and Others</h3>
                    <div className="grid grid-cols-2 gap-8 text-[13px] sm:text-[16px]">
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>MongoDB</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Firebase</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Git</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Jira</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Bitbucket</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Agile methodology</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#4e33a9]'/>
                            <div className='ml-2 -mt-1'>Vercel</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Experience;