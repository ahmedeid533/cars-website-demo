import Link from "next/link";
import CompleteRegistration from "./CompleteRegistration/CompleteRegistration";
import OrderSummary from "./OrderSummary";
import { useLocale } from "next-intl";

const Payment = () => {
	const locale = useLocale();
	return (
		<>
			<main className="custom-container1 pt-1 pb-5 lg:pt-10 lg:pb-10 grid grid-cols-1 lg:grid-cols-3 items-start gap-5">
				<CompleteRegistration />
				<section className="flex flex-col gap-5">
					<OrderSummary />
					<p className="text-center text-[#ACACAC] text-sm lg:text-base px-5 lg:px-0">
						{locale == "en" ? "Shop Safely at" : "تسوق بأمان في"}{" "}
						<Link href={"/"} className="text-custom-blue">
							{process.env.NEXT_PUBLIC_API}
						</Link>{" "}
						{locale == "en"
							? "Your information is secure. Need Help?"
							: "معلوماتك آمنة. تحتاج مساعدة؟"}
						{/* Visit our{" "}
						<Link href={"#"} className="text-custom-blue">
							Help Center
						</Link>{" "}
						or{" "} */}
						<Link
							href={`https://wa.me/2001503443558/?text=Hello%20I%20need%20help%20with%20my%20order`}
							target="_blank"
							className="text-custom-blue"
						>
							{locale == "en"
								? "check whatsapp"
								: "تحقق من الواتس اب"}
						</Link>
						{locale == "en" ? "Call us at" : "اتصل بنا على"}{" "}
						<Link
							href={"tel:+2001503443558"}
							className="text-custom-blue"
						>
							(+20) 01503443558
						</Link>
					</p>
				</section>
			</main>
		</>
	);
};

export default Payment;
