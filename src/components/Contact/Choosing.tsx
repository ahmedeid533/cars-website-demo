import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'


const Choosing = () => {
	const t = useTranslations("Contact");
    return (
		<div className="flex flex-col md:flex-row gap-5 items-start">
			<div className="flex flex-col gap-2 rounded-lg px-5 py-10">
				<Image
					src={"/contact/offers.svg"}
					alt="offers"
					width={50}
					height={50}
				/>
				<h3 className="text-custom-black font-bold text-lg">
					{t("Special Financing Offers")}{" "}
				</h3>
				<p className="text-sm text-[#444444]">{t("choise1")}</p>
			</div>
			<div className="flex flex-col gap-2 rounded-lg px-5 py-10">
				<Image
					src={"/contact/trust.svg"}
					alt="trust"
					width={50}
					height={50}
				/>
				<h3 className="text-custom-black font-bold text-lg">
					{t("Trusted Car Dealership")}
				</h3>
				<p className="text-sm text-[#444444]">
					{t(
						"Trusted partners we deal with authorized dealers and suppliers to ensure the quality of every spare part on our platform"
					)}
				</p>
			</div>
			<div className="flex flex-col gap-2 rounded-lg px-5 py-10">
				<Image
					src={"/contact/pricing.svg"}
					alt="pricing"
					width={50}
					height={50}
				/>
				<h3 className="text-custom-black font-bold text-lg">
					{t("Transparent Pricing")}
				</h3>
				<p className="text-sm text-[#444444]">
					{t(
						"Transparent pricing without surprises All prices are clearly displayed, with no hidden commissions or unjustified increases"
					)}
				</p>
			</div>
			<div className="flex flex-col gap-2 rounded-lg px-5 py-10">
				<Image
					src={"/contact/services.svg"}
					alt="services"
					width={50}
					height={50}
				/>
				<h3 className="text-custom-black font-bold text-lg">
					{t("Expert Car Service")}
				</h3>
				<p className="text-sm text-[#444444]">
					{t(
						"Technical support on demand If you need help choosing the right part, our team is ready to assist you"
					)}
				</p>
			</div>
		</div>
	);
}

export default Choosing
