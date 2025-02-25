import React from 'react'

type props = {
    label: string,
    placeholder: string,
    type: string
}
const CustomInput = ({ label, placeholder, type }: props) => {
    return (
        <div className='flex flex-col gap-2 w-full'>
            <label htmlFor={label} className='text-[2B3674] font-bold text-sm'>{label}</label>
            <input type={type} placeholder={placeholder} id={label} className='p-3 rounded-xl border border-[#E0E5F2] text-custom-black outline-2 outline-[#E0E5F2]' />
        </div>
    )
}

export default CustomInput
