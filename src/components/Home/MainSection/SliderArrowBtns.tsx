import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useLocale } from 'next-intl'
type props = {
  handleNext: () => void
  handlePrev: () => void
}
const SliderArrowBtns = ({ handleNext, handlePrev }: props) => {
  const locale = useLocale()
  return (
    <div className='top-[25%] lg:top-[50%] absolute flex flex-row justify-between items-center w-full'>
      <button
        onClick={handlePrev}
        className='flex justify-center items-center bg-[#6b728063] mx-5 rounded-full w-[50px] h-[50px]'
      >
        <ArrowBackIosNewIcon
          className='text-white text-xl'
          style={{ transform: locale === 'ar' ? 'rotate(180deg)' : 'none' }}
        />
      </button>
      <button
        onClick={handleNext}
        className='flex justify-center items-center bg-[#6b728063] mx-5 rounded-full w-[50px] h-[50px]'
      >
        <ArrowForwardIosIcon
          className='text-white text-xl'
          style={{ transform: locale === 'ar' ? 'rotate(180deg)' : 'none' }}
        />
      </button>
    </div>
  )
}

export default SliderArrowBtns
