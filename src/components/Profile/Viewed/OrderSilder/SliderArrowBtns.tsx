import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useLocale } from 'next-intl';
type props = {
    handleNext: () => void,
    handlePrev: () => void
}
const SliderArrowBtns = ({ handleNext, handlePrev }: props) => {
	const locale = useLocale();
    return (
		<div className="flex flex-row justify-between items-center absolute top-[50%] -left-[10%] w-[120%]">
			<button
				onClick={handlePrev}
				className=" h-[25px] w-[25px] flex items-center justify-center rounded-full"
			>
				{/* <ArrowBackIosNewIcon className='text-white text-sm' /> */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					fill="#405FF2"
					height="800px"
					width="800px"
					version="1.1"
					id="Layer_1"
					viewBox="0 0 330 330"
					xmlSpace="preserve"
					className={" w-[2vw] h-[2vw] " + (locale === "en" ? "rotate-180" : "")}
				>
					<path
						id="XMLID_222_"
						d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
					/>
				</svg>
			</button>
			<button
				onClick={handleNext}
				className="  h-[25px] w-[25px] flex items-center justify-center rounded-full"
			>
				{/* <ArrowForwardIosIcon className="text-white text-sm" /> */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					fill="#405FF2"
					height="800px"
					width="800px"
					version="1.1"
					id="Layer_1"
					viewBox="0 0 330 330"
					xmlSpace="preserve"
					className={" w-[2vw] h-[2vw]" + (locale === "en" ? "" : " rotate-180")}
				>
					<path
						id="XMLID_222_"
						d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
					/>
				</svg>
			</button>
		</div>
	);
}

export default SliderArrowBtns