import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import MainSectionForm from '@/components/MainSectionForm/MainSectionForm'

interface IVehicleSelectionModal {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function VehicleSelectionModal ({
  open,
  setOpen
}: IVehicleSelectionModal) {
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={open}>
          <div className='z-[100] border-none outline-none'>
            <div
              className='top-[50%] left-[50%] absolute flex flex-col gap-3 border-none outline-none w-[90%] lg:w-3/4'
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              <MainSectionForm setOpen={setOpen}  />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
