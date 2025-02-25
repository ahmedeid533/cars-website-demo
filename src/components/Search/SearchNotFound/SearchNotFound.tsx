import Image from 'next/image'
import React from 'react'
import ProductAddForm from './ProductAddForm';

const SearchNotFound = () => {

  return (
    <div className='custom-container2 pb-10'>
      <div className='py-10 flex flex-col items-center justify-center text-center relative gap-5'>
        <Image src={'/search/not-found.svg'} alt='not-found' width={300} height={300} className='object-contain h-[150px] md:h-[300px] ' />
        <h2 className='font-bold text-2xl md:text-4xl text-custom-black'>This product is not available now</h2>
      </div>
      <ProductAddForm />
    </div>
  )
}

export default SearchNotFound