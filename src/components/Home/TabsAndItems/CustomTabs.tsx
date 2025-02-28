'use client'
import React from 'react'
import { Tab, Tabs } from '@mui/material'
import { tabsAndItems } from '@/mocks/tabsAndItems'
import { Category } from '@/types'
import { useLocale } from 'next-intl'

type props = {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
  categoryTabs: Category[]
}
const CustomTabs = ({ value, setValue, categoryTabs }: props) => {
  const locale = useLocale()
  return (
    <div className='custom-container1'>
      <div className='flex justify-center items-center w-full overflow-hidden'>
        <div className='custom-overlay-scrollbar w-screen overflow-x-scroll lg:overflow-x-auto overflow-y-hidden'>
          <Tabs
            value={value}
            onChange={(key, index) => {
                setValue(index)
            }}
            TabIndicatorProps={{
              sx: {
                color: 'black',
                backgroundColor: 'black',
                width: 'auto'
              }
            }}
            sx={{
              '.Mui-selected': {
                color: 'black',
                borderBottom: '2px solid black'
              },
              display: { xs: '-webkit-inline-box', lg: 'block' },
              margin: 0
            }}
          >
            {categoryTabs.map(tab => (
              <Tab
                key={tab.id}
                label={tab.name[locale === 'en' ? 'en' : 'ar']}
                className='flex-1 p-0 min-w-[120px] min-h-[35px] font-bold text-black text-xs lg:text-lg capitalize'
                sx={{
                  '&.Mui-selected': {
                    color: 'black'
                  }
                }}
              />
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default CustomTabs
