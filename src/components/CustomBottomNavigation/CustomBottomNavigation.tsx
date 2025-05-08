"use client"
import { usePathname } from 'next/navigation';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const CustomBottomNavigation = () => {
	const pathname = usePathname();
	const locale = useLocale();
    const checkActiveRoute = (currentPath: string) => {
        if (pathname === currentPath) {
            return "text-5xl p-2 rounded-full text-white bg-custom-blue mb-5"
        }
        return "text-black text-3xl bg-transparent"
    }
    return (
		<Paper
			className="md:hidden block right-0 bottom-0 left-0 z-[200] fixed"
			elevation={3}
		>
			<BottomNavigation className="bg-[#F4F4F4]">
				<Link
					className={` h-full w-full  bg-no-repeat bg-center bg-cover flex items-center justify-center pt-5 pb-10`}
					href={`/${locale}`}
				>
					<BottomNavigationAction
						icon={
							<HomeOutlinedIcon
								className={`${checkActiveRoute(`/${locale}`)}`}
							/>
						}
					/>
				</Link>
				<Link
					className={`w-full h-full flex items-center justify-center pt-5 pb-10`}
					href={`/${locale}/mobile_list`}
				>
					<BottomNavigationAction
						icon={
							<GridViewOutlinedIcon
								className={`${checkActiveRoute(
									`/${locale}/mobile_list`
								)}`}
							/>
						}
					/>
				</Link>
				<Link
					className={` h-full w-full  bg-no-repeat bg-center bg-cover flex items-center justify-center pt-5 pb-10`}
					href={`/${locale}/cart`}
				>
					<BottomNavigationAction
						icon={
							<LocalGroceryStoreOutlinedIcon
								className={`${checkActiveRoute(`/${locale}/cart`)}`}
							/>
						}
					/>
				</Link>
				<Link
					className={` h-full w-full  bg-no-repeat bg-center bg-cover flex items-center justify-center pt-5 pb-10`}
					href={`/${locale}/profile`}
				>
					<BottomNavigationAction
						icon={
							<PersonOutlineOutlinedIcon
								className={`${checkActiveRoute(`/${locale}/profile`)}`}
							/>
						}
					/>
				</Link>
			</BottomNavigation>
		</Paper>
	);
}

export default CustomBottomNavigation;
