import { additionalItems } from '@/mocks/additionalItems'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AdditionalItems = () => {
    return (
        <div className='flex flex-col gap-6 text-custom-black'>
            <h2 className='text-xl font-bold'>Additional Products</h2>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-x-5 md:gap-x-16 gap-y-5 md:gap-y-10'>
                {
                    additionalItems.map((item, index) => (
                        <Link
                            key={index}
                            href={`product/${index + 1}`}
                            className='h-[20vh] lg:h-[30vh] w-full items-center justify-center flex flex-col gap-3 scale-100 transition duration-300 hover:scale-110'
                        >
                            <Image src={item.image} alt={item.title} width={200} height={200} className='object-contain w-[80px] lg:w-[200px] h-[100px] lg:h-[200px]' />
                            <h3 className='text-xs lg:text-base text-center'>{item.title}</h3>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default AdditionalItems
