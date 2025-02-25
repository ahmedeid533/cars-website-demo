import Link from 'next/link'
import React from 'react'

const FirstLine = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-6 items-start gap-5 lg:gap-1 w-full'>
            <div className='col-span-1 lg:col-span-2 text-custom-black flex flex-col gap-4 w-full'>
                <h2 className='font-bold text-2xl'>My Order</h2>
                <div className='flex flex-col gap-1'>
                    <Link href={'#'} className=' text-custom-black font-bold'>Edit Order</Link>
                    <Link href={'#'} className=' text-[#525252]'>Cancel Order</Link>
                    <Link href={'#'} className=' text-[#525252]'>Change Adrees</Link>
                    <Link href={'#'} className=' text-[#525252]'>Delivery Signature Release</Link>
                </div>
            </div>
            <div className='col-span-1 lg:col-span-4 bg-[#F4F3F3] border border-transparent lg:border-[#9D9D9D] p-5 rounded flex flex-col gap-5 w-full lg:w-auto'>
                <h2 className='font-bold text-2xl'>Edit Order</h2>
                <p className='text-sm text-[#525252] w-full lg:w-3/4'>
                    Need to make changes to your order? It{"'"}s simple, choose one of the following menu options, complete the request and you{"'"}re done. As simple as 1-2-3.
                </p>
                <div className='w-full flex justify-center items-center mt-5'>
                    <button className='rounded py-5 bg-custom-blue text-white px-20'>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default FirstLine
