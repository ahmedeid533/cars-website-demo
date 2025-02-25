import Verification from '@/components/Auth/Verification'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auto Parts | Signin Verification',
  description: 'Generated for Auto Parts',
}


const page = () => {
  return <Verification />
}

export default page