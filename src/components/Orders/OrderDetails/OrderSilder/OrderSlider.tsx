"use client"
import Image from 'next/image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ExtensionIcon from '@mui/icons-material/Extension';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderArrowsRef from './SliderArrowsRef';
import SliderArrowBtns from './SliderArrowBtns';
import { orderSliderConfig } from './orderSliderConfig';


const OrderSlider = () => {
    const { sliderRef, handleNext, handlePrev } = SliderArrowsRef()
    return (
        <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-xl text-custom-black'>Your Items </h2>
            <div className="slider-container relative">
                <Slider {...orderSliderConfig} ref={sliderRef}>
                    {
                        [1, 2, 3, 4, 5, 6].map((index) => (
                            <div key={index} className='custom-container1' >
                                <div
                                    className='rounded flex flex-col'
                                    style={{ boxShadow: "0px 2px 5px 0px #00000040" }}
                                >
                                    <div className='flex items-center justify-center pt-5'>
                                        <Image src={'/item.jpg'} alt='item' width={200} height={200} />
                                    </div>
                                    <div className='p-3 mt-10 flex flex-col gap-4 text-custom-black'>
                                        <h2 className='w-full text-sm font-bold'>
                                            Side Folding Mirror Motor W5
                                        </h2>
                                        <div className='flex flex-row gap-2 items-center'>
                                            <EventNoteIcon className='text-custom-black' />
                                            <span className='text-sm'>#15H8523</span>
                                        </div>
                                        <div className='flex flex-row gap-2 items-center'>
                                            <ScheduleIcon className='text-custom-black' />
                                            <span className='text-sm'>15 / 6 / 2024 </span>
                                        </div>
                                        <div className='flex flex-row gap-2 items-center'>
                                            <ExtensionIcon className='text-custom-black' />
                                            <span className='text-sm'> 3 pieces</span>
                                        </div>
                                        <div className='flex flex-row gap-2 items-center'>
                                            <MonetizationOnOutlinedIcon className='text-custom-black' />
                                            <span className='text-sm'>$199</span>
                                        </div>
                                    </div>
                                    <h2 className=' p-3 w-full text-sm font-bold text-custom-blue'>
                                        Subtotal : $500
                                    </h2>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
                <SliderArrowBtns handleNext={handleNext} handlePrev={handlePrev} />
            </div>
        </div>
    )
}

export default OrderSlider
