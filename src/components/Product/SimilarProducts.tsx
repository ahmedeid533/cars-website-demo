import { additionalItems } from "@/mocks/additionalItems";
import { apiClient } from "@/util/axois";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

interface SimilarProductsProps {
	id: string; // Adjust the type as needed (e.g., number, string | undefined, etc.)
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({ id }) => {
	const [items, setItems] = React.useState<any>([]);
	const locale = useLocale();
	useEffect(() => {
		console.log("id ==> ", id);
		apiClient().get(`/products/related/${id}`)
			.then((res) => {
				console.log("res ==> ", res.data.data);
				const d = res.data.data;
				const items_ = d.map((item: any) => {
					return {
						id: item.id,
						image: `${process.env.NEXT_PUBLIC_API}/storage/${item.main_photo}`,
						title: locale == "en" ? item.name_en : item.name_ar,
					};
				});
				console.log("items_ ==> ", items_);
				setItems(items_);
			})
			.catch((err) => {
				console.log("error ==> ", err);
			});
	}, [id]);

	return (
		<div className="custom-container1 flex flex-col gap-6 text-custom-black py-10">
			<h2 className="text-xl font-bold">{locale == "en" ? "Similar Products" : "منتجات مشابهه"} </h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-x-0 gap-y-0 lg:gap-x-16 lg:gap-y-10">
				{/* disable ts next line */}
				{/* @ts-ignore */}
				{items.map((item, index) => (
					<Link
						key={index}
						href={`${item.id}`}
						className="h-[30vh] w-full items-center justify-center flex flex-col gap-3 scale-100 transition duration-300 hover:scale-110"
					>
						<Image
							src={item.image}
							alt={item.title}
							width={200}
							height={200}
							className="object-contain  w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"
						/>
						<h3>{item.title}</h3>
					</Link>
				))}
			</div>
		</div>
	);
};

export default SimilarProducts;
