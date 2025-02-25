import Homepage from "@/components/Home/Homepage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Auto Parts | Homepage',
  description: 'Generated for Auto Parts',
}

export default function Home() {
  return <Homepage />
}
