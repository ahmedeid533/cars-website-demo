import { tabsAndItems } from '@/mocks/tabsAndItems';
import Image from 'next/image'
import React from 'react'
import CustomTabPanel from './CustomTabPanel';
import Link from 'next/link';

const CustomItemsContainer = ({ value }: { value: number }) => {
    return (
        <div className="custom-container1 pt-5">
            <CustomTabPanel value={value} index={tabsAndItems[value].id - 1}>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 lg:gap-x-0 gap-y-10 items-center justify-center'>
                    {tabsAndItems[value].item.map((item, index) => (
                        <Link
                            href={`/category/${tabsAndItems[value].tab.toLocaleLowerCase()}?item=${item.title.toLocaleLowerCase()}`}
                            key={index}
                            className='w-full h-full flex flex-col items-center gap-3'
                        >
                            <div className='h-[100px] flex'>
                                <Image src={item.image} alt={item.title} width={100} height={100} className='h-[100px] w-[100px] object-cover' />
                            </div>
                            <h6 className='text-center text-xs'>{item.title}</h6>
                        </Link>
                    ))}
                </div>
            </CustomTabPanel>
        </div>
    )
}

export default CustomItemsContainer