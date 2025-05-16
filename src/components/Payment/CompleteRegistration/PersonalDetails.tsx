import React from 'react'
import { useState, useEffect } from "react";
import CustomInput from "./CustomInput";
import { useLocale } from "next-intl";
import { apiClient } from "@/util/axois";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

interface PersonalDetailsProps {
	send: boolean;
	payment: string;
	setResponse: (response: any) => void;
	setSend: (send: boolean) => void;
}

const PersonalDetails = ({
	send,
	payment,
	setResponse,
	setSend,
}: PersonalDetailsProps) => {
	const locale = useLocale();
	const [government, setGovernment] = useState("");
	const [city, setCity] = useState("");
	const [address, setAddress] = useState("");
	const [landmark, setLandmark] = useState("");
	const [notes, setNotes] = useState("");
	const [governmentOptions, setGovernmentOptions] = useState([]);
	const [cityOptions, setCityOptions] = useState([]);

	const router = useRouter();
	const cookie = new Cookies();

	const fetchGovernmentOptions = async () => {
		try {
			const response = await apiClient().get("/governorates");
			const list = response.data.data.map(
				(item: {
					governorate_name_en: string;
					governorate_name_ar: string;
					id: string;
				}) => ({
					name_en: item.governorate_name_en,
					name_ar: item.governorate_name_ar,
					id: item.id,
				})
			);
			setGovernmentOptions(list);
			setGovernment(list[0]?.id);
		} catch (error) {
			console.error("Error fetching government options:", error);
		}
	};

	const fetchCityOptions = async (id: string) => {
		try {
			const response = await apiClient().get(
				`/governorates/${id}/cities`
			);
			const list = response.data.data.map(
				(item: {
					city_name_en: string;
					city_name_ar: string;
					id: string;
				}) => ({
					name_en: item.city_name_en,
					name_ar: item.city_name_ar,
					id: item.id,
				})
			);
			setCityOptions(list);
			setCity(list[0]?.id);
		} catch (error) {
			console.error("Error fetching city options:", error);
		}
	};

	const checkOut = () => {
		const token = cookie.get("token");
		if (!token) {
			console.error("Token not found in local storage.");
			router.push("/login");
			return;
		}
		setResponse(null); // Reset response before making the API call

		// Validation
		if (!government) {
			toast.error(
				locale === "en"
					? "Please select a governorate"
					: "من فضلك اختر المحافظة"
			);
			return;
		}
		if (!city) {
			toast.error(
				locale === "en"
					? "Please select a city"
					: "من فضلك اختر المدينة"
			);
			return;
		}
		if (!address.trim()) {
			toast.error(
				locale === "en" ? "Address is required" : "العنوان مطلوب"
			);
			return;
		}
		if (!landmark.trim()) {
			toast.error(
				locale === "en"
					? "Landmark is required"
					: "العلامة المميزة مطلوبة"
			);
			return;
		}

		const data = {
			governorate_id: government,
			city_id: city,
			shipping_address: address.trim(),
			landmark: landmark.trim(),
			notes: notes.trim(),
			payment_method_id: payment,
		};

		try {
			apiClient(token)
				.post("/checkout/process", data)
				.then((response) => {
					console.log("Checkout successful:", response.data);
					setResponse(response.data);
					toast.success(
						locale === "en"
							? "Checkout successful"
							: "تمت عملية الشراء بنجاح"
					);
				})
				.catch((error) => {
					console.error("Error during checkout:", error);
					if (error.response.data.status === "error") {
						toast.error(error.response.data.message);
						toast.info(
							locale === "en"
								? "please remove the item from the cart"
								: "من فضلك قم بإزالة العنصر من السلة"
						);
						return;
					}
					toast.error(
						locale === "en"
							? "Checkout failed"
							: "فشلت عملية الشراء"
					);
				});
		} catch (error) {
			console.error("Error during checkout:", error);
			toast.error(
				locale === "en" ? "Checkout failed" : "فشلت عملية الشراء"
			);
		}

		console.log(data);
	};

	useEffect(() => {
		fetchGovernmentOptions();
	}, []);
	useEffect(() => {
		if (government) {
			fetchCityOptions(government);
		}
	}, [government]);

	useEffect(() => {
		if (send) {
			checkOut();
			setSend(false); // Reset send state after checkout
		}
	}, [send]);

	return (
		<div className="flex flex-col gap-5 w-full">
			<h2 className="text-xl font-bold text-custom-black">
				{locale == "en" ? "Personal details" : "تفاصيل شخصية"}
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
				<CustomInput
					label={locale == "en" ? "government" : "محافظة"}
					placeholder={locale == "en" ? "Cairo" : "القاهرة"}
					type="select"
					value={government}
					setValue={setGovernment}
					selectOptions={governmentOptions}
				/>
				<CustomInput
					label={locale == "en" ? "city " : "مدينة"}
					placeholder={locale == "en" ? "Giza" : "الجيزة"}
					type="select"
					value={city}
					setValue={setCity}
					selectOptions={cityOptions}
				/>
				<CustomInput
					label={locale == "en" ? "Address" : "العنوان"}
					placeholder={
						locale == "en" ? "pyramids street" : "شارع الأهرامات"
					}
					type="text"
					value={address}
					setValue={setAddress}
				/>
				<CustomInput
					label={locale == "en" ? "landmark" : "علامة مميزه"}
					placeholder={locale == "en" ? "pyramids" : "الأهرامات"}
					type="text"
					value={landmark}
					setValue={setLandmark}
				/>
			</div>
			<div className="grid grid-cols-1  gap-4 items-center">
				<CustomInput
					label={locale == "en" ? "Notes" : "ملاحظات"}
					placeholder={locale == "en" ? "home 5" : "منزل 5"}
					type="text"
					value={notes}
					setValue={setNotes}
				/>
			</div>
		</div>
	);
};

export default PersonalDetails
