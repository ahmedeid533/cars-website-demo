"use client";
import { memo, useCallback, useEffect, useState } from "react";
import { apiClient } from '@/util/axois'
import GridOptionsAndResults from "./GridOptionsAndResults";
import Filters from "./Filters/Filters";
import Items from "./Items";
import AdditionalItems from "./AdditionalItems";
import GetMore from "./GetMore";
import ItemsInMobile from "./ItemsInMobile";

const FilterAndItems = ({ subSubCategoryId }: { subSubCategoryId: number }) => {
	const [gridColsNumber, setGridColsNumber] = useState(1);
	const [products, setProducts] = useState<any[]>([]);

	interface Product {
		id: string;
		name: string;
		price: number;
		// Add other fields as per the API response
	}

	const getProducts = async (supSubId: number): Promise<void> => {
		apiClient()
			.get<{ data: Product[] }>(`/products?sub_subcategory_id=${supSubId}`)
			.then((res) => {
				console.log("res ==> ", res.data.data);
				setProducts(res.data.data);
			})
			.catch((err: unknown) => {
				console.log("err ==> ", err);
			});
	};

	const handleSetGridColsNumber = useCallback((cols: number) => {
		setGridColsNumber(cols);
	}, []);

	useEffect(() => {
		getProducts(subSubCategoryId);
	}, [subSubCategoryId]);

	return (
		<section className="flex flex-col gap-2 mb-10  md:w-[70vw] mx-auto ">
			<GridOptionsAndResults
				setGridColsNumber={handleSetGridColsNumber}
				allItemsCount={products.length}
			/>
			<div className="grid grid-cols-1 lg:grid-cols-4 items-start gap-10">
				{/* <Filters />  if back make next line cool-span-3 */}
				<div className="col-span-4 flex flex-col gap-5">
					<Items gridColsNumber={gridColsNumber} items={products} />
					<ItemsInMobile items={products} />
					{/* <GetMore /> */}
					{/* <AdditionalItems /> */}
				</div>
			</div>
		</section>
	);
};

export default memo(FilterAndItems);
