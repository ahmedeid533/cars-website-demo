"use client";
import React, { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import Image from "next/image";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Link from "next/link";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import { apiClient } from "@/util/axois";
import { useLocale, useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { get } from "http";

const Cart = ({
	hovered,
	setCartItemsCount = () => {},
}: {
	hovered: boolean;
	setCartItemsCount?: (count: number) => void;
}) => {
	const t = useTranslations("Header");
	const locale = useLocale();
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

	const [cart, setCart] = useState<Cart | null>(null);
	const cookie = new Cookies();
	const router = useRouter();

	const getCart = async () => {
		const token = cookie.get("token");
		if (!token) {
			router.push("/login");
		}
		console.log("token ==> ", token);
		apiClient(token)
			.get("/cart")
			.then((res) => {
				if (res.data.data) {
					setCart(res.data.data);
					setCartItemsCount(res.data.data.items.length);
				}
			})
			.catch(async (err) => {
				console.log("error from cart ==> ", await err.response?.data);
				if (err.response?.data?.message === "Unauthenticated") {
					toast.error("Please login to view your cart");
					setCart({ items: [], total: 0 });
					setCartItemsCount(0);
					// Clear the token from cookies
					cookie.remove("token", { path: "/" });
					cookie.remove("customer", { path: "/" });
					// clear local storage
					localStorage.clear();
					// Redirect to login page
					router.push("/login");
				}
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

	const clearItem = (id: number) => {
		const token = cookie.get("token");
		apiClient(token)
			.delete("/cart/delete/item/" + id)
			.then((res) => {
				setCart({ items: [], total: 0 });
				toast.success("Item removed from cart");
			})
			.catch((err) => {
				console.log("error ==> ", err);
			});
	};

	useEffect(() => {
		if (!hovered) {
			return;
		}
		getCart();
	}, [hovered]);
	useEffect(() => {
		getCart();
	}, []);
	return (
		<div className="flex flex-col gap-5">
			<h2 className="font-bold text-custom-black">{t("Carts")}</h2>
			<div className="flex flex-col gap-8">
				{cart &&
					cart?.items?.map((item, index) => (
						<div key={index} className="flex flex-col gap-4">
							<div className="flex flex-row justify-between items-start w-full">
								<Image
									src={`${process.env.NEXT_PUBLIC_API}/storage/${item?.product?.main_photo}`}
									alt={
										locale == "en"
											? item?.product?.name_en
											: item?.product?.name_ar
									}
									width={40}
									height={20}
									className="object-contain"
								/>
								<p className="w-3/4 font-bold text-sm">
									{locale == "en"
										? item?.product?.name_en
										: item?.product?.name_ar}{" "}
								</p>
								<DeleteOutlineIcon
									onClick={() => {
										clearItem(item?.id);
									}}
									className="cursor-pointer"
								/>
							</div>
							<p className="flex flex-row justify-between items-center w-full">
								<span>
									{t("Qty")}: {item?.quantity}
								</span>
								<span>
									{item?.total}EGP each: {item?.price}EGP
								</span>
							</p>
						</div>
					))}
			</div>
			<Divider />

			<div className="flex flex-col gap-8">
				<p className="flex flex-col gap-1 text-custom-black text-sm">
					<span>
						{cart?.items?.length} {t("items in your Cart")}   |  {" "}
						<span
							className="cursor-pointer"
							onClick={() => {
								clearCart();
							}}
						>
							{t("Clear Cart")}
						</span>
					</span>
					<span>
						{t("Subtotal")}: {cart?.total}EGP
					</span>
				</p>
				<div className="flex flex-row items-center gap-4 w-4/5">
					<Link
						href={"/payment"}
						className="bg-custom-blue py-3 rounded w-full text-white text-center uppercase"
					>
						{t("Checkout Now")}
					</Link>
					<Link
						href={"/cart"}
						className="bg-custom-green py-3 rounded w-full text-white text-center uppercase"
					>
						{t("View Cart")}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Cart;
