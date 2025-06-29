"use client"
import AppsIcon from '@mui/icons-material/Apps';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import React, { memo } from 'react';

const GridOptionsAndResults = ({
	setGridColsNumber,
	allItemsCount,
	subCategoryName,
	subSubCategoryName,
}: {
	setGridColsNumber: (cols: number) => void;
		allItemsCount: number;
		subCategoryName: string;
		subSubCategoryName: string;
}) => {
	return (
		<div className="hidden lg:flex items-center justify-end w-full gap-2">
			<p className="text-custom-black text-sm font-semibold me-auto">
				{`${subCategoryName} - ${subSubCategoryName}`}
			</p>
			<div className="text-custom-blue">
				<AppsIcon
					className="cursor-pointer"
					onClick={() => setGridColsNumber(3)}
				/>
				<ViewHeadlineIcon
					className="cursor-pointer"
					onClick={() => setGridColsNumber(1)}
				/>
			</div>
			<p className="text-custom-black text-sm font-semibold">
				{allItemsCount} results{" "}
			</p>
		</div>
	);
};

export default memo(GridOptionsAndResults)
