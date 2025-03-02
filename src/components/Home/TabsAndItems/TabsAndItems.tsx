'use client'
import { Divider } from '@mui/material'
import { memo, useState } from 'react'
import CustomTabs from './CustomTabs'
import CustomItemsContainer from './CustomItemsContainer'
import { useLocale } from 'next-intl'
import useRenderTabsWithData from '@/hooks/use-render-tabs-with-data'

const TabsAndItems= () =>{
  const [value, setValue] = useState(0)
  const { categoryTabs, allCategoryItems } = useRenderTabsWithData()
  const locale = useLocale()
  console.log("first")
  return (
    <>
      {categoryTabs.length > 0 ? (
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
            value={allCategoryItems[value]?.value || 1}
            name={
              allCategoryItems[value]?.name[locale === 'en' ? 'en' : 'ar'] ||
              'top categories'
            }
            data={allCategoryItems[value]?allCategoryItems[value].data : []}
          />
        </section>
      ): (<h2>Loading...</h2>)}
    </>
  )
}
export default memo(TabsAndItems)