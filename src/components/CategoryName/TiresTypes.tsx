import { tiers } from '@/mocks/tiers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TiresTypes = () => {
    return (
        <section className='py-10 bg-custom-black my-10'>
            <div className="custom-container1 flex flex-col gap-5">
                <div className='flex items-center text-[#8C8C8C] text-sm'>
                    <Link className='pr-4 border-r border-r-[#8C8C8C]' href={'#'}>Home</Link>
                    <Link className='px-4 border-r border-r-[#8C8C8C]' href={'#'}>All Products</Link>
                    <Link className='px-4 border-r border-r-[#8C8C8C]' href={'#'}>Wheels & Tires</Link>
                    <Link className='px-4 ' href={'#'}>Tires</Link>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-white text-2xl font-semibold'>Car & Truck Tires </h2>
                    <div className="grid grid-cols-4 gap-x-16 gap-y-10 items-center">
                        {
                            tiers.map((item, index) => (
                                <Link href={'#'} className='py-5 rounded bg-white flex items-center justify-center relative h-[20vh] w-full' key={index}>
                                    <Image src={item} alt={item} width={260} height={260} className='object-contain' />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TiresTypes
