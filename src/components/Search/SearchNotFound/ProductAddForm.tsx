import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { carModels, carSeries, carYear } from "@/mocks/searchInputs";
import VehicleSelectionBtn from "@/components/Navbar/Components/VehicleSelectionBtn";
import Image from "next/image";
import { useLocale } from "next-intl";
import Cookies from "universal-cookie";
import { describe } from "node:test";
import { apiClient } from "@/util/axois";
import { toast } from "react-toastify";

const ProductAddForm = () => {
	// const [carModelValue, setCarModelValue] = useState(carModels[0]);
	// const [carYearValue, setCarYearValue] = useState(carYear[0]);
	// const [carSeriesValue, setCarSeriesValue] = useState(carSeries[0]);
	const locale = useLocale();

	const [file, setFile] = useState<File | null>(null);
	const [description, setDescription] = useState<string>("");
	const cookie = new Cookies();
	const token = cookie.get("token") || null;
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			setFile(event.target.files[0]);
		}
	};
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (description) {
			const formData = new FormData();
			file ? formData.append("file", file): formData.append("file", "");
			formData.append("description", description);
			apiClient(token)
				.post("/product-request", formData)
				.then((res) => {
					if (res.status === 201) {
						toast.success(
							locale === "en"
								? "Your request has been sent successfully"
								: "تم إرسال طلبك بنجاح"
						);
						setFile(null);
						setDescription("");
					} else {
						toast.error(
							locale === "en"
								? "An error occurred while sending your request"
								: "حدث خطأ أثناء إرسال طلبك"
						);
						toast.error(res.data.message);
					}
				})
				.catch((err) => {
					toast.error(
						locale === "en"
							? "An error occurred while sending your request"
							: "حدث خطأ أثناء إرسال طلبك"
					);
				});
		} else {
			toast.error(
				locale === "en"
					? "Please enter a description"
					: "يرجى إدخال وصف"
			);
		}
	};
	return (
		<div
			className="bg-[#FAFAFA] p-8 rounded-md flex flex-col gap-10"
			style={{
				boxShadow: "0px 4px 4px 0px #00000040",
			}}
		>
			<h4 className="font-bold text-md md:text-xl text-custom-black text-center">
				{locale === "en"
					? "Please enter these data, you can bring the products you need"
					: "يرجى إدخال هذه البيانات، يمكنك إحضار المنتجات التي تحتاجها"}
			</h4>
			<div className="grid grid-cols-1 items-center gap-5 justify-center ">
				{/* <SelectInput data={carYear} value={carYearValue} setValue={setCarYearValue} />
                <SelectInput data={carModels} value={carModelValue} setValue={setCarModelValue} />
                <SelectInput data={carSeries} value={carSeriesValue} setValue={setCarSeriesValue} /> */}
				<div className="m-auto md:min-w-[450px]">
					<VehicleSelectionBtn />
				</div>
			</div>
			<textarea
				rows={10}
				placeholder={
					locale === "en"
						? "Write a product description"
						: "اكتب وصف المنتج"
				}
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				className="outline-none border border-[#525252] rounded shadow-xl p-4"
			></textarea>
			<div className="border border-[#525252] py-5 flex flex-col justify-center items-center gap-5 rounded">
				<label className=" cursor-pointer relative shadow-lg w-1/2 border border-black bg-[#405FF214] p-5 flex flex-col items-center justify-center text-center gap-3">
					<Image
						src={
							file
								? URL.createObjectURL(file)
								: "/search/upload-img.png"
						}
						alt="add"
						width={300}
						height={300}
						className="object-contain h-[100px] md:h-[250px]"
					/>
					<h6 className="text-xs md:text-sm text-custom-black">
						{file
							? file.name
							: locale === "en"
							? "Upload a photo of the product you want to add"
							: "قم بتحميل صورة للمنتج الذي تريد إضافته"}
					</h6>
					<input
						type="file"
						accept="image/*"
						className="hidden"
						id="file-upload"
						onChange={(e) => handleFileChange(e)}
					/>
				</label>

				<button
					onClick={(e) => handleSubmit(e)}
					className="w-1/2 py-3 text-white bg-custom-blue rounded"
				>
					{locale === "en" ? "Send request" : "إرسال الطلب"}
				</button>
			</div>
		</div>
	);
};

export default ProductAddForm;
