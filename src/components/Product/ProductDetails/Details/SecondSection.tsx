import React from 'react'

const SecondSection = () => {
    return (
        <div className='flex flex-col gap-4 text-custom-black'>
            <div className='w-3/4 lg:w-1/2 flex flex-col gap-3'>
                <h5 className='font-bold'>Specifications</h5>
                <div className='flex flex-col gap-2 text-sm'>
                    <p className='w-full flex items-center justify-between'>
                        <span>Tire Type :</span>
                        <span>Performance</span>
                    </p>
                    <p className='w-full flex items-center justify-between'>
                        <span>Tire Size :</span>
                        <span>255 / 50 R17</span>
                    </p>
                    <p className='w-full flex items-center justify-between'>
                        <span>Speed Rating :</span>
                        <span>W = 168 Mph</span>
                    </p>
                    <p className='w-full flex items-center justify-between'>
                        <span>Load Index :</span>
                        <span>98 = 1653 ibs / Tire</span>
                    </p>
                </div>
            </div>
            <div>
                <h5 className='font-bold'>Notes</h5>
                <ul className='list-disc pl-4 text-sm'>
                    <li>The actual Tread Pattern for your specfic Tire may vary slightly from the dis played images based on the size The actual Tread Pattern for your specfic</li>
                </ul>
            </div>
        </div>
    )
}

export default SecondSection
