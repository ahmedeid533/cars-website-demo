import Homepage from '@/components/Home/Homepage'
import { getBanners } from '@/libs/get-banners'
import { getBannersFooter } from '@/libs/get-banners-footer'
import { getCategories } from '@/libs/get-categories'
import { getCategoryTabsWithData } from '@/libs/get-category-tabs-with-data'
import { getLogos } from '@/libs/get-logos'
import { getMainCategories } from '@/libs/get-main-categories'
import { getSubCategories } from '@/libs/get-sub-categories'
import { getTopCategories } from '@/libs/get-top-categories copy'
import { Banner, BannerFooter, Category, Logo, SubCategory } from '@/types'
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
  const {allCategoryItems, category_tabs} = await getCategoryTabsWithData()
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
