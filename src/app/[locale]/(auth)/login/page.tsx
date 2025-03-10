import Login from '@/components/Auth/Login'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '3RABITK | Login',
  description: 'Generated for 3RABITK',
}


const page = () => {
  return <Login />
}

export default page