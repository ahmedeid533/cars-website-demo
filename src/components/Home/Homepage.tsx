import { Banner, BannerFooter, Category, Logo } from '@/types'
import Advertisments from './Advertisments/Advertisments'
import CarCollections from './CarCollections/CarCollections'
import CarModels from './CarModels'
import MainSection from './MainSection/MainSection'
import TabsAndItems from './TabsAndItems/TabsAndItems'
import Vehicles from './Vehicles'
import { AllItemsInterface } from '@/libs/get-category-tabs-with-data'

interface IHomepage {
  banners: Banner[]
  logos: Logo[]
  bannerFooter: BannerFooter[]
  mainCategories: Category[]
  category_tabs: Category[]
  allCategoryItems: AllItemsInterface[]
}
const Homepage = ({
  banners,
  logos,
  bannerFooter,
  mainCategories,
  allCategoryItems,
  category_tabs
}: IHomepage) => {
  return (
    <>
      <MainSection banners={banners} />
      <Vehicles />
      <CarCollections mainCategories={mainCategories} />
      <CarModels logos={logos} />
      <TabsAndItems
        category_tabs={category_tabs}
        allCategoryItems={allCategoryItems}
      />
      <Advertisments bannerFooter={bannerFooter} />
    </>
  )
}

export default Homepage
