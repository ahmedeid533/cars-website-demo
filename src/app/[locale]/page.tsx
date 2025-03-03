import Homepage from '@/components/Home/Homepage'
import { getBanners } from '@/libs/get-banners'
import { getBannersFooter } from '@/libs/get-banners-footer'
import { getCategoryTabsWithData } from '@/libs/get-category-tabs-with-data'
import { getLogos } from '@/libs/get-logos'
import { getMainCategories } from '@/libs/get-main-categories'
import { Banner, BannerFooter, Category, Logo } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3ARBITK | Homepage',
  description: 'Generated for 3ARBITK, auto space parts'
}

export default async function Home () {
  const [
    banners,
    logos,
    bannerFooter,
    mainCategories,
    { allCategoryItems, category_tabs }
  ] = await Promise.all([
    getBanners() as Promise<Banner[]>,
    getLogos() as Promise<Logo[]>,
    getBannersFooter() as Promise<BannerFooter[]>,
    getMainCategories() as Promise<Category[]>,
    getCategoryTabsWithData()
  ]);
  
  return (
    <Homepage
      banners={banners}
      logos={logos}
      bannerFooter={bannerFooter}
      mainCategories={mainCategories}
      category_tabs={category_tabs}
      allCategoryItems={allCategoryItems}
    />
  )
}
