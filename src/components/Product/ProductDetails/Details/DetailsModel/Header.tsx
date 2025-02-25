import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div
            style={{ background: "linear-gradient(90deg, rgba(0, 44, 255, 0.06) 0%, rgba(235, 235, 235, 0.15) 100%)" }}
            className='p-5 w-full'
        >
            <div className="custom-container1 flex flex-col gap-4 text-custom-black items-start">
                <h2 className='font-bold text-2xl'>Product Options</h2>
                <h4 className='font-bold text-xl'>2018 BMW 3-Series</h4>
                <h6 className='font-bold text-lg'>320I</h6>
                <Link href={'#'} className='px-5 py-3 rounded border border-custom-blue text-center'>Select your Vehicle</Link>
            </div>
        </div>
    )
}

export default Header
