import About from '@/components/About/About'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '3RABITK | About Us',
  description: 'Generated for 3RABITK About Us',
}

const page = () => {
  return <About />
}

export default page
