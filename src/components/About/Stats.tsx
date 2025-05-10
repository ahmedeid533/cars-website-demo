import React from 'react'
import { useTranslations } from "next-intl";

const Stats = () => {
		const t = useTranslations("about");
	
    return (
		<div className="bg-custom-blue py-10">
			<div className="custom-container2 flex flex-wrap gap-5 lg:gap-0 items-center w-full justify-between text-white">
				<div className="flex flex-col gap-1 font-bold">
					<h2 className="text-4xl">500+</h2>
					<h4 className="text-sm">{t("Brands")} </h4>
				</div>
				<div className="flex flex-col gap-1 font-bold">
					<h2 className="text-4xl">200k</h2>
					<h4 className="text-sm">{t("Items sold")} </h4>
				</div>
				<div className="flex flex-col gap-1 font-bold">
					<h2 className="text-4xl">15k</h2>
					<h4 className="text-sm">{t("Happy clients")}</h4>
				</div>
				<div className="flex flex-col gap-1 font-bold">
					<h2 className="text-4xl">70+</h2>
					<h4 className="text-sm">{t("trader")}</h4>
				</div>
			</div>
		</div>
	);
}

export default Stats
