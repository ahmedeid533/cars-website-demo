import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ConfirmedOrders = () => {
    return (
        <div
            className='col-span-2 p-5 border border-[#A4A4A4] rounded flex flex-col gap-5'
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        >
            <h2 className='text-xl font-bold text-custom-black'>Confirmed Orders</h2>
            <div className='grid grid-cols-2 lg:grid-cols-3 items-center gap-x-3 gap-y-5'>
                {
                    [1, 2, 3, 4, 5, 6].map((index) => (
                        <div
                            key={index}
                            className='p-5 rounded relative flex flex-col gap-5 text-custom-black'
                            style={{ boxShadow: "0px 2px 5px 0px #00000040" }}
                        >
                            <div className='flex items-center justify-center'>
                                <Image src={'/item.jpg'} alt='item' width={200} height={200} className='object-cover' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h4 className='text-xs lg:text-base'>Side Folding Mirror Motor W5</h4>
                                <p className='font-bold text-xs lg:text-base'>$199</p>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <Link href={`/orders/${index+1}`} className="text-center text-xs lg:text-base w-full rounded py-3 border border-custom-black capitalize text-custom-black transition duration-300 hover:bg-custom-blue hover:border-custom-blue hover:text-white">
                                    view order details
                                </Link>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='flex items-end justify-end w-full'>
                <Link href={'/orders'} className='cursor-pointer text-custom-blue'>View All Orders</Link>
            </div>
        </div>
    )
}

export default ConfirmedOrders
