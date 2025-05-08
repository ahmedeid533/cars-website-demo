import Image from 'next/image'
import React from 'react'
import ProductAddForm from './ProductAddForm';
import { useLocale } from 'next-intl';

const SearchNotFound = () => {
	const locale = useLocale()

  return (
    <div className='custom-container2 pb-10'>
      <div className='py-10 flex flex-col items-center justify-center text-center relative gap-5'>
        <Image src={'/search/not-found.svg'} alt='not-found' width={300} height={300} className='object-contain h-[150px] md:h-[300px] ' />
				<h2 className='font-bold text-2xl md:text-4xl text-custom-black'>{
					locale === 'en' ? "This product is not available now": "هذا المنتج غير متوفر الآن"
				}</h2>
      </div>
      <ProductAddForm />
    </div>
  )
}

export default SearchNotFound