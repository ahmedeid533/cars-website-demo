import React from 'react'
import { Metadata } from "next";
import SignIn from '@/components/Auth/Signin';

export const metadata: Metadata = {
  title: 'Auto Parts | Signin',
  description: 'Generated for Auto Parts',
}

const page = () => {
  return <SignIn />
}

export default page