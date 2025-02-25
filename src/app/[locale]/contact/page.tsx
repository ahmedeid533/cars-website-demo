import Contact from "@/components/Contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Auto Parts | Contact Us',
  description: 'Generated for Auto Parts',
}

const page = () => {
  return <Contact />
}

export default page
