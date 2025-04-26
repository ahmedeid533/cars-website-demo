import React from 'react'
import CustomInput from './CustomInput'

const CardDetails = () => {
    return (
        <div className='flex flex-col gap-5 w-full'>
            <h2 className='text-xl font-bold text-custom-black'>Card details</h2>
            <div className='grid grid-cols-1 gap-4 items-center' >
                <CustomInput 
                    label="Cardholder’s name" 
                    placeholder="Seen on your card" 
                    type="text" 
                    value="" 
                    setValue={() => {}} 
                />
                <CustomInput 
                    label="Card number" 
                    placeholder="Seen on your card" 
                    type="text" 
                    value="" 
                    setValue={() => {}} 
                />
                <div className='grid grid-cols-2 gap-4 items-center'>
                    <CustomInput 
                        label="Expirity" 
                        placeholder="20/23" 
                        type="text" 
                        value="" 
                        setValue={() => {}} 
                    />
                    <CustomInput 
                        label="CVC" 
                        placeholder="654" 
                        type="text" 
                        value="" 
                        setValue={() => {}} 
                    />
                </div>
            </div>
        </div>
    )
}

export default CardDetails
