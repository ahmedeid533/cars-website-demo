import CustomTimeline from '../../Modals/TrackOrderModal/CustomTimeline';
import FirstLine from './FirstLine';
import SecondLine from './SecondLine';

const Details = () => {
    return (
        <div className='rounded py-10 px-5 w-full bg-white lg:bg-[#E8E8E8] flex flex-col gap-5'>
            <FirstLine />
            <SecondLine />
            <div className='flex lg:hidden items-start'>
                <button className='w-auto p-2 text-center bg-custom-blue text-white rounded-lg text-lg font-bold'>
                    Add Notes
                </button>
            </div>
            <div className='flex lg:hidden flex-col gap-2 mt-2'>
                <h2 className='text-[#475156] text-sm'>
                    Order expected arrival <span className='text-custom-black'>23 Jan, 2024</span>
                </h2>
                <CustomTimeline />
            </div>
        </div>
    )
}

export default Details
