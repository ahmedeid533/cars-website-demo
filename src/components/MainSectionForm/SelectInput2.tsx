"use client"
import { FormControl, OutlinedInput, Select } from '@mui/material';
import * as React from 'react';
import { MenuProps, selectStyle } from './selectStyles';


type props = {
    children: React.ReactNode,
    value: number|string,
    setValue: (val: number) => void
}

export default function SelectInput2({ children, value, setValue }: props) {
    return (
        <FormControl className='bg-white lg:bg-transparent border-0 rounded-xl w-full'>
            <Select
                sx={selectStyle}
                value={value}
                onChange={(e) => setValue(e.target.value as number)}
                input={<OutlinedInput />}
                MenuProps={MenuProps}
            >
                {children}
            </Select>
        </FormControl >
    );
}
