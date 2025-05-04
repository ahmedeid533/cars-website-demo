import Link from 'next/link'
import React from 'react'

const MajiorAdv = ({
	backgroundImage,
	title,
	id,
}: {
	backgroundImage: string;
	title: string;
	id: number;
}) => {
	return (
		<div
			className={` bg-cover bg-right bg-no-repeat h-[208px] w-1/2 lg:w-full`}
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className="flex flex-col justify-center items-center gap-4 bg-[#00000033] h-full text-white">
				<h3 className="w-full lg:w-2/3 font-bold text-base lg:text-lg text-center">
					{/* {title} */}
				</h3>
				<Link
					href={`/category/all?category_id=${id}`}
					className="bg-custom-blue px-3 lg:px-3 py-1 md:mt-[20vh] mt-[15vh] rounded font-bold text-white text-sm"
				>
					SHOP NOW
				</Link>
			</div>
		</div>
	);
};

export default MajiorAdv