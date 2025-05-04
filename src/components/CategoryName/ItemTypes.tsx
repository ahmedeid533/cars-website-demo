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
	const [shape, setShape] = useState(true);
	const locale = useLocale();

	const getSubSubCategory = async (id: number): Promise<void> => {
		const subSubCategory: any[] = (await getSub_subCategories(id)) || [];
		setProducts(subSubCategory || []);
		// setSubSubCategoryId(subSubCategory[0]?.id);
	}

	useEffect(() => {
		if (document.location.href.includes("sub_category_id")) {
			setProducts(subCategories);
			setSupSubName(subCategoryName || "");
			// setSubSubCategoryId(subCategories[0]?.id);
			// setShow(false);
		} else {
			getSubSubCategory(supSubId);
			setShow(true);
		}
	}, [supSubId]);


	useEffect(() => {
		document.location.href.includes("sub_category_id") ? null : setSupSubName(subCategories[0]?.name[locale === "en" ? "en" : "ar"]);
		if (
			subCategoryName == "oils" ||
			subCategoryName == "tires" ||
			subCategoryName == "battery"
		) {
			setShape(false);
		}
	}, []);
	return (
		<section
			className={
				"flex flex-col pt-10 md:pb-32 pb-8 text-custom-black" + shape
					? " gap-2"
					: ""
			}
		>
			{show && shape && (
				<>
					<h2 className="font-semibold text-2xl">
						{subCategoryName}
					</h2>
					<div className="items-center md:gap-x-8 md:gap-y-5 w-5/6 grid md:grid-cols-10 grid-cols-3">
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
			{show && !shape && (
				<>
					<h2 className="font-semibold text-2xl bg-slate-950 mb-0 text-white p-10 pb-0 w-5/6 mx-auto">
						{subCategoryName}
					</h2>
					<div className="overflow-x-scroll scroll-hidden overflow-y-hidden bg-slate-950 p-5 w-5/6 mx-auto">
						<div className="flex flex-row  mt-0">
							{subCategories
								?.slice(
									0,
									subCategories.length / 2 < 5
										? 5
										: subCategories.length / 2
								)
								.map((item, index) => (
									<div
										key={index}
										// href={`/product/${item.id}`}
										onClick={() => {
											setSupSubId(item.id);
											setSupSubName(
												item.name[
													locale === "en"
														? "en"
														: "ar"
												]
											);
										}}
										className="bg-slate-50 m-1 md:m-4 gap-2 scale-100 hover:scale-110 transition duration-300 cursor-pointer"
									>
										<Image
											src={item.image_url}
											alt={
												item.name[
													locale === "en"
														? "en"
														: "ar"
												]
											}
											width={150}
											height={150}
											className="min-w-[80px] h-[60px] md:min-w-[240px] md:h-[140px] p-1 object-contain"
										/>
										<h4 className="font-light text-sm text-center">
											{
												item.name[
													locale === "en"
														? "en"
														: "ar"
												]
											}
										</h4>
									</div>
								))}
						</div>
						<div className="flex flex-row  mt-0">
							{subCategories
								?.slice(
									subCategories.length / 2 < 5
										? 5
										: subCategories.length / 2
								)
								.map((item, index) => (
									<div
										key={index}
										// href={`/product/${item.id}`}
										onClick={() => {
											setSupSubId(item.id);
											setSupSubName(
												item.name[
													locale === "en"
														? "en"
														: "ar"
												]
											);
										}}
										className="bg-slate-50 m-1 md:m-4 gap-2 scale-100 hover:scale-110 transition duration-300 cursor-pointer"
									>
										<Image
											src={item.image_url}
											alt={
												item.name[
													locale === "en"
														? "en"
														: "ar"
												]
											}
											width={150}
											height={150}
											className="min-w-[80px] h-[60px] md:min-w-[240px] md:h-[140px] p-1 object-contain"
										/>
										<h4 className="font-light text-sm text-center">
											{
												item.name[
													locale === "en"
														? "en"
														: "ar"
												]
											}
										</h4>
									</div>
								))}
						</div>
					</div>
				</>
			)}
			{(shape || show) && (
				<h2 className="font-semibold text-2xl w-5/6 mx-auto">
					{supSubName}
				</h2>
			)}
			<div className="items-center md:gap-x-8 md:gap-y-5 w-5/6 mx-auto grid md:grid-cols-10 grid-cols-4">
				{(shape || show) &&
					products?.map((item, index) => (
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
			{!shape && !show && (
				<>
					<h2 className="font-semibold text-2xl bg-slate-950 mb-0 text-white p-10 pb-0 md:w-5/6 mx-auto">
						{supSubName}
					</h2>
					<div className="overflow-x-scroll scroll-hidden overflow-y-hidden bg-slate-950 md:w-5/6 mx-auto p-5">
						<div className="flex flex-row mt-0">
							{products
								?.slice(
									0,
									products.length / 2 > 5
										? products.length / 2
										: 5
								)
								.map((item, index) => (
									<div
										key={index}
										// href={`/product/${item.id}`}
										onClick={() => {
											setSubSubCategoryId(item.id);
										}}
										className=" bg-slate-50 m-1 md:m-4 gap-2 scale-100 hover:scale-110 transition duration-300 cursor-pointer"
									>
										<Image
											src={item.image_url}
											alt={item.name[locale]}
											width={150}
											height={150}
											className="min-w-[80px] h-[60px] md:min-w-[200px] md:h-[140px] p-1 object-contain"
										/>
										<h4 className="font-light text-sm text-center">
											{item.name[locale]}
										</h4>
									</div>
								))}
						</div>
						<div className="flex flex-row mt-0">
							{products
								?.slice(
									products.length / 2 > 5
										? products.length / 2
										: 5
								)
								.map((item, index) => (
									<div
										key={index}
										// href={`/product/${item.id}`}
										onClick={() => {
											setSubSubCategoryId(item.id);
										}}
										className=" bg-slate-50 m-1 md:m-4 gap-2 scale-100 hover:scale-110 transition duration-300 cursor-pointer"
									>
										<Image
											src={item.image_url}
											alt={item.name[locale]}
											width={150}
											height={150}
											className="min-w-[80px] h-[60px] md:min-w-[200px] md:h-[140px] p-1 object-contain"
										/>
										<h4 className="font-light text-sm text-center">
											{item.name[locale]}
										</h4>
									</div>
								))}
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default ItemTypes
