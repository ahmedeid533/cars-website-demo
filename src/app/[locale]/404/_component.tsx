"use client";
import { useLocale } from "next-intl";
import React from "react";
import { useRouter } from "next/navigation";


const PageNotFoundComponent: React.FC = () => {
	const locale = useLocale(); // Replace this with your locale logic
const router = useRouter();

	React.useEffect(() => {
console.log("router ==> ", router);

		return () => {
			// Cleanup if needed when component unmounts
		};
	}, [router]);
	return (
		<div className="flex flex-col items-center justify-center">
			<h2 className="font-bold text-custom-black text-2xl md:text-5xl text-center tracking-wide">
				{locale === "en" ? (
					<>
						This page will be{" "}
						<span className="text-custom-blue">launched</span> soon
						or not available now
					</>
				) : (
					<>
						هذه الصفحة{" "}
							<span className="text-custom-blue">ستطلق</span> قريبا
							او غير متوفرة الان
					</>
				)}
			</h2>
		</div>
	);
};

export default PageNotFoundComponent;