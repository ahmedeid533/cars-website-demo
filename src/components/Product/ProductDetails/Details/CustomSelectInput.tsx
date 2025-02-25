"use client"
import React, { useState } from 'react'
import { FormControl, MenuItem, OutlinedInput, Select } from '@mui/material'

const CustomSelectInput = () => {
    const [value, setValue] = useState('Size :19 : 245 / 44R20')
    return (
        <FormControl className='w-full border-0'>
            <Select
                input={<OutlinedInput />}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
                <MenuItem value="Size :19 : 245 / 44R20">
                    Size :19 : 245 / 44R20
                </MenuItem>
                <MenuItem value="Size :19 : 245 / 44R20" >
                    Size :20 : 245 / 44R20
                </MenuItem>
                <MenuItem value="Size :19 : 245 / 44R20" >
                    Size :21 : 245 / 44R20
                </MenuItem>
                <MenuItem value="Size :19 : 245 / 44R20" >
                    Size :22 : 245 / 44R20
                </MenuItem>
            </Select>
        </FormControl>
    )
}

export default CustomSelectInput
