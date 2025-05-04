"use client"
import Link from 'next/link'
import './style.css'
import { Category } from '@/types'
import { useLocale } from 'next-intl'
import { useEffect } from 'react'

const CarCollections = ({ mainCategories }: { mainCategories: Category[] }) => {
	const locale = useLocale()
	useEffect(() => {
		console.log("response.data.data from getMainCategories ==> ", mainCategories);
	}, [mainCategories])
  return (
    <section className='custom-container1'>
      <div className={`grid grid-cols-2 items-center gap-4 md:w-5/6 mx-auto`}>
        {mainCategories?.map((collection, index) => (
          <Link
            href={`/category/${collection.slug}?category_id=${collection.id}`}
            key={index}
            className={`h-[12vh] lg:h-[45vh] w-full bg-no-repeat bg-cover bg-center overflow-hidden`}
            style={{ backgroundImage: `url(${collection.image_url})` }}
          >
            <div className='flex justify-center bg-[#00000066] custom-style w-full h-full'>
              <div className='flex flex-col justify-end items-center gap-5 pb-2 md:pb-[15vh] text-white text-center'>
                <h2 className='text-2xl tracking-widest'>
                  {collection.name[locale === 'en' ? 'en' : 'ar']}
                </h2>
                <p className='font-light text-[#E1E1E1] text-sm uppercase'>
                  all collections
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CarCollections
