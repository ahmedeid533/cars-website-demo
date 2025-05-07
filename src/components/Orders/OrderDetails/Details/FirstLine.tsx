import { apiClient } from '@/util/axois'
import Cookies from 'universal-cookie'
import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import { toast } from 'react-toastify'

const FirstLine = ({ order }: { order: any }) => {
	const cookies = new Cookies()
	const token = cookies.get('token')
	const [open, setOpen] = useState(false)
	const [notes, setNotes] = useState(order?.notes)
	const editNotes = () => {
		apiClient(token).post(`/orders/${order.id}/note`, {
			notes: notes
		}).then((res) => {
			console.log(res.data.data)
			setOpen(false)
			toast.success("Notes updated successfully")
		}
		).catch((err) => {
			console.error(err)
		}
		)
	}
    return (
		<div  className="flex flex-row items-start w-full justify-between">
			<div className="flex flex-col gap-5 w-full">
				<div className="flex text-custom-black flex-col gap-1">
					<h2 className="font-bold text-3xl">Order Details</h2>
					<p className="text-sm">
						Details of the orders that have been requested
					</p>
				</div>
				<div className="flex flex-row lg:flex-col  justify-between lg:justify-start gap-5 w-full">
					<div className="flex flex-col gap-1">
						<h2 className="font-bold text-sm lg:text-xl text-custom-black ">
							Order Number
						</h2>
						<p className="text-custom-blue text-xs lg:text-base">
							{order?.order_number}
						</p>
					</div>
					<div className="flex flex-col gap-1">
						<h2 className="font-bold text-sm lg:text-xl text-custom-black ">
							Order Address
						</h2>
						<p className="text-custom-blue text-xs lg:text-base w-full lg:w-1/2 font-normal md:font-bold">
							{`${order?.shipping_address?.governorate} - ${order?.shipping_address?.city} - ${order?.shipping_address?.address} - ${order?.shipping_address?.landmark}`}
						</p>
					</div>
					<div className="flex flex-col gap-1">
						<h2 className="font-bold text-sm lg:text-xl text-custom-black ">
							Paid by
						</h2>
						{/* <Image
							src={"/orders/visa.svg"}
							alt="visa"
							width={60}
							height={60}
						/> */}
						{order?.payment_method?.name}
					</div>
				</div>
			</div>
			<div className="flex rounded-xl p-4 flex-col gap-3 w-1/3 bg-white text-custom-black">
				<h5 className="font-bold text-xl">Notes</h5>
				<p className="text-sm font-bold mb-2 text-ellipsis overflow-hidden max-h-[10vh]">{order?.notes}</p>
					<div
						onClick={()=>{setOpen(true)}}
					className="w-full p-2 text-center bg-[#E8E8E8] rounded-lg text-lg font-bold"
				>
					Edit
				</div>
				</div>
				{
					open && (
						<div className="fixed top-0 left-0 md:w-full w-screen h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
							<div className="bg-white p-5 rounded-lg md:w-1/3 mx-6 md:mx-0">
								<h2 className="text-xl font-bold mb-4">Edit Notes</h2>
								<h4>please refresh to see the change</h4>
								<textarea
									className="w-full h-32 p-2 border border-gray-300 rounded-lg"
									value={notes}
									defaultValue={order?.notes}
									onChange={(e) => setNotes(e.target.value)}
								></textarea>
								<div className="flex justify-end mt-4">
									<button
										className="bg-custom-blue text-white px-4 py-2 rounded-lg mr-2"
										onClick={editNotes}
									>
										Save
									</button>
									<button
										className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
										onClick={() => setOpen(false)}
									>
										Close
									</button>
								</div>
							</div>
						</div>
					)
			}

		</div>
	);
}

export default FirstLine
