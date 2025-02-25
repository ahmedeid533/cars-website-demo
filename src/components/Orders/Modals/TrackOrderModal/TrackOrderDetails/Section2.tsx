import React from 'react'

const Section2 = () => {
    return (
        <div className='flex flex-row lg:flex-col w-full lg:w-auto items-start justify-between lg:justify-start  gap-7 rounded-xl border border-custom-black p-5 lg:border-transparent lg:p-0'>
            <div className='flex flex-col gap-1'>
                <h4 className='font-bold'>Ship to:</h4>
                <p className='text-sm'>Egypt Road ,Sheikhupura</p>
            </div>
            <div className='flex flex-col gap-1'>
                <h4 className='font-bold'>Payment Information:</h4>
                <p className='text-sm'>Credit Card No:2522 2322 5455 2566</p>
            </div>
        </div>
    )
}

export default Section2
