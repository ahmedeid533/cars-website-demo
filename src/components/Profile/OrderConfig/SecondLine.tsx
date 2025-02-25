import Link from 'next/link'
import React from 'react'

const SecondLine = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-6 items-start w-full gap-5 lg:gap-0'>
            <div className='col-span-2 text-custom-black flex flex-col gap-4'>
                <h2 className='font-bold text-2xl'>Easy Return</h2>
                <div className='flex flex-col gap-1'>
                    <Link href={'#'} className='text-custom-black font-bold'>Exchange Items</Link>
                    <Link href={'#'} className='text-[#525252]'>Return Items </Link>
                    <Link href={'#'} className='text-[#525252]'>Status of return</Link>
                </div>
            </div>
            <div className='col-span-4 bg-[#F4F3F3] border border-[#9D9D9D] p-5 rounded flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-custom-black'>1. Submit a request</h3>
                    <p className='text-custom-gray'>Click {'"'}submit a request{'"'} button below and fill out the form</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-custom-black'>2. Receive return authorization</h3>
                    <p className='text-custom-gray'>Receive return authorization (RA) form with the exact return address and a shipping label (may take 24-72 hours)</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-custom-black'>3. Ship it back</h3>
                    <p className='text-custom-gray'>Print and attach the provided UPS shipping label as well as the RA form to the outside of the box</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-custom-black'>4. Receive replacements</h3>
                    <p className='text-custom-gray'>Once the merchandise is received your replacements will be shipped within 48 hours</p>
                </div>
                <div className='w-full flex justify-center items-center mt-5'>
                    <button className='rounded py-5 bg-custom-blue text-white px-20'>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default SecondLine
