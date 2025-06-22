"use client";
import { Backdrop, Fade, Modal } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { generatePathname } from "./generatePathname";

type props = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LangChangeModal = ({ open, setOpen }: props) => {
	const t = useTranslations("Header");
	const router = useRouter();
	const pathname = usePathname();
	const currentLocale = useLocale();

	// Use `isPending` for loading states
	const [isPending, startTransition] = React.useTransition();

	// State for the language selected *within* the modal
	const [selectedLang, setSelectedLang] = useState(currentLocale);
	const [displayLangSelection, setDisplayLangSelection] = useState(false);

	const handleLangSelect = (lang: string) => {
		setSelectedLang(lang);
		setDisplayLangSelection(false);
	};

	const handleSaveChanges = () => {
		// If the language hasn't changed, just close the modal.
		if (selectedLang === currentLocale) {
			setOpen(false);
			return;
		}

		startTransition(() => {
			// 1. CRITICAL FIX: Use `pathname` from the hook, not `document`
			const newPath = `/${selectedLang}/${generatePathname(
				pathname.split("/")
			)}`;
			router.replace(newPath);
			// No need to call setOpen(false) here, as the component will unmount on navigation.
		});
	};

	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			closeAfterTransition
			slots={{ backdrop: Backdrop }}
			slotProps={{
				backdrop: {
					timeout: 500,
				},
			}}
		>
			<Fade in={open}>
				{/* The child of Fade must be able to hold a ref. A div is fine. */}
				<div
					className="absolute top-[50%] left-[50%] w-[75%] md:w-[50%] lg:w-[30%] outline-none"
					style={{ transform: "translate(-50%, -50%)" }}
				>
					<div className="flex flex-col gap-5">
						<div className="flex flex-col justify-start items-start gap-3 bg-white p-6 rounded-lg shadow-lg">
							<h2 className="font-bold text-xl">
								{t("Display settings")}
							</h2>
							<p className="mb-1 font-light">
								{t("Change your language")}
							</p>
							<div
								// 3. ACCESSIBILITY FIX
								role="button"
								tabIndex={0}
								onKeyDown={(e) =>
									e.key === "Enter" &&
									setDisplayLangSelection((p) => !p)
								}
								className="flex flex-row justify-between items-center px-3 py-2 border border-gray-200 rounded-lg w-full cursor-pointer"
								onClick={() =>
									setDisplayLangSelection((prev) => !prev)
								}
							>
								<div>
									<h4>{t("Language")}</h4>
									<h3 className="font-semibold">
										{selectedLang === "en"
											? "English"
											: "العربية"}
									</h3>
								</div>
								<KeyboardArrowDownIcon />
							</div>
							<button
								className="bg-custom-blue hover:bg-custom-blue1-hover p-3 rounded-lg w-full text-white font-semibold transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
								// 2. UX IMPROVEMENT: Use `isPending` state
								onClick={handleSaveChanges}
								disabled={isPending}
							>
								{isPending ? t("Saving...") : t("Save")}
							</button>
						</div>
						{displayLangSelection && (
							<ul className="flex flex-col justify-start items-start bg-white border-none rounded-lg shadow-lg overflow-hidden">
								{["ar", "en"].map((lang) => (
									<li
										// 4. BEST PRACTICE: Use a stable key
										key={lang}
										className="hover:bg-gray-100 px-6 py-3 w-full transition duration-300 cursor-pointer"
										onClick={() => handleLangSelect(lang)}
									>
										{lang === "ar" ? "العربية" : "English"}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</Fade>
		</Modal>
	);
};

export default LangChangeModal;
