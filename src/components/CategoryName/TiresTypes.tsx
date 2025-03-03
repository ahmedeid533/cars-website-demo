import { tiers } from '@/mocks/tiers'
import { SubCategory } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TiresTypes = ({
  brands,
  subCategoryName
}: {
  brands: SubCategory[]
  subCategoryName: string | undefined
}) => {
  return (
    <section className='bg-custom-black my-10 py-10'>
      <div className='flex flex-col gap-5 custom-container1'>
        <div className='flex items-center text-[#8C8C8C] text-sm'>
          <Link className='pr-4 border-r border-r-[#8C8C8C]' href={'/'}>
            Home
          </Link>
          {/* <Link className='px-4 border-r border-r-[#8C8C8C]' href={'#'}>All Products</Link> */}
          <Link className='px-4' href={'#'}>
            {subCategoryName}
          </Link>
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='font-semibold text-white text-2xl'>
            Car & Truck Tires{' '}
          </h2>
          <div className='items-center gap-x-16 gap-y-10 grid grid-cols-4'>
            {brands.map((item, index) => (
              <Link
                href={'#'}
                className='relative flex justify-center items-center bg-white py-5 rounded w-full h-[10vh]'
                key={index}
              >
                <Image
                  src={item.image_url}
                  alt={'brand'}
                  width={260}
                  height={260}
                  className='h-[50px] object-contain'
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TiresTypes
