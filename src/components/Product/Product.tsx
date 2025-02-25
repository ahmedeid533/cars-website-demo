"use client"
import { useState } from 'react';
import CustomTabs from './CustomTabs'
import Links from './Links';
import { Divider } from '@mui/material';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductProps from './ProductProps/ProductProps';
import SimilarProducts from './SimilarProducts';

const Product = () => {
    const [value, setValue] = useState(0);
    return (
        <>
            <CustomTabs value={value} setValue={setValue} />
            <Divider />
            <div className="custom-container1 py-10 flex flex-col gap-10">
                <Links />
                <ProductDetails />
            </div>
            <Divider />
            <ProductProps />
            <Divider />
            <SimilarProducts />
        </>
    )
}

export default Product
