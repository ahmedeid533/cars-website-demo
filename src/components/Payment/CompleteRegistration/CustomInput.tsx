import { useLocale } from "next-intl";
import React from "react";

type props = {
	label: string;
	placeholder: string;
	type: string;
	value: string;
	setValue: (value: string) => void;
	selectOptions?: { id: string; name_en: string; name_ar: string }[];
};
const CustomInput = ({
	label,
	placeholder,
	type,
	value,
	setValue,
	selectOptions,
}: props) => {
	const locale = useLocale();
	return (
		<div className="flex flex-col gap-2 w-full">
			<label htmlFor={label} className="text-[2B3674] font-bold text-sm">
				{label}
			</label>
			{type === "text" && (
				<input
					type={type}
					placeholder={placeholder}
					id={label}
					onChange={(e) => setValue(e.target.value)}
					required
					className="p-3 rounded-xl border border-[#E0E5F2] text-custom-black outline-2 outline-[#E0E5F2]"
				/>
			)}
			{type === "select" && (
				<select
					className="p-3 rounded-xl border border-[#E0E5F2] text-custom-black outline-2 outline-[#E0E5F2]"
					onChange={(e) => setValue(e.target.value)}
					value={value}
				>
					{selectOptions &&
						selectOptions.map((option, index) => (
							<option key={index} value={option.id}>
								{locale == "en"
									? option.name_en
									: option.name_ar}
							</option>
						))}
				</select>
			)}
		</div>
	);
};

export default CustomInput;
