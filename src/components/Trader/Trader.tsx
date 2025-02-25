"use client"
import { TextField, Button, Box, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

const Input = styled('input')({
    display: 'none',
});

const Trader = () => {
    const cities = [
        "Cairo",
        "Alexandria",
        "Giza",
        "Shubra El Kheima",
        "Port Said",
        "Suez",
        "El Mahalla El Kubra",
        "Luxor",
        "Mansoura",
        "Tanta",
        "Asyut",
        "Ismailia",
        "Fayoum",
        "Zagazig",
        "Damietta",
        "Aswan",
        "Minya",
        "Beni Suef"
    ];
    const egyptianGovernorates = [
        "Cairo",
        "Alexandria",
        "Giza",
        "Red Sea",
        "Beheira",
        "Fayoum",
        "Gharbia",
        "Ismailia",
        "Menofia",
        "Minya",
        "Qalyubia",
        "New Valley",
        "Suez",
        "Aswan",
        "Assiut"]
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedGovernorate, setSelectedGovernorate] = useState('');

    const handleCityChange = (event: any) => {
        setSelectedCity(event.target.value);
    };

    const handleGovernorateChange = (event: any) => {
        setSelectedGovernorate(event.target.value);
    };
    return (
        <aside className='py-10 flex items-center justify-center'>

            <div className='w-5/6 lg:w-2/3  gap-8 flex flex-col items-center justify-center'>
                <Box className="p-6 bg-white shadow-md rounded-lg">
                    <Typography variant="h6" className="mb-4">Upload Required Images and Enter Personal Information</Typography>
                    <form onSubmit={e => e.preventDefault()} className="space-y-4">
                        <TextField
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Mobile Number 1"
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Mobile Number 2"
                            variant="outlined"
                            fullWidth
                            required
                        />

                        <div className="flex items-start flex-col lg:flex-row w-full justify-between gap-0 lg:gap-10">
                            <Typography>Address Details:</Typography>
                            <div className='w-full flex-1 flex flex-col gap-5'>

                                <FormControl>
                                    <InputLabel id="governorate-select-label">Governorate</InputLabel>
                                    <Select
                                        labelId="governorate-select-label"
                                        value={selectedGovernorate}
                                        onChange={handleGovernorateChange}
                                    >
                                        {egyptianGovernorates.map((governorate) => (
                                            <MenuItem key={governorate} value={governorate}>
                                                {governorate}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl>
                                    <InputLabel id="city-select-label">City</InputLabel>
                                    <Select
                                        labelId="city-select-label"
                                        value={selectedCity}
                                        onChange={handleCityChange}
                                    >
                                        {cities.map((city) => (
                                            <MenuItem key={city} value={city}>
                                                {city}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <TextField
                                    label="Street Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label="Building Number"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label="District"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </div>
                        </div>
                        <TextField
                            label="Store name"
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <div className='w-2/3 lg:2-1/3 pt-10 flex flex-col gap-2'>
                            <div className='w-full'>
                                <Input
                                    id="id-card-photo-upload"
                                    type="file"
                                    accept="image/*"
                                />
                                <label htmlFor="id-card-photo-upload">
                                    <Button variant="contained" component="span" className='w-full bg-custom-blue'>
                                        Upload ID Card Photo
                                    </Button>
                                </label>
                            </div>
                            <div className='w-full'>
                                <Input
                                    id="store-photo-upload"
                                    type="file"
                                    accept="image/*"
                                />
                                <label htmlFor="store-photo-upload">
                                    <Button variant="contained" component="span" className='w-full bg-custom-blue'>
                                        Upload Store Photo
                                    </Button>
                                </label>
                            </div>
                        </div>
                        <Button type="submit" variant="contained" color="primary" fullWidth className='w-full bg-custom-green hover:bg-custom-green'>
                            Submit
                        </Button>
                    </form>

                </Box>
            </div>
        </aside>
    );
};

export default Trader;
