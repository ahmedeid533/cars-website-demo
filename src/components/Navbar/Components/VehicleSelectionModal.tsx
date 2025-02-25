import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import MainSectionForm from '@/components/MainSectionForm/MainSectionForm';


export default function VehicleSelectionModal({ open, setOpen }: any) {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
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
                        <div className='absolute top-[50%]  left-[50%] w-[90%] lg:w-3/4  border-none outline-none flex flex-col gap-3' style={{ transform: "translate(-50%, -50%)" }}>
                            <MainSectionForm setOpen={setOpen} />
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
