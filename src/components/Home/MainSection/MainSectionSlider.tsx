"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { mainSectionDisplayData } from "@/mocks/mainSectionDisplayData";
import Image from "next/image";
import SliderArrowsRef from "./SliderArrowsRef";
import SliderArrowBtns from "./SliderArrowBtns";

const settings = {
    dots: false,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    cssEase: "linear"
};
const MainSectionSlider = () => {
    const { sliderRef, handleNext, handlePrev } = SliderArrowsRef()
    return (
        <div className=" w-full">
            <Slider {...settings} ref={sliderRef}>
                {
                    mainSectionDisplayData.map((section, index) => (
                        <section
                            key={index}
                            className={`h-[50vh] w-full bg-no-repeat bg-cover bg-center`}
                        >
                            <Image src={section.image} alt={section.image} fill className="z-10 relative object-cover" />
                            <div className='bg-[#00000066] w-full  h-full flex  justify-center py-20 z-20 relative'>
                                <div className='flex flex-col gap-2 items-center justify-center text-center text-white'>
                                    {
                                        section.h1 &&
                                        <h1 className='mb-0 md:mb-2 text-3xl md:text-6xl font-bold'>{section.h1}</h1>
                                    }
                                    <div>
                                        <h2 className={`text-lg md:text-2xl font-semibold flex flex-row" items-center gap-2`}>
                                            <span className={index !== 0 ? "text-white" : "text-custom-blue"}> {section.h2.title}</span>
                                            <span className={index !== 0 ? "text-custom-blue" : "text-white"}>{section.h2.special}</span>
                                        </h2>
                                        {
                                            section.h3 &&
                                            <h3 className='text-lg font-semibold'>
                                                {section.h3}
                                            </h3>
                                        }
                                    </div>
                                    <p className='w-2/3 md:w-3/4 text-sm leading-[1.3]'>
                                        {section.p}
                                    </p>
                                    <Link href={'#'} className='rounded-lg bg-custom-blue mt-5 text-white px-20 py-2'>Book Now</Link>
                                </div>
                            </div>
                        </section>
                    ))
                }
            </Slider>
            <SliderArrowBtns handleNext={handleNext} handlePrev={handlePrev} />
        </div >
    )
}

export default MainSectionSlider