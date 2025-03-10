import Profile from "@/components/Profile/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '3RABITK | Profile',
  description: 'Generated for 3RABITK',
}

const page = () => {
  return <Profile />
}

export default page