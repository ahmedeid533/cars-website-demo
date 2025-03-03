'use client'
import FilterAndItems from './FilterAndItems/FilterAndItems'
import ItemTypes from './ItemTypes'
import MainSection from './MainSection'
import TiresTypes from './TiresTypes'
import OptionMobileBtn from './OptionMobileBtn'
import { Category, SubCategory } from '@/types'
import { useLocale } from 'next-intl'

interface ICategoryName {
  category: Category | null | undefined
  hasBrands: boolean
  sub_subCategories: SubCategory[]
  subCategoryName: string
}
const CategoryName = ({
  category,
  hasBrands,
  sub_subCategories,
  subCategoryName
}: ICategoryName) => {
  const locale = useLocale()
  return (
    <>
      <MainSection category={category} />
      <OptionMobileBtn />
      {hasBrands && (
          {/* <ShopBySize /> */}
          <TiresTypes
            brands={sub_subCategories}
            subCategoryName={subCategoryName}
          />
      )}
      <div className='custom-container1'>
        {hasBrands === false && sub_subCategories.length>0 && (
            <ItemTypes sub_subCategories={sub_subCategories} />
        )}
        <FilterAndItems />
      </div>
    </>
  )
}

export default CategoryName
