import { Divider } from '@mui/material'
import React from 'react'
import { useLocale } from 'next-intl'

interface Item {
	product_details: {
		name_en: string;
		name_ar: string;
	};
	quantity: number;
	unit_price: number;
	total_price: number;
}

const SecondSection: React.FC<{ items: Item[] }> = ({ items }) => {
	const locale = useLocale()
    return (
		<div className="w-full flex items-center justify-center">
			<div className="flex flex-col gap-5 w-3/4 mt-10">
				<div className="flex flex-col gap-2 w-full">
					<h6 className="w-full grid grid-cols-4 items-center justify-between text-center font-bold">
						<span>Name</span>
						<span>Quantity</span>
						<span>Price</span>
						<span>Total</span>
					</h6>
					<Divider className="w-full bg-custom-gray" />
				</div>
				{/* <div className="flex flex-col gap-2 w-full">
						<h6 className="w-full grid grid-cols-4 items-center justify-between text-center">
						<span>Car</span>
						<span>5</span>
						<span>$ 900</span>
						<span>$ 45,000</span>
					</h6>
					<Divider className="w-full bg-custom-gray" />
				</div> */}
				{items?.map((item, index) => (
					<div
						key={index}
						className="w-full grid grid-cols-4 items-center justify-between text-center"
					>
						<span className='text-ellipsis overflow-hidden'>{locale == "en" ? item.product_details.name_en : item.product_details.name_ar}</span>
						<span>{item.quantity}</span>
						<span>{item.unit_price} EGP</span>
						<span>{item.total_price} EGP</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default SecondSection
