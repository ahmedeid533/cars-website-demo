import Payment from "@/components/Payment/Payment";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: '3RABITK | Payment',
    description: 'Generated for 3RABITK',
}


const page = () => {
    return <Payment />
}

export default page
