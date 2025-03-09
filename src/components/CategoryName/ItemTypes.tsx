import { SubCategory } from '@/types'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ItemTypes = ({
  sub_subCategories
}: {
  sub_subCategories: SubCategory[]
}) => {
  const locale = useLocale()
  return (
    <section className='flex flex-col gap-6 pt-10 pb-32 text-custom-black'>
      <h2 className='font-semibold text-2xl'>Vehicle Wheel</h2>
      <div className='items-center gap-x-16 gap-y-10 grid grid-cols-5'>
        {sub_subCategories?.map((item, index) => (
          <Link
            key={index}
            href={`/product/${item.slug}?id=${item.id}`}
            className='relative flex flex-col justify-center items-center gap-2 w-full scale-100 hover:scale-110 transition duration-300 cursor-pointer'
          >
            <Image
              src={item.image_url}
              alt={item.name[locale === 'en' ? 'en' : 'ar']}
              width={150}
              height={150}
              className='w-[150px] h-[150px] object-contain'
            />
            <h4 className='font-light text-sm text-center'>{item.name[locale === 'en' ? 'en' : 'ar']}</h4>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ItemTypes
