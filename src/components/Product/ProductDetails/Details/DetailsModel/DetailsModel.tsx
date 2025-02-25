import { Backdrop, Divider, Fade, Modal } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import Header from './Header';
import Details from './Details';
import SimilarProducts from './SimilarProducts';
import Summary from './Summary';

type props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const DetailsModel = ({ open, setOpen }: props) => {
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
                    <div className='absolute top-[50%] left-[50%] w-full md:w-[85%] overflow-hidden h-full  border-none outline-none flex flex-col gap-3' style={{ transform: "translate(-50%, -50%)" }}>
                        <div className=' bg-white rounded flex flex-col justify-start items-start gap-10 min-h-screen overflow-y-scroll relative' >
                            <div onClick={() => setOpen(false)} className='absolute right-3 top-3 cursor-pointer'>
                                <ClearIcon />
                            </div>
                            <Header />
                            <Details />
                            <Divider className='w-full' />
                            <SimilarProducts />
                            <Divider className='w-full' />
                            <Summary setOpen={setOpen} />
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default DetailsModel
