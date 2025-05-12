"use client";
import Link from "next/link";
import React, { useState } from "react";
import CancelOrderModal from "./Modals/CancelOrderModal";
import TrackOrderModal from "./Modals/TrackOrderModal/TrackOrderModal";
import { useLocale } from "next-intl";

const OrderOptions = ({ id, status }: { id: number; status: string }) => {
	const [trackOpen, setTrackOpen] = useState(false);
	const [cancelledOpen, setCancelledOpen] = useState(false);
	const locale = useLocale();
	return (
		<div className="col-span-1 lg:col-span-3 flex w-full flex-row-reverse lg:flex-row items-center justify-between gap-1">
			<Link
				href={`orders/${id}`}
				className="py-2 text-center w-full lg:w-1/3 text-sm lg:text-base rounded border border-black"
			>
				{locale == "en" ? "View Order Details" : "عرض تفاصيل الطلب"}
			</Link>
			{/* <Link
                href={`/orders/?track=${id}`}
                className='py-2 text-center w-full lg:w-1/3 rounded bg-custom-blue text-white'
                onClick={() => setTrackOpen(true)}
            >Track Order</Link> */}
			{status === "pending" && (
				<Link
					href={`/orders/?cancel=${id}`}
					className="py-2 text-center w-full lg:w-1/3 rounded bg-[#C60000] text-white"
					onClick={() => setCancelledOpen(true)}
				>
					{locale == "en" ? "Cancel" : "إلغاء"}
				</Link>
			)}

			{/* <TrackOrderModal open={trackOpen} setOpen={setTrackOpen} /> */}
			<CancelOrderModal open={cancelledOpen} setOpen={setCancelledOpen} />
		</div>
	);
};

export default OrderOptions;
