"use client"
import { Divider } from '@mui/material'
import CustomTabs from './CustomTabs'
import FilterAndItems from './FilterAndItems/FilterAndItems'
import ItemTypes from './ItemTypes'
import MainSection from './MainSection'
import ShopBySize from './ShopBySize/ShopBySize'
import TiresTypes from './TiresTypes'
import { useState } from 'react'
import OptionMobileBtn from './OptionMobileBtn'

const CategoryName = () => {
    const [value, setValue] = useState(0)
    return (
        <>
            <div className="hidden lg:block">
                <CustomTabs value={value} setValue={setValue} />
                <Divider className='mb-5' />
            </div>
            <MainSection />
            <OptionMobileBtn />
            <div className="hidden lg:block">
                <ShopBySize />
                <TiresTypes />
            </div>
            <div className="custom-container1">
                <div className="hidden lg:block">
                    <ItemTypes />
                </div>
                <FilterAndItems />
            </div>
        </>
    )
}

export default CategoryName
