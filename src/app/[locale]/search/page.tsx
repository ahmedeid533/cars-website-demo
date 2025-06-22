import Search from '@/components/Search/Search'
import { getCategoryTabsWithData } from '@/libs/get-category-tabs-with-data'
import { Metadata } from 'next'
import { Suspense } from 'react'

type props = {
  searchParams: Promise<{
    car_model: string
    car_year: string
    car_brand: string
  }>
}

export async function generateMetadata ({
  searchParams
}: props): Promise<Metadata> {
  const params = await searchParams;
  return {
    title: `3RABITK | ${params.car_year} ${params.car_brand} ${params.car_model}`,
    description: `Generated for 3RABITK ${params.car_year} ${params.car_brand} ${params.car_model} search`
  }
}

const Page = async () => {
  const { allCategoryItems, category_tabs } = await getCategoryTabsWithData()

  return (
    <Suspense>
      <Search
        category_tabs={category_tabs}
        allCategoryItems={allCategoryItems}
      />
    </Suspense>
  )
}

export default Page
