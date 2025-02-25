import React, { useContext, useState } from 'react';
import SelectInput from './SelectInput';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { carModels, carSeries, carYear } from '@/mocks/searchInputs';
import { CarContext } from '@/app/[locale]/context/CarContext';
import styles from './MainSectionForm.module.css';

const MainSectionForm = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> | null }) => {
    const [carModelValue, setCarModelValue] = useState(carModels[0]);
    const [carYearValue, setCarYearValue] = useState(carYear[0]);
    const [carSeriesValue, setCarSeriesValue] = useState(carSeries[0]);

    const carContext = useContext(CarContext);

    const handleSearchCar = () => {
        if (setOpen) setOpen(false);
        const selectedCar = {
            id: Math.random(),
            name: carModelValue,
            year: carYearValue,
            series: carSeriesValue
        };
        carContext?.addCar(selectedCar);
    };
    return (
        <section className={styles['main-section-form']}>
            <div className={styles['main-section-form-container']}>
                <h6 className={styles['form-title']}>FIND PARTS FOR YOUR VEHICLE</h6>
                <div className={styles['input-container']}>
                    <SelectInput data={carModels} value={carModelValue} setValue={setCarModelValue} />
                    <div className={styles['input-inline-container']}>
                        <SelectInput data={carYear} value={carYearValue} setValue={setCarYearValue} />
                        <SelectInput data={carSeries} value={carSeriesValue} setValue={setCarSeriesValue} />

                    </div>
                    <div className={styles['search-container']}>
                        <Link
                            href={`/search?car_model=${carModelValue}&car_year=${carYearValue}&car_series=${carSeriesValue}`}
                            className={styles['search-button']}
                            onClick={handleSearchCar}
                        >
                            <SearchIcon />
                            <span className='capitalize'>search cars</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSectionForm;
