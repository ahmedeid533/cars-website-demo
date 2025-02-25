import React from 'react'
import SortServices from './SortServices'
import DiameterFilter from './DiameterFilter'
import { Divider } from '@mui/material'
import TypeFilter from './TypeFilter'
import LoadIndexFilter from './LoadIndexFilter'
import PriceFilter from './PriceFilter/PriceFilter'
import BrandFilter from './BrandFilter'
import RatingFilter from './RatingFilter'
import AvailabilityFilter from './AvailabilityFilter'

const Filters = () => {
    return (
        <aside className='p-4 rounded border-2 border-custom-black hidden lg:flex flex-col gap-4 overflow-hidden'>
            <SortServices />
            <DiameterFilter />
            <Divider />
            <TypeFilter />
            <Divider />
            <LoadIndexFilter />
            <Divider />
            <PriceFilter />
            <Divider />
            <BrandFilter />
            <Divider />
            <RatingFilter />
            <Divider />
            <AvailabilityFilter />
            <Divider />
            <div className='w-full flex items-center justify-center'>
                <button className='border rounded border-custom-black text-custom-black py-2 w-3/4 font-semibold'>Clear All</button>
            </div>
        </aside>
    )
}

export default Filters
