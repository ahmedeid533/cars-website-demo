"use client";
import { InputBase } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import SearchIcon from "@mui/icons-material/Search";
import { checkIsNotAuthPages } from "../../../global/isNotAuthPages";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { apiClient } from "@/util/axois";

interface List {
	id: number;
	name_ar: string;
	name_en: string;
	slug: string;
	price: string;
	main_photo: string;
}

const SecondPart = () => {
	const [value, setValue] = useState<List[]>([]);
	const path = usePathname();
	const isNotAuthPage = checkIsNotAuthPages(path);
	const locale = useLocale();
	const t = useTranslations("Header");

	return (
		<>
			{isNotAuthPage && (
				<div className="flex flex-row flex-1 justify-between items-center gap-5 bg-transparent px-2 py-1 border-[#929292] relative border-[1px] rounded-md">
					<div className="absolute left-2 top-[150%] max-h-[70vh] bg-white text-black flex flex-col rounded-md w-full z-10 overflow-y-scroll scrollbar-hide">
						{value?.map((elm: List) => (
							<Link
								key={elm.id}
								href={`/product/${elm.id}`}
								onClick={() => setValue([])}
								className="text-md flex search text-lg justify-between border-b-2 border-[#929292] h-[70px] px-2 py-1 cursor-pointer hover:bg-custom-blue font-semibold hover:text-white"
							>
								<div>
									<div>
										{locale == "en"
											? elm.name_en
											: elm.name_ar}
									</div>
									<div className="text-[#929292] searchPrice">
										{elm.price}
									</div>
								</div>
								<Image
									src={`https://3arbitk.com/storage/${elm.main_photo}`}
									alt="product"
									width={50}
									height={50}
									className="w-auto h-full rounded-md"
								/>
							</Link>
						))}
					</div>
					<InputBase
						placeholder={t(
							"search by make model Year , Product Type , Part Number , or Brand"
						)}
						inputProps={{ "aria-label": "search" }}
						className="w-full text-[#5C5C5C] placeholder:text-[#5C5C5C] placeholder:text-xs"
						onChange={(e) => {
							if (e.target.value.length === 0) {
								setValue([]);
							} else {
								apiClient()
									.get("/products/search?query=" + e.target.value)
									.then((res) => {
										console.log(res.data);
										setValue(res.data.data);
										console.log("list ==> ", res.data.data);
									})
									.catch((err) => {
										console.log(err);
									});
							}
						}}
					/>

					<SearchIcon className="text-black cursor-pointer" />
				</div>
			)}
		</>
	);
};

export default SecondPart;
