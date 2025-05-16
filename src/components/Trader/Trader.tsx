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
import { styled } from "@mui/system";
import { useLocale } from "next-intl";
import { useState } from "react";

const Input = styled("input")({
	display: "none",
});

const Trader = () => {
	const cities = [
		"Cairo",
		"Alexandria",
		"Giza",
		"Shubra El Kheima",
		"Port Said",
		"Suez",
		"El Mahalla El Kubra",
		"Luxor",
		"Mansoura",
		"Tanta",
		"Asyut",
		"Ismailia",
		"Fayoum",
		"Zagazig",
		"Damietta",
		"Aswan",
		"Minya",
		"Beni Suef",
	];
	const egyptianGovernorates = [
		"Cairo",
		"Alexandria",
		"Giza",
		"Red Sea",
		"Beheira",
		"Fayoum",
		"Gharbia",
		"Ismailia",
		"Menofia",
		"Minya",
		"Qalyubia",
		"New Valley",
		"Suez",
		"Aswan",
		"Assiut",
	];
	const [selectedCity, setSelectedCity] = useState("");
	const [selectedGovernorate, setSelectedGovernorate] = useState("");
	const locale = useLocale();

	const handleCityChange = (event: any) => {
		setSelectedCity(event.target.value);
	};

	const handleGovernorateChange = (event: any) => {
		setSelectedGovernorate(event.target.value);
	};
	return (
		<aside className="py-10 flex items-center justify-center">
			<div className="w-5/6 lg:w-2/3  gap-8 flex flex-col items-center justify-center">
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
						/>
						<TextField
							label={
								locale == "en"
									? "Mobile Number 2"
									: "رقم الهاتف المحمول 2"
							}
							variant="outlined"
							fullWidth
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
						/>
						<TextField
							label={locale == "en" ? "password" : "كلمة المرور"}
							type="password"
							variant="outlined"
							fullWidth
							required
						/>
						<TextField
							label={
								locale == "en"
									? "Confirm Password"
									: "تأكيد كلمة المرور"
							}
							type="password"
							variant="outlined"
							fullWidth
							required
						/>

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
										value={selectedGovernorate}
										onChange={handleGovernorateChange}
									>
										{egyptianGovernorates.map(
											(governorate) => (
												<MenuItem
													key={governorate}
													value={governorate}
												>
													{governorate}
												</MenuItem>
											)
										)}
									</Select>
								</FormControl>

								<FormControl>
									<InputLabel id="city-select-label">
										{locale == "en" ? "City" : "المدينة"}
									</InputLabel>
									<Select
										labelId="city-select-label"
										value={selectedCity}
										onChange={handleCityChange}
									>
										{cities.map((city) => (
											<MenuItem key={city} value={city}>
												{city}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<TextField
									label={
										locale == "en"
											? "Street Name"
											: "اسم الشارع"
									}
									variant="outlined"
									fullWidth
									required
								/>
								<TextField
									label={
										locale == "en"
											? "Building Number"
											: "رقم المبنى"
									}
									variant="outlined"
									fullWidth
								/>
							</div>
						</div>
						<TextField
							label={locale == "en" ? "Store name" : "اسم المتجر"}
							variant="outlined"
							fullWidth
							required
						/>
						{/* w-2/3 lg:2-1/3 */}
						<div className=" pt-10 flex flex-col gap-2">
							<div className="w-full">
								<Input
									id="id-card-photo-upload"
									type="file"
									accept="image/*"
								/>
								<label htmlFor="id-card-photo-upload">
									<Button
										variant="contained"
										component="span"
										className="w-full bg-custom-blue"
									>
										{locale == "en"
											? "Upload ID Card Photo"
											: "تحميل صورة بطاقة الهوية"}
									</Button>
								</label>
							</div>
							<div className="w-full">
								<Input
									id="store-photo-upload"
									type="file"
									accept="image/*"
								/>
								<label htmlFor="store-photo-upload">
									<Button
										variant="contained"
										component="span"
										className="w-full bg-custom-blue"
									>
										{locale == "en"
											? "Upload Store Photo (Sign)"
											: " تحميل صورة المتجر (اليافطه)"}
									</Button>
								</label>
							</div>
						</div>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
							className="w-full bg-custom-green hover:bg-custom-green"
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
