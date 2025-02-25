import { Radio } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type props = {
    payment: string,
    setPayment: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const PaymentMethod = ({ payment, setPayment }: props) => {
    const controlProps = (item: string) => ({
        checked: payment === item,
        onChange: setPayment,
        value: item,
        name: 'payment',
        id: item,
        inputProps: { 'aria-label': item },
    });
    return (
        <div className='flex flex-col gap-5 w-full'>
            <h2 className='text-xl font-bold text-custom-black'>Payment methods</h2>
            <div className='flex gap-2 lg:gap-4 items-center flex-wrap' >
                <div className='flex items-center gap-2'>
                    <Radio {...controlProps('p4')} color="success" />

                    <label htmlFor='p4' className='flex items-center justify-center p-2 cursor-pointer'>
                        <Image src={'/payment/p3.jpg'} alt='payment' width={100} height={70} className='object-contain w-[100px] h-[60px]' />
                    </label>
                </div>
                <div className='flex items-center gap-2'>
                    <Radio {...controlProps('p1')} color="success" />
                    <label htmlFor='p1' className='flex items-center justify-center p-2 bg-[#862E9C33] cursor-pointer'>
                        <Image src={'/payment/p1.png'} alt='payment' width={100} height={50} className='object-cover w-[100px] h-[40px]' />
                    </label>
                </div>
                <div className='flex items-center gap-2'>
                    <Radio {...controlProps('p2')} color="success" />
                    <label htmlFor='p2' className='flex items-center justify-center p-2 bg-[#FF000B33] cursor-pointer'>
                        <Image src={'/payment/p2.png'} alt='payment' width={100} height={50} className='object-cover w-[100px] h-[40px]' />
                    </label>
                </div>
                <div className='flex items-center gap-2'>

                    <Radio {...controlProps('p3')} color="success" />

                    <label htmlFor='p3' className='flex items-center justify-center p-2 cursor-pointer bg-[#ebf3fa]'>
                        <Image src={'/payment/visa.svg'} alt='payment' width={100} height={70} className='object-cover w-[100px] h-[40px]' />
                    </label>
                </div>

            </div>
        </div>
    )
}

export default PaymentMethod
