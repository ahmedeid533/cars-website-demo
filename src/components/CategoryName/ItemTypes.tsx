import { itemTypes } from '@/mocks/itemTypes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ItemTypes = () => {
    return (
        <section className='flex flex-col gap-6 text-custom-black pt-10 pb-32'>
            <h2 className='text-2xl font-semibold'>Vehicle Wheel</h2>
            <div className="grid grid-cols-5 gap-x-16 gap-y-10 items-center">
                {
                    itemTypes.map((item, index) => (
                        <Link
                            key={index}
                            href={`/product/${index+1}`}
                            className='cursor-pointer flex flex-col items-center justify-center relative gap-2 w-full scale-100 transition duration-300 hover:scale-110'
                        >
                            <Image src={item} alt={item} width={150} height={150} className='object-contain w-[150px] h-[150px]' />
                            <h4 className='text-lg font-light'>Vehicle Wheel</h4>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}

export default ItemTypes
