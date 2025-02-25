import { FormControl, InputLabel, OutlinedInput } from '@mui/material'
import React from 'react'

type props = {
    type: string,
    label: string,
    placeholder: string,
}
const CustomInput = ({ type, label, placeholder }: props) => {
    return (
        <FormControl className='w-full' variant="outlined">
            <InputLabel htmlFor={label} className='bg-white'>{label}</InputLabel>
            <OutlinedInput id={label} type={type} className="w-full" label={label} placeholder={placeholder} />
        </FormControl>
    )
}

export default CustomInput
