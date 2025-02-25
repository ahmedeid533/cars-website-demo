import { InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { loadIndexFilter } from '@/mocks/loadIndexFilter';

const LoadIndexFilter = () => {
    return (
        <div className='text-custom-black flex flex-col gap-5'>
            <h2 className='font-bold text-lg '>Load Index</h2>
            <div className='w-3/4 bg-transparent border-[1px] border-[#929292] flex flex-row items-center justify-between rounded-md gap-5 py-1 px-2'>
                <InputBase placeholder="search..." className='w-full placeholder:text-[#5C5C5C] text-[#5C5C5C]' />
                <SearchIcon className='text-black cursor-pointer' />
            </div>
            <div className='flex flex-col gap-4'>
                {
                    loadIndexFilter.map((item, index) => (
                        <div key={index} className='flex items-center gap-3 cursor-pointer'>
                            <input type="radio" name='loadIndex' id={item} />
                            <label htmlFor={item}>{item}</label>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center gap-2 text-custom-blue font-semibold text-sm cursor-pointer'>
                <AddCircleIcon />
                <span>See More</span>
            </div>
        </div>
    )
}

export default LoadIndexFilter
