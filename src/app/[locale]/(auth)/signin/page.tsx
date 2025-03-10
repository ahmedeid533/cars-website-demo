import React from 'react'
import { Metadata } from "next";
import SignIn from '@/components/Auth/Signin';

export const metadata: Metadata = {
  title: '3RABITK | Signin',
  description: 'Generated for 3RABITK',
}

const page = () => {
  return <SignIn />
}

export default page