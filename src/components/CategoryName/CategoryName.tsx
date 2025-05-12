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
	const locale = useLocale();
	console.log("subCategoryOption ==> ", subCategoryOption);


	return (
		<>
			<MainSection category={category} />
			<div className="flex justify-evenly items-start w-full md:w-[80%] mx-auto mt-4 mb-4 overflow-scroll scroll-hidden bg-[#6F88FF26]">
				{subCategoryOption &&
					subCategoryOption[0]?.values.map((option, index) => (
						<div
							key={index}
							className="font-bold text-sm bg-white text-[#1E1E1E] text-nowrap mx-2 rounded-lg px-8 py-4 cursor-pointer hover:bg-[#3A3A3A]"
							onClick={() => {
								setOption(option?.id + "");
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
			<div className="custom-container1">
				{
					// hasBrands === false &&
					sub_subCategories?.length > 0 && (
						<ItemTypes
							subCategories={sub_subCategories}
							subCategoryName={subCategoryName}
							setSubSubCategoryId={setSubSubCategoryId}
						/>
					)
				}
				{subSubCategoryId && (
					<FilterAndItems
						subSubCategoryId={subSubCategoryId}
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
