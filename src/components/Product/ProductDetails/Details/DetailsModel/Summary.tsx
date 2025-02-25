import Link from 'next/link'
import React from 'react'

type props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Summary = ({ setOpen }: props) => {
    return (
        <div className='custom-container2 text-custom-black pb-20'>
            <div className="w-full lg:w-1/2">
                <h2 className='font-bold text-lg mb-5'>Summary</h2>
                <div className="flex flex-col gap-3 w-full lg:w-1/2">
                    <p className='flex items-center w-full justify-between'>
                        <span>BLACK WIDOW Wheels</span><span className='font-bold'>$644.36</span>
                    </p>
                    <p className='flex items-center w-full justify-between'>
                        <span>Chrome Installation Kit</span><span className='font-bold'>$49.99</span>
                    </p>
                    <p className='flex items-center w-full justify-between'>
                        <span>Subtotal :</span><span className='font-bold'>$565.16</span>
                    </p>
                </div>
                <div className='flex items-center flex-row-reverse lg:flex-row w-full justify-between gap-5 mt-5'>
                    <button className='w-full rounded border border-custom-black text-custom-black text-center py-5 uppercase' onClick={() => setOpen(false)}>Cancel</button>
                    <Link href={'/cart'} className='w-full rounded border border-custom-blue text-white bg-custom-blue text-center py-5 uppercase'>Add To Cart</Link>
                </div>
            </div>
        </div>
    )
}

export default Summary
