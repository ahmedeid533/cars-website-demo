"use client"
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderArrowsRef from './SliderArrowsRef';
import SliderArrowBtns from './SliderArrowBtns';
import { orderSliderConfig } from './orderSliderConfig';
import Link from 'next/link';

interface RecentlyViewedItem {
	productDetails: {
		id: string;
		photos: {
			main_photo: string;
		};
		mainInfo: {
			name: string;
			price: string;
		};
	};
}

const OrderSlider = () => {
	const { sliderRef, handleNext, handlePrev } = SliderArrowsRef()
	const recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed") || "[]") || [];
	console.log("recentlyViewed ==> ", recentlyViewed);
    return (
		<div className="slider-container relative">
			<Slider {...orderSliderConfig} ref={sliderRef}>
					{ recentlyViewed?.length > 1  &&
						recentlyViewed?.map((items: RecentlyViewedItem, index: number) => (
					<Link
						key={items.productDetails.id}
						href={`/product/${items.productDetails.id}`}
						className="custom-container1 transition duration-300 hover:scale-x-105"
					>
						<div className="rounded flex flex-col border border-custom-black hover:border-custom-blue">
							<div className="flex items-center justify-center pt-5">
								<Image
									src={items.productDetails.photos.main_photo}
									alt="item"
									width={150}
									height={150}
									className="w-[150px] h-[150px]"
								/>
							</div>
							<div className="p-3 mt-10 flex flex-col gap-4 text-custom-black">
								<h2 className="font-bold text-ellipsis overflow-hidden whitespace-nowrap text-lg">
									{items.productDetails.mainInfo.name}
								</h2>
								<h5 className="font-bold text-xl">
									{items.productDetails.mainInfo.price}EGP
								</h5>
							</div>
						</div>
					</Link>
				))}
			</Slider>
			<SliderArrowBtns handleNext={handleNext} handlePrev={handlePrev} />
		</div>
	);
}

export default OrderSlider
