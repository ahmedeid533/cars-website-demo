"use client";
import React, { useState } from 'react'
import CustomTabs from './CustomTabs'
import Image from 'next/image';
import OrderInfo from './OrderInfo';
import OrderOptions from './OrderOptions';
import { Box, Divider } from '@mui/material';

const Orders = () => {
    const [value, setValue] = useState(0);
    const status = ['paid', 'paid', 'cancelled', 'paid', 'paid', 'cancelled'];

    return (
        <>
            <CustomTabs value={value} setValue={setValue} />
            <Divider />
            <div className="custom-container1 flex flex-col gap-5 py-10">
                <div className='flex flex-col gap-1'>
                    <h2 className='font-bold text-2xl text-custom-black'>Order History</h2>
                    <p className='text-sm text-custom-gray'>Mange your recent orders and invoices</p>
                </div>
                <div className='flex flex-col gap-10'>
                    {
                        status.map((order, index) => (
                            <Box
                                key={index}
                                className='p-5 grid grid-cols-1 lg:grid-cols-8 items-center w-full gap-y-3 lg:gap-y-0 gap-x-0 lg:gap-x-2 relative'
                                sx={{ boxShadow: { xs: "none", lg: "0px 4px 4px 0px #00000040" } }}
                            >
                                <div className='flex flex-col lg:flex-row col-span-5 items-center justify-center rounded-xl border border-custom-blue lg:border-transparent'>
                                    <Image src={'/item.jpg'} alt='item' width={200} height={200} className='object-contain w-[200px] h-[200px] col-span-1' />
                                    <Divider className='bg-custom-black w-full block lg:hidden' />
                                    <OrderInfo order={order} />
                                </div>
                                <OrderOptions id={index} />
                            </Box>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Orders
