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
	setSubCategoryName_,
	setSubSubCategoryName_,
	setSubSubCategoryId,
}: {
	subCategories: SubCategory[];
		subCategoryName: string | undefined;
		setSubCategoryName_: (name: string) => void;
		setSubSubCategoryName_: (name: string) => void;
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
				"flex flex-col pt-10 md:pb-32 pb-8 text-custom-black  " + shape
					? " gap-2 "
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
									setSubCategoryName_(
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
					<h2 className="font-semibold text-2xl mb-0 bg-slate-950 text-white p-6 pb-0 w-[100%] px-[10%] mx-auto">
						{subCategoryName}
					</h2>
					<div className="relative bg-slate-950">
						<span
							className="text-white  text-3xl cursor-pointer absolute p-2 rounded-full text-[#000000BB] top-1/2 -translate-y-1/2 left-[2vmax]"
							onClick={() =>
								document
									.getElementById("sub-scroll")
									?.scrollBy({
										left: -200,
										behavior: "smooth",
									})
							}
						>
							<>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									fill="#405FF2"
									height="800px"
									width="800px"
									version="1.1"
									id="Layer_1"
									viewBox="0 0 330 330"
									xmlSpace="preserve"
									className="rotate-180 w-[2vw] h-[2vw]"
								>
									<path
										id="XMLID_222_"
										d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
									/>
								</svg>
							</>
						</span>
						<div
							id="sub-scroll"
							className="overflow-x-scroll scroll-hidden overflow-y-hidden bg-slate-950 pb-5 w-5/6 mx-auto"
						>
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
												setSubCategoryName_(
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
												className="min-w-[80px] h-[60px] md:min-w-[260px] md:h-[140px] p-1 object-contain"
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
												setSubCategoryName_(
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
												className="min-w-[80px] h-[60px] md:min-w-[260px] md:h-[140px] p-1 object-contain"
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
						<span
							className="text-white text-3xl absolute p-2 rounded-full cursor-pointer top-1/2 -translate-y-1/2 right-[2vmax] "
							onClick={() =>
								document
									.getElementById("sub-scroll")
									?.scrollBy({
										left: 200,
										behavior: "smooth",
									})
							}
						>
							<>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									fill="#405FF2"
									height="800px"
									width="800px"
									version="1.1"
									id="Layer_1"
									viewBox="0 0 330 330"
									xmlSpace="preserve"
									className="w-[2vw] h-[2vw]"
								>
									<path
										id="XMLID_222_"
										d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
									/>
								</svg>
							</>
						</span>
					</div>
				</>
			)}
			{(shape || show) && (
				<h2 className="font-semibold text-2xl w-5/6 mx-auto">
					{supSubName}
				</h2>
			)}
			<div className="items-center md:gap-x-5 md:gap-y-3 w-5/6 mx-auto grid md:grid-cols-7 grid-cols-4">
				{(shape || show) &&
					products?.map((item, index) => (
						<div
							key={index}
							// href={`/product/${item.id}`}
							onClick={() => {
								setSubSubCategoryId(item.id);
								setSubSubCategoryName_(
									item.name[locale === "en" ? "en" : "ar"]
								);
							}}
							className="relative flex flex-col justify-center items-center gap-2 w-full scale-100 hover:scale-110 transition duration-300 cursor-pointer"
						>
							<Image
								src={item.image_url}
								alt={item.name[locale]}
								width={150}
								height={150}
								className="w-[141px] h-[141px] object-contain"
							/>
							<h4 className="font-light text-sm text-center">
								{item.name[locale]}
							</h4>
						</div>
					))}
			</div>
			{!shape && !show && (
				<>
					<h2 className="font-semibold text-2xl bg-slate-950 mb-0 text-white pt-6 px-[11%] pb-0 mx-auto">
						{supSubName}
					</h2>
					<div className="relative flex bg-slate-950">
						<span
							className="text-white text-3xl cursor-pointer absolute pb-2 rounded-full text-[#000000BB] top-1/2 -translate-y-1/2 left-[2vmax]"
							onClick={() =>
								document
									.getElementById("scrollable-subcategories")
									?.scrollBy({
										left: -200,
										behavior: "smooth",
									})
							}
						>
							<>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									fill="#405FF2"
									height="800px"
									width="800px"
									version="1.1"
									id="Layer_1"
									viewBox="0 0 330 330"
									xmlSpace="preserve"
									className="rotate-180 w-[2vw] h-[2vw]"
								>
									<path
										id="XMLID_222_"
										d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
									/>
								</svg>
							</>
						</span>
						<div
							id="scrollable-subcategories"
							className="relative overflow-x-scroll scroll-hidden overflow-y-hidden bg-slate-950 md:w-5/6 mx-auto pb-5 px-5"
						>
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
												setSubSubCategoryName_(
													item.name[locale]
												);
											}}
											className=" bg-slate-50 m-1 md:m-4 gap-2 scale-100 hover:scale-110 transition duration-300 cursor-pointer"
										>
											<Image
												src={item.image_url}
												alt={item.name[locale]}
												width={150}
												height={150}
												className="min-w-[80px] h-[60px] md:min-w-[260px] md:h-[140px] p-1 object-contain"
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
												setSubSubCategoryName_(
													item.name[locale]
												);
											}}
											className=" bg-slate-50 m-1 md:m-4 gap-2 scale-100 hover:scale-110 transition duration-300 cursor-pointer"
										>
											<Image
												src={item.image_url}
												alt={item.name[locale]}
												width={150}
												height={150}
												className="min-w-[80px] h-[60px] md:min-w-[260px] md:h-[140px] p-1 object-contain"
											/>
											<h4 className="font-light text-sm text-center">
												{item.name[locale]}
											</h4>
										</div>
									))}
							</div>
						</div>
						<span
							className="text-white text-3xl absolute p-2 rounded-full cursor-pointer top-1/2 -translate-y-1/2 right-[2vmax] "
							onClick={() =>
								document
									.getElementById("scrollable-subcategories")
									?.scrollBy({
										left: 200,
										behavior: "smooth",
									})
							}
						>
							<>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									fill="#405FF2"
									height="800px"
									width="800px"
									version="1.1"
									id="Layer_1"
									viewBox="0 0 330 330"
									xmlSpace="preserve"
									className="w-[2vw] h-[2vw]"
								>
									<path
										id="XMLID_222_"
										d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
									/>
								</svg>
							</>
						</span>
					</div>
				</>
			)}
		</section>
	);
};

export default ItemTypes
