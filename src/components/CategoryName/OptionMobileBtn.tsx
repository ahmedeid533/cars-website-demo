"use client"
import React, { useState } from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import FilterOverlay from './FilterAndItems/FilterOverlay';

const OptionMobileBtn = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='py-5 flex lg:hidden items-end justify-end w-full custom-container1'>
                <button className='flex items-center gap-1 bg-custom-blue rounded py-3 px-6 text-white' onClick={() => setOpen(true)}>
                    <TuneIcon />
                    <span className='font-semibold'>Options</span>
                </button>
            </div>
            <FilterOverlay open={open} setOpen={setOpen} />
        </>
    )
}

export default OptionMobileBtn
