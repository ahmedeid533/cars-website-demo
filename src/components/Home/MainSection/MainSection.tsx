"use client"
import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MainSectionSlider from './MainSectionSlider'
import SelectInput from '@/components/MainSectionForm/SelectInput'
import Link from 'next/link'
import { carModels, carSeries, carYear } from '@/mocks/searchInputs'
import { CarContext } from '@/app/[locale]/context/CarContext'
import MainSectionForm from '@/components/MainSectionForm/MainSectionForm';

const MainSection = () => {
    const [carModelValue, setCarModelValue] = useState(carModels[0]);
    const [carYearValue, setCarYearValue] = useState(carYear[0]);
    const [carSeriesValue, setCarSeriesValue] = useState(carSeries[0]);

    const carContext = useContext(CarContext);

    const handleSearchCar = () => {
        const selectedCar = {
            id: Math.random(),
            name: carModelValue,
            year: carYearValue,
            series: carSeriesValue
        }
        carContext?.addCar(selectedCar)
    }
    return (
        <main className='relative flex flex-col gap-5 mb-10 lg:mb-52 w-full'>
            <MainSectionSlider />
            <section className='bottom-0 lg:bottom-[-160px] lg:absolute relative flex justify-center items-center w-full h-full lg:h-auto'>
                <MainSectionForm setOpen={null} />
            </section>
        </main>
    )
}

export default MainSection