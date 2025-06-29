import { useLocale } from 'next-intl';
import Image from 'next/image'
import React from 'react'

interface FirstSectionProps {
	order_number: string;
}

const FirstSection = ({ order_number }: FirstSectionProps) => {
	const locale = useLocale();
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<h2 className="font-bold text-2xl">
				{locale == "en"
					? "Thank You For Your Purchase"
					: "شكرا لشرائك"}
			</h2>
			<Image
				src={"/payment/thank.png"}
				alt="thank"
				width={400}
				height={400}
				className="object-contain w-[250px] h-[250px]"
			/>
			<button className="w-3/4 rounded py-3 border border-custom-black text-sm lg:text-base flex items-center justify-center gap-1">
				<span className="text-custom-black">
					{locale == "en" ? "Order Number : " : "رقم الطلب : "}
				</span>
				<span className="text-custom-blue">
					{order_number} {locale == "en" ? "Confirmed" : "تم تأكيده"}
				</span>
			</button>
			{/* <button className="w-3/4 flex items-center justify-center rounded py-3 text-white bg-custom-green">
				Track order
			</button> */}
		</div>
	);
};

export default FirstSection
