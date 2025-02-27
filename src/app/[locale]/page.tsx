import Homepage from '@/components/Home/Homepage'
import { getBanners } from '@/libs/get-banners'
import { Banner } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3ARBITK | Homepage',
  description: 'Generated for 3ARBITK, auto space parts'
}

export default async function Home () {
  const banners = await getBanners() as Banner[]
  return <Homepage banners={banners}/>
}
