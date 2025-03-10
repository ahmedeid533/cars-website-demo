import Cart from '@/components/Cart/Cart'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '3RABITK | Cart',
  description: 'Generated for 3RABITK',
}


const page = () => {
  return <Cart />
}

export default page