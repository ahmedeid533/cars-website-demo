"use client"
import { useRouter } from 'next/navigation'
import { Backdrop, Divider, Fade, Modal } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import TrackOrderDetails from './TrackOrderDetails/TrackOrderDetails';
import TrackOrderNumber from './TrackOrderNumber';
import TrackOrderTimeline from './TrackOrderTimeline';
import OrderActivities from './OrderActivities';

type props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const TrackOrderModal = ({ open, setOpen }: props) => {
    const router = useRouter()
    return (
        <Modal
            open={open}
            onClose={() => {
                router.back();
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
                    <div className='absolute top-[50%] left-[50%] w-full md:w-3/4 overflow-hidden h-full  border-none outline-none flex flex-col gap-3' style={{ transform: "translate(-50%, -50%)" }}>
                        <div className='p-10 bg-white rounded flex flex-col justify-start items-start gap-24 min-h-screen overflow-y-scroll relative' >
                            <div onClick={() => {
                                setOpen(false);
                                router.back()
                            }} className='absolute right-3 top-3 cursor-pointer'>
                                <ClearIcon />
                            </div>
                            <TrackOrderDetails />
                            <div className='w-full flex flex-col gap-10'>
                                <TrackOrderNumber />
                                <TrackOrderTimeline />
                            </div>
                            <Divider className='bg-[#E4E7E9] w-full' />
                            <OrderActivities />
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default TrackOrderModal