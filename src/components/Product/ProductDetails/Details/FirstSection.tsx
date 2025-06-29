import Image from 'next/image'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useLocale } from 'next-intl';

interface MainInfo {
	name: string;
	price: number;
	stock: number;
}

const FirstSection = ({ mainInfo }: { mainInfo: MainInfo }) => {
	const locale = useLocale();
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-start gap-4 w-full">
				{/* <FavoriteBorderIcon className="text-white text-4xl cursor-pointer bg-[#B1B1B1] p-1 rounded transition duration-300 hover:bg-custom-blue" /> */}
				<div className="text-sm sm:text-3xl font-bold text-custom-black">
					<h2 className="text-ellipsis">{mainInfo?.name}</h2>
				</div>
			</div>
			{/* <div className="flex items-center gap-10 lg:gap-4">
				<Image
					src={"/category_name/four.svg"}
					alt="four"
					width={100}
					height={50}
					className="object-contain"
				/>
				<p className="text-sm text-custom-black">
					<span className="text-custom-blue">2 reviews</span> | Item #
					9619560
				</p>
			</div> */}
			<div className="text-xl font-bold text-custom-blue lg:text-custom-black flex items-center gap-5">
				<h2>{mainInfo.price}EGP</h2>
			</div>
			<p className="text-custom-black text-sm">
				{/* {locale == "en" ? "In Stock" : "في المخزن"} ({mainInfo.stock}) -{" "} */}
				{locale == "en"
					? "Ships within 24 hrs in cairo"
					: " يتم الشحن خلال 24 ساعة في القاهره"}
			</p>
		</div>
	);
};

export default FirstSection
