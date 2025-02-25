import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
type props = {
    handleNext: () => void,
    handlePrev: () => void
}
const SliderArrowBtns = ({ handleNext, handlePrev }: props) => {
    return (
        <div className='flex flex-row justify-between items-center absolute top-[50%] w-full'>
            <button onClick={handlePrev} className=' bg-[#CCC] h-[25px] w-[25px] flex items-center justify-center rounded-full'>
                <ArrowBackIosNewIcon className='text-white text-sm' />
            </button>
            <button onClick={handleNext} className=' bg-[#CCC] h-[25px] w-[25px] flex items-center justify-center rounded-full'>
                <ArrowForwardIosIcon className='text-white text-sm' />
            </button>
        </div>
    )
}

export default SliderArrowBtns