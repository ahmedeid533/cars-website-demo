import DoneIcon from '@mui/icons-material/Done';

const SecondLine = () => {
    return (
        <div className='w-full flex flex-row flex-wrap items-start justify-between pb-5 gap-3 lg:gap-0'>
            <div className='flex flex-col gap-1 lg:gap-3 text-custom-black'>
                <h5 className='text-xs lg:text-xl font-bold'>Status</h5>
                <div className='flex items-center gap-1'>
                    <div className='rounded-full bg-custom-green flex items-center justify-center text-white'>
                        <DoneIcon className='text-sm' />
                    </div>
                    <span className='text-xs lg:text-sm font-normal lg:font-bold'>Paid</span>
                </div>
            </div>
            <div className='flex flex-col gap-1 lg:gap-3 text-custom-black'>
                <h5 className='text-xs lg:text-xl font-bold'>Order Date</h5>
                <span className='text-xs lg:text-sm font-normal lg:font-bold '>15 / 6 / 2024</span>
            </div>
            <div className='flex flex-col gap-1 lg:gap-3 text-custom-black'>
                <h5 className='text-xs lg:text-xl font-bold'>price</h5>
                <span className='text-xs lg:text-sm font-normal lg:font-bold '>$199</span>
            </div>
            <div className='flex flex-col gap-1 lg:gap-3 text-custom-black'>
                <h5 className='text-xs lg:text-xl font-bold'>Discount</h5>
                <span className='text-xs lg:text-sm font-normal lg:font-bold  line-through'>$199</span>
            </div>
            <div className='flex flex-col gap-1 lg:gap-3 text-custom-blue'>
                <h5 className='text-xs lg:text-xl font-bold'>Total</h5>
                <span className='text-xs lg:text-sm font-normal lg:font-bold line-through'>$199</span>
            </div>
        </div>
    )
}

export default SecondLine
