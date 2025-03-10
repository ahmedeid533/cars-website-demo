import MobileList from "@/components/MobileList/MobileList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: '3RABITK | Mobile List',
    description: 'Generated for 3RABITK',
}

const page = () => {
    return <MobileList />
}

export default page
