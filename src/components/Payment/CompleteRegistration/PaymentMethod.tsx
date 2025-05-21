import { apiClient } from "@/util/axois";
import { Radio } from "@mui/material";
import { useLocale } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type props = {
	payment: string;
	setPayment: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const PaymentMethod = ({ payment, setPayment }: props) => {
	const [payments, setPayments] = useState<any[]>([]);
	const locale = useLocale();

	const controlProps = (item: string) => ({
		checked: payment === item,
		onChange: setPayment,
		value: item,
		name: "payment",
		id: item,
		inputProps: { "aria-label": item },
	});

	const getPaymentMethod = () => {
		apiClient()
			.get("/payment-methods")
			.then((res) => {
				console.log(res.data);
				setPayments(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getPaymentMethod();
	}, []);
	return (
		<div className="flex flex-col gap-5 w-full">
			<h2 className="text-xl font-bold text-custom-black">
				{locale == "en"?"Payment methods":"طرق الدفع"}
			</h2>

			<div className="flex gap-2 lg:gap-4 items-center flex-wrap">
				{payments?.map((item, index) => (
					<div key={index} className="flex items-center gap-2">
						<Radio {...controlProps(item?.id+"")} color="success" />

						<label
							htmlFor={item?.id}
							className="flex items-center justify-center p-2 cursor-pointer"
						>
							<Image
								src={`https://app.3arbitk.com${item?.image}`}
								alt={item?.name}
								width={100}
								height={70}
								className="object-contain w-[100px] h-[60px]"
							/>
						</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default PaymentMethod;
