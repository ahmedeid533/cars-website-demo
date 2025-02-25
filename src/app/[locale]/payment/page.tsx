import Payment from "@/components/Payment/Payment";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Auto Parts | Payment',
    description: 'Generated for Auto Parts',
}


const page = () => {
    return <Payment />
}

export default page
