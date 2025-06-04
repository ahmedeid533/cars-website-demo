"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import React from 'react'

const Items = ({ gridColsNumber, items }: { gridColsNumber: number; items: any[] }) => {
	const locale = useLocale()
    return (
		<div
			className={`hidden lg:grid grid-cols-${gridColsNumber} items-center gap-5`}
		>
			{items.map((item, index) => (
				<div
					key={index}
					className={`overflow-hidden rounded border border-custom-black flex ${
						gridColsNumber === 3
							? "flex-col p-0"
							: "flex-row p-4 gap-3"
					} items-center`}
				>
					<div
						className={`${
							gridColsNumber === 3
								? "h-[30vh] bg-[#F3F3F300] w-full flex"
								: "h-auto bg-transparent block"
						} items-center justify-center`}
					>
						<Image
							src={`${process.env.NEXT_PUBLIC_API}/storage/${item.main_photo}`}
							alt={item.name_en}
							width={200}
							height={200}
							className={
								"object-contain " +
								(gridColsNumber === 3
									? "h-full p-4 w-[300px]"
									: "h-[200px] w-[200px]")
							}
						/>
					</div>
					<div
						className={`${
							gridColsNumber === 3 ? "w-full p-5" : "w-[60%] p-0"
						} text-custom-black`}
					>
						<h2 className="font-bold flex flex-col ">
							<span className="text-ellipsis overflow-hidden whitespace-nowrap">
								{locale == "en" ? item.name_en : item.name_ar}
							</span>
						</h2>
						{/* <div className="flex items-center gap-5 my-2">
							<Image
								src={"/category_name/five.svg"}
								alt="five"
								width={100}
								height={100}
							/>
							<span className="text-sm text-[#A4A4A4]">
								5 #8030098
							</span>
						</div> */}
						{gridColsNumber === 1 && (
							<>
								<p className="text-[#525252] text-sm my-2 text-ellipsis overflow-hidden h-[80px]">
									{locale == "en"
										? item.description_en
										: item.description_ar}
								</p>
								{/* <ul className="list-disc pl-5 text-[#525252] text-sm">
									<li>
										Built to deliver an optimal balance of
										quality and aesthetics more details on
									</li>
									<li>
										M+S rating ensures all-season
										performance and a peace-of-mind more
										details
									</li>
								</ul> */}
							</>
						)}
						{gridColsNumber === 3 && (
							<>
								<h6 className="font-bold">
									{item.selling_price}EGP
								</h6>
								{/* <p className="text-[#A4A4A4] line-through">
									$165.09 - $276 .29
								</p> */}
							</>
						)}
					</div>
					<div className="flex flex-col gap-1 justify-end items-end my-5">
						{gridColsNumber === 1 && (
							<>
								<h4 className="text-custom-gray">
									{item.selling_price}EGP
								</h4>
								<h5>
									<span className="text-custom-green font-bold text-4xl">
										.
									</span>{" "}
									<span className="text-sm">
										{" "}
										In Stock ( {item.stock
											? item.stock
											: 0}{" "}
										)
									</span>
								</h5>
							</>
						)}
						<Link
							href={`/product/${item.id}`}
							className="text-custom-black border rounded border-custom-black py-2 px-6 transition duration-300 hover:text-white hover:bg-custom-blue hover:border-custom-blue"
						>
							{locale == "en" ? "View Details" : "عرض التفاصيل"}
						</Link>
					</div>
				</div>
			))}
		</div>
	);
}

export default Items
