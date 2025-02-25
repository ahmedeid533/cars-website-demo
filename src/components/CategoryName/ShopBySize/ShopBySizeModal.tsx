"use client"
import { Backdrop, Divider, Fade, Modal } from '@mui/material'
import React from 'react'
import SizeControl from './SizeControl';

type props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ShopBySizeModal = ({ open, setOpen }: props) => {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
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
                    <div className='absolute top-[50%] left-[50%] w-[75%] md:w-[50%]  border-none outline-none flex flex-col gap-3' style={{ transform: "translate(-50%, -50%)" }}>
                        <div className='bg-white p-6 rounded-xl flex flex-col justify-start items-start gap-5'>
                            <SizeControl title="Conventional Tire Sizes" />
                            <Divider className='w-full' />
                            <SizeControl title="Off-Road & SAE Tire Sizes" />
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default ShopBySizeModal
