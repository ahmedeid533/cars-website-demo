import { typeFilter } from '@/mocks/typeFilter';

const TypeFilter = () => {
    return (
        <div className='text-custom-black flex flex-col gap-5'>
            <h2 className='font-bold text-lg '>Type</h2>

            <div className='flex flex-col gap-4'>
                {
                    typeFilter.map((type, index) => (
                        <div key={index} className='flex items-center gap-3 cursor-pointer'>
                            <input type="radio" name='type' id={type} onChange={() => {}}/>
                            <label htmlFor={type}>{type}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TypeFilter
