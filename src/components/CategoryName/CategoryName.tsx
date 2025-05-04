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
	const locale = useLocale();
	return (
		<>
			<MainSection category={category} />
			{/* <div className="flex justify-evenly items-center w-full">
				{subCategoryOption &&
					subCategoryOption[0]?.values.map((option, index) => (
						<Link
							key={index}
							href={"#"}
							className="font-bold text-sm"
						>
							{option.value[locale === "en" ? "en" : "ar"]}
						</Link>
					))}
			</div> */}
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
					sub_subCategories.length > 0 && (
						<ItemTypes
							subCategories={sub_subCategories}
							subCategoryName={subCategoryName}
							setSubSubCategoryId={setSubSubCategoryId}
						/>
					)
				}
				{subSubCategoryId && (
					<FilterAndItems subSubCategoryId={subSubCategoryId} />
				)}
			</div>
		</>
	);
};

export default CategoryName
