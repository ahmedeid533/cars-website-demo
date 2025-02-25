import { Divider } from '@mui/material'
import React from 'react'

const SecondSection = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className='flex flex-col gap-5 w-3/4 mt-10'>
                <div className='flex flex-col gap-2 w-full'>
                    <h6 className='w-full grid grid-cols-3 items-center justify-between text-center font-bold'>
                        <span>Quantity</span><span>Price</span><span>Amount</span>
                    </h6>
                    <Divider className='w-full bg-custom-gray' />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <h6 className='w-full grid grid-cols-3 items-center justify-between text-center'>
                        <span>5</span><span>$ 900</span><span>$ 45,000</span>
                    </h6>
                    <Divider className='w-full bg-custom-gray' />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <h6 className='w-full grid grid-cols-3 items-center justify-between text-center'>
                        <span>1</span><span>$ 50,000</span><span>$ 50,000</span>
                    </h6>
                    <Divider className='w-full bg-custom-gray' />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <h6 className='w-full grid grid-cols-3 items-center justify-between text-center'>
                        <span>1</span><span>$ 0</span><span>$ 0</span>
                    </h6>
                    <Divider className='w-full bg-custom-gray' />
                </div>
            </div>
        </div>
    )
}

export default SecondSection
