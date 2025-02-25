import React, { useState } from 'react'
import SelectInput from './SelectInput'
import { carModels, carSeries, carYear } from '@/mocks/searchInputs';
import Image from 'next/image';


const ProductAddForm = () => {
    const [carModelValue, setCarModelValue] = useState(carModels[0]);
    const [carYearValue, setCarYearValue] = useState(carYear[0]);
    const [carSeriesValue, setCarSeriesValue] = useState(carSeries[0]);

    return (
        <div
            className='bg-[#FAFAFA] p-8 rounded-md flex flex-col gap-10'
            style={{
                boxShadow: "0px 4px 4px 0px #00000040"
            }}
        >
            <h4 className='font-bold text-md md:text-xl text-custom-black text-center'>Please enter these data, you can bring the products you need</h4>
            <div className='grid grid-cols-3 items-center gap-5'>
                <SelectInput data={carYear} value={carYearValue} setValue={setCarYearValue} />
                <SelectInput data={carModels} value={carModelValue} setValue={setCarModelValue} />
                <SelectInput data={carSeries} value={carSeriesValue} setValue={setCarSeriesValue} />
            </div>
            <textarea rows={10} placeholder='Write a product description' className='outline-none border border-[#525252] rounded shadow-xl p-4'></textarea>
            <div className='border border-[#525252] py-5 flex flex-col justify-center items-center gap-5 rounded'>
                <div className=' cursor-pointer relative shadow-lg w-1/2 border border-black bg-[#405FF214] p-5 flex flex-col items-center justify-center text-center gap-3'>
                    <Image src={'/search/upload-img.png'} alt='add' width={100} height={100} className='object-contain' />
                    <h6 className='text-xs md:text-sm text-custom-black'>Download the product of the product you want</h6>
                </div>
                <button className='w-1/2 py-3 text-white bg-custom-blue rounded'>Send Message</button>
            </div>
        </div>
    )
}

export default ProductAddForm