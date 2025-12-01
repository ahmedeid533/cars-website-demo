import Contact from "@/components/Contact/Contact";
import { Metadata } from "next";
export async function generateStaticParams() {
	// 👇 List all your supported locales here
	return [
		{ locale: "en" },
		{ locale: "ar" },
		// add more if needed
	];
}
export const metadata: Metadata = {
  title: '3RABITK | Contact Us',
  description: 'Generated for 3RABITK',
}

const page = () => {
  return <Contact />
}

export default page
