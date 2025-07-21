import React from 'react';
import bg1 from "../../assets/banner1.png"
import bg2 from "../../assets/banner-2.webp"
import bg3 from "../../assets/banner-3.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <div className=''>
            <Carousel
                // autoPlay
                infiniteLoop
                showArrows
                interval={2000}
                showThumbs={false}
            >
                <div style={{ backgroundImage: `url(${bg1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className=" h-[400px] md:h-[700px] lg:h-[700px] relative">
                    <div className="absolute text-start  greenbg w-11/12 md:w-3/5 lg:w-2/5 space-y-4 p-2 lg:p-[50px] z-1 bottom-[20%] left-2 lg:top-[20%] lg:left-[10%] border-4 border-white rounded-lg lg:rounded-tl-[80px] rounded-br-[80px]">
                        <h1 className='text-white text-xl md:text-3xl lg:text-3xl font-bold'>Unlock a World of Wonder </h1>
                        <span className='text-white text-xl md:text-5xl lg:text-5xl font-bold'>
                            Play, Learn, and Grow with Us!</span><br />
                        <p className='hidden md:block lg:block text-white text-lg'>Engaging video lessons, exciting games, and
                            interactive courses designed for curious young minds, all in English and Arabic!</p>
                        <button className='btn bg-orange-500 text-white hover:text-orange-500 hover:bg-white'>Start Your Adventure Now!
                        </button>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${bg2})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className=" h-[400px] md:h-[700px] lg:h-[700px] relative">
                    <div className="absolute text-start bg-orange-500 w-11/12 md:w-3/5 lg:w-2/5 space-y-4 p-2 lg:p-[50px] z-1 bottom-[20%] right-2 lg:bottom-[10%] lg:right-[10%] border-4 border-white rounded-lg lg:rounded-tl-[80px] rounded-br-[80px]">
                        <h1 className='text-white text-xl md:text-3xl lg:text-3xl font-bold'>Unlock a World of Wonder </h1>
                        <span className='text-white text-xl md:text-5xl lg:text-5xl font-bold'>
                            Play, Learn, and Grow with Us!</span><br />
                        <p className='hidden md:block lg:block text-white text-lg'>Engaging video lessons, exciting games, and
                            interactive courses designed for curious young minds, all in English and Arabic!</p>
                        <button className='btn bg-lime-500 text-white hover:bg-white hover:text-orange-500'>Start Your Adventure Now!
                        </button>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${bg3})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className=" h-[400px] md:h-[700px] lg:h-[700px] relative">
                    <div className="absolute text-start greenbg w-11/12 md:w-3/5 lg:w-2/5  space-y-4 p-2 lg:p-[50px] z-1 bottom-[20%] left-2 lg:bottom-[10%] lg:left-[10%] border-4 border-white rounded-lg lg:rounded-tl-[80px] rounded-br-[80px]">
                        <h1 className='text-white text-xl md:text-3xl lg:text-3xl font-bold'>Unlock a World of Wonder </h1>
                        <span className='text-white text-xl md:text-5xl lg:text-5xl font-bold'>
                            Play, Learn, and Grow with Us!</span><br />
                        <p className='hidden md:block lg:block text-white text-lg'>Engaging video lessons, exciting games, and
                            interactive courses designed for curious young minds, all in English and Arabic!</p>
                        <button className='btn bg-orange-500 text-white hover:text-orange-500 hover:bg-white'>Start Your Adventure Now!
                        </button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;