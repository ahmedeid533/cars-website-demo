"use client"
import Link from 'next/link'
import './style.css'
import { Category } from '@/types'
import { useLocale } from 'next-intl'

const CarCollections = ({ mainCategories }: { mainCategories: Category[] }) => {
	const locale = useLocale()
  return (
		<section className="custom-container1">
			<div
				className={`grid grid-cols-2 items-center gap-4 md:w-5/6 mx-auto`}
			>
				{mainCategories?.map((collection, index) => (
					<Link
						href={`/category/${collection.slug}?category_id=${collection.id}`}
						key={index}
						className={`h-[12vh] lg:h-[35vh] w-full bg-no-repeat bg-cover bg-center overflow-hidden`}
						style={{
							backgroundImage: `url(${collection.image_url})`,
						}}
					>
						<div className="flex justify-center bg-[#00000066] custom-style w-full h-full">
							<div className="flex flex-col justify-end items-center gap-5 pb-2 md:pb-[15vh] text-white text-center">
								<h2 className="text-3xl tracking-widest">
									{
										collection.name[
											locale === "en" ? "en" : "ar"
										]
									}
								</h2>
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
  );
}

export default CarCollections
