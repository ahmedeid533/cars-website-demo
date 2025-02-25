import React from 'react'

const Stats = () => {
    return (
        <div className='bg-custom-blue py-10'>
            <div className="custom-container2 flex flex-wrap gap-5 lg:gap-0 items-center w-full justify-between text-white">
                <div className='flex flex-col gap-1 font-bold'>
                    <h2 className='text-4xl'>500+</h2>
                    <h4 className='text-sm'>Brands</h4>
                </div>
                <div className='flex flex-col gap-1 font-bold'>
                    <h2 className='text-4xl'>16</h2>
                    <h4 className='text-sm'>Branches</h4>
                </div>
                <div className='flex flex-col gap-1 font-bold'>
                    <h2 className='text-4xl'>200k</h2>
                    <h4 className='text-sm'>Items sold</h4>
                </div>
                <div className='flex flex-col gap-1 font-bold'>
                    <h2 className='text-4xl'>15k</h2>
                    <h4 className='text-sm'>Happy clients</h4>
                </div>
                <div className='flex flex-col gap-1 font-bold'>
                    <h2 className='text-4xl'>100+</h2>
                    <h4 className='text-sm'>New employees</h4>
                </div>
            </div>
        </div>
    )
}

export default Stats
