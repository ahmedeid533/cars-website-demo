"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import { Banner } from "@/types";
import { useLocale, useTranslations } from "next-intl";

interface IMainSectionSlider {
	banners: Banner[];
}

const MainSectionSlider = ({ banners }: IMainSectionSlider) => {
	const t = useTranslations("homepage");
	const locale = useLocale(); 

	return (
		<div className="w-[100%] m-auto" dir={"ltr"}>
			<Swiper
				modules={[Autoplay, Navigation, EffectFade]}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
					reverseDirection: true,
				}}
				navigation
				// effect="fade"
				loop={true}
				speed={1500}
				slidesPerView={2.4}
				// initialSlide={1}
				// centeredSlidesBounds={true}
				centeredSlides={true}
				className="w-full h-[65vh] min-h-[370px]"
			>
				{banners?.map((section, index) => (
					<SwiperSlide key={index}>
						{/* lg:w-[100%] w-full   m-auto*/}
						<section className="flex justify-center items-center  bg-cover bg-center lg:w-[100%] h-full">
							<Image
								src={section.image_url}
								alt={section.title}
								fill
								className="absolute object-contain"
							/>
							<div className="z-10 relative flex justify-center w-full h-full">
								<div className="flex flex-col justify-center items-center gap-2 text-white text-center">
									{section.title && (
										<h1 className="mb-0 md:mb-2 font-bold text-3xl md:text-6xl">
											{/* {section.title} */}
										</h1>
									)}
									<Link
										href={`/category/all?category_id=${section.id}`}
										className="bg-custom-blue mt-52 px-20 py-2 rounded-lg text-white"
									>
										{t("Book Now")}
									</Link>
								</div>
							</div>
						</section>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default MainSectionSlider;
