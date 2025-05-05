import Link from 'next/link'
import React from 'react'
import { useLocale } from 'next-intl'

const MajiorAdv = ({
	backgroundImage,
	title,
	id,
}: {
	backgroundImage: string;
	title: string;
	id: number;
	}) => {
	const locale = useLocale()
	return (
		<div
			className={` bg-cover bg-right bg-no-repeat h-[208px] w-1/2 lg:w-full`}
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			{/* bg-[#00000066] */}
			<div className="flex flex-col justify-center items-center gap-4  h-full text-white">
				<h3 className="w-full lg:w-2/3 font-bold text-base lg:text-lg text-center">
					{/* {title} */}
				</h3>
				<Link
					href={`/category/all?category_id=${id}`}
					className="bg-custom-blue px-3 lg:px-3 py-1 md:mt-[20vh] mt-[15vh] rounded font-bold text-white text-sm"
				>
					{locale === "en" ? "SHOP NOW" : "تسوق الآن"}
				</Link>
			</div>
		</div>
	);
};

export default MajiorAdv