'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { carModels } from '@/mocks/carModels'
import Image from 'next/image'
import { Logo } from '@/types'

const CarModels = ({logos}: { logos: Logo[] }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: carModels.length,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: carModels.length,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <section className='custom-container1 py-5'>
      <div className='slider-container'>
        <Slider
          {...settings}
          className={`grid grid-cols-12 items-center gap-10`}
        >
          {logos?.map((logo, index) => (
            <div key={index} title={logo.brand_name} >
              <div className='flex justify-center items-center gap-5 w-auto h-auto'>
                <Image
                  src={logo.image_url}
                  alt={logo.brand_name}
                  width={70}
                  height={70}
                  className='w-[70px] h-[70px] object-contain'
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default CarModels
