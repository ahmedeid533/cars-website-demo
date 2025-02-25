import Image from 'next/image'
import Link from 'next/link'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const ItemsInMobile = () => {
    return (
        <div className={`grid lg:hidden grid-cols-2 items-center gap-x-2 gap-y-5`}>
            {
                new Array(12).fill(1).map((_, index) => (
                    <div key={index} className={`overflow-hidden rounded border border-[#A0A0A0] flex flex-col p-0 items-center`}>
                        <div className={`h-[20vh] w-full flex items-center justify-center overflow-hidden border-b border-b-[#A0A0A0]`}>
                            <Image src={'/category_name/i2.png'} alt='item' width={200} height={200} className='object-cover h-[200px] w-[200px]' />
                        </div>
                        <div className={`w-full p-2 text-custom-black flex flex-col gap-3 items-center`}>
                            <div className='flex flex-col items-center '>
                                <h2 className='font-bold text-center'>
                                    IRONMAN® IMOVE GEN2 AS
                                </h2>
                                <Image src={'/category_name/five.svg'} alt='five' width={70} height={70} className='object-contain' />

                            </div>
                            <div className='w-full flex flex-col items-center justify-center text-center text-xs gap-2'>
                                <h6 className='text-[#525252]'>$ 124.00 - $ 148.00 each</h6>
                                <p className='text-[#525252] flex items-center '>
                                    <FiberManualRecordIcon className='text-custom-green text-xs' />
                                    <span>In Stock ( 12425 ) </span>
                                </p>
                            </div>
                            <p className='text-[#525252] text-xs'>
                                

                                IMOVE GEN2 AS Tires by IRONMAN®. Season: All Season. Type: Fuel Efficient.
                                From overall handling to enhanced traction, the iMove Gen2 tires boast
                            </p>
                            <Link
                                href={`/product/${index + 1}`}
                                className='text-custom-black text-center border-2 w-full rounded border-custom-black py-2 text-sm transition duration-300 hover:text-white hover:bg-custom-blue hover:border-custom-blue'
                            >
                                View Details</Link>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default ItemsInMobile
