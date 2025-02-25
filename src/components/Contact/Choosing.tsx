import Image from 'next/image'
import React from 'react'

const Choosing = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 items-start'>
            <div className='flex flex-col gap-2 rounded-lg px-5 py-10'>
                <Image src={'/contact/offers.svg'} alt='offers' width={50} height={50} />
                <h3 className='text-custom-black font-bold text-lg'>Special Financing Offers</h3>
                <p className='text-sm text-[#444444]'>
                    Our stress-free finance department that can
                    find financial solutions to save you money.
                </p>
            </div>
            <div className='flex flex-col gap-2 rounded-lg px-5 py-10'>
                <Image src={'/contact/trust.svg'} alt='trust' width={50} height={50} />
                <h3 className='text-custom-black font-bold text-lg'>Trusted Car Dealership</h3>
                <p className='text-sm text-[#444444]'>
                    Our stress-free finance department that can
                    find financial solutions to save you money.
                </p>
            </div>
            <div className='flex flex-col gap-2 rounded-lg px-5 py-10'>
                <Image src={'/contact/pricing.svg'} alt='pricing' width={50} height={50} />
                <h3 className='text-custom-black font-bold text-lg'>Transparent Pricing</h3>
                <p className='text-sm text-[#444444]'>
                    Our stress-free finance department that can
                    find financial solutions to save you money.
                </p>
            </div>
            <div className='flex flex-col gap-2 rounded-lg px-5 py-10'>
                <Image src={'/contact/services.svg'} alt='services' width={50} height={50} />
                <h3 className='text-custom-black font-bold text-lg'>Expert Car Service</h3>
                <p className='text-sm text-[#444444]'>
                    Our stress-free finance department that can
                    find financial solutions to save you money.
                </p>
            </div>

        </div>
    )
}

export default Choosing
