"use client";
import Image from "next/image";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ExtensionIcon from "@mui/icons-material/Extension";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderArrowsRef from "./SliderArrowsRef";
import SliderArrowBtns from "./SliderArrowBtns";
import { orderSliderConfig } from "./orderSliderConfig";
import { useLocale } from "next-intl";

const OrderSlider = ({ items }: { items: any[] }) => {
	const { sliderRef, handleNext, handlePrev } = SliderArrowsRef();
	const locale = useLocale();
	return (
		<div className="flex flex-col gap-4">
			<h2 className="font-bold text-xl text-custom-black">
				{locale == "en" ? "Your Items" : "عناصر الطلب"}
			</h2>
			<div className="slider-container relative">
				{items?.length == 1 && (
					<div className="custom-container1 md:w-fit">
						<div
							className="rounded flex flex-col m-1"
							style={{
								boxShadow: "1px 2px 5px 1px #00000040",
							}}
						>
							<div className="flex items-center justify-center md:p-[2vw] pt-5">
								<Image
									src={items[0].product?.image}
									alt={items[0].product?.name}
									width={200}
									height={200}
									className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-contain"
								/>
							</div>
							<div className="p-3 mt-10 flex flex-col gap-4 text-custom-black">
								<h2 className="w-full text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">
									{items[0].product?.name}
								</h2>
								{/* <div className="flex flex-row gap-2 items-center">
										<EventNoteIcon className="text-custom-black" />
										<span className="text-sm">
											#15H8523
										</span>
									</div> */}
								{/* <div className="flex flex-row gap-2 items-center">
									<ScheduleIcon className="text-custom-black" />
									<span className="text-sm">
										15 / 6 / 2024{" "}
									</span>
								</div> */}
								<div className="flex flex-row gap-2 items-center">
									<ExtensionIcon className="text-custom-black" />
									<span className="text-sm">
										{" "}
										{items[0]?.quantity}{" "}
										{locale == "en" ? "pieces" : "قطعه"}
									</span>
								</div>
								<div className="flex flex-row gap-2 items-center">
									<MonetizationOnOutlinedIcon className="text-custom-black" />
									<span className="text-sm">
										{items[0]?.unit_price}{" "}
									</span>
								</div>
							</div>
							<h2 className=" p-3 w-full text-sm font-bold text-custom-blue">
								{locale == "en" ? "Subtotal" : "المجموع الفرعي"}{" "}
								: {items[0]?.total_price} EGP
							</h2>
						</div>
					</div>
				)}
				{items?.length > 1 && (
					<>
						<Slider {...orderSliderConfig} ref={sliderRef}>
							{items?.map((item, index) => (
								<div
									key={item.id}
									className="custom-container1"
								>
									<div
										className="rounded flex flex-col m-1"
										style={{
											boxShadow:
												"1px 2px 5px 1px #00000040",
										}}
									>
										<div className="flex items-center justify-center pt-5">
											<Image
												src={item.product?.image}
												alt={item.product?.name}
												width={200}
												height={200}
												className="w-auto h-[200px] md:w-[140px] md:h-[140px] object-contain"
											/>
										</div>
										<div className="p-3 mt-10 flex flex-col gap-4 text-custom-black">
											<h2 className="w-full text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">
												{item.product?.name}
											</h2>
											{/* <div className="flex flex-row gap-2 items-center">
										<EventNoteIcon className="text-custom-black" />
										<span className="text-sm">
											#15H8523
										</span>
									</div> 
											
											<div className="flex flex-row gap-2 items-center">
												<ScheduleIcon className="text-custom-black" />
												<span className="text-sm">
													{15 / 6 / 2024{" "} 
													{item?.createdAt
														?.slice(0, 10)
														.split("-")
														.reverse()
														.join("/")}
												</span>
											</div> 
											*/}
											<div className="flex flex-row gap-2 items-center">
												<ExtensionIcon className="text-custom-black" />
												<span className="text-sm">
													{" "}
													{item?.quantity}{" "}
													{locale == "en"
														? "pieces"
														: "قطعه"}
												</span>
											</div>
											<div className="flex flex-row gap-2 items-center">
												<MonetizationOnOutlinedIcon className="text-custom-black" />
												<span className="text-sm">
													{item?.unit_price}{" "}
												</span>
											</div>
										</div>
										<h2 className=" p-3 w-full text-sm font-bold text-custom-blue">
											{locale == "en"
												? "Subtotal"
												: "المجموع الفرعي"}{" "}
											:{item?.total_price} EGP
										</h2>
									</div>
								</div>
							))}
						</Slider>
						<SliderArrowBtns
							handleNext={handleNext}
							handlePrev={handlePrev}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default OrderSlider;
