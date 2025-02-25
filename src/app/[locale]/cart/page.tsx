import Cart from '@/components/Cart/Cart'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Auto Parts | Cart',
  description: 'Generated for Auto Parts',
}


const page = () => {
  return <Cart />
}

export default page