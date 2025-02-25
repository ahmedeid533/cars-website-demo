import { InputBase } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FirstPart = () => {
    return (
        <div className='custom-container2 py-10'>
            <div className='w-full flex flex-col md:flex-row items-center justify-between gap-y-4'>
                <div className='flex flex-col gap-1 md:gap-4 items-center md:items-start'>
                    <Link href={'/'}>
                        <Image src={'/logoWhite.svg'} alt='logo' width={150} height={50} />
                    </Link>
                    <p className='font-[300] text-[14px]'>Receive pricing updates, shopping tips & more!</p>
                </div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className='w-full md:w-1/3 bg-custom-gray flex flex-row items-center justify-between rounded-full gap-5 py-2 pl-4 pr-2'
                >
                    <InputBase placeholder="Your email address" inputProps={{ 'aria-label': 'email' }} className='w-full text-white' />
                    <button className='bg-custom-blue text-white rounded-full p-3 w-1/2'>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default FirstPart