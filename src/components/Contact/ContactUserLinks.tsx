import { Divider } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactUserLinks = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full items-start gap-5'>
            <div className='p-5 rounded border border-custom-black flex flex-col gap-3 h-[300px]'>
                <div className='flex items-center gap-3 relative'>
                    <Image src={'/contact/account.svg'} alt='account' width={30} height={30} />
                    <h3 className='font-bold text-lg'>My Account</h3>
                </div>
                <Divider className='w-full' />
                <Link href={'#'} className='text-custom-blue'>Login</Link>
                <Link href={'#'} className='text-custom-blue'>Create Account</Link>
                <Link href={'#'} className='text-custom-blue'>Forgot Password</Link>
            </div>
            <div className='p-5 rounded border border-custom-black flex flex-col gap-3 h-[300px]'>
                <div className='flex items-center gap-3 relative'>
                    <Image src={'/contact/orders.svg'} alt='orders' width={30} height={30} />
                    <h3 className='font-bold text-lg'>My Orders</h3>
                </div>
                <Divider className='w-full' />
                <Link href={'#'} className='text-custom-blue'>Track My Order</Link>
                <Link href={'#'} className='text-custom-blue'>Edit Order</Link>
                <Link href={'#'} className='text-custom-blue'>Cancel Order</Link>
                <Link href={'#'} className='text-custom-blue'>Change Address</Link>
                <Link href={'#'} className='text-custom-blue'>Delivery Signature Release</Link>
            </div>
        </div>
    )
}

export default ContactUserLinks
