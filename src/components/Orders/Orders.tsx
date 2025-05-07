"use client";
import React, { useState } from 'react'
import CustomTabs from './CustomTabs'
import Image from 'next/image';
import OrderInfo from './OrderInfo';
import OrderOptions from './OrderOptions';
import { Box, Divider } from '@mui/material';
import { useEffect } from 'react';
import { apiClient } from '@/util/axois';
import Cookies from 'universal-cookie';


const Orders = () => {
    // const [value, setValue] = useState(0);
	interface Order {
		id: string;
		image: string;
		order_number: string;
		status: string;
		created_at: string;
		total_amount: number;
	}

	const [orders, setOrders] = useState<Order[]>([]);
		const cookie = new Cookies();
		const token = cookie.get("token");
		const fetchOrders = async () => {
			try {
				apiClient(token).get("/orders").then((res) => {
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
		<>
			{/* <CustomTabs value={value} setValue={setValue} /> */}
			<Divider />
			<div className="custom-container1 flex flex-col gap-5 py-10">
				<div className="flex flex-col gap-1">
					<h2 className="font-bold text-2xl text-custom-black">
						Order History
					</h2>
					<p className="text-sm text-custom-gray">
						Mange your recent orders and invoices
					</p>
				</div>
				<div className="flex flex-col gap-10">
					{orders.map((order: Order, index) => (
						<Box
							key={order.id}
							className="p-5 grid grid-cols-1 lg:grid-cols-8 items-center w-full gap-y-3 lg:gap-y-0 gap-x-0 lg:gap-x-2 relative"
							sx={{
								boxShadow: {
									xs: "none",
									lg: "0px 4px 4px 0px #00000040",
								},
							}}
						>
							<div className="flex flex-col lg:flex-row col-span-5 items-center justify-center rounded-xl border border-custom-blue lg:border-transparent">
								<Image
									src={order.image}
									alt="item"
									width={200}
									height={200}
									className="object-contain w-[200px] h-[200px] col-span-1"
								/>
								<Divider className="bg-custom-black w-full block lg:hidden" />
								<OrderInfo order={order} />
							</div>
							<OrderOptions id={Number(order.id)} status={order.status} />
						</Box>
					))}
				</div>
			</div>
		</>
	);
}

export default Orders
