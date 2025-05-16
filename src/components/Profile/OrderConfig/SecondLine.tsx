import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const SecondLine = () => {
	const locale = useLocale();
	return (
		<div className="grid grid-cols-1 lg:grid-cols-6 items-start w-full gap-5 lg:gap-0">
			{/* <div className='col-span-2 text-custom-black flex flex-col gap-4'>
                <h2 className='font-bold text-2xl'>Easy Return</h2>
                <div className='flex flex-col gap-1'>
                    <Link href={'#'} className='text-custom-black font-bold'>Exchange Items</Link>
                    <Link href={'#'} className='text-[#525252]'>Return Items </Link>
                    <Link href={'#'} className='text-[#525252]'>Status of return</Link>
                </div>
            </div> */}
			<div className="col-span-4 bg-[#F4F3F3] border border-[#9D9D9D] p-5 rounded flex flex-col gap-5">
				<h1 className="font-bold text-2xl text-custom-black">
					{locale === "ar"
						? "سياسة الإرجاع خلال 14 يوم"
						: "Easy Return Policy within 14 days"}
				</h1>
				<h2 className="text-custom-black">
					{locale === "ar"
						? "في حال وجود أي مشكلة في الطلب أو عدم تطابق المنتج مع المطلوب، تقدر ترجع المنتج بكل سهولة خلال 14 يوم من تاريخ الاستلام، وده بيتم من خلال الخطوات التالية:"
						: "If you have any issues with your order or the product does not match what you ordered, you can easily return the product within 14 days of receipt. This is done through the following steps:"}
				</h2>
				<div className="flex flex-col gap-1">
					<h3 className="text-custom-black">
						{
							locale === "ar"
								? "1.	التواصل معنا عبر واتساب على الرقم التالي: 01503443558"
								: "1. Contact us via WhatsApp at the following number: 01503443558"
						}
					</h3>
				</div>
				<div className="flex flex-col gap-1">
					<h3 className="text-custom-black">
						{
							locale === "ar"
								? "2.	تصوير الطلب بوضوح، مع توضيح:"
								: "2. Take a clear picture of the order, clarifying:"
						}
					</h3>
					<p className="text-custom-gray">
						{locale === "ar"
							? "•	المنتج بالكامل."
							: "• The entire product."}
						<br />
						{
							locale === "ar"
								? "•	العلبة أو التغليف (لو متوفر)."
								: "• The box or packaging (if available)."
						}
						<br />
						{
							locale === "ar"
								? "•	المشكلة أو سبب الإرجاع."
								: "• The problem or reason for the return."
						}
					</p>
				</div>
				<div className="flex flex-col gap-1">
					<h3 className="text-custom-black">
						{
							locale === "ar"
								? "3. بعد التأكد من الصور والمعلومات، بيتم التنسيق معاك لاستلام المنتج من خلال مندوب "
								: "3. After confirming the photos and information, we will coordinate with you to pick up the product through a representative "
						}
					</h3>
				</div>
				<div className="flex flex-col gap-1">
					<h3 className="text-custom-black">
						{
							locale === "ar"
								? "4.	بعد استلام المنتج والتأكد من حالته، بيتم استرداد المبلغ كاملًا بنفس طريقة الدفع."
								: "4. After receiving the product and confirming its condition, the full amount will be refunded using the same payment method."
						}
					</h3>
				</div>
				<div className="flex flex-col gap-1">
					<h3 className="text-custom-black">
						{
							locale === "ar"
								? "ملاحظات مهمة:"
								: "Important Notes:"
						}
					</h3>
					<p className="text-custom-gray">
						{
							locale === "ar"
								? "•	لازم يكون المنتج في حالته الأصلية."
								: "• The product must be in its original condition."
						}
						<br />
						{
							locale === "ar"
								? "•	لا يُقبل إرجاع المنتجات اللي تم استخدامها أو تركيبها."
								: "• Products that have been used or installed cannot be returned."
						}
						<br />
						{
							locale === "ar"
								? "•	الرسوم الخاصة بالشحن في حالة الإرجاع بتتحدد حسب الحالة."
								: "• Shipping fees in case of return are determined based on the situation."
						}
					</p>
				</div>
						{/* <div className='w-full flex justify-center items-center mt-5'>
                    <button className='rounded py-5 bg-custom-blue text-white px-20'>ADD TO CART</button>
                </div> */}
			</div>
		</div>
	);
};

export default SecondLine;
