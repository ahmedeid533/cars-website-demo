"use client"
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import SearchFound from './SearchFound/SearchFound';
import SearchNotFound from './SearchNotFound/SearchNotFound';


const Search = () => {
    const query = useSearchParams()
    console.log(query.get('car_model'));
    const [isSearchFound, setSearchFound] = useState(false)
    useEffect(() => {
        if (
            query.get('car_model') === 'Toyota Corolla' &&
            query.get('car_year') === '2007' &&
            query.get('car_series') === '1-Series'
        ) {
            setSearchFound(false)
        } else {
            setSearchFound(true)
        }
    }, [query, isSearchFound])
    return (
        isSearchFound ?
            <SearchFound
                car_model={query.get('car_model')}
                car_year={query.get('car_year')}
                car_series={query.get('car_series')}
            />
            :
            <SearchNotFound />
    )
}

export default Search