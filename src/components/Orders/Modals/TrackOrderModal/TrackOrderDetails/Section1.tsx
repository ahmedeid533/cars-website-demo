import React from 'react'

const Section1 = () => {
    return (
        <div className='flex flex-row lg:flex-col gap-5 w-full lg:w-auto justify-between items-end lg:items-start rounded-xl border border-custom-black p-5 lg:border-transparent lg:p-0'>
            <div className='flex flex-col gap-5'>
                <h2 className='text-black text-xl font-bold'>Order Details</h2>
                <div className='flex flex-col gap-2 text-sm'>
                    <span className='block lg:hidden'>Order Status: New Order</span>
                    <span className='block lg:hidden'>Packages in this Order: 1</span>
                    <span className='hidden lg:block'>July 10,204</span>
                    <span className='hidden lg:block'>Order Id : #H3l54S</span>
                </div>
            </div>
            <div className='flex flex-col gap-0 lg:gap-5'>
                <span className='block lg:hidden'>July 10,204</span>
                <span className='block lg:hidden'>Order Id : #H3l54S</span>
                <span className='text-sm hidden lg:block'>Order Status: New Order</span>
                <span className='text-sm hidden lg:block'>Packages in this Order: 1</span>
                <span className='text-sm '>Total Items: 4</span>
            </div>
        </div>
    )
}

export default Section1
