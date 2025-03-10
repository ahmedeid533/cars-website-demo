import Verification from '@/components/Auth/Verification'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3RABITK | Signin Verification',
  description: 'Generated for 3RABITK',
}


const page = () => {
  return <Verification />
}

export default page