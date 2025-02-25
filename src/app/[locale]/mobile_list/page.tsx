import MobileList from "@/components/MobileList/MobileList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Auto Parts | Mobile List',
    description: 'Generated for Auto Parts',
}

const page = () => {
    return <MobileList />
}

export default page
