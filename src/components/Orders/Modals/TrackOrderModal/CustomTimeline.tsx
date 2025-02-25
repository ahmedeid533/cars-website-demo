import Image from "next/image"
import "./style.css"

const CustomTimeline = () => {
    return (
        <ul className="timeline">
            {/* Order Placed
Packaging
On The Road
Delivered */}
            <li className="active-tl">
                <div className="flex flex-col items-center gap-2 mt-10 relative">
                    <Image src={'/orders/order-place.svg'} alt="order-place" width={40} height={40} />
                    <h6 className="text-[#191C1F] font-bold text-xs md:text-base">Order Placed</h6>
                </div>
            </li>
            <li className="second-active-tl">
                <div className="flex flex-col items-center gap-2 mt-10 relative">
                    <Image src={'/orders/order-packege.svg'} alt="Packaging" width={40} height={40} />
                    <h6 className="text-[#191C1F] font-bold text-xs md:text-base">Packaging</h6>
                </div>
            </li>
            <li>
                <div className="flex flex-col items-center gap-2 mt-10 relative opacity-70">
                    <Image src={'/orders/order-road.svg'} alt="order-road" width={40} height={40} />
                    <h6 className="text-[#191C1F] text-xs md:text-base">On The Road</h6>
                </div>
            </li>
            <li>
                <div className="flex flex-col items-center gap-2 mt-10 relative opacity-70">
                    <Image src={'/orders/order-delivering.svg'} alt="order-delivering" width={40} height={40} />
                    <h6 className="text-[#191C1F] text-xs md:text-base">Delivered</h6>
                </div>
            </li>
        </ul>
    )
}

export default CustomTimeline
