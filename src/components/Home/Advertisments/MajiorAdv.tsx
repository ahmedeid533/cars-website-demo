import Link from 'next/link'
import React from 'react'

const MajiorAdv = ({ backgroundImage }: { backgroundImage: string }) => {
    return (
        <div className={`${backgroundImage} bg-cover bg-center bg-no-repeat h-[208px] w-1/2 lg:w-full`}>
            <div className='bg-[#00000033] h-full flex flex-col gap-4 items-center justify-center text-white'>
                <h3 className='font-bold text-base lg:text-lg w-full lg:w-2/3 text-center'>The best Accsserios available Now</h3>
                <Link href={"#"} className='bg-custom-blue text-white rounded px-3 lg:px-10 py-3 font-bold text-sm'>SHOP NOW</Link>
            </div>
        </div>
    )
}

export default MajiorAdv