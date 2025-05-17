"use client";
import { useState } from "react";
import { Divider } from "@mui/material";
import Link from "next/link";
import ChangePasswordModal from "./ChangePasswordModal";
import Cookies from "universal-cookie";
import VehicleSelectionBtn from "@/components/Navbar/Components/VehicleSelectionBtn";
import { useLocale } from "next-intl";

const FirstLine = () => {
	const [open_, setOpen_] = useState(false);
	const [orders, setOrders] = useState([]);
	const cookie = new Cookies();
	const user = cookie.get("customer");
	const locale = useLocale();

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 items-start w-full gap-5">
			<div className="flex flex-col items-start gap-3">
				<div className="flex flex-col gap-1 w-auto mb-10 mt-5 rounded-md border border-custom-black p-3 text-custom-black bg-transparent transition duration-300 hover:bg-[#405FF226] hover:border-[#405FF226]">
					<h3 className="font-bold text-xl">
						{locale == "en" ? "Account Settings" : "إعدادات الحساب"}
					</h3>
					<p className="text-xs">
						{locale == "en"
							? "Manage your account settings"
							: "إدارة إعدادات حسابك"}
					</p>
				</div>
				<div className="w-full border border-custom-black p-4 rounded">
					<div className="w-full flex items-center justify-between">
						<h2 className="font-bold text-lg">
							{locale == "en"
								? "Account Access"
								: "الوصول إلى الحساب"}
						</h2>
						<button
							className="py-2 px-10 border font-bold text-lg border-custom-black rounded transition duration-300 hover:bg-custom-blue hover:border-custom-blue hover:text-white"
							onClick={() => setOpen_(true)}
						>
							{locale == "en" ? "Edit" : "تعديل"}
						</button>
						<ChangePasswordModal open={open_} setOpen={setOpen_} />
					</div>
					<div className=" mt-5 flex flex-col gap-2 w-full md:w-1/2">
						<div className="w-full flex items-center justify-between">
							<h2>
								{locale == "en"
									? "Email :"
									: "البريد الإلكتروني :"}
							</h2>
							<span className="text-custom-gray text-sm">
								{user?.email}
							</span>
						</div>
						<div className="w-full flex items-center justify-between">
							<h2>
								{locale == "en"
									? "Password :"
									: "كلمة المرور :"}
							</h2>
							<span className="text-custom-gray text-sm">
								{" "}
								**********
							</span>
						</div>
					</div>
				</div>

				{/* <div className='w-full border border-custom-black p-4 rounded'>
                    <div className='w-full flex items-center justify-between'>
                        <h2 className='font-bold text-lg'>Account Info</h2>
                        <Link href={'#'} className='py-2 px-10 border font-bold text-lg border-custom-black rounded'>Edit</Link>
                    </div>
                    <Divider className='my-4' />
                    <div className='flex items-center justify-center'>
                        <p className='text-center w-3/4 text-sm'>
                            ou currently have no account info. You can add one by
                            <Link href={'#'} className='text-custom-blue font-bold' > clicking here </Link>
                            or the button above</p>
                    </div>
                </div> */}
			</div>
			<div className="w-full flex flex-col items-start">
				<div className="flex flex-col gap-1 w-auto md:mb-[10vh] mb-6 mt-5 rounded-md border border-custom-black p-3 text-custom-black bg-transparent transition duration-300 hover:bg-[#405FF226] hover:border-[#405FF226]">
					<h3 className="font-bold text-xl">
						{locale == "en" ? "Garage" : "جراچ"}
					</h3>
					<p className="text-xs">
						{locale == "en"
							? "Add your vehicles & find parts easily"
							: "أضف مركباتك وابحث عن الأجزاء بسهولة"}
					</p>
				</div>
				<VehicleSelectionBtn />
			</div>
		</div>
	);
};

export default FirstLine;
