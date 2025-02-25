import Login from '@/components/Auth/Login'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Auto Parts | Login',
  description: 'Generated for Auto Parts',
}


const page = () => {
  return <Login />
}

export default page