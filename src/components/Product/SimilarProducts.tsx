import { additionalItems } from '@/mocks/additionalItems'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SimilarProducts = () => {
    return (
        <div className='custom-container1 flex flex-col gap-6 text-custom-black py-10'>
            <h2 className='text-xl font-bold'>Similar Products</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-x-0 gap-y-0 lg:gap-x-16 lg:gap-y-10'>
                {
                    additionalItems.map((item, index) => (
                        <Link
                            key={index}
                            href={`product/${index + 1}`}
                            className='h-[30vh] w-full items-center justify-center flex flex-col gap-3 scale-100 transition duration-300 hover:scale-110'
                        >
                            <Image src={item.image} alt={item.title} width={200} height={200} className='object-contain  w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]' />
                            <h3>{item.title}</h3>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default SimilarProducts
