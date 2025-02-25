"use client"
import React, { useState } from 'react'
import ShopBySizeModal from './ShopBySizeModal'

const ShopBySize = () => {
    const [open, setOpen] = useState(false)
    return (
        <section className='py-5 custom-container2 bg-[#405FF21A] rounded-lg flex items-end w-full justify-between'>
            <div className='flex items-center text-custom-black'>
                <h2 className='font-bold'>Shop Tires by Size.  </h2>
                <p>Select the correct tires size for your vehicle</p>
            </div>
            <button
                className='border border-custom-black text-custom-blue font-semibold py-2 px-4 rounded'
                onClick={() => setOpen(true)}
            >
                Shop By Size
            </button>
            <ShopBySizeModal open={open} setOpen={setOpen} />
        </section>
    )
}

export default ShopBySize
