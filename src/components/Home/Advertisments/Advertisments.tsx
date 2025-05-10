"use client"
import React from 'react'
import MajiorAdv from './MajiorAdv'
import Link from 'next/link'
import { BannerFooter } from '@/types'
import { useLocale } from 'next-intl'

const Advertisments = ({ bannerFooter }: { bannerFooter: BannerFooter[] }) => {
console.log("bannerFooter ==> ", bannerFooter);
  const locale = useLocale()
  return (
		<section className="custom-container1 py-10">
			<div className="items-center gap-5 grid grid-cols-1 lg:grid-cols-4">
				<div className="flex flex-row lg:flex-col gap-3">
					{bannerFooter[0] && (
						<MajiorAdv
							backgroundImage={bannerFooter[0].image_url}
							title={bannerFooter[0].title}
							id={bannerFooter[0].id}
							url={bannerFooter[0].banner_url}
						/>
					)}
					{bannerFooter[1] && (
						<MajiorAdv
							backgroundImage={bannerFooter[1].image_url}
							title={bannerFooter[1].title}
							id={bannerFooter[1].id}
							url={bannerFooter[1].banner_url}
						/>
					)}
				</div>
				<div
					className="col-span-1 lg:col-span-2 bg-cover bg-no-repeat bg-right h-[258px] lg:h-[428.3px]"
					style={{
						backgroundImage: `url(${bannerFooter[2].image_url})`,
					}}
				>
					{/* bg-[#00000066] */}
					<div className="flex flex-col justify-center items-center gap-4  h-full text-white">
						<h3 className="w-2/3 text-3xl lg:text-5xl text-center leading-[1.2]">
							{/* {bannerFooter[2].title} */}
						</h3>
						<Link
							href={
								bannerFooter[2].banner_url
									? bannerFooter[2].banner_url
									: `/category/all?category_id=${bannerFooter[2].id}`
							}
							className="bg-custom-blue px-3 py-1 rounded font-bold text-white text-sm md:mt-[25vh] mt-[20vh]"
						>
							{locale === "en" ? "SHOP NOW" : "تسوق الآن"}
						</Link>
					</div>
				</div>
				<div className="flex flex-row lg:flex-col gap-3">
					<MajiorAdv
						backgroundImage={bannerFooter[3].image_url}
						title={bannerFooter[3].title}
						id={bannerFooter[3].id}
						url={bannerFooter[3].banner_url}
					/>
					<MajiorAdv
						backgroundImage={bannerFooter[4].image_url}
						title={bannerFooter[4].title}
						id={bannerFooter[4].id}
						url={bannerFooter[4].banner_url}
					/>
				</div>
			</div>
		</section>
  );
}

export default Advertisments
