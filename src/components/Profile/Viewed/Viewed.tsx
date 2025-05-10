import React from 'react'
import OrderSlider from './OrderSilder/OrderSlider'
import { useLocale } from 'next-intl';

const Viewed = () => {
	const locale = useLocale();
    return (
		<div className="flex flex-col gap-10">
			<div className="flex flex-col  gap-1 w-[300px] mb-10 mt-5 rounded-md border border-custom-black p-3 text-custom-black bg-transparent transition duration-300 hover:bg-[#405FF226] hover:border-[#405FF226]">
					<h3 className="font-bold text-xl">
						{locale === "en" ? "Recently Viewed Items" : "العناصر التي تمت مشاهدتها مؤخرًا"}
				</h3>
					<p className="text-xs">
						{locale === "en" ? `Products I've searched for` : "المنتجات التي بحثت عنها"}
				</p>
			</div>
			<div className="custom-container2">
				<OrderSlider />
			</div>
		</div>
	);
}

export default Viewed
