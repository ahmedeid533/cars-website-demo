"use client";
import { apiClient } from "@/util/axois";
import { Backdrop, Fade, Modal, TextField } from "@mui/material";
import Image from "next/image";
import Cookies from "universal-cookie";
import { useState } from "react";
import React from "react";
import { toast } from "react-toastify";

type props = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ChangePasswordModal = ({ open, setOpen }: props) => {
	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const cookie = new Cookies();
	const token = cookie.get("token");
	const changePassword = () => {
		// Handle password change logic here
		apiClient(token)
			.post("/profile/change-password", {
				current_password: currentPassword,
				password: newPassword,
				password_confirmation: confirmPassword,
			})
			.then((res) => {
				console.log("res ==> ", res.data.data);
				toast.success("Password changed successfully");
				setOpen(false);
			})
			.catch((error) => {
				console.error("Error changing password:", error);
				toast.error("Error changing password");
			});
	};
	return (
		<Modal
			open={open}
			onClose={() => {
				setOpen(false);
			}}
			closeAfterTransition
			slots={{ backdrop: Backdrop }}
			slotProps={{
				backdrop: {
					timeout: 500,
				},
			}}
		>
			<Fade in={open}>
				<div className="z-[100] border-none outline-none">
					<div
						className="top-[50%] left-[50%] absolute flex flex-col gap-3 border-none outline-none w-[95%] sm:w-[50%]"
						style={{ transform: "translate(-50%, -50%)" }}
					>
						<div
							className="flex flex-col justify-start items-start gap-3 p-10 rounded-xl"
							style={{
								background:
									"linear-gradient(180deg, #F7F8FF 0%, #E8E8E8 100%)",
							}}
						>
							<div className="relative flex flex-row justify-center items-center w-full">
								<Image
									src={"/main-logo-1.png"}
									alt="logo"
									width={100}
									height={100}
								/>
								<span className="font-bold text-custom-black text-lg">
									Services
								</span>
							</div>
							<TextField
								id="outlined-password-input"
								label="Current password*"
								type="password"
								className="w-full"
								value={currentPassword}
								onChange={(e) =>
									setCurrentPassword(e.target.value)
								}
							/>
							<TextField
								id="outlined-password-input"
								label="New password*"
								type="password"
								className="w-full"
								value={newPassword}
								onChange={(e) =>
									setNewPassword(e.target.value)
								}
							/>
							<TextField
								id="outlined-password-input"
								label="Confirm password*"
								type="password"
								className="w-full"
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
							/>

							<div className="flex justify-center items-center gap-3 md:gap-6 mt-10 w-full">
								<div
									className="py-2 border border-custom-black rounded w-full md:w-1/3 text-center cursor-pointer"
									onClick={() => {
										setOpen(false);
									}}
								>
									Return
								</div>
								<div
									className="bg-custom-blue py-2 border border-custom-blue rounded w-full md:w-1/3 text-white text-center cursor-pointer"
									onClick={() => {
										changePassword();
									}}
								>
									Edit password
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fade>
		</Modal>
	);
};

export default ChangePasswordModal;
