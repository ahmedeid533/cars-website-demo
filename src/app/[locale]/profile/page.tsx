import Profile from "@/components/Profile/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Auto Parts | Profile',
  description: 'Generated for Auto Parts',
}

const page = () => {
  return <Profile />
}

export default page