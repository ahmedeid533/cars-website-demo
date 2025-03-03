import Image from 'next/image'
import CustomTabPanel from './CustomTabPanel'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { SubCategory } from '@/types'
import { memo } from 'react'

interface ICustomItemsContainer {
  value: number
  name: string
  data: SubCategory[]
}
const CustomItemsContainer = ({ value, name, data }: ICustomItemsContainer) => {
  const locale = useLocale()
  return (
    <div className='custom-container1 pt-5'>
      <CustomTabPanel value={value} index={value}>
        <div className='justify-center items-center gap-x-5 gap-y-10 lg:gap-x-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {data &&
            data.length > 0 ?
            data?.map((item, index) => (
              <Link
                title={item.slug}
                href={`/category/${item.slug}?category_id=${value}&sub_category_id=${item.id}`}
                key={index}
                className='flex flex-col items-center gap-3 w-full h-full'
              >
                <div className='flex px-4 h-[200px]'>
                  <Image
                    src={item.image_url}
                    alt={item.name[locale === 'en' ? 'en' : 'ar']}
                    width={400}
                    height={400}
                    className='w-auto h-[200px] object-contain'
                  />
                </div>
                <h6 className='text-xs text-center'>
                  {item.name[locale === 'en' ? 'en' : 'ar']}
                </h6>
              </Link>
            )):<h2>Loading...</h2>}
        </div>
      </CustomTabPanel>
    </div>
  )
}

export default memo(CustomItemsContainer)
