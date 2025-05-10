import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
const AboutCard = () => {
	const t = useTranslations("about");
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
			<div className="flex flex-col justify-center items-center text-center gap-2 border rounded-lg border-[#E0E0E0] px-5 py-10">
				<Image
					src={"/about/community.svg"}
					alt="community"
					width={50}
					height={50}
				/>
				<h3 className="text-custom-black font-bold text-lg">
					{t("Hard-Working Community")}
				</h3>
				<p className="text-sm text-[#444444]">
					{t(
						"We are a community of hard-working people who are passionate about what we do"
					)}
				</p>
			</div>
			<div className="flex flex-col justify-center items-center text-center gap-2 border rounded-lg border-[#E0E0E0] px-5 py-10">
				<Image
					src={"/about/customers.svg"}
					alt="customers"
					width={50}
					height={50}
				/>
				<h3 className="text-custom-black font-bold text-lg">
					{t("Customers Come First")}
				</h3>
				<p className="text-sm text-[#444444]">
					{t(
						"Every decision we make we always prioritizes our customers’ needs"
					)}
				</p>
			</div>
			<div className="flex flex-col justify-center items-center text-center gap-2 border rounded-lg border-[#E0E0E0] px-5 py-10">
				<Image
					src={"/about/agree.svg"}
					alt="agree"
					width={50}
					height={50}
				/>
				<h3 className="text-custom-black font-bold text-lg">
					{t("We Do What We Say")}
				</h3>
				<p className="text-sm text-[#444444]">
					{t(
						"We’re a company built on ethics, integrity, inclusivity"
					)}
				</p>
			</div>
			<div className="flex flex-col justify-center items-center text-center gap-2 border rounded-lg border-[#E0E0E0] px-5 py-10">
				<Image
					src={"/about/innovation.svg"}
					alt="Innovation"
					width={50}
					height={50}
				/>
				<h3 className="text-custom-black font-bold text-lg">
					{t("Pursuit of Innovation")}
				</h3>
				<p className="text-sm text-[#444444]">
					{t(
						"We are committed to making things better — we never stop"
					)}
				</p>
			</div>
		</div>
	);
};

export default AboutCard;
