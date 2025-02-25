import { Divider } from '@mui/material'
import Image from 'next/image'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Link from 'next/link';

const Cart = () => {
    return (
        <div className='flex flex-col gap-5'>
            <h2 className='font-bold text-custom-black'>Carts</h2>
            <div className='flex flex-col gap-8'>
                {
                    [1, 2].map(index => (
                        <div key={index} className='flex flex-col gap-4'>
                            <div className='flex flex-row items-start w-full justify-between'>
                                <Image src={'/cart-item.png'} alt='cart' width={40} height={20} className='object-contain' />
                                <p className='font-bold text-sm w-3/4 ' >
                                    {'RTX® - BLACK WIDOW Satin Black "("17" x 7.5"," +35 Offset, ...'}
                                </p>
                                <DeleteOutlineIcon className='cursor-pointer' />
                            </div>
                            <p className='w-1/2 flex flex-row items-center justify-between'>
                                <span>Qty:</span>
                                <span>4$161.09</span>
                            </p>
                        </div>
                    ))
                }
            </div>
            <Divider />

            <div className='flex flex-col gap-8'>
                <p className='flex flex-col gap-1 text-sm text-custom-black'>
                    <span>
                        14 items in your Cart   |   Clear Cart
                    </span>
                    <span>Subtotal: $1,567.27</span>
                </p>
                <div className='w-4/5 flex flex-row items-center gap-4'>
                    <Link href={'/payment'} className='w-full rounded text-white text-center uppercase py-3 bg-custom-blue'>Checkout Now</Link>
                    <Link href={'/cart'} className='w-full rounded text-white text-center uppercase py-3 bg-custom-green'>View CART</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart