"use client";
import { memo, useCallback, useEffect, useState } from "react";
import { apiClient } from '@/util/axois'
import GridOptionsAndResults from "./GridOptionsAndResults";
import Filters from "./Filters/Filters";
import Items from "./Items";
import AdditionalItems from "./AdditionalItems";
import GetMore from "./GetMore";
import ItemsInMobile from "./ItemsInMobile";
import Cookies from "universal-cookie";

const FilterAndItems = ({
	subSubCategoryId,
	option,
	subCategoryName,
	subSubCategoryName,
	optionId,
}: {
		subSubCategoryId: number;
		subCategoryName: string;
		subSubCategoryName: string;
	option: string;
	optionId: number;
}) => {
	const [gridColsNumber, setGridColsNumber] = useState(3);
	const [requestMeta, setRequestMeta] = useState<any>(null);
	const [nextPage, setNextPage] = useState<number>(1);
	const [products, setProducts] = useState<any[]>([]);
	const cookie = new Cookies();
	const token = cookie.get("token");

	interface Product {
		id: string;
		name: string;
		price: number;
		// ts-ignore
		meta: any;
		// Add other fields as per the API response
	}

	const getProducts = async (supSubId: number): Promise<void> => {
		apiClient(token)
			.get<{ data: Product[]; meta?: any }>(
				`/products?sub_subcategory_id=${supSubId}
										&page=${nextPage}&per_page=15

						`
			)
			.then((res) => {
				console.log("res ==> ", res.data.data);
				setProducts(res.data.data);
			})
			.catch((err: unknown) => {
				console.log("err ==> ", err);
			});
	};
	const getProductsByOptions = async (option: number): Promise<void> => {
		apiClient(token)
			.get<{ data: Product[]; meta?: any }>(
				`/products/by-options?options[${optionId}]=${option}
				&page=${nextPage}&per_page=15
				`
			)
			.then((res) => {
				console.log("res ==> ", res.data.data);
				setProducts(res.data.data);
				setRequestMeta(res.data?.meta);
				setNextPage(res.data?.meta?.current_page + 1);
			})
			.catch((err: unknown) => {
				console.log("err ==> ", err);
			});
	};
	const getAllProducts = async () => {
		console.log(
			"object ==> ",
			parseInt(document.location.href.split("=")[1], 10),
			parseInt(document.location.href.split("=")[2], 10)
		);
		const all = document.location.href.split("/")[5];
		console.log("all ==> ", all);
		apiClient(token)
			.get<{ data: Product[]; meta?: any }>(
				all == "all"
					? "/products"
					: `/products?category_id=${parseInt(
							document.location.href.split("=")[1],
							10
					  )}&subcategory_id=${
							isNaN(
								parseInt(
									document.location.href.split("=")[2],
									10
								)
							)
								? ""
								: parseInt(
										document.location.href.split("=")[2],
										10
								  )
					  }
						&page=${nextPage}&per_page=15
					`
			)
			.then((res) => {
				console.log("res ==> ", res.data.data);
				setProducts(res.data.data);
				setRequestMeta(res.data?.meta);
			})
			.catch((err: unknown) => {
				console.log("err ==> ", err);
			});
	};

	const handleSetGridColsNumber = useCallback((cols: number) => {
		setGridColsNumber(cols);
	}, []);

	useEffect(() => {
		if (subSubCategoryId === -1) return;
		getProducts(subSubCategoryId);
	}, [subSubCategoryId]);

	useEffect(() => {
		if (option === "") return;
		getProductsByOptions(parseInt(option, 10));
	}, [option]);

	useEffect(() => {
		getAllProducts();
	}, []);
	useEffect(() => {
		if (nextPage === 1) return;
		getAllProducts();
	}, [nextPage]);

	return (
		<section className="flex flex-col gap-2 mb-10 mt-[2vmax] md:w-[70vw] mx-auto ">
			<GridOptionsAndResults
				setGridColsNumber={handleSetGridColsNumber}
				allItemsCount={products.length}
				subCategoryName={subCategoryName}
				subSubCategoryName={subSubCategoryName}
			/>
			<div className="grid grid-cols-1 lg:grid-cols-4 items-start gap-10">
				{/* <Filters />  if back make next line cool-span-3 */}
				<div className="col-span-4 flex flex-col gap-5">
					<Items gridColsNumber={gridColsNumber} items={products} />
					<ItemsInMobile
						items={products}
						subCategoryName={subCategoryName}
						subSubCategoryName={subSubCategoryName}
					/>
					<GetMore meta={requestMeta} setNextPage={setNextPage} />
					{/* <AdditionalItems /> */}
				</div>
			</div>
		</section>
	);
};

export default memo(FilterAndItems);
