import CategoryName from "@/components/CategoryName/CategoryName";
import { getCategories } from "@/libs/get-categories";
import { getOptionSubCategories } from "@/libs/get-option-sub-categories";
import { getSub_subCategories } from "@/libs/get-sub-sub-categories";
import { SubCategory, SubCategoryOption } from "@/types";
import { Metadata } from "next";
import { getMainCategories } from "@/libs/get-main-categories";
import { getSubCategories } from "@/libs/get-sub-categories";

type props = {
	params: Promise<{
		category_name: string;
	}>;
	searchParams: Promise<{
		category_id: string;
		sub_category_id?: string;
	}>;
};

export async function generateMetadata({ params }: props): Promise<Metadata> {
	const resolvedParams = await params;
	return {
		title: `3RABITK | Category | ${resolvedParams.category_name.toUpperCase()}`,
		description: `Generated for 3RABITK ${resolvedParams.category_name.toUpperCase()} Category`,
	};
}

const page = async ({ params, searchParams }: props) => {
	const { category_id, sub_category_id } = await searchParams;
	const categories = category_id !== "1" ? await getCategories() : null;
	const mainCategory = await getMainCategories();
	let current_category = categories
		? categories.find((category) => category.id === parseInt(category_id))
		: null;
	if (!current_category) {
		current_category = mainCategory
			? mainCategory.find(
					(category) => category.id === parseInt(category_id)
			  )
			: null;
	}
	const hasBrands = sub_category_id === "36" || sub_category_id === "2";
	let sub_subCategories = [] as SubCategory[];
	if (sub_category_id) {
		sub_subCategories = (await getSub_subCategories(
			Number(sub_category_id)
		)) as SubCategory[];
	} else {
		sub_subCategories = (await getSubCategories(
			Number(category_id)
		)) as SubCategory[];
	}

	let subCategoryOption: SubCategoryOption[] = [];
	if (sub_category_id) {
		subCategoryOption = (await getOptionSubCategories(
			parseInt(sub_category_id)
		)) as SubCategoryOption[];
	}

	return (
		<CategoryName
			category={current_category}
			hasBrands={hasBrands}
			sub_subCategories={sub_subCategories}
			subCategoryName={(await params).category_name}
			subCategoryOption={subCategoryOption}
		/>
	);
};

export default page;