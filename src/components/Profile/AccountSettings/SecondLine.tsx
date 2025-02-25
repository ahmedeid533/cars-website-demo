import Image from 'next/image'
import React, { memo, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { vehiclesGarage } from '@/mocks/vehiclesGarage';
import { Checkbox } from '@mui/material';
import { red } from '@mui/material/colors';

const SecondLine = () => {
    const [garage, setGarage] = useState(vehiclesGarage);
    const [checkedVehicles, setCheckedVehicles] = useState<string[]>([]);
    // remove one item
    const handleDelete = (item: string) => {
        setGarage(garage.filter((i) => i !== item));
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = event.target;
        if (checked) {
            setCheckedVehicles([...checkedVehicles, id]);
        } else {
            setCheckedVehicles(checkedVehicles.filter((i) => i !== id));
        }
    };

    // remove the selected items
    const handleRemoveChecked = () => {
        setGarage(garage.filter((item) => !checkedVehicles.includes(item)));
        setCheckedVehicles([]);
    };
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-start gap-16'>
            <div className='flex flex-col items-start'>
                <div className='flex flex-col gap-1 w-auto mb-10 mt-5 rounded-md border border-custom-black p-3 text-custom-black bg-transparent transition duration-300 hover:bg-[#405FF226] hover:border-[#405FF226]'>
                    <h3 className='font-bold text-xl'>Wish Lists</h3>
                    <p className='text-xs'>Create Wish Lists and share them with your friends</p>
                </div>
                <div className='w-full border border-custom-black p-5 rounded flex flex-col gap-3'>
                    <div className='w-full flex items-center gap-2'>
                        <Image src={'/profile/save.svg'} alt='save' width={20} height={20} />
                        <span className='text-custom-gray text-sm font-semibold'> Save products, photos, project ideas</span>
                    </div>
                    <div className='w-full flex items-center gap-2'>
                        <Image src={'/profile/organize.svg'} alt='organize' width={20} height={20} />
                        <span className='text-custom-gray text-sm font-semibold'>Organize by vehicle or job Type</span>
                    </div>
                    <div className='w-full flex items-center gap-2'>
                        <Image src={'/profile/share.svg'} alt='share' width={20} height={20} />
                        <span className='text-custom-gray text-sm font-semibold'>Share Wish Lists and ideas with your friends</span>
                    </div>
                    <button className='mt-5 rounded py-3 text-white bg-custom-blue'>ADD TO CART</button>
                </div>
            </div>
            <div className='w-full flex flex-col items-start'>
                <div className='flex flex-col gap-1 w-auto mb-10 mt-5 rounded-md border border-custom-black p-3 text-custom-black bg-transparent transition duration-300 hover:bg-[#405FF226] hover:border-[#405FF226]'>
                    <h3 className='font-bold text-xl'>Garage</h3>
                    <p className='text-xs'>Add your vehicles & find parts easily</p>
                </div>
                <div className='w-full border border-custom-black py-4 px-8 rounded flex flex-col gap-2'>
                    {
                        garage.length > 0 ?
                            garage.map((item, index) => (
                                <div key={index} className='w-full flex items-center justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <Checkbox
                                            name="cars"
                                            value={item}
                                            id={item}
                                            checked={checkedVehicles.includes(item)}
                                            onChange={handleCheckboxChange}
                                            sx={{
                                                color: red[800],
                                                '&.Mui-checked': {
                                                    color: red[600],
                                                },
                                            }}
                                        />
                                        <label htmlFor={item} className='text-custom-black cursor-pointer'>{item}</label>
                                    </div>
                                    <DeleteOutlineIcon
                                        className='cursor-pointer text-custom-gray hover:text-red-600'
                                        onClick={() => handleDelete(item)}
                                    />
                                </div>

                            ))
                            :
                            <h2 className='font-bold'>No vehicles added to garage</h2>
                    }

                    <div className={`grid ${checkedVehicles.length > 0 ? "grid-cols-2" : "grid-cols-1"} items-center justify-center w-full mt-14 gap-5`}>
                        {
                            checkedVehicles.length > 0 &&
                            <button
                                className='rounded py-3 border border-red-600 bg-red-600 text-white font-bold'
                                onClick={handleRemoveChecked}
                            >Remove {checkedVehicles.length} Vehicle</button>
                        }
                        <button className='rounded py-3 border border-custom-black font-bold'>Add Vehicle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(SecondLine)
