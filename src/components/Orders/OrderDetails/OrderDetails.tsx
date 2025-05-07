"use client"
import { useEffect, useState } from 'react'
import CustomTabs from '../CustomTabs'
import Details from './Details/Details'
import OrderSlider from './OrderSilder/OrderSlider'
import OrderSummary from './OrderSummary/OrderSummary'
import { Divider } from '@mui/material'
import { get } from 'http'
import { apiClient } from '@/util/axois'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'

const OrderDetails = () => {
	const [value, setValue] = useState(0)
	interface OrderDetailsType {
		items: any[]; // Replace 'any' with the actual type of items if known
		total_amount: number; // Add the total_amount property
		id: string; // Add the id property
		// Add other properties of the orderDetails object here if needed
	}

	const [orderDetails, setOrderDetails] = useState<OrderDetailsType | null>(null)
	const { id } = useParams();
	const cookies = new Cookies()
	const getOrderDetails = async () => {
		const token = cookies.get('token')
		apiClient(token).get(`/orders/${id}`)
			.then((res) => {
				console.log(res.data.data)
				setOrderDetails(res.data.data)
			})
			.catch((err) => {
				console.error(err)
			}
		)
	}

	useEffect(() => {
		getOrderDetails()
	}, [])

    return (
		<>
			{/* <div className='hidden lg:block'>
				<OrderSlider items={orderDetails?.items || []} />
                <Divider />
            </div> */}
			<div className="custom-container2 pt-0 pb-5 lg:pt-10 lg:pb-10 flex flex-col gap-10">
				<Details order={orderDetails} />
				<OrderSlider items={orderDetails?.items || []} />
				<OrderSummary  order={orderDetails} />
			</div>
		</>
	);
}

export default OrderDetails
