import React from 'react'
import Summary from './Summary'
import OptionBtns from './OptionBtns'

const OrderSummary = () => {
    return (
        <div className='flex flex-col gap-5'>
            <Summary />
            <OptionBtns />
        </div>
    )
}

export default OrderSummary
