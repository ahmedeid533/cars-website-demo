import React from 'react'
import CustomInput from './CustomInput'

const PersonalDetails = () => {
    return (
        <div className='flex flex-col gap-5 w-full'>
            <h2 className='text-xl font-bold text-custom-black'>Personal details</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center' >
                <CustomInput label="Address line" placeholder="P.o.Box 1223" type="text" />
                <CustomInput label="City" placeholder="Arusha" type="text" />
                <CustomInput label="State" placeholder="Arusha ,Tanzania" type="text" />
                <CustomInput label="Postal code" placeholder="9090" type="text" />
            </div>
        </div>
    )
}

export default PersonalDetails
