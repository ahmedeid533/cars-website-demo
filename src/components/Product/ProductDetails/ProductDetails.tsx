"use client"
import { productImage } from '@/mocks/productImage'
import Image from 'next/image'
import { useState } from 'react'
import Details from './Details/Details';

const ProductDetails = ({product}) => {
	const [selectedImage, setSelectedImage] = useState(0);
	return (
		<section className="grid grid-cols-1 lg:grid-cols-5 items-start gap-10 gap-x-0 lg:gap-x-10">
			<div className="flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-6 col-span-3 items-start gap-10 lg:gap-5">
				<div className="col-span-1 lg:col-span-2 w-full grid grid-cols-4 lg:grid-cols-2 items-center gap-5">
					{productImage.map((item, index) => (
						<div
							key={index}
							className={`border-2 ${
								selectedImage === index
									? "border-custom-blue"
									: "border-transparent"
							} cursor-pointer flex items-center justify-center`}
							onClick={() => setSelectedImage(index)}
						>
							<Image
								src={item}
								alt={item}
								width={200}
								height={200}
								className="object-cover w-[100px] lg:w-[200px] h-[100px] rounded-xl lg:rounded-none lg:h-[200px]"
							/>
						</div>
					))}
				</div>
				<div className="relative flex items-center justify-center w-full h-full lg:col-span-4">
					{product?.photos?.main_photo && (
						<Image
							src={product?.photos?.main_photo + ""}
							alt={"main"}
							width={400}
							height={400}
							className="object-contain w-[250px] lg:w-[400px] h-[250px] lg:h-[400px]"
						/>
					)}
				</div>
			</div>
			<Details productDetails={product?.mainInfo} />
		</section>
	);
};

export default ProductDetails
