"use client"
import Link from 'next/link'
import CustomSelectInput from './CustomSelectInput'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DetailsModel from './DetailsModel/DetailsModel';

const ThirdSection = () => {
    const [counter, setCounter] = useState(1);
    const [open, setOpen] = useState(false)
    return (
        <div className='flex flex-col gap-3'>
            <h5 className='font-bold'>CHOOSE OPTION(S):</h5>
            <CustomSelectInput />
            <div className="grid grid-cols-3 items-center gap-3">
                <div className='w-full flex items-center justify-between border border-custom-black text-custom-black px-2 rounded py-4 text-center'>
                    <div className='cursor-pointer' onClick={() => setCounter(counter - 1)}>
                        <RemoveIcon />
                    </div>
                    <span className='font-bold'>{counter}</span>
                    <div className='cursor-pointer' onClick={() => setCounter(counter + 1)}>
                        <AddIcon />
                    </div>
                </div>
                <Link href={'/cart'} className='uppercase rounded col-span-2 w-full border border-custom-blue bg-custom-blue py-4 text-white text-center'>
                    Add To Cart
                </Link>
            </div>
            <div className='flex items-end justify-end'>
                <button onClick={() => setOpen(true)} className='w-2/3 lg:w-full py-3 rounded border border-custom-black text-custom-black font-bold'>
                    PRODUCT OPTIONS
                </button>
            </div>
            <DetailsModel setOpen={setOpen} open={open} />
        </div>
    )
}

export default ThirdSection
