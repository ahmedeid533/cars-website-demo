"use client"
import { useState } from 'react'
import CustomTabs from '../CustomTabs'
import Details from './Details/Details'
import OrderSlider from './OrderSilder/OrderSlider'
import OrderSummary from './OrderSummary/OrderSummary'
import { Divider } from '@mui/material'

const OrderDetails = () => {
    const [value, setValue] = useState(0)
    return (
        <>
            <div className='hidden lg:block'>
                <CustomTabs value={value} setValue={setValue} />
                <Divider />
            </div>
            <div className="custom-container2 pt-0 pb-5 lg:pt-10 lg:pb-10 flex flex-col gap-10">
                <Details />
                <OrderSlider />
                <OrderSummary />
            </div>
        </>
    )
}

export default OrderDetails
