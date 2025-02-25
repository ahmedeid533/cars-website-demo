import Link from 'next/link'
import React from 'react'

const Links = () => {
    return (
        <div className='flex items-center text-[#8C8C8C] text-sm'>
            <Link className='pr-4 border-r border-r-[#8C8C8C]' href={'#'}>Home</Link>
            <Link className='px-4 border-r border-r-[#8C8C8C]' href={'#'}>All Products</Link>
            <Link className='px-4 border-r border-r-[#8C8C8C]' href={'#'}>Wheels & Tires</Link>
            <Link className='px-4 ' href={'#'}>Tires</Link>
        </div>
    )
}

export default Links
