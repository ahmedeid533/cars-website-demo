import React from 'react'
import CustomTimeline from './CustomTimeline'

const TrackOrderTimeline = () => {
    return (
        <div className='flex flex-col gap-5'>
            <h2 className='text-[#475156]'>
                Order expected arrival <span className='text-custom-black'>23 Jan, 2024</span>
            </h2>
            <CustomTimeline />
        </div>
    )
}

export default TrackOrderTimeline
