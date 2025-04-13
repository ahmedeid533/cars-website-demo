import { Category, SubCategory } from '@/types'
import { getCategories } from './get-categories'
import { getTopCategories } from './get-top-categories'
import { getSubCategories } from './get-sub-categories'

export type AllItemsInterface = {
  value: number
  name: {
    en: string
    ar: string
  }
  data: SubCategory[]
}

export const getCategoryTabsWithData = async () => {
  const getCategoryResponse = (await getCategories()) as Category[]
  let category_tabs: Category[] = [],
    allCategoryItems: AllItemsInterface[] = []
  if (getCategoryResponse) {
    category_tabs = [
      {
        id: 1,
        name: {
          en: 'Top Categories',
          ar: 'الفئات الرئيسية'
        },
        slug: 'all',
        image_url: ''
      },
      ...getCategoryResponse
    ]
    allCategoryItems = await Promise.all(
			category_tabs.map(async category => {
			console.log("category ==> ", category);
				
        return category.id === 1
          ? {
              value: category.id,
              name: category.name,
              data: (await getTopCategories()) as SubCategory[]
            }
          : {
              value: category.id,
              name: category.name,
              data: (await getSubCategories(category.id)) as SubCategory[]
            }
      })
    )
  }
  return { category_tabs, allCategoryItems }
}
