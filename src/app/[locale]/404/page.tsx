import { Metadata } from "next";
import { useLocale } from "next-intl";
import Image from "next/image";

export const metadata: Metadata = {
	title: "3RABITK | 404 Not Found",
	description: "Generated for 3RABITK",
};

const page = () => {
	const locale = useLocale();
	return (
		<aside className="flex md:flex-col flex-col-reverse justify-center items-center gap-5 custom-container2 py-10">
			<div className="relative w-3/4 md:w-full h-[60vh]">
				<Image
					src={"/not-found.svg"}
					alt="notfound"
					fill
					className="object-contain"
				/>
			</div>
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
		</aside>
	);
};

export default page;
