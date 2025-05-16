"use client";
import { useCallback, useState } from "react";
import PersonalDetails from "./PersonalDetails";
import PaymentMethod from "./PaymentMethod";
import CardDetails from "./CardDetails";
import CompleteRegistrationModal from "./CompleteRegistrationModal/CompleteRegistrationModal";
import { useLocale } from "next-intl";

const CompleteRegistration = () => {
	const [open, setOpen] = useState(false);
	const [payment, setPayment] = useState("");
	const [response, setResponse] = useState<any>(null);
	const locale = useLocale();
	const handlePayment = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPayment(e.target.value);
		console.log(e.target.value);
	};
	const handleOpen = () => {
		setOpen(true);
	};
	return (
		<section className="col-span-1 lg:col-span-2 rounded border border-transparent lg:border-custom-black p-5 flex flex-col gap-5 lg:gap-10">
			<h2 className="text-xl lg:text-3xl font-bold text-custom-black">
				{locale == "en"
					? "Complete registration payment"
					: "إتمام عملية التسجيل والدفع"}
			</h2>
			{/* <div className='hidden lg:flex flex-col gap-2'>
                <h6 className='w-full lg:w-2/3 flex items-center justify-between'>
                    <span>Subtotal</span><span>$565.16</span>
                </h6>
                <Divider className='w-full lg:w-2/3 bg-custom-black h-[2px]' />
            </div> */}
			<PersonalDetails
				send={open}
				payment={payment}
				setResponse={setResponse}
				setSend={setOpen}
			/>
			<PaymentMethod setPayment={handlePayment} payment={payment} />
			{/* {payment === "p3" && <CardDetails />} */}
			<button
				className="w-full rounded bg-custom-blue text-white py-2"
				onClick={() => handleOpen()}
			>
				{locale == "en" ? "Complete" : "إتمام"}{" "}
			</button>
			<CompleteRegistrationModal
				open={open}
				setOpen={handleOpen}
				response={response}
			/>
		</section>
	);
};

export default CompleteRegistration;
