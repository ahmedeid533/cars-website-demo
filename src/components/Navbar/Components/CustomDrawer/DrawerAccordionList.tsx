import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Category, SubCategory } from "@/types";
import { getSubCategories } from "@/libs/get-sub-categories";

type props = {
	expanded: string | false;
	index: number;
	handleChange: (
		panel: string
	) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
	toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void;
	link: Category;
};

const DrawerAccordionList = ({
	expanded,
	handleChange,
	toggleDrawer,
	index,
	link,
}: props) => {
	const locale = useLocale();
	const [categoryItems, setCategoryItems] = useState<SubCategory[]>([]);

	// Refined useEffect hook
	useEffect(() => {
		let isActive = true; // 1. Cleanup flag

		const fetchCategoryItems = async () => {
			try {
				const response = (await getSubCategories(
					link.id
				)) as SubCategory[];
				if (isActive) {
					setCategoryItems(response || []); // Ensure response is an array
				}
			} catch (error) {
				console.error("Failed to fetch sub-categories:", error);
				if (isActive) {
					setCategoryItems([]);
				}
			}
		};

		if (link?.id) {
			setCategoryItems([]);
			fetchCategoryItems();
		}

		return () => {
			isActive = false; // Prevent state updates on unmounted component
		};
	}, [link.id]); // 2. More specific dependency

	return (
		<Accordion
			expanded={expanded === index.toString()}
			onChange={handleChange(index.toString())}
			sx={{
				boxShadow: "none",
				borderBottom: "none",
				"&:before": { display: "none" },
			}}
		>
			<AccordionSummary
				expandIcon={
					expanded === index.toString() ? (
						<ExpandMoreIcon className="text-[#5C5C5C]" />
					) : (
						<KeyboardArrowRightIcon
							className="text-[#5C5C5C]"
							style={
								locale === "ar"
									? { transform: "rotate(180deg)" }
									: { transform: "none" }
							}
						/>
					)
				}
				aria-controls={index.toString()}
				id={index.toString()}
				sx={{ borderBottom: "none" }}
			>
				<div className="flex flex-row items-center gap-3">
					{link?.image_url && (
						<Image
							src={link.image_url}
							alt={link.name[locale === "en" ? "en" : "ar"] || ""}
							width={40}
							height={40}
							className="object-contain"
						/>
					)}
					<h4 className="text-custom-black">
						{link?.name[locale === "en" ? "en" : "ar"]}
					</h4>
				</div>
			</AccordionSummary>
			<AccordionDetails sx={{ borderBottom: "none" }} className="px-10">
				<div className="flex flex-col gap-7">
					{categoryItems.map((item) =>
						// 3. Defensive check for required link properties
						item?.id && item?.slug && link?.id ? (
							<Link
								href={`/category/${item.slug}?category_id=${link.id}&sub_category_id=${item.id}`}
								key={item.id} // 4. Use unique ID for key
								className="flex items-center gap-3"
								onClick={toggleDrawer}
							>
								{/* 5. CRITICAL FIX: Conditionally render the image */}
								{item.image_url ? (
									<Image
										src={item.image_url}
										alt={
											item.name[
												locale === "en" ? "en" : "ar"
											] || ""
										}
										width={40}
										height={40}
										className="object-contain"
									/>
								) : (
									// Optional: render a placeholder div to maintain layout
									<div style={{ width: 40, height: 40 }} />
								)}
								<h4 className="text-custom-black">
									{item.name[locale === "en" ? "en" : "ar"]}
								</h4>
							</Link>
						) : null // Render nothing if the item data is incomplete
					)}
				</div>
			</AccordionDetails>
		</Accordion>
	);
};

export default DrawerAccordionList;
