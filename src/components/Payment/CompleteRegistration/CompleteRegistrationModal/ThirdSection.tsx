import { useLocale } from "next-intl";
import React from "react";

interface ThirdSectionProps {
	total: number;
}

const ThirdSection: React.FC<ThirdSectionProps> = ({ total }) => {
	const locale = useLocale();
	return (
		<div className="w-full flex items-center justify-center">
			<div className="flex flex-col w-3/4 justify-center gap-4 text-custom-black">
				{/* <p className='w-full flex items-center justify-between'>
                    <span >Subtotal</span><span>$95,000</span>
                </p>
                <p className='w-full flex items-center justify-between'>
                    <span>Total excluding tax</span><span>$95,000</span>
                </p>
                <p className='w-full flex items-center justify-between'>
                    <span>Discount (2%)</span><span>$1,900</span>
                </p>
                <p className='w-full flex items-center justify-between'>
                    <span>Total</span><span>$93,100</span>
                </p> */}
				<p className="w-full flex items-center justify-between font-bold">
					<span>
						{locale == "en" ? "Amout Due" : "المبلغ المستحق"}
					</span>
					<span>{total}EGP</span>
				</p>
			</div>
		</div>
	);
};

export default ThirdSection;
