"use client";
import { usePathname } from "next/navigation";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Link from "next/link";
import { useLocale } from "next-intl";

const CustomBottomNavigation = () => {
	const pathname = usePathname();
	const locale = useLocale();

	// This function is now simplified as MUI handles the active state styling
	const getIconClassName = (currentPath: string) => {
		if (pathname === currentPath) {
			// Style for the active icon
			return "text-5xl p-2 rounded-full text-white bg-custom-blue mb-1"; // Adjusted margin for better look
		}
		// Style for inactive icons
		return "text-black text-3xl bg-transparent";
	};

	return (
		<Paper
			className="md:hidden block right-0 bottom-0 left-0 z-[200] fixed"
			elevation={3}
		>
			{/* Set value to the current pathname to let MUI handle the active state */}
			<BottomNavigation
				showLabels={false} // Explicitly hide labels if you don't want them
				value={pathname}
				className="bg-[#F4F4F4] h-auto pt-4 pb-2" // Adjust padding on the container
			>
				<BottomNavigationAction
					component={Link}
					href={`/${locale}`}
					value={`/${locale}`} // Value is used by BottomNavigation to identify the active tab
					icon={
						<HomeOutlinedIcon
							className={getIconClassName(`/${locale}`)}
						/>
					}
				/>
				<BottomNavigationAction
					component={Link}
					href={`/${locale}/mobile_list`}
					value={`/${locale}/mobile_list`}
					icon={
						<GridViewOutlinedIcon
							className={getIconClassName(
								`/${locale}/mobile_list`
							)}
						/>
					}
				/>
				<BottomNavigationAction
					component={Link}
					href={`/${locale}/cart`}
					value={`/${locale}/cart`}
					icon={
						<LocalGroceryStoreOutlinedIcon
							className={getIconClassName(`/${locale}/cart`)}
						/>
					}
				/>
				<BottomNavigationAction
					component={Link}
					href={`/${locale}/profile`}
					value={`/${locale}/profile`}
					icon={
						<PersonOutlineOutlinedIcon
							className={getIconClassName(`/${locale}/profile`)}
						/>
					}
				/>
			</BottomNavigation>
		</Paper>
	);
};

export default CustomBottomNavigation;
