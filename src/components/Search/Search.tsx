'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import SearchFound from './SearchFound/SearchFound'
import SearchNotFound from './SearchNotFound/SearchNotFound'
import { Category } from '@/types'
import { AllItemsInterface } from '@/libs/get-category-tabs-with-data'

interface ISearch {
  category_tabs: Category[]
  allCategoryItems: AllItemsInterface[]
}
const Search = ({ allCategoryItems, category_tabs }: ISearch) => {
  // const query = useSearchParams()
  // console.log(query.get('car_model'))
  // const [isSearchFound, setSearchFound] = useState(false)
	return <SearchNotFound />;
	// isSearchFound ? (
  //   <SearchFound
  //     car_model={query.get('car_model')}
  //     car_year={query.get('car_year')}
  //     car_series={query.get('car_series')}
  //     category_tabs={category_tabs}
  //     allCategoryItems={allCategoryItems}
  //   />
  // ) : (
  //   <SearchNotFound />
  // )
}

export default Search
