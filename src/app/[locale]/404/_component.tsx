import { useLocale } from "next-intl";
import React from "react";

const PageNotFoundComponent: React.FC = () => {
	const locale = useLocale(); // Replace this with your locale logic

	return (
		<div className="flex flex-col items-center justify-center">
			<h2 className="font-bold text-custom-black text-2xl md:text-5xl text-center tracking-wide">
				{locale === "en" ? (
					<>
						This page will be{" "}
						<span className="text-custom-blue">launched</span> soon
					</>
				) : (
					<>
						هذه الصفحة{" "}
						<span className="text-custom-blue">ستطلق</span> قريبا
					</>
				)}
			</h2>
		</div>
	);
};

export default PageNotFoundComponent;