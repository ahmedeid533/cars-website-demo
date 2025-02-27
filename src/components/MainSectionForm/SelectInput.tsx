"use client"
import { FormControl, MenuItem, OutlinedInput, Select } from '@mui/material';
import * as React from 'react';
import { MenuProps, selectStyle } from './selectStyles';


type props = {
    data: string[],
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function SelectInput({ data, value, setValue }: props) {
    return (
        <FormControl className='bg-white lg:bg-transparent border-0 rounded-xl w-full'>
            <Select
                sx={selectStyle}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                input={<OutlinedInput />}
                MenuProps={MenuProps}
            >
                {data.map((name, index) => (
                    <MenuItem
                        key={index}
                        value={name}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl >
    );
}
