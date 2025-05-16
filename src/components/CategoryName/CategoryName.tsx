'use client'
import FilterAndItems from './FilterAndItems/FilterAndItems'
import { getCategories } from "@/libs/get-categories";
import ItemTypes from './ItemTypes'
import MainSection from './MainSection'
import TiresTypes from './TiresTypes'
import OptionMobileBtn from './OptionMobileBtn'
import { Category, SubCategory, SubCategoryOption } from '@/types'
import { useLocale } from 'next-intl'
import { useEffect } from 'react'
import { useState } from "react";
import Link from "next/link";

interface ICategoryName {
	category: Category | null | undefined;
	hasBrands: boolean;
	sub_subCategories: SubCategory[];
	subCategoryName: string;
	subCategoryOption: SubCategoryOption[];
}
const CategoryName = ({
	category,
	hasBrands,
	sub_subCategories,
	subCategoryName,
	subCategoryOption,
}: ICategoryName) => {
	const [subSubCategoryId, setSubSubCategoryId] = useState<number>(-1);
	const [option, setOption] = useState<string>("");
	const [subCategoryName_, setSubCategoryName_] = useState<string>("");
	const [subSubCategoryName_, setSubSubCategoryName_] = useState<string>("");
	const locale = useLocale();
	console.log("subCategoryOption ==> ", subCategoryOption);


	return (
		<>
			<MainSection category={category} />
			{subCategoryOption && subCategoryOption[0] && (
				<div className="font-bold text-xl md:w-[80%] mx-auto pt-3 text-black px-6  bg-[#6F88FF26] ">
					{locale == "en" ? "size" : "المقاس"}
				</div>
			)}
			<div className="flex justify-evenly items-start w-full md:w-[80%] mx-auto mt-0 mb-4 overflow-scroll scroll-hidden bg-[#6F88FF26]">
				{subCategoryOption &&
					subCategoryOption[0]?.values.map((option, index) => (
						<div
							key={index}
							className="font-bold text-xl bg-white text-[#1E1E1E] text-nowrap mx-2 clicks rounded-lg px-12 py-4 m-2 cursor-pointer hover:bg-custom-blue"
							onClick={(e) => {
								setOption(option?.id + "");
								document
									.querySelectorAll(".clicks")
									.forEach((el) => {
										if (el !== e.currentTarget) {
											el.classList.remove(
												"bg-custom-blue"
											);
											el.classList.remove("text-white");
											el.classList.add("text-[#1E1E1E]");
											el.classList.add("bg-white");
										}
									});
								e.currentTarget.classList.remove(
									"text-[#1E1E1E]"
								);
								e.currentTarget.classList.remove("bg-white");
								e.currentTarget.classList.add("bg-custom-blue");
								e.currentTarget.classList.add("text-white");
							}}
						>
							{option.value[locale === "en" ? "en" : "ar"]}
						</div>
					))}
			</div>
			{/* <OptionMobileBtn /> */}
			{/* {hasBrands && (
				<div>
				 <ShopBySize /> 
					<TiresTypes
						brands={sub_subCategories}
						subCategoryName={subCategoryName}
					/>
				</div>
			)} */}
			<div className="custom-container3">
				{
					// hasBrands === false &&
					sub_subCategories?.length > 0 && (
						<ItemTypes
							subCategories={sub_subCategories}
							subCategoryName={subCategoryName}
							setSubSubCategoryId={setSubSubCategoryId}
							setSubCategoryName_={setSubCategoryName_}
							setSubSubCategoryName_={setSubSubCategoryName_}
						/>
					)
				}
				{subSubCategoryId && (
					<FilterAndItems
						subSubCategoryId={subSubCategoryId}
						subCategoryName={subCategoryName_}
						subSubCategoryName={subSubCategoryName_}
						option={option}
						optionId={
							subCategoryOption ? subCategoryOption[0]?.id : 0
						}
					/>
				)}
			</div>
		</>
	);
};

export default CategoryName
