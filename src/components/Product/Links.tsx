import { useLocale } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Category {
	main?: { name: string };
	sub?: { name: string };
}

const Links = ({ category }: { category: Category }) => {
	const locale = useLocale();
	const router = useRouter();
	return (
		<div className="flex items-center text-[#8C8C8C] text-sm">
			<Link
				className={
					"px-4 " +
					(locale == "en" ? "border-r border-r-[#8C8C8C]" : "")
				}
				href={`/${locale}`}
			>
				{locale === "en" ? "Home" : "الرئيسية"}
			</Link>
			<Link
				className="px-4 border-r border-r-[#8C8C8C]"
				href={`/${locale}/category/all`}
			>
				{locale === "en" ? "All Categories" : "جميع الفئات"}
			</Link>
			<div className="px-4 cursor-pointer border-r border-r-[#8C8C8C]" onClick={()=>router.back()}>
				{category?.main?.name}
			</div>
			<Link
				className={
					"px-4 border-r-[#8C8C8C]" +
					(locale == "en" ? " " : " border-r")
				}
				href={"#"}
			>
				{category?.sub?.name}
			</Link>
		</div>
	);
};

export default Links;
