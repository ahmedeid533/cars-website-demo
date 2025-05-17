import Cookies from "universal-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { apiClient } from "@/util/axois";
import { useLocale } from "next-intl";

const ConfirmedOrders = () => {
	interface Order {
		id: string;
		image: string;
		order_number: string;
		status: string;
		total_amount: number;
	}

	const [orders, setOrders] = useState<Order[]>([]);
	const cookie = new Cookies();
	const token = cookie.get("token");
	const locale = useLocale();
	const fetchOrders = async () => {
		try {
			apiClient(token)
				.get("/orders")
				.then((res) => {
					console.log("res ==> ", res.data.data);
					setOrders(res.data.data);
					return res.data.data;
				});
			// setOrders(response);
		} catch (error) {
			console.error("Error fetching orders:", error);
		}
	};
	useEffect(() => {
		fetchOrders();
	}, []);
	return (
		<div
			className="col-span-2 p-5 border border-[#A4A4A4] rounded flex flex-col gap-5"
			style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
		>
			<h2 className="text-xl font-bold text-custom-black">
				{locale == "en" ? "last Orders" : "الطلبات الأخيرة"}
			</h2>
			<div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-x-3 gap-y-5">
				{orders.slice(0, 4).map((item, index) => (
					<div
						key={item.id}
						className="p-5 rounded relative flex flex-col gap-5 text-custom-black"
						style={{ boxShadow: "0px 2px 5px 0px #00000040" }}
					>
						<div className="flex items-center justify-center">
							<Image
								src={item.image ? item.image : ""}
								alt="item"
								width={200}
								height={200}
								className="object-cover w-full md:h-[250px] h-[200px] rounded"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h4 className="text-xs lg:text-base">
								{item.order_number}
							</h4>
							<h4 className="text-xs lg:text-base">
								{item.status}
							</h4>
							<p className="font-bold text-xs lg:text-base">
								{item.total_amount} EGP
							</p>
						</div>
						<div className="flex items-center justify-center w-full">
							<Link
								href={`/orders/${item.id}`}
								className="text-center text-xs lg:text-base w-full rounded py-3 border border-custom-black capitalize text-custom-black transition duration-300 hover:bg-custom-blue hover:border-custom-blue hover:text-white"
							>
								{locale == "en"
									? "view order details"
									: "عرض تفاصيل الطلب"}
							</Link>
						</div>
					</div>
				))}
			</div>
			<div className="flex items-end justify-end w-full">
				<Link
					href={"/orders"}
					className="cursor-pointer text-custom-blue"
				>
					{locale == "en" ? "View All Orders" : "عرض جميع الطلبات"}
				</Link>
			</div>
		</div>
	);
};

export default ConfirmedOrders;
