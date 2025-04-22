"use client";
import React from "react";
import Link from "next/link";
import Items from "./Items";
import OrderDetails from "./OrderDetails";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import { apiClient } from "@/util/axois";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Cart = () => {
	const cookie = new Cookies();
	const router = useRouter();

	interface Cart {
		items: any[]; // Replace `any` with the specific type of items if known
		total: number; // Add other properties as needed
	}

	const [cart, setCart] = useState<Cart>({ items: [], total: 0 });

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

	const clearCart = () => {
		const token = cookie.get("token");
		apiClient(token)
			.delete("/cart/clear")
			.then((res) => {
				setCart({ items: [], total: 0 });
				toast.success("Cart cleared successfully");
			})
			.catch((err) => {
				console.log("error ==> ", err);
			});
	};
	
	useEffect(() => {
		getCart();
	}, []);

	return (
		<>
			<div className="custom-container1 py-10 flex flex-col gap-5">
				<h2 className="text-custom-black font-bold text-3xl uppercase">
					Shopping Cart
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-4 items-start gap-5">
					<div className="flex flex-col col-span-1 lg:col-span-3 gap-3">
						<Items cart={cart?.items} />
						<div className="w-full hidden lg:flex items-center justify-between">
							<div className="w-1/3"></div>
							<div className="w-1/3 flex items-center justify-center">
								<button className="rounded border border-custom-black text-custom-black py-3 px-6 font-bold">
									Keep Shopping
								</button>
							</div>
							<div className="w-1/3 flex items-end justify-end">
								<button
									onClick={() => {
										clearCart();
									}}
									className="text-custom-blue font-bold"
								>
									Clear The Cart
								</button>
							</div>
						</div>
					</div>
					<OrderDetails total={cart?.total} />
					<div className="w-full flex items-center justify-between">
						<div className="flex items-center justify-center">
							<Link href={"/category/all"} className="rounded text-white bg-custom-blue  py-3 px-6 font-normal">
								Keep Shopping
							</Link>
						</div>
						<div className="flex items-end justify-end">
							<button
								onClick={() => {
									clearCart();
								}}
								className="text-custom-blue font-bold"
							>
								Clear The Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
