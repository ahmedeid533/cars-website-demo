import Homepage from '@/components/Home/Homepage'
import { getBanners } from '@/libs/get-banners'
import { Banner } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auto Parts | Homepage',
  description: 'Generated for Auto Parts'
}

export default async function Home () {
  const banners = await getBanners() as Banner[]
  return <Homepage banners={banners}/>
}
