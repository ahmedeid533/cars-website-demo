import CategoryName from '@/components/CategoryName/CategoryName'
import { getCategories } from '@/libs/get-categories'
import { getSub_subCategories } from '@/libs/get-sub-sub-categories'
import { SubCategory } from '@/types'
import { Metadata } from 'next'

type props = {
  params: {
    category_name: string
  }
  searchParams: {
    category_id: string
    sub_category_id?: string
  }
}

export async function generateMetadata ({ params }: props): Promise<Metadata> {
  return {
    title: `3RABITK | Category | ${params.category_name.toUpperCase()}`,
    description: `Generated for 3RABITK ${params.category_name.toUpperCase()} Category`
  }
}

const page = async ({ params, searchParams }: props) => {
  const { category_id, sub_category_id } = searchParams
  const categories = category_id !== '1' ? await getCategories() : null
  const current_category = categories
    ? categories.find(category => category.id === parseInt(category_id))
    : null
  const hasBrands = sub_category_id === '36' || sub_category_id === '2'
  const sub_subCategories = await getSub_subCategories(Number(sub_category_id)) as SubCategory[]
  return <CategoryName category={current_category} hasBrands={hasBrands} sub_subCategories={sub_subCategories} subCategoryName={params.category_name} />
}

export default page
