import MobileList from "@/components/MobileList/MobileList";
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
    title: '3RABITK | Mobile List',
    description: 'Generated for 3RABITK',
}

const page = () => {
    return <MobileList />
}

export default page



