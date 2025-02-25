import { orderActivities } from '@/mocks/orderActivities'
import Image from 'next/image'
import React from 'react'

const OrderActivities = () => {
    return (
        <div className='pb-10 flex flex-col gap-5'>
            {
                orderActivities.map((act, index) => (
                    <div
                        key={index}
                        className='flex flex-row items-start gap-5 mb-5'
                    >
                        <div className='bg-[#EAF6FE] relative p-2 flex items-center justify-center h-[55px] w-[55px]'>
                            <Image src={act.icon} alt={act.title} width={20} height={20} />
                        </div>
                        <div className='h-[55px] flex flex-col gap-1 justify-between'>
                            <h2 className='text-custom-black'>{act.title}</h2>
                            <p className='text-[#77878F] text-sm'>{act.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default OrderActivities
