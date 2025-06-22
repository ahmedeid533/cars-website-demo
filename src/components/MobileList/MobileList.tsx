"use client";
import React, { useEffect, useState } from "react";
import { Box, Divider, List, ListItem, ListItemButton } from "@mui/material";
import Link from "next/link";
import LangChangeModal from "../Navbar/Components/LangChangeModal";
import { logout } from "@/action/auth/logout";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
import { makeNotification } from "@/util/makeNotification";
import DrawerAccordionList from "../Navbar/Components/CustomDrawer/DrawerAccordionList";
import { drawerItems } from "@/mocks/drawerItems";
import { drawerUserInfo } from "@/mocks/drawerUserInfo";
import DrawerUserInfoList from "../Navbar/Components/CustomDrawer/DrawerUserInfoList";
import DrawerContactList from "../Navbar/Components/CustomDrawer/DrawerContactList";
import { drawerContact } from "@/mocks/drawerConatct";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import VehicleSelectionBtn from "@/components/Navbar/Components/VehicleSelectionBtn";
import { getCategories } from "@/libs/get-categories";
import { useTranslations, useLocale } from "next-intl";
import { Category } from "@/types";
import Cookies from "universal-cookie";

const MobileList = () => {
	const [expanded, setExpanded] = useState<string | false>(false);
	const [open, setOpen] = useState(false);
	const locale = useLocale();
	const cookie = new Cookies();
	const user = cookie.get("customer");
	const token = cookie.get("token");
	const t = useTranslations("Header");

	const toggleDrawer = () => {};
	const handleLogout = async () => {
		if (!token) return;
		await logout(token)
			.then((res) => {
				if (res && res.message) {
					makeNotification("success", res?.message);
				}
			})
			.catch((err) => {
				makeNotification("error", err?.message);
			})
			.finally(() => {
				cookie.remove("token",{path: "/"});
				cookie.remove("customer", { path: "/" });
				window.location.href = `/${locale}`;
			});
	};
	const handleChange =
		(panel: string) =>
		(event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};
	const [departments, setDepartments] = useState<Category[]>([]);
	useEffect(() => {
		const fetchDepartments = async () => {
			const response = (await getCategories()) as Category[];
			setDepartments(response);
		};
		fetchDepartments();
	}, []);
	return (
		<div className="top-0 z-[100] absolute bg-white w-full min-h-screen">
			<div>
				<ListItem className="flex justify-between items-center py-5 w-full">
					<Link href={"/"}>
						<Image
							src={"/main-logo-1.png"}
							alt="logo"
							width={100}
							height={50}
						/>
					</Link>
				</ListItem>
				<Divider />
				<List>
					<div className="mb-10">
						<ListItem>
							<h3 className="mb-5 font-bold text-custom-black text-xl capitalize">
								Departments
							</h3>
						</ListItem>
						{departments &&
							departments.length > 0 &&
							departments.map((link, index) => (
								<DrawerAccordionList
									expanded={expanded}
									handleChange={handleChange}
									key={index}
									index={index}
									link={link}
									toggleDrawer={function (
										event:
											| React.KeyboardEvent
											| React.MouseEvent
									): void {
										throw new Error(
											"Function not implemented."
										);
									}}
								/>
							))}
						<Divider className="my-10" />
						{/* {drawerUserInfo.map((link, index) => (
              <DrawerUserInfoList
                key={index}
								link={link}
								path={"#"}
                toggleDrawer={function (
                  event: React.KeyboardEvent | React.MouseEvent
                ): void {
                  throw new Error('Function not implemented.')
                }}
              />
            ))} */}
						<VehicleSelectionBtn />
						{user && (
							<>
								<DrawerUserInfoList
									link={{
										title: "My Account",
										desc: t("Hello, ") + user?.name,
									}}
									path={`/${locale}/profile`}
									toggleDrawer={toggleDrawer}
								/>
								<button
									className="flex flex-row justify-between items-center pb-3 px-[5vw] border-b border-b-[#525252] w-full"
									onClick={() => handleLogout()}
								>
									<div className="flex flex-row items-center gap-3">
										<h4 className="text-red-700 capitalize">
											{locale === "ar"
												? "تسجيل الخروج"
												: "Logout"}
										</h4>
									</div>
									<ArrowRightAltIcon
										className="text-red-700"
										style={
											locale === "ar"
												? {
														transform:
															"rotate(180deg)",
												  }
												: { transform: "none" }
										}
									/>
								</button>
							</>
						)}
						<Divider className="mb-10" />
						<button
							className="flex flex-row items-center gap-2 p-2 m-4 border-[1px] border-custom-black rounded w-auto"
							onClick={() => setOpen(true)}
						>
							<Image
								src={"/localization.svg"}
								alt="logo"
								width={20}
								height={20}
							/>
							<span className="text-[#3C3C3C]">
								{locale === "en" ? "English" : "العربية"}
							</span>
						</button>
						{drawerContact &&
							drawerContact?.length > 0 &&
							drawerContact?.map((link, index) => (
								<DrawerContactList
									key={index}
									link={link}
									toggleDrawer={function (
										event:
											| React.KeyboardEvent
											| React.MouseEvent
									): void {
										throw new Error(
											"Function not implemented."
										);
									}}
								/>
							))}

						{/* <Divider className="mb-10" /> */}
						<ListItem disablePadding className="mb-24">
							<Link href="/trader" className="w-full">
								<ListItemButton className="flex flex-row items-center gap-3 w-full">
									<ContactPageIcon />
									<h4 className="text-custom-black">
										For Traders
									</h4>
								</ListItemButton>
							</Link>
						</ListItem>

						<LangChangeModal open={open} setOpen={setOpen} />
					</div>
				</List>
			</div>
		</div>
	);
};

export default MobileList;
