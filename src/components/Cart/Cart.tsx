import React from 'react'
import Items from './Items'
import OrderDetails from './OrderDetails'

const Cart = () => {
    return (
        <>
            <div className='custom-container1 py-10 flex flex-col gap-5'>
                <h2 className='text-custom-black font-bold text-3xl uppercase'>Shopping Cart</h2>
                <div className='grid grid-cols-1 lg:grid-cols-4 items-start gap-5'>
                    <div className='flex flex-col col-span-1 lg:col-span-3 gap-3'>
                        <Items />
                        <div className='w-full hidden lg:flex items-center justify-between'>
                            <div className='w-1/3' ></div>
                            <div className='w-1/3 flex items-center justify-center'>
                                <button className='rounded border border-custom-black text-custom-black py-3 px-6 font-bold'>Keep Shopping</button>
                            </div>
                            <div className='w-1/3 flex items-end justify-end'>
                                <button className='text-custom-blue font-bold'>Clear The Cart</button>
                            </div>
                        </div>
                    </div>
                    <OrderDetails />
                    <div className='w-full flex items-center justify-between'>
                        <div className='flex items-center justify-center'>
                            <button className='rounded text-white bg-custom-blue  py-3 px-6 font-normal'>Keep Shopping</button>
                        </div>
                        <div className='flex items-end justify-end'>
                            <button className='text-custom-blue font-bold'>Clear The Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart
