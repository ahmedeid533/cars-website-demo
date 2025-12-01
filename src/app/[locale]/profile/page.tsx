import Profile from "@/components/Profile/Profile";
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
  title: '3RABITK | Profile',
  description: 'Generated for 3RABITK',
}

const page = () => {
  return <Profile />
}

export default page