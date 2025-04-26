import Link from 'next/link'
import CompleteRegistration from './CompleteRegistration/CompleteRegistration'
import OrderSummary from './OrderSummary'

const Payment = () => {
	
    return (
		<>
			<main className="custom-container1 pt-1 pb-5 lg:pt-10 lg:pb-10 grid grid-cols-1 lg:grid-cols-3 items-start gap-5">
				<CompleteRegistration />
				<section className="flex flex-col gap-5">
					<OrderSummary />
					<p className="text-center text-[#ACACAC] text-sm lg:text-base px-5 lg:px-0">
						Shop Safely at{" "}
						<Link href={"/"} className="text-custom-blue">
							Auto Part.com.
						</Link>{" "}
							Your information is secure. Need Help?
						{/* Visit our{" "}
						<Link href={"#"} className="text-custom-blue">
							Help Center
						</Link>{" "}
						or{" "} */}
						<Link
							href={`https://wa.me/2001014893650/?text=Hello%20I%20need%20help%20with%20my%20order`}
							target="_blank"
							className="text-custom-blue"
						>
							check whatsapp
						</Link>
						Call us at{" "}
						<Link
							href={"tel:+2001014893650"}
							className="text-custom-blue"
						>
							(+20) 01014893650
						</Link>
					</p>
				</section>
			</main>
		</>
	);
}

export default Payment
