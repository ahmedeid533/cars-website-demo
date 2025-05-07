"use client";
import Link from "next/link";
import React, { useState } from "react";
import TrackOrderModal from "../../Modals/TrackOrderModal/TrackOrderModal";
import { useParams } from "next/navigation";
import CancelOrderModal from "../../Modals/CancelOrderModal";

const OptionBtns = ({ id_, status }: { id_: string; status: string; }) => {
	const { id } = useParams();
	const [trackOpen, setTrackOpen] = useState(false);
	const [cancelledOpen, setCancelledOpen] = useState(false);
	const Print = () => {
		const printDiv1 = document.getElementById("print1")
			? document.getElementById("print1")
			: document.createElement("div");
		const printWindow = window.open("", "_blank", "width=800,height=600");
		if (printWindow) {
			printWindow.document.write(`<html>
				<head>
				<title>Print</title>
				<style>

				body {
					padding: 5vh 10vw;
				}
					* {
					text-align: center;
			}
					</style>
				</head >`);
			printWindow.document.write("<body>");
			printWindow.document.write(printDiv1?.innerHTML || "");
			printWindow.document.write("</body></html>");
			printWindow.document.close();
			printWindow.print();
		}
	};
	return (
		<div className="w-full flex items-center lg:items-end justify-center lg:justify-end">
			<div className="flex flex-row items-center gap-3 flex-wrap justify-center">
				<div
					className="py-2 text-center rounded border border-black px-5 w-full lg:w-[200px]"
					onClick={Print}
				>
					Print
				</div>
				{/* <Link
					href={`/orders/${id}/?track=${Number(id) + 1}`}
					className="py-2 text-center rounded bg-custom-blue text-white px-5 w-full lg:w-[200px]"
					onClick={() => setTrackOpen(true)}
				>
					Track Order
				</Link> */}
				<Link
					href={`/contact`}
					className="py-2 text-center rounded bg-custom-green text-white px-5 w-full lg:w-[200px]"
				>
					Support
				</Link>
				{
					status === "pending" &&
					<Link
					href={`/orders/${id}/?cancel=${Number(id_)}`}
					className="py-2 text-center rounded bg-[#C60000] text-white px-5 w-full lg:w-[200px]"
					onClick={() => setCancelledOpen(true)}
				>
					Cancel
					</Link>
				}

				{/* <TrackOrderModal open={trackOpen} setOpen={setTrackOpen} /> */}
				<CancelOrderModal
					open={cancelledOpen}
					setOpen={setCancelledOpen}
				/>
			</div>
		</div>
	);
};

export default OptionBtns;
