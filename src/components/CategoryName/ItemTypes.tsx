import { SubCategory } from '@/types'
import { useLocale } from 'next-intl'
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { apiClient } from "@/util/axois";
import { getSub_subCategories } from "@/libs/get-sub-sub-categories";

const ItemTypes = ({
	subCategories,
	subCategoryName,
	setSubSubCategoryId,
}: {
	subCategories: SubCategory[];
	subCategoryName: string | undefined;
	setSubSubCategoryId: (id: number) => void;
}) => {
	const [supSubId, setSupSubId] = useState<number>(subCategories[0]?.id);
	const [supSubName, setSupSubName] = useState<string>("");
	const [products, setProducts] = useState<any[]>([]);
	const [show, setShow] = useState(false);
	const locale = useLocale();

	const getSubSubCategory = async (id: number): Promise<void> => {
		const subSubCategory: any[] = (await getSub_subCategories(id)) || [];
		setProducts(subSubCategory || []);
		setSubSubCategoryId(subSubCategory[0]?.id);
	}

	useEffect(() => {
		if (document.location.href.includes("sub_category_id")) {
			setProducts(subCategories);
			setSupSubName(subCategoryName || "");
			setSubSubCategoryId(subCategories[0]?.id);
			// setShow(false);
		} else {
			getSubSubCategory(supSubId);
			setShow(true);
		}
	}, [supSubId]);


	useEffect(() => {
		document.location.href.includes("sub_category_id") ? null : setSupSubName(subCategories[0]?.name[locale === "en" ? "en" : "ar"]);
	}, []);
	return (
		<section className="flex flex-col gap-2 pt-10 md:pb-32 pb-8 text-custom-black">
			{show && (
				<>
					<h2 className="font-semibold text-2xl">
						{subCategoryName}
					</h2>
					<div className="items-center md:gap-x-8 md:gap-y-5  grid md:grid-cols-10 grid-cols-3">
						{subCategories?.map((item, index) => (
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
									alt={
										item.name[locale === "en" ? "en" : "ar"]
									}
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
				</>
			)}
			<h2 className="font-semibold text-2xl">{supSubName}</h2>
			<div className="items-center md:gap-x-8 md:gap-y-5 grid md:grid-cols-10 grid-cols-3">
				{products?.map((item, index) => (
					<div
						key={index}
						// href={`/product/${item.id}`}
						onClick={() => {
							setSubSubCategoryId(item.id);
						}}
						className="relative flex flex-col justify-center items-center gap-2 w-full scale-100 hover:scale-110 transition duration-300 cursor-pointer"
					>
						<Image
							src={item.image_url}
							alt={item.name[locale]}
							width={150}
							height={150}
							className="w-[120px] h-[120px] object-contain"
						/>
						<h4 className="font-light text-sm text-center">
							{item.name[locale]}
						</h4>
					</div>
				))}
			</div>
		</section>
	);
};

export default ItemTypes
