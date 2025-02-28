import Homepage from '@/components/Home/Homepage'
import { getBanners } from '@/libs/get-banners'
import { getBannersFooter } from '@/libs/get-banners-footer'
import { getLogos } from '@/libs/get-logos'
import { getMainCategories } from '@/libs/get-main-categories'
import { Banner, BannerFooter, Category, Logo } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3ARBITK | Homepage',
  description: 'Generated for 3ARBITK, auto space parts'
}

export default async function Home () {
  const banners = (await getBanners()) as Banner[]
  const logos = (await getLogos()) as Logo[]
  const bannerFooter = (await getBannersFooter()) as BannerFooter[]
  const mainCategories = (await getMainCategories()) as Category[]
  return (
    <Homepage
      banners={banners}
      logos={logos}
      bannerFooter={bannerFooter}
      mainCategories={mainCategories}
    />
  )
}
