import { Divider } from '@mui/material'
import React from 'react'

const Section3 = () => {
    return (
        <div className='flex flex-row lg:flex-col w-full lg:w-auto items-end lg:items-start justify-between lg:justify-start  gap-3 rounded-xl border border-custom-black p-5 lg:border-transparent lg:p-0'>
            <div className='flex flex-col'>
                <h4 className='font-bold mb-4 lg:mb-0'>Order Summary</h4>
                <span className='text-lg'>Subtotal: 120$</span>
                <span className='text-lg'>Shipping: 20$</span>
            </div>
            <div className='flex flex-col gap-1'>
                <span className='text-lg'>Sales Tax: 0$</span>
                <Divider className='bg-black' />
                <div className='w-full flex items-center justify-between'>
                    <span className='text-lg font-bold'>Total</span><span className='text-lg'>140$</span>
                </div>
            </div>
        </div>
    )
}

export default Section3
