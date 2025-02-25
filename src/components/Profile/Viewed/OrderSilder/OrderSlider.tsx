"use client"
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderArrowsRef from './SliderArrowsRef';
import SliderArrowBtns from './SliderArrowBtns';
import { orderSliderConfig } from './orderSliderConfig';
import Link from 'next/link';

const OrderSlider = () => {
    const { sliderRef, handleNext, handlePrev } = SliderArrowsRef()
    return (
        <div className="slider-container relative">
            <Slider {...orderSliderConfig} ref={sliderRef}>
                {
                    [1, 2, 3, 4, 5, 6].map((_,index) => (
                        <Link key={index} href={`/product/${index + 1}`} className='custom-container1 transition duration-300 hover:scale-x-105' >
                            <div
                                className='rounded flex flex-col border border-custom-black hover:border-custom-blue'
                            >
                                <div className='flex items-center justify-center pt-5'>
                                    <Image src={`/home/categories/c${index + 3}.png`} alt='item' width={150} height={150} className='w-[150px] h-[150px]' />
                                </div>
                                <div className='p-3 mt-10 flex flex-col gap-4 text-custom-black'>

                                    <div className='flex flex-row gap-2 items-center'>
                                        <Image src={'/profile/rating.svg'} alt='rating' width={100} height={20} />
                                        <span className='text-sm'>(1)</span>
                                    </div>
                                    <h2 className='font-bold'>Side Folding Mirror Motor W5</h2>
                                    <h5 className='font-bold text-xl'>$199 - $250</h5>
                                </div>

                            </div>
                        </Link>
                    ))
                }
            </Slider>
            <SliderArrowBtns handleNext={handleNext} handlePrev={handlePrev} />
        </div>
    )
}

export default OrderSlider
