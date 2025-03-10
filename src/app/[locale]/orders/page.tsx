import Orders from "@/components/Orders/Orders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '3RABITK | Orders',
  description: 'Generated for 3RABITK',
}


const page = () => {
  return <Orders />
}

export default page
