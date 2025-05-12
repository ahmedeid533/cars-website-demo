"use client"
import { Divider } from '@mui/material'
import React from 'react'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { apiClient } from "@/util/axois";
import { useLocale } from 'next-intl';

interface CartItem {
	id: number;
	product: {
		main_photo: string;
		name_en: string;
		name_ar: string;
	};
	quantity: number;
	total: number;
	price: number;
}

interface Cart {
	items: CartItem[];
	total: number;
}

const OrderSummary = () => {
	const [cart, setCart] = useState<Cart | null>(null);
	const cookie = new Cookies();
	const router = useRouter();
	const locale = useLocale();
	const getCart = () => {
		const token = cookie.get("token");
		if (!token) {
			router.push("/login");
		}
		console.log("token ==> ", token);
		apiClient(token)
			.get("/cart")
			.then((res) => {
				setCart(res.data.data);
			})
			.catch((err) => {
				console.log("error ==> ", err);
			});
	};
	useEffect(() => {
		getCart();
	}, []);
	return (
		<div className="rounded border border-custom-black p-5 flex flex-col gap-10">
			{/* <div className='hidden lg:flex flex-col gap-2'>
                <h6 className='flex items-center justify-between'>
                    <span>Discount</span><span>$565.16</span>
                </h6>
                <Divider className=' bg-custom-black' />
            </div> */}
			<h2 className="text-xl font-bold text-custom-black">
				{locale == "en" ? "ORDER SUMMARY" : "ملخص الطلب"}
			</h2>
			<div className="flex flex-col gap-2">
				<h6>{cart?.items?.length}
					{locale == "en" ? "items in your Cart" : "عناصر في سلة التسوق الخاصة بك"}
				</h6>
				<Divider className=" bg-custom-black" />
			</div>
			{/* <div className='flex flex-col gap-2'>
                <h6 className='flex items-center justify-between'>
                    <span>Subtotal</span><span>$565.16</span>
                </h6>
                <Divider className=' bg-custom-black' />
            </div>
            <div className='flex flex-col gap-2'>
                <h6 className='flex items-center justify-between'>
                    <span>Discount</span><span>$565.16</span>
                </h6>
                <Divider className=' bg-custom-black' />
            </div> */}
			<div className="flex items-center justify-between w-full gap-2">
				<div className="flex-col flex gap-1">
					<h6>
						{locale == "en" ? "Total" : "الإجمالي"}
					</h6>
					{/* <p className='text-sm'>Including $2.24 in taxes</p> */}
				</div>
				<p className="font-bold text-4xl">{cart?.total}EGP</p>
			</div>
		</div>
	);
};

export default OrderSummary
