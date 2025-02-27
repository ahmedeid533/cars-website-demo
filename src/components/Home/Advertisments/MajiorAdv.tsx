import Link from 'next/link'
import React from 'react'

const MajiorAdv = ({ backgroundImage, title }: { backgroundImage: string, title: string }) => {
    return (
        <div className={` bg-cover bg-center bg-no-repeat h-[208px] w-1/2 lg:w-full`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
>
            <div className='flex flex-col justify-center items-center gap-4 bg-[#00000033] h-full text-white'>
                <h3 className='w-full lg:w-2/3 font-bold text-base lg:text-lg text-center'>{title}</h3>
                <Link href={"#"} className='bg-custom-blue px-3 lg:px-10 py-3 rounded font-bold text-white text-sm'>SHOP NOW</Link>
            </div>
        </div>
    )
}

export default MajiorAdv