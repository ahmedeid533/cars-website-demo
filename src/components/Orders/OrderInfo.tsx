import * as React from "react";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useLocale } from "next-intl";

type Order = {
	id: string;
	image: string;
	order_number: string;
	status: string;
	created_at: string;
	total_amount: number;
};

type props = {
	order: Order;
};
const OrderInfo = ({ order }: props) => {
	const locale = useLocale();
	return (
		<div className="w-full flex items-start justify-center lg:justify-between gap-5 p-4">
			<div className="flex flex-col items-start justify-start gap-1 lg:gap-5">
				<h4 className="font-bold text-black text-sm lg:text-lg">
					{locale == "en" ? "Order Number" : "رقم الطلب"}
				</h4>
				<h6 className="text-xs lg:text-sm text-custom-black">
					{order.order_number}
				</h6>
			</div>
			<div className="flex flex-col items-start justify-start gap-1 lg:gap-5">
				<h4 className="font-bold text-black text-sm lg:text-lg">
					{locale == "en" ? "Status" : "الحالة"}
				</h4>
				<h6 className="text-xs lg:text-sm text-custom-black flex items-center gap-1">
					{order.status === "paid" && (
						<div className="rounded-full text-sm bg-custom-green flex items-center justify-center text-white">
							<DoneIcon />
						</div>
					)}
					{order.status === "cancelled" && (
						<div className="rounded-full text-sm bg-[#B90000] flex items-center justify-center text-white">
							<ClearIcon />
						</div>
					)}
					{order.status === "pending" && (
						<div className="rounded-full text-sm bg-[#FFA500] flex items-center justify-center text-white">
							<AccessTimeIcon />
						</div>
					)}
					<span className="text-xs lg:text-sm  text-custom-black">
						{order.status}
					</span>
				</h6>
			</div>
			<div className="flex flex-col items-start justify-start gap-1 lg:gap-5">
				<h4 className="font-bold text-black text-sm lg:text-lg">
					{locale == "en" ? "Order Date" : "تاريخ الطلب"}
				</h4>
				<h6 className="text-xs lg:text-sm text-custom-black">
					{order.created_at.split(" ")[0]}
				</h6>
			</div>
			<div className="flex flex-col items-start justify-start gap-1 lg:gap-5">
				<h4 className="font-bold text-black text-sm lg:text-lg">
					{locale == "en" ? "Price" : "السعر"}
				</h4>
				<h6 className="text-xs lg:text-sm text-custom-black">
					{order.total_amount}
				</h6>
			</div>
		</div>
	);
};

export default OrderInfo;
