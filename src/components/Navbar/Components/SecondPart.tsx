"use client";
import { InputBase } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
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
}

const SecondPart = () => {
	const [value, setValue] = useState<List[]>([]);
	const path = usePathname();
	const isNotAuthPage = checkIsNotAuthPages(path);
	const t = useTranslations("Header");

	return (
		<>
			{isNotAuthPage && (
				<div className="flex flex-row flex-1 justify-between items-center gap-5 bg-transparent px-2 py-1 border-[#929292] relative border-[1px] rounded-md">
					<div className="absolute left-2 top-[150%] bg-white text-black flex flex-col rounded-md w-full z-10 overflow-y-auto" onClick={() => {
						setValue([]);
					}}>
						{value?.map((elm: List) => (
							<Link
								key={elm.id}
								href={`/product/${elm.id}`}
								className="text-md border-b-2 border-[#929292] px-2 py-1 cursor-pointer hover:bg-[#929292] hover:text-white"
							>
								{path != "/en" ? elm.name_ar : elm.name_en}
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
						}}
					/>

					<SearchIcon className="text-black cursor-pointer" />
				</div>
			)}
		</>
	);
};

export default SecondPart;
