"use client"
import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { customPasswordInputStyle } from './globalStyles';

type props = {
    label: string,
}

const CustomPasswordInput = ({ label }: props) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormControl className='w-full' variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" className='bg-white'>{label}</InputLabel>
            <OutlinedInput
                sx={customPasswordInputStyle}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(prev => !prev)}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label={label}
            />
        </FormControl>
    )
}

export default CustomPasswordInput
