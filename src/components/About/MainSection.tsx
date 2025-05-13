import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
import { useLocale, useTranslations } from "next-intl";

const MainSection = () => {
	const t = useTranslations("about");
	const locale = useLocale();
	return (
		<div className="items-start gap-5 grid grid-cols-1 lg:grid-cols-2">
			<div className="flex flex-col gap-4 w-full lg:w-[80%]">
				<h2 className="flex items-center gap-2 font-bold text-3xl">
					<span>{locale == "en" ? "about " : "من "}</span>
					<span className="text-custom-blue">
						{" "}
						{locale == "en" ? "3RABITK" : "عربيتك"}{" "}
					</span>
				</h2>
				<p className="text-[#333] text-xs sm:text-sm">
					{t("3rabitk1")}
				</p>
				<p className="text-[#333] text-xs sm:text-sm">
					{t("3rabitk2")}
				</p>
				<p className="text-[#333] text-xs sm:text-sm">
					{t("3rabitk3")}
				</p>
				<p className="text-[#333] text-xs sm:text-sm">
					{t("3rabitk4")}
				</p>

				<div className="flex items-start">
					<Link
						href={"contact"}
						className="flex items-center gap-2 bg-custom-blue px-8 py-4 rounded font-bold text-white"
					>
						<span>{t("Contact with Staff")}</span>
						{locale == "en" ? (
							<ArrowRightAltIcon />
						) : (
							<ArrowRightAltIcon className="rotate-180 transform" />
						)}
					</Link>
				</div>
			</div>
			<div className="rounded overflow-hidden">
				<iframe
					width="100%"
					height="400"
					src="https://www.youtube.com/embed/FjileRn1Ykw"
					title="Free In-Store and Curbside Pickup | O&#39;Reilly 3RABITK"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
};

export default MainSection
