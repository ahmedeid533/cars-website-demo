import { tabsAndItems } from '@/mocks/tabsAndItems'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CustomTabPanel from './CustomTabPanel'
import Link from 'next/link'
import { SubCategory } from '@/types'
import { getTopCategories } from '@/libs/get-top-categories copy'
import { getSubCategories } from '@/libs/get-sub-categories'
import { useLocale } from 'next-intl'

const CustomItemsContainer = ({
  value,
  name
}: {
  value: number
  name: string
}) => {
  console.log({ value })
  const [categoryItems, setCategoryItems] = useState<SubCategory[]>([])
  useEffect(() => {
    setCategoryItems([])
    const fetchCategoryItems = async () => {
      const response =
        value === 1
          ? ((await getTopCategories()) as SubCategory[])
          : ((await getSubCategories(value)) as SubCategory[])
      setCategoryItems(response)
    }
    fetchCategoryItems()
  }, [value])
  const locale = useLocale()
  return (
    <div className='custom-container1 pt-5'>
      <CustomTabPanel value={value} index={value}>
        <div className='justify-center items-center gap-x-5 gap-y-10 lg:gap-x-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {categoryItems.map((item, index) => (
            <Link
              title={item.slug}
              href={`/category/${name.toLocaleLowerCase()}?item=${item.name[
                locale === 'en' ? 'en' : 'ar'
              ].toLocaleLowerCase()}`}
              key={index}
              className='flex flex-col items-center gap-3 w-full h-full'
            >
              <div className='flex h-[100px]'>
                <Image
                  src={item.image_url}
                  alt={item.name[locale === 'en' ? 'en' : 'ar']}
                  width={100}
                  height={100}
                  className='w-[100px] h-[100px] object-cover'
                />
              </div>
              <h6 className='text-xs text-center'>
                {item.name[locale === 'en' ? 'en' : 'ar']}
              </h6>
            </Link>
          ))}
        </div>
      </CustomTabPanel>
    </div>
  )
}

export default CustomItemsContainer
