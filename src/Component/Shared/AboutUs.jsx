import React from 'react';
import bg1 from "../../assets/about.jpg"
import { FaReact } from "react-icons/fa";
import { SlBookOpen } from "react-icons/sl";
import { LuPencilRuler } from "react-icons/lu";
import { SlChemistry } from "react-icons/sl";
const AboutUs = () => {
    return (
        <div className='my-[100px]'>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full md:w-9/12 lg:w-9/12 mx-auto p-5">
                <div className="flex justify-end">
                    <div className="w-full  h-full lg:h-9/12 my-auto rounded-2xl border-10 border-lime-500"><img className='w-full h-full rounded-xl' src={bg1} alt="" /></div>
                </div>
                <div className="bg-white p-5 md:p-[40px] lg:p-[40px] space-y-4 rounded-2xl">
                    <p className='text-lg  font-bold text-[#92278F]'>About Our EduGaza</p>
                    <h1 className='text-xl md:text-3xl lg:text-3xl font-bold'>Where Playful Learning Takes Flight!
                    </h1>
                    <p className='text-gray-500 text-sm'>Welcome to a magical place where learning comes alive! Our digital platform is
                        specially crafted for children to explore, discover, and develop new skills through
                        captivating video lessons, fun-filled educational games, and interactive courses.
                        Whether your child loves to learn independently or enjoys group activities, our content is
                        designed to inspire curiosity and foster a lifelong love for knowledge. We believe in making
                        learning an exciting journey, trusted by parents and educators, and loved by kids!
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border-2 rounded-2xl border-gray-200 p-3 space-y-2">
                            <div className="flex items-center gap-2 ">
                                <FaReact className='text-lime-400 text-2xl'></FaReact>
                                <div className="">
                                    <h1 className='text-sm font-bold'>Engaging Learning Environment</h1>
                                </div>
                            </div>
                            <p className='text-xs text-gray-500'>A safe and encouraging space where curiosity leads to discovery.</p>
                        </div>
                        <div className="border-2 rounded-2xl border-gray-200 p-3 space-y-2">
                            <div className="flex items-center gap-2 ">
                                <SlBookOpen className="text-[#92278F] text-2xl font-bold"> </SlBookOpen >
                                <div className="">
                                    <h1 className='text-sm font-bold'>Dual Language Support</h1>
                                </div>
                            </div>
                            <p className='text-xs text-gray-500'>All content available in both English and Arabic for diverse learners.</p>
                        </div>
                        <div className="border-2 rounded-2xl border-gray-200 p-3 space-y-2">
                            <div className="flex items-center gap-2 ">
                                <LuPencilRuler className='text-sky-400 text-2xl'></LuPencilRuler>
                                <div className="">
                                    <h1 className='text-sm font-bold'>Flexible Learning Options</h1>
                                </div>
                            </div>
                            <p className='text-xs text-gray-500'>Perfect for individual play, classroom use, or learning pods.</p>
                        </div>
                        <div className="border-2 rounded-2xl border-gray-200 p-3 space-y-2">
                            <div className="flex items-center gap-2 ">
                                <SlChemistry className='text-orange-400 text-2xl font-bold'></SlChemistry>
                                <div className="">
                                    <h1 className='text-sm font-bold'>Expert-Designed Content</h1>
                                </div>
                            </div>
                            <p className='text-xs text-gray-500'>Educational materials developed by specialists to ensure quality and effectiveness</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;