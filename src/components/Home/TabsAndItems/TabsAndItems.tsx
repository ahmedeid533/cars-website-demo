'use client'
import { Divider } from '@mui/material'
import { useEffect, useState } from 'react'
import CustomTabs from './CustomTabs'
import CustomItemsContainer from './CustomItemsContainer'
import { Category } from '@/types'
import { getCategories } from '@/libs/get-categories'
import { useLocale } from 'next-intl'

export default function TabsAndItems () {
  const [value, setValue] = useState(0)
  const [categoryTabs, setCategoryTabs] = useState<Category[]>([])
  useEffect(() => {
    const fetchCategories = async () => {
      const response = (await getCategories()) as Category[]
      setCategoryTabs([
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
      ])
    }
    fetchCategories()
  }, [])
  const locale = useLocale()
  return (
    <>
      {categoryTabs.length > 0 && (
        <section className='flex flex-col gap-1 pb-5'>
          <div className='custom-container1'>
            <CustomTabs
              value={value}
              setValue={setValue}
              categoryTabs={categoryTabs}
            />
          </div>
          <Divider />
          <CustomItemsContainer
            value={categoryTabs[value]?.id || 1}
            name={categoryTabs[value]?.name[locale === 'en' ? 'en' : 'ar'] || 'top categories'}
          />
        </section>
      )}
    </>
  )
}
