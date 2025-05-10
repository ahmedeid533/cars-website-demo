"use client";
import { useLocale, useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Touch = () => {
	const t = useTranslations("Contact");
	const locale = useLocale();
	return (
		<section className="w-full lg:w-[60%] p-10">
			<div className="flex flex-col gap-5">
				<h2 className="font-bold text-4xl text-custom-black">
					<span className="text-custom-blue">
						{locale == "en" ? "Get In" : "تواصل"}
					</span>{" "}
					{locale === "en" ? "Touch" : "معنا"}
				</h2>
				<p className="text-xs md:text-sm text-custom-black">
					{t(
						"Fill in the form below and we’ll get back to you shortly Whether you’re a customer or a trader, we’re here to help"
					)}
				</p>
				<form
					id="form"
					onSubmit={(e) => {
						e.preventDefault();
						emailjs
							.sendForm(
								"default_service", // Replace with your EmailJS service ID
								"template_k5191c5", // Replace with your EmailJS template ID
								e.target as HTMLFormElement,
								"N2Gu9tO2WCuHHo28N" // Replace with your EmailJS public key
							)
							.then(
								(result) => {
									console.log(result.text);
									alert(
										locale == "en"
											? "Message sent!"
											: "تم إرسال الرسالة!"
									);
									toast.success(
										locale == "en"
											? "Message sent!"
											: "تم إرسال الرسالة!"
									);
								},
								(error) => {
									console.log(error.text);
									alert(
										locale == "en"
											? "Failed to send message."
											: "فشل في إرسال الرسالة."
									);
								}
							);
					}}
					className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4 gap-y-4 lg:gap-y-8 w-full h-full"
				>
					<div className="flex flex-col p-3 md:col-span-2 rounded-lg border border-[#E9E9E9]">
						<label htmlFor="name">
							{locale == "en" ? "Full Name" : " الاسم بالكامل"}*
						</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder={
								locale == "en"
									? "Ahmed Eid Gomaa"
									: "احمد عيد جمعة"
							}
							className="mt-1 p-2 rounded"
							required
						/>
					</div>
					<div className="flex flex-col p-3 rounded-lg border border-[#E9E9E9]">
						<label htmlFor="email">{t("Email")}*</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="example@gmail.com"
							className="mt-1 p-2 rounded"
							required
						/>
					</div>
					<div className="flex flex-col p-3 rounded-lg border border-[#E9E9E9]">
						<label htmlFor="phone">{t("Phone")}</label>
						<input
							type="text"
							name="phone"
							id="phone"
							placeholder="+90 123 456 789"
							className="mt-1 p-2 rounded"
						/>
					</div>
					<textarea
						name="message"
						id="message"
						placeholder={locale == "en" ? "Message" : "الرسالة"}
						className="h-[25vh] col-span-1 md:col-span-2 p-3 rounded-lg border border-[#E9E9E9]"
						required
					></textarea>
					<div className="w-full md:w-3/4 flex items-start mt-10 col-span-1 md:col-span-2">
						<button
							type="submit"
							id="button"
							className="rounded-md bg-custom-blue text-white py-4 px-8"
						>
							{locale == "en" ? "Send Message" : "ارسال الرسالة"}
						</button>
					</div>
				</form>
				<script
					type="text/javascript"
					src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
					defer
				></script>
				<script type="text/javascript">
					{`emailjs.init('N2Gu9tO2WCuHHo28N');`}
				</script>
			</div>
		</section>
	);
};

export default Touch;
