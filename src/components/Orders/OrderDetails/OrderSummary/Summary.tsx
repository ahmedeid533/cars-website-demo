import { Divider } from '@mui/material'
import React from 'react'

const Summary = () => {
    return (
        <div className='border border-custom-black rounded px-10 py-16 flex flex-col gap-5'>
            <h2 className='font-bold text-4xl text-custom-black'>ORDER SUMMARY</h2>
            <p className='text-sm font-light text-[#4F4F4F]'>4 items in your Cart </p>
            <Divider />
            <div className='flex flex-row items-center w-full justify-between'>
                <h4 className='font-bold text-xl text-custom-black'>Subtotal</h4>
                <h4 className='text-custom-blue text-xl font-bold'>$565.16</h4>
            </div>
            <Divider />
            <div className='flex flex-row items-center w-full justify-between'>
                <h4 className='font-bold text-xl text-custom-black'>Discount</h4>
                <h4 className='text-custom-blue text-xl font-bold'>$565.16</h4>
            </div>
            <Divider />
            <div className='flex flex-row items-center w-full justify-between'>
                <div>
                    <h4 className='font-bold text-xl text-custom-black'>Total</h4>
                    <p className='text-sm font-light text-[#4F4F4F]'>Including $2.24 in taxes</p>
                </div>
                <h4 className='text-custom-blue text-2xl font-bold'>$565.16</h4>
            </div>
        </div>
    )
}

export default Summary
