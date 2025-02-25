import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
type props = {
    handleNext: () => void,
    handlePrev: () => void
}
const SliderArrowBtns = ({ handleNext, handlePrev }: props) => {
    return (
        <div className='flex flex-row justify-between items-center absolute top-[25%] lg:top-[50%]  w-full'>
            <button onClick={handlePrev} className='mx-5 bg-[#6b728063] h-[50px] w-[50px] flex items-center justify-center rounded-full'>
                <ArrowBackIosNewIcon className='text-white text-xl' />
            </button>
            <button onClick={handleNext} className='mx-5 bg-[#6b728063] h-[50px] w-[50px] flex items-center justify-center rounded-full'>
                <ArrowForwardIosIcon className='text-white text-xl' />
            </button>
        </div>
    )
}

export default SliderArrowBtns