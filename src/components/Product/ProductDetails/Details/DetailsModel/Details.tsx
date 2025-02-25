import Image from 'next/image'
import CheckIcon from '@mui/icons-material/Check';
import CustomSelectInput from './CustomSelectInput';
import { Box } from '@mui/material';

const Details = () => {
    return (
        <div className='custom-container1 flex items-start justify-start lg:justify-between relative gap-5'>
            <Image src={'/product/p1.png'} alt='product' width={300} height={300} className='hidden lg:block w-1/4 object-contain h-[40vh]' />
            <div className='w-full lg:w-3/4 text-custom-black border rounded border-custom-black p-0 lg:p-4 flex flex-col gap-6 relative'>
                <div className='absolute right-2 top-2 cursor-pointer bg-custom-green text-white rounded-full'>
                    <CheckIcon />
                </div>
                <Box className='block lg:hidden py-5' sx={{ background: { xs: "linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(200, 200, 200, 0.35) 100%)", lg: "transparent" } }}>
                    <Image src={'/product/p1.png'} alt='product' width={300} height={300} className='w-full lg:w-1/4 object-contain h-[30vh]' />
                </Box>
                <div className='p-4 lg:p-0 flex flex-col gap-3'>
                    <h2 className='text-2xl font-semibold uppercase'>BLACK WIDOW Wheels</h2>
                    <div>
                        <h4 className='underline font-semibold text-lg'>Description</h4>
                        <p className='text-sm w-full lg:w-3/4'>
                            BLACK WIDOW Satin Black Wheels by RTX®. Upgrade your vehicle with sharp-looking black wheels without breaking the bank! RTX Black Widow rims blend style, performance, and durability. Engineered to stand up to the industry’s most demanding standards, these wheels boast a high-strength low pressure cast build verified by numerous tests.
                        </p>
                    </div>
                    <CustomSelectInput />
                    <div className='flex items-center gap-3 p-3 rounded border border-custom-black w-3/4 lg:w-1/4'>
                        <CheckIcon className='text-2xl text-white bg-custom-blue rounded-full ' />
                        <span>Subtotal: $565.16</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
