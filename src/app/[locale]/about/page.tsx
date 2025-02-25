import About from '@/components/About/About'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Auto Parts | About Us',
  description: 'Generated for Auto Parts About Us',
}

const page = () => {
  return <About />
}

export default page
