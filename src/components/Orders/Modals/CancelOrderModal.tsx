"use client"
import { Backdrop, Fade, Modal } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

type props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const CancelOrderModal = ({ open, setOpen }: props) => {
    const router = useRouter()
    return (
        <Modal
            open={open}
            onClose={() => {
                router.back()
                setOpen(false)
            }}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <div className='z-[100] border-none outline-none'>
                    <div className='top-[50%] left-[50%] absolute flex flex-col gap-3 border-none outline-none w-[95%] sm:w-[50%]' style={{ transform: "translate(-50%, -50%)" }}>
                        <div className='flex flex-col justify-start items-start gap-3 p-10 rounded-xl'
                            style={{ background: "linear-gradient(180deg, #F7F8FF 0%, #E8E8E8 100%)" }}
                        >
                            <div className='relative flex flex-row justify-center items-center w-full'>
                                <Image src={'/main-logo-1.png'} alt='logo' width={100} height={100} />
                                <span className='font-bold text-custom-black text-lg'>Services</span>
                            </div>
                            <div className='relative flex flex-row items-center gap-2 mt-10 w-full'>
                                <Image src={'/orders/reason.svg'} alt='reason' width={30} height={30} />
                                <h2 className='font-bold text-custom-black text-lg'>What is the reason For Canelled Order </h2>
                            </div>
                            <textarea rows={10} placeholder='Messages...' className='bg-transparent p-2 border border-black rounded w-full'></textarea>
                            <div className='relative flex flex-row items-start gap-5 mt-10 w-full'>
                                <Image src={'/orders/warning.svg'} alt='warning' width={30} height={30} />
                                <h2 className='w-3/4 text-custom-black text-sm leading-[1.2]'>
                                    We will send a message to you at the application details if you reach us and inform you
                                </h2>
                            </div>
                            <div className='flex justify-center items-center gap-3 md:gap-6 mt-10 w-full'>
                                <div
                                    className='bg-custom-blue py-2 rounded w-full md:w-1/3 text-white text-center cursor-pointer'
                                    onClick={() => {
                                        setOpen(false);
                                        router.back()
                                    }}
                                >Return</div>
                                <div
                                    className='bg-[#C60000] py-2 rounded w-full md:w-1/3 text-white text-center cursor-pointer'
                                    onClick={() => {
                                        setOpen(false);
                                        router.back()
                                    }}
                                >Cancel Order</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default CancelOrderModal