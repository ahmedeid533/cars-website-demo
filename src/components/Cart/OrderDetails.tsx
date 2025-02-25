import { FormControl, InputLabel, OutlinedInput } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const OrderDetails = () => {
    return (
        <div className='my-5 lg:my-0 rounded border border-custom-black p-3 flex flex-col gap-3'>
            <h2 className='capitalize font-bold text-xl text-center'>ORDER Details</h2>
            <div className='flex flex-col gap-4 text-custom-black'>
                <div className='w-full flex pb-3 flex-row items-center justify-between border-b border-b-custom-black'>
                    <h4 className='capitalize'>Subtotal</h4>
                    <p>$565.16</p>
                </div>
                <div className='w-full flex pb-3 flex-row items-center justify-between border-b border-b-custom-black'>
                    <h4 className='capitalize'>Discount</h4>
                    <p>$565.16</p>
                </div>
                <div className='w-full flex pb-3 flex-row items-center justify-between border-b border-b-custom-black'>
                    <h4 className='capitalize'>Texas</h4>
                    <p>$565.16</p>
                </div>
                <div className='w-full flex flex-row items-start justify-between gap-5'>
                    <FormControl className='w-3/4' variant="outlined">
                        <InputLabel htmlFor="Apply Copoun" className='bg-white'>Apply Copoun</InputLabel>
                        <OutlinedInput id="Apply Copoun" type={'text'} className="w-full" label="Apply Copoun" placeholder={'#502314'} />
                    </FormControl>
                    <button className='text-white bg-custom-blue rounded p-3 border border-custom-blue'>Apply</button>
                </div>

            </div>
            <p className='w-3/4 text-custom-blue text-sm'>
                If you use the promo code Seacode, there is a 30% discount.
            </p>
            <Link href={'/payment'} className='w-full bg-custom-blue text-white rounded py-3 text-center'>
                Continue To Check out
            </Link>
        </div>
    )
}

export default OrderDetails
