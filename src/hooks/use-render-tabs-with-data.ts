import { getCategories } from '@/libs/get-categories'
import { getSubCategories } from '@/libs/get-sub-categories'
import { getTopCategories } from '@/libs/get-top-categories copy'
import { Category, SubCategory } from '@/types'
import { useState, useEffect } from 'react'

export type AllItemsInterface = {
  value: number
  name: {
    en: string
    ar: string
  }
  data: SubCategory[]
}
const useRenderTabsWithData = () => {
  const [categoryTabs, setCategoryTabs] = useState<Category[]>([])
  const [allCategoryItems, setAllCategoryItems] = useState<AllItemsInterface[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = (await getCategories()) as Category[]
      if (response) {
        const category_tabs = [
          {
            id: 1,
            name: {
              en: 'Top Categories',
              ar: 'الفئات الرئيسية'
            },
            slug: 'all',
            image_url: ''
          },
          ...response
        ]
        setCategoryTabs(category_tabs)

        const allItems = await Promise.all(
          category_tabs.map(async category => {
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
        setAllCategoryItems(allItems)
      }
    }
    fetchCategories()
  }, [])
  return { categoryTabs, allCategoryItems}
}

export default useRenderTabsWithData
