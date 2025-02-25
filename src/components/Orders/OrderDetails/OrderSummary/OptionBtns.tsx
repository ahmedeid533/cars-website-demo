"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import TrackOrderModal from '../../Modals/TrackOrderModal/TrackOrderModal'
import { useParams } from 'next/navigation'
import CancelOrderModal from '../../Modals/CancelOrderModal'

const OptionBtns = () => {
    const { id } = useParams()
    const [trackOpen, setTrackOpen] = useState(false)
    const [cancelledOpen, setCancelledOpen] = useState(false)
    return (
        <div className='w-full flex items-center lg:items-end justify-center lg:justify-end'>
            <div className='flex flex-row items-center gap-3 flex-wrap justify-center'>
                <Link
                    href={`#`}
                    className='py-2 text-center rounded border border-black px-5 w-full lg:w-[200px]'
                >Print</Link>
                <Link
                    href={`/orders/${id}/?track=${Number(id) + 1}`}
                    className='py-2 text-center rounded bg-custom-blue text-white px-5 w-full lg:w-[200px]'
                    onClick={() => setTrackOpen(true)}
                >Track Order</Link>
                <Link
                    href={`#`}
                    className='py-2 text-center rounded bg-custom-green text-white px-5 w-full lg:w-[200px]'
                >Support</Link>
                <Link
                    href={`/orders/${id}/?cancel=${Number(id) + 1}`}
                    className='py-2 text-center rounded bg-[#C60000] text-white px-5 w-full lg:w-[200px]'
                    onClick={() => setCancelledOpen(true)}
                >Cancel</Link>

                <TrackOrderModal open={trackOpen} setOpen={setTrackOpen} />
                <CancelOrderModal open={cancelledOpen} setOpen={setCancelledOpen} />
            </div>
        </div>
    )
}

export default OptionBtns
