import Image from 'next/image'
import React from 'react'

const SecondProps = () => {
    return (
        <div className='hidden lg:flex flex-col gap-28 text-custom-black bg-[#EEEEEE] rounded py-5 px-8'>
            <h2 className='font-bold text-2xl'>Reviews</h2>
            <ul className='list-disc p-4 flex flex-col gap-24'>
                {
                    new Array(3).fill(1).map((_, index) => (
                        <li className='flex w-full items-center justify-between' key={index}>
                            <div className='w-1/2'>
                                <h3 className='font-bold'>Recommend</h3>
                                <p>RTX® - BLACK WIDOW Satin Black</p>
                                <div className="flex items-center gap-4">
                                    <Image src={'/category_name/four.svg'} alt='four' width={100} height={50} className='object-contain' />
                                    <p className='text-sm text-custom-black'>5 Of 5</p>
                                </div>
                            </div>
                            <div className='w-1/2 text-sm flex flex-col gap-2 text-custom-black'>
                                <p>
                                    Bought these for my wife{"'"}s Elantra. My wifey is happy which means I{"'"}m happy too!
                                </p>
                                <div className='flex items-center gap-2'>
                                    <span className='py-1 px-2 rounded-full bg-[#D9D9D9] text-custom-black font-bold'>C</span>
                                    <p> Posted by Chris (Jacksonville, FL) / August 02, 2023</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SecondProps
