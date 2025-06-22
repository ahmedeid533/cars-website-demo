"use client";
import * as React from "react";
import { Drawer } from "@mui/material";
import Image from "next/image";
import DrawerLists from "./DrawerLists";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function CustomDrawer() {
	const [open, setOpen] = React.useState(false);

	// 1. Use camelCase for variables and hooks
	const pathname = usePathname();
	const locale = useLocale();

	// 2. Memoize the toggle function for performance.
	// This prevents creating a new function on every render and avoids
	// unnecessary re-renders in the child component `DrawerLists`.
	const handleToggleDrawer = React.useCallback(() => {
		setOpen((prevOpen) => !prevOpen);
	}, []); // Empty dependency array means the function is created only once.

	// 3. The logic is now robust and works with any locale.
	const isMobileListPage = pathname.endsWith("/mobile_list");

	return (
		// Determine visibility based on the corrected logic
		<div
			className={
				!isMobileListPage ? "hidden md:block" : "block md:hidden"
			}
		>
			<Image
				src={"/menuIcon.svg"}
				alt="menu"
				width={20}
				height={20}
				className="cursor-pointer"
				onClick={handleToggleDrawer}
			/>
			<Drawer
				anchor={locale === "en" ? "left" : "right"}
				open={open}
				onClose={handleToggleDrawer}
			>
				{/* Pass the memoized function as a prop */}
				<DrawerLists toggleDrawer={handleToggleDrawer} />
			</Drawer>
		</div>
	);
}
