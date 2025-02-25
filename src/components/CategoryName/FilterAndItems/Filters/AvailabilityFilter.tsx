import React from 'react'

const AvailabilityFilter = () => {
    return (
        <div className='text-custom-black flex flex-col gap-5'>
            <h2 className='font-bold text-lg '>Availability</h2>

            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <input type="radio" name='Availability' id='Show Availability items only' onChange={() => { }} />
                    <label htmlFor='Show Availability items only'>Show Availability items only</label>
                </div>
            </div>
        </div>
    )
}

export default AvailabilityFilter
