"use client"
import React, { useState } from 'react'
import { Divider } from '@mui/material';
import Link from 'next/link';
import CustomTabs from '@/components/Search/CustomTabs';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [value, setValue] = useState(0);
    return (
        <aside>
            <CustomTabs value={value} setValue={setValue} />
            <Divider className='mb-5' />
            <div className='custom-container1 text-[#8C8C8C] text-sm flex items-center gap-4'>
                <Link href={"#"} className='border-r border-r-[#8C8C8C] pr-2'>Home</Link>
                <Link href={"#"} className='border-r border-r-[#8C8C8C] pr-2'>All Products </Link>
                <Link href={"#"} className='border-r border-r-[#8C8C8C] pr-2'>Wheels & Tires</Link>
                <Link href={"#"}>Tires</Link>
            </div>
            {children}
        </aside>
    )
}

export default Layout