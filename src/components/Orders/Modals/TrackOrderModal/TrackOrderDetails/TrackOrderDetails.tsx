import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

const TrackOrderDetails = () => {
    return (
        <div className='flex w-full flex-col lg:flex-row items-start justify-start lg:justify-between mt-10 gap-5 lg:gap-0'>
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}

export default TrackOrderDetails
