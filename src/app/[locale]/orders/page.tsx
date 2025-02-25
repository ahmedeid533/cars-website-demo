import Orders from "@/components/Orders/Orders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Auto Parts | Orders',
  description: 'Generated for Auto Parts',
}


const page = () => {
  return <Orders />
}

export default page
