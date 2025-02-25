"use client"
import { Backdrop, Fade, Modal, TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ChangePasswordModal = ({ open, setOpen }: props) => {
    return (
        <Modal
            open={open}
            onClose={() => {
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
                            <TextField
                                id="outlined-password-input"
                                label="Current password*"
                                type="password"
                                className='w-full'
                            />
                            <TextField
                                id="outlined-password-input"
                                label="New password*"
                                type="password"
                                className='w-full'
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Confirm password*"
                                type="password"
                                className='w-full'
                            />

                            <div className='w-full flex items-center justify-center mt-10 gap-3 md:gap-6'>
                                <div
                                    className='cursor-pointer py-2 text-center w-full md:w-1/3  border border-custom-black rounded'
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >Return</div>
                                <div
                                    className='cursor-pointer py-2 text-center w-full md:w-1/3 rounded border border-custom-blue bg-custom-blue text-white'
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >Edit password</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default ChangePasswordModal