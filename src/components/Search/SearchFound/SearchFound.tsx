import CustomItemsContainer from '@/components/Home/TabsAndItems/CustomItemsContainer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type props = {
    car_model: string | null,
    car_year: string | null,
    car_series: string | null
}
const SearchFound = ({ car_model, car_year, car_series }: props) => {
    return (
        <div className='flex flex-col gap-10 custom-container1 pb-20'>
            <div className='flex flex-row items-center gap-20 mt-10'>
                <h2 className='w-1/2 font-bold text-xs md:text-lg'>{car_year} {car_model} {car_series} Accessories & Parts</h2>
                <Link href={"#"} className='bg-white px-1 lg:px-5 py-2 border border-custom-blue rounded w-1/2 font-bold text-custom-blue text-xs md:text-base text-center'>Shop By Size</Link>
            </div>
            <div className='relative w-full h-[30vh] lg:h-[50vh]'>
                <Image src={'/search/item.png'} alt={`${car_year} ${car_model} ${car_series}`} fill className='object-contain lg:object-cover' />
            </div>
            <div className='flex flex-col gap-3 mt-5 text-center'>
                <h3 className='font-bold text-4xl'>Top Categories</h3>
                <p className='text-custom-gray text-sm'>{car_year} {car_model} {car_series}</p>
            </div>
            <CustomItemsContainer value={0} name={''} />
        </div>
    )
}

export default SearchFound