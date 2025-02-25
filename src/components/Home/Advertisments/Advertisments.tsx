import React from 'react'
import MajiorAdv from './MajiorAdv'
import Link from 'next/link'

const Advertisments = () => {
    return (
        <section className='custom-container1 py-10'>
            <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-5">
                <div className='flex flex-row lg:flex-col gap-3'>
                    <MajiorAdv backgroundImage="bg-[url('/home/advertisment/adv1.jpg')]" />
                    <MajiorAdv backgroundImage="bg-[url('/home/advertisment/adv2.jpg')]" />
                </div>
                <div className={`col-span-1 lg:col-span-2 bg-[url('/home/advertisment/adv3.jpg')] bg-cover bg-center bg-no-repeat h-[258px] lg:h-[428.3px]`}>
                    <div className='bg-[#00000066] h-full flex flex-col gap-4 items-center justify-center text-white'>
                        <h3 className='leading-[1.2] text-3xl lg:text-5xl w-2/3 text-center'>The best lighting available Now</h3>
                        <Link href={"#"} className='bg-custom-blue text-white rounded px-10 py-3 font-bold text-sm'>SHOP NOW</Link>
                    </div>
                </div>
                <div className='flex flex-row lg:flex-col gap-3'>
                    <MajiorAdv backgroundImage="bg-[url('/home/advertisment/adv4.jpg')]" />
                    <MajiorAdv backgroundImage="bg-[url('/home/advertisment/adv5.jpg')]" />
                </div>
            </div>
        </section>
    )
}

export default Advertisments