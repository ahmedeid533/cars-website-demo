"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import Link from "next/link"
import Image from "next/image"
import { Banner } from "@/types"
import { useLocale, useTranslations } from "next-intl"

interface IMainSectionSlider {
  banners: Banner[]
}

const MainSectionSlider = ({ banners }: IMainSectionSlider) => {
  const t = useTranslations("homepage")
  const locale = useLocale()

  return (
    <div className="w-full" dir={locale === "ar" ? "rtl" : "ltr"}>
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        effect="fade"
        loop
        speed={500}
        slidesPerView={1}
        className="w-full h-[50vh] min-h-[300px]"
      >
        {banners.map((section, index) => (
          <SwiperSlide key={index}>
            <section className="flex justify-center items-center bg-cover bg-center w-full h-full">
              <Image
                src={section.image_url}
                alt={section.title}
                fill
                className="absolute object-cover"
              />
              <div className="z-10 relative flex justify-center bg-[#00000066] w-full h-full">
                <div className="flex flex-col justify-center items-center gap-2 text-white text-center">
                  {section.title && (
                    <h1 className="mb-0 md:mb-2 font-bold text-3xl md:text-6xl">
                      {section.title}
                    </h1>
                  )}
                  <Link
                    href={"#"}
                    className="bg-custom-blue mt-5 px-20 py-2 rounded-lg text-white"
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
  )
}

export default MainSectionSlider
