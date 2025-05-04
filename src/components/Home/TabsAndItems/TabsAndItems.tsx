'use client'
import { Divider } from '@mui/material'
import { memo, useEffect, useState } from "react";
import { getSubCategories } from '@/libs/get-sub-categories'
import CustomTabs from "./CustomTabs";
import CustomItemsContainer from "./CustomItemsContainer";
import { useLocale } from "next-intl";
import { Category } from "@/types";
import { AllItemsInterface } from "@/libs/get-category-tabs-with-data";

interface ITabsAndItems {
	category_tabs: Category[];
	allCategoryItems: AllItemsInterface[];
}
const TabsAndItems = ({ allCategoryItems, category_tabs }: ITabsAndItems) => {
	const [value, setValue] = useState(0);
	const locale = useLocale();
	return (
		<>
			{category_tabs.length > 0 ? (
				<section className="flex flex-col gap-1 pb-5">
					<div className="custom-container1">
						<CustomTabs
							value={value}
							setValue={setValue}
							categoryTabs={category_tabs}
						/>
					</div>
					<Divider />
					<CustomItemsContainer
						value={allCategoryItems[value]?.value || 1}
						name={
							allCategoryItems[value]?.name[
								locale === "en" ? "en" : "ar"
							] || "top categories"
						}
						data={
							allCategoryItems[value]
								? allCategoryItems[value].data
								: []
						}
					/>
				</section>
			) : (
				<h2>Loading...</h2>
			)}
		</>
	);
};
export default memo(TabsAndItems)
