"use client";
import { productImage } from "@/mocks/productImage";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import Image from "next/image";
import { useEffect, useState } from "react";
import Details from "./Details/Details";

interface Product {
	photos?: {
		main_photo: string;
		all_photos: any[];
	};
	mainInfo?: any;
	id: string | number;
}

const ProductDetails = ({ product }: { product: Product }) => {
	const [selectedImage, setSelectedImage] = useState(
		product?.photos!.main_photo
	);
	useEffect(() => {
		if (product?.photos?.main_photo) {
			setSelectedImage(product?.photos!.main_photo);
		}
	}, [product]);
	const handleArrowClick = (direction: "left" | "right") => {
		const currentIndex = product?.photos?.all_photos?.findIndex(
			(item) => item.url === selectedImage
		);
		console.log("currentIndex ==> ", currentIndex);

		if (currentIndex !== undefined) {
			if (direction === "left") {
				if (currentIndex === 0) {
					setSelectedImage(product?.photos!.main_photo);
				} else if (currentIndex === -1) {
					setSelectedImage(
						product?.photos?.all_photos[
							(product?.photos?.all_photos?.length ?? 0) - 1
						].url
					);
				}
				setSelectedImage(
					product?.photos?.all_photos[currentIndex - 1].url
				);
			} else if (direction === "right") {
				if (
					currentIndex ===
					(product?.photos?.all_photos?.length ?? 0) - 1
				) {
					setSelectedImage(product?.photos!.main_photo);
				} else if (currentIndex === -1) {
					setSelectedImage(product?.photos?.all_photos[0].url);
				}
				setSelectedImage(
					product?.photos?.all_photos[currentIndex + 1].url
				);
			}
		} else {
			if (direction === "left") {
				setSelectedImage(product?.photos?.all_photos[0].url);
			} else if (direction === "right") {
				setSelectedImage(
					product?.photos?.all_photos[
						(product?.photos?.all_photos?.length ?? 0) - 1
					].url
				);
			}
		}
	};

	return (
		<section className="grid grid-cols-1 lg:grid-cols-5 items-start gap-10 gap-x-0 lg:gap-x-10">
			<div className="flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-6 col-span-3 items-start gap-10 lg:gap-5">
				<div className="col-span-1 lg:col-span-2 w-full grid grid-cols-4 lg:grid-cols-2 items-center gap-5">
					<div
						className={`border-2 	
							cursor-pointer flex items-center justify-center`}
						onClick={() =>
							setSelectedImage(product?.photos!.main_photo)
						}
					>
						<Image
							src={product?.photos!.main_photo}
							alt={"main image"}
							width={200}
							height={200}
							className="object-cover w-[100px] lg:w-[200px] h-[100px] rounded-xl lg:rounded-none lg:h-[120px]"
						/>
					</div>
					{
						// // ${
						// selectedImage === index
						// 	? "border-custom-blue"
						// 	: "border-transparent"
						// }

						product?.photos?.all_photos?.map((item, index) => (
							<div
								key={index}
								className={`border-2 
								
							cursor-pointer flex items-center justify-center`}
								onClick={() => setSelectedImage(item.url)}
							>
								<Image
									src={item.url}
									alt={item.url}
									width={200}
									height={200}
									className="object-cover w-[100px] lg:w-[200px] h-[100px] rounded-xl lg:rounded-none lg:h-[120px]"
								/>
							</div>
						))
					}
				</div>
				<div className="relative flex items-center justify-center w-full h-full lg:col-span-4">
					{product?.photos?.main_photo && (
						<Image
							src={selectedImage}
							alt={"main"}
							width={400}
							height={400}
							className="object-contain w-[250px] lg:w-[400px] h-[250px] lg:h-[400px]"
						/>
					)}
					<div
						onClick={() => handleArrowClick("left")}
						className="absolute text-[#000000BB] cursor-pointer top-1/2 -translate-y-1/2 left-[2vmax]"
					>
						<ArrowCircleLeftIcon className="text-[5vmax]" />
					</div>
					<div
						onClick={() => handleArrowClick("right")}
						className="absolute text-[#000000BB] cursor-pointer top-1/2 -translate-y-1/2 right-[2vmax] "
					>
						<ArrowCircleRightIcon className="text-[5vmax]" />
					</div>
				</div>
			</div>
			<Details productDetails={product?.mainInfo} id={product?.id} />
		</section>
	);
};

export default ProductDetails;
