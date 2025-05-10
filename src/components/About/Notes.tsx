import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const Notes = () => {
	const t = useTranslations("about");
	return (
		<div className="custom-container2 py-10">
			<div className="items-start gap-5 grid grid-cols-1 md:grid-cols-2">
				<div className="relative flex flex-col gap-2 bg-custom-blue p-5 rounded lg:h-[200px] text-white hfull">
					<Image
						src={"/about/vision.svg"}
						alt="vision"
						width={20}
						height={20}
					/>
					<h2 className="font-bold">{t("Our Vision")} </h2>
					<p className="font-light text-sm">
						{t(
							"To become the leading choice in Egypt and the region for delivering comprehensive solutions in the automotive spare parts sector, by offering reliable and fast services tailored to every car owner’s needs"
						)}
					</p>
				</div>
				<div className="relative flex flex-col gap-2 bg-custom-blue p-5 rounded lg:h-[200px] text-white hfull points">
					<Image
						src={"/about/mission.svg"}
						alt="mission"
						width={20}
						height={20}
					/>
					<h2 className="font-bold">{t("Our Mission")}</h2>
					<ul>
						<li>
							{t(
								"Simplifying the process of finding and ordering car parts through an intelligent and intuitive interface"
							)}
						</li>
						<li>
							{t(
								"Supporting local suppliers and enabling them to reach a wider customer base with no restrictions"
							)}
						</li>
						<li>
							{t(
								"Ensuring a trustworthy shopping experience with cash-on-delivery and product quality assurance"
							)}
						</li>
						<li>
							{t(
								"Providing a “missing part request” feature to quickly fulfill unique customer needs"
							)}
						</li>
					</ul>
				</div>
				<div className="flex flex-col gap-2 bg-custom-blue p-5 rounded text-white points">
					<h2 className="font-bold">{t("Our Values")}</h2>
					<ul>
						<li>
							{t(
								"Transparency in all interactions with customers and partners"
							)}
						</li>
						<li>{t("Quality in both products and services")}</li>
						<li>
							{t(
								"Innovation in the technical solutions we provide"
							)}
						</li>
						<li>{t("Speed in response and order fulfillment")}</li>
					</ul>
				</div>
				<div className="flex flex-col justify-center items-center gap-5 p-5 rounded w-full text-custom-black">
					<h2 className="font-bold">{t("Follow Us")}</h2>
					<div className="flex items-center gap-4">
						<Image
							src={"/about/facebook.svg"}
							alt="facebook"
							width={50}
							height={50}
							className="cursor-pointer"
						/>
						<Image
							src={"/about/youtube.svg"}
							alt="youtube"
							width={50}
							height={50}
							className="cursor-pointer"
						/>
						<Image
							src={"/about/instagram.svg"}
							alt="instagram"
							width={70}
							height={70}
							className="cursor-pointer"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Notes;
