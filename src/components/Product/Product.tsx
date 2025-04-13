"use client"
import { useEffect, useState } from "react";
import CustomTabs from "./CustomTabs";
import Links from "./Links";
import { useLocale } from "next-intl";
import { Divider } from "@mui/material";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductProps from "./ProductProps/ProductProps";
import SimilarProducts from "./SimilarProducts";
import { apiClient } from "@/util/axois";

const Product = ({ id }: { id: string }) => {
	console.log("idFp ==> ", id);
	const [value, setValue] = useState(0);
	const locale = useLocale();
	const [product, setProduct] = useState<any>(null);

	useEffect(() => {
		apiClient()
			.get(`/products/${id}`)
			.then((res) => {
				console.log("res ==> ", res.data.data);
				const d = res.data.data;
				const product_ = {
					productDetails: {
						photos: {
							main_photo: `https://3arbitk.com/storage/${d.main_photo}`,
							all_photos: d.photos,
						},
						mainInfo: {
							name: locale == "en" ? d.name_en : d.name_ar,
							price: d.selling_price,
							stock: d.stock ? d.stock : 0,
						},
					},
					category: {
						main: {
							id: d.category?.id,
							name: d.category?.name[locale],
						},
						sub: {
							id: d.sub_category?.id,
							name: d.subcategory?.name[locale],
						},
					},
					description:
						locale == "en" ? d.description_en : d.description_ar,
				};
				console.log("product_ ==> ", product_);
				setProduct(product_);
			})
			.catch((err) => {
				console.log("error ==> ", err);
			});
	}, []);
	useEffect(() => {
		console.log("product in main ==> ", product);
		setProduct(product);
	}, [product]);
	return (
		<>
			<CustomTabs value={value} setValue={setValue} />
			<Divider />
			<div className="custom-container1 py-10 flex flex-col gap-10">
				<Links category={product?.category} />
				{product?.productDetails && (
					<ProductDetails product={product?.productDetails} />
				)}
			</div>
			<Divider />
			<ProductProps description={product?.description} />
			<Divider />
			<SimilarProducts />
		</>
	);
};

export default Product
