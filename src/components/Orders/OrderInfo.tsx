import * as React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

type props = {
    order: string,
}
const OrderInfo = ({ order }: props) => {

    return (

        <div className='w-full flex items-start justify-center lg:justify-between gap-5 p-4'>
            <div className='flex flex-col items-start justify-start gap-1 lg:gap-5'>
                <h4 className='font-bold text-black text-sm lg:text-lg'>Order Name</h4>
                <h6 className='text-xs lg:text-sm text-custom-black'>Side Folding Mirror Motor W5</h6>
            </div>
            <div className='flex flex-col items-start justify-start gap-1 lg:gap-5'>
                <h4 className='font-bold text-black text-sm lg:text-lg'>Status</h4>
                <h6 className='text-xs lg:text-sm text-custom-black flex items-center gap-1'>
                    {
                        (order === 'paid') &&
                        <div className='rounded-full text-sm bg-custom-green flex items-center justify-center text-white'>
                            <DoneIcon />
                        </div>
                    }
                    {
                        (order === 'cancelled') &&
                        <div className='rounded-full text-sm bg-[#B90000] flex items-center justify-center text-white'>
                            <ClearIcon />
                        </div>
                    }
                    <span className='text-xs lg:text-sm  text-custom-black'>{order}</span>

                </h6>
            </div>
            <div className='flex flex-col items-start justify-start gap-1 lg:gap-5'>
                <h4 className='font-bold text-black text-sm lg:text-lg'>Order Date</h4>
                <h6 className='text-xs lg:text-sm text-custom-black'>15 / 6 / 2024</h6>
            </div>
            <div className='flex flex-col items-start justify-start gap-1 lg:gap-5'>
                <h4 className='font-bold text-black text-sm lg:text-lg'>Price</h4>
                <h6 className='text-xs lg:text-sm text-custom-black'>$199</h6>
            </div>
        </div>

    )
}

export default OrderInfo
