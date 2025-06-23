"use client";
import {
	TextField,
	Button,
	Box,
	Typography,
	MenuItem,
	Select,
	InputLabel,
	FormControl,
} from "@mui/material";
import { compressImageFile } from "@/util/compressImages";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { apiClient } from "@/util/axois";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { styled } from "@mui/system";
import { useLocale } from "next-intl";
import { useState } from "react";
import Cookies from "universal-cookie";

const Input = styled("input")({
	display: "none",
});

const Trader = () => {
	type OptionType = { id: string; name_en: string; name_ar: string };

	const [governmentOptions, setGovernmentOptions] = useState<OptionType[]>(
		[]
	);
	const [cityOptions, setCityOptions] = useState<OptionType[]>([]);
	const [government, setGovernment] = useState("");
	const [city, setCity] = useState("");
	const [show, setShow] = useState(false);
	const [full_name, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [mobile_number_1, setMobileNumber1] = useState("");
	const [mobile_number_2, setMobileNumber2] = useState("");
	const [street_name, setStreetName] = useState("");
	const [building_number, setBuildingNumber] = useState("");
	const [district, setDistrict] = useState("");
	const [store_name, setStoreName] = useState("");
	const [id_card_photo, setIdCardPhoto] = useState<File | undefined>();
	const [store_photo, setStorePhoto] = useState<File | undefined>();
	const locale = useLocale();
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
	const handleFileIdChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			const file = event.target.files[0];
			console.log("file ==> ", file);
			// Compress the image before setting it
			const compressedFile = await compressImageFile(file);
			setIdCardPhoto(compressedFile);
		}
	};

	const handleFileStoreChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (event.target.files && event.target.files[0]) {
			const file = event.target.files[0];
			console.log("file before==> ", file.size);
			// Compress the image before setting it
			// Note: You can adjust the quality and maxWidth as needed compressedFile(file, quality = 0.7, maxWidth = 800);
			const compressedFile = await compressImageFile(file);
			console.log("file after==> ", compressedFile.size);
			setStorePhoto(compressedFile);
		}
	};

	useEffect(() => {
		fetchGovernmentOptions();
	}, []);
	const registSellers = () => {
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
		if (!full_name.trim()) {
			toast.error(
				locale === "en" ? "Full name is required" : "الاسم الكامل مطلوب"
			);
			return;
		}
		if (!email.trim()) {
			toast.error(
				locale === "en"
					? "Email is required"
					: "البريد الإلكتروني مطلوب"
			);
			return;
		}
		if (!password.trim()) {
			toast.error(
				locale === "en" ? "Password is required" : "كلمة المرور مطلوبة"
			);
			return;
		}
		if (!mobile_number_1.trim()) {
			toast.error(
				locale === "en"
					? "Mobile number 1 is required"
					: "رقم الهاتف المحمول 1 مطلوب"
			);
			return;
		}
		if (!district?.trim()) {
			toast.error(
				locale === "en" ? "District is required" : "الحي مطلوب"
			);
			return;
		}
		if (!street_name.trim()) {
			toast.error(
				locale === "en" ? "Street name is required" : "اسم الشارع مطلوب"
			);
			return;
		}
		if (!building_number?.trim()) {
			toast.error(
				locale === "en"
					? "Building number is required"
					: "رقم المبنى مطلوب"
			);
			return;
		}
		if (!store_name.trim()) {
			toast.error(
				locale === "en" ? "Store name is required" : "اسم المتجر مطلوب"
			);
			return;
		}
		if (!store_photo) {
			toast.error(
				locale === "en"
					? "Store photo is required"
					: "صورة المتجر مطلوبة"
			);
			return;
		}

		const data = {
			full_name: full_name.trim(),
			email: email.trim(),
			password: password.trim(),
			mobile_number_1: mobile_number_1.trim(),
			mobile_number_2: mobile_number_2.trim(),
			governorate_id: government,
			city_id: city,
			street_name: street_name.trim(),
			building_number: building_number?.trim(),
			district: district?.trim(),
			store_name: store_name.trim(),
			id_card_photo: id_card_photo,
			store_photo: store_photo,
		};

		try {
			toast.info(
				locale === "en"
					? "Data is being uploaded, please wait a moment"
					: "يتم الآن تحميل البيانات يرجى الانتظار قليلًا"
			);
			apiClient()
				.post("/sellers/register", data, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((response) => {
					console.log("Checkout successful:", response.data);
					toast.success(
						locale === "en"
							? "regist successful"
							: "تم التسجيل بنجاح"
					);
				})
				.catch((error) => {
					console.error("Error during regist:", error);
					if (error.response.data.errors) {
						if (error.response.data.errors.email)
							toast.error(
								locale === "en"
									? error.response.data.errors.email[0]
									: "البريد الإلكتروني مستخدم بالفعل"
							);
						if (error.response.data.errors.password)
							toast.error(
								locale === "en"
									? error.response.data.errors.password[0]
									: "كلمة المرور يجب أن تكون 8 أحرف على الأقل"
							);
						if (error.response.data.errors.store_photo)
							toast.error(
								locale === "en"
									? error.response.data.errors.store_photo[1]
									: "يجب أن تكون صورة المتجر بتنسيق jpg أو jpeg أو png"
							);
						return;
					}
					toast.error(
						locale === "en"
							? "regist failed check the entered data"
							: "فشلت عملية التسجيل مشكلة في البيانات"
					);
				});
		} catch (error) {
			console.error("Error during regist:", error);
			toast.error(
				locale === "en" ? "regist failed" : "فشلت عملية التسجيل"
			);
		}

		console.log(data);
	};
	const handleCityChange = (event: any) => {
		setCity(event.target.value);
	};

	const handleGovernorateChange = (event: any) => {
		setGovernment(event.target.value);
	};
	useEffect(() => {
		if (government) {
			fetchCityOptions(government);
		}
	}, [government]);
	return (
		<aside className="py-10 flex items-center justify-center">
			<div className="w-5/6 lg:w-2/3 gap-8 flex flex-col items-center justify-center">
				<Box className="p-6 bg-white shadow-md rounded-lg">
					<Typography variant="h6" className="mb-4">
						{locale == "en"
							? "Upload Required Images and Enter Personal Information"
							: "قم بتحميل الصور المطلوبة وأدخل المعلومات الشخصية"}
					</Typography>
					<form
						onSubmit={(e) => e.preventDefault()}
						className="space-y-4"
					>
						<TextField
							label={
								locale == "en" ? "Full Name" : "الاسم الكامل"
							}
							variant="outlined"
							fullWidth
							required
							onChange={(e) => setFullName(e.target.value)}
						/>
						<TextField
							label={
								locale == "en"
									? "Mobile Number 1"
									: "رقم الهاتف المحمول 1"
							}
							variant="outlined"
							fullWidth
							required
							onChange={(e) => setMobileNumber1(e.target.value)}
						/>
						<TextField
							label={
								locale == "en"
									? "Mobile Number 2"
									: "رقم الهاتف المحمول 2"
							}
							variant="outlined"
							fullWidth
							onChange={(e) => setMobileNumber2(e.target.value)}
						/>
						<div className="text-black text-xl">
							{locale == "en"
								? "login details as a trader :"
								: "	بيانات تسجيل الدخول كتاجر :"}
						</div>
						<TextField
							label={
								locale == "en"
									? "Email Address"
									: "عنوان البريد الإلكتروني"
							}
							variant="outlined"
							fullWidth
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
						<div className="relative">
							<TextField
								label={
									locale == "en" ? "password" : "كلمة المرور"
								}
								type={show ? "text" : "password"}
								variant="outlined"
								fullWidth
								required
								onChange={(e) => setPassword(e.target.value)}
							/>
							<div
								onClick={() => setShow(!show)}
								className={
									"absolute top-1/2 -translate-y-1/2 cursor-pointer" +
									(locale == "en" ? " right-2" : " left-2")
								}
							>
								{show ? (
									<VisibilityOffIcon />
								) : (
									<VisibilityIcon />
								)}
							</div>
						</div>
						<Typography>
							{locale == "en"
								? "Address Details:"
								: "تفاصيل العنوان:"}
						</Typography>
						<div className="flex items-start flex-col lg:flex-row w-full justify-between gap-0 lg:gap-10">
							<div className="w-full flex-1 flex flex-col gap-5">
								<FormControl>
									<InputLabel id="governorate-select-label">
										{locale == "en"
											? "Governorate"
											: "المحافظة"}
									</InputLabel>
									<Select
										labelId="governorate-select-label"
										value={government}
										onChange={handleGovernorateChange}
									>
										{governmentOptions.map((option) => (
											<MenuItem
												key={option.id}
												value={option.id}
											>
												{locale == "en"
													? option.name_en
													: option.name_ar}
											</MenuItem>
										))}
									</Select>
								</FormControl>

								<FormControl>
									<InputLabel id="city-select-label">
										{locale == "en" ? "City" : "المدينة"}
									</InputLabel>
									<Select
										labelId="city-select-label"
										value={city}
										onChange={handleCityChange}
									>
										{cityOptions.map((option) => (
											<MenuItem
												key={option.id}
												value={option.id}
											>
												{locale == "en"
													? option.name_en
													: option.name_ar}
											</MenuItem>
										))}
									</Select>
								</FormControl>

								<TextField
									label={locale == "en" ? "District" : "الحي"}
									variant="outlined"
									fullWidth
									required
									onChange={(e) =>
										setDistrict(e.target.value)
									}
								/>
								<TextField
									label={
										locale == "en"
											? "Street Name"
											: "اسم الشارع"
									}
									variant="outlined"
									fullWidth
									required
									onChange={(e) =>
										setStreetName(e.target.value)
									}
								/>

								<TextField
									label={
										locale == "en"
											? "Building Number"
											: "رقم المبنى"
									}
									variant="outlined"
									fullWidth
									required
									onChange={(e) =>
										setBuildingNumber(e.target.value)
									}
								/>
							</div>
						</div>
						<TextField
							label={locale == "en" ? "Store name" : "اسم المتجر"}
							variant="outlined"
							fullWidth
							required
							onChange={(e) => setStoreName(e.target.value)}
						/>
						{/* w-2/3 lg:2-1/3 */}
						<div className=" pt-10 flex flex-col gap-2">
							<div className="w-full">
								<Input
									id="id-card-photo-upload"
									type="file"
									accept="image/*"
									onChange={handleFileIdChange}
								/>
								<label htmlFor="id-card-photo-upload">
									<Button
										variant="contained"
										component="span"
										className="w-full bg-custom-blue"
									>
										{locale == "en"
											? "Upload ID Card Photo (Optional)"
											: "(اختياري) تحميل صورة البطاقه الشخصيه"}
									</Button>
								</label>
								<div>
									{id_card_photo &&
										(locale == "en"
											? `Selected file: ${id_card_photo?.name}`
											: `الملف المحدد: ${id_card_photo?.name}`)}
								</div>
							</div>
							<div className="w-full">
								<Input
									id="store-photo-upload"
									type="file"
									accept="image/*"
									onChange={handleFileStoreChange}
								/>
								<label htmlFor="store-photo-upload">
									<Button
										variant="contained"
										component="span"
										className="w-full bg-custom-blue"
									>
										{locale == "en"
											? "Upload Store Photo (Sign)"
											: "تحميل صورة المتجر (اليافطه)"}
									</Button>
								</label>
								<div>
									{store_photo &&
										(locale == "en"
											? `Selected file: ${store_photo?.name}`
											: `الملف المحدد: ${store_photo?.name}`)}
								</div>
							</div>
						</div>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
							className="w-full bg-custom-green hover:bg-custom-green"
							onClick={registSellers}
						>
							{locale == "en" ? "Submit" : "إرسال"}
						</Button>
					</form>
				</Box>
			</div>
		</aside>
	);
};

export default Trader;
