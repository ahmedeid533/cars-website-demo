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
                    <div className='absolute top-[50%] left-[50%] w-[95%] sm:w-[50%]  border-none outline-none flex flex-col gap-3' style={{ transform: "translate(-50%, -50%)" }}>
                        <div className='p-10 rounded-xl flex flex-col justify-start items-start gap-3'
                            style={{ background: "linear-gradient(180deg, #F7F8FF 0%, #E8E8E8 100%)" }}
                        >
                            <div className='relative w-full flex flex-row items-center justify-center'>
                                <Image src={'/logo.svg'} alt='logo' width={100} height={100} />
                                <span className='font-bold text-lg text-custom-black'>Services</span>
                            </div>
                            <div className='relative w-full flex flex-row items-center gap-2 mt-10'>
                                <Image src={'/orders/reason.svg'} alt='reason' width={30} height={30} />
                                <h2 className='font-bold text-lg text-custom-black'>What is the reason For Canelled Order </h2>
                            </div>
                            <textarea rows={10} placeholder='Messages...' className='w-full rounded border border-black p-2 bg-transparent'></textarea>
                            <div className='relative w-full flex flex-row items-start gap-5 mt-10'>
                                <Image src={'/orders/warning.svg'} alt='warning' width={30} height={30} />
                                <h2 className='leading-[1.2] text-sm text-custom-black w-3/4'>
                                    We will send a message to you at the application details if you reach us and inform you
                                </h2>
                            </div>
                            <div className='w-full flex items-center justify-center mt-10 gap-3 md:gap-6'>
                                <div
                                    className='cursor-pointer py-2 text-center w-full md:w-1/3 rounded bg-custom-blue text-white'
                                    onClick={() => {
                                        setOpen(false);
                                        router.back()
                                    }}
                                >Return</div>
                                <div
                                    className='cursor-pointer py-2 text-center w-full md:w-1/3 rounded bg-[#C60000] text-white'
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