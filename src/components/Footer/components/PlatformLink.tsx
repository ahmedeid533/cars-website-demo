import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

type props = {
    text1: string,
    text2: string,
    imagePath: string
}
const PlatformLink = ({ text1, text2, imagePath }: props) => {
    return (
        <Link href={'#'} className='bg-custom-gray text-white flex flex-row items-center gap-0 lg:gap-4 pl-6 pr-6 lg:pr-12 py-3 rounded-full lg:rounded-3xl'>
            <Image src={imagePath} alt='icon' width={30} height={30} />
            <div className='hidden lg:flex flex-col'>
                <span className='font-[100] text-[12px]'>{text1}</span>
                <h5 className='font-[500] text-[15px]'>{text2}</h5>
            </div>
        </Link>
    )
}

export default PlatformLink