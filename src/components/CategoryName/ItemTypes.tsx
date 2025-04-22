import { SubCategory } from '@/types'
import { useLocale } from 'next-intl'
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { apiClient } from "@/util/axois";

const ItemTypes = ({
	sub_subCategories,
	subCategoryName,
}: {
	sub_subCategories: SubCategory[];
	subCategoryName: string | undefined;
}) => {
	const [supSubId, setSupSubId] = useState<number>(0);
	const [supSubName, setSupSubName] = useState<string>("");
	const [products, setProducts] = useState<any[]>([]);
	const locale = useLocale();

	useEffect(() => {
		apiClient()
			.get(`/products?sub_subcategory_id=${supSubId}`)
			.then((res) => {
				console.log("res ==> ", res.data.data);
				setProducts(res.data.data);
			})
			.catch((err) => {
				console.log("err ==> ", err);
			});
	}, [supSubId]);
	return (
		<section className="flex flex-col gap-6 pt-10 md:pb-32 pb-8 text-custom-black">
			<h2 className="font-semibold text-2xl">{subCategoryName}</h2>
			<div className="items-center md:gap-x-16 md:gap-y-10  grid grid-cols-5">
				{sub_subCategories?.map((item, index) => (
					<div
						key={index}
						// href={`/product/${item.id}`}
						onClick={() => {
							setSupSubId(item.id);
							setSupSubName(
								item.name[locale === "en" ? "en" : "ar"]
							);
						}}
						className="relative flex flex-col justify-center items-center gap-2 w-full scale-100 hover:scale-110 transition duration-300 cursor-pointer"
					>
						<Image
							src={item.image_url}
							alt={item.name[locale === "en" ? "en" : "ar"]}
							width={150}
							height={150}
							className="w-[150px] h-[150px] object-contain"
						/>
						<h4 className="font-light text-sm text-center">
							{item.name[locale === "en" ? "en" : "ar"]}
						</h4>
					</div>
				))}
			</div>
			<h2 className="font-semibold text-2xl">{supSubName}</h2>
			<div className="items-center md:gap-x-16 md:gap-y-10  grid grid-cols-5">
				{products?.map((item, index) => (
					<Link
						key={index}
						href={`/product/${item.id}`}
						className="relative flex flex-col justify-center items-center gap-2 w-full scale-100 hover:scale-110 transition duration-300 cursor-pointer"
					>
						<Image
							src={
								"https://3arbitk.com/storage/" + item.main_photo
							}
							alt={locale === "en" ? item.name_en : item.name_ar}
							width={150}
							height={150}
							className="w-[150px] h-[150px] object-contain"
						/>
						<h4 className="font-light text-sm text-center">
							{locale === "en" ? item.name_en : item.name_ar}
						</h4>
					</Link>
				))}
			</div>
		</section>
	);
};

export default ItemTypes
