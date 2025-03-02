"use client"
import React from 'react'
import { Divider } from '@mui/material';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <aside>
            <Divider className='mb-5' />
            <div className='flex items-center gap-4 custom-container1 text-[#8C8C8C] text-sm'>
                <Link href={"#"} className='pr-2 border-r border-r-[#8C8C8C]'>Home</Link>
                <Link href={"#"} className='pr-2 border-r border-r-[#8C8C8C]'>All Products </Link>
                <Link href={"#"} className='pr-2 border-r border-r-[#8C8C8C]'>Wheels & Tires</Link>
                <Link href={"#"}>Tires</Link>
            </div>
            {children}
        </aside>
    )
}

export default Layout