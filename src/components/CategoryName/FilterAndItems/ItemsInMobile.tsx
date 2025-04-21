import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from "next-intl";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const ItemsInMobile = ({ items }: { items: any[] }) => {
	const locale = useLocale();
	return (
		<div
			className={`grid lg:hidden grid-cols-2 items-center gap-x-2 gap-y-5`}
		>
			{items.map((item, index) => (
				<div
					key={index}
					className={`overflow-hidden rounded border border-[#A0A0A0] flex flex-col p-0 items-center`}
				>
					<div
						className={`h-[20vh] w-full flex items-center justify-center overflow-hidden border-b border-b-[#A0A0A0]`}
					>
						<Image
							src={`https://3arbitk.com/storage/${item.main_photo}`}
							alt={item.name_en}
							width={200}
							height={200}
							className="object-cover h-[200px] w-[200px]"
						/>
					</div>
					<div
						className={`w-full p-2 text-custom-black flex flex-col gap-3 items-center`}
					>
						<div className="flex flex-col items-center ">
							<h2 className="font-bold text-ellipsis overflow-hidden whitespace-nowrap w-full text-center ">
								{locale == "en" ? item.name_en : item.name_ar}
							</h2>
							{/* <Image
								src={"/category_name/five.svg"}
								alt="five"
								width={70}
								height={70}
								className="object-contain"
							/> */}
						</div>
						<div className="w-full flex flex-col items-center justify-center text-center text-xs gap-2">
							<h6 className="text-[#525252]">
								${item.selling_price}
							</h6>
							<p className="text-[#525252] flex items-center ">
								<FiberManualRecordIcon className="text-custom-green text-xs" />
								<span>
									In Stock ( {item.stock ? item.stock : 0} )
								</span>
							</p>
						</div>
						<p className="text-[#525252] text-xs text-ellipsis overflow-hidden whitespace-nowrap w-full text-center">
							{locale == "en"
								? item.description_en
								: item.description_ar}
						</p>
						<Link
							href={`/product/${item.id}`}
							className="text-custom-black text-center border-2 w-full rounded border-custom-black py-2 text-sm transition duration-300 hover:text-white hover:bg-custom-blue hover:border-custom-blue"
						>
							View Details
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemsInMobile
