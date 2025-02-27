import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Link from 'next/link'
import { CarContext } from '@/app/[locale]/context/CarContext'
import styles from './MainSectionForm.module.css'
import { useLocale, useTranslations } from 'next-intl'
import SelectInput2 from './SelectInput2'
import { MenuItem } from '@mui/material'
import useRenderCarBrand from '@/hooks/use-render-car-brand'
import useRenderCarYearByBrand from '@/hooks/use-render-car-year-by-brand'
import useRenderCarModelByBrand from '@/hooks/use-render-car-model-by-brand'

interface IMainSectionForm {
  setOpen: React.Dispatch<React.SetStateAction<boolean>> | null
}
const MainSectionForm = ({ setOpen }: IMainSectionForm) => {
  const t = useTranslations('Header')
  const locale = useLocale()
  const { carBrandState, carBrandValue, handleCarBrandChange } =
    useRenderCarBrand()
  const { carModelState, carModelValue, handleCarModelChange } =
    useRenderCarModelByBrand(carBrandValue)
  const { carYearState, carYearValue, handleCarYearChange } =
    useRenderCarYearByBrand(carModelValue)

  const carContext = useContext(CarContext)

  const carBrandName = carBrandState?.find(idx => idx.id === carBrandValue)?.name[
    locale === 'en' ? 'en' : 'ar']
  const carModelName = carModelState?.find(idx => idx.id === carModelValue)?.name[
    locale === 'en' ? 'en' : 'ar']
  const carYearName = carYearState?.find(idx => idx.id === carYearValue)?.year.toString()
  
  const handleSearchCar = () => {
    if (setOpen) setOpen(false)
    const selectedCar = {
      id: Math.random(),
      name: carBrandName as string,
      year: carYearName as string,
      series: carModelName as string,
    }
    carContext?.addCar(selectedCar)
  }
  return (
    <>
      {carModelState && carBrandState && carYearState && (
        <section className={styles['main-section-form']}>
          <div className={styles['main-section-form-container']}>
            <h6 className={styles['form-title']}>
              {t('FIND PARTS FOR YOUR VEHICLE')}
            </h6>
            <div className={styles['input-container']}>
              <SelectInput2
                value={(carBrandValue as number) || ''}
                setValue={handleCarBrandChange}
              >
                {carBrandState?.map((brand, index) => (
                  <MenuItem key={index} value={brand.id}>
                    {brand.name[locale === 'en' ? 'en' : 'ar']}
                  </MenuItem>
                ))}
              </SelectInput2>
              <div className={styles['input-inline-container']}>
                <SelectInput2
                  value={(carModelValue as number) || ''}
                  setValue={handleCarModelChange}
                >
                  {carModelState?.map((brand, index) => (
                    <MenuItem key={index} value={brand.id}>
                      {brand.name[locale === 'en' ? 'en' : 'ar']}
                    </MenuItem>
                  ))}
                </SelectInput2>
                <SelectInput2
                  value={(carYearValue as number) || ''}
                  setValue={handleCarYearChange}
                >
                  {carYearState?.map((brand, index) => (
                    <MenuItem key={index} value={brand.id}>
                      {brand.year}
                    </MenuItem>
                  ))}
                </SelectInput2>
              </div>
              <div className={styles['search-container']}>
                <Link
                  href={`/search?car_Brand=${carBrandName}&car_year=${carYearName}&car_series=${carModelName}&car_Brand_id=${carBrandValue}&car_year_id=${carYearValue}&car_series_id=${carModelValue}`}
                  className={styles['search-button']}
                  onClick={handleSearchCar}
                >
                  <SearchIcon />
                  <span className='capitalize'>{t('search cars')}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default MainSectionForm
