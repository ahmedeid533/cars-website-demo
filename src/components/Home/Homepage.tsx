import { Banner, BannerFooter, Category, Logo } from '@/types'
import Advertisments from './Advertisments/Advertisments'
import CarCollections from './CarCollections/CarCollections'
import CarModels from './CarModels'
import MainSection from './MainSection/MainSection'
import TabsAndItems from './TabsAndItems/TabsAndItems'
import Vehicles from './Vehicles'

interface IHomepage {
  banners: Banner[]
  logos: Logo[]
  bannerFooter: BannerFooter[],
  mainCategories: Category[]
}
const Homepage = ({ banners, logos, bannerFooter,mainCategories }: IHomepage) => {
  return (
    <>
      <MainSection banners={banners} />
      <Vehicles />
      <CarCollections mainCategories={mainCategories}/>
      <CarModels logos={logos} />
      <TabsAndItems />
      <Advertisments bannerFooter={bannerFooter}/>
    </>
  )
}

export default Homepage
