import Image from 'next/image';
import { ratingFiter } from '@/mocks/ratingFilter';

const RatingFilter = () => {
    return (
        <div className='text-custom-black flex flex-col gap-5'>
            <h2 className='font-bold text-lg '>Rating</h2>
            <div className='flex flex-col gap-4'>
                {
                    ratingFiter.map((item, index) => (
                        <div key={index} className='flex items-center gap-3 cursor-pointer'>
                            <input type="radio" name='rating' id={item} onChange={() => { }} />
                            <Image src={item} alt='rating' width={80} height={40} />
                            <label className='text-sm text-[#A4A4A4]' htmlFor={item}>{ratingFiter.length - index} and up</label>
                        </div>
                    ))
                }
                <div className='flex items-center gap-3 cursor-pointer'>
                    <input type="radio" name='rating' id='Not Yet Rated' onChange={() => { }} />
                    <label htmlFor='Not Yet Rated'>Not Yet Rated</label>
                </div>
            </div>
        </div>
    )
}

export default RatingFilter
