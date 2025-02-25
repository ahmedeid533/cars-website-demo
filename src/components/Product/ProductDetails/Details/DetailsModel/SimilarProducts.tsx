"use client"
import Image from 'next/image'
import CheckIcon from '@mui/icons-material/Check';
import Link from 'next/link';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { Box } from '@mui/material';

const SimilarProducts = () => {
    const [counter, setCounter] = useState(1);
    const similar = ['/category_name/a1.png', '/category_name/a2.png', '/category_name/a3.png', '/category_name/a4.png']
    return (
        <div className='custom-container1 flex flex-col gap-6'>
            {
                similar.map((item, index) => (
                    <div key={index} className='flex items-center justify-between relative gap-5'>
                        <Image src={item} alt='product' width={100} height={100} className='hidden lg:block w-1/4 object-contain h-[20vh]' />
                        <div className='w-full lg:w-3/4 text-custom-black border rounded border-custom-black p-0 lg:p-4 flex flex-col gap-6 relative'>
                            <Box className='block lg:hidden py-5' sx={{ background: { xs: "linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(200, 200, 200, 0.35) 100%)", lg: "transparent" } }}>
                                <Image src={item} alt='product' width={300} height={300} className='w-full lg:w-1/4 object-contain h-[30vh]' />
                            </Box>
                            <div className='flex flex-col gap-3 p-5 lg:p-0'>
                                <h2 className='text-2xl font-semibold uppercase'>BLACK WIDOW Wheels</h2>
                                <div>
                                    <h4 className='underline font-semibold text-lg'>Description</h4>
                                    <p className='text-sm w-3/4'>
                                        BLACK WIDOW Satin Black Wheels by RTX®. Upgrade your vehicle with sharp-looking black wheels without breaking the bank! RTX Black Widow rims blend style, performance, and durability. Engineered to stand up to the industry’s most demanding standards, these wheels boast a high-strength low pressure cast build verified by numerous tests.
                                    </p>
                                </div>
                                <div className='w-full flex flex-wrap lg:grid grid-cols-5 items-center gap-5'>
                                    <div className='flex lg:grid grid-cols-3 flex-row items-start w-full gap-4 col-span-3'>
                                        <div className='flex col-span-2 items-center w-full justify-center gap-3 px-2 py-4 rounded border border-custom-black'>
                                            <CheckIcon className='text-2xl text-white bg-custom-blue rounded-full ' />
                                            <span>Subtotal: $565.16</span>
                                        </div>
                                        <div className='w-full flex items-center justify-between border border-custom-black text-custom-black px-2 rounded py-4 text-center'>
                                            <div className='cursor-pointer' onClick={() => setCounter(counter - 1)}>
                                                <RemoveIcon />
                                            </div>
                                            <span className='font-bold'>{counter}</span>
                                            <div className='cursor-pointer' onClick={() => setCounter(counter + 1)}>
                                                <AddIcon />
                                            </div>
                                        </div>
                                    </div>
                                    <Link href={'/cart'} className=' col-span-2 uppercase rounded w-full border border-custom-blue bg-custom-blue py-4 text-white text-center'>
                                        Add To Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SimilarProducts
