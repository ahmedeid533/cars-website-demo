import { Divider } from '@mui/material'
import React from 'react'

const OrderSummary = () => {
    return (
        <div className='rounded border border-custom-black p-5 flex flex-col gap-10'>
            {/* <div className='hidden lg:flex flex-col gap-2'>
                <h6 className='flex items-center justify-between'>
                    <span>Discount</span><span>$565.16</span>
                </h6>
                <Divider className=' bg-custom-black' />
            </div> */}
            <h2 className='text-xl font-bold text-custom-black'>ORDER SUMMARY</h2>
            <div className='flex flex-col gap-2'>
                <h6>6 items in your Cart</h6>
                <Divider className=' bg-custom-black' />
            </div>
            <div className='flex flex-col gap-2'>
                <h6 className='flex items-center justify-between'>
                    <span>Subtotal</span><span>$565.16</span>
                </h6>
                <Divider className=' bg-custom-black' />
            </div>
            <div className='flex flex-col gap-2'>
                <h6 className='flex items-center justify-between'>
                    <span>Discount</span><span>$565.16</span>
                </h6>
                <Divider className=' bg-custom-black' />
            </div>
            <div className='flex items-center justify-between w-full gap-2'>
                <div className='flex-col flex gap-1'>
                    <h6>Total</h6>
                    <p className='text-sm'>Including $2.24 in taxes</p>
                </div>
                <p className='font-bold text-4xl'>$59.28</p>
            </div>
        </div>
    )
}

export default OrderSummary
