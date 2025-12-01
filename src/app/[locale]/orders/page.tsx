import Orders from "@/components/Orders/Orders";
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
  title: '3RABITK | Orders',
  description: 'Generated for 3RABITK',
}


const page = () => {
  return <Orders />
}

export default page
