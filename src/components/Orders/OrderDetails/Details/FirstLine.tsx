import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FirstLine = () => {
    return (
        <div className='flex flex-row items-start w-full justify-between'>
            <div className='flex flex-col gap-5 w-full'>
                <div className="flex text-custom-black flex-col gap-1">
                    <h2 className='font-bold text-3xl'>Order Details</h2>
                    <p className='text-sm'>Details of the orders that have been requested</p>
                </div>
                <div className='flex flex-row lg:flex-col  justify-between lg:justify-start gap-5 w-full'>
                    <div className="flex flex-col gap-1">
                        <h2 className='font-bold text-sm lg:text-xl text-custom-black '>Order Number</h2>
                        <p className='text-custom-blue text-xs lg:text-base'>#H452B3</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className='font-bold text-sm lg:text-xl text-custom-black '>Order Address</h2>
                        <p className='text-custom-blue text-xs lg:text-base w-full lg:w-1/2 font-normal md:font-bold'>12 Mohamed Nagimb Street </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className='font-bold text-sm lg:text-xl text-custom-black '>Paid by</h2>
                        <Image src={'/orders/visa.svg'} alt='visa' width={60} height={60} />
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex rounded-xl p-4 flex-col gap-3 w-1/3 bg-white text-custom-black'>
                <h5 className='font-bold text-xl'>Notes</h5>
                <p className='text-sm font-bold mb-2'>
                    This order was shipped through our website.
                    Please contact support if you encounter a
                    problem This order was shipped through our website. Please contact support if you encounter a problem.
                </p>
                <Link href={'#'} className='w-full p-2 text-center bg-[#E8E8E8] rounded-lg text-lg font-bold'>
                    Edit
                </Link>
            </div>
        </div>
    )
}

export default FirstLine
