import Image from 'next/image'
import React from 'react'

const Notes = () => {
    return (
        <div className='custom-container2 py-10'>
            <div className="items-start gap-5 grid grid-cols-1 md:grid-cols-2">
                <div className='relative flex flex-col gap-2 bg-custom-blue p-5 rounded lg:h-[150px] text-white hfull'>
                    <Image src={'/about/vision.svg'} alt='vision' width={20} height={20} />
                    <h2 className='font-bold'>Our Vision</h2>
                    <p className='font-light text-sm'>
                        We offer the online shopper a one-stop digital commerce platform with the largest selection of
                        automotive parts and accessories available anywhere.
                    </p>
                </div>
                <div className='relative flex flex-col gap-2 bg-custom-blue p-5 rounded lg:h-[150px] text-white hfull'>
                    <Image src={'/about/mission.svg'} alt='mission' width={20} height={20} />
                    <h2 className='font-bold'>Our Mission</h2>
                    <p className='font-light text-sm'>
                        We appeal to the automotive enthusiast, from novice to expert, with an attractive, thorough, and easy-
                        to-use website. Whether it’s repair parts they need or accessories they want
                    </p>
                </div>
                <div className='flex flex-col gap-2 bg-custom-blue p-5 rounded text-white'>
                    <h2 className='font-bold'>Who Are we</h2>
                    <p className='font-light text-sm'>
                        We are a company that is interested in selling 3RABITK and all the accessories related to it
                        with all kinds of all kinds in proportion to your car and design and we always strive to develop
                        ourselves and move forward to achieve ease and development for you in the best places the requirements
                        of the market and life our journey has started with you and continues until the moment that we always strive to provide help
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-5 p-5 rounded w-full text-custom-black'>
                    <h2 className='font-bold'>Follow Us</h2>
                    <div className='flex items-center gap-4'>
                        <Image src={'/about/facebook.svg'} alt='facebook' width={50} height={50} className='cursor-pointer' />
                        <Image src={'/about/youtube.svg'} alt='youtube' width={50} height={50} className='cursor-pointer' />
                        <Image src={'/about/instagram.svg'} alt='instagram' width={70} height={70} className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes
