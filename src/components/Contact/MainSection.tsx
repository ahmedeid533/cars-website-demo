import React from 'react'
import { useTranslations } from "next-intl";



const MainSection = () => {
		const t = useTranslations('Contact')
    return (
		<div className="bg-[url('/contact/contact.jpg')] bg-cover bg-no-repeat bg-center w-full h-[50vh] relative">
			<div className="absolute top-0 w-full h-full flex flex-col text-white items-center justify-center bg-[#00000066]">
				<h2 className="font-bold text-2xl lg:text-5xl tracking-widest">
					{t("Contact Us")}
				</h2>
				<p className="text-xs lg:text-sm w-3/4 lg:w-1/4 text-center">
					{t(
						"Reach out to us directly through the website — we’ll respond as soon as possible to assist you with any inquiries or spare parts requests"
					)}
				</p>
			</div>
		</div>
	);
}

export default MainSection
